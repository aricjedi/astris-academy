import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user!.id)
    .single();

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <Link className="brand" href="/portal">
            <span className="brand-academy">Academy Portal</span>
          </Link>
          <nav className="site-nav" style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Link href="/portal">Dashboard</Link>
            {(profile?.role === "company_admin" || profile?.role === "super_admin") && (
              <Link href="/portal/admin">Your team</Link>
            )}
            {profile?.role === "super_admin" && <Link href="/portal/super-admin">Companies</Link>}
            <span style={{ color: "var(--slate)", fontSize: 14 }}>{user?.email}</span>
            <form action="/auth/sign-out" method="post" style={{ display: "inline" }}>
              <button type="submit" className="btn secondary" style={{ padding: "6px 14px" }}>
                Sign out
              </button>
            </form>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}
