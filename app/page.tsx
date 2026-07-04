'use client';

import Link from 'next/link';
import { useStore } from '@/lib/store';
import { VERBS } from '@/data/verbs';
import { ADJECTIVES } from '@/data/adjectives';
import { NOUNS } from '@/data/nouns';
import { VOCAB } from '@/data/vocab';

export default function Home() {
  const { student } = useStore();

  return (
    <div style={{ maxWidth: 760 }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0 }}>Ahlan, {student?.name} 👋</h1>
      <p style={{ color: 'var(--ink-soft)', marginTop: 6, fontSize: 16, lineHeight: 1.6 }}>
        This is your Levantine (Shami) Arabic home — everything Alaa taught you, kept alive in one place
        so you can keep learning, look things up, and practice whenever you want.
      </p>

      {/* what's inside — real counts */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 12, marginTop: 18 }}>
        <Count href="/verbs" n={VERBS.length} label="verbs" sub="full conjugation" icon="📖" />
        <Count href="/adjectives" n={ADJECTIVES.length} label="adjectives" sub="3 forms each" icon="🎨" />
        <Count href="/nouns" n={NOUNS.length} label="nouns" sub="singular + plural" icon="📦" />
        <Count href="/flashcards" n={VOCAB.length} label="words" sub="+ flashcards" icon="🗣️" />
      </div>

      {/* how it works */}
      <div className="card" style={{ padding: 20, marginTop: 20 }}>
        <h2 style={{ margin: '0 0 8px', fontSize: 19 }}>How the verbs work</h2>
        <p style={{ margin: 0, lineHeight: 1.7 }}>
          Every verb comes from <b>one form</b> — the present “I” (the أ-form). From it, plus the two past
          anchors (<span className="arabic">أنا</span> and <span className="arabic">هو</span>), the whole
          grammar unfolds: <b>past</b>, the <b>كان</b> habitual past, <b>present</b>, the <b>عم</b>{' '}
          continuous, the <b>راح</b> future, and the command. Tap any verb to see all of it laid out.
        </p>
        <p style={{ margin: '10px 0 0', lineHeight: 1.7 }}>
          Verbs fall into <b>5 families</b> (by vowel and shaddeh). Learn to spot the family and you know
          how a verb behaves — that’s what the <Link href="/assessment" style={link}>Test</Link> drills.
        </p>
      </div>

      {/* what you'll be able to do */}
      <div className="card" style={{ padding: 20, marginTop: 14 }}>
        <h2 style={{ margin: '0 0 8px', fontSize: 19 }}>By working through this you’ll be able to…</h2>
        <ul style={{ margin: 0, paddingInlineStart: 20, lineHeight: 1.9 }}>
          <li>Conjugate any everyday verb across all six tenses.</li>
          <li>Describe things — masculine, feminine, and plural — with {ADJECTIVES.length}+ adjectives.</li>
          <li>Name the objects around you, singular and plural.</li>
          <li>Hold the core of daily spoken Levantine — the {VERBS.length} most useful verbs.</li>
        </ul>
      </div>

      {/* jump in */}
      <h2 style={{ fontSize: 18, marginTop: 24, marginBottom: 10 }}>Where to go</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12 }}>
        <Tile href="/verbs" icon="📖" title="Verbs" sub="Browse & conjugate" />
        <Tile href="/adjectives" icon="🎨" title="Adjectives" sub="3 forms in use" />
        <Tile href="/nouns" icon="📦" title="Nouns" sub="Singular & plural" />
        <Tile href="/flashcards" icon="🃏" title="Flashcards" sub="Study any deck" />
        <Tile href="/assessment" icon="🎯" title="Test" sub="Families & meanings" />
        <Tile href="/revision" icon="🔁" title="Revise" sub="Your starred ⭐ items" />
      </div>

      <p style={{ color: 'var(--ink-soft)', fontSize: 13, marginTop: 20 }}>
        Tip: tap the ☆ on anything you want to come back to — it collects in <Link href="/revision" style={link}>Revise</Link>.
      </p>
    </div>
  );
}

const link: React.CSSProperties = { color: 'var(--brand-ink)', textDecoration: 'underline' };

function Count({ href, n, label, sub, icon }: { href: string; n: number; label: string; sub: string; icon: string }) {
  return (
    <Link href={href} className="card" style={{ padding: 16, textDecoration: 'none', color: 'var(--ink)' }}>
      <div style={{ fontSize: 22 }}>{icon}</div>
      <div style={{ fontSize: 30, fontWeight: 800, marginTop: 2 }}>{n}</div>
      <div style={{ fontWeight: 600 }}>{label}</div>
      <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>{sub}</div>
    </Link>
  );
}

function Tile({ href, icon, title, sub }: { href: string; icon: string; title: string; sub: string }) {
  return (
    <Link href={href} className="card" style={{ display: 'block', padding: 16, textDecoration: 'none', color: 'var(--ink)' }}>
      <div style={{ fontSize: 24 }}>{icon}</div>
      <div style={{ fontWeight: 700, marginTop: 6 }}>{title}</div>
      <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{sub}</div>
    </Link>
  );
}
