import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import CaseNavbar from '@/components/CaseNavbar'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'IFREQ — Elvin Garaev',
  description: 'IFREQ — Get Analyzed, Get Scouted. Lead Product Designer across mobile app, scout CRM and marketing.',
}

const bg2 = '#1A1A18'
const T = '#E5E0D8'
const sub = 'rgba(210,204,194,0.5)'
const dim = 'rgba(210,204,194,0.22)'
const line = 'rgba(255,255,255,0.07)'
const line2 = 'rgba(255,255,255,0.13)'
const ACC = '#C8F135'

export default function IfreqPage() {
  return (
    <>
      <CaseNavbar title="Elvin Garaev" />

      {/* HERO */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '100px 52px 56px', borderBottom: `1px solid ${line}` }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
          {['Lead Designer', 'Sports Tech', 'Mobile App', 'Scout CRM', 'IFREQ, Belgium'].map(t => (
            <span key={t} style={{ fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', color: t === 'Lead Designer' ? ACC : sub, background: t === 'Lead Designer' ? `${ACC}18` : 'rgba(255,255,255,0.04)', border: `1px solid ${t === 'Lead Designer' ? `${ACC}40` : line}`, borderRadius: 100, padding: '4px 12px' }}>{t}</span>
          ))}
        </div>
        <h1 style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.05, color: T, marginBottom: 16, maxWidth: 820 }}>
          IFREQ — Get Analyzed,<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: sub }}>Get Scouted</em>
        </h1>
        <p style={{ fontSize: 16, fontWeight: 300, color: sub, maxWidth: 680, marginBottom: 40, lineHeight: 1.7 }}>A football scouting platform giving every player a chance to be discovered. Led design end-to-end across mobile app, coach tools, scout CRM and marketing — managing a team of designers, developers, and motion designers.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', border: `1px solid ${line}`, borderRadius: 14, overflow: 'hidden', maxWidth: 760 }}>
          {[{ l: 'Role', v: 'Lead Product Designer' }, { l: 'Timeline', v: '2025–2026' }, { l: 'Platform', v: 'iOS · Android · Web' }, { l: 'Company', v: 'IFREQ, Belgium' }].map((m, i, a) => (
            <div key={m.l} style={{ padding: '18px 22px', borderRight: i < a.length - 1 ? `1px solid ${line}` : 'none' }}>
              <div style={{ fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: dim, marginBottom: 5 }}>{m.l}</div>
              <div style={{ fontSize: 13, fontWeight: 500, color: T, lineHeight: 1.3 }}>{m.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* COVER — full bleed hero image from the case */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 52px' }}>
        <Image src="/images/ifreq/01-IFREQ-—-Turn-Data-Into-Progress.png" alt="IFREQ" width={1920} height={900} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 14 }} />
      </div>

      {/* APP STORE BLOCK */}
      <div style={{ padding: '64px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 12 }}>App Store — Marketing Screenshots</div>
        <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-.02em', color: T, marginBottom: 10 }}>Designed for App Store & Google Play</div>
        <p style={{ fontSize: 15, fontWeight: 300, color: sub, maxWidth: 600, marginBottom: 32, lineHeight: 1.7 }}>Created the full set of App Store screenshots communicating core product value — from player testing and card creation to pro club discovery.</p>
        <div style={{ borderRadius: 14, overflow: 'hidden', border: `1px solid ${line}` }}>
          <Image src="/images/ifreq/02-App-Store-Screenshots.png" alt="App Store Screenshots" width={1160} height={600} style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>

      {/* 01 OVERVIEW */}
      <S num="01 · Overview">
        <H2>Talent is everywhere.<br /><Em>Opportunity isn't.</Em></H2>
        <P>Every year thousands of talented footballers go unnoticed — not because they lack skill, but because no one with the right connections is watching. The traditional scouting system favours players who are already in academies, in the right cities, with the right parents. <B>IFREQ was built to change the odds.</B></P>
        <P mt>IFREQ was built to change the odds. The platform gives players a standardised evaluation — tested at real events, assessed across 5 dimensions, assigned a card with a global ranking. Professional clubs access a live database of rated players. <B>If you standardise the data, you democratise the opportunity.</B></P>
        <Ins label="Why this is a hard design problem">IFREQ isn't one product — it's three. A player app, a coach app, and a scout CRM. Each serves a completely different user type with different mental models, different contexts of use, and different definitions of success. Designing all three to feel like a coherent system — while being meaningfully distinct for each user — was the central design challenge.</Ins>
        <Stats items={[
          { n: '50+', d: 'Players on pro trials at clubs like PSG, Bayern Munich, FC Porto. 20+ officially signed.' },
          { n: '+32%', d: 'User activation after onboarding redesign — validated through Mixpanel funnel analysis' },
          { n: '−27%', d: 'Churn reduction through improved user journey and AI-driven training module personalisation' },
        ]} />
      </S>

      {/* 02 ECOSYSTEM */}
      <S num="02 · Product Ecosystem & My Role">
        <H2>Three products, one team,<br /><Em>one design lead</Em></H2>
        <P>As Lead Product Designer, I owned the full design process end-to-end. I also managed a cross-functional team of designers, developers, motion designers, and graphic designers. <B>How do you keep visual consistency and UX coherence when multiple people are working on different parts of the same system simultaneously?</B></P>
        <P mt>The answer was the design system. Before building any product screens, we invested time in defining the token layer — colours, typography, spacing, component states. This meant that even when different designers worked on different flows, the output felt like one product.</P>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginTop: 32 }}>
          {[
            { ic: '⚽', t: 'Player App', d: 'Players register, attend test events, get evaluated, receive their performance card. Track rankings, view video replays, share profile with clubs. Used on personal phones, often on the go.' },
            { ic: '🎯', t: 'Coach App', d: 'Coaches manage test events on the pitch in real time — create sessions, confirm players, capture profile photos with AI alignment, log results. Used in physical environments with limited attention.' },
            { ic: '📊', t: 'Scout Dashboard', d: 'Professional clubs browse rated players, filter by age/position/score, compare candidates, export data. Used in offices by people who make recruitment decisions worth millions.' },
          ].map(r => (
            <div key={r.t} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
              <div style={{ fontSize: 24, marginBottom: 14 }}>{r.ic}</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: T, marginBottom: 8 }}>{r.t}</div>
              <div style={{ fontSize: 13, fontWeight: 300, color: sub, lineHeight: 1.75 }}>{r.d}</div>
            </div>
          ))}
        </div>
      </S>

      {/* 03 RESEARCH */}
      <S num="03 · Research — We Had to Understand Three Completely Different Contexts">
        <H2>We had to understand<br /><Em>three completely different contexts</Em></H2>
        <P>IFREQ wasn't built to change rules — it was built to change what's possible. If you standardise the data, you democratise the opportunity. <B>These context differences dictated design decisions that weren't obvious from research alone.</B></P>
        <P mt>Three context differences shape design decisions that aren't obvious from research alone. The player app needed to be emotional and motivating. The coach app needed to be fast and error-tolerant. The scout dashboard needed to be dense and filterable.</P>
        <Img src="/images/ifreq/03-Customer-Journey-Map.png" alt="Customer Journey Map" cap="Customer Journey Map — 9 stages from Onboarding to Payment. Steps, Actions, Goals, Emotions, Pains and Opportunities mapped across the full player journey from discovery to test booking." />
        <Img src="/images/ifreq/04-User-Flow.png" alt="User Flow" cap="User flow diagram — complete registration and test booking flow. Split paths for new users and returning players, with Manager and Customer action tracks mapped separately." />
        <Think label="What the CJM revealed — and 'fear of mistake'">
          The CJM showed something we didn't expect: the biggest emotional low point in the player journey wasn't the test itself. It was the payment screen. Players felt <B>stress and "fear of mistake"</B> — not about the amount, but about whether they were registering correctly.<br /><br />
          This changed our approach entirely. We added: an Order Preview screen before payment, a real-time "Reservation Confirmed" state, and an optional WhatsApp group link so players felt connected to something real.
        </Think>
        <Quote author="— Player interview, IFREQ research session, Belgium">"I've been paying for 12 years and never had anyone evaluate me properly. IFREQ gave me a number, a card, and now a trial at a real club."</Quote>
      </S>

      {/* 04 ONBOARDING */}
      <S num="04 · Onboarding — A 32% Activation Increase">
        <H2>A 32% activation increase<br /><Em>from one redesign</Em></H2>
        <P>The original onboarding had too many steps, unclear value propositions at each stage, and no social login options. Players were dropping off before they ever saw the product.</P>
        <P mt>The redesign was driven by two insights. First: players needed to feel the product's value promise before they committed to registering. <B>The onboarding screens became marketing screens as much as functional screens.</B> Second: adding a progress indicator had a bigger impact than removing screens.</P>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '32px 0' }}>
          <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
            <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,100,100,0.5)', marginBottom: 10 }}>Original onboarding problem</div>
            <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.7 }}>Generic welcome screens with no clear value statement. Email-only registration with no social login. No progress indicator. Players had no idea how long the process would take and dropped off mid-flow.</div>
          </div>
          <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
            <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(100,200,100,0.5)', marginBottom: 10 }}>What we changed</div>
            <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.7 }}><strong style={{ color: T, fontWeight: 500 }}>Three emotionally resonant welcome screens</strong> — "Prove you're the best", "Understand your game", "Stand out from the crowd" — before the registration form. Social login added. Progress indicator from screen 1. Result: +32% activation.</div>
          </div>
        </div>
        <Img src="/images/ifreq/05-Onboarding-Flow.png" alt="Onboarding Flow" cap="Redesigned onboarding — 3 value-driven welcome screens → Get Started → Email/Social auth → Email verification → Phone number → Terms → Dashboard. Full validation and error recovery states." />
        <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 32, margin: '32px 0' }}>
          <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 12 }}>The enrolling onboarding marketing screens as more as functional</div>
          <div style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.85, color: sub }}>The enroling onboarding marketing screens as more as functional. Three emotionally resonant screens — about the product's value promise — before the registration form had a bigger impact than any individual UX fix.</div>
        </div>
      </S>

      {/* 05 PLAYER EXPERIENCE */}
      <S num="05 · Player Experience — Your Identity, Your Card">
        <H2>Your identity, your card —<br /><Em>designed to feel earned</Em></H2>
        <P>The player profile is the product's emotional centrepiece. The moment a player sees their card for the first time — their photo, their scores, their radar chart — needs to feel significant. <B>This is a player's digital identity in football.</B></P>
        <P mt>We took direct inspiration from FIFA Ultimate Team — not the mechanics, but the emotional register. The radar chart across 6 dimensions was designed to be readable at a glance: players should immediately see their strengths and weaknesses without reading numbers.</P>
        <Img src="/images/ifreq/06-Player-Profile.png" alt="Player Profile" cap="Player profile — radar chart (Speed, Accuracy, Defending, Passing, Finishing, Cognitive), video replay with AI coaching feedback, shareable card design." />
        <Img src="/images/ifreq/07-Test-Flow.png" alt="Test Flow" cap="Test Flow — coach confirms player list, fills data, captures profile photo using AI face-framing tool, then generates the player card automatically." />
      </S>

      {/* 06 BOOKING */}
      <S num="06 · Booking & Payment — Test Flow · Test Booking · Packages">
        <H2>The moment players almost<br /><Em>didn't sign up</Em></H2>
        <P>The CJM showed us that payment was the highest-anxiety moment in the player journey. Players weren't afraid of the cost — they were afraid of making a mistake. Wrong date, wrong package, wrong personal data. They wanted certainty before committing.</P><br />
        <P>We redesigned the checkout flow specifically around this anxiety.<B>Every step before payment is a confirmation, not a form.</B>The Order Preview screen was added explicitly to give players one complete view of everything — name, email, date, package, price — before any money moves. The Voucher field was kept visible on the same screen because we knew from research that many players had received vouchers from their clubs and were anxious about not finding the right place to enter them.</P>
        <Img src="/images/ifreq/08-Test-Booking.png" alt="Test Booking" cap="Test booking — event list with filters, session detail with countdown timer, player data form with contextual validation." />
        <Img src="/images/ifreq/09-Payment-Flow.png" alt="Payment Flow" cap="Payment — Standard €500 / Plus (sold out) / Pro €1500. Order Preview with inline voucher entry. Apple Pay, Google Pay, Klarna, Bancontact and card." />
      </S>
      {/* 07 PRICING */}
      <S num="07 · Pricing — Three Tiers, One Principle">
        <H2>Pricing designed to<br /><Em>convert at every level</Em></H2>
        <P>The three-tier package structure wasn't just a business decision — it was a design decision. <B>We needed to make IFREQ accessible to players at different stages of their development</B> while creating a natural upgrade path as their ambition and confidence grew.</P>
        <Think label='Why Plus was "sold out" rather than just available'>
          The "Plus sold out" state was a deliberate design choice. It creates scarcity that makes the Standard tier feel like a reasonable entry point and the Pro tier feel like a premium worth unlocking. We tested this against a version where all tiers were equally available — the sold-out version had a higher Pro tier conversion rate without any change to pricing. <B>Scarcity in pricing UI is a well-documented phenomenon, but it has to be used honestly.</B> The Plus tier was genuinely capacity-limited at real events.
        </Think>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginTop: 32 }}>
          {[
            { badge: 'Standard', name: 'Standard', price: '€500', period: '/ test', features: ['Basic AI feedback after session', 'Individual performance report', 'AI video analysis', 'Test session participation', 'Progress tracking'], pro: false },
            { badge: 'Plus', name: 'Plus', price: '€1000', period: '/ test', features: ['Everything in Standard', 'Priority scout visibility', 'Comparative analytics', 'Personalised improvement plan', 'Direct club recommendation'], pro: false },
            { badge: 'Pro', name: 'Pro', price: '€1500', period: '/ 2 tests', features: ['Everything in Plus', '2 IFREQ test sessions', 'Top placement in scout dashboard', 'Direct club contact facilitation', 'Progress tracking across sessions'], pro: true },
          ].map(p => (
            <div key={p.badge} style={{ background: p.pro ? 'rgba(200,241,53,0.06)' : bg2, border: `1px solid ${p.pro ? 'rgba(200,241,53,0.25)' : line}`, borderRadius: 14, padding: 28 }}>
              {/* Badge pill */}
              <div style={{ display: 'inline-block', background: ACC, color: '#111110', fontSize: 11, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', borderRadius: 100, padding: '3px 10px', marginBottom: 16 }}>{p.badge}</div>
              {/* Name */}
              <div style={{ fontSize: 20, fontWeight: 600, color: T, marginBottom: 4 }}>{p.name}</div>
              {/* Price */}
              <div style={{ fontSize: 36, fontWeight: 700, color: T, letterSpacing: '-.02em', marginBottom: 20 }}>
                {p.price}<span style={{ fontSize: 14, fontWeight: 400, color: sub }}> {p.period}</span>
              </div>
              {/* Features with checkmarks */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {p.features.map(f => (
                  <li key={f} style={{ fontSize: 13, fontWeight: 300, color: sub, lineHeight: 1.7, display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 4 }}>
                    <span style={{ color: ACC, marginTop: 1, flexShrink: 0 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </S>

      {/* 08 SCOUT CRM */}
      <S num="08 · Scout CRM — Designing for Experts">
        <H2>Scouts think in comparisons.<br /><Em>The dashboard had to too.</Em></H2>
        <P>The scout dashboard was the most technically complex product in the ecosystem — and the most different from the player app in terms of user expectations. <B>Scouts are professional evaluators.</B> They don't need the interface to explain football to them. They need the interface to get out of their way and let them compare players efficiently.</P>
        <P mt>The key design decision was the comparison modal. Initial versions showed players side by side in a simple table. Testing with scout users revealed they wanted a radar chart comparison — not because it was more "visual", but because it let them assess multi-dimensional fit at a glance. A centre-forward candidate who scores high on Physical and Technical but low on Tactical looks completely different from one who scores evenly across all five dimensions. <B>The radar chart makes that difference immediately legible.</B></P>
        <Img src="/images/ifreq/04-User-Flow.png" alt="User flow wireframes" cap="Onboarding and booking flow wireframes — Section 6 user flow mapped across 8 steps: Onboarding/Welcome → Get Started → Phone Number → Get Notified → Main Dashboard → Event Detail → Player Data Form → Order Preview → Payment." />
        <Img src="/images/ifreq/10-Scout-Dashboard.png" alt="Scout Dashboard" cap='Scout CRM — player database with Score, Technical, Tactical, Mental, Physical columns. Filter panel (Category, Country, Position, Age Group). Player comparison modal with side-by-side radar charts. "Hello, FC Barcelona!" personalised greeting.' />
      </S>

      {/* 09 DESIGN SYSTEM */}
      <S num="09 · Design System">
        <H2>The foundation that made<br /><Em>three products feel like one</Em></H2>
        <P>The IFREQ design system was the infrastructure that allowed a team of multiple designers and developers to work in parallel without creating visual inconsistency. <B>The most important decision in the design system wasn't aesthetic — it was the colour token structure.</B></P>
        <P mt>We chose a lime (#C8F135) primary that works across both dark backgrounds (player app, coach app, scout dashboard) and light contexts (marketing website). This meant every component in the system needed to be tested in both contexts — a constraint that forced us to be more rigorous about contrast and accessibility than we otherwise might have been.</P>
        <div style={{ borderRadius: 14, overflow: 'hidden', border: `1px solid ${line}`, margin: '32px 0' }}>
          <Image src="/images/ifreq/11-IFREQ-Inputs---Buttons.png" alt="Inputs & Buttons" width={1160} height={700} style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
        <div style={{ fontSize: 12, fontWeight: 300, color: dim, marginBottom: 32, lineHeight: 1.6 }}>Inputs & Buttons — all states: default, hover, active, disabled, error. Search fields, tag filters, sort controls, and primary/secondary button variants in lime and dark themes. Logo variations and main menu states (Profile / Test / Ranking / Admin tabs).</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            { src: '/images/ifreq/12-Color---Typography.png', alt: 'Color & Typography', cap: 'Color styles — Primary lime scale (900→100), Secondary dark scale, Success green. Typography — Aeonik Light, Regular, Medium across Label, Body, Headline and Title sizes.' },
            { src: '/images/ifreq/13-Icon-Library.png', alt: 'Icon Library', cap: '500+ custom icons across sports, UI, navigation and tool categories. Custom icons were created specifically for test modules not covered by standard icon libraries.' },
          ].map(img => (
            <div key={img.alt}>
              <div style={{ borderRadius: 14, overflow: 'hidden', border: `1px solid ${line}`, background: bg2 }}>
                <Image src={img.src} alt={img.alt} width={580} height={400} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <div style={{ fontSize: 12, fontWeight: 300, color: dim, marginTop: 10, lineHeight: 1.6 }}>{img.cap}</div>
            </div>
          ))}
        </div>
      </S>

      {/* 10 IMPACT */}
      <S num="10 · Impact & Reflection">
        <H2>What the numbers say<br /><Em>and what they don't</Em></H2>
        <P>The metrics are good. But the number I'm most proud of isn't on this list. It's the 20+ players who have officially signed with professional clubs. <B>That's the outcome this product was built for.</B> The activation rate and churn metrics are important to the business. The signed players are important to me as a designer.</P>
        <Ins label="What I'd change">We designed the player experience almost entirely around the test and evaluation flow. We underinvested in the post-test experience — what happens after a player has their card and score, but hasn't been contacted by any club yet? That period of waiting is psychologically difficult, and we left players with very little to do or engage with. The next design sprint should be entirely focused on making the time between tests meaningful.</Ins>
        {/* Impact grid with lime numbers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginTop: 44 }}>
          {[
            { n: '+32', su: '%', d: 'User activation — onboarding redesign with value-driven welcome screens and social login' },
            { n: '−27', su: '%', d: 'Churn reduction through improved journey and AI-driven module personalisation' },
            { n: '+41', su: '%', d: 'Training module completion via Mixpanel analytics and Yemi AI guidance' },
            { n: '+35', su: '%', d: 'Scout productivity after CRM launch with player profiles, evaluations and video tools' },
            { n: '−50', su: '%', d: 'Reporting time cut through AI workflow automation and automated session tagging' },
            { n: '50', su: '+', d: 'Players on pro trials. 20+ officially signed. The number that matters most.' },
          ].map((s, i) => (
            <div key={s.n + s.su} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
              <div style={{ fontSize: 42, fontWeight: 600, letterSpacing: '-.03em', color: i < 3 ? '#b7df3b' : T, lineHeight: 1, marginBottom: 10 }}>
                {s.n}<span style={{ fontSize: 22, color: i < 3 ? '#b7df3b' : sub }}>{s.su}</span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 300, color: sub, lineHeight: 1.65 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </S>

      <NC title="Safe — Goal-Based Savings" subtitle="inside Ukrsib Online" href="/work/safe" />


    </>
  )
}

// helpers
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
function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.3, color: '#E5E0D8', marginBottom: 20, maxWidth: 680 }}>{children}</h2>
}
function Em({ children }: { children: React.ReactNode }) {
  return <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(210,204,194,0.5)' }}>{children}</em>
}
function P({ children, mt }: { children: React.ReactNode; mt?: boolean }) {
  return <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.9, color: 'rgba(210,204,194,0.5)', maxWidth: '100%', marginTop: mt ? 20 : 0 }}>{children}</p>
}
function B({ children }: { children: React.ReactNode }) {
  return <strong style={{ color: '#E5E0D8', fontWeight: 500 }}>{children}</strong>
}
function Ins({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: '2px solid rgba(255,255,255,0.2)', padding: '20px 28px', margin: '32px 0', background: 'rgba(255,255,255,0.02)', borderRadius: '0 10px 10px 0' }}>
      <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: ACC, marginBottom: 8 }}>{label}</div>
      <div style={{ fontSize: 16, fontWeight: 300, fontStyle: 'italic', color: '#E5E0D8', lineHeight: 1.7 }}>{children}</div>
    </div>
  )
}
function Think({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ background: '#1A1A18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 32, margin: '32px 0' }}>
      <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(210,204,194,0.22)', marginBottom: 12 }}>{label}</div>
      <div style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.85, color: 'rgba(210,204,194,0.5)' }}>{children}</div>
    </div>
  )
}
function Quote({ author, children }: { author: string; children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: '3px solid rgba(255,255,255,0.2)', padding: '24px 28px', margin: '32px 0' }}>
      <div style={{ fontSize: 18, fontWeight: 300, fontStyle: 'italic', color: '#E5E0D8', lineHeight: 1.65, marginBottom: 10 }}>{children}</div>
      <div style={{ fontSize: 12, color: 'rgba(210,204,194,0.22)' }}>{author}</div>
    </div>
  )
}
function Img({ src, alt, cap }: { src: string; alt: string; cap: string }) {
  return (
    <>
      <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', margin: '32px 0' }}>
        <Image src={src} alt={alt} width={1160} height={700} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
      {cap && <div style={{ fontSize: 12, fontWeight: 300, color: 'rgba(210,204,194,0.22)', marginTop: 10, lineHeight: 1.6 }}>{cap}</div>}
    </>
  )
}
function Stats({ items }: { items: { n: string; d: string }[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${items.length},1fr)`, gap: 2, marginTop: 44 }}>
      {items.map(s => (
        <div key={s.n} style={{ background: '#1A1A18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '30px 26px' }}>
          <div style={{ fontSize: 44, fontWeight: 600, letterSpacing: '-.04em', color: ACC, lineHeight: 1, marginBottom: 8 }}>{s.n}</div>
          <div style={{ fontSize: 12, fontWeight: 300, color: 'rgba(210,204,194,0.5)', lineHeight: 1.6 }}>{s.d}</div>
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
