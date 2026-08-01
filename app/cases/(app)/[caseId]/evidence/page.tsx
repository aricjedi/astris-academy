import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { CaseSubNav } from "@/components/cases/CaseSubNav";
import { EvidenceForm } from "@/components/cases/EvidenceForm";
import { EvidenceItemCard } from "@/components/cases/EvidenceItemCard";

export default async function CaseEvidencePage({ params }: { params: Promise<{ caseId: string }> }) {
  const { caseId } = await params;
  const supabase = await createClient();

  const { data: caseRow } = await supabase
    .from("cases")
    .select("case_number, title, status, company_id")
    .eq("id", caseId)
    .single();
  if (!caseRow) notFound();

  const { data: items } = await supabase
    .from("evidence_items")
    .select("id, description, source, custodian, chain_of_custody_notes, tags, collected_at")
    .eq("case_id", caseId)
    .order("collected_at", { ascending: false });

  type Attachment = {
    id: string;
    evidence_item_id: string;
    file_name: string;
    storage_path: string;
    content_type: string | null;
    size_bytes: number | null;
  };

  const itemIds = (items ?? []).map((i) => i.id);
  const { data: attachments } = itemIds.length
    ? await supabase
        .from("evidence_attachments")
        .select("id, evidence_item_id, file_name, storage_path, content_type, size_bytes")
        .in("evidence_item_id", itemIds)
    : { data: [] as Attachment[] };

  const attachmentsByItem = new Map<string, Attachment[]>();
  for (const a of attachments ?? []) {
    const list = attachmentsByItem.get(a.evidence_item_id) ?? [];
    list.push(a);
    attachmentsByItem.set(a.evidence_item_id, list);
  }

  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 720 }}>
        <CaseSubNav
          caseId={caseId}
          caseNumber={caseRow.case_number}
          title={caseRow.title}
          status={caseRow.status}
          active="evidence"
        />

        <h3 style={{ fontSize: 16, marginBottom: 12 }}>Add evidence</h3>
        <div className="fact-box" style={{ marginBottom: 32 }}>
          <EvidenceForm caseId={caseId} />
        </div>

        <h3 style={{ fontSize: 16, marginBottom: 12 }}>Evidence log</h3>
        {items && items.length > 0 ? (
          items.map((item) => (
            <EvidenceItemCard
              key={item.id}
              caseId={caseId}
              companyId={caseRow.company_id}
              item={item}
              attachments={attachmentsByItem.get(item.id) ?? []}
            />
          ))
        ) : (
          <p style={{ color: "var(--slate)" }}>No evidence logged yet.</p>
        )}
      </div>
    </section>
  );
}
