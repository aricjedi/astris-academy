import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CasePhaseRail } from "@/components/cases/CasePhaseRail";
import { CaseActions } from "@/components/cases/CaseActions";

export default async function CaseOverviewPage({ params }: { params: Promise<{ caseId: string }> }) {
  const { caseId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: caseRow } = await supabase.from("cases").select("*").eq("id", caseId).single();
  if (!caseRow) notFound();

  const { data: callerMember } = await supabase
    .from("case_members")
    .select("role")
    .eq("user_id", user!.id)
    .single();
  const canManage = callerMember?.role === "org_admin" || callerMember?.role === "super_admin";

  const { data: orgMembers } = await supabase
    .from("case_members")
    .select("user_id, role")
    .eq("company_id", caseRow.company_id);

  const investigatorIds = (orgMembers ?? [])
    .filter((m) => m.role === "investigator" || m.role === "org_admin")
    .map((m) => m.user_id);
  const { data: profiles } = investigatorIds.length
    ? await supabase.from("profiles").select("id, email, full_name").in("id", investigatorIds)
    : { data: [] as { id: string; email: string; full_name: string | null }[] };
  const investigators = (profiles ?? []).map((p) => ({ id: p.id, label: p.full_name || p.email }));

  const assignedProfile = caseRow.assigned_investigator_id
    ? investigators.find((i) => i.id === caseRow.assigned_investigator_id)
    : null;

  const { data: history } = await supabase
    .from("case_status_history")
    .select("to_status, changed_at, note")
    .eq("case_id", caseId)
    .order("changed_at", { ascending: false });

  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">{caseRow.case_number}</span>
        <h1 style={{ fontSize: 28, margin: "10px 0 4px" }}>{caseRow.title}</h1>
        <p style={{ color: "var(--slate)", marginBottom: 8 }}>
          <span className={`pill severity-${caseRow.severity}`}>{caseRow.severity}</span>
          {"  "}
          {caseRow.case_type && <span style={{ marginLeft: 8 }}>{caseRow.case_type}</span>}
        </p>

        <CasePhaseRail status={caseRow.status} />

        <nav style={{ display: "flex", gap: 16, margin: "20px 0", flexWrap: "wrap" }}>
          <Link href={`/cases/${caseId}/plan`}>Planning</Link>
          <Link href={`/cases/${caseId}/evidence`}>Evidence</Link>
          <Link href={`/cases/${caseId}/analysis`}>Analysis</Link>
          <Link href={`/cases/${caseId}/report`}>Report</Link>
        </nav>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 24, alignItems: "start" }}>
          <div className="fact-box">
            <dl>
              <dt>Allegation summary</dt>
              <dd style={{ marginBottom: 12 }}>{caseRow.allegation_summary}</dd>
              <dt>Intake source</dt>
              <dd style={{ marginBottom: 12 }}>{caseRow.intake_source ?? "—"}</dd>
              <dt>Assigned investigator</dt>
              <dd style={{ marginBottom: 12 }}>{assignedProfile?.label ?? "Unassigned"}</dd>
              <dt>Opened</dt>
              <dd>{new Date(caseRow.opened_at).toLocaleDateString()}</dd>
            </dl>
          </div>

          <div>
            <CaseActions
              caseId={caseId}
              status={caseRow.status}
              canManage={canManage}
              investigators={investigators}
              assignedInvestigatorId={caseRow.assigned_investigator_id}
            />
          </div>
        </div>

        {history && history.length > 0 && (
          <div style={{ marginTop: 32 }}>
            <h3 style={{ fontSize: 16, marginBottom: 12 }}>Status history</h3>
            <div className="fact-box">
              {history.map((h, i) => (
                <div
                  key={i}
                  style={{
                    padding: "8px 0",
                    borderBottom: i < history.length - 1 ? "1px solid var(--line)" : "none",
                    fontSize: 14.5,
                  }}
                >
                  <strong>{h.to_status}</strong>{" "}
                  <span style={{ color: "var(--slate)" }}>
                    &middot; {new Date(h.changed_at).toLocaleString()}
                  </span>
                  {h.note && <div style={{ color: "var(--slate)" }}>{h.note}</div>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
