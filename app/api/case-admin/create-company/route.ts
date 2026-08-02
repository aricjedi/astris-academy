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
    .select("role")
    .eq("user_id", user.id)
    .single();

  if (callerMember?.role !== "super_admin") {
    return NextResponse.json({ error: "Only a super admin can add client orgs" }, { status: 403 });
  }

  const { companyId, newCompanyName, adminEmail, adminFullName } = await request.json();

  if (!companyId && !newCompanyName?.trim()) {
    return NextResponse.json({ error: "Pick an existing company or provide a new company name" }, { status: 400 });
  }
  if (!adminEmail?.trim()) {
    return NextResponse.json({ error: "Org admin email is required" }, { status: 400 });
  }

  const admin = createAdminClient();

  let company: { id: string; name: string };
  if (companyId) {
    const { data: existing, error: fetchError } = await admin
      .from("companies")
      .select("id, name")
      .eq("id", companyId)
      .single();
    if (fetchError || !existing) {
      return NextResponse.json({ error: "Company not found" }, { status: 404 });
    }
    company = existing;
  } else {
    const { data: created, error: companyError } = await admin
      .from("companies")
      .insert({ name: newCompanyName.trim(), created_by: user.id })
      .select("id, name")
      .single();
    if (companyError) {
      return NextResponse.json({ error: companyError.message }, { status: 500 });
    }
    company = created;
  }

  const origin = new URL(request.url).origin;
  const result = await inviteOrReassignCaseMember(admin, {
    email: adminEmail.trim(),
    fullName: adminFullName?.trim(),
    role: "org_admin",
    companyId: company.id,
    redirectTo: `${origin}/auth/callback?redirect=/cases`,
  });

  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }

  return NextResponse.json({ company });
}
