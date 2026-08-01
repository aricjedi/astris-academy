import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

const ORDER = ["triage", "planning", "evidence_collection", "analysis", "reporting", "closed"] as const;

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: caseId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }

  const { toStatus, note } = (await request.json()) as {
    toStatus: (typeof ORDER)[number];
    note?: string;
  };

  if (!ORDER.includes(toStatus)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  const { data: existing } = await supabase.from("cases").select("status").eq("id", caseId).single();
  if (!existing) {
    return NextResponse.json({ error: "Case not found" }, { status: 404 });
  }

  const { error: updateError } = await supabase
    .from("cases")
    .update({ status: toStatus, updated_at: new Date().toISOString() })
    .eq("id", caseId);

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 });
  }

  await supabase.from("case_status_history").insert({
    case_id: caseId,
    from_status: existing.status,
    to_status: toStatus,
    changed_by: user.id,
    note: note?.trim() || null,
  });

  return NextResponse.json({ success: true });
}
