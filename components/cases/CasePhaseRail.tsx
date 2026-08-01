import type { Database } from "@/lib/types/database.types";

type CaseStatus = Database["public"]["Enums"]["case_status"];

const PHASES: { status: CaseStatus; num: string; name: string }[] = [
  { status: "triage", num: "PHASE 1", name: "Allegation Analysis" },
  { status: "planning", num: "PHASE 2", name: "Planning" },
  { status: "evidence_collection", num: "PHASE 3", name: "Evidence Collection" },
  { status: "analysis", num: "PHASE 4", name: "Analysis" },
  { status: "reporting", num: "PHASE 5", name: "Reporting" },
];

export function CasePhaseRail({ status }: { status: CaseStatus }) {
  const currentIndex = status === "closed" ? PHASES.length : PHASES.findIndex((p) => p.status === status);

  return (
    <div className="case-phase-rail" aria-label="Case phase">
      {PHASES.map((phase, i) => {
        const state = i < currentIndex ? "done" : i === currentIndex ? "current" : "upcoming";
        return (
          <div className={`case-phase ${state}`} key={phase.status}>
            <div className="num">{phase.num}</div>
            <div className="name">{phase.name}</div>
          </div>
        );
      })}
    </div>
  );
}
