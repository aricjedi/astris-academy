import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request });

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
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (request.nextUrl.pathname.startsWith("/cases")) {
    const { data: caseMember } = await supabase
      .from("case_members")
      .select("role")
      .eq("user_id", user.id)
      .single();

    const caseRole = caseMember?.role;

    if (!caseRole) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (request.nextUrl.pathname.startsWith("/cases/super-admin") && caseRole !== "super_admin") {
      return NextResponse.redirect(new URL("/cases", request.url));
    }

    if (
      request.nextUrl.pathname.startsWith("/cases/admin") &&
      caseRole !== "org_admin" &&
      caseRole !== "super_admin"
    ) {
      return NextResponse.redirect(new URL("/cases", request.url));
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
  matcher: ["/portal/:path*", "/cases/:path*"],
};
