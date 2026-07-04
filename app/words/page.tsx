'use client';

import { useMemo, useState } from 'react';
import { VOCAB, VOCAB_CATEGORIES } from '@/data/vocab';
import { Ar, Ph, StarButton } from '@/components/ui';
import { useStore } from '@/lib/store';

export default function WordsPage() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<string>('all');
  const { progress } = useStore();

  const list = useMemo(() => {
    let l = VOCAB;
    if (cat === 'starred') l = l.filter((w) => progress[`vocab:${w.id}`]?.starred);
    else if (cat !== 'all') l = l.filter((w) => w.category === cat);
    if (q.trim()) {
      const s = q.trim().toLowerCase();
      l = l.filter((w) => w.english.toLowerCase().includes(s) || w.ph.toLowerCase().includes(s) || w.ar.includes(q.trim()));
    }
    return l;
  }, [q, cat, progress]);

  const chips = [{ k: 'all', l: 'All' }, ...VOCAB_CATEGORIES.map((c) => ({ k: c, l: c.replace('-', ' ') })), { k: 'starred', l: '⭐ Starred' }];

  return (
    <div>
      <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 4 }}>Words &amp; Phrases</h1>
      <p style={{ color: 'var(--ink-soft)', marginTop: 0 }}>
        {VOCAB.length} everyday words — prepositions, question words, greetings, particles, phrases, numbers &amp; colors.
      </p>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search: with, مع, ma3…"
        style={{ width: '100%', padding: '11px 13px', borderRadius: 12, border: '1px solid var(--line)', background: 'var(--bg-soft)', color: 'var(--ink)', fontSize: 15, marginTop: 8 }}
      />

      <div style={{ display: 'flex', gap: 6, marginTop: 12, overflowX: 'auto', paddingBottom: 4 }}>
        {chips.map((c) => (
          <button key={c.k} onClick={() => setCat(c.k)} className="btn" style={{ whiteSpace: 'nowrap', textTransform: 'capitalize', padding: '6px 11px', fontSize: 13, background: cat === c.k ? 'var(--brand)' : 'var(--bg-soft)', color: cat === c.k ? '#fff' : 'var(--ink)' }}>
            {c.l}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 14, display: 'grid', gap: 8 }}>
        {list.map((w) => (
          <div key={w.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px' }}>
            <StarButton type="vocab" id={w.id} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 600 }}>{w.english}</div>
              <Ph>{w.ph}</Ph>
            </div>
            <Ar size={24}>{w.ar}</Ar>
          </div>
        ))}
        {!list.length && <p style={{ color: 'var(--ink-soft)' }}>No words match.</p>}
      </div>
    </div>
  );
}
