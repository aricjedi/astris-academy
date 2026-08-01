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

  const { action, executiveSummary, findings, disposition, recommendations } = (await request.json()) as {
    action: "save" | "finalize";
    executiveSummary?: string;
    findings?: string;
    disposition?: "substantiated" | "unsubstantiated" | "partially_substantiated" | "inconclusive" | null;
    recommendations?: string;
  };

  if (action === "finalize" && !disposition) {
    return NextResponse.json({ error: "A disposition is required to finalize the report" }, { status: 400 });
  }

  const now = new Date().toISOString();

  const { error: upsertError } = await supabase.from("case_reports").upsert(
    {
      case_id: caseId,
      executive_summary: executiveSummary?.trim() || null,
      findings: findings?.trim() || null,
      disposition: disposition || null,
      recommendations: recommendations?.trim() || null,
      prepared_by: user.id,
      prepared_at: now,
      ...(action === "finalize" ? { finalized_at: now } : {}),
    },
    { onConflict: "case_id" }
  );

  if (upsertError) {
    return NextResponse.json({ error: upsertError.message }, { status: 500 });
  }

  if (action === "finalize") {
    const { data: existing } = await supabase.from("cases").select("status").eq("id", caseId).single();

    const { error: closeError } = await supabase
      .from("cases")
      .update({ status: "closed", closed_at: now, updated_at: now })
      .eq("id", caseId);
    if (closeError) {
      return NextResponse.json({ error: closeError.message }, { status: 500 });
    }

    await supabase.from("case_status_history").insert({
      case_id: caseId,
      from_status: existing?.status ?? "reporting",
      to_status: "closed",
      changed_by: user.id,
      note: "Report finalized; case closed.",
    });
  }

  return NextResponse.json({ success: true });
}
