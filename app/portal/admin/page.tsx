import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function AdminRosterPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: callerProfile } = await supabase
    .from("profiles")
    .select("company_id")
    .eq("id", user!.id)
    .single();

  // RLS already scopes this to the caller's own company for company_admin,
  // and to everything for super_admin — no manual filtering needed.
  const { data: roster } = await supabase
    .from("profiles")
    .select("id, email, full_name, role, created_at")
    .eq("company_id", callerProfile?.company_id ?? "")
    .order("created_at", { ascending: false });

  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">Company Admin</span>
        <h1 style={{ fontSize: 28, margin: "10px 0 8px" }}>Your team</h1>
        <p className="section-intro">Everyone at your company with access to Astris Academy.</p>

        <Link className="btn" href="/portal/admin/invite" style={{ marginBottom: 24, display: "inline-block" }}>
          + Invite a learner
        </Link>

        {roster && roster.length > 0 ? (
          <div className="fact-box" style={{ marginTop: 16 }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ textAlign: "left", borderBottom: "1px solid var(--line)" }}>
                  <th style={{ padding: "8px 12px 8px 0" }}>Name</th>
                  <th style={{ padding: "8px 12px" }}>Email</th>
                  <th style={{ padding: "8px 12px" }}>Role</th>
                  <th style={{ padding: "8px 12px" }}>Joined</th>
                </tr>
              </thead>
              <tbody>
                {roster.map((r) => (
                  <tr key={r.id} style={{ borderBottom: "1px solid var(--line)" }}>
                    <td style={{ padding: "8px 12px 8px 0" }}>{r.full_name ?? "—"}</td>
                    <td style={{ padding: "8px 12px" }}>{r.email}</td>
                    <td style={{ padding: "8px 12px" }}>{r.role}</td>
                    <td style={{ padding: "8px 12px", color: "var(--slate)" }}>
                      {new Date(r.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p style={{ color: "var(--slate)" }}>No one on your team yet.</p>
        )}
      </div>
    </section>
  );
}
