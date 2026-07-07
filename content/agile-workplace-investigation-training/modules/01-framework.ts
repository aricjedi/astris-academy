import type { SeedModule } from "../types";

export const framework: SeedModule = {
  title: "The Agile Investigation Framework",
  lessons: [
    {
      kind: "lecture",
      title: "Why Checklists Fail, the Five Phases, Defensible Principles, and Courtroom Scrutiny",
      bodyMarkdown: `### Why Rigid Checklists Fail

Workplace investigations often start with a plan, but real cases rarely stay still. When allegations evolve, people remember details differently over time, or new evidence changes what is urgent, a rigid checklist can push the team toward the wrong next step. The goal is not to remove structure, it is to use structure that can change as facts change, while still being fair and defensible.

**The failure pattern: checklists treated like rules, not guidance**

A checklist becomes fragile when it is treated as a fixed sequence you must complete, even if the situation changes. In dynamic workplace settings, the next best action depends on what is currently known, what is still missing, and what risks are changing.

Rigid checklists often fail in four predictable ways:

- **Sequence lock-in**: the team keeps going down the list, even after new facts indicate a different priority.
- **Scope confusion**: people interpret the checklist as the whole investigation scope, so follow-up questions may get delayed or avoided.
- **Evidence friction**: when new evidence arrives, the process does not update fast enough, so decisions are made using outdated context.
- **Defensibility gaps**: if changes happen "off checklist" without clear documentation, later reviews struggle to explain why the team departed from the plan.

None of these issues require bad intent. They are usually process design problems, coupled with time pressure and competing responsibilities.

A mechanical mindset follows the checklist as the plan itself, asking what the list requires, then trying to make facts fit — instead of asking what the current facts require. An agile mindset keeps the structure, but the order and emphasis adapt: the team updates the plan based on new facts, while documenting decisions and preserving fairness. Agility must still be structured — changes should be traceable, consistent with the investigation purpose, and fair to all parties.

**A practical agile investigative mindset**

Agility is not improvisation. It is structured adaptation. In practice, that usually means keeping a small set of core commitments constant, while changing the working plan.

Core commitments that should not drift:
- Fairness to all parties: consistent opportunity to respond to relevant allegations and evidence.
- Consistency of standards: the same criteria for evaluating credibility, relevance, and sufficiency of evidence.
- Transparency and documentation: clear notes on what was done, what was found, and why priorities changed.

What you adapt in response to changing facts:
- Order of inquiry: interview sequence, document requests, and follow-up questions.
- Priority: which gaps matter most right now given emerging evidence and operational risk.
- Scope boundaries: what is in scope, what is temporarily deferred, and what is newly relevant.

A helpful mindset shift is to treat your checklist as a living control panel rather than a fixed route. The framework keeps you honest, the adaptation keeps you accurate.

Before locking in a checklist-driven plan, test it with a simple scan: can the team reorder steps without breaking fairness or standards? Are there clear ways to document changes as new facts emerge? Does the plan treat risk and timing as part of investigation coverage, not separate from it? If the answer is no, you do not need less structure — you need structure that expects change, with documented decisions that remain fair and defensible.

### The Five Agile Phases

Investigations often feel slower than they need to be because investigators try to force messy, changing information into a rigid plan. Agile investigations use a framework that keeps rigor high while allowing decisions to be revisited as new facts emerge. This workflow treats the investigation as an integrated loop, not a straight line.

The five phases:

1. **Allegation Analysis** — Clarify what is being alleged and what would need to be true to support each claim. Decide the scope, key issues, and the investigative "questions to answer." Capture any immediate risks or constraints that could affect method.
2. **Planning** — Turn the current questions into a workable plan. Choose approaches (interviews, documents, observations), set a prioritized sequence, and define decision points. Plan for evidence handling, confidentiality needs, and timeline realities.
3. **Evidence Collection** — Gather evidence that can address the current questions. Keep collection aligned to the plan, but be ready to add targeted collection when new facts suggest a missing verification step.
4. **Analysis** — Assess what the evidence means, not just what it says. Evaluate consistency, credibility factors, corroboration, and gaps. Produce provisional conclusions tied to evidence, then refine when new evidence or clarifications arrive.
5. **Reporting** — Translate the analysis into a clear, traceable report. Ensure findings match the evidence reviewed, explain reasoning, and document limitations. Confirm that next steps and communications reflect the current outcome and any remaining uncertainties.

The strongest agile investigations treat each phase as a decision-making center. In Allegation Analysis, the key decision is the current set of investigative questions. In Planning, the key decision is how to answer those questions efficiently and responsibly given constraints. In Evidence Collection, the key decision is what evidence to obtain next to reduce uncertainty. In Analysis, the key decision is how to weigh evidence and reach provisional conclusions. In Reporting, the key decision is how to present defensible findings that remain faithful to the evidence and documented limits.

When facts change, you do not abandon the framework. You revisit the phase whose decision has changed:
- A new allegation detail that changes scope loops back to **Allegation Analysis**.
- Evidence revealing a gap loops back to **Evidence Collection** for targeted retrieval or re-interviewing.
- Inconsistent accounts loop back to **Analysis** to reassess credibility and corroboration, then adjust collection if needed.
- Reporting that needs precision loops back to **Reporting** to align wording, limitations, and evidence references with the updated analysis.

Speed without sacrificing rigor comes from two practices. First, agility limits rework — you loop back to the phase that truly needs revision, rather than redoing the entire investigation. Second, rigor is maintained through decision traceability — each loop includes updated reasoning and evidence linkage, so the final outcome reflects the current evidence set rather than earlier assumptions.

A useful way to apply the agile framework is to ask one question at each phase boundary: Allegation Analysis asks "What do we need to verify, given the allegation as it currently stands?" Planning asks "What is the most efficient next set of actions to answer those questions?" Evidence Collection asks "What evidence would most reduce uncertainty right now?" Analysis asks "What does the evidence support, and what remains unsupported?" Reporting asks "Does the report accurately reflect the evidence reviewed and the reasoning used?" If any answer changes, loop to that phase and revise decision points.

### Defensible Investigation Principles

Workplace investigations are rarely linear. New information appears, allegations may change shape, and different risks (legal, reputational, fairness) compete for attention. An agile investigation approach helps you adapt without becoming inconsistent, and defensible investigation principles help you stay fair, trustworthy, and legally grounded. These principles connect the five-phase workflow to the ISO/TS 37008:2023 principles that guide real investigator decisions when pressure, uncertainty, or incomplete information show up.

- **Independence** means the investigator and the process are free from undue influence from anyone who could benefit from a particular outcome. In practice, it requires avoiding conflicts of interest and resisting pressure to reach a predetermined conclusion.
- **Confidentiality** protects the integrity of the investigation and the dignity of people involved. It means sharing information only on a need-to-know basis, securing records, and handling interview notes and reports carefully.
- **Competence and professionalism** involve having the right skills, using appropriate methods, and behaving ethically. It includes consistent interview techniques, accurate record keeping, and respectful communication even when emotions run high.
- **Objectivity and impartiality** require that conclusions are based on evidence, not assumptions, relationships, or reputational concerns. In practice, it shows up in balanced questioning, documenting both strengths and weaknesses in the evidence, and applying criteria consistently.
- **Legality** means the investigation respects applicable laws, regulations, and workplace policies. It includes lawful handling of personal information, appropriate scope, and procedures that reduce the risk of unlawful or unfair outcomes.
- **Trust and defensibility** is what people can see after the fact: a process that is explainable, consistent with policy, and grounded in evidence. When principles are followed, stakeholders can understand why key decisions were made, which strengthens fairness.

These principles are often discussed as separate rules, but they work together as a single system. When independence is weak, confidentiality becomes harder to enforce, and competence is undermined by shortcut decisions. When professionalism slips, the process can look biased even if the technical steps were followed. Principles determine what your day-to-day behavior signals to everyone who later asks, "How did you decide that?" and "Could the outcome have been influenced?" The same evidence can become defensible or not depending on whether the process was independent, objective, and lawful in how it was conducted.

Mapped to the five phases: Allegation Analysis supports independence (no premature conclusions) and objectivity (questions target claims, not preferences). Planning strengthens confidentiality and legality through a need-to-know communication plan and documented decision points. Evidence Collection demonstrates competence and professionalism and protects confidentiality through secure handling. Analysis is where objectivity and impartiality must be most visible. Reporting reinforces legality and overall defensibility through clear, structured, evidence-linked writing.

A common failure pattern is to treat the phases as isolated boxes, doing evidence collection without revisiting allegation analysis when new dates arrive. Agile means you can loop, but you must loop transparently within the workflow.

### The Courtroom Scrutiny Standard

A workplace investigation can be fully appropriate and still fail later if the documentation and evidence choices look weak under courtroom scrutiny. The practical goal is not to "win," it is to be able to explain, with clear reasoning, how you handled facts, conflicts, and process decisions. This standard starts on day one, because the way you plan and capture evidence determines what you can credibly defend later.

Treat this as risk management. If an allegation later becomes contested, the investigation must withstand questions about neutrality, completeness, and fairness, even when litigation was not anticipated.

- **Courtroom-scrutiny mindset**: design the investigation so a third party can follow what happened and why. That means consistent records, traceable reasoning, careful evidence handling, and transparent choices about what was prioritized and what was not.
- **Neutrality is observable**: it is not just intent. It shows up in the questions asked, the witnesses selected, how contradictory evidence is treated, and whether the report separates facts from interpretation.
- **Evidence choices must be explainable**: courtroom scrutiny often focuses on what was pursued, what was not, and why. If a different path could reasonably have been taken, your investigation should document the constraints and decisions that shaped the outcome.

When you apply this standard, you naturally shift from "completing tasks" to "creating a defensible record." You still move quickly and adapt to new information, but you do it in a way that preserves integrity.

Courtroom scrutiny typically probes whether the investigator can explain: what you believed at each stage and what changed your view; which evidence you relied on and how you evaluated reliability; why certain questions were asked and why certain follow-ups were delayed or not pursued; and how you handled conflicts between witness accounts. Good documentation is not extra paperwork — it is the visible trail of reasoning that lets someone else understand the investigation's logic without guessing.

Even when evidence is "just notes," evidence handling includes: capturing interviews in a way that preserves meaning; recording dates, times, and sources consistently; keeping originals or secure copies where applicable; and controlling access to sensitive materials. A defensible process prevents hindsight bias — the investigation should not look like it was shaped after learning the outcome.

Neutrality shows up most clearly in interviewing (neutral techniques focus on eliciting events, observations, and context, with deliberate follow-up when accounts differ) and in reporting (separating facts from analysis, addressing key contradictions directly, and explaining the basis for key determinations in a way that matches the evidence collected).

To make the standard practical, use a simple internal test as you work. For any conclusion you plan to include, ask: Can I point to the specific evidence that supports it? Could a skeptical reviewer reconstruct the reasoning from my planning decisions to my evidence choices to my analysis? Have I maintained neutrality in how I collected information and how I wrote about it? If the answer is unclear, treat that as a signal to adjust evidence collection, document scope updates, or tighten the fact-versus-analysis boundary in the report.

Build the investigation record as if it will be reviewed by a careful, skeptical reader. If you do nothing else, make sure early decisions are captured, evidence handling is disciplined, contradictions are addressed in the analysis, and the report clearly distinguishes facts from interpretation. That combination is what turns day-to-day investigation work into a defensible process.`,
    },
    {
      kind: "scenario",
      title: "Agile Investigation Under Pressure: \"The Late Approval\"",
      bodyMarkdown: `Workplace allegations rarely stay tidy. Facts can surface midstream, parties may disagree about timelines, and the organization can face competing priorities such as protecting staff safety, meeting policy obligations, and responding to legal risk. A rigid, "do this next" checklist can feel comforting, but it often breaks when the situation changes.

**Scenario: "The late approval" allegation**

You are the designated investigator for a mid-size company that uses a ticketing system for approvals of vendor invoices. On Monday morning, HR receives a complaint from an Accounts Payable (AP) specialist, Maya, saying a coworker, Jordan (AP Team Lead), approved a vendor invoice late and encouraged Maya to "just sign off" to avoid escalation.

HR's initial request is narrow: confirm what happened, identify whether policy was violated, and recommend whether discipline is appropriate.

Within the first 24 hours, three new facts complicate the request:
- Maya produces emails that reference "speeding it up," but a later email thread suggests a manager, not Jordan, had asked for expedited processing.
- The ticketing system shows Jordan accessed the invoice ticket after the approval deadline, but the system clock is inconsistent across user accounts.
- Jordan informs you that the vendor is a recurring contractor and that Maya previously asked for similar "expedite" handling.

Meanwhile, Compliance asks you to preserve records because a separate audit is scheduled for the same week. Legal counsel also requests that you avoid over-promising outcomes and keep communications limited. On Wednesday, the parties' priorities shift again: Maya tells you she is concerned about retaliation, and Jordan requests to see the specific allegations in writing and asks whether other employees are being interviewed.

**Why a rigid checklist fails here**

A checklist assumes the allegation, evidence sources, and decision points are stable. This scenario shows the opposite. A checklist mindset tends to fail in at least four ways:

1. It treats "first request" questions as fixed — when new emails suggest a manager involved in expedited processing, the allegation scope effectively expands, and a checklist built around the original parties can miss key context.
2. It ignores systems evidence quality issues — the inconsistent system clock affects how you interpret timestamps, which affects whether your conclusions are sound.
3. It underestimates competing risks and parallel obligations — Compliance's record preservation request and Legal's communication limits require deliberate process choices, not "continue interviewing in the same order."
4. It freezes interview planning before stakeholder needs stabilize — when Maya raises retaliation concerns and Jordan requests specific disclosure, neutrality and fairness obligations require careful, documented handling.

Agile investigation does not mean "do whatever you want." It means you manage uncertainty in real time, using structured phases and defensible decision making: spot scope drift and update your working theory before committing to conclusions; keep evidence defensible even when timestamps are unreliable, by documenting the data-quality issue and how you verified or bounded its meaning; and adapt without losing impartiality by responding to stakeholder requests through documented process steps and consistent boundaries, not ad hoc promises.

Applying the phases to the scenario's timeline: Monday's Allegation Analysis phase captures the initial allegation and identifies alternative explanations, since the "manager asked for expedited processing" email means hypotheses must expand beyond Jordan. Tuesday's Evidence Collection includes verification steps for the unreliable timestamps, corroborating with other sources such as audit logs or email sent/received times. Wednesday's Planning revisits safeguards for fairness and confidentiality, and adjusts interview sequencing to respond to immediate concerns without creating promises that cannot be met or disclosing information inconsistently.

Defensible process decisions to document throughout: independence (avoiding conflicts of interest and designing the process so stakeholders cannot steer results); confidentiality (limiting access to evidence and communications, especially when retaliation concerns are raised); competence and professionalism (understanding the systems, documentation requirements, and interview method needs); objectivity and impartiality (treating both the complainant and the respondent as sources of information, not as conclusions); and legality (following applicable policy, privacy, and employment law constraints).

A courtroom is not the only standard of defensibility. Even when litigation is not expected, a neutral reviewer should be able to follow how uncertainty was handled, how evidence quality issues were treated, and how fairness was protected. Ask yourself: Would it be clear what you considered relevant and why? Would your evidence interpretation explain data quality problems rather than ignore them? Would your interview planning show a fairness logic, including how you managed disclosure and retaliation concerns? Would the reporting separate allegation, method, findings, and limitations without overstating certainty?

**Interactive walkthrough: Adapting the next move**

You are in the middle of the "late approval" investigation. New system timestamp discrepancies surfaced, Compliance asked for evidence preservation, Maya expresses retaliation concerns, and Jordan requests written details of the allegations and asks whether other employees will be interviewed. You need to choose your next actions across four steps while protecting fairness, confidentiality, and defensibility.`,
      questions: [
        {
          type: "multiple_choice",
          prompt:
            "New emails suggest a manager requested expedited processing, and you realize the original allegation scope may be broader than Jordan. What do you do next?",
          options: [
            "Update your working hypotheses and evidence targets, then adjust the interview plan accordingly.",
            "Only collect more evidence from Jordan to confirm or deny the new emails.",
            "Stick to the original allegation scope to avoid delays.",
            "Remove the manager emails from consideration to keep the file simple.",
          ],
          correctIndex: 0,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt:
            "The ticketing system shows inconsistent timestamps across user accounts. Compliance wants you to preserve records, but HR asks for a quick timeline conclusion. What is your best move?",
          options: [
            "Focus only on email timestamps and ignore system timestamps.",
            "Provide a definitive timeline using the ticketing timestamps as-is.",
            "Pause the evidence review until IT fixes the system permanently.",
            "Document the data quality issue and corroborate timestamps using additional sources before stating any timeline conclusion.",
          ],
          correctIndex: 3,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt:
            "Maya raises retaliation concerns. Jordan also requests written details of the allegations and asks whether other employees are being interviewed. How do you respond?",
          options: [
            "Reconfirm confidentiality boundaries, limit disclosure to what is appropriate for fairness, and document the communication and rationale.",
            "Answer questions verbally without updating written documentation so the file stays shorter.",
            "Tell both parties that you cannot share anything, even at a basic level.",
            "Share the full interview plan and the identities of other witnesses to be transparent.",
          ],
          correctIndex: 0,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt:
            "After analyzing the mixed evidence, you still cannot fully resolve whether Jordan personally initiated the expedite instruction or whether it came from leadership. What do you do in Reporting?",
          options: [
            "Write only a summary without methodology details to keep the report readable.",
            "Separate what is supported from what is uncertain, explain the evidence limitations, and avoid overstating certainty.",
            "Withhold the full report until every alternative is proven beyond doubt.",
            "Choose the most plausible conclusion and state it as a fact to help HR make a decision.",
          ],
          correctIndex: 1,
          needsReview: true,
        },
      ],
    },
    {
      kind: "failure_points",
      title: "Common Failure Points in Early Investigations",
      bodyMarkdown: `Early-stage mistakes in workplace investigations often look small in the moment. Under pressure, investigators may copy a template, rush interviews, or assume confidentiality is "handled," only to discover later that the case can no longer be defended.

**Template overuse**: Using the same checklist format for every allegation can create blind spots. It encourages people to treat the form as the work, instead of testing whether the evidence plan still fits the allegation as it evolves.

**Hidden bias**: Bias can enter through who gets asked first, what questions are framed, or how inconsistent facts are explained. Even well-meant assumptions can skew what evidence is collected and how credibility is assessed later.

**Confidentiality gaps**: When access controls, "need to know" practices, or secure storage are weak, information spreads beyond those who must handle it. That can compromise witness candor, contaminate evidence, and undermine defensibility.

**Independence pressure**: Independence can fail when the investigation is influenced by operational priorities, prior communications, or informal pressure. If the investigator cannot demonstrate impartiality in day-to-day decisions, the rest of the record becomes harder to trust. Agile investigators actively preserve independence as a working constraint, not a statement in the final report.

These early breakdowns share a pattern: they reduce the quality of the first decisions, the first requests for evidence, and the first documentation choices. Once that foundation is compromised, later phases struggle to "fix" what was never properly set up. A helpful way to see the downstream damage is to map each failure to later phases: when the early plan is driven by templates, evidence collection may miss the newest facts; when bias shapes interviews, analysis can become confirmation-seeking; when confidentiality is weak, evidence can be contaminated before it is even collected; when independence is not preserved, documentation choices may appear strategic rather than objective.

**Illustrative case**: A customer support investigator is assigned to look into an allegation that a team lead "discriminated" against a contractor. The investigator starts with a standard template checklist and schedules the first interviews for the same day. During the opening call, the contractor clarifies that the remarks were made during a project planning session, not in a performance review, and that a different employee witnessed the exchange. The investigator does not update the allegation scope, and the follow-up questions stay focused on the original template themes. After the second interview, a draft email summary is accidentally sent to a wider distribution list than intended. The investigator then feels pressured to "wrap up quickly," so they stop collecting documents that might clarify the actual workflow timeline. In the final report, the investigator can only rely on a narrow set of interview notes, and credibility disputes are not supported by corroborating evidence. During later scrutiny, it becomes hard to show why the evidence was limited, why the scope stayed fixed despite changing facts, and why confidentiality controls did not prevent information spread.

If those same facts were handled with an agile approach, the investigation would not ignore the template, but would treat it as a starting point. The key early adaptation would be to re-run the allegation definition and evidence needs as soon as the witness clarifies the context, protect confidentiality by tightening distribution controls for drafts, and preserve independence by documenting decisions about relevance and follow-ups as evidence-driven, not time-driven.

**Six common early failure points to recognize:**

- **Template rigidity**: Treating a generic checklist as the plan rather than a prompt can leave gaps when allegations shift. Agile work updates scope and evidence needs as facts emerge.
- **Assumed motive**: Pre-framing can steer questions toward one explanation and weaken exploration of alternatives. Neutral, balanced interviewing protects the later analysis.
- **Biased question order**: Starting with leading themes can shape a witness's narrative and reduce candor. Agile investigators use structured, even-handed questioning and follow up on contradictions.
- **Draft leakage**: Sending drafts or summaries to a wider group can contaminate evidence and undermine confidentiality. Agile investigators lock down access and distribution from day one.
- **Independence pressure**: Operational urgency should not control evidence collection decisions. Agile investigators document relevance criteria and keep investigation actions evidence-driven.
- **Stale scope**: If scope remains fixed after new facts appear, later phases rely on incomplete coverage. Agile practice revalidates the allegation definition before expanding or closing steps.

A strong investigation record is built early, not at the end. When pressure rises, agile investigators slow down only where it protects defensibility: how the allegation scope is defined, how evidence requests are updated, how confidentiality is enforced, and how independence is preserved in everyday decisions.`,
      questions: [
        {
          type: "multiple_choice",
          prompt:
            "Which response most improves defensibility when a witness clarifies that the allegation happened in a different context than first reported?",
          options: [
            "Skip follow-up documents and focus on writing the report faster",
            "Continue with the original template scope to avoid delays",
            "Update the allegation definition and evidence plan, then adjust interview questions accordingly",
            "Record the new context informally but keep the analysis unchanged",
          ],
          correctIndex: 2,
          needsReview: true,
        },
      ],
    },
    {
      kind: "knowledge_check",
      title: "Framework Knowledge Check",
      questions: [
        {
          type: "multiple_choice",
          prompt:
            "Which of the following best describes an agile investigation approach compared to a rigid checklist approach?",
          options: [
            "Both investigations rely heavily on the same set of predefined guidelines and checklists.",
            "Agile investigations focus primarily on compliance with regulations, while rigid approaches prioritize flexibility.",
            "Rigid investigations are always faster than agile investigations since they follow a fixed sequence.",
            "Agile investigations adapt to evolving situational needs, while rigid approaches strictly follow predetermined steps.",
          ],
          correctIndex: 3,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt:
            "In the context of workplace investigations, which phase involves gathering objective evidence?",
          options: ["Reporting Phase", "Analysis Phase", "Data Collection Phase", "Planning Phase"],
          correctIndex: 2,
          needsReview: true,
        },
        {
          type: "short_answer",
          prompt: "Explain the importance of defensibility in workplace investigations according to ISO principles.",
          needsReview: false,
        },
        {
          type: "short_answer",
          prompt: "Identify and briefly describe the five phases of an agile investigation.",
          needsReview: false,
        },
        {
          type: "multiple_choice",
          prompt:
            "Which of the following statements is true regarding the application of agile investigations in a corporate environment?",
          options: [
            "The agile method discourages stakeholder engagement to streamline the process.",
            "Agile investigations are primarily used for non-complex situations due to their nature.",
            "Agile investigations require less documentation than rigid approaches, making them quicker.",
            "Agile investigations can lead to more reliable outcomes due to their focus on adaptability.",
          ],
          correctIndex: 3,
          needsReview: true,
        },
      ],
    },
  ],
};
