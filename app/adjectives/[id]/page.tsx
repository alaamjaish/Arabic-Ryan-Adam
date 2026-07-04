'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ADJECTIVES, ADJ_BY_ID } from '@/data/adjectives';
import { WordPair } from '@/lib/types';
import { Ar, DraftTag, Ph, StarButton } from '@/components/ui';
import { useStore } from '@/lib/store';

export default function AdjectivePage() {
  const { id } = useParams<{ id: string }>();
  const adj = ADJ_BY_ID[id];
  const { recordReview } = useStore();
  const [flash, setFlash] = useState<string | null>(null);

  const router = useRouter();
  const idx = ADJECTIVES.findIndex((x) => x.id === id);
  const prev = idx > 0 ? ADJECTIVES[idx - 1] : null;
  const next = idx >= 0 && idx < ADJECTIVES.length - 1 ? ADJECTIVES[idx + 1] : null;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' && next) router.push(`/adjectives/${next.id}`);
      else if (e.key === 'ArrowLeft' && prev) router.push(`/adjectives/${prev.id}`);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev, router]);

  if (!adj) {
    return (
      <div>
        <p>Adjective not found.</p>
        <Link href="/adjectives">← Back</Link>
      </div>
    );
  }

  function mark(remembered: boolean) {
    recordReview('adj', adj.id, remembered);
    setFlash(remembered ? '+10 XP · nice!' : '+3 XP · we’ll bring it back');
    setTimeout(() => setFlash(null), 1600);
  }

  return (
    <div style={{ maxWidth: 640 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Link href="/adjectives" style={{ color: 'var(--ink-soft)', textDecoration: 'none', fontSize: 14 }}>← All adjectives</Link>
        <div style={{ marginInlineStart: 'auto', display: 'flex', gap: 6 }}>
          <Link href={prev ? `/adjectives/${prev.id}` : '#'} className="btn" style={{ ...navBtn, opacity: prev ? 1 : 0.35, pointerEvents: prev ? 'auto' : 'none' }}>← {prev?.english ?? ''}</Link>
          <Link href={next ? `/adjectives/${next.id}` : '#'} className="btn" style={{ ...navBtn, opacity: next ? 1 : 0.35, pointerEvents: next ? 'auto' : 'none' }}>{next?.english ?? ''} →</Link>
        </div>
      </div>

      <div className="card" style={{ padding: 18, marginTop: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <h1 style={{ margin: 0, fontSize: 24 }}>{adj.english}</h1>
          {adj.draft && <DraftTag />}
          <div style={{ marginInlineStart: 'auto' }}><StarButton type="adj" id={adj.id} /></div>
        </div>
      </div>

      {/* the three forms */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 10, marginTop: 12 }}>
        <FormCard label="masculine" w={adj.masc} accent="#2563eb" />
        <FormCard label="feminine" w={adj.fem} accent="#db2777" />
        <FormCard label="plural (people)" w={adj.plural} accent="#059669" />
      </div>

      <p style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 16 }}>
        Use the <b>masculine</b> form for a man / masculine noun, the <b>feminine</b> for a woman /
        feminine noun, and the <b>plural</b> for a group of people.
      </p>

      {/* self review */}
      <div className="card" style={{ padding: 14, marginTop: 18, textAlign: 'center' }}>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Know this one?</div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          <button className="btn" onClick={() => mark(false)} style={{ background: 'var(--bg-soft)', padding: '9px 18px' }}>Not yet</button>
          <button className="btn btn-brand" onClick={() => mark(true)} style={{ padding: '9px 18px' }}>Got it ✓</button>
        </div>
        {flash && <div className="pop" style={{ marginTop: 8, color: 'var(--brand-ink)', fontWeight: 700 }}>{flash}</div>}
      </div>

      <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
        {prev ? <Link href={`/adjectives/${prev.id}`} className="btn" style={{ flex: 1, background: 'var(--bg-soft)', color: 'var(--ink)', padding: 12, textAlign: 'center', textDecoration: 'none' }}>← {prev.english}</Link> : <span style={{ flex: 1 }} />}
        {next ? <Link href={`/adjectives/${next.id}`} className="btn btn-brand" style={{ flex: 1, padding: 12, textAlign: 'center', textDecoration: 'none' }}>{next.english} →</Link> : <span style={{ flex: 1 }} />}
      </div>
    </div>
  );
}

function FormCard({ label, w, accent }: { label: string; w: WordPair; accent: string }) {
  return (
    <div className="card" style={{ padding: 14, textAlign: 'center', borderTop: `3px solid ${accent}` }}>
      <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>{label}</div>
      <div style={{ marginTop: 4 }}><Ar size={28}>{w.ar}</Ar></div>
      <div><Ph>{w.ph}</Ph></div>
    </div>
  );
}

function Sentence({ ar, ph, en, border }: { ar: string; ph: string; en: string; border?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderTop: border ? '1px solid var(--line)' : 'none' }}>
      <div style={{ flex: 1 }}>
        <Ar size={20}>{ar}</Ar>
        <div><Ph>{ph}</Ph></div>
      </div>
      <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{en}</div>
    </div>
  );
}

const navBtn: React.CSSProperties = {
  background: 'var(--bg-soft)', color: 'var(--ink)', padding: '6px 10px', fontSize: 13,
  textDecoration: 'none', maxWidth: 130, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
};
