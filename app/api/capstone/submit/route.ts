import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/server-admin";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }

  const { lessonId, submissionText } = (await request.json()) as {
    lessonId: string;
    submissionText: string;
  };

  if (!lessonId || !submissionText?.trim()) {
    return NextResponse.json({ error: "lessonId and submissionText are required" }, { status: 400 });
  }

  const { data: lesson } = await supabase
    .from("lessons")
    .select("id, kind, modules(course_id)")
    .eq("id", lessonId)
    .single();

  if (!lesson || lesson.kind !== "capstone_assignment") {
    return NextResponse.json({ error: "Lesson not found or not a capstone assignment" }, { status: 404 });
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

  const admin = createAdminClient();

  const { error: submissionError } = await admin.from("capstone_submissions").upsert(
    {
      user_id: user.id,
      enrollment_id: enrollment.id,
      lesson_id: lessonId,
      submission_text: submissionText.trim(),
      status: "submitted",
      submitted_at: new Date().toISOString(),
      reviewed_at: null,
      reviewed_by: null,
      reviewer_notes: null,
    },
    { onConflict: "user_id,enrollment_id" }
  );

  if (submissionError) {
    return NextResponse.json({ error: submissionError.message }, { status: 500 });
  }

  await admin.from("lesson_progress").upsert(
    {
      user_id: user.id,
      lesson_id: lessonId,
      enrollment_id: enrollment.id,
      completed_at: new Date().toISOString(),
    },
    { onConflict: "user_id,lesson_id" }
  );

  return NextResponse.json({ success: true });
}
