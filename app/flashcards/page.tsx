'use client';

import { useEffect, useMemo, useState } from 'react';
import { VERBS, VERBS_BY_ID, verbsByFamily } from '@/data/verbs';
import { VOCAB, VOCAB_CATEGORIES, vocabByCategory } from '@/data/vocab';
import { ADJECTIVES, ADJ_BY_ID } from '@/data/adjectives';
import { NOUNS, NOUNS_BY_ID, NOUN_CATEGORIES, nounsByCategory } from '@/data/nouns';
import { Ar, Ph, StarButton } from '@/components/ui';
import { ItemType } from '@/lib/store';

type Deck = 'verb' | 'adj' | 'noun' | 'vocab';
type CardRef = { type: ItemType; id: string };

function shuffle<T>(a: T[]): T[] {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

const DECKS: { k: Deck; label: string; icon: string }[] = [
  { k: 'verb', label: 'Verbs', icon: '📖' },
  { k: 'adj', label: 'Adjectives', icon: '🎨' },
  { k: 'noun', label: 'Nouns', icon: '📦' },
  { k: 'vocab', label: 'Words', icon: '🗣️' },
];

export default function FlashcardsPage() {
  const [deck, setDeck] = useState<Deck>('verb');
  const [filter, setFilter] = useState<string>('all');
  const [dir, setDir] = useState<'en2ar' | 'ar2en'>('en2ar');
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [seed, setSeed] = useState(0);

  const cards: CardRef[] = useMemo(() => {
    let refs: CardRef[] = [];
    if (deck === 'verb') {
      const src = filter === 'all' ? VERBS : verbsByFamily(Number(filter));
      refs = src.map((v) => ({ type: 'verb', id: v.id }));
    } else if (deck === 'adj') {
      refs = ADJECTIVES.map((a) => ({ type: 'adj', id: a.id }));
    } else if (deck === 'noun') {
      const src = filter === 'all' ? NOUNS : nounsByCategory(filter);
      refs = src.map((n) => ({ type: 'noun', id: n.id }));
    } else {
      const src = filter === 'all' ? VOCAB : vocabByCategory(filter);
      refs = src.map((w) => ({ type: 'vocab', id: w.id }));
    }
    return shuffle(refs);
  }, [deck, filter, seed]);

  const card = cards[i];

  function flip() {
    setFlipped((f) => !f);
  }
  function next() {
    setFlipped(false);
    setI((p) => (p + 1) % Math.max(1, cards.length));
  }
  function prev() {
    setFlipped(false);
    setI((p) => (p - 1 + Math.max(1, cards.length)) % Math.max(1, cards.length));
  }
  function reset(d?: Deck, f?: string) {
    if (d) setDeck(d);
    if (f !== undefined) setFilter(f);
    setI(0);
    setFlipped(false);
    setSeed((s) => s + 1);
  }

  // keyboard: ← previous, → next, space/enter to flip
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setFlipped((f) => !f);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const subFilters =
    deck === 'verb'
      ? [{ k: 'all', l: 'All' }, ...[1, 2, 3, 4, 5].map((n) => ({ k: String(n), l: `F${n}` }))]
      : deck === 'noun'
      ? [{ k: 'all', l: 'All' }, ...NOUN_CATEGORIES.map((c) => ({ k: c, l: c.replace('-', ' ') }))]
      : deck === 'vocab'
      ? [{ k: 'all', l: 'All' }, ...VOCAB_CATEGORIES.map((c) => ({ k: c, l: c.replace('-', ' ') }))]
      : [];

  return (
    <div style={{ maxWidth: 560, margin: '0 auto' }}>
      <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 10 }}>Flashcards</h1>

      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
        {DECKS.map((d) => (
          <button key={d.k} className="btn" onClick={() => reset(d.k, 'all')} style={tab(deck === d.k)}>
            {d.icon} {d.label}
          </button>
        ))}
        <button
          className="btn"
          onClick={() => setDir((x) => (x === 'en2ar' ? 'ar2en' : 'en2ar'))}
          style={{ marginInlineStart: 'auto', background: 'var(--bg-soft)', padding: '7px 12px', fontSize: 13 }}
        >
          {dir === 'en2ar' ? 'EN → عربي' : 'عربي → EN'}
        </button>
      </div>

      {subFilters.length > 0 && (
        <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 6, marginTop: 12 }}>
          {subFilters.map((f) => (
            <button key={f.k} onClick={() => reset(undefined, f.k)} className="btn" style={{ whiteSpace: 'nowrap', textTransform: 'capitalize', padding: '5px 11px', fontSize: 13, background: filter === f.k ? 'var(--brand)' : 'var(--bg-soft)', color: filter === f.k ? '#fff' : 'var(--ink)' }}>
              {f.l}
            </button>
          ))}
        </div>
      )}

      {!card ? (
        <p style={{ color: 'var(--ink-soft)', marginTop: 16 }}>No cards here.</p>
      ) : (
        <>
          <div style={{ textAlign: 'center', fontSize: 13, color: 'var(--ink-soft)', margin: '14px 0 8px' }}>
            {i + 1} / {cards.length}
          </div>

          <div className="flip" style={{ height: 300 }} onClick={flip}>
            <div className={`flip-inner ${flipped ? 'flipped' : ''}`} style={{ height: '100%' }}>
              <div className="flip-face card" style={{ padding: 20, cursor: 'pointer' }}>
                <CardFace ref_={card} dir={dir} side="front" />
                <div style={{ position: 'absolute', bottom: 12, fontSize: 12, color: 'var(--ink-soft)' }}>tap to flip</div>
              </div>
              <div className="flip-face flip-back card" style={{ padding: 20, cursor: 'pointer' }}>
                <CardFace ref_={card} dir={dir} side="back" />
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 6 }}>
            <StarButton type={card.type} id={card.id} />
          </div>

          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            <button className="btn" onClick={prev} style={{ flex: 1, background: 'var(--bg-soft)', padding: 13 }}>← Back</button>
            <button className="btn btn-brand" onClick={next} style={{ flex: 1, padding: 13 }}>Next →</button>
          </div>
          <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--ink-soft)', marginTop: 8 }}>
            tap the card to flip · use ← → keys
          </p>
        </>
      )}
    </div>
  );
}

function CardFace({ ref_, dir, side }: { ref_: CardRef; dir: 'en2ar' | 'ar2en'; side: 'front' | 'back' }) {
  const showEnglishFirst = dir === 'en2ar';
  const front = side === 'front';
  const englishSide = front ? showEnglishFirst : !showEnglishFirst; // is this face the English one?

  if (ref_.type === 'verb') {
    const v = VERBS_BY_ID[ref_.id];
    if (englishSide) return <Big>{v.english}</Big>;
    return (
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>present (I)</div>
        <Ar size={38}>{v.arPresent}</Ar>
        <div><Ph>{v.phPresent}</Ph></div>
        <div style={{ marginTop: 10, display: 'grid', gap: 4 }}>
          <Row label="I — past" w={v.pastAna} />
          <Row label="he — past" w={v.pastHuwa} />
        </div>
        {!front && <div style={{ marginTop: 8, color: 'var(--ink-soft)', fontSize: 14 }}>{v.english}</div>}
      </div>
    );
  }
  if (ref_.type === 'adj') {
    const a = ADJ_BY_ID[ref_.id];
    if (englishSide) return <Big>{a.english}</Big>;
    return (
      <div style={{ textAlign: 'center' }}>
        <Row label="masc" w={a.masc} />
        <Row label="fem" w={a.fem} />
        <Row label="pl" w={a.plural} />
        {!front && <div style={{ marginTop: 8, color: 'var(--ink-soft)', fontSize: 14 }}>{a.english}</div>}
      </div>
    );
  }
  if (ref_.type === 'noun') {
    const n = NOUNS_BY_ID[ref_.id];
    if (englishSide) return <Big>{n.english}</Big>;
    return (
      <div style={{ textAlign: 'center' }}>
        <Row label="sing" w={n.singular} />
        <Row label="pl" w={n.plural} />
        {!front && <div style={{ marginTop: 8, color: 'var(--ink-soft)', fontSize: 14 }}>{n.english}</div>}
      </div>
    );
  }
  // vocab
  const w = VOCAB.find((x) => x.id === ref_.id)!;
  if (englishSide) return <Big>{w.english}</Big>;
  return (
    <>
      <Ar size={46}>{w.ar}</Ar>
      <div style={{ marginTop: 8 }}><Ph>{w.ph}</Ph></div>
      {!front && <div style={{ marginTop: 6, color: 'var(--ink-soft)', fontSize: 14 }}>{w.english}</div>}
    </>
  );
}

function Big({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 26, fontWeight: 700, textAlign: 'center' }}>{children}</div>;
}
function Row({ label, w }: { label: string; w: { ar: string; ph: string } }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', margin: '4px 0' }}>
      <span style={{ fontSize: 13, color: 'var(--ink-soft)', minWidth: 56, textAlign: 'right' }}>{label}</span>
      <Ar size={26}>{w.ar}</Ar>
      <Ph>{w.ph}</Ph>
    </div>
  );
}

function tab(active: boolean): React.CSSProperties {
  return { padding: '8px 14px', background: active ? 'var(--brand)' : 'var(--bg-soft)', color: active ? '#fff' : 'var(--ink)' };
}
