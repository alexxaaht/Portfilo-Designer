import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import CaseNavbar from '@/components/CaseNavbar'
import { H2, Em, P, B, Ins, Think, Quote, Img, Stats } from '@/components/CaseComponents'

export const metadata: Metadata = {
  title: 'P3 Wealth × BlackRock — Elvin Garaev',
  description: 'Capital Management Platform — UX/UI design for regulated fintech with BlackRock integration.',
}

const bg2 = '#1A1A18'
const T = '#E5E0D8'
const sub = 'rgba(210,204,194,0.5)'
const dim = 'rgba(210,204,194,0.22)'
const line = 'rgba(255,255,255,0.07)'
const line2 = 'rgba(255,255,255,0.13)'

export default function P3WealthPage() {
  return (
    <>
      <CaseNavbar title="Elvin Garaev" />

      {/* HERO */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '100px 52px 56px', borderBottom: `1px solid ${line}` }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
          {['Fintech', 'Investments', 'B2B', 'BlackRock', 'Web Platform'].map(t => (
            <span key={t} style={{ fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', color: sub, background: 'rgba(255,255,255,0.04)', border: `1px solid ${line}`, borderRadius: 100, padding: '4px 12px' }}>{t}</span>
          ))}
        </div>
        <h1 style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.05, color: T, marginBottom: 40, maxWidth: 820 }}>
          P3 Wealth × BlackRock —<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: sub }}>Capital Management Platform</em>
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', border: `1px solid ${line}`, borderRadius: 14, overflow: 'hidden', maxWidth: 760 }}>
          {[{ l: 'Role', v: 'UX/UI Designer' }, { l: 'Timeline', v: '2023–2024' }, { l: 'Platform', v: 'Web · Desktop' }, { l: 'Partner', v: 'BlackRock' }].map((m, i, a) => (
            <div key={m.l} style={{ padding: '18px 22px', borderRight: i < a.length - 1 ? `1px solid ${line}` : 'none' }}>
              <div style={{ fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: dim, marginBottom: 5 }}>{m.l}</div>
              <div style={{ fontSize: 13, fontWeight: 500, color: T, lineHeight: 1.3 }}>{m.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* COVER */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 52px' }}>
        <Image src="/images/p3-wealth/00-P3-Wealth-—-End-to-end-platform.png" alt="P3 Wealth platform" width={1920} height={900} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>

      {/* 01 OVERVIEW */}
      <S num="01 · Overview">
        <H2>Professional investors deserve<br /><Em>a professional-grade experience</Em></H2>
        <P>P3 Wealth is a regulated capital management platform for high-net-worth investors and financial institutions managing third-party funds. When we started this project, the platform existed — but the UX didn't. <B>Fund data from BlackRock was accessible, but buried.</B> Onboarding existed, but it was painful. The role system existed, but it treated a retail investor and an institutional fund manager as if they were the same person.</P>
        <P mt>The brief was to design the platform from the ground up: information architecture, onboarding flows, dashboard, fund pages, and reporting. With BlackRock integration and FCA compliance requirements as hard constraints that couldn't be negotiated around — only designed within.</P>
        <Ins label="The central design challenge">In most product design, you can reduce complexity by simplifying the underlying system. In regulated financial products, you can't. The complexity is real — multi-currency operations, different fund types, multiple signatory onboarding, FCA disclosure requirements. The design challenge is making that complexity invisible to users without pretending it doesn't exist.</Ins>
        <Stats items={[
          { n: '$48M+', d: 'AUM displayed on the live dashboard — real-time fund data sourced directly from BlackRock' },
          { n: '4', d: 'Distinct user roles designed — investor, fund manager, administrator, compliance officer — each with unique access logic' },
          { n: '3', d: 'Currency markets supported — EUR, GBP, USD — with real-time AUM and yield tracking across all fund types' },
        ]} />
      </S>

      {/* 02 RESEARCH */}
      <S num="02 · Research — Understanding the Real User">
        <H2>The user we thought we had<br /><Em>and the user we actually had</Em></H2>
        <P>Before personas, we made an assumption that turned out to be wrong. We assumed our primary users were sophisticated, experienced investors who would prioritise data density and feature depth. <B>The research told a different story.</B></P>
        <P mt>Through persona development and user interviews, we found that our actual users — while financially sophisticated — were not necessarily digitally sophisticated. Many had been managing investments through relationship managers and phone calls for years. The move to a self-service digital platform wasn't a product preference for them. It was a necessity driven by cost efficiency on P3 Wealth's side.</P>
        <Img src="/images/p3-wealth/01-P3-Wealth-Personas.png" alt="P3 Wealth Personas" cap="User personas — Emma (24, student/passive investor), Ivan (25, student/professional active trader), Diana (28, researcher), Мітч (35, specialist advisor). Each with Story, Goals, Wants, Gains and Pain Points mapped from research sessions." />
        <Think label="The insight that changed everything">The most important finding from persona work: <B>professional investors don't trust interfaces they don't understand.</B> Unlike a consumer app where confusion leads to drop-off, in financial products confusion leads to distrust — and distrust leads to not investing. We observed this directly: Ivan's persona showed he would spend 20+ minutes on a dashboard trying to verify a number he didn't understand before taking any action.<br /><br />This reframed our entire approach to information design. Every data point on the dashboard needed not just to be accurate — it needed to be <B>legible, attributable, and trustworthy at a glance.</B> This is why "Data sourced from BlackRock" with a timestamp became a first-class design element, not a footnote.</Think>
        <Quote author="— Ivan, Professional investor persona, BARVA.TECH research sessions">"I need to see exactly where my money is, what it's doing, and what I can do about it — without calling anyone to explain."</Quote>
      </S>

      {/* 03 PROCESS */}
      <S num="03 · Process — From Hypothesis to Production">
        <H2>Five stages, one<br /><Em>consistent thread</Em></H2>
        <P>Every stage of this process was driven by the same question: <B>does this reduce cognitive load or add to it?</B> In a financial platform, that question has to be asked about every element — every label, every number format, every action button.</P>
        <Steps items={[
          { n: '01', t: 'Persona Development & Hypothesis Generation', d: 'Mapped four investor and manager archetypes. Conducted competitive analysis of Saxo Bank, eToro, and private banking portals. Generated 20+ testable hypotheses about how different user types would approach the platform differently.', i: 'Key hypothesis tested and confirmed: investors would abandon onboarding before completion if they couldn\'t see the end of the process. Solution: visible progress indicator with step count from the first screen.' },
          { n: '02', t: 'Feature Prioritisation & MVP Scoping', d: 'Ran prioritisation workshops with product and compliance. Used a value-effort matrix to define MVP scope. The hardest conversation: compliance wanted 14 disclosure screens in the onboarding flow. We negotiated it down to 3 by finding ways to surface legal information contextually rather than front-loading it.', i: 'This negotiation taught me something important: compliance requirements and UX requirements aren\'t always in conflict. They often are — but the conflict is usually about timing and placement, not about whether the information should exist.' },
          { n: '03', t: 'Design System & UI Kit', d: 'Built a full UI kit from scratch using Simplon Norm and Simplon Mono — the font choice was deliberate. Mono typefaces for numerical data improve scannability significantly in financial interfaces. Every component was designed for the financial context: disabled states with explanations, error states that don\'t panic users, and input validation that catches mistakes before they become transactions.', i: 'We tested two typography options. The monospaced numbers reduced read errors in user testing — participants took 23% less time to verify specific values when numbers were in a mono typeface versus a proportional one.' },
          { n: '04', t: 'Role-Based Information Architecture', d: 'The most structurally complex part of the project. Investors, managers, and administrators needed to share a platform but see fundamentally different interfaces. We designed a permission system that was invisible to users — each role sees a complete, coherent interface, not an interface with things removed.', i: 'The wrong approach (which we tried first): show everything and disable what the user can\'t access. The right approach: show only what\'s relevant to each role. The first approach feels restrictive. The second feels purposeful.' },
          { n: '05', t: 'Iterative Testing & Refinement', d: 'Three rounds of usability testing with investor and manager profiles. The onboarding flow was redesigned twice before reaching acceptable completion rates. The dashboard graph — AUM/Yield toggle — was one of the most iterated elements. First version had tabs. Second version had a segmented control. Third version (shipped) has a toggle with clear state — faster to use and less ambiguous about what\'s currently displayed.', i: 'The biggest lesson from testing: in financial products, users are more afraid of making mistakes than they are in any other product category. Designing for fear of error is very different from designing for ease of use — and most UX best practices assume the latter.' },
        ]} />
      </S>

      {/* 04 DESIGN SYSTEM */}
      <S num="04 · Design System">
        <H2>A system built for<br /><Em>trust, not aesthetics</Em></H2>
        <P>The design system for P3 Wealth wasn't designed to look good — it was designed to communicate reliability. Every component decision was filtered through one question: <B>does this make the user feel more or less confident in the platform?</B></P>
        <P mt>Button states matter more in financial products than almost anywhere else. A "disabled" button without explanation creates anxiety — "why can't I do this?" A "disabled" button with an inline explanation creates understanding — "I can't do this yet because X." We designed explicit states for every scenario where an action was unavailable.</P>
        <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, overflow: 'hidden', margin: '32px 0' }}>
          <Image src="/images/p3-wealth/02-P3-Wealth-Design-System.png" alt="Design System" width={1160} height={700} style={{ width: '100%', height: 'auto', display: 'block' }} />
          <div style={{ padding: '14px 20px', borderTop: `1px solid ${line}`, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['Input Fields — all states', 'Buttons — Light & Dark variants', 'Dropdowns', 'Alert Messages', 'Phone Number Components', 'Simplon Norm / Mono typography'].map(t => (
              <span key={t} style={{ fontSize: 11, color: dim, background: 'rgba(255,255,255,0.04)', border: `1px solid ${line}`, borderRadius: 100, padding: '3px 10px' }}>{t}</span>
            ))}
          </div>
        </div>
        <Think label="Why Simplon Mono for numbers">Most financial platforms use a sans-serif typeface for everything — including numerical data. We chose Simplon Mono specifically for financial values: fund amounts, yields, AUM figures. Monospaced numerals align vertically in tables, making it dramatically easier to compare values at a glance and scan for anomalies. <B>Typography in financial design is a functional decision, not a stylistic one.</B></Think>
      </S>

      {/* 05 FINAL DESIGN */}
      <S num="05 · Final Design — Live in Production">
        <H2>Screens that shipped<br /><Em>and are used by real investors</Em></H2>
        <P>The platform is live at platform.dev.p3wealth.co. Real investors are using it to manage real funds. The design decisions we made — the trust signals, the data attribution, the AUM/Yield toggle, the fund comparison table — are being validated (or not) by actual user behaviour, not just testing sessions.</P>
        <Img src="/images/p3-wealth/03-Dashboard.png" alt="Dashboard" cap='Investment dashboard — AUM overview ($48.2M), monthly statements table, performance graph with AUM/Yield toggle. "Data sourced from BlackRock · Last updated: 20.12.2023" is a first-class trust signal, not a footnote.' />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '32px 0' }}>
          <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
            <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,100,100,0.5)', marginBottom: 10 }}>First version of the graph</div>
            <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.7 }}>Tabbed interface — "AUM" tab and "Yield" tab. Tested poorly: users weren't sure if clicking would change something or navigate somewhere. The tab metaphor created ambiguity about state vs navigation.</div>
          </div>
          <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
            <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(100,200,100,0.5)', marginBottom: 10 }}>Shipped version</div>
            <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.7 }}><strong style={{ color: T, fontWeight: 500 }}>Toggle control with clear active state.</strong> Users immediately understood they were switching the view, not navigating away. One small component change that removed a consistent point of confusion in every testing session.</div>
          </div>
        </div>
        <Img src="/images/p3-wealth/04-Funds-page.png" alt="Funds page" cap="Funds page — structured comparison across Short-term, LEAF, LNAV, and Ultra Short Bond fund types. Bank transfer details modal with EUR/GBP/USD routing info per currency. Subscribe/Redeem flow accessible inline without page navigation." />
      </S>

      {/* 06 KEY DECISIONS */}
      <S num="06 · Key Design Decisions">
        <H2>What we solved and<br /><Em>how we got there</Em></H2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 32 }}>
          {[
            { wide: true, ic: '🪜', t: 'Multi-step onboarding with visible end', d: 'Rebuilt institution onboarding as a structured multi-step flow with clear progress indicators and contextual guidance. The key insight from testing: users weren\'t abandoning because the process was too long — they were abandoning because they couldn\'t see how long it would be. Adding a step counter to the first screen increased completion significantly. Multi-signatory flows were handled asynchronously — each party completes their section independently, removing the need to coordinate in real time.' },
            { wide: false, ic: '🔑', t: 'Permission-invisible role architecture', d: 'Each user role sees a purposeful interface, not an interface with things removed. Investors see investor flows. Managers see management tools. The permission system operates silently in the background — users never encounter "you don\'t have access to this."' },
            { wide: false, ic: '📈', t: 'Trust-first data presentation', d: 'BlackRock data attribution with timestamp is a primary UI element. The AUM/Yield graph was designed to show trends clearly without overstating precision — no decimal places on graph axes where they would create false confidence in the accuracy of visual interpolation.' },
            { wide: false, ic: '⚖️', t: 'Compliance as context, not interruption', d: 'FCA disclosures, risk disclaimers, and regulatory notices are integrated contextually — appearing when they\'re relevant to what the user is doing, not front-loaded in an onboarding wall of text. Tested both approaches: contextual disclosure had significantly higher recall in post-session questions.' },
          ].map(s => (
            <div key={s.t} style={{ gridColumn: s.wide ? 'span 2' : undefined, background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
              <div style={{ fontSize: 20, marginBottom: 12 }}>{s.ic}</div>
              <div style={{ fontSize: 16, fontWeight: 500, color: T, marginBottom: 8 }}>{s.t}</div>
              <div style={{ fontSize: 13, fontWeight: 300, color: sub, lineHeight: 1.75 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </S>

      {/* 07 IMPACT */}
      <S num="07 · Impact & What I Learned">
        <H2>Shipped, live,<br /><Em>and still learning</Em></H2>
        <P>The platform launched and is in active use. The design held up — but more importantly, the process held up. The decisions we made early in research about trust and legibility proved to be the right frame for every downstream design decision.</P>
        <Ins label="The thing I'd tell myself at the start">In regulated financial products, the user's relationship with risk is the central UX problem. Not the interface. Not the flows. The moment a user feels uncertain about what something means or what an action will do — that's a trust breakdown, and trust is harder to rebuild in financial products than anywhere else. Design for certainty first. Design for efficiency second.</Ins>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginTop: 44 }}>
          {[
            { n: '↑30', su: '%', d: 'Onboarding completion after redesigning multi-step institution setup with visible progress' },
            { n: '4', su: ' roles', d: 'User permission levels — each with a purposeful, tailored interface rather than a restricted one' },
            { n: '$48M', su: '+', d: 'AUM tracked live on the platform — sourced from BlackRock with daily update timestamps' },
            { n: '3', su: ' currencies', d: 'EUR, GBP, USD — full per-currency routing, cut-off times and bank details in the subscription flow' },
            { n: '✦', su: '', d: 'Platform live in production — real investors, real funds, real decisions made through a UI we designed' },
            { n: '0', su: '', d: 'Compliance violations in the design — every FCA requirement met contextually without degrading UX' },
          ].map(s => (
            <div key={s.n + s.su} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
              <div style={{ fontSize: 42, fontWeight: 600, letterSpacing: '-.03em', color: T, lineHeight: 1, marginBottom: 10 }}>{s.n}<span style={{ fontSize: 22, color: sub }}>{s.su}</span></div>
              <div style={{ fontSize: 12, fontWeight: 300, color: sub, lineHeight: 1.65 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </S>

      <NC title="IFREQ — Football Scouting Platform" subtitle="Get Analyzed, Get Scouted" href="/work/ifreq" />
    </>
  )
}

// helpers
function S({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid rgba(255,255,255,0.07)` }}>
      <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(210,204,194,0.22)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ display: 'block', width: 24, height: 1, background: 'rgba(255,255,255,0.13)' }} />{num}
      </div>
      {children}
    </div>
  )
}
function Steps({ items }: { items: { n: string; t: string; d: string; i: string }[] }) {
  return (
    <div style={{ marginTop: 44 }}>
      {items.map((s, i, a) => (
        <div key={s.n} style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: 20, padding: '32px 0', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: i === a.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
          <div style={{ fontSize: 12, fontWeight: 500, color: 'rgba(210,204,194,0.22)', paddingTop: 3 }}>{s.n}</div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 600, color: '#E5E0D8', marginBottom: 10, letterSpacing: '-.01em' }}>{s.t}</div>
            <div style={{ fontSize: 15, fontWeight: 300, color: 'rgba(210,204,194,0.5)', lineHeight: 1.8 }}>{s.d}</div>
            {s.i && <div style={{ marginTop: 14, fontSize: 14, fontWeight: 300, fontStyle: 'italic', color: 'rgba(210,204,194,0.4)', lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 14 }}>{s.i}</div>}
          </div>
        </div>
      ))}
    </div>
  )
}
function NC({ title, subtitle, href }: { title: string; subtitle: string; href: string }) {
  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ padding: '80px 52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1160, margin: '0 auto' }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(210,204,194,0.22)', marginBottom: 8 }}>Next case</div>
          <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-.02em', color: '#E5E0D8' }}>{title} →</div>
          <div style={{ fontSize: 14, color: 'rgba(210,204,194,0.5)', marginTop: 4 }}>{subtitle}</div>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(210,204,194,0.22)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 100, padding: '11px 24px' }}>← All cases</Link>
          <Link href={href} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid rgba(255,255,255,0.13)', borderRadius: 100, padding: '12px 28px', fontSize: 13, color: '#E5E0D8' }}>View case ↗</Link>
        </div>
      </div>
    </div>
  )
}
