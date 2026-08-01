"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Disposition = "substantiated" | "unsubstantiated" | "partially_substantiated" | "inconclusive";

export function ReportForm({
  caseId,
  initial,
  isFinalized,
}: {
  caseId: string;
  initial: {
    executive_summary: string | null;
    findings: string | null;
    disposition: Disposition | null;
    recommendations: string | null;
  } | null;
  isFinalized: boolean;
}) {
  const router = useRouter();
  const [executiveSummary, setExecutiveSummary] = useState(initial?.executive_summary ?? "");
  const [findings, setFindings] = useState(initial?.findings ?? "");
  const [disposition, setDisposition] = useState<Disposition | "">(initial?.disposition ?? "");
  const [recommendations, setRecommendations] = useState(initial?.recommendations ?? "");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function submit(action: "save" | "finalize") {
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    const res = await fetch(`/api/cases/${caseId}/report`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action,
        executiveSummary,
        findings,
        disposition: disposition || null,
        recommendations,
      }),
    });
    const data = await res.json();
    setSubmitting(false);

    if (!res.ok) {
      setError(data.error ?? "Something went wrong");
      return;
    }

    if (action === "finalize") {
      router.push(`/cases/report/${caseId}`);
      return;
    }
    setSuccess("Draft saved.");
    router.refresh();
  }

  if (isFinalized) {
    return (
      <div className="fact-box">
        <p style={{ marginBottom: 12 }}>This case&rsquo;s report has been finalized and the case is closed.</p>
        <Link className="btn" href={`/cases/report/${caseId}`}>
          View printable report
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit("save");
      }}
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
    >
      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span className="eyebrow" style={{ color: "var(--slate)" }}>
          Executive summary
        </span>
        <textarea
          rows={3}
          value={executiveSummary}
          onChange={(e) => setExecutiveSummary(e.target.value)}
          style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16, fontFamily: "inherit" }}
        />
      </label>
      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span className="eyebrow" style={{ color: "var(--slate)" }}>
          Findings
        </span>
        <textarea
          rows={5}
          value={findings}
          onChange={(e) => setFindings(e.target.value)}
          placeholder="Link every finding to the evidence that supports it."
          style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16, fontFamily: "inherit" }}
        />
      </label>
      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span className="eyebrow" style={{ color: "var(--slate)" }}>
          Disposition
        </span>
        <select
          value={disposition}
          onChange={(e) => setDisposition(e.target.value as Disposition)}
          style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16 }}
        >
          <option value="">— Not yet determined —</option>
          <option value="substantiated">Substantiated</option>
          <option value="unsubstantiated">Unsubstantiated</option>
          <option value="partially_substantiated">Partially substantiated</option>
          <option value="inconclusive">Inconclusive</option>
        </select>
      </label>
      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span className="eyebrow" style={{ color: "var(--slate)" }}>
          Recommendations
        </span>
        <textarea
          rows={3}
          value={recommendations}
          onChange={(e) => setRecommendations(e.target.value)}
          style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 16, fontFamily: "inherit" }}
        />
      </label>
      {error && <p style={{ color: "#B3261E", fontSize: 14.5 }}>{error}</p>}
      {success && <p style={{ color: "#1E7A3E", fontSize: 14.5 }}>{success}</p>}
      <div style={{ display: "flex", gap: 12 }}>
        <button type="submit" className="btn secondary" disabled={submitting}>
          {submitting ? "Saving…" : "Save draft"}
        </button>
        <button
          type="button"
          className="btn"
          disabled={submitting || !disposition}
          onClick={() => submit("finalize")}
        >
          Finalize & close case
        </button>
      </div>
    </form>
  );
}
