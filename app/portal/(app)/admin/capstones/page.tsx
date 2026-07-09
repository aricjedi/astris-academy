import { createClient } from "@/lib/supabase/server";
import { CapstoneReviewActions } from "@/components/portal/CapstoneReviewActions";

export default async function CapstoneReviewPage() {
  const supabase = await createClient();

  // RLS scopes this to the caller's own company (company_admin) or
  // everything (super_admin) — no manual filtering needed.
  const { data: submissions } = await supabase
    .from("capstone_submissions")
    .select("id, submission_text, status, submitted_at, reviewer_notes, user_id")
    .order("submitted_at", { ascending: false });

  const userIds = [...new Set((submissions ?? []).map((s) => s.user_id))];
  const { data: profiles } = userIds.length
    ? await supabase.from("profiles").select("id, full_name, email").in("id", userIds)
    : { data: [] };
  const profileById = new Map((profiles ?? []).map((p) => [p.id, p]));

  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">Capstone Review</span>
        <h1 style={{ fontSize: 28, margin: "10px 0 24px" }}>Capstone submissions</h1>

        {submissions && submissions.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {submissions.map((s) => {
              const profile = profileById.get(s.user_id);
              let sections: Record<string, string> = {};
              try {
                sections = JSON.parse(s.submission_text);
              } catch {
                sections = { text: s.submission_text };
              }
              return (
                <div key={s.id} className="fact-box">
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                    <strong>{profile?.full_name || profile?.email}</strong>
                    <span
                      style={{
                        fontSize: 13,
                        color:
                          s.status === "approved"
                            ? "#1E7A3E"
                            : s.status === "needs_revision"
                              ? "#B3261E"
                              : "var(--slate)",
                      }}
                    >
                      {s.status}
                    </span>
                  </div>
                  {Object.entries(sections).map(([key, value]) => (
                    <div key={key} style={{ marginBottom: 10 }}>
                      <div className="eyebrow" style={{ fontSize: 11 }}>
                        {key}
                      </div>
                      <p style={{ fontSize: 14.5, whiteSpace: "pre-wrap" }}>{value}</p>
                    </div>
                  ))}
                  {s.status !== "approved" && <CapstoneReviewActions submissionId={s.id} />}
                </div>
              );
            })}
          </div>
        ) : (
          <p style={{ color: "var(--slate)" }}>No capstone submissions yet.</p>
        )}
      </div>
    </section>
  );
}
