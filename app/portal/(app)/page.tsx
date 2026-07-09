import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function PortalDashboard() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("profiles")
    .select("role, full_name, company_id")
    .eq("id", user!.id)
    .single();

  const { data: enrollment } = await supabase
    .from("enrollments")
    .select("id, status, course_id, courses(slug, title)")
    .eq("user_id", user!.id)
    .maybeSingle();

  const course = enrollment?.courses as unknown as { slug: string; title: string } | null;

  let progressPercent = 0;
  if (enrollment) {
    const { data: totalLessons } = await supabase
      .from("lessons")
      .select("id, modules!inner(course_id)")
      .eq("modules.course_id", enrollment.course_id);
    const { data: completedLessons } = await supabase
      .from("lesson_progress")
      .select("id")
      .eq("enrollment_id", enrollment.id)
      .not("completed_at", "is", null);
    const total = totalLessons?.length ?? 0;
    progressPercent = total > 0 ? Math.round(((completedLessons?.length ?? 0) / total) * 100) : 0;
  }

  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">Astris Academy</span>
        <h1 style={{ fontSize: 28, margin: "10px 0 8px" }}>
          Welcome{profile?.full_name ? `, ${profile.full_name}` : ""}
        </h1>
        <p style={{ color: "var(--slate)" }}>Role: {profile?.role ?? "unknown"}</p>

        {profile?.role === "super_admin" && (
          <p style={{ marginTop: 24 }}>
            <Link className="btn" href="/portal/super-admin">
              Manage companies
            </Link>
          </p>
        )}
        {(profile?.role === "company_admin" || profile?.role === "super_admin") && (
          <p style={{ marginTop: 12 }}>
            <Link className="btn secondary" href="/portal/admin">
              View your team
            </Link>
          </p>
        )}

        {profile?.role === "learner" && (
          <div className="fact-box" style={{ marginTop: 24, maxWidth: 480 }}>
            {course ? (
              <>
                <h2 style={{ fontSize: 18, marginBottom: 8 }}>{course.title}</h2>
                <p style={{ color: "var(--slate)", marginBottom: 16 }}>{progressPercent}% complete</p>
                {enrollment?.status === "completed" ? (
                  <Link className="btn" href={`/portal/certificates/${enrollment.course_id}`}>
                    View certificate
                  </Link>
                ) : (
                  <Link className="btn" href={`/portal/courses/${course.slug}`}>
                    {progressPercent > 0 ? "Continue course" : "Start course"}
                  </Link>
                )}
              </>
            ) : (
              <p style={{ color: "var(--slate)" }}>
                You&rsquo;re not enrolled in a course yet. Contact your company admin for access.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
