import Link from "next/link";

export function CourseCard({
  docket,
  title,
  description,
  chips,
  href,
}: {
  docket: string;
  title: string;
  description: string;
  chips: string[];
  href: string;
}) {
  return (
    <article className="course-card">
      <div className="docket">
        <span>{docket}</span>
        <span>Certificate of completion</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="course-meta">
        {chips.map((chip) => (
          <span className="chip" key={chip}>
            {chip}
          </span>
        ))}
      </div>
      <Link className="btn" href={href}>
        View course
      </Link>
    </article>
  );
}
