import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: caseId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }

  const { data: member } = await supabase
    .from("case_members")
    .select("role, company_id")
    .eq("user_id", user.id)
    .single();

  if (member?.role !== "org_admin" && member?.role !== "super_admin") {
    return NextResponse.json({ error: "Only an org admin can assign investigators" }, { status: 403 });
  }

  const { investigatorId } = (await request.json()) as { investigatorId: string | null };

  const { error } = await supabase
    .from("cases")
    .update({ assigned_investigator_id: investigatorId, updated_at: new Date().toISOString() })
    .eq("id", caseId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
