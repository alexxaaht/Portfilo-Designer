import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import CaseNavbar from '@/components/CaseNavbar'
import { H2, Em, P, Ins, Img } from '@/components/CaseComponents'
import CaseFooter from '@/components/CaseFooter'


export const metadata: Metadata = {
  title: 'Safe — Elvin Garaev',
  description: 'Safe — Goal-Based Savings inside Ukrsib Online. 7 research sprints, A/B testing, 2M+ users.',
}

// ОБНОВЛЕННЫЕ ПЕРЕМЕННЫЕ (СВЕТЛЕЕ И КРУПНЕЕ)
const bg2   = '#1A1A18'
const T     = '#F2F0EC' // Яркий белый
const sub   = 'rgba(210,204,194,0.75)' // 75% яркости (был 50%)
const dim   = 'rgba(210,204,194,0.5)'  // 50% яркости (был 22%)
const line  = 'rgba(255,255,255,0.08)'
const line2 = 'rgba(255,255,255,0.18)'
const ACCENT = '#1DB954'

export default function SafePage() {
  return (
    <>
      <CaseNavbar title="Elvin Garaev" />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '120px 52px 64px', borderBottom: `1px solid ${line}` }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 32, flexWrap: 'wrap' as const }}>
          {(['Senior Designer', 'Fintech', 'Mobile', 'Feature Design', 'UkrSibBank'] as const).map(t => (
            <span key={t} style={{ fontSize: 12, letterSpacing: '.06em', textTransform: 'uppercase' as const, color: t === 'Senior Designer' ? ACCENT : sub, background: t === 'Senior Designer' ? `${ACCENT}18` : 'rgba(255,255,255,0.05)', border: `1px solid ${t === 'Senior Designer' ? `${ACCENT}40` : line}`, borderRadius: 100, padding: '5px 14px' }}>{t}</span>
          ))}
        </div>
        <h1 style={{ fontSize: 'clamp(40px,6vw,68px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.05, color: T, marginBottom: 48, maxWidth: 850 }}>
          Safe — <em style={{ fontStyle: 'italic', fontWeight: 300, color: sub }}>Goal-Based Savings</em><br />
          inside Ukrsib Online
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', border: `1px solid ${line}`, borderRadius: 16, overflow: 'hidden', width: '100%' }}>
          {[
            { l: 'Role',     v: 'Senior Product Designer' },
            { l: 'Timeline', v: '2024–2025' },
            { l: 'Platform', v: 'iOS · Android' },
            { l: 'Company',  v: 'UkrSibBank BNP Paribas' },
          ].map((m, i, a) => (
            <div key={m.l} style={{ padding: '22px 26px', borderRight: i < a.length - 1 ? `1px solid ${line}` : 'none' }}>
              <div style={{ fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase' as const, color: dim, marginBottom: 6 }}>{m.l}</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: T, lineHeight: 1.3 }}>{m.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── COVER ────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 52px' }}>
        <Image src="/images/safe/00-Safe-—-all-screens-overview.png" alt="Safe" width={1920} height={900} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 16 }} priority />
      </div>

      {/* ── 01 OVERVIEW ──────────────────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>01 · Overview</SecNum>
        <H2>People know they should save.<br /><Em>They just don't know how to start.</Em></H2>
        <P>Ukrsib Online already offered deposits and savings accounts — but they felt like banking products, not personal tools. Users understood the mechanics but didn't connect them to their own goals. <strong style={{ color: T, fontWeight: 500 }}>A deposit is a financial instrument. A "Банка" (jar) for your vacation is a dream you're building towards.</strong> The language and the UX needed to change completely.</P>
        <P mt>Safe is a goal-based savings feature inside the Ukrsib Online mobile app — a way for users to create named savings accounts tied to personal goals, with visual progress tracking, automatic top-ups, and smart reminders. The hypothesis: <strong style={{ color: T, fontWeight: 500 }}>if we make saving feel personal and progress visible, users will save more and stay longer.</strong></P>
        
        <div style={{ borderLeft: '2px solid rgba(255,255,255,0.3)', padding: '24px 32px', margin: '40px 0', background: 'rgba(255,255,255,0.03)', borderRadius: '0 12px 12px 0' }}>
          <div style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 10 }}>Why this matters at scale</div>
          <div style={{ fontSize: 18, fontWeight: 300, fontStyle: 'italic', color: T, lineHeight: 1.7 }}>Ukrsib Online has 2M+ users. Even a small improvement in savings engagement directly impacts the bank's liquidity and long-term client retention. This wasn't a nice-to-have feature — it was a strategic bet.</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 52 }}>
          {[
            { n: '2M+', d: 'Ukrsib Online users who could access the feature on launch — Ukraine\'s largest retail banking apps' },
            { n: '7',   d: 'Design sprints and workshops conducted across the full process — from alignment to A/B testing' },
            { n: '3',   d: 'Competing approaches tested in hypothesis validation before committing to the model' },
          ].map(s => (
            <div key={s.n} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: '36px 30px' }}>
              <div style={{ fontSize: 48, fontWeight: 600, letterSpacing: '-.04em', color: T, lineHeight: 1, marginBottom: 12 }}>{s.n}</div>
              <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.6 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 02 RESEARCH PROCESS ──────────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>02 · Research Process</SecNum>
        <H2>Seven stages before<br /><Em>a single screen was drawn</Em></H2>
        <P>This was one of the most research-heavy projects I've worked on at UkrSibBank. The process was deliberately structured. <strong style={{ color: T, fontWeight: 500 }}>Savings behaviour is deeply personal and often irrational, and designing without understanding the psychology would have meant designing the wrong thing.</strong></P>
        <Img src="/images/safe/01-Research-process-board-—-Service.so-for-.png" alt="Research process" cap="Full research process board — Kickoff meeting documentation, timeline schedule, team structure, competitive analysis." />
        <div style={{ marginTop: 48 }}>
          {[
            { n: '01', t: 'Stakeholder & Business Goals Alignment', d: 'Started with a kickoff mapping business objectives against motivations. <strong>The tension we found: the bank wants users to lock money away longer. Users want flexibility.</strong>', i: 'Key output: we had to design a fundamentally different relationship with saving.' },
            { n: '02', t: 'Competitive Analysis — Ukraine & Global', d: 'Analysed Ukrainian competitors and international references (Monzo, Revolut). <strong>The market gap wasn\'t about interest rates — it was about UX.</strong>', i: 'Monobank\'s "jar" was the closest reference — we studied why it worked and where it fell short.' },
            { n: '03', t: 'Question Generation & Grouping', d: 'Generated 80+ research questions across the team to identify the most important unknowns. <strong>Good research starts with good questions.</strong>', i: '' },
            { n: '04', t: 'User Interviews', d: 'Conducted interviews with active and occasional savers. Goal: understand <strong>why their saving behaviour broke down</strong>.', i: 'Pattern: people set goals in their head but had no system to track them.' },
            { n: '05', t: 'Hypothesis Generation', d: 'Translated research findings into testable hypotheses prioritised by impact and feasibility.', i: '' },
            { n: '06', t: 'Wireframing', d: 'Turned hypotheses into a feature list, then mapped them to high-level wireframes for validation.', i: '' },
            { n: '07', t: 'A/B Testing & Full User Map', d: 'Ran A/B tests on key decisions. Built the full user map covering every state. <strong>The user map ensured no edge case was left undesigned.</strong>', i: 'Users who set a specific goal and deadline were 3x more likely to maintain the habit.' },
          ].map((s, i, a) => (
            <div key={s.n} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 24, padding: '40px 0', borderTop: `1px solid ${line}`, borderBottom: i === a.length - 1 ? `1px solid ${line}` : 'none' }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: dim, paddingTop: 4 }}>{s.n}</div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 600, color: T, marginBottom: 12, letterSpacing: '-.01em' }}>{s.t}</div>
                <div style={{ fontSize: 16, fontWeight: 300, color: sub, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: s.d }} />
                {s.i && <div style={{ marginTop: 18, fontSize: 15, fontWeight: 300, fontStyle: 'italic', color: 'rgba(210,204,194,0.45)', lineHeight: 1.7, borderTop: `1px solid ${line}`, paddingTop: 18 }}>{s.i}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 03 COMPETITIVE ANALYSIS ──────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>03 · Competitive Analysis</SecNum>
        <H2>What the market had<br /><Em>and what was missing</Em></H2>
        <P>We studied both Ukrainian competitors and international benchmarks. The gap was clear: <strong style={{ color: T, fontWeight: 500 }}>Ukrainian banks treated savings as a financial instrument. International fintechs treated saving as a behaviour.</strong></P>
        <Img src="/images/safe/02-Competitive-analysis-—-Privatbank-Monob.png" alt="Analysis" cap="Competitive analysis mapping strengths and weaknesses per competitor." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '40px 0' }}>
          <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: 32 }}>
            <div style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(255,100,100,0.7)', marginBottom: 14 }}>What competitors had</div>
            <div style={{ fontSize: 15, fontWeight: 300, color: sub, lineHeight: 1.7 }}>No goal naming. No progress bars. No visual motivation. <strong style={{ color: T, fontWeight: 500 }}>Functionally correct, emotionally disconnected.</strong></div>
          </div>
          <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: 32 }}>
            <div style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(100,200,100,0.7)', marginBottom: 14 }}>What we designed instead</div>
            <div style={{ fontSize: 15, fontWeight: 300, color: sub, lineHeight: 1.7 }}><strong style={{ color: T, fontWeight: 500 }}>Named savings "jars" tied to personal goals.</strong> Progress visualisation. Automatic top-ups and milestone push reminders.</div>
          </div>
        </div>
      </div>

      {/* ── 04 HYPOTHESES ────────────────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>04 · Key Hypotheses</SecNum>
        <H2>What we believed<br /><Em>before we built anything</Em></H2>
        <P>Hypotheses are the most honest artefact. They force you to state what you believe. <strong style={{ color: T, fontWeight: 500 }}>We wrote every hypothesis in the format: if we do X, we expect Y, because Z.</strong></P>
        <Img src="/images/safe/03-Hypotheses-from-workshops.png" alt="Workshops" cap='Hypothesis generation workshops grouped by theme: progress, social, automation.' />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 40 }}>
          {[
            { n: '01', if_: 'If we add visual progress indicators', then: 'Users will top up more frequently — because seeing progress triggers completion bias.' },
            { n: '02', if_: 'If we add push notifications tied to milestones', then: 'Users will return regularly — because timely reminders reduce the gap between intention and action.' },
            { n: '03', if_: 'If we enable shared savings jars', then: 'More users will start saving — because social accountability is a stronger motivator.' },
            { n: '04', if_: 'If we add automatic top-ups', then: 'Users will accumulate consistently — because automation removes decision fatigue.' },
          ].map(h => (
            <div key={h.n} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: 32 }}>
              <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: dim, marginBottom: 14 }}>Hypothesis {h.n}</div>
              <div style={{ fontSize: 15, fontWeight: 400, color: T, marginBottom: 10, lineHeight: 1.5 }}>If we {h.if_}</div>
              <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.7, borderTop: `1px solid ${line}`, paddingTop: 14 }}>{h.then}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 05 INTERVIEW SYNTHESIS ───────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>05 · Interview Synthesis</SecNum>
        <H2>Grouping what users<br /><Em>actually told us</Em></H2>
        <P>After interviews we synthesised findings using affinity mapping. <strong style={{ color: T, fontWeight: 500 }}>Users had more than one goal simultaneously</strong>, but their tools forced them to track everything in one account.</P>
        <Img src="/images/safe/04-Interview-question-grouping-—-affinity-m.png" alt="Affinity mapping" cap="80+ interview questions grouped into thematic clusters." />
        <div style={{ borderLeft: '3px solid rgba(255,255,255,0.3)', padding: '28px 36px', margin: '40px 0' }}>
          <div style={{ fontSize: 22, fontWeight: 300, fontStyle: 'italic', color: T, lineHeight: 1.6, marginBottom: 12 }}>"I have one account for savings but I'm actually saving for a car, a vacation, and my kid's education at the same time."</div>
          <div style={{ fontSize: 14, color: dim }}>— UkrSibBank client interview</div>
        </div>
      </div>

      {/* ── 06 FINAL DESIGN ──────────────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>06 · Final Design</SecNum>
        <H2>Screens that make saving<br /><Em>feel personal</Em></H2>
        <P>The design covers the empty state, the active state, and the goal-creation flow. Each had to feel cohesive but serve a different emotional need.</P>
        <Img src="/images/safe/05-Safe-—-savings-screens.png" alt="Savings screens" cap='Active state with deposits and jars in UAH/USD/EUR.' />
        <Img src="/images/safe/06-Safe-—-dreams-savings-detail.png" alt="Detail" cap='Dreams account detail — hero image personalisation and progress tracking.' />
      </div>

      {/* ── 07 KEY FEATURES ──────────────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>07 · Key Features</SecNum>
        <H2>What we built and<br /><Em>why each decision was made</Em></H2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 40 }}>
          {[
            { wide: true,  ic: '🏺', t: 'Named goal jars',  d: 'Users create a jar with custom name and photo. The naming turns a financial account into a personal commitment. Engagement was significantly higher.' },
            { wide: false, ic: '📊', t: 'Visual progress',  d: 'Progress bar with percentage. Tested against number-only — progress bar had higher return visits. Seeing 73% makes you want 100%.' },
            { wide: false, ic: '🔄', t: 'Automatic top-ups', d: 'Flexible scheduling. Simplified to three options after research showed too much choice led to lower adoption.' },
            { wide: false, ic: '👥', t: 'Shared jars',   d: 'Multiple users can contribute. A highly-requested feature for travel funds or family goals.' },
            { wide: false, ic: '💰', t: 'Interest', d: 'Jars earn interest — removing the psychological cost of "locking" money away.' },
          ].map(s => (
            <div key={s.t} style={{ gridColumn: s.wide ? 'span 2' : undefined, background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: 32 }}>
              <div style={{ fontSize: 24, marginBottom: 16 }}>{s.ic}</div>
              <div style={{ fontSize: 18, fontWeight: 500, color: T, marginBottom: 10 }}>{s.t}</div>
              <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.75 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 08 IMPACT ────────────────────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>08 · Impact & Reflection</SecNum>
        <H2>What the feature achieved<br /><Em>and what it taught us</Em></H2>
        <P>Metrics below are projected based on A/B testing and KPI targets. The feature is in final development.</P>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 52 }}>
          {[
            { n: '+38', su: '%',  d: 'Increase in deposits from users who create at least one named goal jar' },
            { n: '+22', su: '%',  d: 'Retention improvement — active goals bring users back to the app' },
            { n: '3x',  su: '',   d: 'More likely to maintain habit — users who set specific amount and deadline' },
            { n: '−40', su: '%',  d: 'Drop in abandonment rate after adding progress visualisation' },
            { n: '7',   su: '',   d: 'Design sprints conducted before a single production screen was approved' },
            { n: '2M',  su: '+',  d: 'Potential users who can access the feature on launch' },
          ].map(s => (
            <div key={s.n + s.su} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: '34px 28px' }}>
              <div style={{ fontSize: 48, fontWeight: 600, letterSpacing: '-.03em', color: T, lineHeight: 1, marginBottom: 12 }}>
                {s.n}<span style={{ fontSize: 24, color: sub }}>{s.su}</span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.65 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      <CaseFooter nextTitle="CryptoSwift" nextSubtitle="Crypto Payment Platform for Merchants" nextHref="/work/cryptoswift" />
    </>
  )
}

// ── Helpers (Updated for size and brightness) ──────────────────────────

function SecNum({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase' as const, color: dim, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ display: 'block', width: 30, height: 1, background: line2 }} />{children}
    </div>
  )
}