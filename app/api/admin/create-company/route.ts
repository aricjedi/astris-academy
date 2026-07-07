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

  const { data: callerProfile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (callerProfile?.role !== "super_admin") {
    return NextResponse.json({ error: "Only a super admin can create companies" }, { status: 403 });
  }

  const { companyName, adminEmail, adminFullName } = await request.json();

  if (!companyName?.trim() || !adminEmail?.trim()) {
    return NextResponse.json({ error: "Company name and admin email are required" }, { status: 400 });
  }

  const admin = createAdminClient();

  const { data: company, error: companyError } = await admin
    .from("companies")
    .insert({ name: companyName.trim(), created_by: user.id })
    .select()
    .single();

  if (companyError) {
    return NextResponse.json({ error: companyError.message }, { status: 500 });
  }

  const { error: inviteError } = await admin.auth.admin.inviteUserByEmail(adminEmail.trim(), {
    data: {
      role: "company_admin",
      company_id: company.id,
      full_name: adminFullName?.trim() || null,
    },
  });

  if (inviteError) {
    return NextResponse.json({ error: inviteError.message }, { status: 500 });
  }

  return NextResponse.json({ company });
}
