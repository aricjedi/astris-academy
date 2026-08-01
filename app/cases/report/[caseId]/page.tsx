import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PrintButton } from "@/components/portal/PrintButton";

const DISPOSITION_LABEL: Record<string, string> = {
  substantiated: "Substantiated",
  unsubstantiated: "Unsubstantiated",
  partially_substantiated: "Partially Substantiated",
  inconclusive: "Inconclusive",
};

export default async function PrintableCaseReportPage({
  params,
}: {
  params: Promise<{ caseId: string }>;
}) {
  const { caseId } = await params;
  const supabase = await createClient();

  const { data: caseRow } = await supabase
    .from("cases")
    .select("case_number, title, allegation_summary, severity, case_type, opened_at, closed_at")
    .eq("id", caseId)
    .single();
  if (!caseRow) notFound();

  const { data: report } = await supabase
    .from("case_reports")
    .select("executive_summary, findings, disposition, recommendations, finalized_at")
    .eq("case_id", caseId)
    .single();
  if (!report || !report.finalized_at) notFound();

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: 40,
        background: "var(--paper)",
      }}
    >
      <div
        style={{
          maxWidth: 720,
          width: "100%",
          background: "var(--white)",
          border: "1px solid var(--line)",
          borderTop: "6px solid var(--navy)",
          borderRadius: "var(--radius)",
          padding: "56px 64px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <Image
            src="/assets/astris-logo.png"
            alt="Astris Integrity Consulting"
            width={1036}
            height={1036}
            style={{ height: 56, width: 56, margin: "0 auto 16px" }}
          />
          <span className="eyebrow">Astris Integrity Consulting &middot; Case Report</span>
          <p style={{ color: "var(--slate)", marginTop: 4 }}>
            Based on <em>The Agile Investigator</em> methodology
          </p>
        </div>

        <h1 style={{ fontSize: 24, marginBottom: 4 }}>{caseRow.title}</h1>
        <p style={{ color: "var(--slate)", marginBottom: 24 }}>
          Case {caseRow.case_number} &middot; Opened {new Date(caseRow.opened_at).toLocaleDateString()}
          {caseRow.closed_at && <> &middot; Closed {new Date(caseRow.closed_at).toLocaleDateString()}</>}
        </p>

        <h3 style={{ fontSize: 15, marginBottom: 6 }}>Allegation</h3>
        <p style={{ marginBottom: 20 }}>{caseRow.allegation_summary}</p>

        {report.executive_summary && (
          <>
            <h3 style={{ fontSize: 15, marginBottom: 6 }}>Executive Summary</h3>
            <p style={{ marginBottom: 20 }}>{report.executive_summary}</p>
          </>
        )}

        {report.findings && (
          <>
            <h3 style={{ fontSize: 15, marginBottom: 6 }}>Findings</h3>
            <p style={{ marginBottom: 20, whiteSpace: "pre-wrap" }}>{report.findings}</p>
          </>
        )}

        <h3 style={{ fontSize: 15, marginBottom: 6 }}>Disposition</h3>
        <p style={{ marginBottom: 20, fontWeight: 700 }}>
          {report.disposition ? DISPOSITION_LABEL[report.disposition] : "—"}
        </p>

        {report.recommendations && (
          <>
            <h3 style={{ fontSize: 15, marginBottom: 6 }}>Recommendations</h3>
            <p style={{ marginBottom: 20, whiteSpace: "pre-wrap" }}>{report.recommendations}</p>
          </>
        )}

        <p style={{ fontSize: 13, color: "var(--slate)", marginTop: 32 }}>
          Finalized {new Date(report.finalized_at).toLocaleDateString()}
        </p>

        <p className="no-print" style={{ marginTop: 32, textAlign: "center" }}>
          <PrintButton />
        </p>
      </div>
    </section>
  );
}
