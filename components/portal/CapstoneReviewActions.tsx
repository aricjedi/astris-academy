"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function CapstoneReviewActions({ submissionId }: { submissionId: string }) {
  const router = useRouter();
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function review(decision: "approved" | "needs_revision") {
    setSubmitting(true);
    setError(null);

    const res = await fetch("/api/admin/review-capstone", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ submissionId, decision, reviewerNotes: notes.trim() || undefined }),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.error ?? "Something went wrong");
      setSubmitting(false);
      return;
    }

    setSubmitting(false);
    router.refresh();
  }

  return (
    <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
      <textarea
        rows={2}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Reviewer notes (optional, required if requesting revisions)"
        style={{
          padding: "8px 10px",
          border: "1px solid var(--line)",
          borderRadius: "var(--radius)",
          fontFamily: "inherit",
          fontSize: 14,
        }}
      />
      {error && <p style={{ color: "#B3261E", fontSize: 13.5 }}>{error}</p>}
      <div style={{ display: "flex", gap: 8 }}>
        <button
          type="button"
          className="btn"
          disabled={submitting}
          onClick={() => review("approved")}
          style={{ padding: "6px 14px", fontSize: 14 }}
        >
          Approve
        </button>
        <button
          type="button"
          className="btn secondary"
          disabled={submitting}
          onClick={() => review("needs_revision")}
          style={{ padding: "6px 14px", fontSize: 14 }}
        >
          Request revisions
        </button>
      </div>
    </div>
  );
}
