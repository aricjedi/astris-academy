# Astris Academy — Claude Code Project Instructions

## What this is
Independent, self-hosted LMS for Astris Integrity Consulting, deployed to Vercel
at **academy.astris-integrity.com** (subdomain of the main astris-integrity.com
site, which lives in a separate Vercel project — never modify that project from
here).

Next.js (App Router) + Supabase (Postgres, Auth, Row Level Security). Astris
owns the whole stack: accounts, company-based access, course content, quiz
grading, and certificate issuance. No Coursebox, no third-party checkout — a
super_admin (Rick) creates companies and invites their first admin; that admin
invites their own employees. No self-serve signup, no payments.

Owner: Rick Schumacher, founder of Astris Integrity (corporate investigations,
ethics & compliance consulting). Author of *The Agile Investigator*.

This repo also hosts a second, independent product: a real case-management
tool under `/cases`. It shares hosting, the Next.js app, and the Supabase
project with the Academy, but has its own tables, RLS, and roles — see
[Case management app](#case-management-app-cases) below. Nothing under
`/cases` reads or writes `profiles`, `courses`, `enrollments`, or `lessons`,
and nothing under `/portal` reads `case_members` or the `cases` tables.

## Roles (Academy — `/portal`)
- `super_admin` (Rick) — sees/manages everything, creates companies.
- `company_admin` — invites their own company's learners, reviews their
  capstone submissions, sees their team's progress.
- `learner` — takes courses, sees own progress/certificate.

## Structure
```
app/
  page.tsx                                Catalog page (course cards)
  (marketing)/[courseSlug]/page.tsx        Course landing page + session-aware enroll CTA
  login/page.tsx                           Email/password sign-in (only entry point)
  auth/callback/page.tsx                   Reads hash-fragment tokens from admin-generated links
  portal/
    (app)/                                 Route group with portal chrome (header/nav)
      page.tsx                             Dashboard (role-aware)
      admin/, admin/capstones/, super-admin/   Company admin / super admin flows
      courses/[slug]/page.tsx              Module/lesson list with progress
      courses/[slug]/lessons/[lessonId]/page.tsx  Lesson viewer (branches on lesson kind)
    certificates/[courseId]/page.tsx       Printable certificate — deliberately OUTSIDE (app), no portal chrome
  api/
    admin/invite-learner, admin/create-company, admin/review-capstone
    quiz/submit                            Server-side grading; correct_index never reaches the browser
    capstone/submit
components/marketing/, components/portal/
lib/supabase/{server,client,server-admin}.ts   server-admin = service role, server-only
lib/content/courses.ts                   Static marketing copy per course
content/<course-slug>/                   Structured lesson/question content + seed.ts
scripts/seed-course.ts                   Idempotent seeding script (service-role client)
proxy.ts                                 Next 16's middleware convention; protects /portal/* and /cases/*
```

## Case management app (`/cases`)
Real, operational tool for running an investigation case from triage through
report writing — not training content. Multi-tenant: each client company
(reuses the same `companies` table as the Academy) runs its own case docket,
isolated from other companies via RLS. The case's `status` column *is* the
five-phase methodology rail plus `closed`
(`triage → planning → evidence_collection → analysis → reporting → closed`),
so the Agile Investigator framework is load-bearing in the data model, not
just marketing copy.

Roles (`case_members.role`, completely independent of `profiles.role`):
- `super_admin` (Rick) — sees/manages every client org.
- `org_admin` — invites their own org's investigators, sees every case in
  their org, assigns investigators to cases.
- `investigator` — org-wide read/write on cases, evidence, plans, analysis,
  and reports (not limited to cases assigned to them); cannot manage
  `case_members`.

```
app/
  cases/
    (app)/                                 Route group with case-app chrome (separate header/nav from /portal)
      page.tsx                             Case docket dashboard (counts by phase, case list)
      new/page.tsx                         Triage: open a new case
      [caseId]/page.tsx                    Case overview — phase rail, assignment, status transitions
      [caseId]/plan/page.tsx               Planning phase form (scope, custodians, sources, methodology)
      [caseId]/evidence/page.tsx           Evidence log + chain-of-custody entries + file attachments
      [caseId]/analysis/page.tsx           Findings/notes + timeline, linkable to evidence with a stance
      [caseId]/report/page.tsx             Report builder (draft/finalize)
      admin/, admin/invite/                Org admin: manage own org's case_members roster
      super-admin/, super-admin/companies/new/   Super admin: manage client orgs, invite first org_admin
    report/[caseId]/page.tsx               Printable finalized report — OUTSIDE (app), no chrome (mirrors portal/certificates)
  api/
    cases/create, cases/[id]/transition, cases/[id]/assign, cases/[id]/plan,
    cases/[id]/evidence, cases/[id]/evidence/[evidenceId]/attachments,
    cases/[id]/analysis, cases/[id]/report
    case-admin/create-company, case-admin/invite-member
components/cases/
```

Tables (all new, no FKs to `courses`/`enrollments`/`lessons`):
`case_members`, `cases`, `case_status_history`, `case_plans`, `evidence_items`,
`evidence_attachments`, `case_analysis_entries`, `case_reports`. RLS helper
functions mirror the Academy's `my_role()`/`my_company_id()` pattern but read
`case_members`: `case_role()`, `case_company_id()`, `is_case_super_admin()`,
`is_case_org_admin()`, `is_case_member_of()`, `case_belongs_to_my_org()`,
`evidence_belongs_to_my_org()`. Evidence file attachments live in the private
`case-evidence` Storage bucket, path `{company_id}/{case_id}/{evidence_item_id}/{filename}`,
uploaded directly from the browser (RLS-gated, no server route needed for the
upload itself).

Two additive policies were added to *existing* Academy tables so case-app
users (who may have no `profiles.company_id`) can resolve names: `companies`
gained a `case_member can read own company` SELECT policy, and `profiles`
gained a `case org members can read teammates profiles` SELECT policy. Both
are pure additions — no existing Academy policy was modified.

Invites for `/cases` reuse the same Supabase Auth users and the same
`/login` → `/auth/callback` flow as the Academy (the `handle_new_user`
trigger still fires and creates a harmless default `learner` profile row),
but pass `case_role`/`case_company_id` metadata keys (not `role`/`company_id`)
and set `redirectTo` to `.../auth/callback?redirect=/cases` so new case-app
users land in the right portal.

## Brand tokens (do not drift from these)
- Navy `#24395B` (primary, from logo) · Ink `#17243B` · Paper `#F5F7FA`
- Slate `#55617A` (secondary text) · Brass `#A9853B` (accents/credential markers only)
- Display/UI type: Libre Franklin · Body: Source Serif 4 (both via Google Fonts)
- Signature element: the five-phase methodology rail (Allegation Analysis →
  Planning → Evidence Collection → Analysis → Reporting). It appears in the
  index hero. Preserve it.

## Workflow: add a new course
1. Write structured content under `content/<new-course-slug>/` (types.ts, seed.ts,
   modules/ — follow the pattern in `content/agile-workplace-investigation-training/`).
2. Add a `lib/content/courses.ts` entry (marketing copy: hero, modules summary,
   fact box, "what you'll learn").
3. Run a seed script (copy `scripts/seed-course.ts`, point it at the new slug) to
   populate `courses`/`modules`/`lessons`/`questions` in Supabase. Leave
   `is_published = false` until Rick reviews any `needs_review` questions.
4. Add a course card to `app/page.tsx`'s catalog grid.
5. Once reviewed, flip `is_published = true` and deploy.

## Deploy
- Vercel CLI: `vercel --prod` (project name: `astris-academy`), or push to
  `main` — GitHub integration auto-deploys.
- Domain `academy.astris-integrity.com` is attached in the Vercel dashboard
  (Settings → Domains).
- Supabase project: schema/RLS changes go through migrations (`apply_migration`
  via the Supabase MCP tools), not manual dashboard edits, so history stays
  reviewable.

## Hard guardrails (from Astris executive team decisions)
1. **Credential language:** only "certificate of completion." Never "certified,"
   "certification," "accredited," or CEU claims anywhere on this site. This is a
   legal-exposure decision (ACFE / state PI licensing sensitivities).
2. **No invented facts:** no prices, dates, testimonials, enrollment numbers, or
   guarantees unless Rick supplies them. If copy needs a fact that doesn't
   exist, use a placeholder and flag it.
3. **ISO language:** say "aligned with ISO/TS 37008:2023" — never "ISO
   certified" or "ISO approved."
4. **Grading stays server-side:** quiz `correct_index` values must never be sent
   to the browser. Grade only in Route Handlers using the service-role client,
   after checking the caller's session with the regular server client first.
5. **RLS status-gating:** enrollment-scoped RLS policies (modules/lessons/
   questions) must check `status <> 'revoked'`, not `status = 'active'` —
   completing a course flips `enrollments.status` to `completed`, and an
   `= 'active'` check silently locks the learner out of their own finished
   course. Hit this bug twice in Phase 6; don't reintroduce it.
6. Book title is *The Agile Investigator*; company is "Astris Integrity
   Consulting." Course brand pairing "Based on The Agile Investigator
   methodology" should appear on every course page.
7. **Case app stays decoupled:** never read/write `profiles.role` or
   `profiles.company_id` from anything under `app/cases/**` or
   `app/api/cases/**` / `app/api/case-admin/**` — access control there is
   `case_members` only. Conversely, `/portal` code must never read
   `case_members` or the case tables. This separation was an explicit
   product decision, not an oversight.

## Standing open items (surface these if relevant work comes up)
- `agile-workplace-investigation-training` is published (`is_published = true`).
  All 61 previously-flagged multiple-choice answers were spot-checked by Rick
  and confirmed correct; `needs_review` is cleared course-wide.
- No video hosting, no payments/Stripe, no self-serve public signup, no
  sequential lesson locking, no auto-grading of short-answer/capstone content
  (all manually reviewed) — all explicitly out of scope per the original build
  plan, not oversights.
- `/cases` (case management) is newly built and not yet used with real client
  data. MVP scope covers triage → planning → evidence collection (with file
  attachments) → analysis (findings + timeline) → report/closure. Not yet
  built: an org-scoped view restricting investigators to only their assigned
  cases (currently org-wide visibility by design), a read-only
  stakeholder/reviewer role, and exportable (non-print) report documents —
  all explicitly deferred per the build decisions, not oversights.
