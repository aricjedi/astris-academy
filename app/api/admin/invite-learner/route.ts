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
    .select("role, company_id")
    .eq("id", user.id)
    .single();

  if (callerProfile?.role !== "company_admin" && callerProfile?.role !== "super_admin") {
    return NextResponse.json({ error: "Only a company admin can invite learners" }, { status: 403 });
  }

  if (!callerProfile.company_id) {
    return NextResponse.json({ error: "Your account has no associated company" }, { status: 400 });
  }

  const { learnerEmail, learnerFullName } = await request.json();

  if (!learnerEmail?.trim()) {
    return NextResponse.json({ error: "Learner email is required" }, { status: 400 });
  }

  const admin = createAdminClient();

  const { error: inviteError } = await admin.auth.admin.inviteUserByEmail(learnerEmail.trim(), {
    data: {
      role: "learner",
      company_id: callerProfile.company_id,
      full_name: learnerFullName?.trim() || null,
    },
  });

  if (inviteError) {
    return NextResponse.json({ error: inviteError.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
