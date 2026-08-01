import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
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

  if (!member?.company_id) {
    return NextResponse.json({ error: "Your account has no associated client org" }, { status: 400 });
  }

  const { title, allegationSummary, caseType, severity, intakeSource } = (await request.json()) as {
    title: string;
    allegationSummary: string;
    caseType?: string;
    severity: "low" | "medium" | "high" | "critical";
    intakeSource?: string;
  };

  if (!title?.trim() || !allegationSummary?.trim()) {
    return NextResponse.json({ error: "Title and allegation summary are required" }, { status: 400 });
  }

  const { data: created, error } = await supabase
    .from("cases")
    .insert({
      company_id: member.company_id,
      title: title.trim(),
      allegation_summary: allegationSummary.trim(),
      case_type: caseType?.trim() || null,
      severity,
      intake_source: intakeSource?.trim() || null,
      created_by: user.id,
    })
    .select("id")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  await supabase.from("case_status_history").insert({
    case_id: created.id,
    from_status: null,
    to_status: "triage",
    changed_by: user.id,
    note: "Case opened.",
  });

  return NextResponse.json({ id: created.id });
}
