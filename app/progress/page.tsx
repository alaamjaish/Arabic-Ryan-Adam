'use client';

import Link from 'next/link';
import { FAMILIES } from '@/data/families';
import { BADGES } from '@/lib/gamification';
import { familyMastery, useStore } from '@/lib/store';

export default function ProgressPage() {
  const { student, level, stats, progress, online } = useStore();
  const earned = new Set(student?.badges ?? []);
  const starred = Object.entries(progress).filter(([, r]) => r.starred).length;

  return (
    <div style={{ maxWidth: 640 }}>
      <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 2 }}>Your Progress</h1>
      <p style={{ color: 'var(--ink-soft)', marginTop: 0 }}>
        {student?.name} · {student?.email}{' '}
        <span style={{ fontSize: 12 }}>{online ? '· ☁️ synced' : '· 💾 saved on this device'}</span>
      </p>

      {/* level */}
      <div className="card" style={{ padding: 18, marginTop: 8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div style={{ fontSize: 22, fontWeight: 800 }}>Level {level.level}</div>
          <div style={{ color: 'var(--ink-soft)', fontSize: 14 }}>
            {level.intoLevel} / {level.needed} XP
          </div>
        </div>
        <div style={{ height: 10, background: 'var(--bg-soft)', borderRadius: 8, overflow: 'hidden', marginTop: 8 }}>
          <div style={{ width: `${Math.round(level.pct * 100)}%`, height: '100%', background: 'var(--brand)' }} />
        </div>
        <div style={{ display: 'flex', gap: 18, marginTop: 12, flexWrap: 'wrap', color: 'var(--ink-soft)', fontSize: 14 }}>
          <span>🔥 {stats.streak}-day streak</span>
          <span>📝 {stats.reviews} reviews</span>
          <span>✅ {stats.correct} correct</span>
          <span>⭐ {starred} starred</span>
        </div>
      </div>

      {/* family mastery */}
      <h2 style={{ fontSize: 18, marginTop: 22, marginBottom: 10 }}>Mastery by family</h2>
      <div style={{ display: 'grid', gap: 10 }}>
        {FAMILIES.map((f) => {
          const pct = Math.round(familyMastery(progress, f.id) * 100);
          return (
            <Link
              key={f.id}
              href={`/verbs?family=${f.id}`}
              className="card"
              style={{ padding: 14, textDecoration: 'none', color: 'var(--ink)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontWeight: 700 }}>
                  <span style={{ color: `var(--f${f.id})` }}>F{f.id}</span> · {f.name}
                </span>
                <span style={{ color: 'var(--ink-soft)', fontSize: 14 }}>{pct}%</span>
              </div>
              <div style={{ height: 8, background: 'var(--bg-soft)', borderRadius: 6, overflow: 'hidden' }}>
                <div style={{ width: `${pct}%`, height: '100%', background: `var(--f${f.id})` }} />
              </div>
            </Link>
          );
        })}
      </div>

      {/* badges */}
      <h2 style={{ fontSize: 18, marginTop: 22, marginBottom: 10 }}>
        Badges <span style={{ color: 'var(--ink-soft)', fontSize: 14 }}>({earned.size}/{BADGES.length})</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 10 }}>
        {BADGES.map((b) => {
          const on = earned.has(b.id);
          return (
            <div
              key={b.id}
              className="card"
              style={{ padding: 12, opacity: on ? 1 : 0.45, filter: on ? 'none' : 'grayscale(1)' }}
            >
              <div style={{ fontSize: 26 }}>{b.emoji}</div>
              <div style={{ fontWeight: 700, marginTop: 4 }}>{b.name}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>{b.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
