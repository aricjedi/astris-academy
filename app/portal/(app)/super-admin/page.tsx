import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function SuperAdminPage() {
  const supabase = await createClient();
  const { data: companies } = await supabase
    .from("companies")
    .select("id, name, created_at")
    .order("created_at", { ascending: false });

  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">Super Admin</span>
        <h1 style={{ fontSize: 28, margin: "10px 0 8px" }}>Companies</h1>
        <p className="section-intro">Every company with access to Astris Academy.</p>

        <Link className="btn" href="/portal/super-admin/companies/new" style={{ marginBottom: 24, display: "inline-block" }}>
          + New company
        </Link>

        {companies && companies.length > 0 ? (
          <div className="fact-box" style={{ marginTop: 16 }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ textAlign: "left", borderBottom: "1px solid var(--line)" }}>
                  <th style={{ padding: "8px 12px 8px 0" }}>Company</th>
                  <th style={{ padding: "8px 12px" }}>Created</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((c) => (
                  <tr key={c.id} style={{ borderBottom: "1px solid var(--line)" }}>
                    <td style={{ padding: "8px 12px 8px 0" }}>{c.name}</td>
                    <td style={{ padding: "8px 12px", color: "var(--slate)" }}>
                      {new Date(c.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p style={{ color: "var(--slate)" }}>No companies yet.</p>
        )}
      </div>
    </section>
  );
}
