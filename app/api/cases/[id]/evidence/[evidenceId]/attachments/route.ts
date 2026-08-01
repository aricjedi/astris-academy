import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string; evidenceId: string }> }
) {
  const { evidenceId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }

  const { storagePath, fileName, contentType, sizeBytes } = (await request.json()) as {
    storagePath: string;
    fileName: string;
    contentType?: string;
    sizeBytes?: number;
  };

  if (!storagePath || !fileName) {
    return NextResponse.json({ error: "storagePath and fileName are required" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("evidence_attachments")
    .insert({
      evidence_item_id: evidenceId,
      storage_path: storagePath,
      file_name: fileName,
      content_type: contentType ?? null,
      size_bytes: sizeBytes ?? null,
      uploaded_by: user.id,
    })
    .select("id")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ id: data.id });
}
