import { Family } from '@/lib/types';

export interface FamilyMeta {
  id: Family;
  name: string;
  short: string; // one-line rule
  rule: string; // fuller explanation
  test: string; // how to spot it
  color: string; // tailwind-ish token used in UI
  accent: string; // hex accent
  examples: { ar: string; ph: string; en: string }[];
}

// The 5 families, straight from Alaa's method. Judge every verb by TWO things:
// the vowel and the shaddeh. Drop the leading أ, look at the root.
// Shaddeh always wins — if there's a shaddeh, ignore the vowel.
export const FAMILIES: FamilyMeta[] = [
  {
    id: 1,
    name: 'Middle Vowel',
    short: 'A long vowel in the middle — no shaddeh.',
    rule: 'The present "I" form has a long vowel (ا/و/ي) sitting in the middle of the root, and there is no shaddeh. Drop the أ and the vowel is before the end.',
    test: 'No shaddeh? Look for the vowel. In the middle → Family 1.',
    color: 'sky',
    accent: '#0ea5e9',
    examples: [
      { ar: 'أشوف', ph: 'Ashuuf', en: 'I see' },
      { ar: 'أروح', ph: 'Aroo7', en: 'I go' },
      { ar: 'أنام', ph: 'Anaam', en: 'I sleep' },
    ],
  },
  {
    id: 2,
    name: 'End Vowel',
    short: 'A vowel at the end — no shaddeh.',
    rule: 'The present "I" form ends in a vowel, and there is no shaddeh. In the past, the هو form always ends in ا (haka, masha, ga).',
    test: 'No shaddeh? Look for the vowel. At the end → Family 2.',
    color: 'emerald',
    accent: '#10b981',
    examples: [
      { ar: 'أمشي', ph: 'Amshi', en: 'I walk' },
      { ar: 'أحكي', ph: 'A7ki', en: 'I speak' },
      { ar: 'أنسى', ph: 'Ansa', en: 'I forget' },
    ],
  },
  {
    id: 3,
    name: '3-Letter Shaddeh',
    short: 'A shaddeh, and only 3 letters.',
    rule: 'The present "I" form is short — three letters — with a shaddeh (doubled letter). Once there is a shaddeh, the vowel no longer matters.',
    test: 'Shaddeh + short (3 letters) → Family 3.',
    color: 'violet',
    accent: '#8b5cf6',
    examples: [
      { ar: 'أحب', ph: 'A7ebb', en: 'I love' },
      { ar: 'أحط', ph: 'A7utt', en: 'I put' },
      { ar: 'أرد', ph: 'Arudd', en: 'I reply' },
    ],
  },
  {
    id: 4,
    name: 'Long Shaddeh',
    short: 'A shaddeh, and more than 3 letters.',
    rule: 'The present "I" form carries a shaddeh but is longer than three letters. Same idea as Family 3 — the shaddeh rules — but the word is bigger.',
    test: 'Shaddeh + more than 3 letters → Family 4.',
    color: 'rose',
    accent: '#f43f5e',
    examples: [
      { ar: 'أفكّر', ph: 'Afakkir', en: 'I think' },
      { ar: 'أغيّر', ph: 'Aghayyir', en: 'I change' },
      { ar: 'أجرّب', ph: 'Ajarreb', en: 'I try' },
    ],
  },
  {
    id: 5,
    name: 'Regular',
    short: 'No vowel, no shaddeh — the regulars.',
    rule: 'Everything that does not fit the first four families. No counting vowel, no shaddeh. This is the largest, most predictable group.',
    test: 'No shaddeh AND no middle/end vowel → Family 5.',
    color: 'amber',
    accent: '#f59e0b',
    examples: [
      { ar: 'أكتب', ph: 'Aktub', en: 'I write' },
      { ar: 'أسمع', ph: 'Asma3', en: 'I hear' },
      { ar: 'أفتح', ph: 'Afta7', en: 'I open' },
    ],
  },
];

export function familyMeta(id: Family): FamilyMeta {
  return FAMILIES.find((f) => f.id === id)!;
}
