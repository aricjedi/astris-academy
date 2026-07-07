import type { SeedModule } from "../types";

export const reporting: SeedModule = {
  title: "Reporting",
  lessons: [
    {
      kind: "lecture",
      title: "Report Structure, Defensible Findings, Evidence Links, Retention, and Remedial Measures",
      bodyMarkdown: `### Report Structure

A workplace investigation report should help decision-makers understand what happened, how you know, and what to do next. Good structure makes that easier to scan, easier to verify, and harder to challenge.

Decision-makers are usually trying to answer three questions fast: What is the case about (context and scope)? What did the investigation do, and what did it find (the logic from steps to findings)? What can we rely on (sources and clear limits)?

A practical report structure to reuse:

1. **Background (scope and context)**: reason for investigation, subject and parties (neutral identifiers), scope and limitations, relevant policies or standards. This prevents "scope drift," where conclusions reach beyond what was investigated.
2. **Executive summary (decision-ready overview)**: bottom-line findings, key supporting points, outcome or recommendations, uncertainties and limitations. Give decision-makers enough clarity to act and enough transparency to trust the report.
3. **Investigation steps (what you did)**: method overview, information sources (interviews and documents), how statements were handled, timing and workflow, data handling basics. This gives decision-makers confidence the investigation was fair and systematically linked to the evidence.
4. **Findings (what you determined)**: for each key issue — a finding statement, evidence basis, assessment of conflicts, and limits. This makes the report read like an evidence-based chain, not a narrative opinion.
5. **References (what you relied on)**: documents reviewed, interview records, policy references — for traceability if a point is challenged.

Good structure is a set of reader cues that reduce misunderstandings: put scope early, put actions next, put process before conclusions, and put citations at the end. If a reader cannot tell why a finding exists by the time they reach the findings section, the structure is doing you no favors.

Common structure errors: **scope mismatch** (conclusions covering events outside scope — tighten Background and rewrite findings to match); **too much detail in the summary** (move supporting detail into findings, keep references at the end); **findings without evidence basis** (revise the finding or document it as a limitation); and **missing references** (add them with neutral descriptors and dates).

### Writing Defensible Findings

Clear, defensible findings help decision-makers act fairly and help HR, compliance, and legal rely on the report later. Strong findings are factual, neutral in tone, and specific about evidence and limitations.

- **Evidence first**: pair each assertion with a clear support point (documentation reviewed, statements recorded, observable facts).
- **Neutral, not adversarial**: use balanced wording that does not assume intent or wrongdoing — describe behaviors, actions, dates, and context instead of character judgments.
- **Scope and limitations**: state what you investigated and what you could not determine, and why.

Check every finding sentence: Is it anchored to evidence? Is it written with an even tone? Does it respect the scope of what was investigated?

**Worked example.** Weak: "The manager deliberately interfered with scheduling to disadvantage the employee" — asserts intent and motive without evidence. Defensible: "In the scheduling emails reviewed (3 to 10 April 2025), the manager proposed changes to the employee's shifts on three occasions after the employee requested specific dates. The record does not contain direct evidence of the manager's intent." The improvement stays factual, cites the review scope, avoids mind-reading about intent, and states what the record does not show.

Three wording disciplines: avoid intent words ("deliberately," "maliciously," "fraudulently," "to retaliate") unless established; use evidence-supported certainty ("is consistent with," "cannot be confirmed" rather than "proves"); and separate facts from conclusions.

Practice rewrites: replace "deliberately" with action-based wording like "requested," "changed," or "stated," and note limits. Replace "proves wrongdoing" with "the evidence supports that..." Avoid mind-reading about motives from behavior alone. Acknowledge conflicting statements neutrally rather than picking a side without explanation. Respect scope boundaries — if something was not investigated, do not conclude about it. Prefer specificity ("email dated X," "interview on Y") over broad labels ("unfair," "retaliatory").

The most common drafting failure is a finding sentence slipping from describing evidence into declaring what should happen next. Defensible findings describe what was found, what was not found, and how sure you are based on the evidence — they do not recommend discipline or frame a legal outcome.

### Linking Findings to Evidence

A strong report shows, step by step, how each finding is supported by evidence that is traceable and checkable. A traceable link has three parts: **finding statement** (the claim), **supporting evidence** (specific sources), and **reasoning bridge** (brief explanation of how the evidence supports the finding, without expanding beyond what it shows).

Four evidence types and how to cite them: **documents** (specific records, quoted or paraphrased, with exact document ID, date, location); **interviews** (interviewee, date, role, with both sides considered for disputed accounts, avoiding claims about motivations); **observations** (where and when, with interpretation kept separate from description); and **data and logs** (time ranges and relevant fields, stating what the data indicates without overreaching).

A citation should answer: What is the source? Who provided or generated it? When was it created or recorded? Where is it in the report pack? What part matters (a quote excerpt or key fields)?

**Worked revision.** Weak: "The employee frequently adjusted shift start times to avoid overtime" — no records shown, "frequently" undefined. Revised: "Timekeeping records show repeated shift start-time adjustments on the employee's roster across the period of 3 to 28 March 2026, resulting in fewer overtime hours for the employee in those weeks," with a citation to the timekeeping extracts for each week and a reasoning bridge explaining the overtime calculation.

Use neutral, fact-forward terms: prefer "records show," "interview statements indicate," "the dataset suggests"; be cautious with "proves," "certainly," "intentionally," "fraud," "guilty." If you must discuss intent, anchor it to how the evidence supports that interpretation — an interview statement about reason is described as a claim by the interviewee, not an established fact.

Five checks for every finding: quote or pinpoint the exact source portion; state the time window covered; match certainty wording to evidence strength; separate fact from interpretation; and use a consistent citation format throughout.

### Retention and Confidentiality

After the report is complete, the work is not over. How it is stored, who can access it, and how long it is retained all affect privacy, fairness, and the organization's ability to respond to later questions.

Four pillars of post-investigation handling: **retention** (the required time to keep records, set by internal policy and applicable legal or regulatory requirements, applied consistently); **secure storage** (an approved system with encryption and physical controls where relevant); **access controls** (need-to-know, role-based permissions, and access logs); and **confidential handling** (limiting discussions, reducing unnecessary copies, preventing circulation through unofficial channels).

**Worked example.** After finishing an investigation, an investigator shares the full report with HR leadership; Legal later requests access for guidance; a director asks for a full copy but HR explains they only need a limited summary. HR documents who received the summary, who received the full report, the dates, and the reason each person needed the information, then moves the records to an approved secure system under a restricted folder with the retention schedule applied.

Practical approach for internal distribution: decide what must be shared (full report only to roles that require it, summaries for others); record distribution details (recipients, date, document type, business reason); and prevent unmanaged copies (avoid forwarding chains, prefer secure sharing links).

Confirm before moving on: the final report is in an approved restricted system; access is limited to need-to-know; distribution is the smallest document needed per role; distribution and access decisions are documented; and retention/disposal follows policy.

### Remedial Measures and Closure

After findings are drafted, the report often triggers follow-on decisions. Remedial measures and closure turn investigation outcomes into organizational learning without the investigator overstepping their role.

- **Role boundaries**: remedial measures should be recommendations, not decisions. Phrase actions as options grounded in the evidence, avoiding legal conclusions or attributing intent beyond documented facts.
- **Corrective actions**: target controllable causes and gaps revealed by the findings, with a clear link from each finding to the action, without prescribing specific employment decisions unless authorized.
- **Closure and learning**: communicate what can be shared, document what was done, confirm next steps, and suggest process updates, training, or monitoring within confidentiality and governance limits.

For each finding, build a small "action rationale": finding summary, evidence link, gap or risk (what process or control failed, at a high level), recommended corrective action (what should change, who owns it, what success looks like), and a governance note on who decides implementation details.

Use recommendation language: "Based on the findings regarding [process gap], it is recommended that the organization consider [corrective action]." Avoid phrasing that implies legal or disciplinary conclusions (statements about wrongdoing intent, or definitive employment actions) unless that is explicitly within your delegated role.

A recommended action should include: change target (what is being improved); implementation owner (who coordinates); and expected result (described in observable terms).

Separate observed facts (supported by evidence), reasoned recommendations (what should change to address gaps), and decision outcomes (what HR, Legal, or leadership will determine) — this separation helps downstream users act appropriately.

For closure communications: share only what stakeholders need to do their job; plan who gets notified and at what level of detail; document distribution, access controls, and follow-up actions; and pair process changes with a way to verify effectiveness. Do not list sensitive evidence details unnecessary for implementation, and do not imply disciplinary outcomes.

"The point of an investigation report is not only to explain what happened, but to enable appropriate decisions and learning within the organization." — Investigation reporting best practice guidance`,
    },
    {
      kind: "scenario",
      title: "Reporting an Investigation Case",
      bodyMarkdown: `A strong investigation does not end when interviews are complete. The report is where decisions get justified, risks get communicated, and fairness gets preserved through clear, neutral language.

**Case scenario**: You are the designated internal HR compliance investigator for a conduct concern. Complainant: Maya (Customer Operations). Respondent: Jordan (Customer Operations), Maya's peer. Allegation: over the past month, Jordan repeatedly made comments Maya experienced as unwelcome and used a confrontational tone during team communications; Maya also says Jordan shared a private detail about her with another coworker.

What the investigation team already did: reviewed relevant workplace policies (harassment and respectful workplace expectations, privacy and confidentiality expectations, reporting channel procedures); collected and reviewed chat messages from the team collaboration channel; interviewed Maya, Jordan, and two coworkers who were present during some interactions; and conducted a limited review of email records related to the private detail claim.

Key complication: one witness uses vague language ("it felt like," "I think maybe") and one chat message is missing a timestamp, so you cannot assume exact timing. You must write defensible findings without overstating what the evidence shows.

**Your task**: choose a report structure that fits the decision-making needs; draft findings using neutral, factual language; link each finding to transparent, traceable evidence; plan retention, secure storage, limited distribution, and confidentiality steps; and recommend remedial measures and closure steps that stay within an investigator's role.

A defensible findings style has three habits: fact-anchored wording ("In the team channel on [date], Jordan wrote..." or "During the interview, Maya stated..."); controlled inference (if you interpret impact, cite Maya's interview statement rather than claiming intent); and no timing certainty when evidence is incomplete (use ranges rather than precise claims when a message lacks a timestamp).

**Interactive scenario: Choosing evidence-based findings.** You are drafting the Findings section. A decision-maker will read your report to understand what is supported by evidence, what is not certain, and what recommendations follow. Pick the option that best matches evidence-based, defensible reporting across four turns.`,
      questions: [
        {
          type: "multiple_choice",
          prompt: "You draft a finding about Maya's report of impact. What wording best stays neutral and evidence-linked?",
          options: [
            "\"Maya reported that Jordan's comments felt unwelcome, and she described experiencing discomfort; this is supported by Maya's interview statement.\"",
            "\"Maya was definitely harmed by Jordan's intent, which proves misconduct.\"",
            "\"Maya may have felt uncomfortable, but the investigation cannot confirm anything.\"",
            "\"Jordan intended to offend Maya, which shows a policy violation.\"",
          ],
          correctIndex: 0,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt:
            "A chat message used to support a finding has no timestamp. How should you reflect that limitation in the finding?",
          options: [
            "\"The message is unimportant because it is incomplete.\"",
            "\"The message likely happened on the weekend because the content seems casual.\"",
            "\"On March 12, Jordan wrote the message.\"",
            "\"During the chat review period, the record includes a message attributed to Jordan containing the statement; the exact date is not confirmed due to missing timestamp information.\"",
          ],
          correctIndex: 3,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt: "A witness says, \"I think maybe the comment was about Maya.\" What is the best way to write the finding?",
          options: [
            "\"All witnesses agree Jordan targeted Maya.\"",
            "\"The witness confirms Jordan targeted Maya directly.\"",
            "\"The witness's statement proves the allegation is false.\"",
            "\"One witness used uncertain language and stated they thought the comment may have been about Maya; this perception is documented from the witness interview.\"",
          ],
          correctIndex: 3,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt: "You are preparing remedial recommendations. Which recommendation best fits an investigator's role?",
          options: [
            "\"Leadership should consider targeted training on respectful communication and clarify privacy expectations, based on the evidence about the communications recorded in the investigation.\"",
            "\"Jordan should be terminated immediately, effective today.\"",
            "\"The complainant should stop reporting concerns.\"",
            "\"No changes are needed because the report cannot prove intent.\"",
          ],
          correctIndex: 0,
          needsReview: true,
        },
      ],
    },
    {
      kind: "failure_points",
      title: "Common Failure Points",
      bodyMarkdown: `**Advocacy language creep.** Findings that read like arguments, demands, or blame statements can make the report feel unfair. Even when the evidence supports concerns, phrasing should stay factual and neutral so decision-makers can judge credibility and context.

**Unsupported or overreaching findings.** A finding must be tied to specific evidence. If the report adds interpretations, legal conclusions, or outcomes not supported by the record, it weakens defensibility and can create legal or HR risk.

**Poor structure and traceability.** Missing an executive summary, burying the investigation steps, or omitting citations makes it harder to verify how conclusions were reached, and slows downstream decisions.

**Legal overreach.** Do not state legal determinations or interpret statutes as an investigator. Write policy-relevant, factual descriptions and let designated decision-makers apply legal frameworks.

**Broken references.** Incomplete references, inconsistent citation formats, and missing links between findings and sources prevent traceability.

**Careless distribution.** Uncontrolled sharing increases privacy and risk. Limit distribution to authorized recipients, track where copies go, and follow secure storage and retention requirements.

**Practical corrections**: replace advocacy phrasing with evidence-based wording ("describes," "reports," "shows," "indicates"); check every finding against the record — if you cannot point to a specific source, you likely have an unsupported finding; keep legal conclusions out of the findings; make navigation predictable (background, executive summary, investigation steps, findings, references, in a consistent format); and treat distribution as part of the investigative process with a documented "need-to-know" plan.

**Illustrative example.** A team drafts a report where several sentences say "the policy violation is proven," one finding references an interview without a date or identifier, the references list is incomplete, and the report is emailed broadly "so everyone can see it." A reviewer flags that the findings sound like advocacy, evidence links are incomplete, the legal wording goes beyond what the investigator should conclude, and distribution/storage access is undocumented. The team revises: rewriting findings in neutral, fact-based language, adding citations, tightening structure, and limiting distribution to authorized roles with documented secure access.

**Worked revision pattern**: Before — "X intentionally violated the policy, proving misconduct." After — "The evidence indicates that X performed [behavior described factually]. This is supported by [source citation]. The record does not establish [intent], so the report does not claim intent beyond what the evidence supports."`,
    },
    {
      kind: "knowledge_check",
      title: "Reporting Knowledge Check",
      questions: [
        {
          type: "multiple_choice",
          prompt: "When structuring a report, which section is crucial for summarizing the overall findings in a concise manner?",
          options: ["Conclusion", "Appendix", "Methodology", "Introduction"],
          correctIndex: 0,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt: "Which of the following best demonstrates how to connect findings to evidence in a report?",
          options: [
            "Listing findings without supporting data",
            "Citing specific examples that support each finding",
            "Summarizing findings without details",
            "Providing opinions on the findings",
          ],
          correctIndex: 1,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt: "What is a common challenge investigators might face when reporting their findings?",
          options: [
            "Using a clear, professional format",
            "Interpreting findings with personal biases",
            "Drafting the report too quickly",
            "Ensuring all relevant stakeholders are informed",
          ],
          correctIndex: 1,
          needsReview: true,
        },
      ],
    },
  ],
};
