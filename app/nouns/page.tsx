'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { NOUNS, NOUN_CATEGORIES } from '@/data/nouns';
import { Ar, DraftTag, Ph, StarButton } from '@/components/ui';
import { useStore } from '@/lib/store';

export default function NounsPage() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<string>('all');
  const { progress } = useStore();

  const list = useMemo(() => {
    let l = NOUNS;
    if (cat === 'starred') l = l.filter((n) => progress[`noun:${n.id}`]?.starred);
    else if (cat !== 'all') l = l.filter((n) => n.category === cat);
    if (q.trim()) {
      const s = q.trim().toLowerCase();
      l = l.filter((n) => n.english.toLowerCase().includes(s) || n.singular.ph.toLowerCase().includes(s) || n.singular.ar.includes(q.trim()));
    }
    return l;
  }, [q, cat, progress]);

  const chips = [{ k: 'all', l: 'All' }, ...NOUN_CATEGORIES.map((c) => ({ k: c, l: c.replace('-', ' ') })), { k: 'starred', l: '⭐ Starred' }];

  return (
    <div>
      <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 4 }}>Nouns & Objects</h1>
      <p style={{ color: 'var(--ink-soft)', marginTop: 0 }}>
        {NOUNS.length} everyday things — tap any to see singular & plural in use.
      </p>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search: door, باب, baab…"
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
        {list.map((n) => (
          <div key={n.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px' }}>
            <StarButton type="noun" id={n.id} />
            <Link href={`/nouns/${n.id}`} style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: 'var(--ink)' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontWeight: 600 }}>{n.english}</span>
                  {n.draft && <DraftTag />}
                </div>
                <Ph>{n.singular.ph} → {n.plural.ph}</Ph>
              </div>
              <Ar size={22}>{n.singular.ar}</Ar>
            </Link>
          </div>
        ))}
        {!list.length && <p style={{ color: 'var(--ink-soft)' }}>No nouns match.</p>}
      </div>
    </div>
  );
}
