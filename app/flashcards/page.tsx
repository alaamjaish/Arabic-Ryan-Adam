'use client';

import { useMemo, useState } from 'react';
import { VERBS, verbsByFamily } from '@/data/verbs';
import { VOCAB, VOCAB_CATEGORIES, vocabByCategory } from '@/data/vocab';
import { Ar, Ph, StarButton } from '@/components/ui';
import { ItemType, useStore } from '@/lib/store';

type Card = { type: ItemType; id: string; english: string; ar: string; ph: string };

function shuffle<T>(a: T[]): T[] {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

export default function FlashcardsPage() {
  const { recordReview, bumpFlashcards } = useStore();
  const [deck, setDeck] = useState<'verb' | 'vocab'>('verb');
  const [filter, setFilter] = useState<string>('all');
  const [dir, setDir] = useState<'en2ar' | 'ar2en'>('en2ar');
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [seed, setSeed] = useState(0);

  const cards: Card[] = useMemo(() => {
    let base: Card[];
    if (deck === 'verb') {
      const src = filter === 'all' ? VERBS : verbsByFamily(Number(filter));
      base = src.map((v) => ({ type: 'verb', id: v.id, english: v.english, ar: v.arPresent, ph: v.phPresent }));
    } else {
      const src = filter === 'all' ? VOCAB : vocabByCategory(filter);
      base = src.map((w) => ({ type: 'vocab', id: w.id, english: w.english, ar: w.ar, ph: w.ph }));
    }
    return shuffle(base);
  }, [deck, filter, seed]);

  const card = cards[i];

  function flip() {
    if (!flipped) bumpFlashcards(1);
    setFlipped((f) => !f);
  }

  function grade(remembered: boolean) {
    if (card) recordReview(card.type, card.id, remembered);
    advance();
  }

  function advance() {
    setFlipped(false);
    setI((prev) => (prev + 1) % cards.length);
  }

  function reset(newDeck?: 'verb' | 'vocab', newFilter?: string) {
    if (newDeck) setDeck(newDeck);
    if (newFilter !== undefined) setFilter(newFilter);
    setI(0);
    setFlipped(false);
    setSeed((s) => s + 1);
  }

  const subFilters =
    deck === 'verb'
      ? [{ k: 'all', l: 'All' }, ...[1, 2, 3, 4, 5].map((n) => ({ k: String(n), l: `F${n}` }))]
      : [{ k: 'all', l: 'All' }, ...VOCAB_CATEGORIES.map((c) => ({ k: c, l: c.replace('-', ' ') }))];

  const front = dir === 'en2ar' ? card?.english : null;
  const showArFront = dir === 'ar2en';

  return (
    <div style={{ maxWidth: 560, margin: '0 auto' }}>
      <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 10 }}>Flashcards</h1>

      <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
        <button className="btn" onClick={() => reset('verb', 'all')} style={tab(deck === 'verb')}>📖 Verbs</button>
        <button className="btn" onClick={() => reset('vocab', 'all')} style={tab(deck === 'vocab')}>🗣️ Vocabulary</button>
        <button
          className="btn"
          onClick={() => setDir((d) => (d === 'en2ar' ? 'ar2en' : 'en2ar'))}
          style={{ marginInlineStart: 'auto', background: 'var(--bg-soft)', padding: '7px 12px', fontSize: 13 }}
        >
          {dir === 'en2ar' ? 'EN → عربي' : 'عربي → EN'}
        </button>
      </div>

      <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 6, marginBottom: 12 }}>
        {subFilters.map((f) => (
          <button
            key={f.k}
            onClick={() => reset(undefined, f.k)}
            className="btn"
            style={{ whiteSpace: 'nowrap', padding: '5px 11px', fontSize: 13, textTransform: 'capitalize', background: filter === f.k ? 'var(--brand)' : 'var(--bg-soft)', color: filter === f.k ? '#fff' : 'var(--ink)' }}
          >
            {f.l}
          </button>
        ))}
      </div>

      {!card ? (
        <p style={{ color: 'var(--ink-soft)' }}>No cards here.</p>
      ) : (
        <>
          <div style={{ textAlign: 'center', fontSize: 13, color: 'var(--ink-soft)', marginBottom: 8 }}>
            {i + 1} / {cards.length}
          </div>

          <div className="flip" style={{ height: 260 }} onClick={flip}>
            <div className={`flip-inner ${flipped ? 'flipped' : ''}`} style={{ height: '100%' }}>
              {/* front */}
              <div className="flip-face card" style={{ padding: 20, cursor: 'pointer' }}>
                {showArFront ? (
                  <>
                    <Ar size={48}>{card.ar}</Ar>
                    <div style={{ marginTop: 8 }}><Ph>{card.ph}</Ph></div>
                  </>
                ) : (
                  <div style={{ fontSize: 26, fontWeight: 700 }}>{front}</div>
                )}
                <div style={{ position: 'absolute', bottom: 12, fontSize: 12, color: 'var(--ink-soft)' }}>tap to flip</div>
              </div>
              {/* back */}
              <div className="flip-face flip-back card" style={{ padding: 20, cursor: 'pointer' }}>
                {showArFront ? (
                  <div style={{ fontSize: 26, fontWeight: 700 }}>{card.english}</div>
                ) : (
                  <>
                    <Ar size={48}>{card.ar}</Ar>
                    <div style={{ marginTop: 8 }}><Ph>{card.ph}</Ph></div>
                    <div style={{ marginTop: 6, color: 'var(--ink-soft)', fontSize: 14 }}>{card.english}</div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 6 }}>
            <StarButton type={card.type} id={card.id} />
          </div>

          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            <button className="btn" onClick={() => grade(false)} style={{ flex: 1, background: 'var(--bg-soft)', padding: '12px' }}>
              Again
            </button>
            <button className="btn btn-brand" onClick={() => grade(true)} style={{ flex: 1, padding: '12px' }}>
              Good ✓
            </button>
          </div>
          <button onClick={advance} className="btn" style={{ width: '100%', marginTop: 8, background: 'transparent', color: 'var(--ink-soft)', fontSize: 13 }}>
            Skip →
          </button>
        </>
      )}
    </div>
  );
}

function tab(active: boolean): React.CSSProperties {
  return { padding: '8px 14px', background: active ? 'var(--brand)' : 'var(--bg-soft)', color: active ? '#fff' : 'var(--ink)' };
}
