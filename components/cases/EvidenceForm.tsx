"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function EvidenceForm({ caseId }: { caseId: string }) {
  const router = useRouter();
  const [description, setDescription] = useState("");
  const [source, setSource] = useState("");
  const [custodian, setCustodian] = useState("");
  const [chainOfCustodyNotes, setChainOfCustodyNotes] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const res = await fetch(`/api/cases/${caseId}/evidence`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description,
        source,
        custodian,
        chainOfCustodyNotes,
        tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      }),
    });
    const data = await res.json();
    setSubmitting(false);

    if (!res.ok) {
      setError(data.error ?? "Something went wrong");
      return;
    }

    setDescription("");
    setSource("");
    setCustodian("");
    setChainOfCustodyNotes("");
    setTags("");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span className="eyebrow" style={{ color: "var(--slate)" }}>
          Description
        </span>
        <textarea
          required
          rows={2}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 15, fontFamily: "inherit" }}
        />
      </label>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span className="eyebrow" style={{ color: "var(--slate)" }}>
            Source
          </span>
          <input
            type="text"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 15 }}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span className="eyebrow" style={{ color: "var(--slate)" }}>
            Custodian
          </span>
          <input
            type="text"
            value={custodian}
            onChange={(e) => setCustodian(e.target.value)}
            style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 15 }}
          />
        </label>
      </div>
      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span className="eyebrow" style={{ color: "var(--slate)" }}>
          Chain-of-custody notes
        </span>
        <input
          type="text"
          value={chainOfCustodyNotes}
          onChange={(e) => setChainOfCustodyNotes(e.target.value)}
          style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 15 }}
        />
      </label>
      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span className="eyebrow" style={{ color: "var(--slate)" }}>
          Tags (comma separated)
        </span>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 15 }}
        />
      </label>
      {error && <p style={{ color: "#B3261E", fontSize: 14.5 }}>{error}</p>}
      <button type="submit" className="btn" disabled={submitting} style={{ alignSelf: "start" }}>
        {submitting ? "Adding…" : "Add evidence"}
      </button>
    </form>
  );
}
