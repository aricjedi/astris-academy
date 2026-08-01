import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { CaseSubNav } from "@/components/cases/CaseSubNav";
import { PlanForm } from "@/components/cases/PlanForm";

export default async function CasePlanPage({ params }: { params: Promise<{ caseId: string }> }) {
  const { caseId } = await params;
  const supabase = await createClient();

  const { data: caseRow } = await supabase
    .from("cases")
    .select("case_number, title, status")
    .eq("id", caseId)
    .single();
  if (!caseRow) notFound();

  const { data: plan } = await supabase
    .from("case_plans")
    .select("scope_summary, custodians, planned_sources, methodology_notes")
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
          active="plan"
        />
        <div className="fact-box">
          <PlanForm caseId={caseId} initial={plan ?? null} />
        </div>
      </div>
    </section>
  );
}
