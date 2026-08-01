import { createClient } from "@/lib/supabase/server";
import { NewClientOrgForm } from "@/components/cases/NewClientOrgForm";

export default async function NewClientOrgPage() {
  const supabase = await createClient();
  const { data: companies } = await supabase.from("companies").select("id, name").order("name");

  return <NewClientOrgForm companies={companies ?? []} />;
}
