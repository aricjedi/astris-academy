"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Database } from "@/lib/types/database.types";

type CaseStatus = Database["public"]["Enums"]["case_status"];

const NEXT_STATUS: Partial<Record<CaseStatus, CaseStatus>> = {
  triage: "planning",
  planning: "evidence_collection",
  evidence_collection: "analysis",
  analysis: "reporting",
};

const STATUS_LABEL: Record<CaseStatus, string> = {
  triage: "Triage",
  planning: "Planning",
  evidence_collection: "Evidence Collection",
  analysis: "Analysis",
  reporting: "Reporting",
  closed: "Closed",
};

export function CaseActions({
  caseId,
  status,
  canManage,
  investigators,
  assignedInvestigatorId,
}: {
  caseId: string;
  status: CaseStatus;
  canManage: boolean;
  investigators: { id: string; label: string }[];
  assignedInvestigatorId: string | null;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [assignee, setAssignee] = useState(assignedInvestigatorId ?? "");

  const next = NEXT_STATUS[status];

  async function advance() {
    if (!next) return;
    setBusy(true);
    setError(null);
    const res = await fetch(`/api/cases/${caseId}/transition`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ toStatus: next }),
    });
    const data = await res.json();
    setBusy(false);
    if (!res.ok) {
      setError(data.error ?? "Something went wrong");
      return;
    }
    router.refresh();
  }

  async function assign(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const res = await fetch(`/api/cases/${caseId}/assign`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ investigatorId: assignee || null }),
    });
    const data = await res.json();
    setBusy(false);
    if (!res.ok) {
      setError(data.error ?? "Something went wrong");
      return;
    }
    router.refresh();
  }

  return (
    <div className="fact-box" style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 16 }}>
      {error && <p style={{ color: "#B3261E", fontSize: 14.5 }}>{error}</p>}

      {next && (
        <div>
          <div className="eyebrow" style={{ color: "var(--slate)", marginBottom: 8 }}>
            Advance phase
          </div>
          <button type="button" className="btn" disabled={busy} onClick={advance}>
            Move to {STATUS_LABEL[next]}
          </button>
        </div>
      )}
      {status === "reporting" && (
        <p style={{ fontSize: 14, color: "var(--slate)" }}>
          Finalizing the report on the Report tab closes this case.
        </p>
      )}

      {canManage && (
        <form onSubmit={assign} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div className="eyebrow" style={{ color: "var(--slate)" }}>
            Assigned investigator
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <select
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              style={{ flex: 1, padding: "8px 10px", border: "1px solid var(--line)", borderRadius: "var(--radius)", fontSize: 15 }}
            >
              <option value="">Unassigned</option>
              {investigators.map((inv) => (
                <option key={inv.id} value={inv.id}>
                  {inv.label}
                </option>
              ))}
            </select>
            <button type="submit" className="btn secondary" disabled={busy}>
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
