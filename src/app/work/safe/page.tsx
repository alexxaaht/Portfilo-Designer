import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import CaseNavbar from '@/components/CaseNavbar'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'Safe — Elvin Garaev',
  description: 'Safe — Goal-Based Savings inside Ukrsib Online. 7 research sprints, A/B testing, 2M+ users.',
}

const bg2 = '#1A1A18'
const T = '#E5E0D8'
const sub = 'rgba(210,204,194,0.5)'
const dim = 'rgba(210,204,194,0.22)'
const line = 'rgba(255,255,255,0.07)'
const line2 = 'rgba(255,255,255,0.13)'
const ACCENT = '#1DB954'

export default function SafePage() {
  return (
    <>
      <CaseNavbar title="Elvin Garaev" />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '100px 52px 56px', borderBottom: `1px solid ${line}` }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' as const }}>
          {(['Senior Designer', 'Fintech', 'Mobile', 'Feature Design', 'UkrSibBank'] as const).map(t => (
            <span key={t} style={{ fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase' as const, color: t === 'Senior Designer' ? ACCENT : sub, background: t === 'Senior Designer' ? `${ACCENT}18` : 'rgba(255,255,255,0.04)', border: `1px solid ${t === 'Senior Designer' ? `${ACCENT}40` : line}`, borderRadius: 100, padding: '4px 12px' }}>{t}</span>
          ))}
        </div>
        <h1 style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.05, color: T, marginBottom: 40, maxWidth: 820 }}>
          Safe — <em style={{ fontStyle: 'italic', fontWeight: 300, color: sub }}>Goal-Based Savings</em><br />
          inside Ukrsib Online
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', border: `1px solid ${line}`, borderRadius: 14, overflow: 'hidden', maxWidth: 760 }}>
          {[
            { l: 'Role', v: 'Senior Product Designer' },
            { l: 'Timeline', v: '2024–2025' },
            { l: 'Platform', v: 'iOS · Android' },
            { l: 'Company', v: 'UkrSibBank BNP Paribas' },
          ].map((m, i, a) => (
            <div key={m.l} style={{ padding: '18px 22px', borderRight: i < a.length - 1 ? `1px solid ${line}` : 'none' }}>
              <div style={{ fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase' as const, color: dim, marginBottom: 5 }}>{m.l}</div>
              <div style={{ fontSize: 13, fontWeight: 500, color: T, lineHeight: 1.3 }}>{m.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── COVER ────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 52px' }}>
        <Image src="/images/misc/04-safe.png" alt="Safe — all screens overview" width={1920} height={900} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 14 }} />
      </div>

      {/* ── 01 OVERVIEW ──────────────────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>01 · Overview</SecNum>
        <H2>People know they should save.<br /><Em>They just don't know how to start.</Em></H2>
        <P>Ukrsib Online already offered deposits and savings accounts — but they felt like banking products, not personal tools. Users understood the mechanics but didn't connect them to their own goals. <strong style={{ color: T, fontWeight: 500 }}>A deposit is a financial instrument. A "Банка" (jar) for your vacation is a dream you're building towards.</strong> The language and the UX needed to change completely.</P>
        <P mt>Safe is a goal-based savings feature inside the Ukrsib Online mobile app — a way for users to create named savings accounts tied to personal goals, with visual progress tracking, automatic top-ups, and smart reminders. The hypothesis: <strong style={{ color: T, fontWeight: 500 }}>if we make saving feel personal and progress visible, users will save more and stay longer.</strong></P>
        <Insight label="Why this matters at scale">Ukrsib Online has 2M+ users. Even a small improvement in savings engagement directly impacts the bank's liquidity and long-term client retention. This wasn't a nice-to-have feature — it was a strategic bet on transforming how the bank's clients thought about their relationship with money.</Insight>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, marginTop: 44 }}>
          {[
            { n: '2M+', d: 'Ukrsib Online users who could access the feature on launch — one of Ukraine\'s largest retail banking apps' },
            { n: '7', d: 'Design sprints and workshops conducted across the full process — from Stakeholder alignment to A/B testing' },
            { n: '3', d: 'Competing approaches tested in hypothesis validation before committing to the goal-based savings model' },
          ].map(s => (
            <div key={s.n} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: '30px 26px' }}>
              <div style={{ fontSize: 44, fontWeight: 600, letterSpacing: '-.04em', color: ACCENT, lineHeight: 1, marginBottom: 8 }}>{s.n}</div>              <div style={{ fontSize: 12, fontWeight: 300, color: sub, lineHeight: 1.6 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 02 RESEARCH PROCESS ──────────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>02 · Research Process</SecNum>
        <H2>Seven stages before<br /><Em>a single screen was drawn</Em></H2>
        <P>This was one of the most research-heavy projects I've worked on at UkrSibBank. The process was deliberately structured — we didn't start designing until we had gone through a full discovery cycle. <strong style={{ color: T, fontWeight: 500 }}>Savings behaviour is deeply personal and often irrational, and designing without understanding the psychology would have meant designing the wrong thing.</strong></P>
        <ImgCard src="/images/safe/01-Research-process-board-—-Service.so-for-.png" alt="Research process board" caption="Full research process board — Kickoff meeting documentation, timeline schedule (19 Jan → 26 Jan), team structure, methods, competitive analysis, hypotheses and references. Built in Figma with the full cross-functional team." />
        <div style={{ marginTop: 44 }}>
          {[
            { n: '01', t: 'Stakeholder & Business Goals Alignment', d: 'Started with a structured kickoff — mapping the bank\'s business objectives against what we understood about user motivations. <strong>The tension we found immediately: the bank wants users to lock money away longer. Users want flexibility and control.</strong>', i: 'Key output: a shared understanding that we couldn\'t design a "better deposit" — we had to design a fundamentally different relationship with saving.' },
            { n: '02', t: 'Competitive Analysis — Ukraine & Global', d: 'Analysed Ukrainian competitors (Privatbank, Monobank, ManiBoks від ПУМБ) and international references (Monzo, Revolut, N26, Chime). Ukrainian banks had savings products but no emotional design. <strong>The market gap wasn\'t about interest rates — it was about UX.</strong>', i: 'Monobank\'s "jar" concept was the closest Ukrainian reference — but it was limited. We studied why it worked and where it fell short for more complex savings behaviours.' },
            { n: '03', t: 'Question Generation & Grouping', d: 'Generated 80+ research questions across the team, then grouped them into thematic clusters to identify the most important unknowns before interviewing users. <strong>Good research starts with good questions, not good intentions.</strong>', i: '' },
            { n: '04', t: 'User Interviews', d: 'Conducted interviews with UkrSibBank clients across different savings behaviours — active savers, occasional savers, and people who wanted to save but couldn\'t maintain the habit. Goal: understand <strong>why their saving behaviour broke down</strong> and what mental models they already used.', i: 'The most common pattern: people set savings goals in their head but had no system to track them. They\'d save 5,000₴, then spend it because it wasn\'t "for" anything specific in the app.' },
            { n: '05', t: 'Hypothesis Generation & Workshops', d: 'Translated research findings into testable "If we... then we expect..." hypotheses. Ran prioritisation workshops with product managers, developers, and compliance to filter hypotheses by impact and feasibility.', i: '' },
            { n: '06', t: 'Feature Prioritisation & High-Level Wireframes', d: 'Turned prioritised hypotheses into a feature list, then mapped them to high-level wireframes for validation. At this stage we weren\'t designing — we were testing whether the core information architecture made sense to users before investing in visual design.', i: '' },
            { n: '07', t: 'A/B Testing & Full User Map', d: 'Ran A/B tests with real UkrSibBank clients on key design decisions. Built the full user map covering every state: empty state, in-progress, goal reached, automatic top-up, shared savings. <strong>The user map ensured no edge case was left undesigned.</strong>', i: 'A/B testing revealed that users who set a specific goal amount and deadline were 3x more likely to maintain the savings habit than users who saved without a target.' },
          ].map((s, i, a) => (
            <div key={s.n} style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: 20, padding: '32px 0', borderTop: `1px solid ${line}`, borderBottom: i === a.length - 1 ? `1px solid ${line}` : 'none' }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: dim, paddingTop: 3 }}>{s.n}</div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 600, color: T, marginBottom: 10, letterSpacing: '-.01em' }}>{s.t}</div>
                <div style={{ fontSize: 15, fontWeight: 300, color: sub, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: s.d }} />
                {s.i && <div style={{ marginTop: 14, fontSize: 14, fontWeight: 300, fontStyle: 'italic', color: 'rgba(210,204,194,0.4)', lineHeight: 1.6, borderTop: `1px solid ${line}`, paddingTop: 14 }}>{s.i}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 03 COMPETITIVE ANALYSIS ──────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>03 · Competitive Analysis</SecNum>
        <H2>What the market had<br /><Em>and what was missing</Em></H2>
        <P>We studied both Ukrainian competitors and international benchmarks. The gap was consistent and clear: <strong style={{ color: T, fontWeight: 500 }}>Ukrainian banks treated savings as a financial instrument. International fintechs treated saving as a behaviour to design for.</strong> No Ukrainian bank was doing goal-based saving with progress visualisation, sharing, or behavioural nudges at the time we designed this.</P>
        <ImgCard src="/images/safe/02-Competitive-analysis-—-Privatbank-Monob.png" alt="Competitive analysis" caption="Competitive analysis — Privatbank (envelope feature), Monobank (jar concept), ManiBoks від ПУМБ, plus Korean market references and international players. Strengths and weaknesses mapped per competitor." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '32px 0' }}>
          <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
            <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(255,100,100,0.5)', marginBottom: 10 }}>What competitors had</div>
            <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.7 }}>Savings accounts with interest rates. No goal naming. No progress bars. No visual motivation. No sharing. No reminders tied to personal goals. <strong style={{ color: T, fontWeight: 500 }}>Functionally correct, emotionally disconnected.</strong></div>
          </div>
          <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
            <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(100,200,100,0.5)', marginBottom: 10 }}>What we designed instead</div>
            <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.7 }}><strong style={{ color: T, fontWeight: 500 }}>Named savings "jars" tied to personal goals.</strong> Progress visualisation. Automatic top-ups with smart scheduling. Shared savings for group goals. Push reminders tied to goal milestones.</div>
          </div>
        </div>
      </div>

      {/* ── 04 HYPOTHESES ────────────────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>04 · Key Hypotheses</SecNum>
        <H2>What we believed<br /><Em>before we built anything</Em></H2>
        <P>Hypotheses are the most honest artefact in the design process. They force you to state what you believe before you see the data. <strong style={{ color: T, fontWeight: 500 }}>We wrote every hypothesis in the same format: if we do X, we expect Y, because Z.</strong></P>
        <ImgCard src="/images/safe/03-Hypotheses-from-workshops.png" alt="Hypotheses from workshops" caption='Hypothesis generation workshops — structured "Якщо ми... то ми очікуємо..." format. Grouped by theme: visual progress, notifications, goal flexibility, automatic top-ups, social savings, currency options, naming and localisation.' />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 32 }}>
          {[
            { n: '01', if_: 'If we add visual progress indicators (progress bar, percentage left)', then: 'Users will top up savings more frequently and stay motivated longer — because seeing progress reduces abstract thinking and triggers completion bias.' },
            { n: '02', if_: 'If we add push notifications tied to goal milestones (50%, almost there)', then: 'Users will return to the savings feature more regularly and increase average deposit size — because timely reminders reduce the cognitive gap between intention and action.' },
            { n: '03', if_: 'If we enable shared savings jars for groups', then: 'More users will start saving who previously didn\'t — because social accountability is a stronger motivator for many people than individual discipline.' },
            { n: '04', if_: 'If we add automatic top-ups with flexible scheduling', then: 'Users will accumulate more consistently — because automation removes the weekly decision fatigue of "should I transfer money today?"' },
            { n: '05', if_: 'If we use Ukrainian-language naming ("Банка" instead of "Dreams")', then: 'The feature will feel more familiar and trustworthy to Ukrainian users — because localisation reduces cognitive friction and increases emotional ownership.' },
            { n: '06', if_: 'If we allow interest on savings balances ("Банка" with yield)', then: 'Users will keep larger balances in the bank for longer — because earning something on idle money removes the psychological cost of not spending it.' },
          ].map(h => (
            <div key={h.n} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
              <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: dim, marginBottom: 12 }}>Hypothesis {h.n}</div>
              <div style={{ fontSize: 13, fontWeight: 400, color: T, marginBottom: 8, lineHeight: 1.5 }}>If we {h.if_}</div>
              <div style={{ fontSize: 13, fontWeight: 300, color: sub, lineHeight: 1.7, borderTop: `1px solid ${line}`, paddingTop: 10 }}>{h.then}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 05 INTERVIEW SYNTHESIS ───────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>05 · Interview Synthesis</SecNum>
        <H2>Grouping what users<br /><Em>actually told us</Em></H2>
        <P>After interviews we synthesised findings using affinity mapping — grouping responses by theme to identify patterns across different user types. The clusters that emerged shaped the entire feature structure: <strong style={{ color: T, fontWeight: 500 }}>goal clarity, progress visibility, automation, and social motivation.</strong></P>
        <P mt>One finding cut across almost every interview: users had <strong style={{ color: T, fontWeight: 500 }}>more than one savings goal simultaneously</strong>, but their existing tools forced them to track everything in one account. This was the core insight behind the multi-jar architecture — one account per goal, not one account for all goals.</P>
        <ImgCard src="/images/safe/04-Interview-question-grouping-—-affinity-m.png" alt="Affinity mapping" caption="Affinity mapping — 80+ interview questions grouped into thematic clusters. Work Alone phase (question generation) followed by collaborative grouping session with the design team. Each column represents a distinct research theme." />
        <div style={{ borderLeft: '3px solid rgba(255,255,255,0.2)', padding: '24px 28px', margin: '32px 0' }}>
          <div style={{ fontSize: 18, fontWeight: 300, fontStyle: 'italic', color: T, lineHeight: 1.65, marginBottom: 10 }}>"I have one account for savings but I'm actually saving for a car, a vacation, and my kid's education at the same time. I just have to remember which part is for what."</div>
          <div style={{ fontSize: 12, color: dim }}>— UkrSibBank client interview, savings behaviour research</div>
        </div>
        <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 32, margin: '32px 0' }}>
          <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: dim, marginBottom: 12 }}>The insight that changed the architecture</div>
          <div style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.85, color: sub }}>
            Initially we designed Safe as a single savings product with goal-tagging — one account, multiple labels. But interview synthesis showed us this was wrong. <strong style={{ color: T, fontWeight: 500 }}>Users didn't just want to label money differently — they wanted to feel that money was in separate places, mentally and visually.</strong>
            <br /><br />
            The shift to separate named jars (each with its own balance, progress bar, and goal) was a direct response to this insight. It was more complex to build, but it was the right model for how people actually think about their finances.
          </div>
        </div>
      </div>

      {/* ── 06 FINAL DESIGN ──────────────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>06 · Final Design</SecNum>
        <H2>Screens that make saving<br /><Em>feel personal</Em></H2>
        <P>The final design of Safe covers three distinct product moments: the empty state (motivating a first jar), the active state (tracking progress across multiple goals), and the goal-creation flow (setting up a new savings target). Each had to feel cohesive but serve a different emotional need.</P>
        <ImgCard src="/images/safe/05-Safe-—-savings-screens.png" alt="Safe — savings screens" caption='Savings screens — empty state (no products), active state with deposits and savings accounts in UAH/USD/EUR, "Відкрити новий продукт" flow showing Deposit, Savings Account, Securities (OVDP) and Safe options.' />
        <ImgCard src="/images/safe/06-Safe-—-dreams-savings-detail.png" alt="Safe — dreams savings detail" caption='Dreams savings account detail — hero image personalisation, progress tracking, "Перейти в Dreams" shortcut, account actions (Реквізити, Деталі, Виписка, Перейменувати). Two variants of the actions drawer tested in A/B.' />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '32px 0' }}>
          <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
            <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(255,100,100,0.5)', marginBottom: 10 }}>First version — account list</div>
            <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.7 }}>All savings products in one flat list. No visual differentiation between deposits, savings accounts, and jars. Users in testing couldn't tell at a glance which account was "for" what — the mental model was broken.</div>
          </div>
          <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
            <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(100,200,100,0.5)', marginBottom: 10 }}>Shipped version — grouped by type</div>
            <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.7 }}><strong style={{ color: T, fontWeight: 500 }}>Deposits, savings accounts, and jars grouped separately with clear visual hierarchy.</strong> Each "Банка" shows its name, progress, and balance at a glance. Users in testing immediately understood the structure without explanation.</div>
          </div>
        </div>
      </div>

      {/* ── 07 KEY FEATURES ──────────────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>07 · Key Features</SecNum>
        <H2>What we built and<br /><Em>why each decision was made</Em></H2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 32 }}>
          {[
            { wide: true, ic: '🏺', t: 'Named goal jars with personalised images', d: 'Users create a jar with a custom name, goal amount, deadline, and a personal photo or image. The naming was the most important decision — it turns a financial account into a personal commitment. Custom names had significantly higher engagement. The image personalisation came from a direct interview quote: "I want to see the car I\'m saving for, not a bank icon."' },
            { wide: false, ic: '📊', t: 'Visual progress tracking', d: 'Progress bar with percentage and amount remaining visible on every jar card. Tested against a number-only display — the progress bar version had higher return visits and larger average top-up amounts. Completion bias is real: seeing 73% makes you want to reach 100%.' },
            { wide: false, ic: '🔄', t: 'Automatic top-ups', d: 'Weekly, bi-weekly, or monthly automatic transfers from any linked account. The scheduling interface was simplified to three options after research showed that more flexibility paradoxically led to lower adoption.' },
            { wide: false, ic: '👥', t: 'Shared savings jars', d: 'Multiple users can contribute to one jar — for shared travel funds, family goals, or group purchases. One of the most-requested features in interviews that wasn\'t in any Ukrainian banking app at the time.' },
            { wide: false, ic: '💰', t: 'Interest on savings balance', d: 'Jars earn a small interest rate on their balance — removing the psychological cost of "locking" money. Directly addressed the most common objection: "I don\'t want to put money away if I can\'t earn anything on it."' },
            { wide: false, ic: '🔔', t: 'Milestone push notifications', d: 'Smart reminders at 25%, 50%, 75%, and near-deadline. Copy was written to feel motivating, not transactional. "Тебе відокремлює лише 3,200₴ від відпустки твоєї мрії" tested better than "Your savings goal is 75% complete."' },
          ].map(s => (
            <div key={s.t} style={{ gridColumn: s.wide ? 'span 2' : undefined, background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
              <div style={{ fontSize: 20, marginBottom: 12 }}>{s.ic}</div>
              <div style={{ fontSize: 16, fontWeight: 500, color: T, marginBottom: 8 }}>{s.t}</div>
              <div style={{ fontSize: 13, fontWeight: 300, color: sub, lineHeight: 1.75 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 08 IMPACT ────────────────────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>08 · Impact & Reflection</SecNum>
        <H2>What the feature achieved<br /><Em>and what it taught us</Em></H2>
        <P>Metrics below are projected based on A/B testing results and validated KPI targets agreed with the product team before launch. The feature is in final development stages.</P>
        <Insight label="What I'd change">We invested heavily in the goal-creation experience and almost nothing in the "goal achieved" moment. When a user reaches their savings target, the app shows a standard success state. That moment deserved a celebration — something that reinforced the behaviour and motivated a new goal. It's the most underdesigned part of the product and the first thing I'd fix in the next iteration.</Insight>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginTop: 44 }}>
          {[
            { n: '+38', su: '%', d: 'Projected increase in savings deposits from users who create at least one named goal jar within 30 days' },
            { n: '+22', su: '%', d: 'Retention improvement — users with active savings goals return to the app more frequently' },
            { n: '3x', su: '', d: 'More likely to maintain savings habit — users who set a specific goal amount and deadline vs without (A/B test)' },
            { n: '−40', su: '%', d: 'Drop in savings abandonment rate after adding progress visualisation and milestone reminders' },
            { n: '7', su: '', d: 'Design sprints and workshops conducted before a single production screen was approved' },
            { n: '2M', su: '+', d: 'Potential users who can access the feature — one of the largest retail banking audiences in Ukraine' },
          ].map((s, i) => (
            <div key={s.n + s.su} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
              <div style={{ fontSize: 42, fontWeight: 600, letterSpacing: '-.03em', color: i < 3 ? ACCENT : T, lineHeight: 1, marginBottom: 10 }}>
                {s.n}<span style={{ fontSize: 22, color: i < 3 ? ACCENT : sub }}>{s.su}</span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 300, color: sub, lineHeight: 1.65 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      <NextCase title="CryptoSwift" subtitle="Crypto Payment Platform for Merchants" href="/work/cryptoswift" />
    </>
  )
}

function SecNum({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: dim, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{ display: 'block', width: 24, height: 1, background: line2 }} />{children}
    </div>
  )
}
function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.3, color: T, marginBottom: 20, maxWidth: 680 }}>{children}</h2>
}
function Em({ children }: { children: React.ReactNode }) {
  return <em style={{ fontStyle: 'italic', fontWeight: 300, color: sub }}>{children}</em>
}
function P({ children, mt }: { children: React.ReactNode; mt?: boolean }) {
  return <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.9, color: sub, marginTop: mt ? 20 : 0 }}>{children}</p>
}
function S({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <FadeUp>
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(210,204,194,0.22)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ display: 'block', width: 24, height: 1, background: 'rgba(255,255,255,0.13)' }} />{num}
        </div>
        {children}
      </div>
    </FadeUp>
  )
}
function Insight({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: '2px solid rgba(255,255,255,0.2)', padding: '20px 28px', margin: '32px 0', background: 'rgba(255,255,255,0.02)', borderRadius: '0 10px 10px 0' }}>
      <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: dim, marginBottom: 8 }}>{label}</div>
      <div style={{ fontSize: 16, fontWeight: 300, fontStyle: 'italic', color: T, lineHeight: 1.7 }}>{children}</div>
    </div>
  )
}
function ImgCard({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <>
      <div style={{ borderRadius: 14, overflow: 'hidden', border: `1px solid ${line}`, margin: '32px 0' }}>
        <Image src={src} alt={alt} width={1160} height={700} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
      {caption && <div style={{ fontSize: 12, fontWeight: 300, color: dim, marginTop: 10, lineHeight: 1.6 }}>{caption}</div>}
    </>
  )
}
function NextCase({ title, subtitle, href }: { title: string; subtitle: string; href: string }) {
  return (
    <div style={{ borderTop: `1px solid ${line}` }}>
      <div style={{ padding: '80px 52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1160, margin: '0 auto' }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: dim, marginBottom: 8 }}>Next case</div>
          <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-.02em', color: T }}>{title} →</div>
          <div style={{ fontSize: 14, color: sub, marginTop: 4 }}>{subtitle}</div>
        </div>
        <div className="flex gap-3 items-center">
          {/* Кнопка All cases */}
          <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-sub border border-white/10 rounded-full px-6 py-[11px] transition-all duration-200 hover:text-text hover:border-white/25">
            ← All cases
          </Link>
          {/* Кнопка View case */}
          <Link href={href} className="inline-flex items-center gap-2.5 border border-white/20 rounded-full px-7 py-3 text-[13px] text-text transition-all duration-200 hover:bg-white/5 hover:border-white/40 hover:-translate-y-0.5 active:scale-95">
            View case ↗
          </Link>
        </div>
      </div>
    </div>
  )
}
