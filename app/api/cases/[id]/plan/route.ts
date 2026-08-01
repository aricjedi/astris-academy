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

  const { scopeSummary, custodians, plannedSources, methodologyNotes } = (await request.json()) as {
    scopeSummary?: string;
    custodians?: string;
    plannedSources?: string;
    methodologyNotes?: string;
  };

  const { error } = await supabase.from("case_plans").upsert(
    {
      case_id: caseId,
      scope_summary: scopeSummary?.trim() || null,
      custodians: custodians?.trim() || null,
      planned_sources: plannedSources?.trim() || null,
      methodology_notes: methodologyNotes?.trim() || null,
      updated_by: user.id,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "case_id" }
  );

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
