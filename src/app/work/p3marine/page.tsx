import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import CaseNavbar from '@/components/CaseNavbar'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'P3 Marine — Elvin Garaev',
  description: 'P3 Marine — Yacht Management Platform from Scratch. 300+ screens, 5 user roles.',
}

const bg2 = '#1A1A18', T = '#E5E0D8', sub = 'rgba(210,204,194,0.5)', dim = 'rgba(210,204,194,0.22)', line = 'rgba(255,255,255,0.07)', line2 = 'rgba(255,255,255,0.13)', ACC = '#8B9BB4'

export default function P3MarinePage() {
  return (
    <>
      <CaseNavbar title="Elvin Garaev" />
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '100px 52px 56px', borderBottom: `1px solid ${line}` }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
          {['UX/UI Designer', 'SaaS', 'CRM', 'MVP', 'BARVA.TECH'].map(t => (
            <span key={t} style={{ fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', color: t === 'UX/UI Designer' ? ACC : sub, background: t === 'UX/UI Designer' ? `${ACC}18` : 'rgba(255,255,255,0.04)', border: `1px solid ${t === 'UX/UI Designer' ? `${ACC}40` : line}`, borderRadius: 100, padding: '4px 12px' }}>{t}</span>
          ))}
        </div>
        <h1 style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.05, color: T, marginBottom: 40, maxWidth: 820 }}>
          P3 Marine — Yacht Management<br /><em style={{ fontStyle: 'italic', fontWeight: 300, color: sub }}>Platform from Scratch</em>
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', border: `1px solid ${line}`, borderRadius: 14, overflow: 'hidden', maxWidth: 760 }}>
          {[{ l: 'Role', v: 'UX/UI Designer' }, { l: 'Timeline', v: '2023–2024' }, { l: 'Screens', v: '300+' }, { l: 'Company', v: 'BARVA.TECH' }].map((m, i, a) => (
            <div key={m.l} style={{ padding: '18px 22px', borderRight: i < a.length - 1 ? `1px solid ${line}` : 'none' }}>
              <div style={{ fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: dim, marginBottom: 5 }}>{m.l}</div>
              <div style={{ fontSize: 13, fontWeight: 500, color: T, lineHeight: 1.3 }}>{m.v}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 52px' }}>
        <Image src="/images/p3marine/00-P3-Marine-—-Key-Benefits.png" alt="P3 Marine Key Benefits" width={1920} height={900} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 14 }} />
      </div>

      <S num="01 · Overview">
        <H2>The yachting industry runs on<br /><Em>spreadsheets and WhatsApp groups</Em></H2>
        <P>Managing a superyacht involves coordinating across owners, charter companies, family offices, management companies, captains, crew, accountants, and lawyers — simultaneously, across time zones, in multiple currencies. <B>The existing tools for this were cobbled together from generic software not built for the context.</B></P>
        <P mt>P3 Marine is a financial and operational management platform for the marine industry. We built it from zero: research, information architecture, design system, 300+ screens, and full developer handoff. <B>We built it from the ground up.</B></P>
        <Ins label="Why this was genuinely hard">Most B2B SaaS products have two or three user types. P3 Marine had five — with genuinely different mental models, different technical sophistication, and different data access requirements. Designing for a superyacht owner who wants a high-level financial overview and a crew member who needs to log daily expenses is not just a permission problem. It's a completely different information architecture problem.</Ins>
        <Stats items={[
          { n: '300+', d: 'Screens designed across all platforms — desktop, two tablet sizes, and two mobile resolutions' },
          { n: '5', d: 'Distinct user roles — Owner, Manager, Accountant, Captain, Crew — each with a purpose-built interface' },
          { n: '20+', d: 'Team members collaborated across the project — developers, product managers, backend engineers, and QA' },
        ]} />
      </S>

      <S num="02 · The Problem Space">
        <H2>What yacht management actually<br /><Em>looks like without a platform</Em></H2>
        <P>Before designing P3 Marine, we understood how yacht management companies actually operated. The answer: <B>most used a combination of Excel, PDF documents, WhatsApp groups, and phone calls.</B> For assets worth tens of millions of dollars, this was the operational infrastructure.</P><br />
        <P>The challenges weren't just operational — they were structural. Charter companies and direct owners needed different things from the same platform. Financial reporting had to satisfy multiple stakeholders with different levels of financial authority. Crew needed mobile access in environments with unreliable connectivity. <B>Every one of these constraints shaped a design decision.</B></P>
        <Img src="/images/p3marine/01-P3-Marine-—-How-it-works.png" alt="P3 Marine — How it works" cap="P3 Marine platform overview — Expense Management, Automated Transaction System, Financial Invoicing, Charter Account Management, Analytics Dashboard, Card Management." />
        <Quote author="— Yacht management company interview, P3 Marine discovery research">"We manage seven yachts across three ownership structures. Every one of them uses a different spreadsheet. When a charter client asks for a financial summary, it takes us two days to compile."</Quote>
      </S>

      <S num="03 · User Roles — The Most Complex Design Problem">
        <H2>The most complex design problem<br /><Em>wasn't the interface — it was the roles</Em></H2>
        <P>Defining the five user roles was the foundational design work of the entire project. <B>We spent significant time on role profiling before touching any interface design.</B></P>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginTop: 32 }}>
          {[
            { ic: '⚓', t: 'Owner / Family Office', d: 'High-level financial visibility. Approves major expenditures. Sees portfolio view across multiple assets. Needs trustworthy summaries, not operational detail.' },
            { ic: '🏢', t: 'Management Company', d: 'Full operational access. Manages crew, finances, charters, and documents. The primary power user — runs the platform day-to-day on behalf of owners.' },
            { ic: '📊', t: 'Accountant', d: 'Financial data access only. Transaction logs, invoices, expense categories. Cannot modify operational settings. Needs dense, exportable data tables.' },
            { ic: '⛵', t: 'Captain', d: 'Operational access for their yacht. Manages crew, logs expenses, views charter schedules. Mobile-first — primarily uses the platform from the yacht.' },
            { ic: '👤', t: 'Crew Member', d: 'Limited access. Views schedules, logs personal expenses on their prepaid card. Needs the simplest interface — often non-technical users in physical working environments.' },
            { ic: '🤝', t: 'Charter Client', d: 'Temporary access during charter period. Views booking details, APA allocation, and costs. Read-only, time-limited, designed for occasional use.' },
          ].map(r => (
            <div key={r.t} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
              <div style={{ fontSize: 24, marginBottom: 14 }}>{r.ic}</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: T, marginBottom: 8 }}>{r.t}</div>
              <div style={{ fontSize: 13, fontWeight: 300, color: sub, lineHeight: 1.75 }}>{r.d}</div>
            </div>
          ))}
        </div>
        <Think label="The architecture insight that changed the design">We initially designed P3 Marine as a single platform with role-based permissions. After testing with users, we realised this was wrong. <B>The Owner and the Crew Member don't just need different levels of access to the same information — they need entirely different information hierarchies.</B><br /><br />An Owner opens the platform and wants to see: total assets, total revenue, total expenses, and items requiring approval. A Crew Member wants to see: their schedule today, their card balance, and how to log an expense.</Think>
        <Img src="/images/p3marine/02-Role-prioritisation-and-feature-mapping.png" alt="Role prioritisation" cap="Role-based feature prioritisation — each role mapped against feature importance with value/effort analysis." />
      </S>

      <S num="04 · Research & Information Architecture">
        <H2>Mapping a complex domain<br /><Em>before designing it</Em></H2>
        <P>P3 Marine operates in a genuinely complex domain — financial regulations, multi-currency operations, AML/KYC requirements, charter agreements, crew contracts. <B>You cannot design the information architecture of a financial platform by intuition.</B> We built a full entity model and system map before touching any UI design.</P>
        <Img src="/images/p3marine/03-P3-Marine-system-map-—-Mria-CRM.png" alt="System map" cap="System architecture map — Customer communication channels → Mria CRM (Inbox, Leads & Deals, Contacts, Accounts, Projects, Activities & Tasks)." />
        <Think label="From entity model to screens">We spent two weeks building the entity model before drawing a single screen. <B>Is a "Charter" the same as a "Client"? How does a prepaid card relate to a crew member?</B> Answering these questions in a diagram is much cheaper than answering them in a shipped interface.</Think>
        <Img src="/images/p3marine/04-CRM-entity-model.png" alt="CRM entity model" cap="CRM entity model — Contacts, Companies, Leads, Deals, Accounts, Projects, Comments, Products, Jira Delivery Projects integration. Mandatory fields and entity relationships mapped before wireframing." />
        <Img src="/images/p3marine/05-Feature-mapping-board.png" alt="Feature mapping board" cap="Feature prioritisation board — MVP features distinguished from 'later' features. Each module mapped by impact and technical effort." />
      </S>

      <S num="05 · Design Process">
        <H2>From entity model to<br /><Em>300+ screens in production</Em></H2>
        <div style={{ marginTop: 44 }}>
          {[
            { n: '01', t: 'User Role Profiling & Hypothesis Generation', d: 'Defined five primary user types with detailed profiles: their technical sophistication, primary tasks, frequency of use, device context, and most critical information needs. Generated hypotheses about each role\'s pain points and tested them with yacht management professionals before committing to any design decisions.', i: 'The most important hypothesis we tested: "Owners want to see detailed transaction data." It was wrong. Owners wanted summary-level financial data with the ability to drill down on demand — but the drill-down was rarely used. This significantly simplified the owner dashboard design.' },
            { n: '02', t: 'Competitive Analysis of Marine CRM Platforms', d: 'Audited existing yacht management software — Yachtspot, Dockmaster, Siren, and general maritime ERP systems. The finding was consistent: existing tools were built by maritime professionals for maritime professionals. <B>The interfaces assumed domain expertise that many users — especially family office staff — simply didn\'t have.</B> P3 Marine\'s differentiation was accessibility without sacrificing capability.', i: '' },
            { n: '03', t: 'Information Architecture & Design System', d: 'Built the IA across all five role views, then created the design system before any product screens. The design system for P3 Marine was deliberately conservative — clean, professional, navy and white — to match the visual expectations of the high-net-worth context. <B>Users managing $50M yachts expect software that looks like it belongs in that world.</B> The warm terra-cotta accent colour was a deliberate choice to differentiate from the cold, grey aesthetic of generic financial software.', i: 'The typography decision: we used a larger base size (16px body) than most B2B platforms. Yacht management company staff often use the platform on large desktop monitors in bright sunlight. Legibility at a glance was more important than information density.' },
            { n: '04', t: '300+ Screen Design Across 5 Breakpoints', d: 'Designed every screen across desktop, two tablet sizes (landscape for office use, portrait for on-yacht use), and two mobile sizes. The mobile design was particularly important for Captain and Crew roles — they use the platform in physical environments, often with one hand, in bright sunlight or low light. <B>Every mobile interaction was designed for thumb reach and glanceability.</B>', i: '' },
            { n: '05', t: 'Iterative Testing & Developer Handoff', d: 'Ran multiple rounds of usability testing with yacht management professionals. Worked in close collaboration with a team of 20+ — developers, product managers, and QA — through the entire development process. Delivered detailed design specifications, interaction documentation, and component annotations for every screen.', i: 'The most useful testing artefact wasn\'t the wireframes — it was the error states. Testing revealed that users made predictable mistakes with the financial data entry flows, and we redesigned the validation and error messaging three times before users stopped getting confused. 500, 404, and 403 error pages were each designed to maintain the platform\'s premium feel even in failure states.' },
          ].map((s, i, a) => (
            <div key={s.n} style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: 20, padding: '32px 0', borderTop: `1px solid ${line}`, borderBottom: i === a.length - 1 ? `1px solid ${line}` : 'none' }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: dim, paddingTop: 3 }}>{s.n}</div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 600, color: T, marginBottom: 10, letterSpacing: '-.01em' }}>{s.t}</div>
                <div style={{ fontSize: 15, fontWeight: 300, color: sub, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: s.d.replace(/<B>(.*?)<\/B>/g, `<strong style="color:${T};font-weight:500">$1</strong>`) }} />
                {s.i && <div style={{ marginTop: 14, fontSize: 14, fontWeight: 300, fontStyle: 'italic', color: 'rgba(210,204,194,0.4)', lineHeight: 1.6, borderTop: `1px solid ${line}`, paddingTop: 14 }}>{s.i}</div>}
              </div>
            </div>
          ))}
        </div>
      </S>

      <S num="06 · Final Design">
        <H2>A platform that feels as premium<br /><Em>as the assets it manages</Em></H2>
        <P>The visual language of P3 Marine was a deliberate design decision — not just an aesthetic one. <B>The people using this platform manage assets worth tens of millions of dollars.</B> The interface needed to feel trustworthy, precise, and premium — not like a generic SaaS tool with a logo swap.</P>
        <Img src="/images/p3marine/06-P3-Marine-—-Clients-list.png" alt="Clients list" cap="Clients list — Management view. Asset name, type, size, crew count, charter status, email, and multi-state status indicators (Pending, Active, Removed, Rejected, P3 account creation). Sortable columns, search and filter, paginated table (1-6 of 100). Add/Remove client actions contextually available." />
        <Img src="/images/p3marine/07-P3-Marine-—-All-screens-Figma.png" alt="All screens Figma" cap="Figma screens overview — Management/Clients/SuperAdminView (client detail, charter accounts list, charter account detail) showing the breadcrumb navigation system (Clients → Avalon → Charter accounts) and document management (CDD documents: COR/COBR, Authorization form, MYBA contracts)." />
        <Img src="/images/p3marine/08-P3-Marine-—-Card-details.png" alt="Card details" cap="Card details — Physical card management for crew members. Card balance ($2,563.898 USD), expense breakdown by category (Salary, Food, Fuel, Other), donut chart visualisation, Block/Top-up actions. Breadcrumb: Avalon → John Doe - Captain → Card details." />
        <Img src="/images/p3marine/09-P3-Marine-—-Mobile-views.png" alt="Mobile views" cap="Mobile views — Users list with search and filter (Captain/Admin roles, Waiting for approval status). Client detail (Avalon Loy, Active status) with yacht photos, asset details (Henri Lloyd — 50 Years of Pioneering Spirit, 50m Sailboat, crew 3). Warm terra-cotta accent on mobile matches desktop visual language." />
        <Img src="/images/p3marine/10-Error-states-—-500-404-403.png" alt="Error states" cap="Error states — 500 (unexpected server error), 404 (page doesn't exist), 403 (access denied). Each designed with the platform's visual language — large number, clear message, single Back action. Even failure states maintain the premium tone of the product." />
      </S>

      <S num="07 · Key Design Decisions">
        <H2>What we built and<br /><Em>the thinking behind each decision</Em></H2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 32 }}>
          {[
            { wide: true, ic: '🏗️', t: 'Separate dashboards per role — not one dashboard with permissions', d: 'The most important architectural decision. Rather than one information hierarchy with data hidden based on role, we designed genuinely separate dashboard experiences. An Owner\'s home screen shows portfolio value and pending approvals. A Crew Member\'s home screen shows today\'s schedule and card balance. Same platform, different products. This eliminated the disorienting experience of logging in and seeing a screen full of greyed-out features.' },
            { wide: false, ic: '💳', t: 'Prepaid card management for crew', d: 'Crew members receive prepaid cards for on-yacht expenses. Managers issue, block, top-up, and monitor cards from the platform. Expense categories (Salary, Food, Fuel, Other) track spending automatically. This replaced the cash envelope system many yachts still used.' },
            { wide: false, ic: '📊', t: 'Real-time financial analytics', d: 'Transaction logs, payment analytics, charter revenue, FX transaction tracking — all in one dashboard. Editable data tables for accountants who need to correct or annotate entries. Export to PDF and CSV for external reporting.' },
            { wide: false, ic: '⚡', t: 'Offline with automatic sync', d: 'Captains and crew use the platform at sea — often with unreliable connectivity. The mobile app was designed for offline-first use with automatic sync when connectivity returns. Every action in offline mode queues for sync without user intervention.' },
            { wide: false, ic: '🔒', t: 'Authority hierarchy & approval flows', d: 'Financial authority follows a structured hierarchy: Charter → Owner → Family Office → Management Company, with a key administrator assigned at each level. Large expenditures require approval from the appropriate authority level — designed to replicate how yacht finance actually works.' },
            { wide: false, ic: '🌍', t: 'Multi-currency virtual IBANs', d: 'Named virtual IBANs for each yacht and charter account. Supports multi-currency operations across USD, EUR, GBP. Currency conversion tracked as FX transactions with real-time rate logging for accurate financial reporting.' },
          ].map(s => (
            <div key={s.t} style={{ gridColumn: s.wide ? 'span 2' : undefined, background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
              <div style={{ fontSize: 20, marginBottom: 12 }}>{s.ic}</div>
              <div style={{ fontSize: 16, fontWeight: 500, color: T, marginBottom: 8 }}>{s.t}</div>
              <div style={{ fontSize: 13, fontWeight: 300, color: sub, lineHeight: 1.75 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </S>

      <S num="08 · Impact & Reflection">
        <H2>What we delivered and<br /><Em>what building this taught us</Em></H2>
        <P>P3 Marine launched and is live at p3marine.com. The platform is actively used by yacht management companies to manage their client portfolios — replacing the spreadsheet-and-WhatsApp model with a single structured system.</P>
        <Ins label="What I'd do differently">We designed the financial reporting screens for power users — accountants and management companies who understand financial data. In retrospect, we underinvested in the Owner view. Owners are often non-financial users who want to understand their yacht's economics without reading a transaction table. A summary visualisation layer — "here's what your yacht cost you this quarter, broken down simply" — would have made the platform significantly more valuable for the highest-authority users in the system.</Ins>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginTop: 44 }}>
          {[
            { n: '300', su: '+', d: 'Screens designed across all platforms — desktop, two tablet sizes, two mobile sizes' },
            { n: '5', su: '', d: 'Distinct role-based interfaces — genuinely separate information architectures, not permissions on one dashboard' },
            { n: '20', su: '+', d: 'Team members across the project — developers, product managers, QA, and backend engineers' },
            { n: '✦', su: '', d: 'Platform live at p3marine.com — actively used by yacht management companies across Europe' },
            { n: '−2', su: ' days', d: 'Projected reduction in financial reporting time — from 2-day manual compilation to real-time dashboard access' },
            { n: '0→1', su: '', d: 'Built entirely from scratch — research, IA, design system, 300+ screens, full developer handoff.' },
          ].map((s, i) => (
            <div key={s.n + s.su} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
              <div style={{ fontSize: 42, fontWeight: 600, letterSpacing: '-.03em', color: i < 3 ? '#627999' : T, lineHeight: 1, marginBottom: 10 }}>
                {s.n}<span style={{ fontSize: 22, color: i < 3 ? '#627999' : sub }}>{s.su}</span>
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
function P({ children, mt }: { children: React.ReactNode; mt?: boolean }) { return <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.9, color: 'rgba(210,204,194,0.5)', marginTop: mt ? 20 : 0 }}>{children}</p> }
function B({ children }: { children: React.ReactNode }) { return <strong style={{ color: '#E5E0D8', fontWeight: 500 }}>{children}</strong> }
function Ins({ label, children }: { label: string; children: React.ReactNode }) { return (<div style={{ borderLeft: '2px solid rgba(255,255,255,0.2)', padding: '20px 28px', margin: '32px 0', background: 'rgba(255,255,255,0.02)', borderRadius: '0 10px 10px 0' }}><div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(210,204,194,0.22)', marginBottom: 8 }}>{label}</div><div style={{ fontSize: 16, fontWeight: 300, fontStyle: 'italic', color: '#E5E0D8', lineHeight: 1.7 }}>{children}</div></div>) }
function Think({ label, children }: { label: string; children: React.ReactNode }) { return (<div style={{ background: '#1A1A18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 32, margin: '32px 0' }}><div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(210,204,194,0.22)', marginBottom: 12 }}>{label}</div><div style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.85, color: 'rgba(210,204,194,0.5)' }}>{children}</div></div>) }
function Quote({ author, children }: { author: string; children: React.ReactNode }) { return (<div style={{ borderLeft: '3px solid rgba(255,255,255,0.2)', padding: '24px 28px', margin: '32px 0' }}><div style={{ fontSize: 18, fontWeight: 300, fontStyle: 'italic', color: '#E5E0D8', lineHeight: 1.65, marginBottom: 10 }}>{children}</div><div style={{ fontSize: 12, color: 'rgba(210,204,194,0.22)' }}>{author}</div></div>) }
function Img({ src, alt, cap }: { src: string; alt: string; cap: string }) { return (<><div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', margin: '32px 0' }}><Image src={src} alt={alt} width={1160} height={700} style={{ width: '100%', height: 'auto', display: 'block' }} /></div>{cap && <div style={{ fontSize: 12, fontWeight: 300, color: 'rgba(210,204,194,0.22)', marginTop: 10, lineHeight: 1.6 }}>{cap}</div>}</>) }
function Stats({ items }: { items: { n: string; d: string }[] }) { return (<div style={{ display: 'grid', gridTemplateColumns: `repeat(${items.length},1fr)`, gap: 2, marginTop: 44 }}>{items.map(s => (<div key={s.n} style={{ background: '#1A1A18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '30px 26px' }}><div style={{ fontSize: 44, fontWeight: 600, letterSpacing: '-.04em', color: '#E5E0D8', lineHeight: 1, marginBottom: 8 }}>{s.n}</div><div style={{ fontSize: 12, fontWeight: 300, color: 'rgba(210,204,194,0.5)', lineHeight: 1.6 }}>{s.d}</div></div>))}</div>) }
function NC({ title, subtitle, href }: { title: string; subtitle: string; href: string }) { return (<div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}><div style={{ padding: '80px 52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1160, margin: '0 auto' }}><div><div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(210,204,194,0.22)', marginBottom: 8 }}>Next case</div><div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-.02em', color: '#E5E0D8' }}>{title} →</div><div style={{ fontSize: 14, color: 'rgba(210,204,194,0.5)', marginTop: 4 }}>{subtitle}</div></div><div style={{ display: 'flex', gap: 12, alignItems: 'center' }}><Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(210,204,194,0.22)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 100, padding: '11px 24px' }}>← All cases</Link><Link href={href} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid rgba(255,255,255,0.13)', borderRadius: 100, padding: '12px 28px', fontSize: 13, color: '#E5E0D8' }}>View case ↗</Link></div></div></div>) }
