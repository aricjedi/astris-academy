import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { CaseSubNav } from "@/components/cases/CaseSubNav";
import { AnalysisForm } from "@/components/cases/AnalysisForm";

export default async function CaseAnalysisPage({ params }: { params: Promise<{ caseId: string }> }) {
  const { caseId } = await params;
  const supabase = await createClient();

  const { data: caseRow } = await supabase
    .from("cases")
    .select("case_number, title, status")
    .eq("id", caseId)
    .single();
  if (!caseRow) notFound();

  const { data: evidenceItems } = await supabase
    .from("evidence_items")
    .select("id, description")
    .eq("case_id", caseId)
    .order("collected_at", { ascending: false });

  const { data: entries } = await supabase
    .from("case_analysis_entries")
    .select("id, kind, stance, content, occurred_at, created_at, evidence_item_id")
    .eq("case_id", caseId)
    .order("created_at", { ascending: false });

  const evidenceById = new Map((evidenceItems ?? []).map((e) => [e.id, e.description]));
  const notes = (entries ?? []).filter((e) => e.kind === "note");
  const timeline = (entries ?? [])
    .filter((e) => e.kind === "timeline_event")
    .sort((a, b) => (a.occurred_at ?? "").localeCompare(b.occurred_at ?? ""));

  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 720 }}>
        <CaseSubNav
          caseId={caseId}
          caseNumber={caseRow.case_number}
          title={caseRow.title}
          status={caseRow.status}
          active="analysis"
        />

        <h3 style={{ fontSize: 16, marginBottom: 12 }}>Add finding or timeline event</h3>
        <div className="fact-box" style={{ marginBottom: 32 }}>
          <AnalysisForm caseId={caseId} evidenceItems={evidenceItems ?? []} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div>
            <h3 style={{ fontSize: 16, marginBottom: 12 }}>Findings</h3>
            {notes.length > 0 ? (
              notes.map((n) => (
                <div key={n.id} className="fact-box" style={{ marginBottom: 12, fontSize: 14.5 }}>
                  <p>{n.content}</p>
                  {n.evidence_item_id && (
                    <p style={{ color: "var(--slate)", marginTop: 6, fontSize: 13 }}>
                      {n.stance && <span className="pill" style={{ marginRight: 6 }}>{n.stance}</span>}
                      Linked to: {evidenceById.get(n.evidence_item_id) ?? "evidence item"}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p style={{ color: "var(--slate)" }}>No findings recorded yet.</p>
            )}
          </div>

          <div>
            <h3 style={{ fontSize: 16, marginBottom: 12 }}>Timeline</h3>
            {timeline.length > 0 ? (
              <div className="fact-box">
                {timeline.map((t, i) => (
                  <div
                    key={t.id}
                    style={{
                      padding: "10px 0",
                      borderBottom: i < timeline.length - 1 ? "1px solid var(--line)" : "none",
                      fontSize: 14.5,
                    }}
                  >
                    <div style={{ color: "var(--slate)", fontSize: 13 }}>
                      {t.occurred_at && new Date(t.occurred_at).toLocaleString()}
                    </div>
                    <div>{t.content}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: "var(--slate)" }}>No timeline events yet.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
