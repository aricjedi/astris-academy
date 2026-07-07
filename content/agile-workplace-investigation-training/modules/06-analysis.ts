import type { SeedModule } from "../types";

export const analysis: SeedModule = {
  title: "Analysis",
  lessons: [
    {
      kind: "lecture",
      title: "Objectivity, Patterns, Credibility, Narrative, and Findings Determination",
      bodyMarkdown: `### Reviewing Evidence Objectively

Workplace investigations often start with a strong hypothesis, a recurring story, or a first report. The risk is that early details can quietly become the standard you measure everything else against. Objectivity is a practical discipline: it means you build a review process that actively checks whether evidence supports your initial story, challenges it, or suggests something else.

A common pattern is **anchoring**, treating the earliest plausible explanation as the most likely one. Interrupt it with three discipline moves: state what you know as evidence, not interpretation; separate "what happened" from "what it means"; and keep a visible place for conflicts, so they don't disappear into a preference for the smoother narrative.

Three approaches to evidence review: **compare, don't cherry-pick** (review evidence in parallel, checking for both supporting and disconfirming signals); **test timelines for coherence** (check whether events fit together logically, and document the nature of any mismatch); and **treat interviews as claims** (perceptions and memory to be corroborated, clarified, or challenged, not automatic facts).

A repeatable review flow: identify the claim inside the evidence (who, what, where, when, under what conditions); assign evidence type and confidence basis; map the claim onto the timeline; look for three matches (other documents, other interview claims, timeline constraints); record conflicts explicitly by category (time, location, identity, meaning mismatch); and plan a verification step.

**Worked example.** A manager suspects an employee submitted an expense report after a deadline. An email confirms the deadline date, a system timestamp shows the submission time, and an interview has the employee saying the submission was "on time." Mapping all three to one timeline reveals whether the interview claim is consistent with the timestamp, or suggests a different understanding of the deadline. Rather than dismissing the interview, ask an objective clarification question targeting the discrepancy: What time zone did you assume? Did known system delays affect the final "submitted" status?

Common anchoring risks: anchoring on first details; treating absence as proof (if you cannot find a document, record the gap rather than assume it never existed); overweighting one source; and ignoring conflict categories (label the mismatch as time, location, identity, or meaning, then choose the specific follow-up addressing that category).

### Patterns and Corroboration

When you compare evidence, your goal is not to "make the facts fit" a story — it's to see what the sources collectively support, fail to support, and where the gaps are. Three signals matter: **patterns** (repeated details across multiple sources describing the same phenomenon); **corroboration** (independent confirmation, strongest when sources are independent and consistent); and **contradictions** (information about where uncertainty is highest, not automatic disproof).

For any repeated detail, ask: What is repeated (phrase it exactly)? What is the relationship (why should it plausibly come from the same event)? How strong is the linkage (same access, similar reliability, reason to report it)?

Corroboration is meaningful when it meets two conditions: consistency (sources describe the same key point) and independence (sources did not simply repeat one shared origin). A common mistake is treating "two documents say the same thing" as automatically strong confirmation — it is stronger when different authors observed the detail through different channels, or the detail appears in a record created for unrelated reasons.

Timeline alignment tests whether different sources describe the same sequence, not just whether details "sound related." Extract time-stamped claims, standardize time language (convert "early March" into a range), and check sequence, not only dates.

Avoid two predictable traps: **cherry-picking** (selecting only sources that support a preferred conclusion — keep a running "not supported yet" list) and **confirmation bias** (interpreting ambiguous evidence favorably — use "steelman checks," writing the strongest alternative interpretation and naming what evidence would change your mind).

When writing conclusions: state the claim precisely; name the evidence pattern supporting it; explain timeline fit; call out contradictions; and describe independence. That structure turns analysis into a traceable conclusion.

### Assessing Credibility

Credibility assessment helps you decide how much to trust information, not just whether it sounds convincing. Two people can both be sincere, yet their accounts can conflict. Credibility is about evidence — what does the claim rest on — not demeanor or personal preference.

Five credibility factors: **plausibility** (does the claim fit known constraints — timeline, procedures, location, technical limits); **consistency** (do details match across the same source over time and across different sources); **motive** (what incentives or pressures could shape the claim, without automatically meaning "lying"); **access to information** (could the person realistically observe or obtain the information they claim to know); and **supporting evidence** (what documents, logs, or independent confirmations support the claim).

These factors often pull in different directions — credibility assessment is about calibrating confidence to evidence quality, including uncertainty, not driving toward certainty. A practical approach: write your current best interpretation, then explicitly list what evidence would increase or decrease confidence, making the evaluation reversible even when people are persuasive.

Pattern strength in contested credibility: repeated details appearing independently in multiple sources; timeline alignment across documents, logs, and interviews; and independent confirmation from different systems or witnesses. Be cautious when connections depend on interpretation — label a tentative connection as tentative rather than treating it as corroboration.

After weighing credibility, decide what to do with the result: ask targeted questions ("Which record would show this?" rather than "Did this happen?"); separate uncertainty from error; and avoid face-saving language that increases defensiveness.

### Building the Narrative

A coherent factual narrative links events, timelines, decisions, and actions using what your sources actually support, while clearly showing where uncertainty remains. Four link types: **event links** (dates, locations, actors, observable actions — state only what sources support); **timeline links** (order using document dates and time markers, describing conflicts and justifying ranges); **decision links** (tie decisions to credible evidence like meeting records or emails, avoiding treating motives as facts); and **action links** (tie actions to decision points using contemporaneous records, with careful "because" phrasing).

Use a "claim then evidence" structure for each sentence: What is the claim (event, time order, decision, action)? What evidence supports it? How confident should the wording be (exact, approximate, or uncertain)?

Six narrative controls: anchor to specifics; show the timeline (state conflicts and justify any range); phrase decisions carefully (describe what documents show, not inferred intent); treat corroboration as strength ("converges" or "is consistent with"); expose gaps explicitly; and separate facts from uncertainties in a distinct "unresolved" statement.

When sources conflict: state the conflict plainly, indicate which evidence is stronger using your credibility assessment, and avoid forced reconciliation.

A compact narrative template: opening event framing; timeline of events; decision and rationale points; actions and outcomes; corroboration note; and uncertainties and next checks. Do a final traceability check (which source supports the key claim in each paragraph) and uncertainty check (does every known conflict or gap appear as uncertainty, not an unearned conclusion).

### Findings Determination

Evidence-based findings are structured judgments that tie a conclusion to what the record actually shows, with clear reasoning for why that conclusion fits (or does not fit). A strong finding links the claim, the record, and the reasoning. A finding becomes overstated when the reasoning jumps from weak support to strong certainty.

Three outcome categories:

- **Substantiated**: the record provides enough reliable, relevant evidence that the claim is more likely than not true. Look for a cluster of support — multiple independent sources, timeline alignment, and specificity of details that matter to the claim.
- **Unsubstantiated**: the record does not provide sufficient support for the claim. The strongest evidence is weak, incomplete, or not directly relevant, or conflicting evidence outweighs it.
- **Inconclusive**: the record is insufficient or mixed in a way that prevents a clear judgment — key details are missing, or credibility is uncertain for critical parts of the evidence.

A practical rule: your finding should not be stronger than your best explanation of the evidence. Apply the same four credibility factors (plausibility, consistency, motive/bias, access to information) when deciding.

Stronger corroboration involves repeated meaningful details, timeline alignment, and independent confirmation. Overconfidence often creeps in through coincidences sharing one detail but diverging on critical facts, "same topic" correlations, or single-point confirmation. If you cannot explain how a connection strengthens the specific claim, treat it as weak support.

**Worked determination logic**: break the claim into components (for example, "meeting occurred" and "action discussed" are separate questions); evaluate support and conflicts for each component separately; then choose the outcome that matches the evidence strength for the disputed elements, not the overall impression. A careful analyst might reasonably reach inconclusive when the core disputed link (not peripheral facts) remains unresolved, even if some surrounding facts are corroborated.

Common mistakes: overstating certainty (avoid "definitely" or "proven" when evidence is indirect); ignoring conflicts (explain why a conflict is resolved or remains unresolved); single-source dependence; and unlinked narrative leaps (say so explicitly, or leave inference out of the finding).

A clear finding follows this pattern: finding outcome, 2-3 record-based supporting points, and one clear limit — for example, "The claim is substantiated because Document A places the event on the date and Interview B independently corroborates the timeframe. The conflict in Interview D does not outweigh this support because it does not directly disprove the date."`,
    },
    {
      kind: "scenario",
      title: "Evidence Analysis Case File",
      bodyMarkdown: `Workplace investigations often start with a problem that feels messy: people remember things differently, some facts are missing, and certain documents are hard to interpret. This exercise asks you to slow down and analyze the record objectively, using a repeatable approach for both HR and compliance decisions.

**The case-solving lens**: review evidence objectively (compare what each source says, where it overlaps and conflicts); check patterns and corroboration (repeated details that plausibly share an underlying cause, verified against the timeline); assess credibility carefully (the strength of what someone can support, not whether you like their explanation); build a factual narrative (link events using what the record actually supports, labeling gaps clearly); and determine findings (substantiated, unsubstantiated, or inconclusive based only on the available evidence).

**Case: Analyzing a Conflicting HR Case File**

You are reviewing a workplace case file for a compliance and HR intake. The allegations involve a missed disclosure and possible retaliatory conduct, but the record contains conflicting accounts, partial corroboration, and credibility concerns. Your goal is to decide what the evidence supports and which outcome category best fits the documented record, across four sequential decision turns.

A helpful pattern for your narrative: anchor events to dates using only what the record supports; state each person's account as the claim itself; attach evidence right after each claim; and name unresolved questions plainly.

Outcome categories are evidence thresholds, not storytelling tools: substantiated means the record supports the key disputed elements strongly enough that a reasonable reviewer would conclude the allegation is supported; unsubstantiated means the record does not support the allegation and includes evidence weighing against it; inconclusive means the record is incomplete or mixed such that the key disputed elements cannot be confirmed or rejected with confidence. Ask: "What would I need to see to move this from inconclusive to substantiated, and is any of that evidence already present?" If the answer is not in the record, inconclusive is usually the most defensible category.`,
      questions: [
        {
          type: "multiple_choice",
          prompt:
            "In the intake summary, two employees give different versions of the same sequence of events. Which next step best prevents premature conclusions while you start your evidence review?",
          options: [
            "Focus only on the interview that matches the company policy language, since policy language is definitive.",
            "Ignore minor inconsistencies and try to merge both accounts into one version of events right away.",
            "Compare each source to the timeline and list what each document or interview supports or contradicts.",
            "Pick the account that sounds most consistent and treat the other account as less reliable without further checking.",
          ],
          correctIndex: 2,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt:
            "You find partial corroboration. A calendar entry aligns with one interview statement, and an email thread mentions a meeting that neither person describes accurately. How should you use this pattern without overstating it?",
          options: [
            "Assume the email thread is unrelated because it is not mentioned directly in both interviews.",
            "Combine all corroborated and uncorroborated details into one complete story to simplify the case file for decision makers.",
            "Conclude that the aligned calendar detail proves the full interview account is accurate.",
            "Treat the aligned details as corroboration for specific facts, and flag the mismatched details as unresolved gaps.",
          ],
          correctIndex: 3,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt:
            "You now must assess credibility. One person claims they never received a required disclosure notice, with no supporting materials but plausible email access issues. Another person claims the notice was sent and stored in a shared folder. What is the most credible next reasoning step?",
          options: [
            "Mark the claim as credible because the explanation seems reasonable on its own.",
            "Evaluate plausibility and access to information, then ask whether the record has objective support such as message logs, access records, or folder audit trails.",
            "Mark the claim as not credible because they do not have direct documents.",
            "Accept both accounts as equally credible because both are internally consistent.",
          ],
          correctIndex: 1,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt:
            "Based on your evidence review, you can support only some specific facts. You cannot confirm the disputed disclosure timing, but you can show that at least one related meeting occurred according to multiple records. Which outcome category best matches an evidence-based finding?",
          options: [
            "Inconclusive, because the key disputed element is not substantiated by the available record, even though some supporting facts are corroborated.",
            "Substantiated, because partial corroboration exists somewhere in the timeline.",
            "Substantiated for the full allegation and present it as definitive, since some events are corroborated.",
            "Unsubstantiated, because the case includes contradictions and missing documents.",
          ],
          correctIndex: 0,
          needsReview: true,
        },
      ],
    },
    {
      kind: "failure_points",
      title: "Common Failure Points: Confirmation Bias, Demeanor, and Leaps Beyond the Record",
      bodyMarkdown: `**Confirmation bias.** You notice and credit evidence that matches your early theory, then treat contrary evidence as "noise" — giving more weight to supporting documents, interview statements, or timelines, and less weight to contradictions, gaps, or alternative explanations.

**Demeanor over evidence.** You treat tone, confidence, or body language as proof of truth, even when the content is inconsistent or lacks corroboration. Correct by separating observed behavior from testable details, then requiring consistency with documents, dates, and independent sources.

**Leaps beyond the record.** You extend a finding from a partial detail to a broader conclusion the evidence does not support — overstating motives, claiming access you cannot show, or treating unverified inferences as facts. Correct by requiring explicit linkage to each supporting element of the claim, and marking what remains unsubstantiated or inconclusive.

Review checks to apply before finalizing: **record traceability** (test every key proposition against a specific record anchor — document citation, date, or direct statement); **contradiction handling** (create a deliberate "conflicts list" before writing conclusions, and ask what would resolve each one); **credibility reasoning** (link plausibility, consistency, motive, and access to information to specific supporting or undermining evidence, not personal judgment); **pattern strength** (separate strong patterns — repeated details aligned with timelines across independent sources — from weak coincidences); and **finding boundaries** (use disciplined outcome labels and explain what evidence supports each element, avoiding turning an inconclusive pattern into a definitive causal claim).

**Case file: the "Jordan" allegation.** A complaint alleges policy violations by manager Jordan. The complainant states Jordan instructed a bypass of a standard approval process, recalls a specific week in March, says Jordan mentioned "keeping it off the record," and reports Jordan was present during a meeting where emails were "cleared" from a shared folder. Jordan denies instructing any bypass, says approvals were handled normally, and states Jordan rarely attended meetings with the complainant's team. Documents include an ambiguous February email, an ambiguous March calendar invite (naming only Jordan's title, not Jordan), a shared folder activity log with unclear actor attribution, and a policy excerpt. One coworker "thinks" Jordan attended the meeting but cannot recall dates precisely; another says the approval system was operating normally and bypasses would have been visible.

Correction guidance from this case: separate "what someone says happened" from "what the record can verify"; anchor any motive or intent claim to something testable; focus credibility language on evidence, not tone; break the allegation into elements and use "inconclusive" when the record cannot resolve a gap.

A practical correction checklist: mark every sentence that claims an action, intent, or causation, and ask what supports it; list contradictions and unresolved gaps, noting what evidence would resolve each; reweight credibility using record-based factors connected to specific evidence; and rewrite findings boundaries so that partial support is reflected honestly as "unsubstantiated" or "inconclusive," explaining exactly what is missing.

"Reasonable conclusions depend on evidence, not on the appeal of a story." — Office of the Inspector General`,
      questions: [
        {
          type: "multiple_choice",
          prompt:
            "You must decide the status of the allegation that Jordan instructed a bypass. The complainant describes instructions, but the documents provided mainly show policy language and unrelated workflow references. What outcome and wording best match the evidence?",
          options: [
            "Unsubstantiated, because Jordan denies it.",
            "Inconclusive, because the evidence does not verify instructions tied to the specific March timeframe.",
            "Substantiated, because the complainant's statement is clear.",
            "Substantiated, because policy bypasses would have been visible to the team.",
          ],
          correctIndex: 1,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt:
            "Next, you address the allegation about clearing emails from a shared folder. The activity log shows access around early March but does not clearly identify who accessed the items. What finding and reasoning is most accurate?",
          options: [
            "Inconclusive, because the log does not identify the actor or the purpose of the access.",
            "Substantiated, because some items were accessed.",
            "Inconclusive, but add that it was likely Jordan acted, based on the coworker's \"I think.\"",
            "Unsubstantiated, because the calendar invite is ambiguous about attendees.",
          ],
          correctIndex: 0,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt:
            "Now you draft your credibility reasoning for the coworker who says Jordan attended the meeting. The coworker cannot recall dates precisely. What is the best credibility assessment move?",
          options: [
            "Lower credibility weight because date uncertainty limits timeline alignment with other records.",
            "Treat the coworker's estimate as exact and use it to confirm the meeting timeline.",
            "Credit the coworker fully because they sound confident.",
            "Reject the coworker entirely because they are unsure about dates.",
          ],
          correctIndex: 0,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt:
            "Finally, you synthesize a factual narrative. Which draft approach best avoids leaps beyond the record while still supporting the outcomes?",
          options: [
            "Write a narrative that asserts the bypass and clearing were deliberate and connected to policy violations.",
            "Write an element-by-element narrative that links each claim to a specific record anchor, and labels unresolved gaps as inconclusive.",
            "Write a narrative that matches the complainant's account, because it is more detailed.",
            "Write one paragraph summarizing \"both accounts were unreliable\" and omit explanations for each conflict.",
          ],
          correctIndex: 1,
          needsReview: true,
        },
      ],
    },
    {
      kind: "knowledge_check",
      title: "Analysis Knowledge Check",
      questions: [
        {
          type: "multiple_choice",
          prompt:
            "During a workplace investigation into allegations of harassment, you receive contradicting accounts from witnesses. What should be your first step in assessing credibility?",
          options: [
            "Disregard the less credible testimonies and focus on the most detailed ones",
            "Report the findings to management without further review",
            "Investigate the background of each witness to look for bias",
            "Gather additional evidence that may support or contradict the testimonies",
          ],
          correctIndex: 3,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt: "You are investigating a claim of financial mismanagement at your organization. What is the most credible source of evidence?",
          options: [
            "Testimonies from employees who heard rumors",
            "Documents such as financial reports and transaction records",
            "Social media posts about the company",
            "Unverified reports from external consultants",
          ],
          correctIndex: 1,
          needsReview: true,
        },
        {
          type: "multiple_choice",
          prompt: "When faced with evidence that appears to contradict your primary findings, what is the most appropriate action?",
          options: [
            "Seek outside opinions to validate your initial findings",
            "Re-examine the evidence to determine if your conclusion still holds",
            "Quickly conclude the investigation without addressing the contradictions",
            "Ignore the contradictions if they are minor",
          ],
          correctIndex: 1,
          needsReview: true,
        },
      ],
    },
  ],
};
