import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import CaseNavbar from '@/components/CaseNavbar'
import FadeUp from '@/components/FadeUp'
import CaseFooter from '@/components/CaseFooter'


export const metadata: Metadata = {
  title: 'XGo Wallet — Elvin Garaev',
  description: 'XGo Wallet — Crypto & Fiat, designed for humans. 5K+ downloads.',
}

// ОБНОВЛЕННЫЕ ПЕРЕМЕННЫЕ (СВЕТЛЕЕ И КОНТРАСТНЕЕ)
const bg2 = '#1A1A18', T = '#F2F0EC', sub = 'rgba(210,204,194,0.75)', dim = 'rgba(210,204,194,0.5)', line = 'rgba(255,255,255,0.08)', line2 = 'rgba(255,255,255,0.18)', ACC = '#D4A843'

export default function XgoPage() {
  return (
    <>
      <CaseNavbar title="Elvin Garaev" />
      
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '120px 52px 64px', borderBottom: `1px solid ${line}` }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 32, flexWrap: 'wrap' }}>
          {['Product Designer', 'Web3', 'iOS & Android', 'Branding', 'Freelance'].map(t => (
            <span key={t} style={{ fontSize: 12, letterSpacing: '.06em', textTransform: 'uppercase', color: t === 'Product Designer' ? ACC : sub, background: t === 'Product Designer' ? `${ACC}18` : 'rgba(255,255,255,0.05)', border: `1px solid ${t === 'Product Designer' ? `${ACC}40` : line}`, borderRadius: 100, padding: '5px 14px' }}>{t}</span>
          ))}
        </div>
        <h1 style={{ fontSize: 'clamp(40px,6vw,68px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.05, color: T, marginBottom: 20, maxWidth: 1100 }}>
          XGo Wallet — Crypto & Fiat,<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: sub }}>designed for humans</em>
        </h1>
        <p style={{ fontSize: 18, fontWeight: 300, color: sub, maxWidth: 720, marginBottom: 48, lineHeight: 1.7 }}>A crypto wallet built from absolute zero — branding, research, full UX/UI. Designed for people who aren't crypto people. 5K+ downloads after launch.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', border: `1px solid ${line}`, borderRadius: 16, overflow: 'hidden', width: '100%' }}>
          {[{ l: 'Role', v: 'Product Designer' }, { l: 'Timeline', v: '2021–2022' }, { l: 'Platform', v: 'iOS · Android · Web' }, { l: 'Type', v: '0→1 Startup' }].map((m, i, a) => (
            <div key={m.l} style={{ padding: '22px 26px', borderRight: i < a.length - 1 ? `1px solid ${line}` : 'none' }}>
              <div style={{ fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: dim, marginBottom: 6 }}>{m.l}</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: T, lineHeight: 1.3 }}>{m.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Cover */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 52px' }}>
        <Image src="/images/xgo/00-XGo-Wallet-Mobile-App.png" alt="XGo Wallet Mobile App" width={1920} height={900} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 16 }} priority />
      </div>

      {/* 01 OVERVIEW */}
      <S num="01 · Overview">
        <H2>A crypto wallet built for people<br /><Em>who aren't crypto people</Em></H2>
        <P>XGo Wallet is a mobile-first crypto and fiat wallet — built from absolute zero. No existing design, no existing brand, no existing user research. The gap: a wallet that felt as intuitive as Revolut but worked natively in Web3. <B>MetaMask is powerful but technical. Trust Wallet is functional but dense. Coinbase Wallet has brand recognition but a cluttered interface.</B></P>
        <P mt>The most important design question: how do you make a crypto wallet feel as natural as a bank app, without hiding what makes crypto different? The answer required a complete rethink of how wallets present information — starting not from the blockchain, but from the user.</P>
        <Ins label="The most distinctive feature">The wallet-first card design — pink to gold gradient with the XGo wordmark — was the centrepiece of the identity. It became the most shared visual element post-launch. <B>When users see the card, they think "I want that" before they think "how does blockchain work."</B> That distinction was intentional.</Ins>
        <Stats items={[
          { n: '5K+', d: 'App downloads after launch on App Store and Google Play — organic growth through Wallet.ID virality' },
          { n: '231+', d: 'Crypto assets supported in the market view — with real-time price tracking, yield indicators, and filter/sort' },
          { n: '100+', d: 'Wallets, apps and browsers integrated through the Wallet.ID ecosystem — Coinbase, MetaMask, OpenSea and more' },
        ]} />
      </S>

      {/* 02 PROBLEMS */}
      <S num="02 · Why Existing Wallets Weren't Working">
        <H2>Why existing wallets<br /><Em>weren't working</Em></H2>
        <P>Crypto wallet UX has a well-documented problem: it was designed by people who understand blockchain for people who understand blockchain. The result: fluent to 3% of the potential market, alienating to everyone else. <B>We audited the five most-used wallets in 2021 and found the same failures repeated across all of them.</B></P>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '40px 0' }}>
          <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: 32 }}>
            <div style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,100,100,0.7)', marginBottom: 14 }}>What existing wallets got wrong</div>
            <div style={{ fontSize: 15, fontWeight: 300, color: sub, lineHeight: 1.7 }}>Exposed private keys without explanation. No fiat equivalent displayed by default. No onboarding — just a dashboard. <strong style={{ color: T, fontWeight: 500 }}>Using them felt like reading a spreadsheet.</strong></div>
          </div>
          <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: 32 }}>
            <div style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(100,200,100,0.7)', marginBottom: 14 }}>XGo's design mandate</div>
            <div style={{ fontSize: 15, fontWeight: 300, color: sub, lineHeight: 1.7 }}><B>Human-first wallet design.</B> Fiat values always visible. Security education baked into onboarding. A unique Wallet ID (alice.xgo.id) instead of a cryptographic address.</div>
          </div>
        </div>
        <Quote author="— User interview, XGo Wallet discovery research, 2021">"I downloaded three crypto wallets and gave up on all of them. They all look like they were designed for people who already know what they're doing."</Quote>
      </S>

      {/* 03 RESEARCH */}
      <S num="03 · Research & Foundation">
        <H2>Understanding the user before<br /><Em>building the product</Em></H2>
        <P>Because we were building from zero, research had to answer two questions simultaneously: what do crypto-native users need that existing wallets don't provide, and what would it take to bring non-crypto users into the space?</P>
        <P mt><B>These are very different design problems, and we had to design one product that served both.</B></P>
        <P mt>We conducted user interviews across three groups. The findings from the "tried and quit" users were the most valuable. They told us exactly what the friction points were, in specific detail.</P>
        <Img src="/images/xgo/01-XGo-Information-Model.png" alt="XGo Information Model" cap="Information model — entity relationships across the XGo ecosystem. Built to map the full data architecture." />
        <Think label="The information architecture insight">One of the first things we did was build a full information model before drawing a single screen. <B>Most wallet UX problems come from unclear information hierarchy, not bad visual design.</B><br /><br />Answering hard questions in a diagram saved weeks of rework later.</Think>
      </S>

      {/* 04 BRANDING */}
      <S num="04 · Branding & Identity">
        <H2>Building a brand that people<br /><Em>actually want to be part of</Em></H2>
        <P>Most crypto wallets have logos and colour schemes. They don't have brands. <B>XGo needed a brand strong enough that users would feel proud to say "I use XGo" the same way they'd say "I use Revolut."</B></P> <br />
        <P>The gradient card design was designed to feel like a premium payment card, not a crypto interface. <B>When users see the card, they think "I want that" before they think "how does blockchain work."</B></P>
        <Img src="/images/xgo/02-XGo-Virtual-Card.png" alt="XGo Virtual Card" cap="XGo Virtual Card — pink-to-gold gradient with Apple Pay and Google Pay integration. Wallet ID displayed as a human-readable identifier." />
        <Img src="/images/xgo/03-Wallet.ID-website.png" alt="Wallet.ID website" cap='Wallet.ID landing page — Interactive network graph showing xgo.id usernames.' />
      </S>

      {/* 05 PROCESS */}
      <S num="05 · Design Process — 0 to Launch">
        <H2>0 to launch in structured stages —<br /><Em>every decision documented</Em></H2>
        <Steps items={[
          { n: '01', t: 'Market Research & Web3 Landscape Analysis', d: 'Full audit of MetaMask, Trust Wallet, Rainbow, Coinbase Wallet, and Phantom. Mapped the Web3 ecosystem to understand where XGo needed to integrate.', i: 'The most technically capable wallets had the worst onboarding.' },
          { n: '02', t: 'User Interviews & Persona Development', d: 'Interviewed users across three profiles: the Crypto Native, the Curious Newcomer, and the Fiat-First User. The Curious Newcomer became our primary target.', i: 'The Curious Newcomer would use XGo only if the UX removed their anxiety entirely.' },
          { n: '03', t: 'Information Architecture & Wallet ID Concept', d: 'Defined the product\'s core IA. Developed the Wallet ID concept — replacing 0x-style addresses with human-readable identifiers (alice.xgo.id).', i: 'Every single non-crypto user cited the same fear: "What if I type the wrong address?"' },
          { n: '04', t: 'Design System & Brand Identity', d: 'Built a complete design system covering colour tokens, typography (Inter for UI), component library, and iconography.', i: '' },
          { n: '05', t: 'A/B Testing & Onboarding Optimisation', d: 'Tested two onboarding approaches. The feature-first flow had 34% higher completion rates. Users needed to see the value first.', i: 'Show the card first. Then the seed phrase.' },
          { n: '06', t: 'Launch & Growth Design', d: 'Designed the full App Store presence — screenshots, preview video frame. Created a comprehensive marketing banner set.', i: '' },
        ]} />
      </S>

      {/* 06 FINAL DESIGN */}
      <S num="06 · Final Design">
        <H2>Every screen designed for<br /><Em>the user who almost gave up on crypto</Em></H2>
        <P>The final product is a dark-first, clean interface — premium without being intimidating. The wallet dashboard shows what matters: total balance in fiat, the gradient card, and four primary actions. <B>Complexity is earned by scrolling, not imposed at arrival.</B></P>
        <Img src="/images/xgo/04-XGo-App-—-three-key-screens.png" alt="XGo App" cap="Wallet dashboard, Market view (231+ assets), and Grow screen (yield earning feature)." />
        <Img src="/images/xgo/05-XGo-Wallet-ID-Ecosystem.png" alt="XGo Wallet ID Ecosystem" cap="Wallet.ID Ecosystem — integrates with 100+ wallets, apps and browsers." />
        <Img src="/images/xgo/06-Wallet.ID-—-Your-ID-Your-Wallet.png" alt="Wallet.ID" cap='"Your ID, Your Wallet, Your Way" — landing hero with 2.79M+ social proof.' />
      </S>

      {/* 07 MARKETING */}
      <S num="07 · Marketing & Growth Design">
        <H2>Design beyond the app —<br /><Em>the full acquisition ecosystem</Em></H2>
        <P>A product is only as successful as its ability to acquire users. For XGo, design didn't stop at the app — it extended into every surface where potential users would encounter the brand. <B>We designed a complete marketing system: landing pages, App Store assets, and a multi-format banner library.</B></P>
        <Img src="/images/xgo/07-XGo-Marketing-Banners.png" alt="XGo Marketing Banners" cap='Marketing banner set — 15+ formats. Campaign themes: "Claim your unique XGo Wallet ID" and "Trade more than 150+ currencies with ease."' />
        <Think label="Why we designed marketing assets as part of the product process">
          The first impression of XGo for most users would not be the app — it would be a banner ad. <B>If the marketing design was inconsistent with the app, users would feel a disconnect on install.</B>
        </Think>
      </S>

      {/* 08 IMPACT */}
      <S num="08 · Impact & Reflection">
        <H2>What we shipped and<br /><Em>what building from zero taught us</Em></H2>
        <P>XGo Wallet reached 5K+ downloads in its first period — without paid campaigns. Growth came from the Wallet.ID virality mechanic. <B>The most effective growth feature was a design decision made before a single line of code was written.</B></P>
        <Ins label="The thing I'd do differently">We underinvested in the post-onboarding experience. We designed the onboarding well, but the moment users finished setup, the product became relatively passive. We needed a reason to open the app daily.</Ins>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 52 }}>
          {[
            { n: '5K', su: '+', d: 'App downloads after launch — organic growth driven by the Wallet.ID virality mechanic' },
            { n: '+34', su: '%', d: 'Onboarding completion rate improvement — feature-first flow vs security-first flow in A/B test' },
            { n: '100', su: '+', d: 'Wallets, apps and browsers in the Wallet.ID ecosystem — deep Web3 integration' },
            { n: '231', su: '+', d: 'Crypto assets supported — with real-time market data, yield indicators and filter/sort' },
            { n: '15', su: '+', d: 'Marketing banner formats designed — full acquisition ecosystem from landing to paid ads' },
            { n: '0→1', su: '', d: 'Built entirely from scratch — brand, IA, design system, app, landing page. Every decision made from first principles.' },
          ].map((s, i) => (
            <div key={s.n + s.su} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: '34px 28px' }}>
              <div style={{ fontSize: 48, fontWeight: 600, letterSpacing: '-.03em', color: i < 3 ? '#d9b35e' : T, lineHeight: 1, marginBottom: 12 }}>
                {s.n}<span style={{ fontSize: 24, color: i < 3 ? '#d9b35e' : sub }}>{s.su}</span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.65 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </S>

      <CaseFooter nextTitle="P3 Marine" nextSubtitle="Yacht Management Platform from Scratch" nextHref="/work/p3marine" />

    </>
  )
}

// ── ХЕЛПЕРЫ (ОБНОВЛЕНЫ ДЛЯ РАЗМЕРА И ЯРКОСТИ) ───────────────────────────────

function S({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <FadeUp>
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <div style={{ fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: dim, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'block', width: 30, height: 1, background: line2 }} />{num}
        </div>
        {children}
      </div>
    </FadeUp>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: 34, fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.2, color: '#F2F0EC', marginBottom: 24, maxWidth: 720 }}>{children}</h2>
}

function Em({ children }: { children: React.ReactNode }) {
  return <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(210,204,194,0.85)' }}>{children}</em>
}

function P({ children, mt }: { children: React.ReactNode; mt?: boolean }) {
  return <p style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.85, color: 'rgba(220,216,208,0.85)', marginTop: mt ? 24 : 0 }}>{children}</p>
}

function B({ children }: { children: React.ReactNode }) {
  return <strong style={{ color: '#F2F0EC', fontWeight: 500 }}>{children}</strong>
}

function Ins({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: '2px solid rgba(255,255,255,0.3)', padding: '24px 32px', margin: '40px 0', background: 'rgba(255,255,255,0.03)', borderRadius: '0 12px 12px 0' }}>
      <div style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 10 }}>{label}</div>
      <div style={{ fontSize: 18, fontWeight: 300, fontStyle: 'italic', color: '#F2F0EC', lineHeight: 1.7 }}>{children}</div>
    </div>
  )
}

function Think({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ background: '#1A1A18', border: `1px solid ${line}`, borderRadius: 16, padding: 36, margin: '40px 0' }}>
      <div style={{ fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: dim, marginBottom: 16 }}>{label}</div>
      <div style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.8, color: 'rgba(220,216,208,0.85)' }}>{children}</div>
    </div>
  )
}

function Quote({ author, children }: { author: string; children: React.ReactNode }) { 
  return (
    <div style={{ borderLeft: '3px solid rgba(255,255,255,0.3)', padding: '28px 36px', margin: '40px 0' }}>
      <div style={{ fontSize: 22, fontWeight: 300, fontStyle: 'italic', color: '#F2F0EC', lineHeight: 1.6, marginBottom: 12 }}>{children}</div>
      <div style={{ fontSize: 14, color: dim }}>{author}</div>
    </div>
  ) 
}

function Img({ src, alt, cap }: { src: string; alt: string; cap: string }) { 
  return (
    <>
      <div style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${line}`, margin: '40px 0' }}>
        <Image src={src} alt={alt} width={1160} height={700} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
      {cap && <div style={{ fontSize: 14, fontWeight: 300, color: dim, marginTop: 12, lineHeight: 1.6 }}>{cap}</div>}
    </>
  ) 
}

function Stats({ items }: { items: { n: string; d: string }[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${items.length},1fr)`, gap: 16, marginTop: 52 }}>
      {items.map(s => (
        <div key={s.n} style={{ background: '#1A1A18', border: `1px solid ${line}`, borderRadius: 16, padding: '34px 30px' }}>
          <div style={{ fontSize: 48, fontWeight: 600, letterSpacing: '-.04em', color: ACC, lineHeight: 1, marginBottom: 12 }}>{s.n}</div>
          <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.6 }}>{s.d}</div>
        </div>
      ))}
    </div>
  )
}

function Steps({ items }: { items: { n: string; t: string; d: string; i: string }[] }) { 
  return (
    <div style={{ marginTop: 48 }}>
      {items.map((s, i, a) => (
        <div key={s.n} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 24, padding: '40px 0', borderTop: `1px solid ${line}`, borderBottom: i === a.length - 1 ? `1px solid ${line}` : 'none' }}>
          <div style={{ fontSize: 14, fontWeight: 500, color: dim, paddingTop: 4 }}>{s.n}</div>
          <div>
            <div style={{ fontSize: 20, fontWeight: 600, color: '#F2F0EC', marginBottom: 12, letterSpacing: '-.01em' }}>{s.t}</div>
            <div style={{ fontSize: 16, fontWeight: 300, color: sub, lineHeight: 1.8 }}>{s.d}</div>
            {s.i && <div style={{ marginTop: 18, fontSize: 15, fontWeight: 300, fontStyle: 'italic', color: 'rgba(210,204,194,0.45)', lineHeight: 1.7, borderTop: `1px solid ${line}`, paddingTop: 18 }}>{s.i}</div>}
          </div>
        </div>
      ))}
    </div>
  ) 
}