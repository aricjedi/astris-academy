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

  const { kind, content, evidenceItemId, stance, occurredAt } = (await request.json()) as {
    kind: "note" | "timeline_event";
    content: string;
    evidenceItemId?: string | null;
    stance?: "supports" | "contradicts" | "neutral" | null;
    occurredAt?: string | null;
  };

  if (!content?.trim()) {
    return NextResponse.json({ error: "Content is required" }, { status: 400 });
  }
  if (kind === "timeline_event" && !occurredAt) {
    return NextResponse.json({ error: "Timeline events need a date" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("case_analysis_entries")
    .insert({
      case_id: caseId,
      kind,
      content: content.trim(),
      evidence_item_id: evidenceItemId || null,
      stance: evidenceItemId ? stance || null : null,
      occurred_at: kind === "timeline_event" ? occurredAt : null,
      author_id: user.id,
    })
    .select("id")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ id: data.id });
}
