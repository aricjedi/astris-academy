import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/server-admin";
import { maybeIssueCertificate } from "@/lib/certificates";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }

  const { data: callerProfile } = await supabase
    .from("profiles")
    .select("role, company_id")
    .eq("id", user.id)
    .single();

  if (callerProfile?.role !== "company_admin" && callerProfile?.role !== "super_admin") {
    return NextResponse.json({ error: "Only a company admin can review capstones" }, { status: 403 });
  }

  const { submissionId, decision, reviewerNotes } = (await request.json()) as {
    submissionId: string;
    decision: "approved" | "needs_revision";
    reviewerNotes?: string;
  };

  if (!submissionId || (decision !== "approved" && decision !== "needs_revision")) {
    return NextResponse.json({ error: "submissionId and a valid decision are required" }, { status: 400 });
  }

  const admin = createAdminClient();

  // Confirm the submission belongs to the caller's own company (super_admin
  // can review any company's submissions via the same route).
  const { data: submission } = await admin
    .from("capstone_submissions")
    .select("id, enrollment_id, enrollments(company_id)")
    .eq("id", submissionId)
    .single();

  const submissionCompanyId = (submission?.enrollments as unknown as { company_id: string } | null)
    ?.company_id;

  if (
    !submission ||
    (callerProfile.role === "company_admin" && submissionCompanyId !== callerProfile.company_id)
  ) {
    return NextResponse.json({ error: "Submission not found" }, { status: 404 });
  }

  const { error: updateError } = await admin
    .from("capstone_submissions")
    .update({
      status: decision,
      reviewer_notes: reviewerNotes ?? null,
      reviewed_at: new Date().toISOString(),
      reviewed_by: user.id,
    })
    .eq("id", submissionId);

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 });
  }

  if (decision === "approved") {
    await maybeIssueCertificate(admin, submission.enrollment_id);
  }

  return NextResponse.json({ success: true });
}
