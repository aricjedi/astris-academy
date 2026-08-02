import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/server-admin";
import { inviteOrReassignCaseMember } from "@/lib/case-invite";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }

  const { data: callerMember } = await supabase
    .from("case_members")
    .select("role, company_id")
    .eq("user_id", user.id)
    .single();

  if (callerMember?.role !== "org_admin" && callerMember?.role !== "super_admin") {
    return NextResponse.json({ error: "Only an org admin can invite team members" }, { status: 403 });
  }

  if (!callerMember.company_id) {
    return NextResponse.json({ error: "Your account has no associated client org" }, { status: 400 });
  }

  const { email, fullName, role } = (await request.json()) as {
    email: string;
    fullName?: string;
    role: "investigator" | "org_admin";
  };

  if (!email?.trim()) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }
  if (role !== "investigator" && role !== "org_admin") {
    return NextResponse.json({ error: "Role must be investigator or org_admin" }, { status: 400 });
  }

  const admin = createAdminClient();
  const origin = new URL(request.url).origin;

  const result = await inviteOrReassignCaseMember(admin, {
    email: email.trim(),
    fullName: fullName?.trim(),
    role,
    companyId: callerMember.company_id,
    redirectTo: `${origin}/auth/callback?redirect=/cases`,
  });

  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
