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

const bg2 = '#1A1A18', T = '#E5E0D8', sub = 'rgba(210,204,194,0.5)', dim = 'rgba(210,204,194,0.22)', line = 'rgba(255,255,255,0.07)', line2 = 'rgba(255,255,255,0.13)', ACC = '#D4A843'

export default function XgoPage() {
  return (
    <>
      <CaseNavbar title="Elvin Garaev" />
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '100px 52px 56px', borderBottom: `1px solid ${line}` }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
          {['Product Designer', 'Web3', 'iOS & Android', 'Branding', 'Freelance'].map(t => (
            <span key={t} style={{ fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', color: t === 'Product Designer' ? ACC : sub, background: t === 'Product Designer' ? `${ACC}18` : 'rgba(255,255,255,0.04)', border: `1px solid ${t === 'Product Designer' ? `${ACC}40` : line}`, borderRadius: 100, padding: '4px 12px' }}>{t}</span>
          ))}
        </div>
        <h1 style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.05, color: T, marginBottom: 16, maxWidth: 820 }}>
          XGo Wallet — Crypto & Fiat,<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: sub }}>designed for humans</em>
        </h1>
        <p style={{ fontSize: 16, fontWeight: 300, color: sub, maxWidth: 680, marginBottom: 40, lineHeight: 1.7 }}>A crypto wallet built from absolute zero — branding, research, full UX/UI. Designed for people who aren't crypto people. 5K+ downloads after launch.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', border: `1px solid ${line}`, borderRadius: 14, overflow: 'hidden', maxWidth: 760 }}>
          {[{ l: 'Role', v: 'Product Designer' }, { l: 'Timeline', v: '2021–2022' }, { l: 'Platform', v: 'iOS · Android · Web' }, { l: 'Type', v: '0→1 Startup' }].map((m, i, a) => (
            <div key={m.l} style={{ padding: '18px 22px', borderRight: i < a.length - 1 ? `1px solid ${line}` : 'none' }}>
              <div style={{ fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: dim, marginBottom: 5 }}>{m.l}</div>
              <div style={{ fontSize: 13, fontWeight: 500, color: T, lineHeight: 1.3 }}>{m.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Cover — Mobile App overview */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 52px' }}>
        <Image src="/images/misc/6-xgo.png" alt="XGo Wallet Mobile App" width={1920} height={900} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 14 }} />
      </div>

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

      <S num="02 · Why Existing Wallets Weren't Working">
        <H2>Why existing wallets<br /><Em>weren't working</Em></H2>
        <P>Crypto wallet UX has a well-documented problem: it was designed by people who understand blockchain for people who understand blockchain. The result: fluent to 3% of the potential market, alienating to everyone else. <B>We audited the five most-used wallets in 2021 and found the same failures repeated across all of them.</B></P>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '32px 0' }}>
          <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
            <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,100,100,0.5)', marginBottom: 10 }}>What existing wallets got wrong</div>
            <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.7 }}>Exposed private keys and seed phrases without explanation. No fiat equivalent displayed by default. No onboarding — just a dashboard. Inconsistent design systems across screens. No personality, no brand, no emotional connection. <strong style={{ color: T, fontWeight: 500 }}>Using them felt like reading a spreadsheet.</strong></div>
          </div>
          <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
            <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(100,200,100,0.5)', marginBottom: 10 }}>XGo's design mandate</div>
            <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.7 }}><strong style={{ color: T, fontWeight: 500 }}>Human-first wallet design.</strong> Fiat values always visible. Security education baked into onboarding. A distinctive visual identity that made the product feel premium. One-tap swaps. A unique Wallet ID (alice.xgo.id) instead of a cryptographic address.</div>
          </div>
        </div>
        <Quote author="— User interview, XGo Wallet discovery research, 2021">"I downloaded three crypto wallets and gave up on all of them. They all look like they were designed for people who already know what they're doing."</Quote>
      </S>

      <S num="03 · Research & Foundation">
        <H2>Understanding the user before<br /><Em>building the product</Em></H2>
        <P>Because we were building from zero, research had to answer two questions simultaneously: what do crypto-native users need that existing wallets don't provide, and what would it take to bring non-crypto users into the space?</P>
        <B>These are very different design problems, and we had to design one product that served both.</B>
        <br /><br />
        <P>We conducted user interviews across three groups: experienced crypto users who had tried multiple wallets, people who had attempted to enter crypto and given up, and people who had never tried crypto at all. The findings from the second group — the "tried and quit" users — were the most valuable. They told us exactly what the friction points were, in specific detail.</P>
        <Img src="/images/xgo/01-XGo-Information-Model.png" alt="XGo Information Model" cap="Information model — entity relationships across the XGo ecosystem. Built to map the full data architecture before designing any interface." />
        <Think label="The information architecture insight">One of the first things we did was build a full information model before drawing a single screen. <B>Most wallet UX problems come from unclear information hierarchy, not bad visual design.</B><br /><br />The model forced us to answer hard questions early: Is "Cash" the same as "Fiat"? How does a Wallet ID relate to a crypto address? Where does "Grow" (yield earning) live in the hierarchy? Answering these in a diagram saved weeks of rework later.</Think>
      </S>

      <S num="04 · Branding & Identity">
        <H2>Building a brand that people<br /><Em>actually want to be part of</Em></H2>
        <P>Most crypto wallets have logos and colour schemes. They don't have brands. <B>XGo needed a brand strong enough that users would feel proud to say "I use XGo" the same way they'd say "I use Revolut."</B> In a crowded market, brand is a moat.</P> <br />
        <P>The gradient card design — pink to gold, with the XGo wordmark — was the centrepiece of the identity. It became the product's most distinctive visual element and the thing users shared most on social media. It was designed to feel like a premium payment card, not a crypto interface. That distinction was intentional. In a crowded market, brand is a moat.</P><B>When users see the card, they think "I want that" before they think "how does blockchain work."</B>
        <Img src="/images/xgo/02-XGo-Virtual-Card.png" alt="XGo Virtual Card" cap="XGo Virtual Card — pink-to-gold gradient with Apple Pay and Google Pay integration. Wallet ID displayed as a human-readable identifier (alice.xgo.id) instead of a cryptographic address. The card design was the most shared visual element post-launch." />
        <Img src="/images/xgo/03-Wallet.ID-website.png" alt="Wallet.ID website" cap='Wallet.ID landing page — "An ID for everything that you own, and everything that you are, across Web2 and Web3." Interactive network graph showing xgo.id usernames.' />
      </S>

      <S num="05 · Design Process — 0 to Launch">
        <H2>0 to launch in structured stages —<br /><Em>every decision documented</Em></H2>
        <Steps items={[
          { n: '01', t: 'Market Research & Web3 Landscape Analysis', d: 'Full audit of MetaMask, Trust Wallet, Rainbow, Coinbase Wallet, and Phantom. Mapped the Web3 ecosystem to understand where XGo needed to integrate — which wallets, dApps, and browsers needed to work seamlessly.', i: 'The most technically capable wallets had the worst onboarding. Capability and usability are inversely correlated in most crypto products.' },
          { n: '02', t: 'User Interviews & Persona Development', d: 'Interviewed users across three profiles: the Crypto Native, the Curious Newcomer, and the Fiat-First User. The Curious Newcomer became our primary design target.', i: 'The Crypto Native\'s needs were the most vocal but the least strategically important. The Curious Newcomer would use XGo only if the UX removed their anxiety entirely.' },
          { n: '03', t: 'Information Architecture & Wallet ID Concept', d: 'Defined the product\'s core IA — the split between Wallet and Market, the Cash/Crypto distinction, the placement of Grow (yield). Most critically, developed the Wallet ID concept — replacing 0x-style addresses with human-readable identifiers (alice.xgo.id).', i: 'The Wallet ID idea came directly from user interviews. Every single non-crypto user we interviewed cited the same fear: "What if I type the wrong address?" alice.xgo.id is hard to mistype.' },
          { n: '04', t: 'Design System & Brand Identity', d: 'Built a complete design system covering colour tokens, typography (Inter for UI, larger weights for balances), component library, and iconography. The brand identity extended beyond the app.', i: '' },
          { n: '05', t: 'A/B Testing & Onboarding Optimisation', d: 'Tested two onboarding approaches: feature-first and security-first. The feature-first flow had 34% higher completion rates. Users needed to understand the value before they were willing to engage with the security setup.', i: 'Show the card first. Then the seed phrase.' },
          { n: '06', t: 'Launch & Growth Design', d: 'Designed the full App Store presence — screenshots, preview video frame, copy. Created a comprehensive marketing banner set. Designed the Wallet.ID landing page as a standalone growth surface.', i: '' },
        ]} />
      </S>
      <S num="06 · Final Design">
        <H2>Every screen designed for<br /><Em>the user who almost gave up on crypto</Em></H2>
        <P>The final product is a dark-first, clean interface — premium without being intimidating. The wallet dashboard shows what matters: total balance in fiat, the gradient card, and four primary actions. <B>Complexity is earned by scrolling, not imposed at arrival.</B></P>
        <Img src="/images/xgo/04-XGo-App-—-three-key-screens.png" alt="XGo App — three key screens" cap="Three core screens — Wallet dashboard (total balance, XGo card, Buy/Receive/Send/Swap, Grow feature). Market view (231+ assets with real-time prices). Grow screen (NEAR 5% APY, BTC 2% APY, EOS 4% APY)." />
        <Img src="/images/xgo/05-XGo-Wallet-ID-Ecosystem.png" alt="XGo Wallet ID Ecosystem" cap="Wallet.ID Ecosystem — integrates with 100+ wallets, apps and browsers. Wallets: Coinbase, Rainbow, Trust Wallet, My Crypto. Apps: Uniswap, Etherscan, Showtime, OpenSea, Aave." />
        <Img src="/images/xgo/06-Wallet.ID-—-Your-ID-Your-Wallet.png" alt="Wallet.ID — Your ID Your Wallet" cap='"Your ID, Your Wallet, Your Way" — landing hero with 2.79M+ .ETH Usernames Claimed social proof.' />
      </S>

      <S num="07 · Marketing & Growth Design">
        <H2>Design beyond the app —<br /><Em>the full acquisition ecosystem</Em></H2>
        <P>A product is only as successful as its ability to acquire users. For XGo, design didn't stop at the app — it extended into every surface where potential users would first encounter the brand. <B>We designed a complete marketing system: landing pages, App Store assets, and a multi-format banner library for paid acquisition.</B></P>
        <Img src="/images/xgo/07-XGo-Marketing-Banners.png" alt="XGo Marketing Banners" cap='Marketing banner set — 15+ formats across 780×500, 746×790, 600×500, 600×400, 2320×130 sizes. Two campaign themes: "Claim your unique XGo Wallet ID" and "Trade more than 150+ currencies with ease." Dark and light variants with brand gradient accents. Designed for Google Display, social ads, and partner placements.' />
        <Think label="Why we designed marketing assets as part of the product process">
          Most design projects treat marketing assets as an afterthought — the product is done, then someone makes ads. We integrated marketing design into the product process from the beginning, for a specific reason: <B>the first impression of XGo for most users would not be the app — it would be a banner ad or the landing page.</B>
          <br /><br />
          If the marketing design was inconsistent with the app, users who arrived from ads would feel a disconnect on install. Designing both surfaces together ensured that the promise made in the ad was the experience delivered in the product.
        </Think>
      </S>

      <S num="08 · Impact & Reflection">
        <H2>What we shipped and<br /><Em>what building from zero taught us</Em></H2>
        <P>XGo Wallet launched on App Store and Google Play and reached 5K+ downloads in its first period — without paid install campaigns. Growth came from the Wallet.ID virality mechanic: users who claimed alice.xgo.id shared it, which drove organic awareness. <B>The most effective growth feature was a design decision made before a single line of code was written.</B></P>
        <Ins label="The thing I'd do differently">We underinvested in the post-onboarding experience — what users do in the first 72 hours after installing. We designed the onboarding well and the core features well, but the moment users finished setup, the product became relatively passive. The retention mechanic we needed was to give users a reason to open the app daily — a price alert system, a portfolio performance notification, something. The Grow feature was a step in that direction but wasn't prominent enough. That's the design work that would have moved retention numbers most.</Ins>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginTop: 44 }}>
          {[
            { n: '5K', su: '+', d: 'App downloads after launch — organic growth driven by the Wallet.ID virality mechanic and word of mouth' },
            { n: '+34', su: '%', d: 'Onboarding completion rate improvement — feature-first flow vs security-first flow in A/B test' },
            { n: '100', su: '+', d: 'Wallets, apps and browsers in the Wallet.ID ecosystem — deep Web3 integration from day one' },
            { n: '231', su: '+', d: 'Crypto assets supported — with real-time market data, yield indicators and filter/sort in the market view' },
            { n: '15', su: '+', d: 'Marketing banner formats designed — full acquisition ecosystem from landing page to paid ads' },
            { n: '0→1', su: '', d: 'Built entirely from scratch — brand, IA, design system, app, landing page, marketing assets. Every decision made from first principles.' },
          ].map((s, i) => (
            <div key={s.n + s.su} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
              <div style={{ fontSize: 42, fontWeight: 600, letterSpacing: '-.03em', color: i < 3 ? '#d9b35e' : T, lineHeight: 1, marginBottom: 10 }}>
                {s.n}<span style={{ fontSize: 22, color: i < 3 ? '#d9b35e' : sub }}>{s.su}</span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 300, color: sub, lineHeight: 1.65 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </S>

      <CaseFooter nextTitle="P3 Marine" nextSubtitle="Yacht Management Platform from Scratch" nextHref="/work/p3marine" />

    </>
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
function H2({ children }: { children: React.ReactNode }) { return <h2 style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.3, color: '#E5E0D8', marginBottom: 20, maxWidth: 680 }}>{children}</h2> }
function Em({ children }: { children: React.ReactNode }) { return <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(210,204,194,0.5)' }}>{children}</em> }
function P({ children, mt }: { children: React.ReactNode; mt?: boolean }) {
  return <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.9, color: 'rgba(210,204,194,0.72)', marginTop: mt ? 20 : 0 }}>{children}</p>
}
function B({ children }: { children: React.ReactNode }) { return <strong style={{ color: '#E5E0D8', fontWeight: 500 }}>{children}</strong> }
function Ins({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: '2px solid rgba(255,255,255,0.2)', padding: '20px 28px', margin: '32px 0', background: 'rgba(255,255,255,0.02)', borderRadius: '0 10px 10px 0' }}>
      <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: ACC, marginBottom: 8 }}>{label}</div>
      <div style={{ fontSize: 16, fontWeight: 300, fontStyle: 'italic', color: '#E5E0D8', lineHeight: 1.7 }}>{children}</div>
    </div>
  )
}
function Think({ label, children }: { label: string; children: React.ReactNode }) { return (<div style={{ background: '#1A1A18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 32, margin: '32px 0' }}><div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(210,204,194,0.22)', marginBottom: 12 }}>{label}</div><div style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.85, color: 'rgba(210,204,194,0.5)' }}>{children}</div></div>) }
function Quote({ author, children }: { author: string; children: React.ReactNode }) { return (<div style={{ borderLeft: '3px solid rgba(255,255,255,0.2)', padding: '24px 28px', margin: '32px 0' }}><div style={{ fontSize: 18, fontWeight: 300, fontStyle: 'italic', color: '#E5E0D8', lineHeight: 1.65, marginBottom: 10 }}>{children}</div><div style={{ fontSize: 12, color: 'rgba(210,204,194,0.22)' }}>{author}</div></div>) }
function Img({ src, alt, cap }: { src: string; alt: string; cap: string }) { return (<><div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', margin: '32px 0' }}><Image src={src} alt={alt} width={1160} height={700} style={{ width: '100%', height: 'auto', display: 'block' }} /></div>{cap && <div style={{ fontSize: 12, fontWeight: 300, color: 'rgba(210,204,194,0.22)', marginTop: 10, lineHeight: 1.6 }}>{cap}</div>}</>) }
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
function Steps({ items }: { items: { n: string; t: string; d: string; i: string }[] }) { return (<div style={{ marginTop: 44 }}>{items.map((s, i, a) => (<div key={s.n} style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: 20, padding: '32px 0', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: i === a.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}><div style={{ fontSize: 12, fontWeight: 500, color: 'rgba(210,204,194,0.22)', paddingTop: 3 }}>{s.n}</div><div><div style={{ fontSize: 17, fontWeight: 600, color: '#E5E0D8', marginBottom: 10, letterSpacing: '-.01em' }}>{s.t}</div><div style={{ fontSize: 15, fontWeight: 300, color: 'rgba(210,204,194,0.5)', lineHeight: 1.8 }}>{s.d}</div>{s.i && <div style={{ marginTop: 14, fontSize: 14, fontWeight: 300, fontStyle: 'italic', color: 'rgba(210,204,194,0.4)', lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 14 }}>{s.i}</div>}</div></div>))}</div>) }
