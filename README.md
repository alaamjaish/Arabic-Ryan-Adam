# Arabic — for Ryan & Adam

A living Levantine (Shami) Arabic reference & practice ground, built so two students can keep
learning after in-person lessons end. Created by: **Claude [2026-07-04]**.

It is a Next.js app deployable to Vercel, backed by Supabase for cross-device progress.
No passwords — students "sign in" with just a name + email.

## The idea

Everything comes from **one form**: the present-tense "I" (the أ-form). From that single stamp,
plus **two memorized past anchors** (past-of-انا and past-of-هو), the app generates **six grammar
structures** for every verb:

1. Past — direct (I wrote)
2. Past — habitual/continuous with كان (I used to / I was)
3. Present — simple, ± the "be" (ب)
4. Present — continuous with عم (-ing)
5. Future — with راح
6. Imperative

Verbs are grouped into **5 families** judged by vowel + shaddeh (see `/method`).

## Features

- **The Method** and **Families** — the teaching reference.
- **Verb bank** (~190 verbs) with full auto-generated conjugation per verb.
- **Vocabulary** (~157 words) for flashcards.
- **Flashcards** — verbs & vocab, EN↔عربي, feeds spaced repetition.
- **Sort Test** — tap-to-assign family classification.
- **Revision** — spaced repetition (SM-2 style) + new-learning sessions.
- **Gamification** — XP, levels, streaks, badges.

## ⚠️ Draft content

Verbs/vocab flagged `draft: true` (shown with a **DRAFT** tag in the UI) are AI-generated and
**pending Alaa's verification**. The ~75 verbs from the original PDF are marked verified.
Edit `data/verbs.ts` / `data/vocab.ts` to correct; flip `draft` off once checked.

## Setup

```bash
npm install
npm run dev
```

### Environment (`.env.local`)

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

(Already populated from the Business `.env`. The service-role key is intentionally NOT included —
the client only needs the anon key.)

### Database

Open the Supabase project → **SQL editor** → paste `supabase/schema.sql` → **Run**. Once.
Creates `ryan_adam_students` and `ryan_adam_progress` with open policies (no-auth app).

If the DB is unreachable, the app still works fully — progress falls back to `localStorage`.

## Deploy to Vercel

1. Push this repo to GitHub (done: `alaamjaish/Arabic-Ryan-Adam`).
2. In Vercel → **Add New → Project → Import** that repo.
3. Add the two `NEXT_PUBLIC_SUPABASE_*` env vars.
4. Deploy. (Framework preset: Next.js — zero config.)

## Structure

```
data/       verbs.ts, vocab.ts, families.ts   ← the content
lib/        conjugate.ts  ← the engine
            store.tsx     ← state + Supabase + gamification glue
            srs.ts, gamification.ts, supabase.ts, types.ts
app/        pages (method, families, verbs, flashcards, assessment, revision, progress)
components/ Shell, LoginGate, ui
supabase/   schema.sql
```
