'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useStore } from '@/lib/store';
import LoginGate from './LoginGate';

const NAV = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/method', label: 'The Method', icon: '🧭' },
  { href: '/families', label: 'Families', icon: '🗂️' },
  { href: '/verbs', label: 'Verbs', icon: '📖' },
  { href: '/flashcards', label: 'Flashcards', icon: '🃏' },
  { href: '/assessment', label: 'Sort Test', icon: '🎯' },
  { href: '/revision', label: 'Revise', icon: '🔁' },
  { href: '/progress', label: 'Progress', icon: '📈' },
];

export default function Shell({ children }: { children: React.ReactNode }) {
  const { ready, student, level, stats, signOut } = useStore();
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);

  if (!ready) {
    return <div style={{ minHeight: '100dvh', display: 'grid', placeItems: 'center' }}>…</div>;
  }
  if (!student) return <LoginGate />;

  return (
    <div style={{ minHeight: '100dvh' }}>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 30,
          background: 'color-mix(in srgb, var(--bg) 88%, transparent)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '10px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              onClick={() => setMenu((m) => !m)}
              className="btn"
              style={{ display: 'inline-flex', background: 'var(--bg-soft)', padding: '8px 10px' }}
              aria-label="Menu"
            >
              ☰
            </button>
            <Link href="/" style={{ fontWeight: 800, fontSize: 17, textDecoration: 'none', color: 'var(--ink)' }}>
              عربي · Ryan & Adam
            </Link>
            <div style={{ marginInlineStart: 'auto', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div title="Streak" style={{ fontWeight: 700, fontSize: 14 }}>
                🔥 {stats.streak}
              </div>
              <div style={{ minWidth: 120 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--ink-soft)' }}>
                  <span>Lvl {level.level}</span>
                  <span>{level.intoLevel}/{level.needed}</span>
                </div>
                <div style={{ height: 7, background: 'var(--bg-soft)', borderRadius: 6, overflow: 'hidden', marginTop: 2 }}>
                  <div
                    style={{
                      width: `${Math.round(level.pct * 100)}%`,
                      height: '100%',
                      background: 'var(--brand)',
                      transition: 'width 0.4s ease',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* desktop nav */}
          <nav
            style={{
              display: 'flex',
              gap: 4,
              marginTop: 10,
              overflowX: 'auto',
              paddingBottom: 2,
            }}
          >
            {NAV.map((n) => {
              const active = pathname === n.href || (n.href !== '/' && pathname.startsWith(n.href));
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  style={{
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    padding: '7px 12px',
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 600,
                    color: active ? '#fff' : 'var(--ink-soft)',
                    background: active ? 'var(--brand)' : 'transparent',
                  }}
                >
                  <span style={{ marginInlineEnd: 6 }}>{n.icon}</span>
                  {n.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {menu && (
        <div
          onClick={() => setMenu(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'rgba(0,0,0,0.35)' }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="card"
            style={{ margin: 16, padding: 16, maxWidth: 320 }}
          >
            <div style={{ fontWeight: 700, marginBottom: 8 }}>{student.name}</div>
            <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginBottom: 12 }}>{student.email}</div>
            <div style={{ display: 'grid', gap: 4 }}>
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenu(false)}
                  style={{ textDecoration: 'none', color: 'var(--ink)', padding: '8px 6px', borderRadius: 8 }}
                >
                  {n.icon} {n.label}
                </Link>
              ))}
            </div>
            <button
              onClick={() => {
                setMenu(false);
                signOut();
              }}
              className="btn"
              style={{ marginTop: 12, background: 'var(--bg-soft)', padding: '8px 12px', width: '100%' }}
            >
              Sign out
            </button>
          </div>
        </div>
      )}

      <main style={{ maxWidth: 1080, margin: '0 auto', padding: '22px 16px 80px' }} className="fade-in" key={pathname}>
        {children}
      </main>
    </div>
  );
}
