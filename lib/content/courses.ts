export type CourseModule = {
  name: string;
  desc: string;
};

export type Course = {
  slug: string;
  docket: string;
  title: string;
  metaDescription: string;
  heroLede: string;
  heroChips: string[];
  catalogDescription: string;
  catalogChips: string[];
  modules: CourseModule[];
  factBox: {
    audience: string;
    standard: string;
    format: string;
    skills: string;
  };
  whatYoullLearn: { title: string; body: string }[];
};

export const courses: Course[] = [
  {
    slug: "agile-workplace-investigation-training",
    docket: "Course 01",
    title: "Agile Workplace Investigation Training",
    metaDescription:
      "The complete five-phase methodology for internal workplace investigations — allegation analysis, planning, evidence collection, PEACE interviewing, analysis, and defensible reporting. By Astris Integrity.",
    heroLede:
      "A complete, practitioner-built course in internal workplace investigations. Learn the five-phase agile methodology and conduct every investigation to one standard: it must withstand courtroom scrutiny.",
    heroChips: [
      "7 modules + capstone",
      "~10 min lecture per module",
      "Scenarios & knowledge checks",
      "10-question final assessment",
      "Certificate of completion",
    ],
    catalogDescription:
      "The complete five-phase methodology for internal workplace investigations: allegation analysis, planning, evidence collection, PEACE-model interviewing, analysis, and defensible reporting. Built for corporate investigators, HR, and compliance professionals.",
    catalogChips: ["7 modules + capstone", "Scenario-based", "ISO/TS 37008 aligned"],
    modules: [
      {
        name: "The Agile Investigation Framework",
        desc: "Why rigid checklists fail, the five agile phases, the defensible-investigation principles of ISO/TS 37008:2023, and the courtroom scrutiny standard.",
      },
      {
        name: "Allegation Analysis",
        desc: "Align the allegation to policy and law, break it down with the 5Ws, separate facts from assumptions, spot information gaps, and write a neutral working summary.",
      },
      {
        name: "Investigation Planning",
        desc: "Define scope, map stakeholders, prioritize information sources, set milestones with escalation checkpoints, and anticipate risk before it finds you.",
      },
      {
        name: "Evidence Collection",
        desc: "Collect documents and electronic data, preserve chain of custody, verify authenticity and context, build evidence timelines, and prepare the interview strategy.",
      },
      {
        name: "Investigative Interviewing",
        desc: "The PEACE model in workplace practice: questioning techniques, neutrality and active listening, difficult interviews, documentation, and safeguards.",
      },
      {
        name: "Analysis",
        desc: "Review evidence objectively, find patterns and corroboration, assess credibility, build the narrative, and reach substantiated, unsubstantiated, or inconclusive findings.",
      },
      {
        name: "Reporting",
        desc: "Structure the report, write defensible findings — not legal conclusions — link every finding to evidence, and handle retention, confidentiality, and remediation.",
      },
      {
        name: "Capstone Investigation",
        desc: "Take a mock allegation through all five phases: working summary, investigation plan, interview outline, findings determination, and report skeleton — submitted as a written capstone assignment, plus a 10-question final assessment.",
      },
    ],
    factBox: {
      audience:
        "Corporate investigators, HR professionals, and compliance staff who are new to conducting internal workplace investigations.",
      standard: "Aligned with ISO/TS 37008:2023, Internal investigations of organizations — Guidance.",
      format:
        "Lecture modules (~10 minutes each), workplace scenarios, common failure points, knowledge checks, capstone, and final assessment.",
      skills:
        "HR compliance, allegation analysis, interviewing, evidence analysis, investigation reporting, case planning, and professional ethics.",
    },
    whatYoullLearn: [
      {
        title: "Agile Investigation Mastery",
        body: "Adeptly navigate workplace investigations with an approach that adapts to changing dynamics while maintaining structural integrity.",
      },
      {
        title: "Defensible Practices",
        body: "Master the principles of a defensible investigation to safeguard the organization's interests and uphold fairness at every step.",
      },
      {
        title: "Evidence Analysis Skills",
        body: "Analyze evidence objectively, drawing connections that form a compelling narrative based on facts.",
      },
      {
        title: "Effective Interviewing",
        body: "Employ the PEACE model to conduct interviews that yield reliable, unbiased information while preserving rapport.",
      },
      {
        title: "Strategic Reporting",
        body: "Craft clear, neutral reports that link findings directly to evidence, ensuring conclusions stand up to scrutiny.",
      },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
