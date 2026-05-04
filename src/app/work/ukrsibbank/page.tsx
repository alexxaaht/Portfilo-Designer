import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import CaseNavbar from '@/components/CaseNavbar'
import FadeUp from '@/components/FadeUp'
import CaseFooter from '@/components/CaseFooter'

export const metadata: Metadata = {
  title: 'UkrSibBank CRM — Elvin Garaev',
  description: 'Manager Workplace — Communication Platform. Omnichannel CRM for 3,000+ bank employees.',
}

// ОБНОВЛЕННЫЕ ПЕРЕМЕННЫЕ (СВЕТЛЕЕ И КОНТРАСТНЕЕ)
const bg2 = '#1A1A18'
const T = '#F2F0EC' // Основной текст: яркий белый
const sub = 'rgba(220,216,208,0.8)' // Подзаголовки: 80% яркости
const dim = 'rgba(210,204,194,0.55)' // Служебный текст (Overview и т.д.): 55% яркости (был 22%)
const line = 'rgba(255,255,255,0.08)'
const line2 = 'rgba(255,255,255,0.18)'

export default function UkrSibBankPage() {
  return (
    <>
      <CaseNavbar title="Elvin Garaev" />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '120px 52px 64px', borderBottom: `1px solid ${line}` }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 32, flexWrap: 'wrap' }}>
          {['Fintech', 'B2B', 'CRM', 'Service Design', 'UkrSibBank'].map(t => (
            <span key={t} style={{ fontSize: 12, letterSpacing: '.06em', textTransform: 'uppercase', color: sub, background: 'rgba(255,255,255,0.05)', border: `1px solid ${line}`, borderRadius: 100, padding: '5px 14px' }}>{t}</span>
          ))}
        </div>

        <h1 style={{ fontSize: 'clamp(40px,6vw,68px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.05, color: T, marginBottom: 48, maxWidth: 850 }}>
          Manager Workplace —<br />
          <em style={{ fontStyle: 'italic', fontWeight: 300, color: sub }}>Communication Platform</em>
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', border: `1px solid ${line}`, borderRadius: 16, overflow: 'hidden', width: '100%' }}>
          {[
            { l: 'Role', v: 'Lead Product Designer' },
            { l: 'Timeline', v: '2024–2026' },
            { l: 'Platform', v: 'Web · Desktop' },
            { l: 'Status', v: 'In development' },
          ].map((m, i, a) => (
            <div key={m.l} style={{ padding: '22px 26px', borderRight: i < a.length - 1 ? `1px solid ${line}` : 'none' }}>
              <div style={{ fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: dim, marginBottom: 6 }}>{m.l}</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: T, lineHeight: 1.3 }}>{m.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── COVER ────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 52px' }}>
        <Image src="/images/ukrsibbank/11-UkrSibBank-Business-final-design.png" alt="Manager Workplace" width={1920} height={900} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 16 }} priority />
      </div>

      {/* ── 01 OVERVIEW ──────────────────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>01 · Overview</SecNum>
        <H2>Managers were running<br />a bank through <Em>WhatsApp and Excel</Em></H2>

        <P>Premium banking managers at UKRSIBBANK handled all client communication through personal messengers — WhatsApp, Telegram, personal phone calls. <B>This was not just inefficient — it was a compliance violation.</B> Banks cannot operate through uncontrolled, unlogged, unencrypted personal channels.</P>
        <P mt>Beyond the regulatory risk, the experience for managers was genuinely painful: scattered conversations across apps, no client history in one place, manual Excel sheets for tracking, no templates, no status visibility. Every single client interaction required switching between <B>6–8 different tools</B> — none of which talked to each other.</P>

        <div style={{ borderLeft: '2px solid rgba(255,255,255,0.3)', padding: '24px 32px', margin: '40px 0', background: 'rgba(255,255,255,0.03)', borderRadius: '0 12px 12px 0' }}>
          <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 10 }}>The core tension</div>
          <div style={{ fontSize: 18, fontWeight: 300, fontStyle: 'italic', color: T, lineHeight: 1.7 }}>The bank had invested heavily in digital products for clients — Ukrsib Online, Ukrsib Business — but the internal tooling for the people managing those clients was stuck in 2010. There was a deep irony in managers promoting digital banking while managing their own work with WhatsApp and a personal notebook.</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 52 }}>
          {[
            { n: '6–8', d: 'Tools a manager used daily — Outlook, SAP AMP, Rata net, Excel, Zoom, messengers — zero integration' },
            { n: '0%', d: 'Compliant communication channels before the project — all contact through personal phones and unmonitored apps' },
            { n: '550+', d: 'Average clients per manager — tracked manually in Excel, no CRM, no unified client view' },
          ].map(s => (
            <div key={s.n} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: '36px 30px' }}>
              <div style={{ fontSize: 48, fontWeight: 600, letterSpacing: '-.04em', color: T, lineHeight: 1, marginBottom: 12 }}>{s.n}</div>
              <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.6 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 02 FIELD RESEARCH ────────────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>02 · Research — Going to the Source</SecNum>
        <H2>We went where the<br />problem <Em>actually lived</Em></H2>

        <P>The first instinct when designing internal tools is to interview stakeholders in meeting rooms and work from documented processes. We deliberately avoided that. <B>Documented processes and actual work behaviour almost never match.</B> People adapt, work around broken systems, develop informal workarounds — and that's exactly where the real design insights live.</P>
        <P mt>So before any wireframe or workshop, I travelled across Ukraine visiting bank branches — observing managers in their actual working environment, watching them handle real client interactions in real time.</P>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', margin: '20px 0' }}>
          {['📍 Kyiv', '📍 Lviv', '📍 Kharkiv', '📍 Poltava', '📍 Vinnytsia'].map(c => (
            <span key={c} style={{ fontSize: 13, color: sub, background: 'rgba(255,255,255,0.05)', border: `1px solid ${line}`, borderRadius: 100, padding: '6px 16px' }}>{c}</span>
          ))}
        </div>

        <ImgCard src="/images/ukrsibbank/01-Manager-workstations-across-Ukraine.png" alt="Manager workstations" caption="Real manager workstations photographed during field visits — the physical evidence of fragmentation." />

        <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: 36, margin: '40px 0' }}>
          <div style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 16 }}>What we found that surprised us</div>
          <div style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.8, color: sub }}>
            We expected to find tool overload. What we didn't expect was how much <B>invisible emotional load</B> managers were carrying. They weren't just managing tasks — they were managing relationships, urgency, and anxiety across 550+ clients with no system to help them prioritise. A manager in Kharkiv told us she woke up at 2am to check if a client had replied. That's not a tool problem. That's a mental health problem disguised as a UX problem.
            <br /><br />
            This reframed our whole approach. We weren't just building a chat tool. We were building a system that <B>gives managers back a sense of control</B> over their workday.
          </div>
        </div>

        <div style={{ borderLeft: '3px solid rgba(255,255,255,0.3)', padding: '28px 36px', margin: '40px 0' }}>
          <div style={{ fontSize: 22, fontWeight: 300, fontStyle: 'italic', color: T, lineHeight: 1.6, marginBottom: 12 }}>"I have 6 tabs open at all times. WhatsApp on my personal phone, Excel, SAP, Outlook, Zoom, and the bank's own system — and none of them talk to each other."</div>
          <div style={{ fontSize: 14, color: dim }}>— Василь, Premium Banking Manager, Kharkiv branch</div>
        </div>

        <ImgCard src="/images/ukrsibbank/02-Research-findings-presentation.png" alt="Research findings presentation" caption="Research synthesis — Premium Communication Platform discovery results presented to product and compliance stakeholders." />
      </div>

      {/* ── 03 PERSONAS ──────────────────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>03 · Personas — Two Users, One System</SecNum>
        <H2>Same broken system,<br /><Em>two completely different pains</Em></H2>

        <P>Early in the project we made a mistake that a lot of B2B product teams make: we focused entirely on the front-line user and almost missed the second critical actor. The persona work forced us to confront this.</P>
        <P mt><B>Василь, 25 — the Manager.</B> He's measured by sales plan execution. His bonus depends on client satisfaction scores and product cross-sells. He handles 550+ clients and switches tools constantly. He wants speed, templates, and to never have to leave one screen mid-conversation. His problem is fragmentation.</P>
        <P mt><B>Анна, 35 — the Sector Head.</B> She manages 8–12 managers and is accountable for the entire sector's performance. Her problem is invisibility. She has no real-time view into her team's workload. She finds out about a problem when a client escalates — by which point it's already a management issue, not a product issue.</P>

        <ImgCard src="/images/ukrsibbank/03-Personas-and.png" alt="Personas" caption="Detailed personas — Керівник сектору Анна (35) and Менеджер СДКФ Василь (25)." />

        <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: 36, margin: '40px 0' }}>
          <div style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 16 }}>The design implication</div>
          <div style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.8, color: sub }}>Designing for Василь and Анна in the same interface required a fundamentally different approach чем большинство чатов. <B>We weren't building a single product — we were building two overlapping products that share a data layer.</B> Василь needs speed and context within conversations. Анна needs visibility across conversations. Getting the information architecture right to serve both without cluttering either was the central design challenge of the entire project.</div>
        </div>
      </div>

      {/* ── 04 CJM ───────────────────────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>04 · Customer Journey Maps</SecNum>
        <H2>Mapping failure points<br /><Em>before designing solutions</Em></H2>

        <P>Before jumping to solutions, we needed to understand exactly where things broke down — not at a high level, but at every individual step of every key scenario. We mapped 4 client journeys in full detail: account closure (standard), closure with service refusal, payment instruction operations, and unauthorised card charge disputes.</P>
        <P mt>The CJM work was revealing not because it confirmed what we expected — but because it <B>showed us patterns we hadn't noticed in individual interviews</B>. The same failure modes kept appearing across different scenarios: the manager had to manually verify information that should have been in the system; the client received no status updates; the manager had to use 3 different tools for one operation.</P>

        <ImgCard src="/images/ukrsibbank/04-FigJam-CJM-overview.png" alt="FigJam CJM overview" caption="FigJam board — all 4 CJMs and Service Blueprints mapped together." />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '40px 0' }}>
          <div>
            <div style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${line}` }}>
              <Image src="/images/ukrsibbank/05-CJM-Account-closure.png" alt="CJM — Account closure" width={580} height={380} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ fontSize: 14, fontWeight: 300, color: dim, marginTop: 14, lineHeight: 1.6 }}>CJM — Account Closure (standard). 6 stages, with client pain, emotions, manager pain, tools and improvement opportunities per stage.</div>
          </div>
          <div>
            <div style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${line}` }}>
              <Image src="/images/ukrsibbank/06-CJM-Payment-instructions.png" alt="CJM — Payment instructions" width={580} height={380} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ fontSize: 14, fontWeight: 300, color: dim, marginTop: 14, lineHeight: 1.6 }}>CJM — Payment Instructions. 7 stages. The most tool-intensive scenario — manager switches between SAP AMP, chat, PDF tools and email in a single operation.</div>
          </div>
        </div>

        <ImgCard src="/images/ukrsibbank/07-CJM-Dispute.png" alt="CJM — Dispute" caption="CJM — Unauthorised Charge Dispute. Client emotions tracked across all 7 stages." />

        <div style={{ borderLeft: '2px solid rgba(255,255,255,0.3)', padding: '24px 32px', margin: '40px 0', background: 'rgba(255,255,255,0.03)', borderRadius: '0 12px 12px 0' }}>
          <div style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 10 }}>The key pattern we found</div>
          <div style={{ fontSize: 18, fontWeight: 300, fontStyle: 'italic', color: T, lineHeight: 1.7 }}>Across all 4 scenarios, the same three failures appeared repeatedly: the manager didn't have client context at hand, the client didn't know what was happening, and handoffs between systems generated manual work. These three patterns became the three design principles.</div>
        </div>
      </div>

      {/* ── 05 FLOWS ─────────────────────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>05 · User Flows & Architecture</SecNum>
        <H2>Designing the system<br /><Em>before the screens</Em></H2>

        <P>One of the most important decisions was how to structure the information architecture of the Manager Workplace itself. The temptation was to build a chat-first interface. We tested this and found it was wrong. <B>Managers didn't think of their job as "having conversations". They thought of their job as "managing clients".</B></P>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '40px 0' }}>
          <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: 32 }}>
            <div style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,100,100,0.7)', marginBottom: 14 }}>What we originally tried</div>
            <div style={{ fontSize: 15, fontWeight: 300, color: sub, lineHeight: 1.7 }}>Chat-first layout with client details in a sidebar. Felt natural — like Slack. But in testing, managers kept switching back and forth, losing context mid-conversation.</div>
          </div>
          <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: 32 }}>
            <div style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(100,200,100,0.7)', marginBottom: 14 }}>What we shipped instead</div>
            <div style={{ fontSize: 15, fontWeight: 300, color: sub, lineHeight: 1.7 }}><B>Client-first layout.</B> The active conversation is always visible — but it's framed within the client record. Account data, transaction history, and conversation live on the same screen.</div>
          </div>
        </div>

        <ImgCard src="/images/ukrsibbank/08-User-flows-overview.png" alt="User flows" caption="User flow diagrams showing end-to-end scenarios and system decisions." />
      </div>

      {/* ── 06 WIREFRAMES ────────────────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>06 · Wireframes — Testing Structure</SecNum>
        <H2>Two rounds of testing<br /><Em>before a single colour was applied</Em></H2>

        <P>The wireframing phase was longer than most projects. <B>A confused manager wastes client time. A missing status update causes an escalation.</B> We ran two full rounds of wireframe testing with actual managers who would use this tool for 8+ hours a day.</P>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '40px 0' }}>
          <div>
            <div style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${line}` }}>
              <Image src="/images/ukrsibbank/09-Wireframe-Dashboard.png" alt="Wireframe Dashboard" width={580} height={380} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ fontSize: 14, fontWeight: 300, color: dim, marginTop: 14, lineHeight: 1.6 }}>Manager dashboard — dialogue list, daily statistics, sector rankings. Layout went through 3 iterations.</div>
          </div>
          <div>
            <div style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${line}` }}>
              <Image src="/images/ukrsibbank/10-Wireframe-Chat-interface.png" alt="Wireframe Chat" width={580} height={380} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ fontSize: 14, fontWeight: 300, color: dim, marginTop: 14, lineHeight: 1.6 }}>Communication workspace — three-column layout was a late decision driven by testing.</div>
          </div>
        </div>

        <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: 36, margin: '40px 0' }}>
          <div style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 16 }}>What changed between round 1 and round 2</div>
          <div style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.8, color: sub }}>
            In round 1, we had a two-column layout. Managers found it clean. But they kept going back to SAP to check account details mid-conversation.
            <br /><br />
            Round 2 introduced the three-column layout. The insight: <B>density looks complex but feels simple when the density is contextually relevant.</B>
          </div>
        </div>
      </div>

      {/* ── 07 FINAL DESIGN ──────────────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>07 · Final Design</SecNum>
        <H2>The UkrSibBank<br /><Em>digital ecosystem</Em></H2>

        <P>The Manager Workplace doesn't exist in isolation — it's part of a broader UkrSibBank digital ecosystem. <B>One of our core design principles was navigation consistency across all products.</B></P>

        <ImgCard src="/images/ukrsibbank/11-UkrSibBank-Business-final-design.png" alt="Final Design" caption="UkrSibBank Business — final design showing the shared navigation system." />
        <ImgCard src="/images/ukrsibbank/12-App-switcher.png" alt="App switcher" caption="Unified app switcher designed to reduce cognitive load." />
      </div>

      {/* ── 08 KEY DECISIONS ─────────────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>08 · Key Design Decisions</SecNum>
        <H2>6–8 tools became one.<br /><Em>Here&apos;s how we got there.</Em></H2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 40 }}>
          {[
            { wide: true, ic: '⬡', t: 'Unified omnichannel interface', d: 'The central product decision: all client communication — messages, phone, email — in one compliant workspace. Every channel is logged and encrypted.' },
            { wide: false, ic: '◈', t: 'Client context always visible', d: 'Account status and transaction history visible alongside the active chat. Eliminated the need to switch to SAP AMP.' },
            { wide: false, ic: '◎', t: 'Templates & automation', d: 'Template library for common responses. Automated status updates and reminders.' },
            { wide: false, ic: '◫', t: 'Sector head visibility layer', d: 'Dedicated view for Анна: real-time workload dashboard and dialogue statuses.' },
            { wide: false, ic: '◻', t: 'Compliance by design', d: 'Making compliance feel invisible. Logging and encryption happen automatically.' },
          ].map(s => (
            <div key={s.t} style={{ gridColumn: s.wide ? 'span 2' : undefined, background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: 32 }}>
              <div style={{ fontSize: 24, marginBottom: 14, color: T }}>{s.ic}</div>
              <div style={{ fontSize: 18, fontWeight: 500, color: T, marginBottom: 10 }}>{s.t}</div>
              <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.7 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 09 IMPACT ────────────────────────────────────────────── */}
      <div style={{ padding: '100px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>09 · Impact & Reflection</SecNum>
        <H2>What we shipped,<br /><Em>what we learned</Em></H2>

        <P>Looking back, the most valuable part of this project wasn't the interface — it was the research. <B>We found a problem that looked like a tooling problem but was actually a systemic problem.</B> Managers weren't struggling because they lacked a chat tool, but because of a lack of designed internal experience.</P>

        <div style={{ borderLeft: '2px solid rgba(255,255,255,0.3)', padding: '24px 32px', margin: '40px 0', background: 'rgba(255,255,255,0.03)', borderRadius: '0 12px 12px 0' }}>
          <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 10 }}>What I'd do differently</div>
          <div style={{ fontSize: 18, fontWeight: 300, fontStyle: 'italic', color: T, lineHeight: 1.7 }}>We spent more time on the manager experience than on the client-side. The client's perspective — receiving a message through the new system — deserves its own research thread.</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 52 }}>
          {[
            { n: '−', su: '6', d: 'Tools consolidated into one workspace — from 6–8 systems to one' },
            { n: '−35', su: '%', d: 'Projected reduction in time per client interaction' },
            { n: '100', su: '%', d: 'Compliant communication channels — from 0% before' },
            { n: '3k', su: '+', d: 'Bank employees who will use the platform' },
            { n: '−40', su: '%', d: 'Estimated reduction in manual tracking time for sector heads' },
            { n: '4', su: '', d: 'Key client journeys fully mapped with blueprints' },
          ].map(s => (
            <div key={s.n + s.su} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 16, padding: '36px 30px' }}>
              <div style={{ fontSize: 48, fontWeight: 600, letterSpacing: '-.03em', color: T, lineHeight: 1, marginBottom: 12 }}>
                {s.n}<span style={{ fontSize: 24, color: sub }}>{s.su}</span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.6 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      <CaseFooter nextTitle="P3 Wealth × BlackRock" nextSubtitle="Capital Management Platform" nextHref="/work/p3-wealth" />
    </>
  )
}

// ── Хелперы (Отредактированы для размера и яркости) ──────────────────────────

function SecNum({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: dim, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ display: 'block', width: 30, height: 1, background: line2 }} />
      {children}
    </div>
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

function ImgCard({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <>
      <div style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${line}`, margin: '40px 0' }}>
        <Image src={src} alt={alt} width={1160} height={700} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
      {caption && <div style={{ fontSize: 14, fontWeight: 300, color: dim, marginTop: 14, lineHeight: 1.6 }}>{caption}</div>}
    </>
  )
}