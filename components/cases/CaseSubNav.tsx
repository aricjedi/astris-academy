import Link from "next/link";
import type { Database } from "@/lib/types/database.types";

type CaseStatus = Database["public"]["Enums"]["case_status"];

export function CaseSubNav({
  caseId,
  caseNumber,
  title,
  status,
  active,
}: {
  caseId: string;
  caseNumber: string;
  title: string;
  status: CaseStatus;
  active: "overview" | "plan" | "evidence" | "analysis" | "report";
}) {
  const links: { key: typeof active; href: string; label: string }[] = [
    { key: "overview", href: `/cases/${caseId}`, label: "Overview" },
    { key: "plan", href: `/cases/${caseId}/plan`, label: "Planning" },
    { key: "evidence", href: `/cases/${caseId}/evidence`, label: "Evidence" },
    { key: "analysis", href: `/cases/${caseId}/analysis`, label: "Analysis" },
    { key: "report", href: `/cases/${caseId}/report`, label: "Report" },
  ];

  return (
    <>
      <span className="eyebrow">
        {caseNumber} &middot; {status.replace("_", " ")}
      </span>
      <h1 style={{ fontSize: 26, margin: "10px 0 16px" }}>{title}</h1>
      <nav style={{ display: "flex", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
        {links.map((l) => (
          <Link key={l.key} href={l.href} style={{ fontWeight: l.key === active ? 700 : 400 }}>
            {l.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
