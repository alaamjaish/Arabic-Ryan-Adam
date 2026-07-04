'use client';

import Link from 'next/link';
import { FAMILIES } from '@/data/families';
import { verbsByFamily } from '@/data/verbs';
import { familyMastery, useStore } from '@/lib/store';

export default function FamiliesPage() {
  const { progress } = useStore();
  return (
    <div>
      <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 4 }}>The Five Families</h1>
      <p style={{ color: 'var(--ink-soft)', marginTop: 0 }}>
        Every verb belongs to exactly one family. Learn the family, and you know how it conjugates.
      </p>

      <div style={{ display: 'grid', gap: 14, marginTop: 16 }}>
        {FAMILIES.map((f) => {
          const verbs = verbsByFamily(f.id);
          const mastery = Math.round(familyMastery(progress, f.id) * 100);
          return (
            <div key={f.id} className="card" style={{ padding: 18, borderTop: `4px solid var(--f${f.id})` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontWeight: 800, fontSize: 20, color: `var(--f${f.id})` }}>F{f.id}</span>
                <h2 style={{ margin: 0, fontSize: 20 }}>{f.name}</h2>
                <span style={{ marginInlineStart: 'auto', fontSize: 13, color: 'var(--ink-soft)' }}>
                  {verbs.length} verbs · {mastery}% mastered
                </span>
              </div>
              <p style={{ margin: '8px 0' }}>{f.rule}</p>
              <div
                style={{
                  background: 'var(--bg-soft)',
                  borderRadius: 10,
                  padding: '8px 12px',
                  fontSize: 14,
                  fontWeight: 600,
                  display: 'inline-block',
                }}
              >
                🔎 {f.test}
              </div>
              <div className="arabic" style={{ fontSize: 22, marginTop: 12, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                {f.examples.map((e) => (
                  <span key={e.ar} title={`${e.ph} — ${e.en}`}>
                    {e.ar}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: 14 }}>
                <div style={{ height: 8, background: 'var(--bg-soft)', borderRadius: 6, overflow: 'hidden' }}>
                  <div style={{ width: `${mastery}%`, height: '100%', background: `var(--f${f.id})` }} />
                </div>
              </div>
              <Link
                href={`/verbs?family=${f.id}`}
                className="btn"
                style={{
                  display: 'inline-block',
                  marginTop: 14,
                  background: 'var(--bg-soft)',
                  padding: '9px 14px',
                  textDecoration: 'none',
                  color: 'var(--ink)',
                }}
              >
                See all {verbs.length} Family {f.id} verbs →
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
