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

  const { caseType, year, allegationSummary, intakeSource } = (await request.json()) as {
    caseType: string;
    year: number;
    allegationSummary: string;
    intakeSource: string;
  };

  if (!caseType?.trim() || !allegationSummary?.trim() || !intakeSource?.trim()) {
    return NextResponse.json(
      { error: "Case type, allegation summary, and intake source are required" },
      { status: 400 }
    );
  }
  if (!Number.isInteger(year)) {
    return NextResponse.json({ error: "A valid year is required" }, { status: 400 });
  }

  const { data: seq, error: seqError } = await supabase.rpc("next_case_seq");
  if (seqError || seq == null) {
    return NextResponse.json({ error: seqError?.message ?? "Could not assign a case number" }, { status: 500 });
  }
  const caseNumber = `${String(seq).padStart(3, "0")}-${year}-${caseType.trim()}`;

  const { data: created, error } = await supabase
    .from("cases")
    .insert({
      company_id: member.company_id,
      case_number: caseNumber,
      title: caseType.trim(),
      allegation_summary: allegationSummary.trim(),
      case_type: caseType.trim(),
      intake_source: intakeSource.trim(),
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
