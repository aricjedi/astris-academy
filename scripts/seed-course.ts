/**
 * One-off script: seeds the real course content (extracted from the Coursebox
 * export) into Supabase. Run manually with `npx tsx scripts/seed-course.ts`.
 * Uses the service-role key, so it bypasses RLS — never run this from
 * anywhere reachable by end users.
 *
 * Idempotent: deletes any existing rows for this course slug before inserting,
 * so it's safe to re-run after editing the seed content.
 */
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { courseSeed } from "../content/agile-workplace-investigation-training/seed";

const envPath = "./.env.local";
const env = Object.fromEntries(
  readFileSync(envPath, "utf8")
    .split("\n")
    .filter((l) => l.includes("="))
    .map((l) => {
      const idx = l.indexOf("=");
      return [l.slice(0, idx).trim(), l.slice(idx + 1).trim()];
    })
);

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

async function main() {
  console.log(`Seeding course: ${courseSeed.title}`);

  // Remove any prior seed of this course so the script is safely re-runnable.
  const { data: existing } = await supabase
    .from("courses")
    .select("id")
    .eq("slug", courseSeed.slug)
    .maybeSingle();

  if (existing) {
    console.log(`Existing course found (${existing.id}), deleting before re-seeding...`);
    const { error: deleteError } = await supabase.from("courses").delete().eq("id", existing.id);
    if (deleteError) throw deleteError;
  }

  const { data: course, error: courseError } = await supabase
    .from("courses")
    .insert({
      slug: courseSeed.slug,
      title: courseSeed.title,
      description: courseSeed.description,
      is_published: false, // stays false until needs_review questions are checked
    })
    .select()
    .single();

  if (courseError) throw courseError;
  console.log(`Created course ${course.id}`);

  let needsReviewCount = 0;
  let totalQuestions = 0;

  for (let moduleIndex = 0; moduleIndex < courseSeed.modules.length; moduleIndex++) {
    const mod = courseSeed.modules[moduleIndex];

    const { data: moduleRow, error: moduleError } = await supabase
      .from("modules")
      .insert({
        course_id: course.id,
        title: mod.title,
        sort_order: moduleIndex,
      })
      .select()
      .single();

    if (moduleError) throw moduleError;
    console.log(`  Module ${moduleIndex + 1}: ${mod.title}`);

    for (let lessonIndex = 0; lessonIndex < mod.lessons.length; lessonIndex++) {
      const lesson = mod.lessons[lessonIndex];

      const { data: lessonRow, error: lessonError } = await supabase
        .from("lessons")
        .insert({
          module_id: moduleRow.id,
          kind: lesson.kind,
          title: lesson.title,
          body_markdown: lesson.bodyMarkdown ?? null,
          sort_order: lessonIndex,
        })
        .select()
        .single();

      if (lessonError) throw lessonError;
      console.log(`    Lesson: [${lesson.kind}] ${lesson.title}`);

      if (lesson.questions && lesson.questions.length > 0) {
        const questionRows = lesson.questions.map((q, qIndex) => {
          totalQuestions++;
          if (q.needsReview) needsReviewCount++;
          return {
            lesson_id: lessonRow.id,
            type: q.type,
            prompt: q.prompt,
            options: q.options ?? null,
            correct_index: q.correctIndex ?? null,
            sort_order: qIndex,
            needs_review: q.needsReview,
          };
        });

        const { error: questionsError } = await supabase.from("questions").insert(questionRows);
        if (questionsError) throw questionsError;
        console.log(`      + ${questionRows.length} question(s)`);
      }
    }
  }

  console.log("\nDone.");
  console.log(`Total questions seeded: ${totalQuestions}`);
  console.log(`Flagged needs_review (inferred multiple-choice answers): ${needsReviewCount}`);
  console.log(
    `\nCourse is_published = false. Review the needs_review questions before setting it to true.`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
