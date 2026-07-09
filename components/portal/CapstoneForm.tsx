"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SECTIONS = [
  { key: "summary", label: "Neutral Working Summary" },
  { key: "plan", label: "Scoped Investigation Plan" },
  { key: "interview", label: "Interview Outline" },
  { key: "findings", label: "Findings Determination" },
  { key: "report", label: "Report Skeleton" },
] as const;

export function CapstoneForm({
  lessonId,
  existingSubmission,
}: {
  lessonId: string;
  existingSubmission: { submission_text: string; status: string; reviewer_notes: string | null } | null;
}) {
  const router = useRouter();
  const [sections, setSections] = useState<Record<string, string>>(() => {
    if (!existingSubmission) return {};
    try {
      return JSON.parse(existingSubmission.submission_text);
    } catch {
      return {};
    }
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const res = await fetch("/api/capstone/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lessonId, submissionText: JSON.stringify(sections) }),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.error ?? "Something went wrong");
      setSubmitting(false);
      return;
    }

    setSuccess(true);
    setSubmitting(false);
    router.refresh();
  }

  if (existingSubmission && existingSubmission.status !== "needs_revision" && !success) {
    return (
      <div className="fact-box" style={{ marginTop: 24 }}>
        <p>
          Your capstone assignment was submitted and is{" "}
          <strong>
            {existingSubmission.status === "approved" ? "approved" : "awaiting review"}
          </strong>
          .
        </p>
        {existingSubmission.reviewer_notes && (
          <p style={{ marginTop: 8, color: "var(--slate)" }}>Reviewer notes: {existingSubmission.reviewer_notes}</p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 20 }}>
      {existingSubmission?.status === "needs_revision" && (
        <div className="fact-box">
          <p style={{ color: "#B3261E" }}>Your reviewer requested revisions:</p>
          <p style={{ marginTop: 8 }}>{existingSubmission.reviewer_notes}</p>
        </div>
      )}
      {SECTIONS.map((section) => (
        <label key={section.key} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span className="eyebrow" style={{ color: "var(--slate)" }}>
            {section.label}
          </span>
          <textarea
            rows={6}
            required
            value={sections[section.key] ?? ""}
            onChange={(e) => setSections((prev) => ({ ...prev, [section.key]: e.target.value }))}
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius)",
              fontFamily: "inherit",
              fontSize: 15,
            }}
          />
        </label>
      ))}
      {error && <p style={{ color: "#B3261E", fontSize: 14.5 }}>{error}</p>}
      {success && <p style={{ color: "#1E7A3E", fontSize: 14.5 }}>Submitted for review.</p>}
      <button type="submit" className="btn" disabled={submitting}>
        {submitting ? "Submitting…" : "Submit capstone assignment"}
      </button>
    </form>
  );
}
