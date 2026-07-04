'use client';

import { useState } from 'react';
import { useStore } from '@/lib/store';

export default function LoginGate() {
  const { signIn } = useStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState(false);

  const valid = name.trim().length >= 2 && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim());

  async function go(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    setBusy(true);
    await signIn(name.trim(), email.trim());
    setBusy(false);
  }

  return (
    <div style={{ minHeight: '100dvh', display: 'grid', placeItems: 'center', padding: 20 }}>
      <div className="card fade-in" style={{ width: '100%', maxWidth: 420, padding: 28 }}>
        <div className="arabic" style={{ fontSize: 34, textAlign: 'center', fontWeight: 800, color: 'var(--brand)' }}>
          عربي شامي
        </div>
        <div style={{ textAlign: 'center', fontSize: 13, letterSpacing: 2, color: 'var(--ink-soft)', textTransform: 'uppercase', marginTop: 2 }}>
          Levantine Arabic
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 800, textAlign: 'center', margin: '10px 0 2px' }}>
          for Ryan & Adam
        </h1>
        <p style={{ textAlign: 'center', color: 'var(--ink-soft)', marginTop: 0 }}>
          Your living reference & practice ground. Sign in with just your name and email — no password.
        </p>
        <form onSubmit={go} style={{ marginTop: 18, display: 'grid', gap: 12 }}>
          <label style={{ display: 'grid', gap: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-soft)' }}>Your name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Adam"
              style={input}
            />
          </label>
          <label style={{ display: 'grid', gap: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-soft)' }}>Your email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="adam@gmail.com"
              type="email"
              style={input}
            />
          </label>
          <button
            className="btn btn-brand"
            disabled={!valid || busy}
            style={{ padding: '12px 16px', fontSize: 16, opacity: valid ? 1 : 0.55 }}
          >
            {busy ? 'Loading…' : 'Start learning →'}
          </button>
          <p style={{ fontSize: 12, color: 'var(--ink-soft)', textAlign: 'center', margin: 0 }}>
            Your progress saves to your email so you can pick up on any device.
          </p>
        </form>
      </div>
    </div>
  );
}

const input: React.CSSProperties = {
  padding: '11px 13px',
  borderRadius: 12,
  border: '1px solid var(--line)',
  background: 'var(--bg-soft)',
  color: 'var(--ink)',
  fontSize: 16,
  outline: 'none',
};
