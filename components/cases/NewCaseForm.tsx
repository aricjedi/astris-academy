"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function NewCaseForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [allegationSummary, setAllegationSummary] = useState("");
  const [caseType, setCaseType] = useState("");
  const [severity, setSeverity] = useState<"low" | "medium" | "high" | "critical">("medium");
  const [intakeSource, setIntakeSource] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const res = await fetch("/api/cases/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, allegationSummary, caseType, severity, intakeSource }),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.error ?? "Something went wrong");
      setSubmitting(false);
      return;
    }

    router.push(`/cases/${data.id}`);
    router.refresh();
  }

  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 560 }}>
        <span className="eyebrow">Phase 1 &middot; Allegation Analysis</span>
        <h1 style={{ fontSize: 28, margin: "10px 0 24px" }}>Open a new case</h1>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="eyebrow" style={{ color: "var(--slate)" }}>
              Case title
            </span>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16 }}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="eyebrow" style={{ color: "var(--slate)" }}>
              Allegation summary
            </span>
            <textarea
              required
              rows={4}
              value={allegationSummary}
              onChange={(e) => setAllegationSummary(e.target.value)}
              style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16, fontFamily: "inherit" }}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="eyebrow" style={{ color: "var(--slate)" }}>
              Case type (optional)
            </span>
            <input
              type="text"
              placeholder="e.g. harassment, fraud, conflict of interest"
              value={caseType}
              onChange={(e) => setCaseType(e.target.value)}
              style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16 }}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="eyebrow" style={{ color: "var(--slate)" }}>
              Severity
            </span>
            <select
              value={severity}
              onChange={(e) => setSeverity(e.target.value as typeof severity)}
              style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16 }}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="eyebrow" style={{ color: "var(--slate)" }}>
              Intake source (optional)
            </span>
            <input
              type="text"
              placeholder="e.g. hotline report, manager escalation, self-report"
              value={intakeSource}
              onChange={(e) => setIntakeSource(e.target.value)}
              style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16 }}
            />
          </label>
          {error && <p style={{ color: "#B3261E", fontSize: 14.5 }}>{error}</p>}
          <button type="submit" className="btn" disabled={submitting}>
            {submitting ? "Opening…" : "Open case"}
          </button>
        </form>
        <p style={{ marginTop: 24, fontSize: 14 }}>
          <Link href="/cases">&larr; Back to docket</Link>
        </p>
      </div>
    </section>
  );
}
