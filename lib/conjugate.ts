// The conjugation engine — the heart of the system.
//
// Alaa's method: everything comes from ONE form, the present-tense "I" (أ-form),
// plus TWO memorized past anchors (past-of-انا, past-of-هو). From those we derive
// six grammar structures across all pronouns. This file implements those rules.
//
// NOTE: derived forms are RULE-GENERATED and marked as "auto" in the UI. The two
// anchors + the I-form are the hand-verified inputs; everything else is computed.

import { ConjRow, ConjTable, Pronoun, Verb, VerbConjugation, WordPair } from './types';

const ORDER: Pronoun[] = ['ana', 'inta', 'inti', 'intu', 'ne7na', 'huwe', 'hiye', 'humme'];

// ---- small helpers -------------------------------------------------------

const HAMZA_ALIF = ['أ', 'إ', 'ا', 'آ']; // أ إ ا آ
const LONG_A = ['ا', 'ى']; // ا ى (strip these off he-forms, not و/ي)

function stripLeadingHamza(ar: string): string {
  if (ar.length && HAMZA_ALIF.includes(ar[0])) return ar.slice(1);
  return ar;
}

function stripLeadingVowelPh(ph: string): string {
  // phonetic present always starts with A- (Ashuuf, Amshi, Aktub)
  if (/^[Aa]/.test(ph)) return ph.slice(1);
  return ph;
}

function stripFinalTaa(ar: string): string {
  return ar.endsWith('ت') ? ar.slice(0, -1) : ar; // ت
}

function stripFinalTaaPh(ph: string): string {
  return /t$/i.test(ph) ? ph.slice(0, -1) : ph;
}

function stripFinalLongA(ar: string): string {
  return ar.length && LONG_A.includes(ar[ar.length - 1]) ? ar.slice(0, -1) : ar;
}

function stripFinalAPh(ph: string): string {
  return /a$/i.test(ph) ? ph.slice(0, -1) : ph;
}

function endsWithLongVowel(ph: string): boolean {
  return /a$/i.test(ph);
}

function row(pronoun: Pronoun, ar: string, ph: string): ConjRow {
  return { pronoun, ar, ph };
}

// ---- PAST (direct) -------------------------------------------------------
// انا-group stem = past-of-انا minus its final ت.
// هو-group base  = past-of-هو (strip trailing ا/ى for hiye/humme).

function pastDirect(v: Verb): ConjTable {
  const stemAr = stripFinalTaa(v.pastAna.ar);
  const stemPh = stripFinalTaaPh(v.pastAna.ph);
  const heAr = stripFinalLongA(v.pastHuwa.ar);
  const hePh = stripFinalAPh(v.pastHuwa.ph);
  const hummeArTail = endsWithLongVowel(v.pastHuwa.ph) ? 'ي' : ''; // keep ي feel? no — use وا
  void hummeArTail;

  return [
    row('ana', v.pastAna.ar, v.pastAna.ph),
    row('inta', v.pastAna.ar, v.pastAna.ph),
    row('inti', v.pastAna.ar + 'ي', v.pastAna.ph + 'i'), // شفت + ي = شفتي (keep the ت)
    row('intu', v.pastAna.ar + 'و', v.pastAna.ph + 'u'), // شفت + و = شفتو (keep the ت)
    row('ne7na', stemAr + 'نا', stemPh + 'na'), // شف + نا = شفنا (drop the ت)
    row('huwe', v.pastHuwa.ar, v.pastHuwa.ph),
    row('hiye', heAr + 'ت', hePh + 'at'), // + ت
    row(
      'humme',
      heAr + 'وا', // + وا
      (endsWithLongVowel(v.pastHuwa.ph) ? hePh + 'aw' : hePh + 'u')
    ),
  ];
}

// ---- PRESENT (no "be" / with "be") --------------------------------------
// Built from the present stem (I-form minus leading أ).

interface PresentForms {
  ar: string;
  ph: string;
}

// Present-tense prefix groups: أ (ana) / ت (inta,inti,intu,hiye) / ي (huwe,humme) / ن (ne7na).
export type PresentGroup = 'a' | 't' | 'y' | 'n';

export interface PresentSeg {
  pronoun: Pronoun;
  group: PresentGroup;
  prefixAr: string;
  coreAr: string;
  suffixAr: string;
  prefixPh: string;
  corePh: string;
  suffixPh: string;
}

const AR_END_VOWELS = ['ا', 'ى', 'ي']; // final-weak endings (Family 2 present stems)

function arVowelFinal(s: string): boolean {
  return s.length > 0 && AR_END_VOWELS.includes(s[s.length - 1]);
}
function phVowelFinal(p: string): boolean {
  return /[aeiou]$/i.test(p);
}
function dropLast(x: string): string {
  return x.slice(0, -1);
}

// Structured present ("no be") — prefix / core / suffix per pronoun, so the UI
// can colour the prefix + changing suffix by their prefix-group. Family 2
// (vowel-final) stems drop their final vowel before ي / وا (تمشي، تمشوا، يمشوا).
export function presentSegments(v: Verb): PresentSeg[] {
  const s = stripLeadingHamza(v.arPresent);
  const p = stripLeadingVowelPh(v.phPresent);
  const anaPrefixAr = v.arPresent.slice(0, 1); // أ / آ / ا
  const anaPrefixPh = /^[A-Za-z]/.test(v.phPresent) ? v.phPresent.slice(0, 1) : 'A';
  const sCut = arVowelFinal(s) ? dropLast(s) : s;
  const pCut = phVowelFinal(p) ? dropLast(p) : p;

  return [
    { pronoun: 'ana', group: 'a', prefixAr: anaPrefixAr, coreAr: s, suffixAr: '', prefixPh: anaPrefixPh, corePh: p, suffixPh: '' },
    { pronoun: 'inta', group: 't', prefixAr: 'ت', coreAr: s, suffixAr: '', prefixPh: 't', corePh: p, suffixPh: '' },
    { pronoun: 'inti', group: 't', prefixAr: 'ت', coreAr: sCut, suffixAr: 'ي', prefixPh: 't', corePh: pCut, suffixPh: 'i' },
    { pronoun: 'intu', group: 't', prefixAr: 'ت', coreAr: sCut, suffixAr: 'وا', prefixPh: 't', corePh: pCut, suffixPh: 'u' },
    { pronoun: 'ne7na', group: 'n', prefixAr: 'ن', coreAr: s, suffixAr: '', prefixPh: 'n', corePh: p, suffixPh: '' },
    { pronoun: 'huwe', group: 'y', prefixAr: 'ي', coreAr: s, suffixAr: '', prefixPh: 'y', corePh: p, suffixPh: '' },
    { pronoun: 'hiye', group: 't', prefixAr: 'ت', coreAr: s, suffixAr: '', prefixPh: 't', corePh: p, suffixPh: '' },
    { pronoun: 'humme', group: 'y', prefixAr: 'ي', coreAr: sCut, suffixAr: 'وا', prefixPh: 'y', corePh: pCut, suffixPh: 'u' },
  ];
}

function segToForms(seg: PresentSeg): PresentForms {
  return { ar: seg.prefixAr + seg.coreAr + seg.suffixAr, ph: seg.prefixPh + seg.corePh + seg.suffixPh };
}

function presentNoBe(v: Verb): Record<Pronoun, PresentForms> {
  const out = {} as Record<Pronoun, PresentForms>;
  for (const seg of presentSegments(v)) out[seg.pronoun] = segToForms(seg);
  return out;
}

function presentWithBe(v: Verb): Record<Pronoun, PresentForms> {
  const noBe = presentNoBe(v);
  const s = stripLeadingHamza(v.arPresent);
  const p = stripLeadingVowelPh(v.phPresent);
  const out = {} as Record<Pronoun, PresentForms>;
  for (const pr of ORDER) {
    if (pr === 'ana') out[pr] = { ar: 'ب' + s, ph: 'b' + p }; // بمشي / bmshi
    else out[pr] = { ar: 'ب' + noBe[pr].ar, ph: 'b' + noBe[pr].ph }; // بتمشي ...
  }
  return out;
}

function toTable(forms: Record<Pronoun, PresentForms>): ConjTable {
  return ORDER.map((pr) => row(pr, forms[pr].ar, forms[pr].ph));
}

// ---- PRESENT CONTINUOUS (عم + with-be) ----------------------------------

function presentContinuous(v: Verb): ConjTable {
  const wb = presentWithBe(v);
  return ORDER.map((pr) => row(pr, 'عم ' + wb[pr].ar, '3am ' + wb[pr].ph));
}

// ---- FUTURE (راح + no-be) -----------------------------------------------

function future(v: Verb): ConjTable {
  const nb = presentNoBe(v);
  return ORDER.map((pr) => row(pr, 'راح ' + nb[pr].ar, 'ra7 ' + nb[pr].ph));
}

// ---- HABITUAL PAST (كان + with-be) : "I used to / I was ..." -------------

const KAN: Record<Pronoun, WordPair> = {
  ana: { ar: 'كنت', ph: 'kint' }, // كنت
  inta: { ar: 'كنت', ph: 'kint' },
  inti: { ar: 'كنتي', ph: 'kinti' }, // كنتي
  intu: { ar: 'كنتو', ph: 'kintu' }, // كنتو
  ne7na: { ar: 'كنا', ph: 'kinna' }, // كنا
  huwe: { ar: 'كان', ph: 'kaan' }, // كان
  hiye: { ar: 'كانت', ph: 'kaanat' }, // كانت
  humme: { ar: 'كانوا', ph: 'kaanu' }, // كانوا
};

function pastHabitual(v: Verb): ConjTable {
  const nb = presentNoBe(v); // كان + present WITHOUT the "be" (كنت أمشي، كان يمشي)
  return ORDER.map((pr) => row(pr, KAN[pr].ar + ' ' + nb[pr].ar, KAN[pr].ph + ' ' + nb[pr].ph));
}

// ---- IMPERATIVE (inta / inti / intu) ------------------------------------
// Drop the أ; families 2 & 5 usually need a helping initial ا (i-).

function imperative(v: Verb): ConjRow[] {
  const stem = stripLeadingHamza(v.arPresent);
  const stemPh = stripLeadingVowelPh(v.phPresent);
  const needsHelper = v.family === 2 || v.family === 5;
  let baseAr = needsHelper ? 'ا' + stem : stem; // ا + stem
  let basePh = needsHelper ? 'i' + stemPh : stemPh;

  const endsYa = baseAr.endsWith('ي');
  const endsIph = /i$/i.test(basePh);

  const intiAr = endsYa ? baseAr : baseAr + 'ي';
  const intiPh = endsIph ? basePh : basePh + 'i';
  const intuAr = (endsYa ? baseAr.slice(0, -1) : baseAr) + 'وا';
  const intuPh = (endsIph ? basePh.slice(0, -1) : basePh) + 'u';

  return [
    row('inta', baseAr, basePh),
    row('inti', intiAr, intiPh),
    row('intu', intuAr, intuPh),
  ];
}

// ---- public API ----------------------------------------------------------

export function conjugate(v: Verb): VerbConjugation {
  return {
    pastDirect: pastDirect(v),
    pastHabitual: pastHabitual(v),
    presentSimple: toTable(presentWithBe(v)),
    presentContinuous: presentContinuous(v),
    future: future(v),
    imperative: imperative(v),
  };
}

// Convenience: the two present variants exposed for the "±be" teaching toggle.
export function presentVariants(v: Verb) {
  return { withBe: toTable(presentWithBe(v)), noBe: toTable(presentNoBe(v)) };
}
