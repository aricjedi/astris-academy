"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function PlanForm({
  caseId,
  initial,
}: {
  caseId: string;
  initial: {
    scope_summary: string | null;
    custodians: string | null;
    planned_sources: string | null;
    methodology_notes: string | null;
  } | null;
}) {
  const router = useRouter();
  const [scopeSummary, setScopeSummary] = useState(initial?.scope_summary ?? "");
  const [custodians, setCustodians] = useState(initial?.custodians ?? "");
  const [plannedSources, setPlannedSources] = useState(initial?.planned_sources ?? "");
  const [methodologyNotes, setMethodologyNotes] = useState(initial?.methodology_notes ?? "");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    const res = await fetch(`/api/cases/${caseId}/plan`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ scopeSummary, custodians, plannedSources, methodologyNotes }),
    });
    const data = await res.json();
    setSubmitting(false);

    if (!res.ok) {
      setError(data.error ?? "Something went wrong");
      return;
    }
    setSuccess(true);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span className="eyebrow" style={{ color: "var(--slate)" }}>
          Scope
        </span>
        <textarea
          rows={3}
          value={scopeSummary}
          onChange={(e) => setScopeSummary(e.target.value)}
          placeholder="What's in scope for this investigation, and what's explicitly out of scope?"
          style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16, fontFamily: "inherit" }}
        />
      </label>
      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span className="eyebrow" style={{ color: "var(--slate)" }}>
          Custodians
        </span>
        <textarea
          rows={2}
          value={custodians}
          onChange={(e) => setCustodians(e.target.value)}
          placeholder="People or systems holding relevant information"
          style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16, fontFamily: "inherit" }}
        />
      </label>
      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span className="eyebrow" style={{ color: "var(--slate)" }}>
          Planned sources
        </span>
        <textarea
          rows={2}
          value={plannedSources}
          onChange={(e) => setPlannedSources(e.target.value)}
          placeholder="Documents, data, interviews you plan to pursue"
          style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16, fontFamily: "inherit" }}
        />
      </label>
      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span className="eyebrow" style={{ color: "var(--slate)" }}>
          Methodology notes
        </span>
        <textarea
          rows={3}
          value={methodologyNotes}
          onChange={(e) => setMethodologyNotes(e.target.value)}
          placeholder="Approach, interview order, risk/timeline considerations"
          style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16, fontFamily: "inherit" }}
        />
      </label>
      {error && <p style={{ color: "#B3261E", fontSize: 14.5 }}>{error}</p>}
      {success && <p style={{ color: "#1E7A3E", fontSize: 14.5 }}>Plan saved.</p>}
      <button type="submit" className="btn" disabled={submitting} style={{ alignSelf: "start" }}>
        {submitting ? "Saving…" : "Save plan"}
      </button>
    </form>
  );
}
