"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

function AuthCallbackInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function completeSignIn() {
      const redirectTo = searchParams.get("redirect") ?? "/portal";
      const supabase = createClient();

      // Admin-generated links (invites, magic links) use the implicit flow:
      // tokens arrive in the URL hash fragment, which only client-side JS can read.
      const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));
      const accessToken = hashParams.get("access_token");
      const refreshToken = hashParams.get("refresh_token");

      if (accessToken && refreshToken) {
        const { error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });
        if (error) {
          setError(error.message);
          return;
        }
        router.replace(redirectTo);
        router.refresh();
        return;
      }

      // Fallback: a code-based (PKCE) link, if one is ever used.
      const code = searchParams.get("code");
      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (error) {
          setError(error.message);
          return;
        }
        router.replace(redirectTo);
        router.refresh();
        return;
      }

      setError("This sign-in link is invalid or has expired.");
    }

    completeSignIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 420 }}>
        {error ? (
          <>
            <p style={{ color: "#B3261E" }}>{error}</p>
            <p style={{ marginTop: 16 }}>
              <Link href="/login">Back to sign in</Link>
            </p>
          </>
        ) : (
          <p style={{ color: "var(--slate)" }}>Signing you in&hellip;</p>
        )}
      </div>
    </section>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense>
      <AuthCallbackInner />
    </Suspense>
  );
}
