'use client';

import Link from 'next/link';
import { Family, PRONOUNS, ConjTable, ConjRow } from '@/lib/types';
import { familyMeta } from '@/data/families';
import { ItemType, useStore } from '@/lib/store';

export function familyColor(f: Family): string {
  return `var(--f${f})`;
}

export function FamilyPill({ family, small }: { family: Family; small?: boolean }) {
  const m = familyMeta(family);
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: `color-mix(in srgb, ${familyColor(family)} 16%, transparent)`,
        color: familyColor(family),
        borderRadius: 999,
        padding: small ? '2px 9px' : '4px 11px',
        fontSize: small ? 12 : 13,
        fontWeight: 700,
        border: `1px solid color-mix(in srgb, ${familyColor(family)} 35%, transparent)`,
      }}
    >
      <span style={{ width: 7, height: 7, borderRadius: 999, background: familyColor(family) }} />
      F{family} · {m.name}
    </span>
  );
}

export function StarButton({ type, id }: { type: ItemType; id: string }) {
  const { get, toggleStar } = useStore();
  const on = get(type, id).starred;
  return (
    <button
      onClick={() => toggleStar(type, id)}
      className="btn"
      title={on ? 'Unstar' : 'Star this'}
      style={{
        background: 'transparent',
        fontSize: 18,
        lineHeight: 1,
        padding: 4,
        filter: on ? 'none' : 'grayscale(1) opacity(0.5)',
      }}
    >
      {on ? '⭐' : '☆'}
    </button>
  );
}

export function DraftTag() {
  return (
    <span
      title="AI-drafted — pending Alaa's verification"
      style={{
        fontSize: 10,
        fontWeight: 700,
        color: '#b45309',
        background: 'color-mix(in srgb, #f59e0b 18%, transparent)',
        borderRadius: 6,
        padding: '1px 6px',
      }}
    >
      DRAFT
    </span>
  );
}

export function Ar({ children, size = 28 }: { children: React.ReactNode; size?: number }) {
  return (
    <span className="arabic" style={{ fontSize: size, fontWeight: 600, lineHeight: 1.3 }}>
      {children}
    </span>
  );
}

export function Ph({ children }: { children: React.ReactNode }) {
  return <span style={{ color: 'var(--ink-soft)', fontStyle: 'italic', fontSize: 14 }}>{children}</span>;
}

// A conjugation table with the two-key grouping (انا group vs هو group).
export function ConjTableView({ rows, autoNote }: { rows: ConjTable; autoNote?: boolean }) {
  return (
    <div className="card" style={{ overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
        <tbody>
          {rows.map((r: ConjRow, i) => {
            const meta = PRONOUNS.find((p) => p.key === r.pronoun)!;
            const isHeGroup = meta.group === 'huwe';
            return (
              <tr
                key={r.pronoun}
                style={{
                  borderTop: i === 0 ? 'none' : '1px solid var(--line)',
                  background: isHeGroup ? 'color-mix(in srgb, var(--brand) 6%, transparent)' : 'transparent',
                }}
              >
                <td style={{ padding: '9px 12px', color: 'var(--ink-soft)', width: 130 }}>
                  <span className="arabic" style={{ fontSize: 16, marginInlineEnd: 6 }}>
                    {meta.ar}
                  </span>
                  <span style={{ fontSize: 12 }}>{meta.en}</span>
                </td>
                <td style={{ padding: '9px 12px', textAlign: 'right' }}>
                  <Ar size={22}>{r.ar}</Ar>
                </td>
                <td style={{ padding: '9px 12px', width: 150 }}>
                  <Ph>{r.ph}</Ph>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {autoNote && (
        <div style={{ padding: '8px 12px', fontSize: 11, color: 'var(--ink-soft)', borderTop: '1px solid var(--line)' }}>
          Rows tinted warm = the هو key group. Forms are auto-generated from the two anchors — verify anything that looks off.
        </div>
      )}
    </div>
  );
}

export function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <h1 style={{ fontSize: 26, fontWeight: 800, margin: 0 }}>{children}</h1>
      {sub && <p style={{ color: 'var(--ink-soft)', marginTop: 4 }}>{sub}</p>}
    </div>
  );
}

export function Tile({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="card" style={{ display: 'block', padding: 18, textDecoration: 'none', color: 'var(--ink)' }}>
      {children}
    </Link>
  );
}
