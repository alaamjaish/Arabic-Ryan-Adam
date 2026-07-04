// XP, levels, and badges. Pure functions — no I/O.

export const XP = {
  reviewCorrect: 10,
  reviewWrong: 3, // effort still counts
  assessmentCorrect: 8,
  starVerb: 2,
  flashcardFlip: 1,
  dailyFirstAction: 15,
};

// Level curve: level n requires 50 * n^1.6 cumulative-ish. We keep it simple:
// each level needs a bit more than the last.
const LEVEL_STEP = 120; // xp for level 2, then grows

export function levelFromXp(xp: number): {
  level: number;
  intoLevel: number; // xp accumulated into the current level
  needed: number; // xp needed to finish current level
  pct: number; // 0..1 progress in current level
} {
  let level = 1;
  let remaining = Math.max(0, Math.floor(xp));
  let need = LEVEL_STEP;
  while (remaining >= need) {
    remaining -= need;
    level += 1;
    need = Math.round(need * 1.35);
  }
  return {
    level,
    intoLevel: remaining,
    needed: need,
    pct: need === 0 ? 0 : remaining / need,
  };
}

export interface BadgeDef {
  id: string;
  name: string;
  emoji: string;
  desc: string;
  check: (s: BadgeStats) => boolean;
}

export interface BadgeStats {
  reviews: number; // total reviews done
  correct: number; // total correct reviews
  starred: number; // verbs starred
  streak: number; // current streak
  familiesCleared: number; // families with >=80% mastery
  assessmentsPassed: number; // sorting assessments with >=80%
  flashcards: number; // flashcards flipped
  perfectAssessment: boolean; // any 100% assessment
}

export const BADGES: BadgeDef[] = [
  { id: 'first-steps', name: 'First Steps', emoji: '👣', desc: 'Reviewed your first card', check: (s) => s.reviews >= 1 },
  { id: 'getting-warm', name: 'Getting Warm', emoji: '🔥', desc: '3-day streak', check: (s) => s.streak >= 3 },
  { id: 'on-fire', name: 'On Fire', emoji: '🔥🔥', desc: '7-day streak', check: (s) => s.streak >= 7 },
  { id: 'collector', name: 'Collector', emoji: '⭐', desc: 'Starred 10 verbs', check: (s) => s.starred >= 10 },
  { id: 'fifty-club', name: 'Fifty Club', emoji: '🎯', desc: 'Reviewed 50 cards', check: (s) => s.reviews >= 50 },
  { id: 'century', name: 'Century', emoji: '💯', desc: 'Reviewed 100 cards', check: (s) => s.reviews >= 100 },
  { id: 'sorter', name: 'Sorter', emoji: '🗂️', desc: 'Passed a family sorting test', check: (s) => s.assessmentsPassed >= 1 },
  { id: 'flawless', name: 'Flawless', emoji: '✨', desc: 'Scored 100% on a sorting test', check: (s) => s.perfectAssessment },
  { id: 'family-1-master', name: 'Family Master', emoji: '🏅', desc: 'Mastered a whole family', check: (s) => s.familiesCleared >= 1 },
  { id: 'polyglot-path', name: 'Polyglot Path', emoji: '🧭', desc: 'Mastered 3 families', check: (s) => s.familiesCleared >= 3 },
  { id: 'all-families', name: 'The Whole Map', emoji: '👑', desc: 'Mastered all 5 families', check: (s) => s.familiesCleared >= 5 },
  { id: 'card-shark', name: 'Card Shark', emoji: '🃏', desc: 'Flipped 100 flashcards', check: (s) => s.flashcards >= 100 },
];

export function earnedBadges(stats: BadgeStats): BadgeDef[] {
  return BADGES.filter((b) => b.check(stats));
}
