"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function InviteLearnerPage() {
  const router = useRouter();
  const [learnerEmail, setLearnerEmail] = useState("");
  const [learnerFullName, setLearnerFullName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    const res = await fetch("/api/admin/invite-learner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ learnerEmail, learnerFullName }),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.error ?? "Something went wrong");
      setSubmitting(false);
      return;
    }

    setSuccess(`Invite sent to ${learnerEmail}.`);
    setLearnerEmail("");
    setLearnerFullName("");
    setSubmitting(false);
    router.refresh();
  }

  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 480 }}>
        <span className="eyebrow">Company Admin</span>
        <h1 style={{ fontSize: 28, margin: "10px 0 24px" }}>Invite a learner</h1>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="eyebrow" style={{ color: "var(--slate)" }}>
              Email
            </span>
            <input
              type="email"
              required
              value={learnerEmail}
              onChange={(e) => setLearnerEmail(e.target.value)}
              style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16 }}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="eyebrow" style={{ color: "var(--slate)" }}>
              Full name (optional)
            </span>
            <input
              type="text"
              value={learnerFullName}
              onChange={(e) => setLearnerFullName(e.target.value)}
              style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16 }}
            />
          </label>
          {error && <p style={{ color: "#B3261E", fontSize: 14.5 }}>{error}</p>}
          {success && <p style={{ color: "#1E7A3E", fontSize: 14.5 }}>{success}</p>}
          <button type="submit" className="btn" disabled={submitting}>
            {submitting ? "Sending…" : "Send invite"}
          </button>
        </form>
        <p style={{ marginTop: 24, fontSize: 14 }}>
          <Link href="/portal/admin">&larr; Back to your team</Link>
        </p>
      </div>
    </section>
  );
}
