import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function CasesAdminRosterPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: callerMember } = await supabase
    .from("case_members")
    .select("company_id")
    .eq("user_id", user!.id)
    .single();

  const { data: roster } = await supabase
    .from("case_members")
    .select("id, user_id, role, created_at")
    .eq("company_id", callerMember?.company_id ?? "")
    .order("created_at", { ascending: false });

  const userIds = (roster ?? []).map((r) => r.user_id);
  const { data: profiles } = userIds.length
    ? await supabase.from("profiles").select("id, email, full_name").in("id", userIds)
    : { data: [] as { id: string; email: string; full_name: string | null }[] };
  const profileById = new Map((profiles ?? []).map((p) => [p.id, p]));

  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">Org Admin</span>
        <h1 style={{ fontSize: 28, margin: "10px 0 8px" }}>Your team</h1>
        <p className="section-intro">Everyone at your organization with access to case management.</p>

        <Link className="btn" href="/cases/admin/invite" style={{ marginBottom: 24, display: "inline-block" }}>
          + Invite a team member
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
                {roster.map((r) => {
                  const p = profileById.get(r.user_id);
                  return (
                    <tr key={r.id} style={{ borderBottom: "1px solid var(--line)" }}>
                      <td style={{ padding: "8px 12px 8px 0" }}>{p?.full_name ?? "—"}</td>
                      <td style={{ padding: "8px 12px" }}>{p?.email ?? "—"}</td>
                      <td style={{ padding: "8px 12px" }}>{r.role}</td>
                      <td style={{ padding: "8px 12px", color: "var(--slate)" }}>
                        {new Date(r.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  );
                })}
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
