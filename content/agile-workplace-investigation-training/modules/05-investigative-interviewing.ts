import type { SeedModule } from "../types";

export const investigativeInterviewing: SeedModule = {
  title: "Investigative Interviewing",
  lessons: [
    {
      kind: "lecture",
      title: "The PEACE Model, Questioning, Neutrality, Difficult Interviews, and Documentation",
      bodyMarkdown: `### Using the PEACE Model

Workplace investigative interviews are meant to gather credible information in a fair and respectful way, so decisions are supported by evidence rather than assumptions. The PEACE model helps interviewers stay consistent, reduce bias, and give every participant a fair chance to be heard. PEACE stands for a sequence of stages: **P**reparation, **E**ngagement and rapport, **A**ccount, **C**larification, **C**losure, and **E**valuation.

- **Preparation builds fairness**: plan what you need to learn, what sources you already have, and what questions will be asked. Use neutral wording, decide who will interview whom, and check the planned approach supports procedural fairness.
- **Rapport invites useful detail**: engage the participant respectfully so they feel heard. Use the opening to set expectations and encourage them to speak in their own words. Good rapport is about communication quality, not agreeing with the participant.
- **Account and clarification separate listening from testing**: let the participant provide their account without constant interruption, then clarify specific points that remain unclear (dates, sequence, meaning). Clarification questions should be targeted, not argumentative.

Practical detail for each stage: **Preparation** — clarify the interview's purpose, list existing information, draft neutral questions, plan how you will handle gaps. **Rapport** — open respectfully, explain the interview structure, use listening behaviors so the participant can describe their perspective without pressure. **Account** — ask for the participant's account in their own words, using prompts that encourage detail. **Clarification** — identify uncertainties or inconsistencies, then ask focused, neutral questions to resolve them. **Closure** — summarize the main points, check accuracy at a high level, invite final comments, explain next steps without promising outcomes. **Evaluation** — assess interview quality and information value, reflect on question style, and identify what needs corroboration.

After applying PEACE, self-check: Did you give space for the participant's account before trying to resolve uncertainties? Were your clarification questions specific, neutral, and designed to resolve meaning? Did your closure summarize key points and invite corrections? Does your evaluation identify both evidence strengths and remaining gaps?

### Questioning Techniques

Strong workplace investigations depend on evidence that is complete and reliable, and questioning is a major driver of that quality. When questions are too narrow, too vague, or combine multiple ideas, people often fill gaps with assumptions.

- **Open-ended prompts**: use questions that invite a narrative, not a single fact — "tell me" style prompts that let the interviewee choose what details they consider important.
- **Probing and sequencing**: follow a story with focused probes checking for completeness, using time and sequence triggers to help the person expand without steering them.
- **Clarifying without leading**: if something is unclear, ask for meaning using neutral language, replacing assumptions with clarification questions.

Four question types, best use and common pitfall: **open-ended** (good for building a complete account; pitfall is forcing a limited option before the narrative is given); **probing** (good for filling gaps after an initial account; pitfall is asking multiple missing items at once); **clarifying** (good for resolving ambiguity; pitfall is treating interpretation as fact); **confirming** (good for ensuring the record reflects the account accurately; pitfall is summarizing too strongly and only inviting "yes").

Certain question patterns consistently reduce reliability: **compound questions** (asking multiple things at once — split into separate questions with time anchors); **poorly specified time and sequence** (vague time words make it harder to anchor memory); **leading language and assumption loading** (suggesting a preferred interpretation); **overly narrow options** (forcing a person to "fit" their account to your options); and **clarifying too early or too late** (interrupting narrative flow versus letting gaps settle into assumptions).

**Worked example.** "He was being disrespectful" is a label, not an observation. A weaker chain asks "What did he do to be disrespectful?" then "So you think he intended to insult you?" — jumping to intent. A stronger chain asks "Tell me what you heard or saw when you decided he was being disrespectful," then "What was said or done that stood out to you?", then "What did you understand his intention to be at the time, based on your observations?" — moving from label to concrete actions to intent, with each step separated.

Before finishing an interview, use a brief confirming sequence: ask whether there is anything else the interviewee wants to add; confirm the parts of the account that were most significant; invite corrections to dates, names, or interpretations.

### Neutrality and Active Listening

Neutrality and active listening directly shape what a witness chooses to share and how defensible the interview record looks later. Use **signal-free responses** (acknowledgement without endorsement); **active listening moves** (tracking key details, noticing what is missing, choosing clarifying follow-ups); and understand that **credibility flows through process** (listening choices shape account quality).

Four listening behaviors and how wording changes what the witness shares: avoid **agreement signals** ("That sounds right") — instead reflect content neutrally; avoid **disbelief signals** ("That can't have happened") — instead ask for specifics using the witness's own wording; avoid **bias cues** that steer toward a preferred explanation — use neutral anchors instead; and avoid **unclear prompts** that invite guessing — replace with structure.

Six listening checkpoints: pause and reset before reacting; reflect meaning and invite correction; probe for specifics on important but fuzzy details; check missing links with questions rather than forced conclusions; separate facts from interpretations by asking for the basis of any interpretation; and close with accuracy, confirming core areas and inviting additions.

A practical rule: if you have evidence you want confirmed, you can ask for clarification, but you cannot "borrow" the witness's language to make it sound like they agreed with your interpretation. Ask yourself: "Am I asking for the witness's meaning, or am I steering the witness toward mine?"

### Managing Difficult Interviews

Reluctant, emotional, evasive, or non-cooperative participants can derail an interview, not because they are "difficult," but because the process is not meeting their needs. **De-escalate first** (calm tone, acknowledge feelings neutrally, give clear next steps); **stay neutral under pressure** (avoid agreement, disbelief, or judgment); and **refocus to verifiable facts** (summarize the relevant part, then ask a single clarifying question).

Four participant states and fitting responses: **reluctant** (clear expectations, low-threat structure, anchor questions to concrete events); **emotional** (acknowledge briefly, then return to facts); **evasive** (break broad answers into smaller pieces, ask for specifics); **non-cooperative** (stay calm and firm, explain purpose and boundaries, document limits if refusal continues).

Six question moves that reduce distortion: use open prompts; probe one detail at a time; clarify the timeline with neutral anchors; check meaning, not character; avoid leading language; and separate multiple questions into single-fact follow-ups.

Active listening under stress means listening for three things: the participant's observable claims, where they rely on assumptions or interpretation, and what evidence might exist to support or challenge their account.

### Documentation and Safeguards

Accurate documentation turns an interview into evidence you can analyze, report on, and defend. It also protects participants by setting clear expectations about confidentiality and anti-retaliation obligations.

- **What to record**: the facts participants provide, the order/structure of the account, and your neutral prompts. Include dates, times, locations, who was present, and any agreed materials reviewed.
- **Transcript vs. summary**: a transcript records statements in near-verbatim form; a summary captures meaning in organized form. Both must stay faithful to the participant's intent.
- **Acknowledgment and safeguards**: seek acknowledgment for key factual points to reduce later disputes. Reinforce confidentiality and anti-retaliation obligations, and record that they were communicated.

Separate your notes into three layers: context (who, when, where, who else present); prompting (what neutral questions or requests you made); and content (what the participant said, including clarifications and corrections).

**Worked example of defensible notes**: Context — "10 June, 2:30pm, meeting room 3, HR investigator present." Prompting — "Asked what changed in scheduling, then asked for dates of the first change." Content — "Participant stated the first change occurred 'around early March.'" Clarification — "When asked to define 'around early March,' participant selected 5 March as the closest date." Safeguards — "Investigator reminded participant of confidentiality and anti-retaliation obligations; participant acknowledged the recap of key dates."

Before finalizing notes, run a consistency test: are your notes internally consistent? Can a reviewer separate what was said from what you inferred? Does the record show how you handled uncertainties or inconsistencies? Ambiguity is usually a documentation defect, not a participant defect.`,
    },
    {
      kind: "scenario",
      title: "PEACE Interview Decision Practice: Interview Under Emotion and Contradiction",
      bodyMarkdown: `Workplace interviews can feel messy because people bring emotion, incomplete memory, and different versions of events. The PEACE model gives you a structure for making the interview more reliable, even when the account is uncertain or partly contradictory.

**Scenario**: You are conducting a workplace investigative interview for a complaint about a conflict between two team members. The participant is upset, claims they were treated unfairly, and says they do not remember a key detail. They later suggest that another person may have "misunderstood" the same event, which creates a partial contradiction with what you have already been told. Your job is to gather a complete account using PEACE, stay neutral, and decide what to document as the conversation develops, across five sequential decision points.

The five PEACE stages and what changes at each: **P: Prepare** — identify facts needed, plan who to ask about which issues, draft open and neutral initial questions. **E: Engage** — set expectations, build rapport without indicating agreement or disbelief, use active listening to reduce defensiveness. **A: Account** — gather the account using open-ended prompts, then probing and clarifying questions, keeping single-issue and non-leading. **C: Clarify** — address gaps, inconsistencies, and partial contradictions with neutral clarification questions that invite explanation rather than arguing for a preferred interpretation. **E: Closure & Evaluation** — confirm key points, explain next steps, check for additions, evaluate information quality, and document decisions and safeguards accurately.`,
      questions: [
        {
          type: "multiple_choice",
          prompt:
            "At the start, the participant is visibly upset and says, \"I shouldn't even be here. I did nothing wrong.\" You need to engage them without signaling agreement or disbelief. What do you do first?",
          options: [
            "Ask leading questions that confirm wrongdoing, such as \"So you deliberately did not report it?\"",
            "Tell them what you have been told by others to show you are prepared",
            "Acknowledge that they feel strongly, explain the interview purpose and process, then invite their account from the start",
            "Start gathering details immediately and ask for a timeline, without explaining the process",
          ],
          correctIndex: 2,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt:
            "When they describe the first meeting, they mention \"the room\" but do not specify where. What question style do you choose?",
          options: [
            "Ask for a single, open-ended clarification: \"Tell me more about the room and what you noticed there.\"",
            "Ask a compound question like \"Who was there and what exactly did they say and when did it happen?\"",
            "Ask a leading question: \"You were definitely in the hallway, right?\"",
            "Stay silent and do not follow up so you do not influence them",
          ],
          correctIndex: 0,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt:
            "You notice a partial contradiction (they said they left before a moment, now say they were present; they add \"maybe it happened another day\"). What is the best clarification approach?",
          options: [
            "Ignore the contradiction and continue with unrelated topics to avoid conflict",
            "Confront them directly: \"That contradicts your earlier statement. Which is the lie?\"",
            "Use neutral, clarification-focused questions: \"When you say you were present, what makes you think that, and what other possibilities could fit your memory?\"",
            "Ask them to choose between two fixed options you prefer, \"Was it Wednesday or Friday?\"",
          ],
          correctIndex: 2,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt:
            "The participant starts discussing confidential personal matters and mentions they might speak with a colleague outside the process. What do you do?",
          options: [
            "Stop the interview and end the meeting immediately without explanation",
            "Re-state confidentiality and anti-retaliation obligations, explain how contact should be handled, and redirect to the event details being investigated",
            "Argue with them about whether their interpretation is correct",
            "Agree that contacting a colleague is fine because \"it's only natural to talk\"",
          ],
          correctIndex: 1,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt:
            "Near closure, the participant says, \"I'm not sure I worded it right, but that is what I meant.\" What should you do for closure and documentation quality?",
          options: [
            "Ask the participant to delete portions of your notes that they do not like",
            "Write a brief summary without checking anything, then ask them to sign immediately",
            "Read back the key points neutrally, ask if any additions or corrections are needed, and record their acknowledgment and remaining uncertainties",
            "Record only the strongest-sounding parts and remove any uncertain language to make the record cleaner",
          ],
          correctIndex: 2,
          needsReview: true,
        },
      ],
    },
    {
      kind: "failure_points",
      title: "Common Failure Points",
      bodyMarkdown: `**Leading questions.** When a question suggests the expected answer, participants may shape their account to match what they think the interviewer wants, reducing the chance of finding honest uncertainty or alternative explanations.

**Weak preparation.** Arriving without reviewing known facts, roles, and timelines leads to vague questions and missed inconsistencies, preventing meaningful follow-up on alternative explanations.

**Visible bias.** Bias can appear through wording, tone, facial expressions, or selective attention. When participants sense agreement, disbelief, or judgment, they may edit their account or withhold details.

**Over-talking.** When the interviewer talks too much, participants get less time to give coherent details.

**Poor notes.** Incomplete or unclear notes weaken later credibility checks and accountability.

**Bad clarification.** Vague, compound, or rushed questions can hide meaning and reduce evidence scope.

**Weak confidentiality.** If confidentiality and anti-retaliation are not explained clearly, participants may self-censor.

**Correction patterns**: replace a leading prompt with an open-ended prompt, then neutral clarification on one topic at a time. When the interviewer over-talks, use shorter turns and allow pauses. For unclear clarification, ask one clear question at a time, then confirm the participant's intended timeline and key details. For bias signals, keep a neutral tone and treat uncertainty as a reason to ask for explanation, not a cue to challenge. For incomplete notes, record key points, timelines, and uncertainties, writing objective summaries close to the participant's wording when it matters.

**Illustrative case.** A workplace investigator meets Jordan, who appears upset and gives partial details about an incident two weeks earlier. Jordan says, "I already told you everything," then contradicts an earlier statement by another employee about who initiated a conversation. The investigator notices the contradiction but keeps an even tone, asks for Jordan's version using open-ended prompts, and follows with targeted clarification about dates and exact wording. After confirming key points, the investigator documents Jordan's account including where Jordan appears uncertain, and reminds Jordan about confidentiality and anti-retaliation before discussing additional context. What the interviewer did well: kept the PEACE structure in the background, used clarifying questions instead of arguing, avoided leading language, and recorded accurate summaries noting uncertainties requiring further follow-up.`,
    },
    {
      kind: "knowledge_check",
      title: "Investigative Interviewing Knowledge Check",
      questions: [
        {
          type: "multiple_choice",
          prompt: "What is the primary focus of the PEACE model in workplace investigations?",
          options: [
            "To promote aggressive tactics for extracting information.",
            "To ensure that the interview process feels more like an interrogation.",
            "To facilitate a structured and ethical approach to interviewing.",
            "To gather evidence through unexpected questioning techniques.",
          ],
          correctIndex: 2,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt: "In a workplace interview, which type of question is most effective for eliciting detailed responses?",
          options: [
            "Open-ended questions that encourage storytelling.",
            "Yes or no questions that limit elaboration.",
            "Leading questions that suggest a desired answer.",
            "Multiple-choice questions that simplify the dialogue.",
          ],
          correctIndex: 0,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt: "What is an essential practice for properly documenting an interview?",
          options: [
            "Taking minimal notes to avoid distracting the interviewee.",
            "Recording the session without consent from the interviewee.",
            "Creating an accurate, detailed account of the interview content immediately after the session.",
            "Summarizing the interview in general terms to maintain confidentiality.",
          ],
          correctIndex: 2,
          needsReview: true,
        },
      ],
    },
  ],
};
