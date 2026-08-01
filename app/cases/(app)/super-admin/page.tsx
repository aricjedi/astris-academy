import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function CasesSuperAdminPage() {
  const supabase = await createClient();

  const { data: companies } = await supabase
    .from("companies")
    .select("id, name, created_at")
    .order("created_at", { ascending: false });

  const { data: members } = await supabase.from("case_members").select("company_id, role");

  const orgCounts = new Map<string, { org_admins: number; investigators: number }>();
  for (const m of members ?? []) {
    if (!m.company_id) continue;
    const entry = orgCounts.get(m.company_id) ?? { org_admins: 0, investigators: 0 };
    if (m.role === "org_admin") entry.org_admins += 1;
    if (m.role === "investigator") entry.investigators += 1;
    orgCounts.set(m.company_id, entry);
  }

  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">Super Admin</span>
        <h1 style={{ fontSize: 28, margin: "10px 0 8px" }}>Client organizations</h1>
        <p className="section-intro">Every company with access to case management.</p>

        <Link
          className="btn"
          href="/cases/super-admin/companies/new"
          style={{ marginBottom: 24, display: "inline-block" }}
        >
          + Add client org
        </Link>

        {companies && companies.length > 0 ? (
          <div className="fact-box" style={{ marginTop: 16 }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ textAlign: "left", borderBottom: "1px solid var(--line)" }}>
                  <th style={{ padding: "8px 12px 8px 0" }}>Company</th>
                  <th style={{ padding: "8px 12px" }}>Org admins</th>
                  <th style={{ padding: "8px 12px" }}>Investigators</th>
                  <th style={{ padding: "8px 12px" }}>Client since</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((c) => {
                  const counts = orgCounts.get(c.id) ?? { org_admins: 0, investigators: 0 };
                  return (
                    <tr key={c.id} style={{ borderBottom: "1px solid var(--line)" }}>
                      <td style={{ padding: "8px 12px 8px 0" }}>{c.name}</td>
                      <td style={{ padding: "8px 12px" }}>{counts.org_admins}</td>
                      <td style={{ padding: "8px 12px" }}>{counts.investigators}</td>
                      <td style={{ padding: "8px 12px", color: "var(--slate)" }}>
                        {new Date(c.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <p style={{ color: "var(--slate)" }}>No client organizations yet.</p>
        )}
      </div>
    </section>
  );
}
