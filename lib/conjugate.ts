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
    row('inti', stemAr + 'ي', stemPh + 'i'), // + ي
    row('intu', stemAr + 'و', stemPh + 'u'), // + و
    row('ne7na', stemAr + 'نا', stemPh + 'na'), // + نا
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

function presentNoBe(v: Verb): Record<Pronoun, PresentForms> {
  const s = stripLeadingHamza(v.arPresent);
  const p = stripLeadingVowelPh(v.phPresent);
  return {
    ana: { ar: v.arPresent, ph: v.phPresent },
    inta: { ar: 'ت' + s, ph: 't' + p },
    inti: { ar: 'ت' + s + 'ي', ph: 't' + p + 'i' },
    intu: { ar: 'ت' + s + 'وا', ph: 't' + p + 'u' },
    ne7na: { ar: 'ن' + s, ph: 'n' + p },
    huwe: { ar: 'ي' + s, ph: 'y' + p },
    hiye: { ar: 'ت' + s, ph: 't' + p },
    humme: { ar: 'ي' + s + 'وا', ph: 'y' + p + 'u' },
  };
}

function presentWithBe(v: Verb): Record<Pronoun, PresentForms> {
  const s = stripLeadingHamza(v.arPresent);
  const p = stripLeadingVowelPh(v.phPresent);
  const noBe = presentNoBe(v);
  const out = {} as Record<Pronoun, PresentForms>;
  for (const pr of ORDER) {
    if (pr === 'ana') {
      out[pr] = { ar: 'ب' + s, ph: 'b' + p }; // بشوف / bshuuf
    } else {
      out[pr] = { ar: 'ب' + noBe[pr].ar, ph: 'b' + noBe[pr].ph }; // بتشوف ...
    }
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
  const wb = presentWithBe(v);
  return ORDER.map((pr) => row(pr, KAN[pr].ar + ' ' + wb[pr].ar, KAN[pr].ph + ' ' + wb[pr].ph));
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
