import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// The case app also has its own dedicated domain (agiledesk.astris-integrity.com).
// On that host, bare paths implicitly live under /cases — e.g. "/" serves
// what "/cases" serves on the Academy domain, "/new" serves "/cases/new" —
// via an internal rewrite. The shared auth routes (/login, /auth/*) and
// Next internals are left untouched on every host.
const CASE_APP_HOST_PREFIX = "agiledesk.";

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request });

  const host = request.headers.get("host") ?? "";
  const isCaseAppHost = host.startsWith(CASE_APP_HOST_PREFIX);

  const rawPath = request.nextUrl.pathname;
  const isSharedRoute =
    rawPath.startsWith("/login") || rawPath.startsWith("/auth") || rawPath.startsWith("/api");

  const effectivePath =
    isCaseAppHost && !isSharedRoute && !rawPath.startsWith("/cases")
      ? `/cases${rawPath === "/" ? "" : rawPath}`
      : rawPath;

  const needsAuthCheck = effectivePath.startsWith("/portal") || effectivePath.startsWith("/cases");
  if (!needsAuthCheck) {
    return response;
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", effectivePath);
    return NextResponse.redirect(loginUrl);
  }

  if (effectivePath.startsWith("/cases")) {
    const { data: caseMember } = await supabase
      .from("case_members")
      .select("role")
      .eq("user_id", user.id)
      .single();

    const caseRole = caseMember?.role;

    if (!caseRole) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const casesHome = isCaseAppHost ? "/" : "/cases";

    // super_admin manages client orgs, not a personal caseload — land them
    // on the org roster instead of the investigator-facing dashboard.
    if (effectivePath === "/cases" && caseRole === "super_admin") {
      return NextResponse.redirect(
        new URL(isCaseAppHost ? "/super-admin" : "/cases/super-admin", request.url)
      );
    }

    if (effectivePath.startsWith("/cases/super-admin") && caseRole !== "super_admin") {
      return NextResponse.redirect(new URL(casesHome, request.url));
    }

    if (
      effectivePath.startsWith("/cases/admin") &&
      caseRole !== "org_admin" &&
      caseRole !== "super_admin"
    ) {
      return NextResponse.redirect(new URL(casesHome, request.url));
    }

    if (isCaseAppHost && effectivePath !== rawPath) {
      return NextResponse.rewrite(new URL(effectivePath, request.url));
    }

    return response;
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  const role = profile?.role;

  if (request.nextUrl.pathname.startsWith("/portal/super-admin") && role !== "super_admin") {
    return NextResponse.redirect(new URL("/portal", request.url));
  }

  if (
    request.nextUrl.pathname.startsWith("/portal/admin") &&
    role !== "company_admin" &&
    role !== "super_admin"
  ) {
    return NextResponse.redirect(new URL("/portal", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico|assets/).*)"],
};
