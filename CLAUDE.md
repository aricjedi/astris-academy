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

## Roles
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
proxy.ts                                 Next 16's middleware convention; protects /portal/*
```

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

## Standing open items (surface these if relevant work comes up)
- `agile-workplace-investigation-training` is published (`is_published = true`).
  All 61 previously-flagged multiple-choice answers were spot-checked by Rick
  and confirmed correct; `needs_review` is cleared course-wide.
- No video hosting, no payments/Stripe, no self-serve public signup, no
  sequential lesson locking, no auto-grading of short-answer/capstone content
  (all manually reviewed) — all explicitly out of scope per the original build
  plan, not oversights.
