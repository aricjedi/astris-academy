import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { QuizRunner } from "@/components/portal/QuizRunner";
import { MarkComplete } from "@/components/portal/MarkComplete";
import { CapstoneForm } from "@/components/portal/CapstoneForm";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string; lessonId: string }>;
}) {
  const { slug, lessonId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: lesson } = await supabase
    .from("lessons")
    .select("id, kind, title, body_markdown, module_id")
    .eq("id", lessonId)
    .single();

  if (!lesson) notFound();

  // Never select correct_index here — this runs with the caller's own
  // session, and RLS is row-level, not column-level.
  const { data: rawQuestions } = await supabase
    .from("questions")
    .select("id, type, prompt, options, sort_order")
    .eq("lesson_id", lessonId)
    .order("sort_order", { ascending: true });

  const questions = (rawQuestions ?? []).map((q) => ({
    id: q.id,
    type: q.type,
    prompt: q.prompt,
    options: Array.isArray(q.options) ? (q.options as string[]) : null,
  }));

  const { data: enrollment } = await supabase
    .from("enrollments")
    .select("id")
    .eq("user_id", user!.id)
    .single();

  const { data: progress } = enrollment
    ? await supabase
        .from("lesson_progress")
        .select("completed_at")
        .eq("enrollment_id", enrollment.id)
        .eq("lesson_id", lessonId)
        .maybeSingle()
    : { data: null };

  let existingCapstoneSubmission = null;
  if (lesson.kind === "capstone_assignment" && enrollment) {
    const { data } = await supabase
      .from("capstone_submissions")
      .select("submission_text, status, reviewer_notes")
      .eq("enrollment_id", enrollment.id)
      .maybeSingle();
    existingCapstoneSubmission = data;
  }

  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 760 }}>
        <Link href={`/portal/courses/${slug}`} className="backlink" style={{ color: "var(--navy)" }}>
          &larr; Back to course
        </Link>
        <h1 style={{ fontSize: 26, margin: "14px 0 20px" }}>{lesson.title}</h1>

        {lesson.body_markdown && (
          <div className="lesson-body">
            <ReactMarkdown>{lesson.body_markdown}</ReactMarkdown>
          </div>
        )}

        {lesson.kind === "capstone_assignment" ? (
          <CapstoneForm lessonId={lesson.id} existingSubmission={existingCapstoneSubmission} />
        ) : questions && questions.length > 0 ? (
          <QuizRunner
            lessonId={lesson.id}
            questions={questions}
            isFinalAssessment={lesson.kind === "final_assessment"}
          />
        ) : (
          <MarkComplete lessonId={lesson.id} alreadyDone={!!progress?.completed_at} />
        )}
      </div>
    </section>
  );
}
