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

  const { lessonId, answers } = (await request.json()) as {
    lessonId: string;
    answers: Record<string, string>;
  };

  if (!lessonId) {
    return NextResponse.json({ error: "lessonId is required" }, { status: 400 });
  }

  // RLS scopes this to lessons the caller is actively enrolled in — an empty
  // result means they aren't authorized to submit for this lesson.
  const { data: lesson } = await supabase
    .from("lessons")
    .select("id, kind, module_id, modules(course_id)")
    .eq("id", lessonId)
    .single();

  if (!lesson) {
    return NextResponse.json({ error: "Lesson not found or not accessible" }, { status: 404 });
  }

  const courseId = (lesson.modules as unknown as { course_id: string } | null)?.course_id;

  const { data: enrollment } = await supabase
    .from("enrollments")
    .select("id")
    .eq("user_id", user.id)
    .eq("course_id", courseId ?? "")
    .eq("status", "active")
    .single();

  if (!enrollment) {
    return NextResponse.json({ error: "No active enrollment for this course" }, { status: 403 });
  }

  // Grading needs correct_index, which must never be sent to the browser —
  // fetch it only here, server-side, via the service-role client.
  const admin = createAdminClient();
  const { data: questions } = await admin
    .from("questions")
    .select("id, type, correct_index")
    .eq("lesson_id", lessonId);

  const results: Record<string, boolean | null> = {};
  let mcTotal = 0;
  let mcCorrect = 0;

  for (const q of questions ?? []) {
    if (q.type === "multiple_choice") {
      mcTotal++;
      const submitted = answers[q.id];
      const isCorrect = submitted !== undefined && Number(submitted) === q.correct_index;
      if (isCorrect) mcCorrect++;
      results[q.id] = isCorrect;
    } else {
      results[q.id] = null; // short answer — ungraded
    }
  }

  const score = mcTotal > 0 ? Math.round((mcCorrect / mcTotal) * 100) : 100;

  await admin.from("lesson_progress").upsert(
    {
      user_id: user.id,
      lesson_id: lessonId,
      enrollment_id: enrollment.id,
      completed_at: new Date().toISOString(),
      score,
      answers,
    },
    { onConflict: "user_id,lesson_id" }
  );

  if (lesson.kind === "final_assessment") {
    await maybeIssueCertificate(admin, enrollment.id);
  }

  return NextResponse.json({ score, results });
}
