'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { VERBS_BY_ID } from '@/data/verbs';
import { ADJ_BY_ID } from '@/data/adjectives';
import { NOUNS_BY_ID } from '@/data/nouns';
import { VOCAB } from '@/data/vocab';
import { isDue } from '@/lib/srs';
import { Ar, FamilyPill, Ph } from '@/components/ui';
import { Family } from '@/lib/types';
import { ItemType, useStore } from '@/lib/store';

type Item = { type: ItemType; id: string };
const VOCAB_BY_ID = Object.fromEntries(VOCAB.map((w) => [w.id, w]));

const SECTIONS: { k: ItemType | 'all'; label: string; icon: string }[] = [
  { k: 'all', label: 'Everything', icon: '⭐' },
  { k: 'verb', label: 'Verbs', icon: '📖' },
  { k: 'adj', label: 'Adjectives', icon: '🎨' },
  { k: 'noun', label: 'Nouns', icon: '📦' },
  { k: 'vocab', label: 'Words', icon: '🗣️' },
];

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
  const [queue, setQueue] = useState<Item[] | null>(null);
  const [i, setI] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [reviewed, setReviewed] = useState(0);

  // all STARRED items, grouped
  const starred = useMemo(() => {
    const out: Item[] = [];
    for (const [k, rec] of Object.entries(progress)) {
      if (rec.starred) {
        const [type, ...rest] = k.split(':');
        out.push({ type: type as ItemType, id: rest.join(':') });
      }
    }
    return out;
  }, [progress]);

  const dueOf = (items: Item[]) => items.filter((it) => isDue(progress[`${it.type}:${it.id}`]?.srs ?? undefined));

  function countFor(k: ItemType | 'all') {
    const items = k === 'all' ? starred : starred.filter((s) => s.type === k);
    return { total: items.length, due: dueOf(items).length };
  }

  function start(k: ItemType | 'all') {
    const items = k === 'all' ? starred : starred.filter((s) => s.type === k);
    const due = dueOf(items);
    setQueue(shuffle(due.length ? due : items));
    setI(0);
    setRevealed(false);
    setReviewed(0);
  }

  function grade(remembered: boolean) {
    const item = queue![i];
    if (item) recordReview(item.type, item.id, remembered);
    setReviewed((c) => c + 1);
    if (i + 1 >= queue!.length) setQueue(null);
    else {
      setI(i + 1);
      setRevealed(false);
    }
  }

  // ---- landing ----
  if (!queue) {
    return (
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <h1 style={{ fontSize: 26, fontWeight: 800 }}>Revision</h1>
        <p style={{ color: 'var(--ink-soft)', marginTop: 0 }}>
          Your revision is built from <b>whatever you ⭐ star</b>. Star a verb, adjective, noun, or word
          anywhere in the app and it lands here — spaced repetition then brings it back before you forget.
        </p>

        {reviewed > 0 && (
          <div className="card pop" style={{ padding: 14, marginBottom: 12, textAlign: 'center', color: 'var(--brand-ink)', fontWeight: 700 }}>
            Session done — {reviewed} cards reviewed 🎉
          </div>
        )}

        {starred.length === 0 ? (
          <div className="card" style={{ padding: 18, marginTop: 8 }}>
            <div style={{ fontWeight: 700 }}>Nothing starred yet</div>
            <p style={{ color: 'var(--ink-soft)' }}>
              Tap the ☆ on any verb, adjective, noun, or word to add it to your revision.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Link href="/verbs" className="btn btn-brand" style={{ padding: '8px 14px', textDecoration: 'none' }}>Browse verbs →</Link>
              <Link href="/adjectives" className="btn" style={{ padding: '8px 14px', background: 'var(--bg-soft)', textDecoration: 'none', color: 'var(--ink)' }}>Adjectives →</Link>
              <Link href="/nouns" className="btn" style={{ padding: '8px 14px', background: 'var(--bg-soft)', textDecoration: 'none', color: 'var(--ink)' }}>Nouns →</Link>
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: 10, marginTop: 8 }}>
            {SECTIONS.map((s) => {
              const { total, due } = countFor(s.k);
              return (
                <button
                  key={s.k}
                  className="card"
                  onClick={() => total > 0 && start(s.k)}
                  disabled={total === 0}
                  style={{ padding: 16, textAlign: 'left', display: 'flex', alignItems: 'center', gap: 12, opacity: total ? 1 : 0.5, cursor: total ? 'pointer' : 'default', background: 'var(--card)' }}
                >
                  <span style={{ fontSize: 24 }}>{s.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700 }}>{s.label}</div>
                    <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{total} starred · {due} due now</div>
                  </div>
                  {total > 0 && <span className="btn btn-brand" style={{ padding: '8px 14px' }}>{due > 0 ? 'Review' : 'Practice'}</span>}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // ---- card ----
  const item = queue[i];
  if (!item) return null;
  const v = item.type === 'verb' ? VERBS_BY_ID[item.id] : null;
  const a = item.type === 'adj' ? ADJ_BY_ID[item.id] : null;
  const n = item.type === 'noun' ? NOUNS_BY_ID[item.id] : null;
  const w = item.type === 'vocab' ? VOCAB_BY_ID[item.id] : null;

  return (
    <div style={{ maxWidth: 560, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: 'var(--ink-soft)' }}>
        <span>Revising ⭐</span>
        <span>{i + 1} / {queue.length}</span>
      </div>
      <div style={{ height: 6, background: 'var(--bg-soft)', borderRadius: 6, overflow: 'hidden', margin: '8px 0 18px' }}>
        <div style={{ width: `${(i / queue.length) * 100}%`, height: '100%', background: 'var(--brand)' }} />
      </div>

      <div className="card" style={{ padding: 26, textAlign: 'center', minHeight: 190 }}>
        {v && (
          <>
            <Ar size={44}>{v.arPresent}</Ar>
            <div style={{ marginTop: 6 }}><Ph>{v.phPresent}</Ph></div>
            {revealed && (
              <div className="fade-in" style={{ marginTop: 12 }}>
                <div style={{ fontSize: 20, fontWeight: 700 }}>{v.english}</div>
                <div style={{ marginTop: 8, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <span><Ph>past أنا:</Ph> <Ar size={18}>{v.pastAna.ar}</Ar></span>
                  <span><Ph>past هو:</Ph> <Ar size={18}>{v.pastHuwa.ar}</Ar></span>
                </div>
                <div style={{ marginTop: 10 }}><FamilyPill family={v.family as Family} small /></div>
              </div>
            )}
          </>
        )}
        {a && (
          <>
            <div style={{ fontSize: 22, fontWeight: 700 }}>{a.english}</div>
            {revealed && (
              <div className="fade-in" style={{ marginTop: 12, display: 'grid', gap: 6 }}>
                <RevRow label="masc" ar={a.masc.ar} ph={a.masc.ph} />
                <RevRow label="fem" ar={a.fem.ar} ph={a.fem.ph} />
                <RevRow label="pl" ar={a.plural.ar} ph={a.plural.ph} />
              </div>
            )}
          </>
        )}
        {n && (
          <>
            <div style={{ fontSize: 22, fontWeight: 700 }}>{n.english}</div>
            {revealed && (
              <div className="fade-in" style={{ marginTop: 12, display: 'grid', gap: 6 }}>
                <RevRow label="sing" ar={n.singular.ar} ph={n.singular.ph} />
                <RevRow label="pl" ar={n.plural.ar} ph={n.plural.ph} />
              </div>
            )}
          </>
        )}
        {w && (
          <>
            <div style={{ fontSize: 22, fontWeight: 700 }}>{w.english}</div>
            {revealed && (
              <div className="fade-in" style={{ marginTop: 12 }}>
                <Ar size={40}>{w.ar}</Ar>
                <div style={{ marginTop: 6 }}><Ph>{w.ph}</Ph></div>
              </div>
            )}
          </>
        )}
      </div>

      {!revealed ? (
        <button className="btn btn-brand" onClick={() => setRevealed(true)} style={{ width: '100%', marginTop: 14, padding: 13 }}>
          Show answer
        </button>
      ) : (
        <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
          <button className="btn" onClick={() => grade(false)} style={{ flex: 1, background: 'var(--bg-soft)', padding: 13 }}>Again</button>
          <button className="btn btn-brand" onClick={() => grade(true)} style={{ flex: 1, padding: 13 }}>Good ✓</button>
        </div>
      )}
    </div>
  );
}

function RevRow({ label, ar, ph }: { label: string; ar: string; ph: string }) {
  return (
    <div style={{ display: 'flex', gap: 10, justifyContent: 'center', alignItems: 'center' }}>
      <span style={{ fontSize: 12, color: 'var(--ink-soft)', minWidth: 52, textAlign: 'right' }}>{label}</span>
      <Ar size={24}>{ar}</Ar>
      <Ph>{ph}</Ph>
    </div>
  );
}
