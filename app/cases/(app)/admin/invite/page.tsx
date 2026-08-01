"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function InviteTeamMemberPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState<"investigator" | "org_admin">("investigator");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    const res = await fetch("/api/case-admin/invite-member", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, fullName, role }),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.error ?? "Something went wrong");
      setSubmitting(false);
      return;
    }

    setSuccess(`Invite sent to ${email}.`);
    setEmail("");
    setFullName("");
    setSubmitting(false);
    router.refresh();
  }

  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 480 }}>
        <span className="eyebrow">Org Admin</span>
        <h1 style={{ fontSize: 28, margin: "10px 0 24px" }}>Invite a team member</h1>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="eyebrow" style={{ color: "var(--slate)" }}>
              Email
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16 }}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="eyebrow" style={{ color: "var(--slate)" }}>
              Full name (optional)
            </span>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16 }}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="eyebrow" style={{ color: "var(--slate)" }}>
              Role
            </span>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as "investigator" | "org_admin")}
              style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16 }}
            >
              <option value="investigator">Investigator</option>
              <option value="org_admin">Org admin</option>
            </select>
          </label>
          {error && <p style={{ color: "#B3261E", fontSize: 14.5 }}>{error}</p>}
          {success && <p style={{ color: "#1E7A3E", fontSize: 14.5 }}>{success}</p>}
          <button type="submit" className="btn" disabled={submitting}>
            {submitting ? "Sending…" : "Send invite"}
          </button>
        </form>
        <p style={{ marginTop: 24, fontSize: 14 }}>
          <Link href="/cases/admin">&larr; Back to your team</Link>
        </p>
      </div>
    </section>
  );
}
