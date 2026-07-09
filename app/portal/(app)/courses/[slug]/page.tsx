import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function CourseModulesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: course } = await supabase.from("courses").select("id, title").eq("slug", slug).single();

  if (!course) notFound();

  const { data: modules } = await supabase
    .from("modules")
    .select("id, title, sort_order, lessons(id, title, kind, sort_order)")
    .eq("course_id", course.id)
    .order("sort_order", { ascending: true });

  const { data: enrollment } = await supabase
    .from("enrollments")
    .select("id")
    .eq("user_id", user!.id)
    .eq("course_id", course.id)
    .single();

  const { data: progressRows } = enrollment
    ? await supabase.from("lesson_progress").select("lesson_id").eq("enrollment_id", enrollment.id).not("completed_at", "is", null)
    : { data: [] };

  const completedLessonIds = new Set((progressRows ?? []).map((p) => p.lesson_id));

  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">Astris Academy</span>
        <h1 style={{ fontSize: 28, margin: "10px 0 24px" }}>{course.title}</h1>

        {(modules ?? [])
          .sort((a, b) => a.sort_order - b.sort_order)
          .map((mod) => (
            <div key={mod.id} className="fact-box" style={{ marginBottom: 16 }}>
              <h2 style={{ fontSize: 18, marginBottom: 12 }}>{mod.title}</h2>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {(mod.lessons ?? [])
                  .sort((a, b) => a.sort_order - b.sort_order)
                  .map((lesson) => (
                    <li key={lesson.id}>
                      <Link
                        href={`/portal/courses/${slug}/lessons/${lesson.id}`}
                        style={{ display: "flex", gap: 10, alignItems: "center", textDecoration: "none" }}
                      >
                        <span style={{ color: completedLessonIds.has(lesson.id) ? "#1E7A3E" : "var(--line)" }}>
                          {completedLessonIds.has(lesson.id) ? "✓" : "○"}
                        </span>
                        <span>{lesson.title}</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
      </div>
    </section>
  );
}
