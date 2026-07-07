import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function PortalDashboard() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("profiles")
    .select("role, full_name, company_id")
    .eq("id", user!.id)
    .single();

  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">Astris Academy</span>
        <h1 style={{ fontSize: 28, margin: "10px 0 8px" }}>
          Welcome{profile?.full_name ? `, ${profile.full_name}` : ""}
        </h1>
        <p style={{ color: "var(--slate)" }}>Role: {profile?.role ?? "unknown"}</p>

        {profile?.role === "super_admin" && (
          <p style={{ marginTop: 24 }}>
            <Link className="btn" href="/portal/super-admin">
              Manage companies
            </Link>
          </p>
        )}
        {(profile?.role === "company_admin" || profile?.role === "super_admin") && (
          <p style={{ marginTop: 12 }}>
            <Link className="btn secondary" href="/portal/admin">
              View your team
            </Link>
          </p>
        )}
        {profile?.role === "learner" && (
          <p style={{ marginTop: 24, color: "var(--slate)" }}>
            Course content is coming soon — check back shortly.
          </p>
        )}
      </div>
    </section>
  );
}
