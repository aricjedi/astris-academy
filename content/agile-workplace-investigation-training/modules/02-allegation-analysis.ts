import type { SeedModule } from "../types";

export const allegationAnalysis: SeedModule = {
  title: "Allegation Analysis",
  lessons: [
    {
      kind: "lecture",
      title: "Policy and Legal Alignment, the 5Ws, Facts vs. Assumptions, Information Gaps, and the Working Summary",
      bodyMarkdown: `### Policy and Legal Alignment

Before planning any next steps, an allegation needs to be mapped to the governing standard(s): a company policy, a procedure, a code of conduct, or an applicable law — each shapes what the case must prove. When learners skip this alignment, they often collect the wrong type of information, miss key decision criteria, or involve the wrong stakeholders.

Alignment is the disciplined step of answering: "Which rules govern this allegation?" In workplace settings, that answer is usually a combination of company policy and procedure, code of conduct, and legal requirements. The governing standard determines the elements of the claim (what must be established), the relevant evidence (what counts as useful and appropriate), and the process constraints (how decisions must be handled and documented).

- **Policy** sets required expectations and sometimes the required response process. Evidence often focuses on whether the alleged conduct violated the stated rules and whether policy steps were followed.
- **Procedure** explains how the organization applies the policy. Evidence often focuses on process compliance, documentation, timelines, and whether required internal steps were executed.
- **Code of conduct** outlines behavioral principles and commitments. Evidence often focuses on demonstrated conduct against expected standards, even when details are less granular than a policy.
- **Law** adds statutory duties and definitions. Evidence must be aligned to legal elements and may trigger additional stakeholder involvement and specific privacy, recordkeeping, and reporting obligations.

Different standards can use different definitions, thresholds, and decision criteria, so the same workplace allegation can require different proof in different frameworks. Break the standard into three practical questions: What is the claim framed as? What are the decision elements or thresholds? What does the organization have to do next under the standard? When you align early, you can plan investigation steps that are proportionate and relevant to the specific elements that must be established.

After alignment, evidence selection becomes more focused. Instead of asking "What information do we have?", ask "What information will help determine whether the standard's elements are met?" Common evidence categories include witness statements, documents and records, system data (when appropriate and permitted), policy and training records, and prior reports or patterns (when the governing standard allows it). Alignment also clarifies what evidence is not necessary, and it informs evidence handling — privacy, confidentiality, retention, and access controls often differ depending on whether the matter is treated as a policy case, a legal risk case, or both.

Stakeholder involvement can change based on the governing standard: HR or People Operations for policy and code of conduct matters; health and safety or risk teams for safety-related policies and legal duties; legal counsel when legal interpretations or defensibility concerns are significant; security or IT when access logs or information security controls are central; and managers or designated investigators when procedures specify who must conduct interviews or approve decisions.

A four-step alignment checklist: (1) Identify the standard — state the governing document(s) clearly. (2) Define the proof elements — translate the standard into practical decision elements. (3) Plan evidence mapping — select evidence that directly supports those elements. (4) Set stakeholder roles — choose stakeholders based on the expertise required to apply the standard and meet process constraints, especially around privacy and documentation.

### Breaking Down the 5Ws

When an allegation comes in, the first job is to make the claim testable. Breaking it into the 5Ws (who, what, when, where, and why or under what circumstances) helps you define the exact conduct or event that must be investigated — without quietly filling in missing details or assuming unverified facts.

Your outcome is a "core issue statement" you can support with evidence requirements: specific enough to guide investigation planning, yet neutral enough that it does not overstate what is known.

- **Who**: identify the people or roles tied to the alleged conduct, using the wording of the allegation, and avoid adding extra people not already named.
- **What**: state the specific action, omission, or behavior being alleged. Keep it tied to conduct described in the allegation, not conclusions.
- **When and Where**: capture the timing and location details provided, or record that they are unknown.
- **Why or under what circumstances**: answers what context makes the alleged conduct meaningful or relevant. If the allegation does not actually state a reason or context, write it as "not specified" rather than inventing one.

Four approaches to the 5Ws: avoiding assumptions (separate known details from unknowns); neutral wording (use factual, conduct-based language, replacing labels with descriptions); evidence clues (each W hints at evidence sources — named people suggest interview targets, specific locations suggest records or witnesses); and policy-relevant focus (align the 5Ws with what the claim must prove under the applicable standard).

Once you extract the 5Ws, convert them into a core issue statement using a template like: "Whether [who] [what] occurred at [when] in [where], under [why or circumstances claimed]," plus a list of known versus unknown details.

**Worked comparison.** A vague allegation like "John bullied Sarah at work" has "who" partially stated, "what" relying on a conclusion ("bullied") instead of describing alleged behavior, and no when/where/circumstances. A properly framed allegation — "On 12 March, John sent Sarah repeated derogatory messages in the office hallway outside the sales meeting room after she declined to share a deal deck" — gives you a clean 5W breakdown and a testable core issue statement.

Common pitfalls: label substitution (writing "retaliation occurred" without describing the specific retaliatory conduct and timing); timing compression (guessing a date range because it seems likely); context invention (adding a motive or trigger that is not stated); and over-personalization (treating the "who" as settled fact when identity is unclear).

### Facts, Assumptions, and Opinions

When you receive an allegation, the first risk is not whether evidence will be found — it is whether the plan starts from beliefs that are not yet verified. Clean separation of facts from assumptions, speculation, interpretation, and opinions helps you stay neutral and decide what kinds of evidence can confirm or challenge each claim.

Use a quick check for every sentence you plan to rely on:
- **Verified fact**: you can point to a reliable source (a document, a system record, a direct observation with details, or a confirmed statement).
- **Assumption**: you are treating something as true because it seems likely, not because it is supported.
- **Speculation**: you are guessing about unknowns.
- **Interpretation**: you are explaining meaning or cause (what a behavior "suggests").
- **Opinion**: a value judgment (for example, "unprofessional," "suspicious," "malicious").

A useful mindset: facts describe; interpretations explain. Descriptions should be rock-solid; explanations should be testable. Watch for language that sounds factual but is inferential: certainty language about unknown causes or intent ("he was trying to...", "she intended to..."); "must have" or "clearly" statements; and attribution of action without a source ("she reported him" without a verifiable trail).

**Rewrite example.** The inferential allegation "Jordan deleted the record to hide wrongdoing" becomes the evidence-friendly rewrite: "Jordan deleted a record on [date/time] (source needed). The allegation claims concealment or wrongdoing; the investigation should test what was deleted, when, and why, using corroborating sources."

This approach reduces confirmation bias and improves fairness, because alternative explanations can be explored without changing the credibility threshold. Three practical approaches: label before you plan (categorize each sentence, then decide whether next steps should verify, test, clarify, or challenge it); rewrite to testable language; and protect neutrality (so investigation objectives match what is actually known, not what someone believes).

### Spotting Information Gaps

When an allegation is unclear, your investigation plan can drift, because the next steps are based on what you think the allegation says. Spotting information gaps helps you be precise about what must be clarified first, before collecting evidence or contacting people — which also supports neutrality, because you do not fill missing details with assumptions.

Four types of information gaps: **dates** (missing or fuzzy timing — clarify the time window so you can identify which records and logs could exist); **names and roles** (check whether the report includes consistent identifying details — clarify who observed the event, who was involved, and who may hold relevant records); **locations and access** (identify whether the report specifies where it happened and what access or systems were involved); and **procedures and context** (separate "what was done" from "how it was handled" by checking for the applicable process).

**Worked example.** A report states: "After I complained to HR, my supervisor started giving me unfair schedules and excluded me from meetings. I believe this was retaliation." The gaps are concrete: the date of the HR complaint, the name of the HR contact, the specific meetings missed, the location where schedules were assigned, and any reference to the scheduling procedure. Only after these are clarified can the investigator plan which calendars, HR case notes, scheduling records, meeting invites, and policy provisions to review.

This prevents a common failure mode: evidence collection that starts too early, before narrowing time windows, identities, or procedures — which often collects irrelevant information or misses the most probative sources. A practical technique is a "gap to evidence" mapping: for each gap, ask what evidence could address it, then decide which gaps must be clarified first based on how they affect all other decisions in your plan.

Before moving to interviews or evidence requests, pause and ask: if I only had what is written, could I confidently identify the relevant policy, the key events to test, and the likely evidence sources? If not, the missing elements are not minor writing issues — they are the inputs your plan requires.

### Writing the Working Summary

A working summary turns an allegation into a clear, neutral statement you can use to plan the investigation. It should describe the issue to be assessed, not what you believe happened or what the outcome should be. When the summary is precise and unbiased, it becomes an anchor for decisions about scope, interview goals, evidence selection, and reporting.

To keep neutrality, treat the allegation as a starting claim to be tested. Biased framing implies wrongdoing is proven, credibility is settled, or intent is known (for example, "employee deliberately falsified records"). Neutral framing ties statements to the allegation and to what must be established (for example, "it is alleged that records were changed; the investigation will assess whether policy was followed"). Outcome-neutral focus describes the issue to assess, not the conclusion.

Three techniques: anchor the assessment question (use phrasing that signals "to determine" or "whether"); keep it evidence-based and time-bounded (dates, locations, roles, and systems written as what is alleged or known, not confirmed); and separate facts from interpretation (summarize verified observations separately from claims that rely on interpretation, such as motive or intent).

A practical structure: (1) alleged event and issue, (2) parties and roles, (3) time and place as alleged, (4) relevant policy or rule linked conceptually, (5) assessment question. If the allegation lacks information, write a neutral "needs clarification" element rather than filling gaps with assumptions.

**Worked example.** The allegation "John broke the rules by changing expense records to cheat his manager" produces a biased summary if written as "John deliberately falsified expense records to cheat his manager, which is misconduct under policy" (asserts intent, confirms wrongdoing, decides the outcome). A neutral working summary reads: "It is alleged that John changed expense records submitted to his manager. The investigation will determine whether the changes were authorized and whether the submission process complied with the applicable expense and conduct policy requirements. The key details requiring verification include the date(s) of the changes and the specific system or approval steps used."

Four common pitfalls and fixes: intent stated (avoid "deliberately," "fraudulently," "negligently" unless evidenced); credibility assumed (avoid treating the allegation as already true); outcome pre-decided (write "whether" the conduct meets the definition of the relevant breach, not a concluded violation); and gaps hidden by assumptions (include "needs clarification" rather than silently filling in missing dates, systems, or approval steps).

Once written, the working summary drives scope (what the investigation covers and what lies outside it), interview goals (each interview clarifies one or more summary items), evidence selection (evidence maps to the summary), and reporting clarity (conclusions trace back to the assessment question). A simple check: if you can remove the summary and still understand what to investigate, it's probably too vague; if it includes conclusions you cannot yet evidence, it's probably too biased.`,
    },
    {
      kind: "scenario",
      title: "Analyze an Allegation",
      bodyMarkdown: `Workplace complaints often arrive incomplete, emotionally charged, and mixed with speculation. Turning a messy allegation into a neutral, workable case starting point helps HR and compliance teams plan correctly and protect fairness. This exercise practices the first critical move: connect the allegation to the right policy and law, separate what is verified from what is assumed, then rewrite a neutral working summary you can build an investigation on.

**Scenario you must analyze**

A complaint is received through your workplace reporting channel. The complainant says that "Jordan" was reported to have "been targeting me" after a recent incident at the office. The complainant states that they believe Jordan told "others" about a personal matter involving the complainant, that this started "around last month" after a meeting with Jordan's team, that they feel uncomfortable and believe Jordan's behavior is "unfair" and "revenge" (though with no direct evidence of motive), and that they overheard a conversation near a break room without naming who was speaking or what was said. The complainant asks for "immediate action" and suggests the company is "ignoring harassment" because it happened before to someone else (no details provided). The complaint does not include dates, specific witnesses, exact locations beyond "near the break room," or the policy section the complainant thinks applies.

**Mapping this complaint to policy and law**

Likely policy areas to consider: anti-harassment and respectful workplace expectations (conduct that makes the complainant uncomfortable); confidentiality and privacy obligations (personal information allegedly shared); and non-retaliation and fair treatment expectations (behavior framed as "unfair" and "revenge," even though motive is not proven). Use the alignment to focus what must be evidenced — for confidentiality, verifiable information sharing (who, what, when, how you know); for respectful workplace expectations, observed conduct and its impact as described through verified details, without assuming intent.

**Breaking the allegation into the 5Ws (without assuming facts)**

- Who: complainant, Jordan, "others" (if not named, treat as a gap).
- What: sharing personal matter, "targeting," overheard conversation — keep specific to observable claims.
- When: "around last month" is vague; note what is missing.
- Where: "near the break room" mentioned, but exact room, department, or event context is missing.
- Why or under what circumstances: capture in neutral terms (complainant believes it followed a meeting with Jordan's team) without stating motive as fact.

**Separating verified facts from assumptions, speculation, and opinion**

The complaint includes emotionally loaded terms like "targeting," "revenge," and "harassment," which reflect genuine concern but are not proof. Categorize each claim: verified facts (concrete, checkable statements), assumptions (interpretations that could be wrong, like "revenge"), speculation ("others" heard something, with no names or content provided), and opinions (value judgments about fairness or credibility). Use the categories to drive evidence requests — verified facts guide what to find in records or witness testimony; assumptions and speculation guide what you must clarify rather than treat as established.

**Spotting the missing information that blocks planning**

Likely gaps: exact dates and times; names and roles of "others" and any witnesses; exact location details beyond "near the break room"; exact content of the overheard conversation; specific policy breach theory; and context for the "previous" complaint mention.

**Drafting a neutral working summary from what is known**

A strong working summary states the core issue in neutral language, includes only verifiable details while preserving the complainant's claims as claims, and lists what must be clarified without predicting whether the allegations are true.

Example: "The complainant reports that they felt uncomfortable after a meeting involving Jordan's team approximately in the previous month. The complainant alleges that Jordan shared a personal matter concerning the complainant with other employees and that the complainant overheard a conversation near a break room that may relate to that matter. The complaint does not include exact dates, names of the employees referred to as 'others,' or the specific content of what was overheard. Clarifications needed include the exact meeting date, the date and approximate time of the alleged information sharing, the identities and roles of any witnesses or employees present, the specific personal matter referenced, and any relevant communications or records. The complainant also mentions that similar concerns occurred previously with another person, but no details are provided."

Notice how this draft does not conclude misconduct occurred — it captures the alleged behaviors and preserves neutrality by naming what must be clarified.

Before interviews or document requests, verify you have: which policy areas could apply; which elements of the allegation are verified claims; which elements are assumptions or speculation; which information gaps remain; and a neutral working summary that states the core issue without prejudging credibility or outcome. If any of these are missing, the investigation plan will likely be unfocused, either too broad or too speculative.

Fair investigations start with careful framing, not conclusions.

*(This scenario is structured as worked demonstration and checklist content rather than a single scored question.)*`,
    },
    {
      kind: "failure_points",
      title: "Common Allegation Analysis Errors",
      bodyMarkdown: `**Taking statements as proof.** A frequent error is accepting allegations at face value, then treating the claim itself as verified fact. That distorts neutrality because the plan starts from an outcome, not from what must be proved. *Correction*: mark what is alleged, then list what would need evidence to confirm each key point.

**Confusing allegations and conclusions.** Mixing a conclusion into the allegation (for example, "She discriminated against me") without separating underlying observations from the inference makes it harder to identify what evidence is actually required. *Correction*: rewrite statements so the allegation describes observable events, not conclusions.

**Framing the issue too broadly.** When the allegation is framed at a high level, the investigation can sprawl, miss key details, or unintentionally assume facts. *Correction*: narrow to the core incident(s) and the relevant policy provisions that define what must be proved.

**Not identifying policy or law first.** Interpreting the allegation without first identifying the relevant policy, procedure, code of conduct, or legal standard risks collecting evidence for the wrong elements. *Correction*: map each core allegation element to the exact governing reference(s) and keep those elements visible as you plan.

**Missing the 5Ws breakdown.** Not decomposing the allegation into who, what, when, where, and why makes interview questions and evidence requests vague, and you may treat assumptions as details. *Correction*: convert narrative into a 5W structure using only what is known or alleged.

**Mixing facts and assumptions.** Verified facts mixed with assumptions, speculation, interpretations, or opinions early on biases the working plan and weakens neutrality. *Correction*: label each statement as verified, alleged, assumed, or unknown, then build evidence requests only from what must be proved.

**Leaving information gaps unaddressed.** Missing dates, names, locations, procedures followed or not followed, or context that changes meaning can stall the investigation or let it proceed on incomplete context. *Correction*: make a gap list, tie each gap to an evidence need, then decide what must be clarified before conclusions are attempted.

**A biased working summary.** A "working summary" that is a conclusion, a credibility judgment, or a story told too broadly means later steps inherit the bias. *Correction*: write a concise, neutral working summary that captures the issue and the elements to be proved, without predicting outcomes.

**Illustrative mini case.** A complaint email says: "My manager discriminated against me. After I reported a concern, he stopped giving me good projects. People are scared to speak up, and I know he is retaliating. This has been going on for months." The email cites no specific policy or legal basis, gives no dates, project names, locations, or whether a formal procedure was used for the original concern. The repair moves: start with policy mapping, rebuild with 5Ws, label facts and inferences, create a gap list, and write a neutral working summary.`,
    },
    {
      kind: "knowledge_check",
      title: "Allegation Analysis Knowledge Check",
      questions: [
        {
          type: "multiple_choice",
          prompt:
            "When investigating a workplace allegation, what should be prioritized to distinguish fact from assumption?",
          options: [
            "Assuming the most common narrative",
            "Consulting documented policies and procedures",
            "Gathering subjective opinions from witnesses",
            "Considering previous allegations against the individual",
          ],
          correctIndex: 1,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt: "Which of the following is an example of a neutral working summary?",
          options: [
            "Employee A reported Employee B was stealing company property.",
            "There's a possibility Employee B may not have been in the right state of mind.",
            "It appears that disagreements frequently occur between Employee A and Employee B.",
            "A witness stated they saw Employee B near the supply room during the incident.",
          ],
          correctIndex: 3,
          needsReview: true,
        },
        {
          type: "short_answer",
          prompt: "What steps can be taken to ensure that necessary information isn't missing during an investigation?",
          needsReview: false,
        },
        {
          type: "short_answer",
          prompt: "How can HR professionals balance neutrality while summarizing allegations?",
          needsReview: false,
        },
        {
          type: "multiple_choice",
          prompt: "What is the most effective way to align an allegation with the relevant workplace standards?",
          options: [
            "Making assumptions based on the alleged individual's history",
            "Reviewing past cases without considering current policies",
            "Evaluating the allegation against established guidelines and codes of conduct",
            "Discussing the allegation informally with colleagues before proceeding",
          ],
          correctIndex: 2,
          needsReview: true,
        },
      ],
    },
  ],
};
