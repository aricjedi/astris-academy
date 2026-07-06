const PHASES = [
  { num: "PHASE 1", name: "Allegation Analysis", desc: "Frame the concern against policy and law before anything else moves." },
  { num: "PHASE 2", name: "Planning", desc: "Scope, stakeholders, sources, milestones, and risk — before evidence." },
  { num: "PHASE 3", name: "Evidence Collection", desc: "Documents, data, and interviews gathered so they hold up later." },
  { num: "PHASE 4", name: "Analysis", desc: "Corroboration, credibility, and findings the evidence can carry." },
  { num: "PHASE 5", name: "Reporting", desc: "Defensible, factual reports that link every finding to evidence." },
];

export function PhaseRail() {
  return (
    <div className="phase-rail" aria-label="The five-phase agile investigation methodology">
      {PHASES.map((phase) => (
        <div className="phase" key={phase.num}>
          <div className="num">{phase.num}</div>
          <div className="name">{phase.name}</div>
          <div className="desc">{phase.desc}</div>
        </div>
      ))}
    </div>
  );
}
