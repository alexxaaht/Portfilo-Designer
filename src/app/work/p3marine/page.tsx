import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import CaseNavbar from '@/components/CaseNavbar'
import FadeUp from '@/components/FadeUp'
import CaseFooter from '@/components/CaseFooter'


export const metadata: Metadata = {
  title: 'P3 Marine — Elvin Garaev',
  description: 'P3 Marine — Yacht Management Platform from Scratch. 300+ screens, 5 user roles.',
}

// ОБНОВЛЕННЫЕ ПЕРЕМЕННЫЕ (СВЕТЛЕЕ И КРУПНЕЕ)
const bg2 = '#1A1A18', T = '#F2F0EC', sub = 'rgba(210,204,194,0.75)', dim = 'rgba(210,204,194,0.5)', line = 'rgba(255,255,255,0.08)', line2 = 'rgba(255,255,255,0.18)', ACC = '#8B9BB4'

export default function P3MarinePage() {
  return (
    <>
      <CaseNavbar title="Elvin Garaev" />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '120px 52px 64px', borderBottom: `1px solid ${line}` }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 32, flexWrap: 'wrap' }}>
          {['UX/UI Designer', 'SaaS', 'CRM', 'MVP', 'BARVA.TECH'].map(t => (
            <span key={t} style={{ fontSize: 12, letterSpacing: '.06em', textTransform: 'uppercase', color: t === 'UX/UI Designer' ? ACC : sub, background: t === 'UX/UI Designer' ? `${ACC}18` : 'rgba(255,255,255,0.05)', border: `1px solid ${t === 'UX/UI Designer' ? `${ACC}40` : line}`, borderRadius: 100, padding: '5px 14px' }}>{t}</span>
          ))}
        </div>
        <h1 style={{ fontSize: 'clamp(40px,6vw,68px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.05, color: T, marginBottom: 48, maxWidth: 850 }}>
          P3 Marine — Yacht Management<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: sub }}>Platform from Scratch</em>
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', border: `1px solid ${line}`, borderRadius: 16, overflow: 'hidden', width: '100%' }}>
          {[{ l: 'Role', v: 'UX/UI Designer' }, { l: 'Timeline', v: '2023–2024' }, { l: 'Screens', v: '300+' }, { l: 'Company', v: 'BARVA.TECH' }].map((m, i, a) => (
            <div key={m.l} style={{ padding: '22px 26px', borderRight: i < a.length - 1 ? `1px solid ${line}` : 'none' }}>
              <div style={{ fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: dim, marginBottom: 6 }}>{m.l}</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: T, lineHeight: 1.3 }}>{m.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* COVER */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 52px' }}>
        <Image src="/images/p3marine/00-P3-Marine-—-Key-Benefits.png" alt="P3 Marine Key Benefits" width={1920} height={900} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 16 }} priority />
      </div>

      {/* 01 OVERVIEW */}
      <S num="01 · Overview">
        <H2>The yachting industry runs on<br /><Em>spreadsheets and WhatsApp groups</Em></H2>
        <P>Managing a superyacht involves coordinating across owners, charter companies, family offices, captains, crew, and accountants simultaneously. <B>The existing tools for this were cobbled together from generic software not built for the context.</B></P>
        <P mt>P3 Marine is a financial and operational management platform for the marine industry. We built it from zero: research, IA, design system, and 300+ screens. <B>We built it from the ground up.</B></P>
        <Ins label="Why this was genuinely hard">Most B2B SaaS products have two or three user types. P3 Marine had five — with genuinely different mental models and data access requirements. Designing for an Owner and a Crew member is not just a permission problem. It's an information architecture problem.</Ins>
        <Stats items={[
          { n: '300+', d: 'Screens designed across all platforms — desktop, tablet, and mobile resolutions' },
          { n: '5', d: 'Distinct user roles — Owner, Manager, Accountant, Captain, Crew — with purpose-built interfaces' },
          { n: '20+', d: 'Team members collaborated across the project — developers, PMs, and QA' },
        ]} />
      </S>

      {/* 02 PROBLEM SPACE */}
      <S num="02 · The Problem Space">
        <H2>What yacht management actually<br /><Em>looks like without a platform</Em></H2>
        <P>Before designing P3 Marine, we understood how yacht management companies actually operated: <B>most used a combination of Excel, PDF documents, WhatsApp groups, and phone calls.</B></P>
        <P mt>Financial reporting had to satisfy multiple stakeholders with different levels of authority. Crew needed mobile access in environments with unreliable connectivity. <B>Every one of these constraints shaped a design decision.</B></P>
        <Img src="/images/p3marine/01-P3-Marine-—-How-it-works.png" alt="How it works" cap="P3 Marine platform overview — Expense Management, Financial Invoicing, Analytics Dashboard, and Card Management." />
        <Quote author="Yacht management company interview">"We manage seven yachts... every one of them uses a different spreadsheet. When a client asks for a summary, it takes us two days to compile."</Quote>
      </S>

      {/* 03 USER ROLES */}
      <S num="03 · User Roles">
        <H2>The most complex design problem<br /><Em>wasn't the interface — it was the roles</Em></H2>
        <P>Defining the five user roles was the foundational design work. <B>We spent significant time on role profiling before touching any interface design.</B></P>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 40 }}>
          {[
            { ic: '⚓', t: 'Owner / Family Office', d: 'High-level financial visibility. Approves major expenditures. Needs trustworthy summaries, not operational detail.' },
            { ic: '🏢', t: 'Management Company', d: 'Full operational access. Manages crew, finances, and charters. The primary power user of the platform.' },
            { ic: '📊', t: 'Accountant', d: 'Financial data access only. Transaction logs and expense categories. Needs dense, exportable data tables.' },
            { ic: '⛵', t: 'Captain', d: 'Operational access for their yacht. Manages crew and logs expenses. Primarily uses the platform from the yacht.' },
            { ic: '👤', t: 'Crew Member', d: 'Limited access. Views schedules and logs personal expenses on their prepaid card. Simplest interface.' },
            { ic: '🤝', t: 'Charter Client', d: 'Temporary access. Views booking details and costs. Read-only, designed for occasional use.' },
          ].map(r => (
            <div key={r.t} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: 32 }}>
              <div style={{ fontSize: 26, marginBottom: 16 }}>{r.ic}</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: T, marginBottom: 10 }}>{r.t}</div>
              <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.75 }}>{r.d}</div>
            </div>
          ))}
        </div>
        <Think label="The architecture insight">The Owner and the Crew Member don't just need different levels of access — they need entirely different information hierarchies. An Owner wants totals and approvals; a Crew member wants today's schedule and their card balance.</Think>
        <Img src="/images/p3marine/02-Role-prioritisation-and-feature-mapping.png" alt="Role prioritisation" cap="Role-based feature prioritisation — value/effort analysis per role." />
      </S>

      {/* 04 RESEARCH & IA */}
      <S num="04 · Research & IA">
        <H2>Mapping a complex domain<br /><Em>before designing it</Em></H2>
        <P>P3 Marine operates in a genuinely complex domain. <B>You cannot design the information architecture of a financial platform by intuition.</B> We built a full entity model before touching UI.</P>
        <Img src="/images/p3marine/03-P3-Marine-system-map-—-Mria-CRM.png" alt="System map" cap="System architecture map — from communication channels to core CRM modules." />
        <Think label="From entity model to screens">We spent two weeks building the entity model. Is a "Charter" the same as a "Client"? Answering these in a diagram is much cheaper than in a shipped interface.</Think>
        <Img src="/images/p3marine/04-CRM-entity-model.png" alt="Entity model" cap="CRM entity model mapping mandatory fields and relationships." />
        <Img src="/images/p3marine/05-Feature-mapping-board.png" alt="Feature mapping" cap="MVP feature prioritisation board mapped by impact and effort." />
      </S>

      {/* 05 DESIGN PROCESS */}
      <S num="05 · Design Process">
        <H2>From entity model to<br /><Em>300+ screens in production</Em></H2>
        <div style={{ marginTop: 48 }}>
          {[
            { n: '01', t: 'User Role Profiling', d: 'Defined five primary user types. Owners wanted summary-level data with drill-down on demand — not detailed transaction logs by default.', i: 'This simplified the owner dashboard design significantly.' },
            { n: '02', t: 'Competitive Analysis', d: 'Audited Yachtspot, Dockmaster, and Siren. Existing tools were built by maritime professionals for professionals, assuming too much domain expertise.', i: '' },
            { n: '03', t: 'Design System', d: 'Built the system before any screens. Navy and white visual language to match high-net-worth expectations. <B>Users managing $50M yachts expect premium software.</B>', i: 'Typographic decision: used a 16px base size for legibility in bright sunlight.' },
            { n: '04', t: 'Screen Design', d: 'Designed every screen across 5 breakpoints. Mobile was critical for Captain and Crew — designed for one-hand use and glanceability.', i: '' },
            { n: '05', t: 'Iterative Testing', d: 'Redesigned validation and error messaging three times before users stopped getting confused. Failure states were designed to maintain the premium feel.', i: '' },
          ].map((s, i, a) => (
            <div key={s.n} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 24, padding: '40px 0', borderTop: `1px solid ${line}`, borderBottom: i === a.length - 1 ? `1px solid ${line}` : 'none' }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: dim, paddingTop: 4 }}>{s.n}</div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 600, color: T, marginBottom: 12, letterSpacing: '-.01em' }}>{s.t}</div>
                <div style={{ fontSize: 16, fontWeight: 300, color: sub, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: s.d.replace(/<B>(.*?)<\/B>/g, `<strong style="color:${T};font-weight:500">$1</strong>`) }} />
                {s.i && <div style={{ marginTop: 18, fontSize: 15, fontWeight: 300, fontStyle: 'italic', color: 'rgba(210,204,194,0.45)', lineHeight: 1.7, borderTop: `1px solid ${line}`, paddingTop: 18 }}>{s.i}</div>}
              </div>
            </div>
          ))}
        </div>
      </S>

      {/* 06 FINAL DESIGN */}
      <S num="06 · Final Design">
        <H2>A platform that feels as premium<br /><Em>as the assets it manages</Em></H2>
        <P>The visual language was a deliberate decision. <B>The people using this platform manage assets worth millions.</B> The interface needed to feel trustworthy and precise.</P>
        <Img src="/images/p3marine/06-P3-Marine-—-Clients-list.png" alt="Clients list" cap="Management view clients list with multi-state status indicators." />
        <Img src="/images/p3marine/07-P3-Marine-—-All-screens-Figma.png" alt="All screens" cap="Figma overview — showing the breadcrumb system and document management." />
        <Img src="/images/p3marine/08-P3-Marine-—-Card-details.png" alt="Card details" cap="Prepaid card management for crew members with expense breakdown." />
        <Img src="/images/p3marine/09-P3-Marine-—-Mobile-views.png" alt="Mobile views" cap="Mobile views showing asset details and user approval lists." />
        <Img src="/images/p3marine/10-Error-states-—-500-404-403.png" alt="Error states" cap="Premium error states maintaining the product tone." />
      </S>

      {/* 07 KEY DECISIONS */}
      <S num="07 · Key Design Decisions">
        <H2>What we built and<br /><Em>the thinking behind each decision</Em></H2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 40 }}>
          {[
            { wide: true, ic: '🏗️', t: 'Separate dashboards per role', d: 'Rather than data hidden by permissions, we designed genuinely separate experiences. This eliminated greyed-out features and disorientation.' },
            { wide: false, ic: '💳', t: 'Prepaid card management', d: 'Managers issue, block, and top-up crew cards from the platform. Replaced the old cash envelope system.' },
            { wide: false, ic: '📊', t: 'Real-time financial analytics', d: 'Transaction logs, FX tracking, and revenue analytics in one dashboard with export to PDF and CSV.' },
            { wide: false, ic: '⚡', t: 'Offline with automatic sync', d: 'Designed for maritime environments with unreliable connectivity. Actions queue for sync automatically.' },
            { wide: false, ic: '🔒', t: 'Approval flows', d: 'Large expenditures require approval from the appropriate level (Owner/Family Office).' },
            { wide: false, ic: '🌍', t: 'Multi-currency IBANs', d: 'Virtual IBANs supporting USD, EUR, GBP with real-time rate logging.' },
          ].map(s => (
            <div key={s.t} style={{ gridColumn: s.wide ? 'span 2' : undefined, background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: 32 }}>
              <div style={{ fontSize: 26, marginBottom: 16 }}>{s.ic}</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: T, marginBottom: 10 }}>{s.t}</div>
              <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.75 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </S>

      {/* 08 IMPACT */}
      <S num="08 · Impact & Reflection">
        <H2>What we delivered and<br /><Em>what building this taught us</Em></H2>
        <P>P3 Marine launched and is actively used by yacht management companies to manage their client portfolios, replacing the spreadsheet-and-WhatsApp model.</P>
        <Ins label="What I'd do differently">We underinvested in the Owner view. A summary visualisation layer — "here's what your yacht cost you simply" — would have made the platform even more valuable for the highest-authority users.</Ins>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 52 }}>
          {[
            { n: '300', su: '+', d: 'Screens designed across all platforms — desktop, tablet, and mobile' },
            { n: '5', su: '', d: 'Distinct role-based interfaces with separate information architectures' },
            { n: '20', su: '+', d: 'Team members across the project — developers, PMs, and engineers' },
            { n: '✦', su: '', d: 'Platform live at p3marine.com — actively used across Europe' },
            { n: '−2', su: ' days', d: 'Reduction in financial reporting time via real-time dashboard access' },
            { n: '0→1', su: '', d: 'Built entirely from scratch — research, IA, system, and handoff.' },
          ].map((s, i) => (
            <div key={s.n + s.su} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: '34px 28px' }}>
              <div style={{ fontSize: 48, fontWeight: 600, letterSpacing: '-.03em', color: i < 3 ? '#627999' : T, lineHeight: 1, marginBottom: 12 }}>
                {s.n}<span style={{ fontSize: 24, color: i < 3 ? '#627999' : sub }}>{s.su}</span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.65 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </S>

      <CaseFooter nextTitle="UkrSibBank" nextSubtitle="Omnichannel CRM" nextHref="/work/ukrsibbank" />    </>
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
      <div style={{ fontSize: 14, color: dim }}>— {author}</div>
    </div>
  )
}

function Img({ src, alt, cap }: { src: string; alt: string; cap: string }) {
  return (
    <>
      <div style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${line}`, margin: '40px 0' }}>
        <Image src={src} alt={alt} width={1160} height={700} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
      {cap && <div style={{ fontSize: 14, fontWeight: 300, color: dim, marginTop: 14, lineHeight: 1.6 }}>{cap}</div>}
    </>
  )
}

function Stats({ items }: { items: { n: string; d: string }[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${items.length},1fr)`, gap: 16, marginTop: 52 }}>
      {items.map(s => (
        <div key={s.n} style={{ background: '#1A1A18', border: `1px solid ${line}`, borderRadius: 16, padding: '34px 30px' }}>
          <div style={{ fontSize: 48, fontWeight: 600, letterSpacing: '-.04em', color: '#F2F0EC', lineHeight: 1, marginBottom: 12 }}>{s.n}</div>
          <div style={{ fontSize: 14, fontWeight: 300, color: 'rgba(210,204,194,0.7)', lineHeight: 1.6 }}>{s.d}</div>
        </div>
      ))}
    </div>
  )
}