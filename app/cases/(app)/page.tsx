import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { CASE_APP_NAME } from "@/lib/content/case-brand";

const STATUS_LABEL: Record<string, string> = {
  triage: "Triage",
  planning: "Planning",
  evidence_collection: "Evidence Collection",
  analysis: "Analysis",
  reporting: "Reporting",
  closed: "Closed",
};

export default async function CasesDashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: member } = await supabase
    .from("case_members")
    .select("role, company_id")
    .eq("user_id", user!.id)
    .single();

  const { data: company } = member?.company_id
    ? await supabase.from("companies").select("name").eq("id", member.company_id).single()
    : { data: null };

  const { data: cases } = await supabase
    .from("cases")
    .select("id, case_number, title, severity, status, opened_at")
    .order("opened_at", { ascending: false });

  const openCounts = new Map<string, number>();
  for (const c of cases ?? []) {
    openCounts.set(c.status, (openCounts.get(c.status) ?? 0) + 1);
  }

  const isInvestigator = member?.role === "investigator";
  let orgActiveCount: number | null = null;
  if (isInvestigator) {
    const { data } = await supabase.rpc("case_org_active_count");
    orgActiveCount = data ?? 0;
  }

  const subtitle =
    member?.role === "super_admin"
      ? "Every case across every client organization, by phase."
      : isInvestigator
        ? "Every case you're running, by phase."
        : "Every case your organization is running, by phase.";

  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">{company?.name ?? CASE_APP_NAME}</span>
        <h1 style={{ fontSize: 28, margin: "10px 0 8px" }}>Investigator Desk</h1>
        <p className="section-intro">{subtitle}</p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "8px 0 24px" }}>
          {Object.entries(STATUS_LABEL)
            .filter(([key]) => key !== "closed")
            .map(([key, label]) => (
              <div key={key} className="fact-box" style={{ padding: "12px 18px", minWidth: 130 }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: "var(--navy)" }}>
                  {openCounts.get(key) ?? 0}
                </div>
                <div style={{ fontSize: 12.5, color: "var(--slate)" }}>{label}</div>
              </div>
            ))}
          {isInvestigator && (
            <div className="fact-box" style={{ padding: "12px 18px", minWidth: 170 }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: "var(--navy)" }}>{orgActiveCount}</div>
              <div style={{ fontSize: 12.5, color: "var(--slate)" }}>Active org-wide</div>
            </div>
          )}
        </div>

        <Link className="btn" href="/cases/new" style={{ marginBottom: 24, display: "inline-block" }}>
          + New case
        </Link>

        {cases && cases.length > 0 ? (
          <div className="fact-box" style={{ marginTop: 16 }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ textAlign: "left", borderBottom: "1px solid var(--line)" }}>
                  <th style={{ padding: "8px 12px 8px 0" }}>Case #</th>
                  <th style={{ padding: "8px 12px" }}>Title</th>
                  <th style={{ padding: "8px 12px" }}>Severity</th>
                  <th style={{ padding: "8px 12px" }}>Phase</th>
                  <th style={{ padding: "8px 12px" }}>Opened</th>
                </tr>
              </thead>
              <tbody>
                {cases.map((c) => (
                  <tr key={c.id} style={{ borderBottom: "1px solid var(--line)" }}>
                    <td style={{ padding: "8px 12px 8px 0" }}>
                      <Link href={`/cases/${c.id}`}>{c.case_number}</Link>
                    </td>
                    <td style={{ padding: "8px 12px" }}>{c.title}</td>
                    <td style={{ padding: "8px 12px" }}>
                      <span className={`pill severity-${c.severity}`}>{c.severity}</span>
                    </td>
                    <td style={{ padding: "8px 12px" }}>{STATUS_LABEL[c.status]}</td>
                    <td style={{ padding: "8px 12px", color: "var(--slate)" }}>
                      {new Date(c.opened_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p style={{ color: "var(--slate)" }}>No cases yet.</p>
        )}
      </div>
    </section>
  );
}
