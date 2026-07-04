'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { NOUNS, NOUNS_BY_ID } from '@/data/nouns';
import { WordPair } from '@/lib/types';
import { Ar, DraftTag, Ph, StarButton } from '@/components/ui';
import { useStore } from '@/lib/store';

export default function NounPage() {
  const { id } = useParams<{ id: string }>();
  const noun = NOUNS_BY_ID[id];
  const { recordReview } = useStore();
  const [flash, setFlash] = useState<string | null>(null);

  const router = useRouter();
  const idx = NOUNS.findIndex((x) => x.id === id);
  const prev = idx > 0 ? NOUNS[idx - 1] : null;
  const next = idx >= 0 && idx < NOUNS.length - 1 ? NOUNS[idx + 1] : null;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' && next) router.push(`/nouns/${next.id}`);
      else if (e.key === 'ArrowLeft' && prev) router.push(`/nouns/${prev.id}`);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev, router]);

  if (!noun) {
    return (
      <div>
        <p>Noun not found.</p>
        <Link href="/nouns">← Back</Link>
      </div>
    );
  }

  function mark(remembered: boolean) {
    recordReview('noun', noun.id, remembered);
    setFlash(remembered ? '+10 XP · nice!' : '+3 XP · we’ll bring it back');
    setTimeout(() => setFlash(null), 1600);
  }

  return (
    <div style={{ maxWidth: 640 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Link href="/nouns" style={{ color: 'var(--ink-soft)', textDecoration: 'none', fontSize: 14 }}>← All nouns</Link>
        <div style={{ marginInlineStart: 'auto', display: 'flex', gap: 6 }}>
          <Link href={prev ? `/nouns/${prev.id}` : '#'} className="btn" style={{ ...navBtn, opacity: prev ? 1 : 0.35, pointerEvents: prev ? 'auto' : 'none' }}>← {prev?.english ?? ''}</Link>
          <Link href={next ? `/nouns/${next.id}` : '#'} className="btn" style={{ ...navBtn, opacity: next ? 1 : 0.35, pointerEvents: next ? 'auto' : 'none' }}>{next?.english ?? ''} →</Link>
        </div>
      </div>

      <div className="card" style={{ padding: 18, marginTop: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <h1 style={{ margin: 0, fontSize: 24 }}>{noun.english}</h1>
          {noun.draft && <DraftTag />}
          <span style={{ fontSize: 12, color: 'var(--ink-soft)', textTransform: 'capitalize' }}>{noun.category.replace('-', ' ')}</span>
          <div style={{ marginInlineStart: 'auto' }}><StarButton type="noun" id={noun.id} /></div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 12 }}>
        <FormCard label="singular" w={noun.singular} accent="#2563eb" />
        <FormCard label="plural" w={noun.plural} accent="#059669" />
      </div>

      <h2 style={{ fontSize: 16, marginTop: 20, marginBottom: 8 }}>Used in a sentence</h2>
      <div className="card" style={{ padding: 4 }}>
        <Sentence ar={`هاد ال${noun.singular.ar}`} ph={`haad il-${noun.singular.ph}`} en={`this ${noun.english}`} />
        <Sentence ar={`هدول ال${noun.plural.ar}`} ph={`hadol il-${noun.plural.ph}`} en={`these ${noun.english}s`} border />
        <Sentence ar={`عندي ${noun.singular.ar}`} ph={`3indi ${noun.singular.ph}`} en={`I have a ${noun.english}`} border />
      </div>

      <div className="card" style={{ padding: 14, marginTop: 18, textAlign: 'center' }}>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Know this one?</div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          <button className="btn" onClick={() => mark(false)} style={{ background: 'var(--bg-soft)', padding: '9px 18px' }}>Not yet</button>
          <button className="btn btn-brand" onClick={() => mark(true)} style={{ padding: '9px 18px' }}>Got it ✓</button>
        </div>
        {flash && <div className="pop" style={{ marginTop: 8, color: 'var(--brand-ink)', fontWeight: 700 }}>{flash}</div>}
      </div>

      <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
        {prev ? <Link href={`/nouns/${prev.id}`} className="btn" style={{ flex: 1, background: 'var(--bg-soft)', color: 'var(--ink)', padding: 12, textAlign: 'center', textDecoration: 'none' }}>← {prev.english}</Link> : <span style={{ flex: 1 }} />}
        {next ? <Link href={`/nouns/${next.id}`} className="btn btn-brand" style={{ flex: 1, padding: 12, textAlign: 'center', textDecoration: 'none' }}>{next.english} →</Link> : <span style={{ flex: 1 }} />}
      </div>
    </div>
  );
}

function FormCard({ label, w, accent }: { label: string; w: WordPair; accent: string }) {
  return (
    <div className="card" style={{ padding: 14, textAlign: 'center', borderTop: `3px solid ${accent}` }}>
      <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>{label}</div>
      <div style={{ marginTop: 4 }}><Ar size={30}>{w.ar}</Ar></div>
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
