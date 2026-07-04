// Spaced repetition — a compact SM-2 variant.
// A card's state: interval (days), ease (>=1.3), due (ISO date).

export interface SrsState {
  interval: number; // days until next review
  ease: number; // ease factor
  due: string; // ISO date (yyyy-mm-dd)
  reps: number; // successful reps in a row
}

export function initialSrs(today = new Date()): SrsState {
  return { interval: 0, ease: 2.5, due: isoDate(today), reps: 0 };
}

export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function addDays(iso: string, days: number): string {
  const d = new Date(iso + 'T00:00:00');
  d.setDate(d.getDate() + days);
  return isoDate(d);
}

// quality: true = remembered, false = forgot.
export function review(state: SrsState, remembered: boolean, today = new Date()): SrsState {
  const t = isoDate(today);
  if (!remembered) {
    return { interval: 1, ease: Math.max(1.3, state.ease - 0.2), due: addDays(t, 1), reps: 0 };
  }
  const reps = state.reps + 1;
  let interval: number;
  if (reps === 1) interval = 1;
  else if (reps === 2) interval = 3;
  else interval = Math.round(state.interval * state.ease);
  interval = Math.max(1, interval);
  const ease = Math.min(3.0, state.ease + 0.05);
  return { interval, ease, due: addDays(t, interval), reps };
}

export function isDue(state: SrsState | undefined, today = new Date()): boolean {
  if (!state) return true; // never reviewed → due
  return state.due <= isoDate(today);
}
