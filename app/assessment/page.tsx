'use client';

import { useMemo, useState } from 'react';
import { VERBS } from '@/data/verbs';
import { ADJECTIVES } from '@/data/adjectives';
import { NOUNS } from '@/data/nouns';
import { VOCAB } from '@/data/vocab';
import { Family, Verb } from '@/lib/types';
import { FAMILIES, familyMeta } from '@/data/families';
import { Ar, Ph } from '@/components/ui';
import { ItemType, useStore } from '@/lib/store';

const SESSION = 10;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Mode = null | 'families' | 'meaning-verb' | 'meaning-adj' | 'meaning-noun' | 'meaning-vocab';

export default function TestPage() {
  const [mode, setMode] = useState<Mode>(null);

  if (mode === 'families') return <FamilySort onExit={() => setMode(null)} />;
  if (mode === 'meaning-verb' || mode === 'meaning-adj' || mode === 'meaning-noun' || mode === 'meaning-vocab') {
    const cfg = {
      'meaning-verb': { type: 'verb' as ItemType, items: VERBS.map((v) => ({ id: v.id, ar: v.arPresent, ph: v.phPresent, en: v.english })), title: 'Verb meanings' },
      'meaning-adj': { type: 'adj' as ItemType, items: ADJECTIVES.map((a) => ({ id: a.id, ar: a.masc.ar, ph: a.masc.ph, en: a.english })), title: 'Adjective meanings' },
      'meaning-noun': { type: 'noun' as ItemType, items: NOUNS.map((n) => ({ id: n.id, ar: n.singular.ar, ph: n.singular.ph, en: n.english })), title: 'Noun meanings' },
      'meaning-vocab': { type: 'vocab' as ItemType, items: VOCAB.map((w) => ({ id: w.id, ar: w.ar, ph: w.ph, en: w.english })), title: 'Word meanings' },
    }[mode];
    return <MeaningQuiz type={cfg.type} items={cfg.items} title={cfg.title} onExit={() => setMode(null)} />;
  }

  // ---- picker ----
  const options: { m: Mode; icon: string; title: string; sub: string }[] = [
    { m: 'families', icon: '🗂️', title: 'Verb Families', sub: 'Which family does the verb belong to?' },
    { m: 'meaning-verb', icon: '📖', title: 'Verb Meanings', sub: 'See the verb, pick the meaning' },
    { m: 'meaning-adj', icon: '🎨', title: 'Adjective Meanings', sub: 'See the adjective, pick the meaning' },
    { m: 'meaning-noun', icon: '📦', title: 'Noun Meanings', sub: 'See the noun, pick the meaning' },
    { m: 'meaning-vocab', icon: '🗣️', title: 'Word Meanings', sub: 'See the word, pick the meaning' },
  ];

  return (
    <div style={{ maxWidth: 560, margin: '0 auto' }}>
      <h1 style={{ fontSize: 26, fontWeight: 800 }}>Test yourself</h1>
      <p style={{ color: 'var(--ink-soft)', marginTop: 0 }}>Pick what you want to be tested on.</p>
      <div style={{ display: 'grid', gap: 10, marginTop: 8 }}>
        {options.map((o) => (
          <button key={o.m} className="card" onClick={() => setMode(o.m)} style={{ padding: 16, textAlign: 'left', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', background: 'var(--card)' }}>
            <span style={{ fontSize: 24 }}>{o.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700 }}>{o.title}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{o.sub}</div>
            </div>
            <span style={{ color: 'var(--ink-soft)' }}>→</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ============================ meaning quiz ============================
function MeaningQuiz({
  type,
  items,
  title,
  onExit,
}: {
  type: ItemType;
  items: { id: string; ar: string; ph: string; en: string }[];
  title: string;
  onExit: () => void;
}) {
  const { recordReview, recordAssessment } = useStore();
  const [seed, setSeed] = useState(0);
  const queue = useMemo(() => shuffle(items).slice(0, SESSION), [seed, items]);
  const [i, setI] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = queue[i];
  const options = useMemo(() => {
    if (!q) return [];
    const distractors = shuffle(items.filter((x) => x.id !== q.id)).slice(0, 3).map((x) => x.en);
    return shuffle([q.en, ...distractors]);
  }, [q, items]);

  function choose(en: string) {
    if (chosen || !q) return;
    setChosen(en);
    const correct = en === q.en;
    if (correct) setScore((s) => s + 1);
    recordReview(type, q.id, correct);
  }
  function next() {
    if (i + 1 >= queue.length) {
      recordAssessment(queue.length, score);
      setDone(true);
    } else {
      setI(i + 1);
      setChosen(null);
    }
  }
  function restart() {
    setSeed((s) => s + 1);
    setI(0);
    setChosen(null);
    setScore(0);
    setDone(false);
  }

  if (done) {
    const pct = Math.round((score / queue.length) * 100);
    return (
      <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
        <div className="pop" style={{ fontSize: 60 }}>{pct === 100 ? '✨' : pct >= 80 ? '🎉' : '💪'}</div>
        <h1 style={{ fontSize: 28, fontWeight: 800 }}>{score} / {queue.length}</h1>
        <p style={{ fontWeight: 700, color: 'var(--brand-ink)' }}>+{score * 8} XP</p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 8 }}>
          <button className="btn" onClick={onExit} style={{ background: 'var(--bg-soft)', padding: '11px 18px' }}>← Tests</button>
          <button className="btn btn-brand" onClick={restart} style={{ padding: '11px 20px' }}>New round →</button>
        </div>
      </div>
    );
  }
  if (!q) return null;

  return (
    <div style={{ maxWidth: 560, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--ink-soft)', fontSize: 14 }}>
        <button onClick={onExit} className="btn" style={{ background: 'transparent', color: 'var(--ink-soft)', padding: 0 }}>← {title}</button>
        <span>{i + 1}/{queue.length} · {score}✓</span>
      </div>
      <div style={{ height: 6, background: 'var(--bg-soft)', borderRadius: 6, overflow: 'hidden', margin: '8px 0 18px' }}>
        <div style={{ width: `${(i / queue.length) * 100}%`, height: '100%', background: 'var(--brand)' }} />
      </div>

      <div className="card" style={{ padding: 24, textAlign: 'center' }}>
        <p style={{ color: 'var(--ink-soft)', margin: 0, fontSize: 14 }}>What does it mean?</p>
        <div style={{ margin: '10px 0 4px' }}><Ar size={44}>{q.ar}</Ar></div>
        <Ph>{q.ph}</Ph>
      </div>

      <div style={{ display: 'grid', gap: 8, marginTop: 14 }}>
        {options.map((en) => {
          let bg = 'var(--bg-soft)';
          let col = 'var(--ink)';
          if (chosen) {
            if (en === q.en) { bg = 'color-mix(in srgb, var(--good) 22%, transparent)'; col = 'var(--good)'; }
            else if (en === chosen) { bg = 'color-mix(in srgb, var(--bad) 20%, transparent)'; col = 'var(--bad)'; }
          }
          return (
            <button key={en} onClick={() => choose(en)} disabled={!!chosen} className="btn" style={{ padding: '13px 16px', textAlign: 'left', background: bg, color: col, border: '1px solid var(--line)' }}>
              {en}
            </button>
          );
        })}
      </div>

      {chosen && (
        <button className="btn btn-brand" onClick={next} style={{ marginTop: 14, padding: 12, width: '100%' }}>
          {i + 1 >= queue.length ? 'See results →' : 'Next →'}
        </button>
      )}
    </div>
  );
}

// ============================ family sort (verbs) ============================
function FamilySort({ onExit }: { onExit: () => void }) {
  const { recordReview, recordAssessment } = useStore();
  const [seed, setSeed] = useState(0);
  const queue = useMemo(() => shuffle(VERBS).slice(0, SESSION), [seed]);
  const [i, setI] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const verb: Verb | undefined = queue[i];

  function choose(f: number) {
    if (chosen !== null || !verb) return;
    setChosen(f);
    const correct = f === verb.family;
    if (correct) setScore((s) => s + 1);
    recordReview('verb', verb.id, correct);
  }
  function next() {
    if (i + 1 >= queue.length) { recordAssessment(queue.length, score); setDone(true); }
    else { setI(i + 1); setChosen(null); }
  }
  function restart() { setSeed((s) => s + 1); setI(0); setChosen(null); setScore(0); setDone(false); }

  if (done) {
    const pct = Math.round((score / queue.length) * 100);
    return (
      <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
        <div className="pop" style={{ fontSize: 60 }}>{pct === 100 ? '✨' : pct >= 80 ? '🎉' : '💪'}</div>
        <h1 style={{ fontSize: 28, fontWeight: 800 }}>{score} / {queue.length}</h1>
        <p style={{ fontWeight: 700, color: 'var(--brand-ink)' }}>+{score * 8} XP</p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 8 }}>
          <button className="btn" onClick={onExit} style={{ background: 'var(--bg-soft)', padding: '11px 18px' }}>← Tests</button>
          <button className="btn btn-brand" onClick={restart} style={{ padding: '11px 20px' }}>New round →</button>
        </div>
      </div>
    );
  }
  if (!verb) return null;
  const meta = familyMeta(verb.family as Family);

  return (
    <div style={{ maxWidth: 560, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--ink-soft)', fontSize: 14 }}>
        <button onClick={onExit} className="btn" style={{ background: 'transparent', color: 'var(--ink-soft)', padding: 0 }}>← Verb families</button>
        <span>{i + 1}/{queue.length} · {score}✓</span>
      </div>
      <div style={{ height: 6, background: 'var(--bg-soft)', borderRadius: 6, overflow: 'hidden', margin: '8px 0 18px' }}>
        <div style={{ width: `${(i / queue.length) * 100}%`, height: '100%', background: 'var(--brand)' }} />
      </div>

      <div className="card" style={{ padding: 24, textAlign: 'center' }}>
        <p style={{ color: 'var(--ink-soft)', margin: 0, fontSize: 14 }}>Which family?</p>
        <div style={{ margin: '10px 0 4px' }}><Ar size={46}>{verb.arPresent}</Ar></div>
        <Ph>{verb.phPresent} · {verb.english}</Ph>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))', gap: 8, marginTop: 14 }}>
        {FAMILIES.map((f) => {
          let bg = 'var(--bg-soft)';
          if (chosen !== null) {
            if (f.id === verb.family) bg = 'color-mix(in srgb, var(--good) 22%, transparent)';
            else if (f.id === chosen) bg = 'color-mix(in srgb, var(--bad) 20%, transparent)';
          }
          return (
            <button key={f.id} onClick={() => choose(f.id)} disabled={chosen !== null} className="btn" style={{ padding: '12px 8px', background: bg, borderRadius: 12, border: '1px solid var(--line)' }}>
              <div style={{ fontWeight: 800, color: `var(--f${f.id})` }}>F{f.id}</div>
              <div style={{ fontSize: 11 }}>{f.name}</div>
            </button>
          );
        })}
      </div>

      {chosen !== null && (
        <div className="card fade-in" style={{ padding: 16, marginTop: 14 }}>
          <div style={{ fontWeight: 700, color: chosen === verb.family ? 'var(--good)' : 'var(--bad)' }}>
            {chosen === verb.family ? 'Correct!' : `It’s Family ${verb.family} — ${meta.name}`}
          </div>
          <div style={{ fontSize: 14, marginTop: 4 }}>🔎 {meta.test}</div>
          <div style={{ display: 'flex', gap: 18, marginTop: 10, flexWrap: 'wrap' }}>
            <div>
              <span style={{ fontSize: 12, color: 'var(--ink-soft)' }}>past I: </span>
              <Ar size={18}>{verb.pastAna.ar}</Ar> <Ph>{verb.pastAna.ph}</Ph>
            </div>
            <div>
              <span style={{ fontSize: 12, color: 'var(--ink-soft)' }}>past he: </span>
              <Ar size={18}>{verb.pastHuwa.ar}</Ar> <Ph>{verb.pastHuwa.ph}</Ph>
            </div>
          </div>
          <button className="btn btn-brand" onClick={next} style={{ marginTop: 12, padding: '10px 18px', width: '100%' }}>
            {i + 1 >= queue.length ? 'See results →' : 'Next →'}
          </button>
        </div>
      )}
    </div>
  );
}
