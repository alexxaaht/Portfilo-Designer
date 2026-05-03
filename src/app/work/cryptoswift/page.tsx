import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import CaseNavbar from '@/components/CaseNavbar'
import FadeUp from '@/components/FadeUp'
import CaseFooter from '@/components/CaseFooter'


export const metadata: Metadata = {
  title: 'CryptoSwift — Elvin Garaev',
  description: 'CryptoSwift — Crypto Payment Platform for Merchants. Full redesign across desktop, tablet and mobile.',
}

// ПЕРЕМЕННЫЕ ЦВЕТОВ (СВЕТЛЫЕ)
const bg2 = '#1A1A18'
const T = '#F2F0EC'
const sub = 'rgba(210,204,194,0.75)'
const dim = 'rgba(210,204,194,0.5)'
const line = 'rgba(255,255,255,0.08)'
const line2 = 'rgba(255,255,255,0.18)'
const ACCENT = '#4A9EE0'

export default function CryptoSwiftPage() {
  return (
    <>
      <CaseNavbar title="Elvin Garaev" />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '120px 52px 64px', borderBottom: `1px solid ${line}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' as const }}>
            {(['UX/UI Designer', 'Web3', 'B2B', 'Payments', 'Freelance'] as const).map(t => (
              <span key={t} style={{ fontSize: 12, letterSpacing: '.06em', textTransform: 'uppercase' as const, color: t === 'UX/UI Designer' ? ACCENT : sub, background: t === 'UX/UI Designer' ? `${ACCENT}18` : 'rgba(255,255,255,0.05)', border: `1px solid ${t === 'UX/UI Designer' ? `${ACCENT}40` : line}`, borderRadius: 100, padding: '5px 14px' }}>{t}</span>
            ))}
          </div>
        </div>

        <h1 style={{ fontSize: 'clamp(40px,6vw,68px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.05, color: T, marginBottom: 48, maxWidth: 850 }}>
          CryptoSwift —<br />
          <em style={{ fontStyle: 'italic', fontWeight: 300, color: sub }}>Crypto Payment Platform for Merchants</em>
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', border: `1px solid ${line}`, borderRadius: 16, overflow: 'hidden', width: '100%' }}>
          {[
            { l: 'Role', v: 'UX/UI Designer' },
            { l: 'Timeline', v: '2023' },
            { l: 'Platform', v: 'Web · Desktop · Mobile' },
            { l: 'Company', v: 'BARVA.TECH' },
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
        <Image src="/images/cryptoswift/01-CryptoSwift-—-New-Sale-screen.png" alt="CryptoSwift" width={1920} height={900} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 16 }} priority />
      </div>

      {/* ── 01 OVERVIEW ──────────────────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>01 · Overview</SecNum>
        <H2>Accepting crypto should be as simple<br /><Em>as accepting a card payment</Em></H2>
        <P>CryptoSwift is a B2B platform that allows merchants to accept cryptocurrency payments in person and via invoice — with automatic conversion to fiat, real-time exchange rates, and full transaction history. <B>It was built by engineers for engineers.</B> Merchants without blockchain knowledge were lost within minutes of signing up.</P>
        <P mt>The brief was broad: redesign the entire platform, expand the feature set, and make it work seamlessly across desktop, tablet, and mobile. Crypto payments are genuinely complex and <B>none of that complexity could be designed away. It had to be designed through.</B></P>

        <Insight label="The core design tension">
          Crypto payments are more complex than card payments — but merchants don't want to think about that complexity. Every design decision was filtered through one question: does this make the merchant feel more or less in control?
        </Insight>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 52 }}>
          {[
            { n: '5', d: 'Device breakpoints designed — desktop, two tablet sizes, and two mobile variations — with unique optimised layouts' },
            { n: '3', d: 'Core flows redesigned from scratch — New Sale, Invoice, and Transaction History — with scenarios mapped' },
            { n: '−40%', d: 'Projected reduction in merchant support requests after simplifying the currency conversion and invoicing flows' },
          ].map(s => (
            <div key={s.n} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: '36px 30px' }}>
              <div style={{ fontSize: 48, fontWeight: 600, letterSpacing: '-.04em', color: T, lineHeight: 1, marginBottom: 12 }}>{s.n}</div>
              <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.6 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 02 PROBLEMS ──────────────────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>02 · Problems</SecNum>
        <H2>Five problems that made<br /><Em>the platform hard to use</Em></H2>
        <P>Before designing anything, we mapped the existing platform's failures through merchant interviews and a thorough audit. <B>The platform had been built feature-first and UX-last.</B></P>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 40 }}>
          {[
            { wide: true, ic: '🧩', t: 'Complex onboarding with no guidance', d: 'New merchants were dropped into a dashboard with no onboarding flow. Most couldn\'t complete their first transaction without calling support.' },
            { wide: false, ic: '📉', t: 'Price volatility with no transparency', d: 'The existing interface showed a crypto amount with no real-time fiat equivalent and no exchange rate display.' },
            { wide: false, ic: '🖥️', t: 'No responsive design', d: 'The platform was desktop-only in practice. On a tablet or phone, the interface broke completely.' },
            { wide: false, ic: '📊', t: 'Inconsistent UI across all screens', d: 'Built iteratively by multiple engineers without a design system. Inconsistency created high cognitive load.' },
            { wide: false, ic: '📄', t: 'No invoice issuance or analytics', d: 'Merchants couldn\'t send payment requests or understand their revenue trends and conversion rates.' },
          ].map(s => (
            <div key={s.t} style={{ gridColumn: s.wide ? 'span 2' : undefined, background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: 32 }}>
              <div style={{ fontSize: 26, marginBottom: 16 }}>{s.ic}</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: T, marginBottom: 10 }}>{s.t}</div>
              <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.75 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 03 RESEARCH ──────────────────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>03 · Research & Strategy</SecNum>
        <H2>Understanding the merchant<br /><Em>before designing for them</Em></H2>
        <P>Findings showed: <B>merchants didn't care about blockchain. They cared about getting paid and having a paper trail.</B></P>
        <Insight label="The interview finding that shaped everything">
          "I had no idea if it worked. The screen said something... I had to pretend I knew what was happening." That story became our design north star.
        </Insight>
        <div style={{ borderLeft: '3px solid rgba(255,255,255,0.3)', padding: '28px 36px', margin: '40px 0' }}>
          <div style={{ fontSize: 22, fontWeight: 300, fontStyle: 'italic', color: T, lineHeight: 1.6, marginBottom: 12 }}>"I had no idea if it worked. The screen said something. I didn't know if I should wait or do something else."</div>
          <div style={{ fontSize: 14, color: dim }}>— Art dealer merchant interview, 2023</div>
        </div>
      </div>

      {/* ── 04 PROCESS ───────────────────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>04 · Design Process</SecNum>
        <H2>From audit to production<br /><Em>in structured stages</Em></H2>
        <div style={{ marginTop: 48 }}>
          {[
            { n: '01', t: 'Platform Audit & Merchant Interviews', d: 'Full audit catalogued <strong>over 60 UI inconsistencies</strong>. Parallel interviews helped us understand real pain points.', i: 'The inconsistency was not just visual — it was structural.' },
            { n: '02', t: 'Competitive Analysis', d: 'Analysed BitPay, CoinGate, Coinbase Commerce. Key finding: all failed at the human interface layer.', i: '' },
            { n: '03', t: 'Design System from Scratch', d: 'Built a complete system — tokens, typography, component library. <strong>Clean visual language</strong>: white and navy accents.', i: 'Merchants are running businesses, not trading crypto.' },
            { n: '04', t: 'Core Flow Redesign', d: 'Redesigned New Sale as the primary action. Added real-time fiat equivalent as a persistent element.', i: '' },
            { n: '05', t: 'Responsive Design', d: 'Designed adaptive layouts for 5 breakpoints. Tablet layout was optimised for point-of-sale context.', i: '' },
            { n: '06', t: 'Usability Testing', d: 'Tested blockchain details vs merchant-relevant outcomes. <strong>Simplified version had dramatically better comprehension.</strong>', i: 'Showing less can create more trust if it is the right info.' },
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

      {/* ── 05 FINAL DESIGN ──────────────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>05 · Final Design</SecNum>
        <H2>Screens that work at the<br /><Em>point of sale</Em></H2>
        <P>The final design of CryptoSwift is built around one primary action: making a sale. Everything else is secondary. <B>Every screen needed to be readable at a glance.</B></P>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '40px 0' }}>
          <div>
            <div style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${line}` }}>
              <Image src="/images/cryptoswift/02-New-Sale-—-dark-nav-variant.png" alt="New Sale" width={580} height={380} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ fontSize: 14, fontWeight: 300, color: dim, marginTop: 12, lineHeight: 1.6 }}>New Sale — dark navigation variant. Merchants preferred it for clearer separation.</div>
          </div>
          <div>
            <div style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${line}` }}>
              <Image src="/images/cryptoswift/03-New-Sale-—-light-nav-variant.png" alt="Light Nav" width={580} height={380} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ fontSize: 14, fontWeight: 300, color: dim, marginTop: 12, lineHeight: 1.6 }}>New Sale — light variant tested in A/B. Same architecture, lighter treatment.</div>
          </div>
        </div>
        <ImgCard src="/images/cryptoswift/04-Sale-Detail-—-completed-transaction.png" alt="Sale Detail" caption="Sale Detail — fiat amount (£300,000.00) and crypto amount (16.88 BTC) displayed side by side." />
      </div>

      {/* ── 06 KEY SOLUTIONS ─────────────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>06 · Key Solutions</SecNum>
        <H2>What we built and<br /><Em>why each decision was made</Em></H2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 40 }}>
          {[
            { wide: true, ic: '⚡', t: 'Real-time fiat equivalent', d: 'Merchants always see exactly what they\'re getting in their currency. The fiat amount is primary, crypto is secondary.' },
            { wide: false, ic: '📋', t: 'Dual-mode sale flow', d: 'In-person sale and Send an invoice handled in the same screen with a simple toggle. No page switches needed.' },
            { wide: false, ic: '📸', t: 'Photo attachment', d: 'Merchants can attach proof of service. Useful for high-value transactions like art or luxury goods.' },
            { wide: false, ic: '📱', t: '5-breakpoint responsive system', d: 'Optimised for desktop, tablet (landscape/portrait) and mobile. Not just scaled down, but context-aware.' },
            { wide: false, ic: '✅', t: 'Status-first transaction design', d: '"Completed" in green is the most prominent element. Merchants shouldn\'t have to read to know it worked.' },
          ].map(s => (
            <div key={s.t} style={{ gridColumn: s.wide ? 'span 2' : undefined, background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: 32 }}>
              <div style={{ fontSize: 24, marginBottom: 16 }}>{s.ic}</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: T, marginBottom: 10 }}>{s.t}</div>
              <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.75 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 07 IMPACT ────────────────────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>07 · Impact & Reflection</SecNum>
        <H2>What changed and<br /><Em>what we learned</Em></H2>
        <P>The redesigned platform is live. Decisions were validated by a measurable reduction in merchant support requests following launch.</P>

        <Insight label="What I'd do differently">
          We underinvested in the analytics dashboard. Merchants wanted deeper insights — conversion rates by crypto type and peak sale periods.
        </Insight>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 52 }}>
          {[
            { n: '−40', su: '%', d: 'Reduction in merchant support requests related to currency conversions' },
            { n: '5', su: '', d: 'Device breakpoints — each with a purpose-designed layout' },
            { n: '+28', su: '%', d: 'Merchant onboarding completion rate after simplifying the sale flow' },
            { n: '60', su: '+', d: 'UI inconsistencies resolved through the new design system' },
            { n: '2', su: '', d: 'New features shipped — invoice issuance and advanced analytics' },
            { n: '✦', su: '', d: 'Platform live in production — processing real high-value transactions' },
          ].map((s, i) => (
            <div key={s.n + s.su} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: '34px 28px' }}>
              <div style={{ fontSize: 48, fontWeight: 600, letterSpacing: '-.03em', color: i < 3 ? '#59a5eb' : T, lineHeight: 1, marginBottom: 12 }}>
                {s.n}<span style={{ fontSize: 24, color: i < 3 ? '#59a5eb' : sub }}>{s.su}</span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.65 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      <CaseFooter nextTitle="XGo Wallet" nextSubtitle="Crypto & Fiat, designed for humans" nextHref="/work/xgo" />
    </>
  )
}

// ── Helpers ──────────────────────────────────────────────────────────────

function SecNum({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase' as const, color: dim, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ display: 'block', width: 30, height: 1, background: line2 }} />{children}
    </div>
  )
}
function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: 34, fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.2, color: T, marginBottom: 24, maxWidth: 720 }}>{children}</h2>
}
function Em({ children }: { children: React.ReactNode }) {
  return <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(210,204,194,0.8)' }}>{children}</em>
}
function P({ children, mt }: { children: React.ReactNode; mt?: boolean }) {
  return <p style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.8, color: 'rgba(220,216,208,0.85)', marginTop: mt ? 24 : 0 }}>{children}</p>
}
function B({ children }: { children: React.ReactNode }) {
  return <strong style={{ color: '#F2F0EC', fontWeight: 500 }}>{children}</strong>
}
function Insight({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: '2px solid rgba(255,255,255,0.3)', padding: '24px 32px', margin: '40px 0', background: 'rgba(255,255,255,0.03)', borderRadius: '0 12px 12px 0' }}>
      <div style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: dim, marginBottom: 10 }}>{label}</div>
      <div style={{ fontSize: 18, fontWeight: 300, fontStyle: 'italic', color: T, lineHeight: 1.7 }}>{children}</div>
    </div>
  )
}
function ImgCard({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <>
      <div style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${line}`, margin: '40px 0' }}>
        <Image src={src} alt={alt} width={1160} height={700} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
      {caption && <div style={{ fontSize: 14, fontWeight: 300, color: dim, marginTop: 12, lineHeight: 1.6 }}>{caption}</div>}
    </>
  )
}