import { createClient } from "@/lib/supabase/server";
import { NewCaseForm } from "@/components/cases/NewCaseForm";

export default async function NewCasePage() {
  const supabase = await createClient();
  const { data: previewSeq } = await supabase.rpc("next_case_seq_preview");

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

  return <NewCaseForm previewSeq={previewSeq ?? 1} years={years} />;
}
