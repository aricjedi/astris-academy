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

  const { description, source, custodian, chainOfCustodyNotes, tags } = (await request.json()) as {
    description: string;
    source?: string;
    custodian?: string;
    chainOfCustodyNotes?: string;
    tags?: string[];
  };

  if (!description?.trim()) {
    return NextResponse.json({ error: "Description is required" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("evidence_items")
    .insert({
      case_id: caseId,
      description: description.trim(),
      source: source?.trim() || null,
      custodian: custodian?.trim() || null,
      chain_of_custody_notes: chainOfCustodyNotes?.trim() || null,
      tags: tags?.filter((t) => t.trim()) ?? [],
      collected_by: user.id,
    })
    .select("id")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ id: data.id });
}
