import type { SeedModule } from "../types";

export const investigationPlanning: SeedModule = {
  title: "Investigation Planning",
  lessons: [
    {
      kind: "lecture",
      title: "Scope, Stakeholders, Evidence Prioritization, Milestones, and Risk Anticipation",
      bodyMarkdown: `### Defining Scope

A strong investigation starts by drawing clear boundaries around what the inquiry will and will not cover. Defining scope helps keep the investigation fair to everyone involved, aligned to the allegation, and manageable for the team to complete within time and resource limits. It also reduces the risk of "scope drift," where new questions keep expanding the case beyond what you can reliably prove.

A good scope definition answers four questions: What is the allegation and what claims must be assessed? What policies and standards apply? What jurisdiction and authority limits apply? What procedural and practical limits shape the investigation? When these pieces are explicit, the team can plan interviews, document requests, and analysis methods without chasing unrelated issues.

A scope statement works best with two parts: an **In Scope** list (built from the allegation's exact elements) and an **Out of Scope** list (built from policy, jurisdiction, and procedural limits — with the reason stated, such as "policy does not apply," "outside remit," or "not within the process timeframe"). A common mistake is writing only an In Scope statement and leaving Out of Scope undefined, which invites assumptions and scope drift.

**Worked example.** A workplace ethics team receives an allegation that a manager "harassed" an employee during a specific project cycle, and leadership asks the investigation to "look at everything related to the employee's experience," including years-old performance reviews. The investigator drafts a scope statement focused on the allegation elements — whether the manager's conduct meets the harassment definition during the specified cycle — and explicitly excludes older performance reviews (outside the time window, different policy framework, separate review process). When a witness later suggests broader unrelated misconduct, the investigator documents it for possible referral but keeps it out of scope to preserve fairness and evidentiary focus.

Scope drift often begins when investigators respond to pressure to "follow every thread," or confuse relevant background with an expanded allegation. Watch for warning signs: new topics not mapped to allegation elements, timeframes widening without policy support, evidence requests that cannot reasonably be evaluated within the planned process, and implied determinations about matters outside the team's authority. Instead of expanding by default, use a decision lens: Does the new matter relate to an allegation element you must assess? Is there a policy basis for treating it under the same standard? Does jurisdiction and process allow you to examine it? Can you investigate it reliably within procedural limits? If you cannot answer "yes," keep it out of scope and document it for potential referral.

### Mapping Stakeholders

When an investigation begins, the fastest way to lose credibility is to let the wrong people influence the wrong parts of the process. Stakeholder mapping keeps the inquiry focused, fair, and manageable, while protecting independence and confidentiality. Stakeholders are any individuals or groups who can affect the process, evidence flow, or outcome, even if they are not making the final determination.

Sort stakeholders by function: people who directly relate to the allegations (complainants, subjects, witnesses); people who oversee process safeguards (HR, Legal, Compliance); people who control resources or operational constraints (business leaders); and people who need information to support safety, fairness, and continuity.

Good stakeholder mapping reduces three risks: bias and undue influence, confidentiality failures, and process drift. For each stakeholder group, capture three things: what they need to know (purpose, timeline, confidentiality expectations); what they should do (participate, provide records, flag safety concerns); and what they must not control (interview questions, scope expansion, evidence access, credibility assessments).

- **HR** typically ensures consistency with workplace policies, appropriate accommodations, and practical fairness — but should not direct factual findings or "manage the outcome."
- **Legal** typically ensures procedural fairness and risk-managed communications — but should not micromanage interview substance to the point the investigation stops being independent.
- **Compliance** focuses on policy adherence, governance, and escalation requirements — but should not turn the investigation into an operational audit led by compliance staff.
- **Business leaders** need high-level information for continuity and communication clarity — but should not control scope, direct interviewing priorities, or obtain evidence beyond legitimate business need.

Stakeholder mapping connects directly to scope control: unmanaged stakeholder input is one of the most common drivers of scope creep. Use two checkpoints — before interviews, confirm what each stakeholder group may request; during the investigation, route additional information through a consistent gate (the investigation lead), assess relevance to the defined allegations and jurisdiction, and decide whether it fits inside scope.

### Prioritizing Information Sources

Planning an investigation is where you prevent delays and avoid missing critical facts. A strong plan turns "we should look into this" into a clear map of information sources, a priority order, and a practical sequence for gathering and reviewing evidence.

Treat evidence as something you "test" through three lenses at once: **reliability** (how trustworthy and verifiable), **relevance** (does it directly support or challenge the investigation questions), and **accessibility** (can you obtain it quickly enough). Sources scoring high on all three are your early anchors; high reliability but low accessibility become "start early" items; high accessibility but low relevance often belong later or get filtered out.

Four evidence types: **witnesses** (useful for context and perceptions — prioritize direct knowledge and time proximity); **documents** (useful for what was claimed, decided, or communicated in writing — prioritize originals and official correspondence); **systems and logs** (useful for timelines and operational facts — prioritize audit logs and standard telemetry with timestamps); and **records and archives** (useful for historical patterns and policy context).

A 5-step evidence sequence: (1) set the question map — translate scope into a short set of answerable questions; (2) start the fastest anchors — secure high-reliability, high-relevance evidence you can obtain quickly; (3) schedule interviews with targets — identify who can address gaps the evidence does not cover; (4) run requests in parallel — submit slow requests (archives, admin access, third parties) early; (5) close gaps with follow-ups — use additional interviews and requests to resolve inconsistencies.

Each time you add a new source, ask: What question does this answer? How reliable is it compared to what we already have? How quickly can we obtain it, and what happens if we do not? If it answers a key question and is time-sensitive, prioritize it.

### Milestones and Escalation

Good case management does not mean constant meetings — it means using time-based and evidence-based checkpoints to keep the work focused, fair, and defensible. Milestones work best when tied to investigation "products," not just dates (for example, "interview plan approved" rather than "progress meeting").

Use two layers: **process milestones** (what you must do) and **decision milestones** (what you must be ready to decide — stay within scope, expand scope, or escalate). Three checkpoint types:

- **Scope checkpoint**: after early fact-gathering, review whether the evidence matches the allegation you were asked to investigate.
- **Evidence sufficiency review**: before declaring facts "complete," check whether remaining uncertainty is meaningful and whether the most reliable, relevant, accessible sources have been covered.
- **Decision readiness gate**: before recommending next steps, validate that findings are supported by the strongest sources and that policy or procedural constraints were respected — escalate here if Legal or senior review is needed, rather than after conclusions are drafted.

Every internal review should produce an actionable outcome: continue as planned, reassess scope, expand information gathering, or escalate for legal or senior input.

**Reassessment triggers** (adjust the plan without changing the core allegation): new facts suggest a different "how" or "when" that still fits the allegation category; witness access changes; procedural constraints appear.

**Expansion triggers** (collect additional sources that could affect findings): meaningful gaps in reliability; material inconsistencies unresolved after planned follow-ups; systems or records likely exist but were not reachable in the original phase.

**Escalation triggers** (Legal or senior decision-makers must weigh in): legal exposure or procedural risk; high-impact outcomes (reinstatement, termination, major business operations); pattern concerns suggesting broader misconduct; confidentiality or privilege complications.

To avoid bureaucracy while staying defensible, before scheduling another meeting ask: What decision will we make at this checkpoint? What information do we need by then? What action will change after the decision?

### Risk Anticipation

Good investigation plans anticipate what can go wrong once people realize an investigation is underway — retaliation, data loss, confidentiality issues, and operational disruption can harm people, evidence, and the credibility of the outcome.

Four risk types and their mitigations:

- **Retaliation**: build "need-to-know" communication boundaries into the plan. Define who can coordinate scheduling, who can inform managers, and what language is acceptable. Include a short escalation path if signs of intimidation or biased scheduling appear.
- **Data loss**: treat evidence as time-sensitive. Identify likely relevant systems and document sources, then define early steps to suspend routine deletion and capture snapshots or exports where appropriate.
- **Legal exposure**: reduce avoidable risk by setting expectations for procedural fairness, documentation, and decision checkpoints, aligned with internal policy and jurisdictional requirements.
- **Confidentiality and disruption**: protect confidentiality so discussions do not spread beyond need-to-know, and sequence activities to minimize downtime and avoid drawing attention.

For each risk type, ask: What might trigger it? Who would be affected first? What evidence or process element is most vulnerable? What mitigation action is feasible without stalling the investigation? These controls should live inside the investigation plan as explicit actions tied to timing, not in a separate risk document no one uses.

Common escalation triggers to build into the plan: new facts that expand likely sources of evidence; information access problems that threaten completeness; confidentiality boundary breaches (even partial); indicators of retaliation pressure; and clear signs the investigation is harming operations beyond what is acceptable.

End every planning checkpoint with two questions: "If this goes wrong, what will we lose first, and who will be affected first?" and "What single mitigation action can we take now that is feasible under operational constraints?"`,
    },
    {
      kind: "scenario",
      title: "Investigation Planning Workshop: Evolving Facts and Risk (Misuse of Confidential Data)",
      bodyMarkdown: `You are planning an internal workplace investigation where the facts and risks change as new information appears. The goal is to make your plan defensible and efficient by making clear choices about scope, stakeholders, what evidence to prioritize, and when to escalate.

**Scenario: Allegation of Misuse of Confidential Data**

A manufacturing company has received an internal complaint that a team lead, Jordan Lee, accessed customer order reports he was not authorized to view and may have shared them with a contractor. The complainant, Avery Chen, reports observing Jordan reviewing files on his work laptop near the end of a shift, and that a contractor later seemed to know specific pricing details Avery believes the contractor should not have.

A preliminary HR review begins. Within 48 hours, an additional risk emerges: a third-party email is discovered in a shared mailbox suggesting a "pricing spreadsheet" may have been attached to a message Jordan sent, and IT reports that the shared mailbox has retention limitations that may auto-delete content sooner than HR can access it. As interviews are scheduled, the business learns Jordan has recently asked to access another protected system for a new project. Compliance flags that confidentiality must be handled carefully, especially with email evidence involved, and Legal warns the plan must be able to explain why certain sources were not pursued if they later become relevant.

**Planning lenses**: allegation clarity (what exact conduct is alleged, and what alternative explanations could fit); policy and jurisdiction limits; operational feasibility (which sources can be accessed quickly and safely); and evolving risk factors (which new facts require reassessing the plan, expanding scope, or escalating earlier than planned).

A defensible plan distinguishes between new evidence that confirms the original theory (continue current scope, adjust sequencing) and new evidence that raises a new plausible theory (expand scope, adjust stakeholder management, potentially escalate). The mailbox retention limitation means email content preservation should be treated as an early priority, not a later step.

Risk categories specific to this case: data loss and spoliation risk (retention limits, auto-deletion, system access delays); confidentiality and privacy risk; legal exposure risk (whether scope, methods, and document handling can be explained); retaliation risk; and operational disruption risk.

**Interactive decision walkthrough: Planning decisions under evolving risk**

You are the investigation lead preparing the next phase. IT confirms the shared mailbox may auto-delete content within days, Compliance asks for tighter confidentiality controls, and Legal wants clear escalation logic if scope expands. You must make four sequential decisions to keep the plan fair, defensible, and efficient.`,
      questions: [
        {
          type: "multiple_choice",
          prompt:
            "IT says it can preserve mailbox content only if you confirm the exact timeframe and the shared mailbox scope today. What do you do?",
          options: [
            "Request preservation immediately with the best available timeframe and a narrow description of the mailbox and likely senders.",
            "Skip mailbox preservation and focus on system logs only.",
            "Ask IT to preserve everything with no timeframe limits.",
            "Wait to finalize scope after first interviews before requesting preservation.",
          ],
          correctIndex: 0,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt:
            "Compliance requires a confidentiality approach that balances information needs across stakeholders. What do you do?",
          options: [
            "Share full allegation details with all interviewees.",
            "Tell business leaders about the subject's alleged conduct early so they can manage workloads.",
            "Limit sensitive details to a need-to-know group, define what each stakeholder role can access, and keep evidence storage/sharing controlled by the case team.",
            "Wait until interviews are completed before finalizing stakeholder access rules.",
          ],
          correctIndex: 2,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt:
            "Jordan's recent system access request may involve a different protected dataset than the original allegation. What do you do?",
          options: [
            "Ignore the new dataset request since it isn't in the complaint.",
            "Add an expansion trigger for the protected dataset and include a short initial check within existing scope boundaries to confirm relevance.",
            "Stop the investigation until Legal approves full scope expansion.",
            "Immediately expand scope to review all systems Jordan accessed in the last year.",
          ],
          correctIndex: 1,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt: "A witness reports pressure from coworkers after being approached informally. What do you do?",
          options: [
            "Remove the witness from the process without documenting the reason.",
            "Escalate promptly to HR leadership and Legal, document the indicator, and adjust the plan to include witness protection steps and tighter communication controls.",
            "Wait for the subject interview before deciding on retaliation steps.",
            "Continue interviews but remove mention of witness comfort to avoid distraction.",
          ],
          correctIndex: 1,
          needsReview: true,
        },
      ],
    },
    {
      kind: "failure_points",
      title: "Common Planning Failure Points",
      bodyMarkdown: `**Vague scope.** When scope is unclear, learners may gather too much (or too little), mix unrelated issues into the file, or apply the wrong procedural lens — leading to weak coverage, inconsistent findings, and reporting that does not cleanly answer the original allegations. *Fix*: write the scope as clear, testable boundaries tied to the allegation, including what is explicitly out of scope and any procedural limits.

**Stakeholder overreach.** Stakeholder planning fails when the investigator shares the wrong amount of detail with the wrong people, or treats every stakeholder as a decision-maker. Over-informing subjects, complainants, or leaders can harm confidentiality and compromise witness candor. *Fix*: list each key stakeholder and define their role, what they need to know, what they do not need to know, and what approvals are required.

**Poor preservation planning.** If the plan does not cover what evidence must be preserved, when, and who coordinates it, key records can disappear. *Fix*: identify likely evidence categories and set a preservation action tied to the earliest reasonable trigger, with a named owner and a verification step.

**No escalation triggers.** Treating escalation as ad hoc means the investigation can stall on sensitive issues, then surge late, forcing rushed evidence handling. *Fix*: define specific moments to escalate for legal or senior review — credible retaliation risk, higher severity, access/confidentiality complications, or jurisdiction disputes.

**Wrong information sequencing.** Starting with low-reliability sources or waiting to identify relevant systems can mean missed context and rework. *Fix*: use milestones tied to decisions — after initial interviews, reassess whether scope needs expansion or additional systems are implicated.

**Underestimating retaliation risk.** Overlooking retaliation, informal interference, or witness discouragement can produce declining cooperation, inconsistent accounts, or sudden data access issues. *Fix*: build risk mitigation into the plan before collection starts — restricted information sharing, secure record handling, contingency requests if access is delayed.

**Confidentiality gaps.** Confidentiality breaks happen when the plan does not specify who can know what, when it is safe to communicate, and what is restricted — even careful investigators can inadvertently leak details through emails, calendar invites, or unsecured file sharing.

**Downstream reporting failure.** A planning mistake becomes a reporting problem when evidence is not captured with traceability to scope, roles, and sources, producing findings that do not map cleanly to the allegation.

**Illustrative case.** A workplace receives an anonymous complaint alleging inappropriate conduct in a team meeting, time-bound to a specific month, referencing possible inappropriate comments and related internal messages. Leadership wants a quick investigation ahead of a reorganization vote. Within the first week, the investigator learns the complainant is a contractor with concern the subject may influence other contractors informally; relevant messages may be in two systems, one managed by a different business unit; two witnesses are hesitant and ask if the subject will learn who said what; and IT indicates access to the second system could be delayed by a quarterly security refresh.

The defensible responses: set an explicit need-to-know confidentiality rule restricting identities, rather than sharing widely or staying silent; request from both systems immediately, including preservation for the delayed system, while sequencing interviews and documents in parallel; add escalation triggers and mitigation steps, notifying the appropriate internal review channel early upon a credible interference concern; and reassess at a defined milestone, documenting the new boundary rationale and updating stakeholder and preservation steps as needed if the allegation might involve a broader set of meetings.`,
      questions: [
        {
          type: "multiple_choice",
          prompt:
            "IT says it can preserve mailbox content only if you confirm the exact timeframe and the shared mailbox scope today. What should you do?",
          options: [
            "Request preservation immediately with the best available timeframe and a narrow description of the shared mailbox and likely sender list.",
            "Skip mailbox preservation and focus on system logs only, since email retention is uncertain.",
            "Ask IT to preserve everything in the mailbox with no timeframe limits, to ensure nothing is missed.",
            "Wait to finalize the scope after first interviews, then request preservation once you confirm the full list of relevant recipients.",
          ],
          correctIndex: 0,
          needsReview: true,
        },
      ],
    },
    {
      kind: "knowledge_check",
      title: "Investigation Planning Knowledge Check",
      questions: [
        {
          type: "multiple_choice",
          prompt:
            "In a workplace investigation, how should you prioritize sources of information when several stakeholders provide conflicting accounts?",
          options: [
            "Examine the corroboration between multiple accounts before deciding.",
            "Focus on the account of the most senior stakeholder.",
            "Choose the first account you receive to avoid procrastination.",
            "Prioritize the account that aligns with your pre-existing beliefs.",
          ],
          correctIndex: 0,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt: "What is the best approach to mapping stakeholders in a complex workplace investigation?",
          options: [
            "Exclude any part-timers or contractors from the stakeholder map.",
            "Identify key players based on their role, influence, and knowledge related to the investigation's scope.",
            "List all employees involved and rank by their hierarchical level.",
            "Assume only direct witnesses need to be included as stakeholders.",
          ],
          correctIndex: 1,
          needsReview: true,
        },
      ],
    },
  ],
};
