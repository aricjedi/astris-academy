import { createClient } from "@/lib/supabase/server";

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
        <h1 style={{ fontSize: 28, margin: "10px 0 8px" }}>Welcome{profile?.full_name ? `, ${profile.full_name}` : ""}</h1>
        <p style={{ color: "var(--slate)" }}>Role: {profile?.role ?? "unknown"}</p>
      </div>
    </section>
  );
}
