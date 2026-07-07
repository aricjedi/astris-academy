import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <Link className="brand" href="/portal">
            <span className="brand-academy">Academy Portal</span>
          </Link>
          <nav className="site-nav">
            <span style={{ marginRight: 16, color: "var(--slate)", fontSize: 14 }}>
              {user?.email}
            </span>
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
