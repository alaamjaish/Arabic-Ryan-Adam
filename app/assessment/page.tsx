'use client';

import { useMemo, useState } from 'react';
import { VERBS } from '@/data/verbs';
import { Family, Verb } from '@/lib/types';
import { FAMILIES, familyMeta } from '@/data/families';
import { Ar, Ph } from '@/components/ui';
import { useStore } from '@/lib/store';

const SESSION = 10;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function AssessmentPage() {
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
    // feed SRS lightly: a correct family guess = a soft "review"
    recordReview('verb', verb.id, correct);
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
        <h1 style={{ fontSize: 28, fontWeight: 800 }}>
          {score} / {queue.length}
        </h1>
        <p style={{ color: 'var(--ink-soft)' }}>
          {pct === 100 ? 'Flawless — you read the families perfectly.' : pct >= 80 ? 'Passed! You’ve got the pattern.' : 'Keep going — review The Method and try again.'}
        </p>
        <p style={{ fontWeight: 700, color: 'var(--brand-ink)' }}>+{score * 8} XP</p>
        <button className="btn btn-brand" onClick={restart} style={{ padding: '11px 20px', marginTop: 6 }}>
          New round →
        </button>
      </div>
    );
  }

  if (!verb) return null;
  const meta = familyMeta(verb.family as Family);

  return (
    <div style={{ maxWidth: 560, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--ink-soft)', fontSize: 14 }}>
        <span>Question {i + 1} / {queue.length}</span>
        <span>Score {score}</span>
      </div>
      <div style={{ height: 6, background: 'var(--bg-soft)', borderRadius: 6, overflow: 'hidden', margin: '8px 0 18px' }}>
        <div style={{ width: `${(i / queue.length) * 100}%`, height: '100%', background: 'var(--brand)', transition: 'width 0.3s' }} />
      </div>

      <div className="card" style={{ padding: 24, textAlign: 'center' }}>
        <p style={{ color: 'var(--ink-soft)', margin: 0, fontSize: 14 }}>Which family?</p>
        <div style={{ margin: '10px 0 4px' }}>
          <Ar size={46}>{verb.arPresent}</Ar>
        </div>
        <Ph>{verb.phPresent} · {verb.english}</Ph>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))', gap: 8, marginTop: 14 }}>
        {FAMILIES.map((f) => {
          let bg = 'var(--bg-soft)';
          let col = 'var(--ink)';
          if (chosen !== null) {
            if (f.id === verb.family) {
              bg = 'color-mix(in srgb, var(--good) 22%, transparent)';
              col = 'var(--good)';
            } else if (f.id === chosen) {
              bg = 'color-mix(in srgb, var(--bad) 20%, transparent)';
              col = 'var(--bad)';
            }
          }
          return (
            <button
              key={f.id}
              onClick={() => choose(f.id)}
              disabled={chosen !== null}
              className="btn"
              style={{ padding: '12px 8px', background: bg, color: col, borderRadius: 12, border: `1px solid var(--line)` }}
            >
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
              <span style={{ fontSize: 12, color: 'var(--ink-soft)' }}>past أنا: </span>
              <Ar size={18}>{verb.pastAna.ar}</Ar> <Ph>{verb.pastAna.ph}</Ph>
            </div>
            <div>
              <span style={{ fontSize: 12, color: 'var(--ink-soft)' }}>past هو: </span>
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
