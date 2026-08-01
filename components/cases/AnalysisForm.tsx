"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AnalysisForm({
  caseId,
  evidenceItems,
}: {
  caseId: string;
  evidenceItems: { id: string; description: string }[];
}) {
  const router = useRouter();
  const [kind, setKind] = useState<"note" | "timeline_event">("note");
  const [content, setContent] = useState("");
  const [evidenceItemId, setEvidenceItemId] = useState("");
  const [stance, setStance] = useState<"supports" | "contradicts" | "neutral">("neutral");
  const [occurredAt, setOccurredAt] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const res = await fetch(`/api/cases/${caseId}/analysis`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind,
        content,
        evidenceItemId: evidenceItemId || null,
        stance,
        occurredAt: kind === "timeline_event" ? occurredAt : null,
      }),
    });
    const data = await res.json();
    setSubmitting(false);

    if (!res.ok) {
      setError(data.error ?? "Something went wrong");
      return;
    }

    setContent("");
    setEvidenceItemId("");
    setOccurredAt("");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span className="eyebrow" style={{ color: "var(--slate)" }}>
          Entry type
        </span>
        <select
          value={kind}
          onChange={(e) => setKind(e.target.value as typeof kind)}
          style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 15 }}
        >
          <option value="note">Finding / note</option>
          <option value="timeline_event">Timeline event</option>
        </select>
      </label>

      {kind === "timeline_event" && (
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span className="eyebrow" style={{ color: "var(--slate)" }}>
            Date/time it occurred
          </span>
          <input
            type="datetime-local"
            required
            value={occurredAt}
            onChange={(e) => setOccurredAt(e.target.value)}
            style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 15 }}
          />
        </label>
      )}

      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span className="eyebrow" style={{ color: "var(--slate)" }}>
          {kind === "timeline_event" ? "What happened" : "Finding"}
        </span>
        <textarea
          required
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 15, fontFamily: "inherit" }}
        />
      </label>

      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span className="eyebrow" style={{ color: "var(--slate)" }}>
          Linked evidence (optional)
        </span>
        <select
          value={evidenceItemId}
          onChange={(e) => setEvidenceItemId(e.target.value)}
          style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 15 }}
        >
          <option value="">— None —</option>
          {evidenceItems.map((ev) => (
            <option key={ev.id} value={ev.id}>
              {ev.description.slice(0, 60)}
            </option>
          ))}
        </select>
      </label>

      {evidenceItemId && (
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span className="eyebrow" style={{ color: "var(--slate)" }}>
            Stance toward the allegation
          </span>
          <select
            value={stance}
            onChange={(e) => setStance(e.target.value as typeof stance)}
            style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 15 }}
          >
            <option value="supports">Supports</option>
            <option value="contradicts">Contradicts</option>
            <option value="neutral">Neutral</option>
          </select>
        </label>
      )}

      {error && <p style={{ color: "#B3261E", fontSize: 14.5 }}>{error}</p>}
      <button type="submit" className="btn" disabled={submitting} style={{ alignSelf: "start" }}>
        {submitting ? "Adding…" : "Add entry"}
      </button>
    </form>
  );
}
