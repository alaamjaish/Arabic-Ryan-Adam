'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getSupabase, TABLES } from './supabase';
import { SrsState, initialSrs, review as srsReview, isoDate } from './srs';
import { BadgeStats, XP, earnedBadges, levelFromXp } from './gamification';
import { VERBS, verbsByFamily } from '@/data/verbs';

export type ItemType = 'verb' | 'vocab' | 'adj' | 'noun';

export interface ProgressRec {
  starred: boolean;
  srs: SrsState | null;
  correct: number;
  wrong: number;
}

export interface StudentMeta {
  assessmentsPassed: number;
  perfectAssessment: boolean;
  flashcards: number;
}

interface Student {
  name: string;
  email: string;
  xp: number;
  streak: number;
  lastActive: string; // ISO date
  badges: string[];
  meta: StudentMeta;
}

interface StoreValue {
  ready: boolean;
  student: Student | null;
  progress: Record<string, ProgressRec>;
  online: boolean;
  signIn: (name: string, email: string) => Promise<void>;
  signOut: () => void;
  get: (type: ItemType, id: string) => ProgressRec;
  toggleStar: (type: ItemType, id: string) => void;
  recordReview: (type: ItemType, id: string, remembered: boolean) => void;
  recordAssessment: (total: number, correct: number) => void;
  bumpFlashcards: (n?: number) => void;
  level: ReturnType<typeof levelFromXp>;
  stats: BadgeStats;
}

const EMPTY: ProgressRec = { starred: false, srs: null, correct: 0, wrong: 0 };
const StoreCtx = createContext<StoreValue | null>(null);
const key = (t: ItemType, id: string) => `${t}:${id}`;
const lsKey = (email: string) => `ryanadam:${email.toLowerCase()}`;

function newStudent(name: string, email: string): Student {
  return {
    name,
    email: email.toLowerCase(),
    xp: 0,
    streak: 0,
    lastActive: isoDate(new Date()),
    badges: [],
    meta: { assessmentsPassed: 0, perfectAssessment: false, flashcards: 0 },
  };
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [online, setOnline] = useState(false);
  const [student, setStudent] = useState<Student | null>(null);
  const [progress, setProgress] = useState<Record<string, ProgressRec>>({});

  // ---- persistence helpers ----
  const persistLocal = useCallback((s: Student, p: Record<string, ProgressRec>) => {
    try {
      localStorage.setItem(lsKey(s.email), JSON.stringify({ student: s, progress: p }));
    } catch {
      /* ignore quota */
    }
  }, []);

  const syncStudent = useCallback(async (s: Student) => {
    const sb = getSupabase();
    if (!sb) return;
    try {
      await sb.from(TABLES.students).upsert(
        {
          email: s.email,
          name: s.name,
          xp: s.xp,
          streak: s.streak,
          last_active: s.lastActive,
          badges: s.badges,
          meta: s.meta,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'email' }
      );
    } catch {
      /* offline: localStorage already holds it */
    }
  }, []);

  const syncProgress = useCallback(async (email: string, t: ItemType, id: string, rec: ProgressRec) => {
    const sb = getSupabase();
    if (!sb) return;
    try {
      await sb.from(TABLES.progress).upsert(
        {
          email: email.toLowerCase(),
          item_type: t,
          item_id: id,
          starred: rec.starred,
          srs: rec.srs,
          correct: rec.correct,
          wrong: rec.wrong,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'email,item_type,item_id' }
      );
    } catch {
      /* ignore */
    }
  }, []);

  // ---- restore last session on mount ----
  useEffect(() => {
    const email = typeof window !== 'undefined' ? localStorage.getItem('ryanadam:last') : null;
    if (!email) {
      setReady(true);
      return;
    }
    const raw = localStorage.getItem(lsKey(email));
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setStudent(parsed.student);
        setProgress(parsed.progress || {});
      } catch {
        /* ignore */
      }
    }
    // refresh from Supabase in the background
    void hydrateFromServer(email);
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hydrateFromServer = useCallback(async (email: string) => {
    const sb = getSupabase();
    if (!sb) return;
    try {
      const [{ data: srow }, { data: prows }] = await Promise.all([
        sb.from(TABLES.students).select('*').eq('email', email.toLowerCase()).maybeSingle(),
        sb.from(TABLES.progress).select('*').eq('email', email.toLowerCase()),
      ]);
      setOnline(true);
      if (srow) {
        const s: Student = {
          name: srow.name,
          email: srow.email,
          xp: srow.xp ?? 0,
          streak: srow.streak ?? 0,
          lastActive: srow.last_active ?? isoDate(new Date()),
          badges: srow.badges ?? [],
          meta: srow.meta ?? { assessmentsPassed: 0, perfectAssessment: false, flashcards: 0 },
        };
        setStudent(s);
      }
      if (prows && prows.length) {
        const map: Record<string, ProgressRec> = {};
        for (const r of prows) {
          map[key(r.item_type as ItemType, r.item_id)] = {
            starred: !!r.starred,
            srs: r.srs ?? null,
            correct: r.correct ?? 0,
            wrong: r.wrong ?? 0,
          };
        }
        setProgress(map);
      }
    } catch {
      setOnline(false);
    }
  }, []);

  // ---- streak roll-over ----
  const touchStreak = useCallback((s: Student): Student => {
    const today = isoDate(new Date());
    if (s.lastActive === today) return s;
    const yesterday = isoDate(new Date(Date.now() - 86400000));
    const streak = s.lastActive === yesterday ? s.streak + 1 : 1;
    return { ...s, streak, lastActive: today, xp: s.xp + XP.dailyFirstAction };
  }, []);

  // ---- actions ----
  const signIn = useCallback(
    async (name: string, email: string) => {
      const e = email.toLowerCase().trim();
      localStorage.setItem('ryanadam:last', e);
      const raw = localStorage.getItem(lsKey(e));
      let s: Student;
      let p: Record<string, ProgressRec> = {};
      if (raw) {
        const parsed = JSON.parse(raw);
        s = { ...parsed.student, name: name || parsed.student.name };
        p = parsed.progress || {};
      } else {
        s = newStudent(name || e.split('@')[0], e);
      }
      setStudent(s);
      setProgress(p);
      persistLocal(s, p);
      await hydrateFromServer(e);
      void syncStudent(s);
    },
    [hydrateFromServer, persistLocal, syncStudent]
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('ryanadam:last');
    setStudent(null);
    setProgress({});
  }, []);

  const get = useCallback(
    (t: ItemType, id: string): ProgressRec => progress[key(t, id)] ?? EMPTY,
    [progress]
  );

  // XP + streak roll-over, as a pure functional update (safe under StrictMode).
  const bump = useCallback(
    (xpDelta: number, metaPatch?: Partial<StudentMeta>) => {
      setStudent((prev) => {
        if (!prev) return prev;
        let next = touchStreak(prev);
        next = { ...next, xp: next.xp + xpDelta };
        if (metaPatch) next = { ...next, meta: { ...next.meta, ...metaPatch } };
        return next;
      });
    },
    [touchStreak]
  );

  const toggleStar = useCallback(
    (t: ItemType, id: string) => {
      const k = key(t, id);
      const cur = progress[k] ?? EMPTY;
      const rec: ProgressRec = { ...cur, starred: !cur.starred };
      setProgress((prev) => ({ ...prev, [k]: rec }));
      if (student) void syncProgress(student.email, t, id, rec);
      if (rec.starred) bump(XP.starVerb);
    },
    [progress, student, syncProgress, bump]
  );

  const recordReview = useCallback(
    (t: ItemType, id: string, remembered: boolean) => {
      const k = key(t, id);
      const cur = progress[k] ?? EMPTY;
      const srs = srsReview(cur.srs ?? initialSrs(), remembered);
      const rec: ProgressRec = {
        ...cur,
        srs,
        correct: cur.correct + (remembered ? 1 : 0),
        wrong: cur.wrong + (remembered ? 0 : 1),
      };
      setProgress((prev) => ({ ...prev, [k]: rec }));
      if (student) void syncProgress(student.email, t, id, rec);
      bump(remembered ? XP.reviewCorrect : XP.reviewWrong);
    },
    [progress, student, syncProgress, bump]
  );

  const recordAssessment = useCallback(
    (total: number, correct: number) => {
      const passed = total > 0 && correct / total >= 0.8;
      const perfect = total > 0 && correct === total;
      setStudent((prev) => {
        if (!prev) return prev;
        let next = touchStreak(prev);
        return {
          ...next,
          xp: next.xp + correct * XP.assessmentCorrect,
          meta: {
            ...next.meta,
            assessmentsPassed: next.meta.assessmentsPassed + (passed ? 1 : 0),
            perfectAssessment: next.meta.perfectAssessment || perfect,
          },
        };
      });
    },
    [touchStreak]
  );

  const bumpFlashcards = useCallback(
    (n = 1) => {
      setStudent((prev) => {
        if (!prev) return prev;
        const next = touchStreak(prev);
        return {
          ...next,
          xp: next.xp + n * XP.flashcardFlip,
          meta: { ...next.meta, flashcards: next.meta.flashcards + n },
        };
      });
    },
    [touchStreak]
  );

  // ---- persistence + badge derivation (single source of truth) ----
  useEffect(() => {
    if (!student) return;
    const st = computeStats(student, progress);
    const badges = earnedBadges(st).map((b) => b.id);
    const changed =
      badges.length !== student.badges.length || badges.some((b, i) => b !== student.badges[i]);
    if (changed) {
      setStudent((s) => (s ? { ...s, badges } : s));
      return; // next run persists with the updated badges
    }
    persistLocal(student, progress);
  }, [student, progress, persistLocal]);

  // ---- debounced Supabase student sync ----
  useEffect(() => {
    if (!student) return;
    const handle = setTimeout(() => void syncStudent(student), 400);
    return () => clearTimeout(handle);
  }, [student, syncStudent]);

  const stats = useMemo(
    () => (student ? computeStats(student, progress) : ZERO_STATS),
    [student, progress]
  );
  const level = useMemo(() => levelFromXp(student?.xp ?? 0), [student?.xp]);

  const value: StoreValue = {
    ready,
    student,
    progress,
    online,
    signIn,
    signOut,
    get,
    toggleStar,
    recordReview,
    recordAssessment,
    bumpFlashcards,
    level,
    stats,
  };

  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>;
}

export function useStore(): StoreValue {
  const v = useContext(StoreCtx);
  if (!v) throw new Error('useStore must be used inside StoreProvider');
  return v;
}

// ---- stats / mastery ----
const ZERO_STATS: BadgeStats = {
  reviews: 0,
  correct: 0,
  starred: 0,
  streak: 0,
  familiesCleared: 0,
  assessmentsPassed: 0,
  perfectAssessment: false,
  flashcards: 0,
};

export function isMastered(rec: ProgressRec | undefined): boolean {
  if (!rec || !rec.srs) return false;
  return rec.srs.reps >= 2 || rec.srs.interval >= 7;
}

function computeStats(s: Student, p: Record<string, ProgressRec>): BadgeStats {
  let reviews = 0;
  let correct = 0;
  let starred = 0;
  for (const rec of Object.values(p)) {
    reviews += rec.correct + rec.wrong;
    correct += rec.correct;
    if (rec.starred) starred += 1;
  }
  let familiesCleared = 0;
  for (let f = 1 as 1 | 2 | 3 | 4 | 5; f <= 5; f = (f + 1) as 1 | 2 | 3 | 4 | 5) {
    const list = verbsByFamily(f);
    if (!list.length) continue;
    const mastered = list.filter((v) => isMastered(p[key('verb', v.id)])).length;
    if (mastered / list.length >= 0.8) familiesCleared += 1;
  }
  return {
    reviews,
    correct,
    starred,
    streak: s.streak,
    familiesCleared,
    assessmentsPassed: s.meta.assessmentsPassed,
    perfectAssessment: s.meta.perfectAssessment,
    flashcards: s.meta.flashcards,
  };
}

// mastery fraction for a family (used by progress UI)
export function familyMastery(p: Record<string, ProgressRec>, family: number): number {
  const list = verbsByFamily(family);
  if (!list.length) return 0;
  const mastered = list.filter((v) => isMastered(p[key('verb', v.id)])).length;
  return mastered / list.length;
}

export { VERBS };
