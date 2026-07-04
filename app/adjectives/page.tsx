'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ADJECTIVES } from '@/data/adjectives';
import { Ar, DraftTag, Ph, StarButton } from '@/components/ui';
import { useStore } from '@/lib/store';

export default function AdjectivesPage() {
  const [q, setQ] = useState('');
  const [starredOnly, setStarredOnly] = useState(false);
  const { progress } = useStore();

  const list = useMemo(() => {
    let l = ADJECTIVES;
    if (starredOnly) l = l.filter((a) => progress[`adj:${a.id}`]?.starred);
    if (q.trim()) {
      const s = q.trim().toLowerCase();
      l = l.filter((a) => a.english.toLowerCase().includes(s) || a.masc.ph.toLowerCase().includes(s) || a.masc.ar.includes(q.trim()));
    }
    return l;
  }, [q, starredOnly, progress]);

  return (
    <div>
      <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 4 }}>Adjectives</h1>
      <p style={{ color: 'var(--ink-soft)', marginTop: 0 }}>
        {ADJECTIVES.length} adjectives — tap any to see its masculine, feminine & plural forms in use.
      </p>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search: big, كبير, kbeer…"
        style={{ width: '100%', padding: '11px 13px', borderRadius: 12, border: '1px solid var(--line)', background: 'var(--bg-soft)', color: 'var(--ink)', fontSize: 15, marginTop: 8 }}
      />
      <button
        onClick={() => setStarredOnly((s) => !s)}
        className="btn"
        style={{ marginTop: 10, padding: '6px 12px', fontSize: 14, background: starredOnly ? 'var(--brand)' : 'var(--bg-soft)', color: starredOnly ? '#fff' : 'var(--ink)' }}
      >
        ⭐ Starred only
      </button>

      <div style={{ marginTop: 14, display: 'grid', gap: 8 }}>
        {list.map((a) => (
          <div key={a.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px' }}>
            <StarButton type="adj" id={a.id} />
            <Link href={`/adjectives/${a.id}`} style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: 'var(--ink)' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontWeight: 600 }}>{a.english}</span>
                  {a.draft && <DraftTag />}
                </div>
                <Ph>{a.masc.ph} · {a.fem.ph} · {a.plural.ph}</Ph>
              </div>
              <Ar size={22}>{a.masc.ar}</Ar>
            </Link>
          </div>
        ))}
        {!list.length && <p style={{ color: 'var(--ink-soft)' }}>No adjectives match.</p>}
      </div>
    </div>
  );
}
