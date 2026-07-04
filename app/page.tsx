'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useStore } from '@/lib/store';
import { VERBS } from '@/data/verbs';
import { isDue } from '@/lib/srs';
import { BADGES } from '@/lib/gamification';
import { Tile } from '@/components/ui';

export default function Home() {
  const { student, level, stats, progress } = useStore();

  const dueCount = useMemo(() => {
    let n = 0;
    for (const v of VERBS) {
      const rec = progress[`verb:${v.id}`];
      if (isDue(rec?.srs ?? undefined)) n += 1;
    }
    return n;
  }, [progress]);

  const earned = new Set(student?.badges ?? []);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0 }}>
          Ahlan, {student?.name} 👋
        </h1>
        <span style={{ color: 'var(--ink-soft)' }}>Let’s keep the streak alive.</span>
      </div>

      {/* stat row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12, marginTop: 16 }}>
        <Stat label="Level" value={`${level.level}`} sub={`${level.intoLevel}/${level.needed} XP`} />
        <Stat label="Streak" value={`🔥 ${stats.streak}`} sub="days" />
        <Stat label="Reviews" value={`${stats.reviews}`} sub={`${stats.correct} correct`} />
        <Stat label="Families cleared" value={`${stats.familiesCleared}/5`} sub="80%+ mastered" />
      </div>

      {/* due for review CTA */}
      <Link
        href="/revision"
        className="card"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          padding: 18,
          marginTop: 16,
          textDecoration: 'none',
          color: 'var(--ink)',
          background: dueCount > 0 ? 'color-mix(in srgb, var(--brand) 12%, var(--card))' : 'var(--card)',
        }}
      >
        <div style={{ fontSize: 34 }}>🔁</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 800, fontSize: 18 }}>
            {dueCount > 0 ? `${dueCount} cards due for review` : 'All caught up!'}
          </div>
          <div style={{ color: 'var(--ink-soft)', fontSize: 14 }}>
            {dueCount > 0 ? 'Spaced repetition keeps them in long-term memory.' : 'Come back tomorrow, or learn something new below.'}
          </div>
        </div>
        <div className="btn btn-brand" style={{ padding: '10px 16px' }}>
          {dueCount > 0 ? 'Start' : 'Practice'}
        </div>
      </Link>

      {/* quick actions */}
      <h2 style={{ fontSize: 18, marginTop: 26, marginBottom: 10 }}>Jump in</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 }}>
        <Tile href="/method">
          <div style={{ fontSize: 26 }}>🧭</div>
          <div style={{ fontWeight: 700, marginTop: 6 }}>The Method</div>
          <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>Six grammars from one form</div>
        </Tile>
        <Tile href="/families">
          <div style={{ fontSize: 26 }}>🗂️</div>
          <div style={{ fontWeight: 700, marginTop: 6 }}>The 5 Families</div>
          <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>How every verb is grouped</div>
        </Tile>
        <Tile href="/verbs">
          <div style={{ fontSize: 26 }}>📖</div>
          <div style={{ fontWeight: 700, marginTop: 6 }}>Verb Bank</div>
          <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{VERBS.length} verbs, full conjugation</div>
        </Tile>
        <Tile href="/flashcards">
          <div style={{ fontSize: 26 }}>🃏</div>
          <div style={{ fontWeight: 700, marginTop: 6 }}>Flashcards</div>
          <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>Verbs & vocabulary</div>
        </Tile>
        <Tile href="/assessment">
          <div style={{ fontSize: 26 }}>🎯</div>
          <div style={{ fontWeight: 700, marginTop: 6 }}>Sort Test</div>
          <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>Guess the family</div>
        </Tile>
        <Tile href="/progress">
          <div style={{ fontSize: 26 }}>📈</div>
          <div style={{ fontWeight: 700, marginTop: 6 }}>Progress</div>
          <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>Mastery & badges</div>
        </Tile>
      </div>

      {/* badges preview */}
      <h2 style={{ fontSize: 18, marginTop: 26, marginBottom: 10 }}>Badges</h2>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {BADGES.map((b) => {
          const on = earned.has(b.id);
          return (
            <div
              key={b.id}
              title={`${b.name} — ${b.desc}`}
              className="card"
              style={{
                padding: '8px 10px',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                opacity: on ? 1 : 0.4,
                filter: on ? 'none' : 'grayscale(1)',
              }}
            >
              <span style={{ fontSize: 18 }}>{b.emoji}</span>
              <span style={{ fontSize: 13, fontWeight: 600 }}>{b.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="card" style={{ padding: 14 }}>
      <div style={{ fontSize: 12, color: 'var(--ink-soft)', fontWeight: 600 }}>{label}</div>
      <div style={{ fontSize: 24, fontWeight: 800, marginTop: 2 }}>{value}</div>
      {sub && <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>{sub}</div>}
    </div>
  );
}
