'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { VERBS_BY_ID, VERBS } from '@/data/verbs';
import { VOCAB } from '@/data/vocab';
import { isDue } from '@/lib/srs';
import { Ar, FamilyPill, Ph } from '@/components/ui';
import { Family } from '@/lib/types';
import { ItemType, useStore } from '@/lib/store';

type Item = { type: ItemType; id: string };

const VOCAB_BY_ID = Object.fromEntries(VOCAB.map((w) => [w.id, w]));

function shuffle<T>(a: T[]): T[] {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

export default function RevisionPage() {
  const { progress, recordReview } = useStore();
  const [mode, setMode] = useState<'due' | 'new' | null>(null);
  const [queue, setQueue] = useState<Item[]>([]);
  const [i, setI] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [count, setCount] = useState(0);

  // how many are due right now (verbs + vocab that have been seen)
  const dueItems = useMemo(() => {
    const out: Item[] = [];
    for (const [k, rec] of Object.entries(progress)) {
      if (rec.srs && isDue(rec.srs)) {
        const [type, ...rest] = k.split(':');
        out.push({ type: type as ItemType, id: rest.join(':') });
      }
    }
    return out;
  }, [progress]);

  function startDue() {
    setQueue(shuffle(dueItems));
    setMode('due');
    setI(0);
    setRevealed(false);
    setCount(0);
  }

  function startNew() {
    const unseen = VERBS.filter((v) => !progress[`verb:${v.id}`]?.srs).slice(0, 100);
    setQueue(shuffle(unseen).slice(0, 12).map((v) => ({ type: 'verb' as ItemType, id: v.id })));
    setMode('new');
    setI(0);
    setRevealed(false);
    setCount(0);
  }

  function grade(remembered: boolean) {
    const item = queue[i];
    if (item) recordReview(item.type, item.id, remembered);
    setCount((c) => c + 1);
    if (i + 1 >= queue.length) {
      setMode(null);
      setQueue([]);
    } else {
      setI(i + 1);
      setRevealed(false);
    }
  }

  // ---- landing ----
  if (!mode) {
    return (
      <div style={{ maxWidth: 520, margin: '0 auto' }}>
        <h1 style={{ fontSize: 26, fontWeight: 800 }}>Revision</h1>
        <p style={{ color: 'var(--ink-soft)', marginTop: 0 }}>
          Spaced repetition brings cards back right before you’d forget them.
        </p>

        {count > 0 && (
          <div className="card pop" style={{ padding: 14, marginBottom: 12, textAlign: 'center', color: 'var(--brand-ink)', fontWeight: 700 }}>
            Session done — {count} cards reviewed 🎉
          </div>
        )}

        <div className="card" style={{ padding: 18, marginTop: 8 }}>
          <div style={{ fontWeight: 700, fontSize: 18 }}>🔁 Due today</div>
          <p style={{ color: 'var(--ink-soft)', margin: '6px 0 12px' }}>
            {dueItems.length > 0 ? `${dueItems.length} cards are waiting.` : 'Nothing due right now — great job.'}
          </p>
          <button
            className="btn btn-brand"
            onClick={startDue}
            disabled={dueItems.length === 0}
            style={{ padding: '10px 18px', opacity: dueItems.length ? 1 : 0.5 }}
          >
            Review due cards
          </button>
        </div>

        <div className="card" style={{ padding: 18, marginTop: 12 }}>
          <div style={{ fontWeight: 700, fontSize: 18 }}>✨ Learn new</div>
          <p style={{ color: 'var(--ink-soft)', margin: '6px 0 12px' }}>
            Meet 12 verbs you haven’t seen yet and add them to your rotation.
          </p>
          <button className="btn" onClick={startNew} style={{ padding: '10px 18px', background: 'var(--bg-soft)' }}>
            Start a new-learning session
          </button>
        </div>
      </div>
    );
  }

  // ---- card ----
  const item = queue[i];
  if (!item) return null;
  const isVerb = item.type === 'verb';
  const v = isVerb ? VERBS_BY_ID[item.id] : null;
  const w = !isVerb ? VOCAB_BY_ID[item.id] : null;

  return (
    <div style={{ maxWidth: 520, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: 'var(--ink-soft)' }}>
        <span>{mode === 'due' ? 'Due review' : 'New learning'}</span>
        <span>{i + 1} / {queue.length}</span>
      </div>
      <div style={{ height: 6, background: 'var(--bg-soft)', borderRadius: 6, overflow: 'hidden', margin: '8px 0 18px' }}>
        <div style={{ width: `${(i / queue.length) * 100}%`, height: '100%', background: 'var(--brand)' }} />
      </div>

      <div className="card" style={{ padding: 26, textAlign: 'center', minHeight: 180 }}>
        {isVerb && v ? (
          <>
            <Ar size={46}>{v.arPresent}</Ar>
            <div style={{ marginTop: 6 }}><Ph>{v.phPresent}</Ph></div>
            {revealed && (
              <div className="fade-in" style={{ marginTop: 14 }}>
                <div style={{ fontSize: 20, fontWeight: 700 }}>{v.english}</div>
                <div style={{ marginTop: 8, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <span><Ph>past أنا:</Ph> <Ar size={18}>{v.pastAna.ar}</Ar></span>
                  <span><Ph>past هو:</Ph> <Ar size={18}>{v.pastHuwa.ar}</Ar></span>
                </div>
                <div style={{ marginTop: 10, display: 'inline-block' }}>
                  <FamilyPill family={v.family as Family} small />
                </div>
              </div>
            )}
          </>
        ) : w ? (
          <>
            <div style={{ fontSize: 24, fontWeight: 700 }}>{w.english}</div>
            {revealed && (
              <div className="fade-in" style={{ marginTop: 14 }}>
                <Ar size={44}>{w.ar}</Ar>
                <div style={{ marginTop: 6 }}><Ph>{w.ph}</Ph></div>
              </div>
            )}
          </>
        ) : null}
      </div>

      {!revealed ? (
        <button className="btn btn-brand" onClick={() => setRevealed(true)} style={{ width: '100%', marginTop: 14, padding: 13 }}>
          Show answer
        </button>
      ) : (
        <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
          <button className="btn" onClick={() => grade(false)} style={{ flex: 1, background: 'var(--bg-soft)', padding: 13 }}>
            Again
          </button>
          <button className="btn btn-brand" onClick={() => grade(true)} style={{ flex: 1, padding: 13 }}>
            Good ✓
          </button>
        </div>
      )}

      {isVerb && (
        <div style={{ textAlign: 'center', marginTop: 12 }}>
          <Link href={`/verbs/${item.id}`} style={{ fontSize: 13, color: 'var(--ink-soft)' }}>
            see full conjugation →
          </Link>
        </div>
      )}
    </div>
  );
}
