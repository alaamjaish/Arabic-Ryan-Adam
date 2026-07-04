import { FAMILIES } from '@/data/families';

export const metadata = { title: 'The Method — Arabic' };

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="card" style={{ padding: 18, marginBottom: 14 }}>
      {children}
    </div>
  );
}

export default function MethodPage() {
  return (
    <div style={{ maxWidth: 760 }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 4 }}>The Method</h1>
      <p style={{ color: 'var(--ink-soft)', marginTop: 0 }}>
        The whole system in one idea: everything comes from a single form.
      </p>

      <Card>
        <h2 style={{ marginTop: 0 }}>1 · One form to rule them all</h2>
        <p>
          Every verb starts from its <b>present-tense “I” form</b> — the one that begins with{' '}
          <span className="arabic" style={{ fontSize: 20 }}>أ</span> (Alif). From this single stamp you can build{' '}
          <b>six different grammar structures</b>:
        </p>
        <ul style={{ lineHeight: 1.9 }}>
          <li>Past — the direct way (<i>I wrote</i>)</li>
          <li>Past — the habitual/continuous way with كان (<i>I used to write / I was writing</i>)</li>
          <li>Present — simple (<i>I write</i>)</li>
          <li>Present — continuous with عم (<i>I am writing</i>)</li>
          <li>Future — with راح (<i>I will write</i>)</li>
          <li>Imperative (<i>write!</i>)</li>
        </ul>
        <p style={{ color: 'var(--ink-soft)' }}>
          Learn to reach <b>انا</b> and <b>هو</b>, and you can conjugate the rest without thinking.
        </p>
      </Card>

      <Card>
        <h2 style={{ marginTop: 0 }}>2 · The two keys</h2>
        <p>Every past tense unfolds from just two forms:</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div className="card" style={{ padding: 14 }}>
            <div className="arabic" style={{ fontSize: 24, fontWeight: 700 }}>أنا</div>
            <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>opens the door for</div>
            <div className="arabic" style={{ fontSize: 18, marginTop: 4 }}>إنتَ · إنتِ · إنتو · نحنا</div>
          </div>
          <div className="card" style={{ padding: 14, background: 'color-mix(in srgb, var(--brand) 7%, transparent)' }}>
            <div className="arabic" style={{ fontSize: 24, fontWeight: 700 }}>هو</div>
            <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>opens the door for</div>
            <div className="arabic" style={{ fontSize: 18, marginTop: 4 }}>هي · همة</div>
          </div>
        </div>
        <p style={{ marginTop: 12 }}>
          From <b>انا</b>: add endings — <span className="arabic">ي</span> for إنتِ, <span className="arabic">و</span> for
          إنتو, <span className="arabic">نا</span> for نحنا. From <b>هو</b>: add <span className="arabic">ت</span> for هي,{' '}
          <span className="arabic">وا</span> for همة.
        </p>
      </Card>

      <Card>
        <h2 style={{ marginTop: 0 }}>3 · How to spot a family</h2>
        <p>
          Judge every verb by <b>two things</b>: the <b>vowel</b> and the <b>shaddeh</b>. Mentally drop the leading{' '}
          <span className="arabic">أ</span> and look at the root.
        </p>
        <div
          style={{
            background: 'var(--bg-soft)',
            borderRadius: 12,
            padding: 14,
            fontSize: 15,
            lineHeight: 1.8,
          }}
        >
          <div>
            🔺 <b>Shaddeh always wins.</b> If there’s a shaddeh, ignore the vowel completely.
          </div>
          <div>· Shaddeh + 3 letters → <b>Family 3</b></div>
          <div>· Shaddeh + more than 3 letters → <b>Family 4</b></div>
          <div style={{ marginTop: 8 }}>🔹 <b>No shaddeh?</b> Then look at the vowel.</div>
          <div>· Vowel in the middle → <b>Family 1</b></div>
          <div>· Vowel at the end → <b>Family 2</b></div>
          <div style={{ marginTop: 8 }}>· Neither vowel nor shaddeh → <b>Family 5</b> (regular)</div>
        </div>
      </Card>

      <Card>
        <h2 style={{ marginTop: 0 }}>4 · The five families at a glance</h2>
        <div style={{ display: 'grid', gap: 10 }}>
          {FAMILIES.map((f) => (
            <div key={f.id} style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
              <span
                style={{
                  minWidth: 34,
                  textAlign: 'center',
                  fontWeight: 800,
                  color: `var(--f${f.id})`,
                }}
              >
                F{f.id}
              </span>
              <div>
                <b>{f.name}</b> — {f.short}
                <div className="arabic" style={{ fontSize: 18, marginTop: 2 }}>
                  {f.examples.map((e) => e.ar).join(' · ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 style={{ marginTop: 0 }}>5 · The other five structures</h2>
        <ul style={{ lineHeight: 1.9 }}>
          <li>
            <b>Habitual past</b> = كان (conjugated) + the present. <span className="arabic">أنا كنت بروح كل يوم</span> — “I
            used to go every day.”
          </li>
          <li>
            <b>Simple present</b> = the present with the <b>“be”</b> (<span className="arabic">ب</span>). The “be” is just
            like the English <i>-s</i> in “she goes” — but applied to <i>all</i> pronouns. Drop it after words like{' '}
            <span className="arabic">لازم</span>, <span className="arabic">ممكن</span>, or a second verb.
          </li>
          <li>
            <b>Continuous present</b> = <span className="arabic">عم</span> + the present. <span className="arabic">أنا عم بحكي</span> —
            “I am speaking.” عم is your <i>-ing</i>.
          </li>
          <li>
            <b>Future</b> = <span className="arabic">راح</span> + the present, and it <i>always</i> drops the “be.”{' '}
            <span className="arabic">راح أروح</span> — “I will go.”
          </li>
          <li>
            <b>Imperative</b> = drop the <span className="arabic">أ</span>. <span className="arabic">أمشي → امشي</span>.
          </li>
        </ul>
      </Card>
    </div>
  );
}
