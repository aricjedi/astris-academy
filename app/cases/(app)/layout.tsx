import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function CasesLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: member } = await supabase
    .from("case_members")
    .select("role")
    .eq("user_id", user!.id)
    .single();

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <Link className="brand" href="/cases">
            <span className="brand-academy">Case Management</span>
          </Link>
          <nav className="site-nav" style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Link href="/cases">Dashboard</Link>
            <Link href="/cases/new">New case</Link>
            {(member?.role === "org_admin" || member?.role === "super_admin") && (
              <Link href="/cases/admin">Your team</Link>
            )}
            {member?.role === "super_admin" && <Link href="/cases/super-admin">Companies</Link>}
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
