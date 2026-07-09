import "server-only";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/types/database.types";

const PASS_THRESHOLD = 0.7;

/**
 * Checks whether an enrollment now qualifies for a certificate (final
 * assessment passed + capstone approved) and issues one if so. Safe to call
 * after either event — it no-ops if the other condition isn't met yet, and
 * won't double-issue thanks to the unique (user_id, course_id) constraint.
 * Must be called with the service-role client (admin), since certificate
 * issuance and the enrollments status flip are not exposed to client writes.
 */
export async function maybeIssueCertificate(admin: SupabaseClient<Database>, enrollmentId: string) {
  const { data: enrollment } = await admin
    .from("enrollments")
    .select("id, user_id, course_id, status")
    .eq("id", enrollmentId)
    .single();

  if (!enrollment || enrollment.status === "completed") return;

  const { data: modules } = await admin
    .from("modules")
    .select("id")
    .eq("course_id", enrollment.course_id);

  const moduleIds = (modules ?? []).map((m) => m.id);
  if (moduleIds.length === 0) return;

  const { data: finalAssessmentLesson } = await admin
    .from("lessons")
    .select("id")
    .in("module_id", moduleIds)
    .eq("kind", "final_assessment")
    .maybeSingle();

  if (!finalAssessmentLesson) return;

  const { data: finalProgress } = await admin
    .from("lesson_progress")
    .select("score")
    .eq("enrollment_id", enrollmentId)
    .eq("lesson_id", finalAssessmentLesson.id)
    .maybeSingle();

  const passedFinalAssessment = (finalProgress?.score ?? 0) >= PASS_THRESHOLD * 100;
  if (!passedFinalAssessment) return;

  const { data: capstoneSubmission } = await admin
    .from("capstone_submissions")
    .select("status")
    .eq("enrollment_id", enrollmentId)
    .maybeSingle();

  if (capstoneSubmission?.status !== "approved") return;

  const certificateNumber = `AWIT-${enrollment.user_id.slice(0, 8)}-${Date.now().toString(36).toUpperCase()}`;

  await admin.from("certificates").upsert(
    {
      user_id: enrollment.user_id,
      course_id: enrollment.course_id,
      enrollment_id: enrollment.id,
      certificate_number: certificateNumber,
    },
    { onConflict: "user_id,course_id", ignoreDuplicates: true }
  );

  await admin
    .from("enrollments")
    .update({ status: "completed", completed_at: new Date().toISOString() })
    .eq("id", enrollment.id);
}
