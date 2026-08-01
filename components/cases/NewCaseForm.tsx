"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function NewCaseForm({ previewSeq, years }: { previewSeq: number; years: number[] }) {
  const router = useRouter();
  const [caseType, setCaseType] = useState("");
  const [year, setYear] = useState(years[0]);
  const [allegationSummary, setAllegationSummary] = useState("");
  const [intakeSource, setIntakeSource] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const previewLabel = String(previewSeq).padStart(3, "0");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const res = await fetch("/api/cases/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ caseType, year, allegationSummary, intakeSource }),
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
          <div>
            <span className="eyebrow" style={{ color: "var(--slate)" }}>
              Case number
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
              <div
                title="Auto-assigned register number"
                style={{
                  padding: "10px 12px",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius)",
                  fontSize: 16,
                  background: "var(--paper)",
                  color: "var(--slate)",
                  minWidth: 64,
                  textAlign: "center",
                }}
              >
                {previewLabel}
              </div>
              <span style={{ color: "var(--slate)" }}>-</span>
              <select
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16 }}
              >
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
              <span style={{ color: "var(--slate)" }}>-</span>
              <input
                type="text"
                required
                placeholder="Case type, e.g. inappropriate behavior"
                value={caseType}
                onChange={(e) => setCaseType(e.target.value)}
                style={{ flex: 1, padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16 }}
              />
            </div>
            <p style={{ fontSize: 12.5, color: "var(--slate)", marginTop: 6 }}>
              The register number and year are set automatically. Case type is required — it becomes
              part of the case number (e.g. &ldquo;{previewLabel}-{year}-Inappropriate Behavior&rdquo;).
            </p>
          </div>

          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="eyebrow" style={{ color: "var(--slate)" }}>
              Allegation summary
            </span>
            <span style={{ fontSize: 13, color: "var(--slate)", fontStyle: "italic" }}>
              e.g. &ldquo;On <strong>DATE</strong>, the organization received a complaint or report from{" "}
              <strong>PERSON</strong>, alleging &hellip;&rdquo;
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
              Intake source
            </span>
            <input
              type="text"
              required
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
          <Link href="/cases">&larr; Back to Investigator Desk</Link>
        </p>
      </div>
    </section>
  );
}
