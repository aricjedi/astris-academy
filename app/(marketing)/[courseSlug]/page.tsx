import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { CredStrip } from "@/components/marketing/CredStrip";
import { courses, getCourseBySlug } from "@/lib/content/courses";

export function generateStaticParams() {
  return courses.map((course) => ({ courseSlug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ courseSlug: string }>;
}): Promise<Metadata> {
  const { courseSlug } = await params;
  const course = getCourseBySlug(courseSlug);
  if (!course) return {};
  return {
    title: `${course.title} | Astris Academy`,
    description: course.metaDescription,
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ courseSlug: string }>;
}) {
  const { courseSlug } = await params;
  const course = getCourseBySlug(courseSlug);
  if (!course) notFound();

  return (
    <>
      <SiteHeader variant="course" />

      <section className="hero course-hero">
        <div className="wrap">
          <Link className="backlink" href="/">
            &larr; Astris Academy
          </Link>
          <span className="eyebrow" style={{ display: "block", marginTop: 18 }}>
            {course.docket} &middot; Based on <em>The Agile Investigator</em>
          </span>
          <h1>{course.title}</h1>
          <p className="lede">{course.heroLede}</p>
          <div className="course-meta">
            {course.heroChips.map((chip) => (
              <span className="chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <main>
        <section className="section">
          <div className="wrap two-col">
            <div>
              <span className="eyebrow">Curriculum</span>
              <h2>What the course covers</h2>
              <ol className="module-list">
                {course.modules.map((mod) => (
                  <li key={mod.name}>
                    <div>
                      <div className="m-name">{mod.name}</div>
                      <div className="m-desc">{mod.desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <aside>
              <div className="fact-box">
                <dl>
                  <dt>Audience</dt>
                  <dd>{course.factBox.audience}</dd>
                  <dt>Method</dt>
                  <dd>
                    The five-phase agile methodology from <em>The Agile Investigator</em>{" "}
                    by Rick Schumacher, CFE.
                  </dd>
                  <dt>Standard</dt>
                  <dd>{course.factBox.standard}</dd>
                  <dt>Format</dt>
                  <dd>{course.factBox.format}</dd>
                  <dt>Skills covered</dt>
                  <dd>{course.factBox.skills}</dd>
                  <dt>Credential</dt>
                  <dd>Astris Integrity certificate of completion.</dd>
                </dl>
              </div>
            </aside>
          </div>
        </section>

        <CredStrip
          items={course.whatYoullLearn.map((item) => ({ title: item.title, body: item.body }))}
        />

        <section className="section embed-section" id="enroll">
          <div className="wrap">
            <span className="eyebrow">Preview &amp; Enroll</span>
            <h2>Start the course</h2>
            <p className="section-intro">
              Course preview, enrollment, and progress tracking are provided through our course platform below.
            </p>
            <div className="embed-frame">
              <iframe
                src={course.embedUrl}
                title={`${course.title} — course enrollment`}
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter variant="course" />
    </>
  );
}
