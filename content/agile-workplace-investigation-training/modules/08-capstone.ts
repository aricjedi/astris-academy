import type { SeedModule } from "../types";

export const capstone: SeedModule = {
  title: "Capstone Investigation",
  lessons: [
    {
      kind: "capstone_briefing",
      title: "Capstone Briefing and Outputs",
      bodyMarkdown: `A workplace allegation can involve overlapping duties across HR, legal, and compliance, with incomplete information and competing interests. This capstone asks you to practice a full agile approach (not just planning or documentation) to investigate in a structured way, while staying within real-world constraints.

You will receive a mixed allegation scenario. Your job is to turn what is known into an investigation backlog, make smart choices as new information arrives, and produce professional outputs that keep stakeholders aligned and decisions traceable.

**The mixed allegation you will investigate**

A claim is raised that includes both HR and compliance dimensions. The allegation text you are given will blend elements such as workplace behavior concerns, policy or procedure alignment, and potential regulatory or contractual obligations. You will not be asked to "solve" the case for the reader. Instead, you will demonstrate disciplined investigation practice: separating facts from assumptions, tracking what evidence would matter, and showing how you would update the plan as you learn more.

**Known facts, uncertainties, and what to do with each**

You will be provided with a set of statements, records, or observations that count as known facts, along with uncertainties (conflicting accounts, missing timelines, unclear policy applicability, or unclear decision authority). Your outputs must show that you can convert known facts into testable questions, treat uncertainties as backlog items, and avoid premature conclusions.

Four stakeholder perspectives to map to your outputs:
- **Complainant**: focus on support needs, confidentiality expectations, and what outcomes matter to them. Identify the questions they have and the evidence that would be meaningful to verify their account.
- **Respondent**: focus on fair process, clarity of the concerns raised, and how to respond to specific allegations. Identify what information they would reasonably need to address points of uncertainty.
- **HR lead**: focus on policy alignment, worker safety and wellbeing measures, recordkeeping, and investigation governance. Identify decisions HR must be ready to justify.
- **Compliance and legal**: focus on regulatory obligations, audit readiness, privilege, retention rules, and risk controls. Identify what evidence trail and approvals must exist before conclusions are communicated.

**Stakeholders and constraints that shape your investigation**

Agile investigation is not only about tasks, it is about governance. Expect constraints such as confidentiality and privacy limitations on who can view evidence; timing constraints (notice periods, operational risk, or required reporting windows); decision rights (who can approve interim measures, who can authorize information sharing); and documentation requirements (what must be captured for auditability). Your capstone outputs should explicitly show how constraints affect your backlog priorities and evidence plan.

**What you will produce in the capstone**

You will create a small "investigation package" that reads like professional work, not a classroom exercise, designed so another competent reviewer could understand your reasoning path. Your outputs will typically include: a capstone investigation plan that states scope, governance, and how agile iterations will work under uncertainty; a backlog that links each investigation item to a specific known fact or uncertainty; a stakeholder map that clarifies who needs what information, when, and why; a review and decision log template showing how you will capture decisions, evidence status, and next steps; and a communications approach distinguishing factual updates from interpretations, aligning HR and compliance review timing.

**Agile does not remove rigor, it increases it**

In this capstone, agile means you work in deliberate cycles: start with a baseline plan, then refine it through structured review points when evidence or stakeholder input changes what is plausible. Practice the agile mindset by consistently: inspecting and refining your backlog after each new piece of information; making uncertainty visible rather than hiding it inside assumptions; and keeping traceability between the allegation, the questions you ask, the evidence you seek, and the recommendations you would make next.

**Worked example: turning an uncertainty into a backlog item.** An allegation briefing says: "During a meeting, one person reported an inappropriate comment. Another account suggests the comment may have been misunderstood." In a professional backlog, this becomes an item explicitly about clarifying uncertainty — framed as a question, with defined evidence and completion criteria: Purpose — determine whether the described comment is supported by reliable contemporaneous records. Evidence needed — meeting notes, timeline records, any relevant messages, and identification of who can attest to what was heard and when. Done criteria — a documented evidence assessment, including what supports the account and what remains unverified. Owner and review — assigned to the investigation team, reviewed at the next HR and compliance checkpoint.

**Practical scenario setup for your first iteration**

Your first agile iteration should focus on creating clarity and reducing avoidable risk: defining scope boundaries (what your investigation will and will not cover); listing the highest-impact uncertainties (those affecting fairness, safety, legal risk, or operational continuity); and confirming governance (who approves interim steps and who signs off on evidence handling).

Four prompts to check your own plan: **Evidence boundaries** — decide what evidence you can access, who can view it, and how you will document handling to support both HR process and compliance audit needs. **Priority under uncertainty** — set backlog priorities using impact and feasibility; if two tasks both matter, choose the one that reduces the biggest unknown first or unlocks other work. **Fair process** — ensure the plan supports procedural fairness, reflecting how the respondent and complainant would be treated respectfully and consistently. **Interim measures** — plan for actions that may be needed while the investigation continues, keeping them separated from final conclusions, and record who authorized what and why.`,
    },
    {
      kind: "final_assessment",
      title: "Final Assessment",
      questions: [
        {
          type: "multiple_choice",
          prompt: "What is the first step in the Agile methodology for workplace investigations?",
          options: ["Gathering evidence", "Conducting interviews", "Reporting findings", "Identifying the issue"],
          correctIndex: 3,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt: "Which of the following best describes the purpose of evidence collection in workplace investigations?",
          options: [
            "To establish a clear, unbiased record of findings",
            "To confirm the investigator's hypothesis",
            "To gather all possible data regardless of relevance",
            "To intimidate potential witnesses into cooperation",
          ],
          correctIndex: 0,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt: "In Agile investigation, what does the term 'sprint' refer to?",
          options: [
            "A meeting to discuss findings",
            "A final review of the report",
            "A focused timeframe to achieve specific objectives",
            "A quick gathering of evidence",
          ],
          correctIndex: 2,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt: "What should be the primary focus when analyzing evidence collected during an investigation?",
          options: [
            "Assigning blame based on initial reports",
            "Identifying the perpetrator immediately",
            "Understanding the context and implications of findings",
            "Confirming prior assumptions",
          ],
          correctIndex: 2,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt: "Which approach is most appropriate for reporting findings in a workplace investigation?",
          options: [
            "A summarized version that omits key evidence",
            "An informal email sent to stakeholders",
            "A detailed technical report that is hard to comprehend",
            "A clear and concise report tailored to the audience's needs",
          ],
          correctIndex: 3,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt: "What is a key benefit of using Agile methodology in workplace investigations?",
          options: [
            "It ensures faster conclusions without thorough analysis",
            "It promotes flexibility and adaptation to changes",
            "It eliminates the need for evidence",
            "It minimizes involvement from key stakeholders",
          ],
          correctIndex: 1,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt: "Which best practice should be followed when conducting interviews during an investigation?",
          options: [
            "Conducting interviews in a public space",
            "Rushing through the interview to save time",
            "Asking closed questions to limit responses",
            "Establishing rapport with the interviewee",
          ],
          correctIndex: 3,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt: "What aspect of report writing is essential for ensuring clarity and effectiveness?",
          options: [
            "Vague summaries to leave room for interpretation",
            "Unnecessary jargon and complexity",
            "Lengthy explanations to cover all details",
            "Clear structure and concise language",
          ],
          correctIndex: 3,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt: "Which of the following strategies is NOT effective during evidence collection?",
          options: [
            "Using technology for data gathering",
            "Seeking corroboration for statements",
            "Systematically documenting sources",
            "Ignoring contradictory evidence",
          ],
          correctIndex: 3,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt: "What is the primary goal of conducting follow-up meetings after an investigation?",
          options: [
            "To notify the media about the case",
            "To confront the accused",
            "To review findings and improve accountability",
            "To assign blame to the lowest level",
          ],
          correctIndex: 2,
          needsReview: true,
        },
      ],
    },
    {
      kind: "capstone_assignment",
      title: "Capstone Assignment",
      bodyMarkdown: `As part of your capstone project, you are required to conduct a simulated workplace investigation into a mock allegation. This assignment aligns with real-world practices in corporate investigations and reinforces the agile methodology taught throughout this course.

Follow the steps outlined below:

1. **Neutral Working Summary**: Prepare a clear, concise summary of the mock allegation, including key details about the parties involved, the nature of the allegation, and the context surrounding it.
2. **Scoped Investigation Plan**: Develop an investigation plan that outlines the scope of the inquiry, including specific objectives, timelines, and resources required. Focus on how you will remain agnostic and impartial throughout the investigation.
3. **Interview Outline**: Create an interview outline that details the questions you will ask during interviews with relevant stakeholders. Include strategies to build rapport and encourage openness from the interviewees.
4. **Findings Determination**: Analyze the potential findings based on the information gathered in the previous steps. List potential outcomes, keeping in mind the balance of evidence and perspective.
5. **Report Skeleton**: Draft a skeleton or framework for the final report that will present your findings. Include sections for the introduction, methodology, findings, conclusions, and recommendations.

**Deliverables**

Submit a single document containing all five components above (Neutral Working Summary, Scoped Investigation Plan, Interview Outline, Findings Determination, Report Skeleton) in a cohesive format. The complete assignment should adhere to professional standards and reflect an understanding of workplace investigations, covering approximately 2,000 words in total. Use APA format for citation and references where necessary.

Make sure to demonstrate your grasp of key concepts and methodologies learned during this course, showcasing your ability to apply them in a practical context.

Submit your assignment online in the course once complete.`,
    },
  ],
};
