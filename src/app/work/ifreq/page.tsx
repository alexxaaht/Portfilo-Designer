import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import CaseNavbar from '@/components/CaseNavbar'
import FadeUp from '@/components/FadeUp'
import CaseFooter from '@/components/CaseFooter'


export const metadata: Metadata = {
  title: 'IFREQ — Elvin Garaev',
  description: 'IFREQ — Get Analyzed, Get Scouted. Lead Product Designer across mobile app, scout CRM and marketing.',
}

// ОБНОВЛЕННЫЕ ЦВЕТА (ЯРЧЕ)
const bg2 = '#1A1A18'
const T = '#F2F0EC' // Почти белый
const sub = 'rgba(220,216,208,0.8)' // 80% яркости (был 50%)
const dim = 'rgba(210,204,194,0.5)'  // 50% яркости (был 22%)
const line = 'rgba(255,255,255,0.08)'
const line2 = 'rgba(255,255,255,0.18)'
const ACC = '#C8F135'

export default function IfreqPage() {
  return (
    <>
      <CaseNavbar title="Elvin Garaev" />

      {/* HERO */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '120px 52px 64px', borderBottom: `1px solid ${line}` }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 32, flexWrap: 'wrap' }}>
          {['Lead Designer', 'Sports Tech', 'Mobile App', 'Scout CRM', 'IFREQ, Belgium'].map(t => (
            <span key={t} style={{ fontSize: 12, letterSpacing: '.06em', textTransform: 'uppercase', color: t === 'Lead Designer' ? ACC : sub, background: t === 'Lead Designer' ? `${ACC}18` : 'rgba(255,255,255,0.05)', border: `1px solid ${t === 'Lead Designer' ? `${ACC}40` : line}`, borderRadius: 100, padding: '5px 14px' }}>{t}</span>
          ))}
        </div>
        <h1 style={{ fontSize: 'clamp(40px,6vw,68px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.05, color: T, marginBottom: 20, maxWidth: 850 }}>
          IFREQ — Get Analyzed,<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: sub }}>Get Scouted</em>
        </h1>
        <p style={{ fontSize: 18, fontWeight: 300, color: sub, maxWidth: 720, marginBottom: 48, lineHeight: 1.7 }}>A football scouting platform giving every player a chance to be discovered. Led design end-to-end across mobile app, coach tools, scout CRM and marketing — managing a team of designers, developers, and motion designers.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', border: `1px solid ${line}`, borderRadius: 16, overflow: 'hidden', width: '100%' }}>
          {[{ l: 'Role', v: 'Lead Product Designer' }, { l: 'Timeline', v: '2025–2026' }, { l: 'Platform', v: 'iOS · Android · Web' }, { l: 'Company', v: 'IFREQ, Belgium' }].map((m, i, a) => (
            <div key={m.l} style={{ padding: '22px 26px', borderRight: i < a.length - 1 ? `1px solid ${line}` : 'none' }}>
              <div style={{ fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: dim, marginBottom: 6 }}>{m.l}</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: T, lineHeight: 1.3 }}>{m.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* COVER */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 52px' }}>
        <Image src="/images/ifreq/01-IFREQ-—-Turn-Data-Into-Progress.png" alt="IFREQ" width={1920} height={900} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 16 }} priority />
      </div>

      {/* APP STORE BLOCK */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <div style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 16 }}>App Store — Marketing Screenshots</div>
        <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-.02em', color: T, marginBottom: 12 }}>Designed for App Store & Google Play</div>
        <p style={{ fontSize: 17, fontWeight: 300, color: sub, maxWidth: 640, marginBottom: 40, lineHeight: 1.7 }}>Created the full set of App Store screenshots communicating core product value — from player testing and card creation to pro club discovery.</p>
        <div style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${line}` }}>
          <Image src="/images/ifreq/02-App-Store-Screenshots.png" alt="App Store Screenshots" width={1160} height={600} style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>

      {/* 01 OVERVIEW */}
      <S num="01 · Overview">
        <H2>Talent is everywhere.<br /><Em>Opportunity isn't.</Em></H2>
        <P>Every year thousands of talented footballers go unnoticed — not because they lack skill, but because no one with the right connections is watching. The traditional scouting system favours players who are already in academies, in the right cities, with the right parents. <B>IFREQ was built to change the odds.</B></P>
        <P mt>The platform gives players a standardised evaluation — tested at real events, assessed across 5 dimensions, assigned a card with a global ranking. Professional clubs access a live database of rated players. <B>If you standardise the data, you democratise the opportunity.</B></P>
        <Ins label="Why this is a hard design problem">IFREQ isn't one product — it's three. A player app, a coach app, and a scout CRM. Each serves a completely different user type with different mental models, different contexts of use, and different definitions of success.</Ins>
        <Stats items={[
          { n: '50+', d: 'Players on pro trials at clubs like PSG, Bayern Munich, FC Porto. 20+ officially signed.' },
          { n: '+32%', d: 'User activation after onboarding redesign — validated through Mixpanel funnel analysis' },
          { n: '−27%', d: 'Churn reduction through improved user journey and AI-driven training personalisation' },
        ]} />
      </S>

      {/* 02 ECOSYSTEM */}
      <S num="02 · Product Ecosystem & My Role">
        <H2>Three products, one team,<br /><Em>one design lead</Em></H2>
        <P>As Lead Product Designer, I owned the full design process end-to-end. I also managed a cross-functional team of designers, developers, motion designers, and graphic designers. <B>How do you keep visual consistency and UX coherence when multiple people are working on different parts of the system?</B></P>
        <P mt>The answer was the design system. Before building any product screens, we invested time in defining the token layer — colours, typography, spacing, component states.</P>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 40 }}>
          {[
            { ic: '⚽', t: 'Player App', d: 'Players register, attend test events, get evaluated, receive their performance card. Track rankings, view video replays, share profile with clubs.' },
            { ic: '🎯', t: 'Coach App', d: 'Coaches manage test events on the pitch in real time — create sessions, confirm players, capture profile photos with AI alignment.' },
            { ic: '📊', t: 'Scout Dashboard', d: 'Professional clubs browse rated players, filter by age/position/score, compare candidates, export data. Used in offices by decision makers.' },
          ].map(r => (
            <div key={r.t} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: 32 }}>
              <div style={{ fontSize: 26, marginBottom: 16 }}>{r.ic}</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: T, marginBottom: 10 }}>{r.t}</div>
              <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.75 }}>{r.d}</div>
            </div>
          ))}
        </div>
      </S>

      {/* 03 RESEARCH */}
      <S num="03 · Research — Different Contexts">
        <H2>We had to understand<br /><Em>three completely different contexts</Em></H2>
        <P>IFREQ wasn't built to change rules — it was built to change what's possible. If you standardise the data, you democratise the opportunity. <B>These context differences dictated design decisions.</B></P>
        <P mt>The player app needed to be emotional and motivating. The coach app needed to be fast and error-tolerant. The scout dashboard needed to be dense and filterable.</P>
        <Img src="/images/ifreq/03-Customer-Journey-Map.png" alt="Customer Journey Map" cap="Customer Journey Map — 9 stages from Onboarding to Payment. Steps, Actions, Goals, Emotions, Pains and Opportunities." />
        <Img src="/images/ifreq/04-User-Flow.png" alt="User Flow" cap="User flow diagram — complete registration and test booking flow." />
        <Think label="What the CJM revealed">
          The CJM showed something we didn't expect: the biggest emotional low point in the player journey wasn't the test itself. It was the payment screen. Players felt <B>stress and "fear of mistake"</B> — about whether they were registering correctly.
        </Think>
        <Quote author="Player interview, IFREQ research session">"I've been paying for 12 years and never had anyone evaluate me properly. IFREQ gave me a number, a card, and now a trial at a real club."</Quote>
      </S>

      {/* 04 ONBOARDING */}
      <S num="04 · Onboarding — 32% Increase">
        <H2>A 32% activation increase<br /><Em>from one redesign</Em></H2>
        <P>The original onboarding had too many steps and no social login options. Players were dropping off before they ever saw the product.</P>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '40px 0' }}>
          <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: 32 }}>
            <div style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,100,100,0.7)', marginBottom: 12 }}>Original onboarding problem</div>
            <div style={{ fontSize: 15, fontWeight: 300, color: sub, lineHeight: 1.7 }}>Generic welcome screens with no clear value statement. Email-only registration. No progress indicator. Players dropped off mid-flow.</div>
          </div>
          <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: 32 }}>
            <div style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(100,200,100,0.7)', marginBottom: 12 }}>What we changed</div>
            <div style={{ fontSize: 15, fontWeight: 300, color: sub, lineHeight: 1.7 }}><B>Three emotionally resonant welcome screens</B> — Social login added. Progress indicator from screen 1. Result: +32% activation.</div>
          </div>
        </div>
        <Img src="/images/ifreq/05-Onboarding-Flow.png" alt="Onboarding Flow" cap="Redesigned onboarding flow — from welcome screens to main dashboard." />
      </S>

      {/* 05 PLAYER EXPERIENCE */}
      <S num="05 · Player Experience">
        <H2>Your identity, your card —<br /><Em>designed to feel earned</Em></H2>
        <P>The player profile is the product's emotional centrepiece. The moment a player sees their card for the first time needs to feel significant. <B>This is a player's digital identity in football.</B></P>
        <Img src="/images/ifreq/06-Player-Profile.png" alt="Player Profile" cap="Player profile — radar chart, video replay with AI feedback, shareable card design." />
        <Img src="/images/ifreq/07-Test-Flow.png" alt="Test Flow" cap="Test Flow — coach captures profile photo using AI face-framing tool." />
      </S>

      {/* 06 BOOKING */}
      <S num="06 · Booking & Payment">
        <H2>The moment players almost<br /><Em>didn't sign up</Em></H2>
        <P>We redesigned the checkout flow specifically around "fear of mistake". <B>Every step before payment is a confirmation, not a form.</B> The Order Preview screen was added explicitly to give players one complete view before any money moves.</P>
        <Img src="/images/ifreq/08-Test-Booking.png" alt="Test Booking" cap="Test booking — event list with filters, session detail with countdown timer." />
        <Img src="/images/ifreq/09-Payment-Flow.png" alt="Payment Flow" cap="Payment — Order Preview with inline voucher entry. Apple Pay, Google Pay, Klarna." />
      </S>

      {/* 07 PRICING */}
      <S num="07 · Pricing — Three Tiers">
        <H2>Pricing designed to<br /><Em>convert at every level</Em></H2>
        <P>The three-tier package structure wasn't just a business decision — it was a design decision. <B>We needed to make IFREQ accessible at different stages.</B></P>
        <Think label='Scarcity in pricing'>
          The "Plus sold out" state creates scarcity that makes the Standard tier feel reasonable and the Pro tier feel like a premium worth unlocking.
        </Think>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 40 }}>
          {[
            { badge: 'Standard', name: 'Standard', price: '€500', period: '/ test', features: ['Basic AI feedback', 'Performance report', 'AI video analysis', 'Test participation'], pro: false },
            { badge: 'Plus', name: 'Plus', price: '€1000', period: '/ test', features: ['Everything in Standard', 'Priority scout visibility', 'Comparative analytics', 'Direct recommendation'], pro: false },
            { badge: 'Pro', name: 'Pro', price: '€1500', period: '/ 2 tests', features: ['Everything in Plus', '2 IFREQ sessions', 'Top placement in CRM', 'Direct club contact'], pro: true },
          ].map(p => (
            <div key={p.badge} style={{ background: p.pro ? 'rgba(200,241,53,0.06)' : bg2, border: `1px solid ${p.pro ? 'rgba(200,241,53,0.3)' : line}`, borderRadius: 16, padding: 32 }}>
              <div style={{ display: 'inline-block', background: ACC, color: '#111110', fontSize: 12, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', borderRadius: 100, padding: '4px 12px', marginBottom: 20 }}>{p.badge}</div>
              <div style={{ fontSize: 22, fontWeight: 600, color: T, marginBottom: 6 }}>{p.name}</div>
              <div style={{ fontSize: 40, fontWeight: 700, color: T, letterSpacing: '-.02em', marginBottom: 24 }}>
                {p.price}<span style={{ fontSize: 16, fontWeight: 400, color: sub }}> {p.period}</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {p.features.map(f => (
                  <li key={f} style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.7, display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 6 }}>
                    <span style={{ color: ACC, marginTop: 2, flexShrink: 0 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </S>

      {/* 08 SCOUT CRM */}
      <S num="08 · Scout CRM">
        <H2>Scouts think in comparisons.<br /><Em>The dashboard had to too.</Em></H2>
        <P>The scout dashboard was the most technically complex product. <B>Scouts are professional evaluators.</B> They need the interface to get out of their way.</P>
        <Img src="/images/ifreq/10-Scout-Dashboard.png" alt="Scout Dashboard" cap='Scout CRM — player database with filters and side-by-side radar chart comparison.' />
      </S>

      {/* 09 DESIGN SYSTEM */}
      <S num="09 · Design System">
        <H2>The foundation that made<br /><Em>three products feel like one</Em></H2>
        <P>The IFREQ design system allowed a team to work in parallel. <B>The most important decision was the colour token structure.</B></P>
        <div style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${line}`, margin: '40px 0' }}>
          <Image src="/images/ifreq/11-IFREQ-Inputs---Buttons.png" alt="Inputs & Buttons" width={1160} height={700} style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            { src: '/images/ifreq/12-Color---Typography.png', alt: 'Color & Typography', cap: 'Color styles and Aeonik typography scale.' },
            { src: '/images/ifreq/13-Icon-Library.png', alt: 'Icon Library', cap: '500+ custom icons specifically for football test modules.' },
          ].map(img => (
            <div key={img.alt}>
              <div style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${line}`, background: bg2 }}>
                <Image src={img.src} alt={img.alt} width={580} height={400} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <div style={{ fontSize: 14, fontWeight: 300, color: dim, marginTop: 14, lineHeight: 1.6 }}>{img.cap}</div>
            </div>
          ))}
        </div>
      </S>

      {/* 10 IMPACT */}
      <S num="10 · Impact & Reflection">
        <H2>What the numbers say<br /><Em>and what they don't</Em></H2>
        <P>The metrics are good, but I'm most proud of the 20+ players who officially signed with professional clubs. <B>That's the outcome this product was built for.</B></P>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 52 }}>
          {[
            { n: '+32', su: '%', d: 'User activation — onboarding redesign with value-driven screens' },
            { n: '−27', su: '%', d: 'Churn reduction through improved journey and personalisation' },
            { n: '+41', su: '%', d: 'Training module completion via AI guidance' },
            { n: '+35', su: '%', d: 'Scout productivity after CRM launch' },
            { n: '−50', su: '%', d: 'Reporting time cut through AI workflow automation' },
            { n: '50', su: '+', d: 'Players on pro trials. 20+ officially signed.' },
          ].map((s, i) => (
            <div key={s.n + s.su} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: 32 }}>
              <div style={{ fontSize: 48, fontWeight: 600, letterSpacing: '-.03em', color: i < 3 ? '#C8F135' : T, lineHeight: 1, marginBottom: 12 }}>
                {s.n}<span style={{ fontSize: 24, color: i < 3 ? '#C8F135' : sub }}>{s.su}</span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.65 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </S>

      <CaseFooter nextTitle="Safe" nextSubtitle="Goal-Based Savings inside Ukrsib Online" nextHref="/work/safe" />

    </>
  )
}

// ХЕЛПЕРЫ (ОТРЕФАКТОРЕНЫ ДЛЯ РАЗМЕРА И ЯРКОСТИ)

function S({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <FadeUp>
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: dim, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'block', width: 30, height: 1, background: 'rgba(255,255,255,0.2)' }} />{num}
        </div>
        {children}
      </div>
    </FadeUp>
  )
}
function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: 32, fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.25, color: '#F2F0EC', marginBottom: 24, maxWidth: 720 }}>{children}</h2>
}
function Em({ children }: { children: React.ReactNode }) {
  return <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(210,204,194,0.75)' }}>{children}</em>
}
function P({ children, mt }: { children: React.ReactNode; mt?: boolean }) {
  return <p style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.8, color: 'rgba(220,216,208,0.85)', marginTop: mt ? 24 : 0 }}>{children}</p>
}
function B({ children }: { children: React.ReactNode }) {
  return <strong style={{ color: '#F2F0EC', fontWeight: 500 }}>{children}</strong>
}
function Ins({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: '2px solid rgba(255,255,255,0.3)', padding: '24px 32px', margin: '40px 0', background: 'rgba(255,255,255,0.03)', borderRadius: '0 12px 12px 0' }}>
      <div style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: ACC, marginBottom: 10 }}>{label}</div>
      <div style={{ fontSize: 18, fontWeight: 300, fontStyle: 'italic', color: '#F2F0EC', lineHeight: 1.7 }}>{children}</div>
    </div>
  )
}
function Think({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ background: '#1A1A18', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 36, margin: '40px 0' }}>
      <div style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 16 }}>{label}</div>
      <div style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.8, color: 'rgba(210,204,194,0.8)' }}>{children}</div>
    </div>
  )
}
function Quote({ author, children }: { author: string; children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: '3px solid rgba(255,255,255,0.3)', padding: '28px 36px', margin: '40px 0' }}>
      <div style={{ fontSize: 22, fontWeight: 300, fontStyle: 'italic', color: '#F2F0EC', lineHeight: 1.6, marginBottom: 12 }}>{children}</div>
      <div style={{ fontSize: 14, color: dim }}>— {author}</div>
    </div>
  )
}
function Img({ src, alt, cap }: { src: string; alt: string; cap: string }) {
  return (
    <>
      <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', margin: '40px 0' }}>
        <Image src={src} alt={alt} width={1160} height={700} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
      {cap && <div style={{ fontSize: 14, fontWeight: 300, color: dim, marginTop: 14, lineHeight: 1.6 }}>{cap}</div>}
    </>
  )
}
function Stats({ items }: { items: { n: string; d: string }[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${items.length},1fr)`, gap: 16, marginTop: 48 }}>
      {items.map(s => (
        <div key={s.n} style={{ background: '#1A1A18', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '34px 30px' }}>
          <div style={{ fontSize: 48, fontWeight: 600, letterSpacing: '-.04em', color: ACC, lineHeight: 1, marginBottom: 12 }}>{s.n}</div>
          <div style={{ fontSize: 14, fontWeight: 300, color: 'rgba(210,204,194,0.7)', lineHeight: 1.6 }}>{s.d}</div>
        </div>
      ))}
    </div>
  )
}