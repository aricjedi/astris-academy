import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { CaseSubNav } from "@/components/cases/CaseSubNav";
import { ReportForm } from "@/components/cases/ReportForm";

export default async function CaseReportPage({ params }: { params: Promise<{ caseId: string }> }) {
  const { caseId } = await params;
  const supabase = await createClient();

  const { data: caseRow } = await supabase
    .from("cases")
    .select("case_number, title, status")
    .eq("id", caseId)
    .single();
  if (!caseRow) notFound();

  const { data: report } = await supabase
    .from("case_reports")
    .select("executive_summary, findings, disposition, recommendations, finalized_at")
    .eq("case_id", caseId)
    .maybeSingle();

  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 640 }}>
        <CaseSubNav
          caseId={caseId}
          caseNumber={caseRow.case_number}
          title={caseRow.title}
          status={caseRow.status}
          active="report"
        />
        <ReportForm caseId={caseId} initial={report ?? null} isFinalized={!!report?.finalized_at} />
      </div>
    </section>
  );
}
