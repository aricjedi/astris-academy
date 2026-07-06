# Astris Academy — Claude Code Project Instructions

## What this is
Static course-hub site for Astris Integrity Consulting, deployed to Vercel at
**academy.astris-integrity.com** (subdomain of the main astris-integrity.com site,
which lives in a separate Vercel project — never modify that project from here).

Courses are hosted on Coursebox.ai and embedded via iframe. This site is the
branded catalog + course landing pages. Checkout and course delivery happen on
Coursebox's side.

Owner: Rick Schumacher, founder of Astris Integrity (corporate investigations,
ethics & compliance consulting). Author of *The Agile Investigator*.

## Structure
```
index.html                                   Catalog page (course cards)
agile-workplace-investigation-training.html  Course 01 landing page + embed
styles.css                                   Shared stylesheet (all pages)
assets/                                      Logos (astris-logo.png, astris-mark.png)
templates/course-template.html               Boilerplate for new course pages
vercel.json                                  cleanUrls enabled
```

## Brand tokens (do not drift from these)
- Navy `#24395B` (primary, from logo) · Ink `#17243B` · Paper `#F5F7FA`
- Slate `#55617A` (secondary text) · Brass `#A9853B` (accents/credential markers only)
- Display/UI type: Libre Franklin · Body: Source Serif 4 (both via Google Fonts)
- Signature element: the five-phase methodology rail (Allegation Analysis →
  Planning → Evidence Collection → Analysis → Reporting). It appears in the
  index hero. Preserve it.

## Workflow: add a new course
1. Copy `templates/course-template.html` to a kebab-case filename, e.g.
   `advanced-interviewing.html`.
2. Replace every `{{PLACEHOLDER}}` token (title, description, modules, meta
   chips, Coursebox embed URL).
3. Add a course card to `index.html` in the `.course-grid` — copy the existing
   card, increment the "Course NN" docket number, update title/copy/link.
4. Replace the dashed "In Development" card only when told to.
5. Deploy.

## Deploy
- Vercel CLI: `vercel --prod` (project name: `astris-academy`).
- First-time setup: `vercel login`, then `vercel link` or let `vercel` create
  the project. Domain `academy.astris-integrity.com` is attached in the Vercel
  dashboard (Settings → Domains).
- Always test the Coursebox iframe on mobile after deploy. If the frame renders
  blank, it is Coursebox blocking iframes (X-Frame-Options) — a Coursebox plan
  issue, not a code bug. Report it; don't work around it with hacks.

## Hard guardrails (from Astris executive team decisions)
1. **Credential language:** only "certificate of completion." Never "certified,"
   "certification," "accredited," or CEU claims anywhere on this site. This is a
   legal-exposure decision (ACFE / state PI licensing sensitivities).
2. **No invented facts:** no prices, dates, testimonials, enrollment numbers, or
   guarantees unless Rick supplies them. If copy needs a fact that doesn't
   exist, use a placeholder and flag it.
3. **ISO language:** say "aligned with ISO/TS 37008:2023" — never "ISO
   certified" or "ISO approved."
4. **Embed pattern:** iframes use the `.embed-frame` wrapper (100vh, min-height
   700px). Don't use `height="100%"` attributes — that was a bug we fixed.
5. Book title is *The Agile Investigator*; company is "Astris Integrity
   Consulting." Course brand pairing "Based on The Agile Investigator
   methodology" should appear on every course page.

## Standing open items (surface these if relevant work comes up)
- Coursebox white-label / custom-domain checkout: unresolved. If enabled later,
  only the embed URLs change — architecture stays.
- Checkout currently runs on my.coursebox.ai under Coursebox's merchant
  account; per-transaction fees unverified.
