import type { Metadata } from "next";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { PhaseRail } from "@/components/marketing/PhaseRail";
import { CourseCard } from "@/components/marketing/CourseCard";
import { CredStrip } from "@/components/marketing/CredStrip";
import { courses } from "@/lib/content/courses";

export const metadata: Metadata = {
  title: "Astris Academy — Professional Investigation Training | Astris Integrity",
  description:
    "Professional workplace investigation training from Astris Integrity, built on the Agile Investigator methodology and aligned with ISO/TS 37008:2023.",
};

const credItems = [
  {
    title: "Written by a practitioner",
    body: (
      <>
        Authored by Rick Schumacher, CFE — 30+ years leading executive-level internal investigations across
        corporate, government, and global environments, and author of <em>The Agile Investigator</em>.
      </>
    ),
  },
  {
    title: "Anchored to the standard",
    body: (
      <>
        Course methodology aligns with ISO/TS 37008:2023, <em>Internal investigations of organizations</em>{" "}
        — independence, confidentiality, competence, impartiality, and legality throughout.
      </>
    ),
  },
  {
    title: "Built for the real test",
    body: "Every technique is taught to one standard: the investigation should withstand the scrutiny of a court proceeding. If it can't, it isn't finished.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader variant="home" />

      <section className="hero">
        <div className="wrap">
          <span className="eyebrow">Astris Integrity &middot; Professional Training</span>
          <h1>Investigation training built to survive scrutiny.</h1>
          <p className="lede">
            Practitioner-built courses in workplace investigations, grounded in the methodology of{" "}
            <em>The Agile Investigator</em>{" "}
            and aligned with ISO/TS&nbsp;37008:2023. Every course is written by an investigator — for the people who
            have to get it right.
          </p>
          <PhaseRail />
        </div>
      </section>

      <main>
        <section className="section" id="courses">
          <div className="wrap">
            <span className="eyebrow">Course Catalog</span>
            <h2>Current courses</h2>
            <p className="section-intro">
              Each course pairs lecture content with realistic workplace scenarios, common failure points, and
              knowledge checks — and closes with a capstone you work end to end.
            </p>

            <div className="course-grid">
              {courses.map((course) => (
                <CourseCard
                  key={course.slug}
                  docket={course.docket}
                  title={course.title}
                  description={course.catalogDescription}
                  chips={course.catalogChips}
                  href={`/${course.slug}`}
                />
              ))}

              <article className="course-card card-coming" aria-label="Future courses">
                <span className="eyebrow">In Development</span>
                <p>
                  Additional courses in the Astris investigations curriculum are in production. Check back, or
                  follow Astris Integrity for release announcements.
                </p>
              </article>
            </div>
          </div>
        </section>

        <CredStrip items={credItems} />
      </main>

      <SiteFooter variant="home" />
    </>
  );
}
