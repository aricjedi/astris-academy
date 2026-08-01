import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/server-admin";
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

  const { data: inviteData, error: inviteError } = await admin.auth.admin.inviteUserByEmail(
    email.trim(),
    {
      data: {
        case_role: role,
        case_company_id: callerMember.company_id,
        full_name: fullName?.trim() || null,
      },
      redirectTo: `${origin}/auth/callback?redirect=/cases`,
    }
  );

  if (inviteError) {
    return NextResponse.json({ error: inviteError.message }, { status: 500 });
  }

  if (inviteData.user) {
    const { error: memberError } = await admin.from("case_members").insert({
      user_id: inviteData.user.id,
      company_id: callerMember.company_id,
      role,
    });
    if (memberError) {
      return NextResponse.json({ error: memberError.message }, { status: 500 });
    }
  }

  return NextResponse.json({ success: true });
}
