'use client';

import { Suspense, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { VERBS } from '@/data/verbs';
import { Family } from '@/lib/types';
import { Ar, DraftTag, FamilyPill, Ph, StarButton } from '@/components/ui';
import { useStore } from '@/lib/store';

function VerbsInner() {
  const params = useSearchParams();
  const initialFamily = params.get('family');
  const [family, setFamily] = useState<number | 'all' | 'starred'>(
    initialFamily ? Number(initialFamily) : 'all'
  );
  const [q, setQ] = useState('');
  const { progress } = useStore();

  const list = useMemo(() => {
    let l = VERBS;
    if (family === 'starred') l = l.filter((v) => progress[`verb:${v.id}`]?.starred);
    else if (family !== 'all') l = l.filter((v) => v.family === family);
    if (q.trim()) {
      const s = q.trim().toLowerCase();
      l = l.filter(
        (v) =>
          v.english.toLowerCase().includes(s) ||
          v.phPresent.toLowerCase().includes(s) ||
          v.arPresent.includes(q.trim())
      );
    }
    return l;
  }, [family, q, progress]);

  const chips: { key: number | 'all' | 'starred'; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 1, label: 'F1' },
    { key: 2, label: 'F2' },
    { key: 3, label: 'F3' },
    { key: 4, label: 'F4' },
    { key: 5, label: 'F5' },
    { key: 'starred', label: '⭐ Starred' },
  ];

  return (
    <div>
      <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 4 }}>Verb Bank</h1>
      <p style={{ color: 'var(--ink-soft)', marginTop: 0 }}>{VERBS.length} verbs — tap any to see its full conjugation.</p>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search: see, أشوف, Ashuuf…"
        style={{
          width: '100%',
          padding: '11px 13px',
          borderRadius: 12,
          border: '1px solid var(--line)',
          background: 'var(--bg-soft)',
          color: 'var(--ink)',
          fontSize: 15,
          marginTop: 8,
        }}
      />

      <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
        {chips.map((c) => (
          <button
            key={String(c.key)}
            onClick={() => setFamily(c.key)}
            className="btn"
            style={{
              padding: '6px 12px',
              fontSize: 14,
              background: family === c.key ? 'var(--brand)' : 'var(--bg-soft)',
              color: family === c.key ? '#fff' : 'var(--ink)',
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 14, display: 'grid', gap: 8 }}>
        {list.map((v) => (
          <div
            key={v.id}
            className="card"
            style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px' }}
          >
            <StarButton type="verb" id={v.id} />
            <Link
              href={`/verbs/${v.id}`}
              style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: 'var(--ink)' }}
            >
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontWeight: 600 }}>{v.english}</span>
                  {v.draft && <DraftTag />}
                </div>
                <Ph>{v.phPresent}</Ph>
              </div>
              <Ar size={24}>{v.arPresent}</Ar>
              <FamilyPill family={v.family as Family} small />
            </Link>
          </div>
        ))}
        {!list.length && <p style={{ color: 'var(--ink-soft)' }}>No verbs match.</p>}
      </div>
    </div>
  );
}

export default function VerbsPage() {
  return (
    <Suspense fallback={<div>…</div>}>
      <VerbsInner />
    </Suspense>
  );
}
