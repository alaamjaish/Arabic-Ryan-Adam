'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStore } from '@/lib/store';
import LoginGate from './LoginGate';

const NAV = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/verbs', label: 'Verbs', icon: '📖' },
  { href: '/adjectives', label: 'Adjectives', icon: '🎨' },
  { href: '/nouns', label: 'Nouns', icon: '📦' },
  { href: '/words', label: 'Words', icon: '🗣️' },
  { href: '/flashcards', label: 'Flashcards', icon: '🃏' },
  { href: '/assessment', label: 'Test', icon: '🎯' },
  { href: '/revision', label: 'Revise', icon: '🔁' },
];

export default function Shell({ children }: { children: React.ReactNode }) {
  const { ready, student, signOut } = useStore();
  const pathname = usePathname();

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
          background: 'color-mix(in srgb, var(--bg) 90%, transparent)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '10px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link href="/" style={{ fontWeight: 800, fontSize: 17, textDecoration: 'none', color: 'var(--ink)' }}>
              <span className="arabic">عربي</span> · Ryan &amp; Adam
            </Link>
            <button
              onClick={signOut}
              className="btn"
              title={`Sign out (${student.email})`}
              style={{ marginInlineStart: 'auto', background: 'var(--bg-soft)', color: 'var(--ink-soft)', padding: '7px 12px', fontSize: 13 }}
            >
              Sign out
            </button>
          </div>

          {/* nav — scrolls horizontally on small screens */}
          <nav className="topnav" style={{ display: 'flex', gap: 4, marginTop: 10, overflowX: 'auto', paddingBottom: 2 }}>
            {NAV.map((n) => {
              const active = pathname === n.href || (n.href !== '/' && pathname.startsWith(n.href));
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  style={{
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    padding: '8px 13px',
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

      <main style={{ maxWidth: 1080, margin: '0 auto', padding: '22px 16px 90px' }} className="fade-in" key={pathname}>
        {children}
      </main>
    </div>
  );
}
