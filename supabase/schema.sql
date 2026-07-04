-- ============================================================================
-- Arabic — Ryan & Adam :: Supabase schema
-- Shared "playground" project, so tables are namespaced with ryan_adam_.
-- Paste this whole file into the Supabase SQL editor and run it once.
-- Safe to re-run (idempotent).
--
-- No real auth: students "sign in" with name + email only. Anyone with the
-- app URL can read/write these two tables via the anon key. That is intended
-- (2 trusted students, obscure URL). Do NOT store anything sensitive here.
-- ============================================================================

create table if not exists public.ryan_adam_students (
  email        text primary key,
  name         text not null,
  xp           integer not null default 0,
  streak       integer not null default 0,
  last_active  date,
  badges       jsonb not null default '[]'::jsonb,
  meta         jsonb not null default '{}'::jsonb,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create table if not exists public.ryan_adam_progress (
  email       text not null,
  item_type   text not null,           -- 'verb' | 'vocab'
  item_id     text not null,
  starred     boolean not null default false,
  srs         jsonb,                    -- { interval, ease, due, reps }
  correct     integer not null default 0,
  wrong       integer not null default 0,
  updated_at  timestamptz not null default now(),
  primary key (email, item_type, item_id)
);

create index if not exists ryan_adam_progress_email_idx
  on public.ryan_adam_progress (email);

-- Row Level Security: enabled, but wide-open policies for the anon role,
-- because there is no login. This is deliberate for this tiny 2-student app.
alter table public.ryan_adam_students  enable row level security;
alter table public.ryan_adam_progress  enable row level security;

do $$
begin
  if not exists (select 1 from pg_policies where policyname = 'ryan_adam_students_all') then
    create policy ryan_adam_students_all on public.ryan_adam_students
      for all to anon, authenticated using (true) with check (true);
  end if;
  if not exists (select 1 from pg_policies where policyname = 'ryan_adam_progress_all') then
    create policy ryan_adam_progress_all on public.ryan_adam_progress
      for all to anon, authenticated using (true) with check (true);
  end if;
end $$;
