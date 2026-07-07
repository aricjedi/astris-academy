import type { SeedModule } from "../types";

export const evidenceCollection: SeedModule = {
  title: "Evidence Collection",
  lessons: [
    {
      kind: "lecture",
      title: "Collecting Documents, Preserving Custody, Authenticity, Timelines, and Interview Preparation",
      bodyMarkdown: `### Collecting Documents and Data

Evidence collection starts with a simple goal: gather what you need accurately, preserve its integrity, and avoid creating new problems. Internal investigations commonly need four broad evidence types: **documents** (policies, printed emails, meeting notes, authorized HR files, contracts, written statements); **messages** (emails, instant messages, chat records, calendar entries); **system records** (access logs, device identifiers, account activity, ticketing history, workflow metadata); and **electronic data** (files on shared drives or repositories, attachments, relevant exports from business systems).

The practical constraint is independence and defensibility. Your collection steps should support later review by showing what was collected, when, how it was preserved, and who had access.

**Preserve integrity, avoid contamination, coordinate without losing independence** are three linked disciplines. Collect in a way that keeps evidence trustworthy — avoid changing files or re-saving in ways that alter metadata, and document handling. Contamination happens when evidence is altered, mixed with new information, or when other people influence what gets collected — reduce risk by separating your notes from source materials and limiting access to originals. You can collaborate with IT, HR, and records teams while maintaining your investigative role, by providing clear scope and authorization.

Before you touch files, a reliable collection plan answers three questions: What is in scope (systems, locations, date ranges, content types)? What are you authorized to access or export? Who does what (which steps you own versus IT or records own)? A practical coordination request includes evidence types needed, systems/platforms, time window and identifiers, required preservation steps, and delivery/documentation requirements.

For **documents** you can print or download: keep originals protected in secure storage; label copies consistently with a unique evidence identifier, source, date, and collector; avoid editing the copy; and preserve context about where it came from.

For **messages**: capture full content including attachments and thread relationships; record metadata you are allowed to keep; never forward or re-send evidence (which can create a new record and raise contamination concerns); and use controlled export when possible.

For **electronic data and system records**: request preservation early using approved legal-hold or preservation tooling; prefer exports over local browsing; keep extraction repeatable and documented (method, date, limitations); and handle delivery securely.

A strong **evidence log** records: evidence ID, type, source, date collected and collector, date range covered, integrity actions, storage location, and chain-of-custody notes. This documentation supports independence and protects you and the organization if reliability or completeness is questioned.

**Coordination roles**: IT typically contributes exports, access logs, preservation actions, and secure delivery. HR and records typically contribute authorization guidance, retention context, and custody rules. Your independent investigative role is to define scope and priorities, maintain the evidence log, avoid "opinion edits" to raw evidence, and review for relevance and completeness. Confirm three things in writing after each handoff: what was delivered, how it was generated, and how it was protected.

A quick decision checklist during collection: Did I capture the complete unit of evidence? Did I preserve the original or use a controlled export? Did I document source and scope clearly? Am I handling evidence so others cannot contaminate it? Did collaboration with IT or records include delivery documentation?

### Preserving Chain of Custody

Chain of custody is the structured record that makes the evidence trail defensible later — it matters most when evidence could be disputed, when the data is time-sensitive (emails, logs, access records), or when regulators or internal investigators need to rely on records.

Chain of custody in workplaces is the documented history of evidence from collection through storage and transfer, showing integrity by recording collection time, who handled the item, what changed (if anything), and where it was kept. Preservation starts at collection — as soon as you identify relevant evidence, you aim to prevent loss, alteration, or gaps, especially for electronic records and volatile system data.

A practical collection mindset separates source capture from working copies: capture the original message or record (or a defensible snapshot/export) before editing or reformatting, then create a working copy for analysis and document the relationship between the two. Avoid untracked modifications like renaming files without recording the mapping, or taking screenshots when a full export is possible.

Collection details to record by category: **documents** (full document plus attachments, source system/folder/case reference, version details); **email and messages** (message content plus headers/metadata, sender/recipient fields, time zone, platform); **system logs** (system source, log type, time range, export method — logs are often time-bounded, so coordinate quickly); **access and activity** (relevant audit trails, who requested the extraction, which identities were queried).

To coordinate without breaking custody: identify what is needed and from where; have the owning team perform the extraction using approved tools; record custody events as the authoritative timeline, including links or identifiers to the extracted outputs. A common failure mode is the technical extraction happening while the custody record stays vague (no time range, no query criteria, no storage location).

Core custody checkpoints to document: collection event (date, time, collector, source); evidence identity (file name, unique identifier, description); integrity action (exported, imaged, copied, working copies created); storage location and access permissions; access and handling after collection; and transfers (what, to whom, when, method, new location).

Simple, effective practices: record timestamps with a clear time zone; use identifiers, not just names; capture before analysis (transform data for readability only after the original export is securely stored and logged); separate secure storage from working storage; and log each access event that matters.

Formal preservation is especially important when evidence is volatile (logs rotate, emails move, accounts are deactivated), there is a credible dispute risk, time matters for compliance, or multiple parties will rely on the evidence.

### Authenticity and Context

Evidence only becomes useful when you can trust it and interpret it correctly. In workplaces, misunderstandings often start with something small, like an isolated screenshot or a forwarded message.

Three core checks: **check authorship** (confirm who created and sent the content using stable identifiers, not just a display name); **validate dates** (separate creation time from delivery time, compare timestamps across systems, note time zone differences); and **test completeness** (ask what is missing — partial documents, cropped screenshots, or excerpts can reverse meaning).

Four context traps: an **isolated screenshot** often strips away headers, timestamps, and surrounding text; a **forwarded message** can change wording, remove metadata, or omit key qualifiers; a **partial document** can hide approvals, version numbers, or dependencies; and **mixed timelines** occur when different systems record different "times" (creation, modification, send, received).

**Worked example.** A team member shares a screenshot showing a chat message that appears to request a supplier refund "today," with a visible timestamp — but the screenshot cuts off the conversation start and doesn't show the sender's account identifier. In the full chat export, the message is part of a longer thread responding to an internal status update, using "today" in a scheduling sense, sent by a different account than the display name shown, during an earlier time zone. Because the screenshot was missing context, the team pauses conclusions and requests the full chat export plus the associated ticket record.

A reliable workflow is to collect first using approved methods, then analyze authenticity and context using the complete, system-derived records. Troubleshooting: if metadata is missing, rely more on corroboration from system records; if timestamps conflict, identify what each timestamp means and seek the system-of-record data; if wording seems off in forwarded content, look for the original message; if completeness cannot be restored, document the limitation and avoid overstating conclusions.

Before you interpret, verify authenticity, then interpret only within the boundaries of completeness.

### Building Evidence Timelines

Timelines turn scattered evidence into a coherent story of what happened, when, and who was involved. A good evidence timeline connects people, events, communications, and decisions. It is not a narrative summary — your job is to make the sequence easy to inspect and traceable back to source.

Three timeline principles: make sequence testable (place every item on the timeline with its timestamp or best-estimate range, plus event type); connect communication to action (link what people said to what systems recorded); and expose gaps and contradictions (missing approvals, out-of-order timestamps, or references with no matching record are signals for targeted follow-up).

Choose a granularity matching your evidence — minutes if you have minute-level timestamps, dates if sources are date-only, ranges when precision is unavailable — to reduce false precision.

A practical timeline template captures, for each entry: timestamp (exact, date-only, or range); timezone and source of time; actor; event type; what happened (one clear sentence); evidence reference; and confidence or notes.

Timelines reveal four patterns: **sequence** (what came first); **corroboration** (does independent evidence support the same story); **contradictions** (where sources disagree about timing, identity, or outcome); and **missing information** (what should exist but does not appear).

**Worked example.** A compliance investigator collects emails, a calendar invite, a ticket system record, and HR onboarding notes related to a disputed vendor change request. When placed on a timeline, the approval message appears to show an earlier approval date than the ticket system's actual review-entry timestamp — revealing a missing piece: no record of who granted final approval at the time the deadline passed.

Before treating a timeline as usable evidence, check: every row has a timestamp basis and records timezone uncertainty; every row links to a specific evidence reference; each row asserts one event outcome; uncertainty is recorded as uncertainty, not silently resolved; and contradictions and gaps are captured as explicit follow-up tasks.

### Interview Strategy Preparation

Strong interview plans start with what the evidence can responsibly tell you, not with what you hope to prove. A good timeline and careful authenticity checks let you choose interview targets based on involvement and information value, while a neutral strategy plans for uncertainty rather than treating partial items as definitive.

- **Witness selection**: pick witnesses who can explain actions, communications, and systems — requestors, approvers, recipients, record keepers, and IT/records owners.
- **Interview sequencing**: start with the earliest, most foundational information, then move to people whose statements can confirm or challenge earlier accounts.
- **Objective questioning**: write questions focused on specific, verifiable behaviors — dates, tasks, systems, recipients, and reasons for decisions — using neutral phrasing and follow-ups exploring alternative explanations (error, misunderstanding, delayed processing, incomplete records).

To turn documentary evidence into questions: convert each item into observable statements; identify which person can explain each statement; draft a primary question asking for their actions or understanding, then neutral follow-ups testing completeness. This is especially important when evidence is partial — if you only have a cropped screenshot, ask about the full context and request the missing surrounding content.

Question style by evidence situation: for **forwarded messages**, ask who forwarded it, from what original source, and what was not included; for **cropped screenshots**, ask for the missing view and alternatives like the full thread; for **metadata clues**, ask the author or system owner how the record was created; for **system retention gaps**, ask what systems exist today and who can explain retention schedules.

Anticipate predictable denials and alternative explanations without confronting in advance: misidentification, mistaken understanding, process or system issues, and incomplete documentation. Convert each pattern into a question that checks mechanics and context rather than assuming guilt.

A timeline supports interview planning by revealing corroboration (does one record align with another), contradictions (do statements conflict with the sequence implied by records), and missing links (where a decision likely occurred but no record exists).

Before conducting interviews, confirm your plan identifies the right witnesses based on what evidence shows they can explain, sequences interviews so the timeline builds logically, uses objective observable-question phrasing with neutral follow-ups prepared for denials, and treats partial or imperfect evidence as a lead for inquiry rather than a substitute for complete context.`,
    },
    {
      kind: "scenario",
      title: "Evidence Collection Workflow: Suspected Policy Bypass",
      bodyMarkdown: `Good evidence collection is a workplace skill, not just a legal one. This scenario asks you to make good collection decisions in the moments where mistakes usually happen — when someone asks for "just a quick screenshot," when IT needs to coordinate fast, or when you are unsure whether a message is complete.

**Case snapshot: suspected policy bypass**

You support an HR and compliance team at a mid-sized company. A manager, Priya, submits a report that an employee, Daniel, allegedly bypassed a required approval process for vendor payments. Priya claims Daniel told staff in a shared chat channel that "finance won't ask questions," and that Daniel relied on an outdated internal procedure document. Within 24 hours, two competing accounts surface: Daniel says he followed the current policy and that Priya is misremembering; another employee, Marcus, states he saw a calendar invitation showing the approval meeting, but he cannot find his original message thread.

Available evidence sources: an email thread between Daniel and Finance (including forwarded messages); a chat channel export (messages and file shares); a policy document repository showing "Vendor Payment Procedure" versions and revision dates; an HR ticket history related to the vendor payment request; and witness statements not yet taken.

Your job is to collect and organize these materials so they can later be reviewed for authenticity and used to support interview questions, while preserving integrity so the handling can be defended if challenged.

**What to collect and how to preserve it, by category**: emails (full thread including all forwards, not just a snippet, with dates, sender/recipient fields, subject lines, attachments); chat records (system export rather than individual screenshots, with file shares, timestamps, channel identifiers); system records (request logs, approval workflow records, HR ticket history — focusing on timestamps, status changes, actor identifiers); policies (exact versions in the repository with revision and effective dates); and witness accounts (structured notes documenting the source of their knowledge).

Start with preservation before asking for individual items — request a preservation hold telling IT and records teams not to delete, alter, or auto-expire relevant data. Collect complete context, preferring full exports over single screenshots or partial forwards. Document every handoff: what was collected, when, from where, by whom, and where it is stored.

In this case, Priya's claim about an outdated procedure document is testable only if you collect the policy versions with revision history. Marcus's missing thread becomes easier to resolve if you capture channel exports around the relevant dates.

Six timeline steps to apply: fix the anchor date (earliest relevant system event); link by actors (consistent identities across systems); link by communication (email and chat events at exact timestamps); add policy applicability (version identifier and effective date, checked against the timeline period); flag inconsistencies (dates, authorship, or status changes that do not align); and record gaps clearly (what's missing and what alternative evidence could fill it).

**Interactive scenario: Planning interviews from evidence.** You have a draft timeline from collected emails, chat exports, policy versions, and workflow logs. You are about to schedule the first interviews with Priya and Marcus, and need to decide how to use documentary evidence to guide your approach, keeping questions objective and aligned to what the records can and cannot prove.`,
      questions: [
        {
          type: "multiple_choice",
          prompt:
            "Priya claims Daniel used an outdated procedure. You notice the timeline period shows a different policy effective date than the one Priya referenced. What do you do next?",
          options: [
            "Interview Marcus first because he might have \"the real email\" to prove it quickly",
            "Assume Daniel is wrong because the effective date mismatch exists",
            "Ask Priya to confirm the exact policy version name and revision date she relied on",
            "Ask Priya to describe the process from memory without referencing any document version",
          ],
          correctIndex: 2,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt:
            "Marcus says he saw a calendar invite that showed the approval meeting, but he cannot locate the original message thread. What is the best interview focus?",
          options: [
            "Ask Marcus to forward the invite once he finds it, without recording any details now",
            "Conclude the meeting did not occur because the invite is missing",
            "Tell Marcus to stop searching and rely only on Priya's account",
            "Ask for the meeting details he remembers (date, organizer, attendees) and link them to system approval logs",
          ],
          correctIndex: 3,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt:
            "Daniel denies bypassing approval and says he \"followed the current policy.\" The timeline includes a chat message where Daniel references a different document. What question best tests authenticity and context?",
          options: [
            "Show Daniel the chat screenshot immediately and ask him to comment on the highlighted line",
            "Ask Daniel to explain the policy steps he remembers, without discussing versions or access",
            "Ask Daniel which specific policy version he relied on at the time, and where he accessed it",
            "Ask Daniel only whether Priya is trustworthy",
          ],
          correctIndex: 2,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt:
            "Priya says she believes the approval decision was made after a particular email exchange, but the timeline shows the workflow status changed earlier. What is the best response strategy?",
          options: [
            "Confront Priya aggressively and end the interview immediately",
            "Ask Priya whether she means the initial request, a later update, or a separate internal step, then map her answer to the timeline events",
            "Ignore the discrepancy and focus on unrelated details about the vendor relationship",
            "Ask Priya to match her statement to the timeline without letting her explain what she remembers",
          ],
          correctIndex: 1,
          needsReview: true,
        },
      ],
    },
    {
      kind: "failure_points",
      title: "Common Failure Points",
      bodyMarkdown: `**Collecting too broadly without defined scope.** You increase the chance of irrelevant or duplicative materials, then struggle to explain why particular items were chosen.

**Missing key sources.** Leaving out the right system, custodian, date range, or record type creates gaps that opponents can highlight.

**Accepting documents at face value.** Treating files as definitive without checking completeness, authorship, or metadata leads to weak conclusions.

**Failing to document custody and transfers.** Without evidence logs and storage details, later reviewers cannot verify handling.

**Building interviews on incomplete records.** If interviews rest on partial emails or unverified screenshots, answers may sound inconsistent even when the underlying record is clear.

**Scope control**: define systems, custodians, record types, and date ranges. Collect complete sets (full threads or full exports) so later analysis does not rely on missing context.

**IT and records coordination**: work with IT for correct extraction and preservation, and with records teams for retention status, storage locations, and proper handling steps.

**Integrity during collection**: avoid copying in ways that change content. Track how files were exported and stored.

**Documentation discipline**: record the evidence log details every time you collect, transfer, or access materials — assume the log is what someone else will need later.

**Illustrative example.** In a workplace review, an HR manager provides a screenshot of a chat message and says it shows "approval" of a decision. The evidence coordinator collects only the screenshot because it is easy to share. Later, IT finds the full chat export for the same account and time range — the message is actually a question, a draft note, and the approval comes days later from a different account. Because the investigation relied on an isolated screenshot, interview questions were built around an incorrect assumption about who authorized the action and when. The final reporting had to be revised after authentic context was recovered.`,
    },
    {
      kind: "knowledge_check",
      title: "Evidence Collection Knowledge Check",
      questions: [
        {
          type: "multiple_choice",
          prompt: "What is the primary purpose of preserving evidence integrity during an investigation?",
          options: [
            "To make evidence easily accessible for future references.",
            "To ensure all evidence can be freely shared with anyone involved in the case.",
            "To maintain the reliability and authenticity of evidence throughout the investigation process.",
            "To minimize the time spent on reviewing witness statements.",
          ],
          correctIndex: 2,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt: "Which of the following best indicates a potential authenticity issue with a piece of evidence?",
          options: [
            "The evidence originates from a reputable source.",
            "The evidence is not referenced in any official documentation.",
            "The evidence is a digital file shared via email.",
            "The evidence was collected in the presence of multiple witnesses.",
          ],
          correctIndex: 1,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt: "What is an important factor to consider when collecting electronic evidence?",
          options: [
            "Only the hardware used should be documented.",
            "Electronic evidence does not require any safeguards during collection.",
            "The circumstances under which the evidence was created or accessed can impact its admissibility.",
            "Collecting evidence from social media is generally unnecessary.",
          ],
          correctIndex: 2,
          needsReview: true,
        },
      ],
    },
  ],
};
