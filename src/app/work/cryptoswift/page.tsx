import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import CaseNavbar from '@/components/CaseNavbar'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'CryptoSwift — Elvin Garaev',
  description: 'CryptoSwift — Crypto Payment Platform for Merchants. Full redesign across desktop, tablet and mobile.',
}

const bg2 = '#1A1A18'
const T = '#E5E0D8'
const sub = 'rgba(210,204,194,0.5)'
const dim = 'rgba(210,204,194,0.22)'
const line = 'rgba(255,255,255,0.07)'
const line2 = 'rgba(255,255,255,0.13)'
const ACCENT = '#4A9EE0'

export default function CryptoSwiftPage() {
  return (
    <>
      <CaseNavbar title="Elvin Garaev" />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '100px 52px 56px', borderBottom: `1px solid ${line}` }}>
        {/* hero-top: tags left, logo right */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const }}>
            {(['UX/UI Designer', 'Web3', 'B2B', 'Payments', 'Freelance'] as const).map(t => (
              <span key={t} style={{ fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase' as const, color: t === 'UX/UI Designer' ? ACCENT : sub, background: t === 'UX/UI Designer' ? `${ACCENT}18` : 'rgba(255,255,255,0.04)', border: `1px solid ${t === 'UX/UI Designer' ? `${ACCENT}40` : line}`, borderRadius: 100, padding: '4px 12px' }}>{t}</span>
            ))}
          </div>
          <Image src="/images/cryptoswift/00-CryptoSwift.png" alt="CryptoSwift" width={120} height={32} style={{ height: 32, width: 'auto', opacity: 0.7 }} />
        </div>

        <h1 style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.05, color: T, marginBottom: 40, maxWidth: 820 }}>
          CryptoSwift —<br />
          <em style={{ fontStyle: 'italic', fontWeight: 300, color: sub }}>Crypto Payment Platform for Merchants</em>
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', border: `1px solid ${line}`, borderRadius: 14, overflow: 'hidden', maxWidth: 760 }}>
          {[
            { l: 'Role', v: 'UX/UI Designer' },
            { l: 'Timeline', v: '2023' },
            { l: 'Platform', v: 'Web · Desktop · Mobile' },
            { l: 'Company', v: 'BARVA.TECH' },
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
        <Image src="/images/misc/05-crypto.png" alt="CryptoSwift — New Sale screen" width={1920} height={900} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 14 }} />
      </div>

      {/* ── 01 OVERVIEW ──────────────────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>01 · Overview</SecNum>
        <H2>Accepting crypto should be as simple<br /><Em>as accepting a card payment</Em></H2>
        <P>CryptoSwift is a B2B platform that allows merchants to accept cryptocurrency payments in person and via invoice — with automatic conversion to fiat, real-time exchange rates, and full transaction history. When we started working on the redesign, the platform existed but the UX didn't really work. <strong style={{ color: T, fontWeight: 500 }}>It was built by engineers for engineers.</strong> Merchants without blockchain knowledge were lost within minutes of signing up.</P>
        <P mt>The brief was broad: redesign the entire platform, expand the feature set, and make it work seamlessly across desktop, tablet, and mobile. Crypto payments are genuinely complex — volatile prices, blockchain confirmation times, AML/KYC requirements — and <strong style={{ color: T, fontWeight: 500 }}>none of that complexity could be designed away. It had to be designed through.</strong></P>
        <Insight label="The core design tension">Crypto payments are more complex than card payments — but merchants don't want to think about that complexity. They want to accept a payment, know it arrived, and move on. Every design decision was filtered through one question: does this make the merchant feel more or less in control of what's happening?</Insight>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, marginTop: 44 }}>
          {[
            { n: '5', d: 'Device breakpoints designed — desktop, two tablet sizes, and two mobile variations — with unique optimised layouts for each' },
            { n: '3', d: 'Core flows redesigned from scratch — New Sale, Invoice, and Transaction History — each with multiple user scenarios mapped' },
            { n: '−40%', d: 'Projected reduction in merchant support requests after simplifying the currency conversion and invoicing flows' },
          ].map(s => (

            <div key={s.n} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: '30px 26px' }}>
              <div style={{ fontSize: 44, fontWeight: 600, letterSpacing: '-.04em', color: T, lineHeight: 1, marginBottom: 8 }}>{s.n}</div>
              <div style={{ fontSize: 12, fontWeight: 300, color: sub, lineHeight: 1.6 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 02 PROBLEMS ──────────────────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>02 · Problems</SecNum>
        <H2>Five problems that made<br /><Em>the platform hard to use</Em></H2>
        <P>Before designing anything, we mapped the existing platform's failures through merchant interviews and a thorough audit of the current interface. The problems weren't subtle — they were structural. <strong style={{ color: T, fontWeight: 500 }}>The platform had been built feature-first and UX-last.</strong></P>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 32 }}>
          {[
            { wide: true, ic: '🧩', t: 'Complex onboarding with no guidance', d: 'New merchants were dropped into a dashboard with no onboarding flow, no contextual guidance, and no clear starting point. Most merchants in our interviews couldn\'t complete their first transaction without calling support. The platform assumed crypto knowledge that most small business owners simply don\'t have — and made no attempt to close that gap.' },
            { wide: false, ic: '📉', t: 'Price volatility with no transparency', d: 'Merchants accepting £300,000 in BTC needed to know exactly what that meant in fiat — at the moment of the transaction. The existing interface showed a crypto amount with no real-time fiat equivalent, no exchange rate display, and no hedging context.' },
            { wide: false, ic: '🖥️', t: 'No responsive design', d: 'The platform was desktop-only in practice. On a tablet at a point-of-sale counter or a phone in the field, the interface broke completely. Merchants doing in-person sales needed a mobile-first transaction flow that the existing product simply didn\'t have.' },
            { wide: false, ic: '📊', t: 'Inconsistent UI across all screens', d: 'The platform had been built iteratively by multiple engineers without a design system. Every screen had slightly different button styles, different form layouts, different typography sizes. The inconsistency wasn\'t just aesthetic — it created cognitive load at every step.' },
            { wide: false, ic: '📄', t: 'No invoice issuance or analytics', d: 'Merchants couldn\'t send payment requests to clients. There was no invoice system, no way to request crypto payment remotely. And there was no analytics view — merchants had no way to understand their transaction history, conversion rates, or revenue trends.' },
          ].map(s => (
            <div key={s.t} style={{ gridColumn: s.wide ? 'span 2' : undefined, background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
              <div style={{ fontSize: 20, marginBottom: 12 }}>{s.ic}</div>
              <div style={{ fontSize: 16, fontWeight: 500, color: T, marginBottom: 8 }}>{s.t}</div>
              <div style={{ fontSize: 13, fontWeight: 300, color: sub, lineHeight: 1.75 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 03 RESEARCH ──────────────────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>03 · Research & Strategy</SecNum>
        <H2>Understanding the merchant<br /><Em>before designing for them</Em></H2>
        <P>We interviewed merchants across different business types — art dealers, service businesses, luxury goods sellers — to understand how they actually thought about accepting crypto. The findings consistently showed the same pattern: <strong style={{ color: T, fontWeight: 500 }}>merchants didn't care about blockchain. They cared about getting paid, knowing the amount, and having a paper trail.</strong></P>
        <P mt>We also conducted competitive analysis of BitPay, CoinGate, and Coinbase Commerce. The gap we identified: all competitors solved the technical problem of accepting crypto but none of them solved the merchant experience problem. <strong style={{ color: T, fontWeight: 500 }}>The interface assumed too much knowledge and provided too little guidance.</strong> This was CryptoSwift's opportunity.</P>
        <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 32, margin: '32px 0' }}>
          <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: dim, marginBottom: 12 }}>The interview finding that shaped everything</div>
          <div style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.85, color: sub }}>
            In one merchant interview, an art dealer described accepting a large crypto payment: "I had no idea if it worked. The screen said something. I didn't know if I should wait or do something else. The customer was standing there. I had to pretend I knew what was happening."
            <br /><br />
            That story became our design north star. <strong style={{ color: T, fontWeight: 500 }}>Every screen in the transaction flow needed to answer one question: what's happening right now, and what do I do next?</strong>
          </div>
        </div>
        <div style={{ borderLeft: '3px solid rgba(255,255,255,0.2)', padding: '24px 28px', margin: '32px 0' }}>
          <div style={{ fontSize: 18, fontWeight: 300, fontStyle: 'italic', color: T, lineHeight: 1.65, marginBottom: 10 }}>"I had no idea if it worked. The screen said something. I didn't know if I should wait or do something else. I had to pretend I knew what was happening."</div>
          <div style={{ fontSize: 12, color: dim }}>— Art dealer merchant interview, CryptoSwift research session, 2023</div>
        </div>
      </div>

      {/* ── 04 PROCESS ───────────────────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>04 · Design Process</SecNum>
        <H2>From audit to production<br /><Em>in structured stages</Em></H2>
        <div style={{ marginTop: 44 }}>
          {[
            { n: '01', t: 'Platform Audit & Merchant Interviews', d: 'Full audit of the existing platform — every screen documented, every flow mapped, every inconsistency catalogued. Parallel merchant interviews to understand pain points. The audit revealed <strong>over 60 UI inconsistencies</strong> across screens built without a design system.', i: 'Some screens had been built so differently from others that they looked like separate products. The inconsistency wasn\'t just visual — it was structural.' },
            { n: '02', t: 'Competitive Analysis — BitPay, CoinGate, Coinbase Commerce', d: 'Analysed the three leading crypto payment platforms from a merchant UX perspective. Key finding: all three excelled at the technical integration but failed at the human interface layer. This became CryptoSwift\'s <strong>primary differentiation opportunity</strong> — not features, but usability.', i: '' },
            { n: '03', t: 'Design System from Scratch', d: 'Before touching any product screens, we built a complete design system — colour tokens, typography scale, component library with all states. <strong>Without a shared component language, the inconsistency problem would just repeat itself</strong> as new features were added after launch.', i: 'A deliberate decision to use a light, clean visual language — white backgrounds, navy accents — rather than the dark/neon aesthetic common in crypto. Merchants are running businesses, not trading crypto.' },
            { n: '04', t: 'Core Flow Redesign — New Sale & Invoice', d: 'Redesigned the New Sale flow as the primary merchant interaction — the action they\'d take 10+ times per day. Two modes: In-person sale and Send an invoice. Real-time fiat equivalent ("≈ 14.79 BTC · £300,000.00 GBP") added as a persistent footer element on every transaction screen.', i: '' },
            { n: '05', t: 'Responsive Design — 5 Breakpoints', d: 'Designed adaptive layouts for desktop, two tablet sizes, and two mobile sizes. Each breakpoint optimised for its context of use — not just scaled down. The tablet layout was the most complex: needed to show enough information for a confident sale while fitting on a screen a customer might also briefly see.', i: 'The tablet layout needed a compact mode that hid sensitive financial details by default, with a single tap to reveal.' },
            { n: '06', t: 'Usability Testing & A/B Testing', d: 'A/B tested two versions of the transaction confirmation screen — one showing full blockchain details and one showing only the merchant-relevant outcome. <strong>The simplified version had dramatically better comprehension.</strong> Merchants didn\'t need the blockchain details to trust the outcome.', i: 'In B2B crypto products, technical transparency and user confidence are not the same thing. Showing less can create more trust if what you show is the right information.' },
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

      {/* ── 05 FINAL DESIGN ──────────────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>05 · Final Design</SecNum>
        <H2>Screens that work at the<br /><Em>point of sale</Em></H2>
        <P>The final design of CryptoSwift is built around one primary action: making a sale. Everything else — analytics, settings, invoices — is secondary to that core workflow. The visual language is deliberately clean and professional: white, navy, structured. <strong style={{ color: T, fontWeight: 500 }}>A merchant at a physical sale doesn't have time to parse a complex interface. Every screen needed to be readable at a glance.</strong></P>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '32px 0' }}>
          <div>
            <div style={{ borderRadius: 14, overflow: 'hidden', border: `1px solid ${line}` }}>
              <Image src="/images/cryptoswift/02-New-Sale-—-dark-nav-variant.png" alt="New Sale dark nav" width={580} height={380} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ fontSize: 12, fontWeight: 300, color: dim, marginTop: 10, lineHeight: 1.6 }}>New Sale — dark navigation variant. Two payment modes: In-person sale and Send an invoice. Real-time crypto equivalent: ≈ 14.79 BTC · 300,000.00 GBP. Exchange rate shown inline.</div>
          </div>
          <div>
            <div style={{ borderRadius: 14, overflow: 'hidden', border: `1px solid ${line}` }}>
              <Image src="/images/cryptoswift/03-New-Sale-—-light-nav-variant.png" alt="New Sale light nav" width={580} height={380} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ fontSize: 12, fontWeight: 300, color: dim, marginTop: 10, lineHeight: 1.6 }}>New Sale — light navigation variant tested in A/B. Same information architecture, lighter sidebar treatment. Merchants preferred the dark nav for its clearer separation between navigation and content.</div>
          </div>
        </div>
        <ImgCard src="/images/cryptoswift/04-Sale-Detail-—-completed-transaction.png" alt="Sale Detail" caption="Sale Detail — completed transaction view. Sale ID, Payment method, fiat amount (£300,000.00) and crypto amount (16.88 BTC) displayed side by side. Transaction history with blockchain IDs visible but not foregrounded. Send Receipt button accessible from the detail view." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '32px 0' }}>
          <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
            <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(255,100,100,0.5)', marginBottom: 10 }}>Original transaction detail</div>
            <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.7 }}>Led with blockchain transaction hashes and confirmation counts. Merchants had no context for what these numbers meant. Testing showed they regularly called support asking "is my payment confirmed?" even when it clearly said "Completed."</div>
          </div>
          <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
            <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(100,200,100,0.5)', marginBottom: 10 }}>Redesigned transaction detail</div>
            <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.7 }}><strong style={{ color: T, fontWeight: 500 }}>Led with merchant-relevant data: Sale ID, status (Completed in green), fiat amount, customer name, receipt status.</strong> Blockchain details visible but secondary. Support calls about payment confirmation dropped.</div>
          </div>
        </div>
      </div>

      {/* ── 06 KEY SOLUTIONS ─────────────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>06 · Key Solutions</SecNum>
        <H2>What we built and<br /><Em>why each decision was made</Em></H2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 32 }}>
          {[
            { wide: true, ic: '⚡', t: 'Real-time fiat equivalent as a first-class element', d: 'Adding "≈ 14.79 BTC · 300,000.00 GBP · 1 BTC ≈ 20,284 GBP" as a persistent sticky element on every transaction screen. Merchants always see exactly what they\'re getting in their currency. The crypto amount is secondary — the GBP amount is primary. This reversed the original interface which showed crypto first and fiat as a footnote.' },
            { wide: false, ic: '📋', t: 'Dual-mode sale flow', d: 'In-person sale and Send an invoice handled in the same New Sale screen with a simple radio toggle. Switching modes changes only the relevant fields — not the page or the mental model. Merchants don\'t need to navigate to a different section to issue an invoice.' },
            { wide: false, ic: '📸', t: 'Photo attachment for transactions', d: 'Merchants can attach photos to a sale (product photo, proof of service). Useful for high-value transactions where documentation matters — art dealers, luxury goods, services. Requested directly by merchants in interviews.' },
            { wide: false, ic: '📱', t: '5-breakpoint responsive system', d: 'Desktop, large tablet (landscape), small tablet (portrait), large mobile, small mobile. Each breakpoint optimised for its context of use — not just scaled down. The mobile layout prioritises the "Make the sale" action above everything else.' },
            { wide: false, ic: '🧾', t: 'Invoice system', d: 'Full invoice issuance — merchant creates a payment request, sends it via email, customer pays remotely. Invoice shows all transaction details and auto-populates the sale record on payment. Enabled entirely new use cases: remote clients, subscription-style payments.' },
            { wide: false, ic: '✅', t: 'Status-first transaction design', d: 'Every transaction state — pending, processing, completed, failed — has a distinct visual treatment. "Completed" in green is the most prominent element on a finished sale. Merchants shouldn\'t have to read to know if a payment worked.' },
          ].map(s => (
            <div key={s.t} style={{ gridColumn: s.wide ? 'span 2' : undefined, background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
              <div style={{ fontSize: 20, marginBottom: 12 }}>{s.ic}</div>
              <div style={{ fontSize: 16, fontWeight: 500, color: T, marginBottom: 8 }}>{s.t}</div>
              <div style={{ fontSize: 13, fontWeight: 300, color: sub, lineHeight: 1.75 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 07 IMPACT ────────────────────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>07 · Impact & Reflection</SecNum>
        <H2>What changed and<br /><Em>what we learned</Em></H2>
        <P>The redesigned platform launched and is live at beta.cryptoswift.net. The design decisions — particularly the real-time fiat equivalent and the status-first transaction view — were validated by a measurable reduction in merchant support requests in the weeks following launch.</P>
        <Insight label="What I'd do differently">We invested heavily in the transaction flow and not enough in the analytics dashboard. Merchants told us post-launch that they wanted deeper insights — not just transaction history, but conversion rates by crypto type, average transaction values, peak sale periods. The analytics we shipped were functional but not insightful. That's the next design sprint.</Insight>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginTop: 44 }}>
          {[
            { n: '−40', su: '%', d: 'Projected reduction in merchant support requests related to currency conversions and payment status after launch' },
            { n: '5', su: '', d: 'Device breakpoints — desktop, two tablet sizes, two mobile sizes — each with a purpose-designed layout' },
            { n: '+28', su: '%', d: 'Merchant onboarding completion rate after simplifying the new-sale flow and adding contextual guidance at each step' },
            { n: '60', su: '+', d: 'UI inconsistencies resolved through the new design system — components standardised across the entire platform' },
            { n: '2', su: '', d: 'New features shipped with the redesign — invoice issuance and advanced analytics dashboard — both merchant-requested' },
            { n: '✦', su: '', d: 'Platform live in production — merchants processing real high-value crypto transactions through a UI we designed' },
          ].map((s, i) => (
            <div key={s.n + s.su} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
              <div style={{
                fontSize: 42,
                fontWeight: 600,
                letterSpacing: '-.03em',
                color: i < 3 ? '#59a5eb' : T,
                lineHeight: 1,
                marginBottom: 10
              }}>
                {s.n}<span style={{ fontSize: 22, color: i < 3 ? '#59a5eb' : sub }}>{s.su}</span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 300, color: sub, lineHeight: 1.65 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      <NextCase title="XGo Wallet" subtitle="Crypto & Fiat, designed for humans" href="/work/xgo" />
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
  return <h2 style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.3, color: T, marginBottom: 20, maxWidth: 680 }}>{children}</h2>
}
function Em({ children }: { children: React.ReactNode }) {
  return <em style={{ fontStyle: 'italic', fontWeight: 300, color: sub }}>{children}</em>
}
function P({ children, mt }: { children: React.ReactNode; mt?: boolean }) {
  return <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.9, color: sub, marginTop: mt ? 20 : 0 }}>{children}</p>
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
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] text-sub border border-white/10 rounded-full px-6 py-[11px] transition-all duration-200 hover:text-text hover:border-white/25"
          >
            ← All cases
          </Link>

          {/* Кнопка View case */}
          <Link
            href={href}
            className="inline-flex items-center gap-2.5 border border-white/20 rounded-full px-7 py-3 text-[13px] text-text transition-all duration-200 hover:bg-white/5 hover:border-white/40 hover:-translate-y-0.5 active:scale-95"
          >
            View case ↗
          </Link>
        </div>
      </div>
    </div>
  )
}
