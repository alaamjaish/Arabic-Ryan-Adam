'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { VERBS, VERBS_BY_ID } from '@/data/verbs';
import { conjugate, presentVariants } from '@/lib/conjugate';
import { Family } from '@/lib/types';
import { Ar, ConjTableView, DraftTag, FamilyPill, Ph, StarButton } from '@/components/ui';
import { familyMeta } from '@/data/families';
import { useStore } from '@/lib/store';

const TABS = [
  { key: 'past', label: 'Past' },
  { key: 'habitual', label: 'Used to / was' },
  { key: 'present', label: 'Present' },
  { key: 'continuous', label: 'Am …-ing' },
  { key: 'future', label: 'Future' },
  { key: 'imperative', label: 'Command' },
] as const;

export default function VerbPage() {
  const { id } = useParams<{ id: string }>();
  const verb = VERBS_BY_ID[id];
  const [tab, setTab] = useState<(typeof TABS)[number]['key']>('past');
  const [withBe, setWithBe] = useState(true);
  const { recordReview } = useStore();
  const [flash, setFlash] = useState<string | null>(null);

  const conj = useMemo(() => (verb ? conjugate(verb) : null), [verb]);
  const present = useMemo(() => (verb ? presentVariants(verb) : null), [verb]);

  const router = useRouter();
  const idx = VERBS.findIndex((x) => x.id === id);
  const prev = idx > 0 ? VERBS[idx - 1] : null;
  const next = idx >= 0 && idx < VERBS.length - 1 ? VERBS[idx + 1] : null;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' && next) router.push(`/verbs/${next.id}`);
      else if (e.key === 'ArrowLeft' && prev) router.push(`/verbs/${prev.id}`);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev, router]);

  if (!verb || !conj || !present) {
    return (
      <div>
        <p>Verb not found.</p>
        <Link href="/verbs">← Back to verbs</Link>
      </div>
    );
  }

  const meta = familyMeta(verb.family as Family);

  function mark(remembered: boolean) {
    recordReview('verb', verb.id, remembered);
    setFlash(remembered ? '+10 XP · nice!' : '+3 XP · we’ll bring it back soon');
    setTimeout(() => setFlash(null), 1600);
  }

  return (
    <div style={{ maxWidth: 640 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Link href="/verbs" style={{ color: 'var(--ink-soft)', textDecoration: 'none', fontSize: 14 }}>
          ← All verbs
        </Link>
        <div style={{ marginInlineStart: 'auto', display: 'flex', gap: 6 }}>
          <Link
            href={prev ? `/verbs/${prev.id}` : '#'}
            className="btn"
            style={{ ...arrowBtn, opacity: prev ? 1 : 0.35, pointerEvents: prev ? 'auto' : 'none' }}
          >
            ←<span style={arrowLbl}>{prev?.english.replace(/^I /, '') ?? ''}</span>
          </Link>
          <Link
            href={next ? `/verbs/${next.id}` : '#'}
            className="btn"
            style={{ ...arrowBtn, opacity: next ? 1 : 0.35, pointerEvents: next ? 'auto' : 'none' }}
          >
            <span style={arrowLbl}>{next?.english.replace(/^I /, '') ?? ''}</span>→
          </Link>
        </div>
      </div>

      <div className="card" style={{ padding: 18, marginTop: 10, borderTop: `4px solid var(--f${verb.family})` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <h1 style={{ margin: 0, fontSize: 24 }}>{verb.english}</h1>
              {verb.draft && <DraftTag />}
            </div>
            <div style={{ marginTop: 4 }}>
              <Ph>{verb.phPresent}</Ph>
            </div>
          </div>
          <Ar size={38}>{verb.arPresent}</Ar>
          <StarButton type="verb" id={verb.id} />
        </div>
        <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <FamilyPill family={verb.family as Family} />
          <span style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{meta.short}</span>
        </div>
      </div>

      {/* the two anchors — the memorized keys */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 12 }}>
        <div className="card" style={{ padding: 12, textAlign: 'center' }}>
          <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>past of أنا</div>
          <Ar size={26}>{verb.pastAna.ar}</Ar>
          <div><Ph>{verb.pastAna.ph}</Ph></div>
        </div>
        <div className="card" style={{ padding: 12, textAlign: 'center', background: 'color-mix(in srgb, var(--brand) 7%, var(--card))' }}>
          <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>past of هو</div>
          <Ar size={26}>{verb.pastHuwa.ar}</Ar>
          <div><Ph>{verb.pastHuwa.ph}</Ph></div>
        </div>
      </div>

      {/* tabs */}
      <div style={{ display: 'flex', gap: 6, marginTop: 16, overflowX: 'auto', paddingBottom: 4 }}>
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className="btn"
            style={{
              whiteSpace: 'nowrap',
              padding: '7px 12px',
              fontSize: 14,
              background: tab === t.key ? 'var(--brand)' : 'var(--bg-soft)',
              color: tab === t.key ? '#fff' : 'var(--ink)',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 12 }} className="fade-in" key={tab}>
        {tab === 'past' && <ConjTableView rows={conj.pastDirect} autoNote />}
        {tab === 'habitual' && (
          <>
            <p style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 0 }}>
              كان + present — “I used to …” / “I was …”
            </p>
            <ConjTableView rows={conj.pastHabitual} />
          </>
        )}
        {tab === 'present' && (
          <>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
              <span style={{ fontSize: 13, color: 'var(--ink-soft)' }}>“be” (ب):</span>
              <button
                className="btn"
                onClick={() => setWithBe(true)}
                style={{ padding: '5px 10px', fontSize: 13, background: withBe ? 'var(--brand)' : 'var(--bg-soft)', color: withBe ? '#fff' : 'var(--ink)' }}
              >
                with (I write)
              </button>
              <button
                className="btn"
                onClick={() => setWithBe(false)}
                style={{ padding: '5px 10px', fontSize: 13, background: !withBe ? 'var(--brand)' : 'var(--bg-soft)', color: !withBe ? '#fff' : 'var(--ink)' }}
              >
                without (…lazim I write)
              </button>
            </div>
            <ConjTableView rows={withBe ? present.withBe : present.noBe} />
          </>
        )}
        {tab === 'continuous' && (
          <>
            <p style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 0 }}>عم + present — the “-ing”.</p>
            <ConjTableView rows={conj.presentContinuous} />
          </>
        )}
        {tab === 'future' && (
          <>
            <p style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 0 }}>راح + present (drops the “be”).</p>
            <ConjTableView rows={conj.future} />
          </>
        )}
        {tab === 'imperative' && (
          <>
            <p style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 0 }}>Drop the أ — the command form.</p>
            <ConjTableView rows={conj.imperative} autoNote />
          </>
        )}
      </div>

      {/* quick self-review */}
      <div className="card" style={{ padding: 14, marginTop: 18, textAlign: 'center' }}>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Did you know this one?</div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          <button className="btn" onClick={() => mark(false)} style={{ background: 'var(--bg-soft)', padding: '9px 18px' }}>
            Not yet
          </button>
          <button className="btn btn-brand" onClick={() => mark(true)} style={{ padding: '9px 18px' }}>
            Got it ✓
          </button>
        </div>
        {flash && <div className="pop" style={{ marginTop: 8, color: 'var(--brand-ink)', fontWeight: 700 }}>{flash}</div>}
      </div>

      {/* prev / next navigation */}
      <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
        {prev ? (
          <Link href={`/verbs/${prev.id}`} className="btn" style={{ flex: 1, background: 'var(--bg-soft)', color: 'var(--ink)', padding: 12, textAlign: 'center', textDecoration: 'none' }}>
            ← {prev.english}
          </Link>
        ) : (
          <span style={{ flex: 1 }} />
        )}
        {next ? (
          <Link href={`/verbs/${next.id}`} className="btn btn-brand" style={{ flex: 1, padding: 12, textAlign: 'center', textDecoration: 'none' }}>
            {next.english} →
          </Link>
        ) : (
          <span style={{ flex: 1 }} />
        )}
      </div>
      <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--ink-soft)', marginTop: 8 }}>
        tip: use ← → arrow keys to move between verbs
      </p>
    </div>
  );
}

const arrowBtn: React.CSSProperties = {
  background: 'var(--bg-soft)',
  color: 'var(--ink)',
  padding: '6px 10px',
  fontSize: 13,
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 4,
  maxWidth: 140,
};
const arrowLbl: React.CSSProperties = {
  maxWidth: 96,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};
