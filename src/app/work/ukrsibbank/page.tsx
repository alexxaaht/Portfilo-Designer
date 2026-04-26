import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import CaseNavbar from '@/components/CaseNavbar'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'UkrSibBank CRM — Elvin Garaev',
  description: 'Manager Workplace — Communication Platform. Omnichannel CRM for 3,000+ bank employees.',
}

// CSS variables from original HTML
const bg2 = '#1A1A18'
const T = '#E5E0D8'
const sub = 'rgba(210,204,194,0.5)'
const dim = 'rgba(210,204,194,0.22)'
const line = 'rgba(255,255,255,0.07)'
const line2 = 'rgba(255,255,255,0.13)'

export default function UkrSibBankPage() {
  return (
    <>
      <CaseNavbar title="Elvin Garaev" />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '100px 52px 56px', borderBottom: `1px solid ${line}` }}>
        {/* Tags */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
          {['Fintech', 'B2B', 'CRM', 'Service Design', 'UkrSibBank'].map(t => (
            <span key={t} style={{ fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', color: sub, background: 'rgba(255,255,255,0.04)', border: `1px solid ${line}`, borderRadius: 100, padding: '4px 12px' }}>{t}</span>
          ))}
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.05, color: T, marginBottom: 40, maxWidth: 760 }}>
          Manager Workplace —<br />
          <em style={{ fontStyle: 'italic', fontWeight: 300, color: sub }}>Communication Platform</em>
        </h1>

        {/* Meta grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', border: `1px solid ${line}`, borderRadius: 14, overflow: 'hidden', maxWidth: 720 }}>
          {[
            { l: 'Role', v: 'Lead Product Designer' },
            { l: 'Timeline', v: '2024–2025' },
            { l: 'Platform', v: 'Web · Desktop' },
            { l: 'Status', v: 'In development' },
          ].map((m, i, a) => (
            <div key={m.l} style={{ padding: '18px 22px', borderRight: i < a.length - 1 ? `1px solid ${line}` : 'none' }}>
              <div style={{ fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: dim, marginBottom: 5 }}>{m.l}</div>
              <div style={{ fontSize: 13, fontWeight: 500, color: T, lineHeight: 1.3 }}>{m.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── COVER ────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 52px' }}>
        <Image src="/images/ukrsibbank/00-Manager-Workplace.png" alt="Manager Workplace" width={1920} height={900} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 14 }} />
      </div>

      {/* ── 01 OVERVIEW ──────────────────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>01 · Overview</SecNum>
        <H2>Managers were running<br />a bank through <Em>WhatsApp and Excel</Em></H2>

        <P>Premium banking managers at UKRSIBBANK handled all client communication through personal messengers — WhatsApp, Telegram, personal phone calls. <strong style={{ color: T, fontWeight: 500 }}>This was not just inefficient — it was a compliance violation.</strong> Banks cannot operate through uncontrolled, unlogged, unencrypted personal channels.</P>
        <P mt>Beyond the regulatory risk, the experience for managers was genuinely painful: scattered conversations across apps, no client history in one place, manual Excel sheets for tracking, no templates, no status visibility. Every single client interaction required switching between <strong style={{ color: T, fontWeight: 500 }}>6–8 different tools</strong> — none of which talked to each other.</P>

        {/* Insight */}
        <div style={{ borderLeft: '2px solid rgba(255,255,255,0.2)', padding: '20px 28px', margin: '32px 0', background: 'rgba(255,255,255,0.02)', borderRadius: '0 10px 10px 0' }}>
          <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 8 }}>The core tension</div>
          <div style={{ fontSize: 16, fontWeight: 300, fontStyle: 'italic', color: T, lineHeight: 1.7 }}>The bank had invested heavily in digital products for clients — Ukrsib Online, Ukrsib Business — but the internal tooling for the people managing those clients was stuck in 2010. There was a deep irony in managers promoting digital banking while managing their own work with WhatsApp and a personal notebook.</div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, marginTop: 44 }}>
          {[
            { n: '6–8', d: 'Tools a manager used daily — Outlook, SAP AMP, Rata net, Excel, Zoom, messengers — zero integration' },
            { n: '0%', d: 'Compliant communication channels before the project — all contact through personal phones and unmonitored apps' },
            { n: '550+', d: 'Average clients per manager — tracked manually in Excel, no CRM, no unified client view' },
          ].map(s => (
            <div key={s.n} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: '30px 26px' }}>
              <div style={{ fontSize: 44, fontWeight: 600, letterSpacing: '-.04em', color: T, lineHeight: 1, marginBottom: 8 }}>{s.n}</div>
              <div style={{ fontSize: 12, fontWeight: 300, color: sub, lineHeight: 1.6 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 02 FIELD RESEARCH ────────────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>02 · Research — Going to the Source</SecNum>
        <H2>We went where the<br />problem <Em>actually lived</Em></H2>

        <P>The first instinct when designing internal tools is to interview stakeholders in meeting rooms and work from documented processes. We deliberately avoided that. <strong style={{ color: T, fontWeight: 500 }}>Documented processes and actual work behaviour almost never match.</strong> People adapt, work around broken systems, develop informal workarounds — and that's exactly where the real design insights live.</P>
        <P mt>So before any wireframe or workshop, I travelled across Ukraine visiting bank branches — observing managers in their actual working environment, watching them handle real client interactions in real time.</P>

        {/* Cities */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '16px 0 0' }}>
          {['📍 Kyiv', '📍 Lviv', '📍 Kharkiv', '📍 Poltava', '📍 Vinnytsia'].map(c => (
            <span key={c} style={{ fontSize: 12, color: sub, background: 'rgba(255,255,255,0.04)', border: `1px solid ${line}`, borderRadius: 100, padding: '5px 14px' }}>{c}</span>
          ))}
        </div>

        <ImgCard src="/images/ukrsibbank/01-Manager-workstations-across-Ukraine.png" alt="Manager workstations across Ukraine" caption="Real manager workstations photographed during field visits — the physical evidence of fragmentation: multiple browser tabs, sticky notes, personal phones next to work computers." />

        {/* Thinking */}
        <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 32, margin: '32px 0' }}>
          <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 12 }}>What we found that surprised us</div>
          <div style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.85, color: sub }}>
            We expected to find tool overload. What we didn't expect was how much <strong style={{ color: T, fontWeight: 500 }}>invisible emotional load</strong> managers were carrying. They weren't just managing tasks — they were managing relationships, urgency, and anxiety across 550+ clients with no system to help them prioritise. A manager in Kharkiv told us she woke up at 2am to check if a client had replied. That's not a tool problem. That's a mental health problem disguised as a UX problem.
            <br /><br />
            This reframed our whole approach. We weren't just building a chat tool. We were building a system that <strong style={{ color: T, fontWeight: 500 }}>gives managers back a sense of control</strong> over their workday.
          </div>
        </div>

        {/* Quote */}
        <div style={{ borderLeft: '3px solid rgba(255,255,255,0.2)', padding: '24px 28px', margin: '32px 0' }}>
          <div style={{ fontSize: 18, fontWeight: 300, fontStyle: 'italic', color: T, lineHeight: 1.65, marginBottom: 10 }}>"I have 6 tabs open at all times. WhatsApp on my personal phone, Excel, SAP, Outlook, Zoom, and the bank's own system — and none of them talk to each other."</div>
          <div style={{ fontSize: 12, color: dim }}>— Василь, Premium Banking Manager, Kharkiv branch</div>
        </div>

        <ImgCard src="/images/ukrsibbank/02-Research-findings-presentation.png" alt="Research findings presentation" caption="Research synthesis — Premium Communication Platform discovery results presented to product and compliance stakeholders." />
      </div>

      {/* ── 03 PERSONAS ──────────────────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>03 · Personas — Two Users, One System</SecNum>
        <H2>Same broken system,<br /><Em>two completely different pains</Em></H2>

        <P>Early in the project we made a mistake that a lot of B2B product teams make: we focused entirely on the front-line user and almost missed the second critical actor. The persona work forced us to confront this.</P>
        <P mt><strong style={{ color: T, fontWeight: 500 }}>Василь, 25 — the Manager.</strong> He's measured by sales plan execution. His bonus depends on client satisfaction scores and product cross-sells. He handles 550+ clients and switches tools constantly. He wants speed, templates, and to never have to leave one screen mid-conversation. His problem is fragmentation.</P>
        <P mt><strong style={{ color: T, fontWeight: 500 }}>Анна, 35 — the Sector Head.</strong> She manages 8–12 managers and is accountable for the entire sector's performance. Her problem is invisibility. She has no real-time view into her team's workload. She finds out about a problem when a client escalates — by which point it's already a management issue, not a product issue.</P>

        <ImgCard src="/images/ukrsibbank/03-Personas-and.png" alt="Personas — Анна and Василь" caption="Detailed personas — Керівник сектору Анна (35) and Менеджер СДКФ Василь (25). Goals, tools, motivation, pain points and wishes documented from real interviews." />

        <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 32, margin: '32px 0' }}>
          <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 12 }}>The design implication</div>
          <div style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.85, color: sub }}>Designing for Василь and Анна in the same interface required a fundamentally different approach than most chat tools. <strong style={{ color: T, fontWeight: 500 }}>We weren't building a single product — we were building two overlapping products that share a data layer.</strong> Василь needs speed and context within conversations. Анна needs visibility across conversations. Getting the information architecture right to serve both without cluttering either was the central design challenge of the entire project.</div>
        </div>
      </div>

      {/* ── 04 CJM ───────────────────────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>04 · Customer Journey Maps</SecNum>
        <H2>Mapping failure points<br /><Em>before designing solutions</Em></H2>

        <P>Before jumping to solutions, we needed to understand exactly where things broke down — not at a high level, but at every individual step of every key scenario. We mapped 4 client journeys in full detail: account closure (standard), closure with service refusal, payment instruction operations, and unauthorised card charge disputes.</P>
        <P mt>The CJM work was revealing not because it confirmed what we expected — but because it <strong style={{ color: T, fontWeight: 500 }}>showed us patterns we hadn't noticed in individual interviews</strong>. The same failure modes kept appearing across different scenarios: the manager had to manually verify information that should have been in the system; the client received no status updates and called to chase; the manager had to use 3 different tools to complete a single operation.</P>

        <ImgCard src="/images/ukrsibbank/04-FigJam-CJM-overview.png" alt="FigJam CJM overview" caption="FigJam board — all 4 CJMs and Service Blueprints mapped together to identify cross-scenario patterns." />

        {/* Grid 2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '32px 0' }}>
          <div>
            <div style={{ borderRadius: 14, overflow: 'hidden', border: `1px solid ${line}` }}>
              <Image src="/images/ukrsibbank/05-CJM-Account-closure.png" alt="CJM — Account closure" width={580} height={380} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ fontSize: 12, fontWeight: 300, color: dim, marginTop: 10, lineHeight: 1.6 }}>CJM — Account Closure (standard). 6 stages, with client pain, emotions, manager pain, tools and improvement opportunities per stage.</div>
          </div>
          <div>
            <div style={{ borderRadius: 14, overflow: 'hidden', border: `1px solid ${line}` }}>
              <Image src="/images/ukrsibbank/06-CJM-Payment-instructions.png" alt="CJM — Payment instructions" width={580} height={380} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ fontSize: 12, fontWeight: 300, color: dim, marginTop: 10, lineHeight: 1.6 }}>CJM — Payment Instructions. 7 stages. The most tool-intensive scenario — manager switches between SAP AMP, chat, PDF tools and email in a single operation.</div>
          </div>
        </div>

        <ImgCard src="/images/ukrsibbank/07-CJM-Dispute.png" alt="CJM — Dispute" caption="CJM — Unauthorised Charge Dispute. Client emotions tracked across all 7 stages — from Panic at stage 1 to Satisfaction only at the very end. Longest journey to resolution." />

        <div style={{ borderLeft: '2px solid rgba(255,255,255,0.2)', padding: '20px 28px', margin: '32px 0', background: 'rgba(255,255,255,0.02)', borderRadius: '0 10px 10px 0' }}>
          <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 8 }}>The key pattern we found</div>
          <div style={{ fontSize: 16, fontWeight: 300, fontStyle: 'italic', color: T, lineHeight: 1.7 }}>Across all 4 scenarios, the same three failures appeared repeatedly: the manager didn't have client context at hand, the client didn't know what was happening at any given moment, and handoffs between systems generated manual work and errors. These three patterns became the three design principles we built the entire product around.</div>
        </div>
      </div>

      {/* ── 05 FLOWS ─────────────────────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>05 · User Flows & Architecture</SecNum>
        <H2>Designing the system<br /><Em>before the screens</Em></H2>

        <P>One of the most important decisions in this project happened before a single wireframe was drawn: <strong style={{ color: T, fontWeight: 500 }}>how to structure the information architecture of the Manager Workplace itself.</strong></P>
        <P mt>The temptation was to build a chat-first interface — put the conversation front and centre, and surface everything else as secondary panels. We tested this assumption with managers and found it was wrong. <strong style={{ color: T, fontWeight: 500 }}>Managers didn't think of their job as "having conversations". They thought of their job as "managing clients".</strong> The chat was a tool, not the frame.</P>

        {/* Decisions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '32px 0' }}>
          <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
            <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,100,100,0.5)', marginBottom: 10 }}>What we originally tried</div>
            <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.7 }}>Chat-first layout with client details in a sidebar. Felt natural — like Slack or Teams. But in testing, managers kept switching back and forth between the conversation and client info, losing context mid-conversation.</div>
          </div>
          <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
            <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(100,200,100,0.5)', marginBottom: 10 }}>What we shipped instead</div>
            <div style={{ fontSize: 14, fontWeight: 300, color: sub, lineHeight: 1.7 }}><strong style={{ color: T, fontWeight: 500 }}>Client-first layout.</strong> The active conversation is always visible — but it's framed within the client record, not the other way around. Account data, transaction history, and conversation history live on the same screen. Zero switching.</div>
          </div>
        </div>

        <ImgCard src="/images/ukrsibbank/08-User-flows-overview.png" alt="User flows overview" caption="User flow diagrams — account closure, service refusal, and payment instruction scenarios mapped as end-to-end flows showing system decisions, actor touchpoints, and critical path steps." />
      </div>

      {/* ── 06 WIREFRAMES ────────────────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>06 · Wireframes — Testing Structure Before Visual</SecNum>
        <H2>Two rounds of testing<br /><Em>before a single colour was applied</Em></H2>

        <P>The wireframing phase was longer than most projects because we had a specific constraint: we were designing for an environment where mistakes are expensive. <strong style={{ color: T, fontWeight: 500 }}>A confused manager wastes client time. A missing status update causes an escalation.</strong> We couldn't afford to get the structure wrong and fix it in high-fidelity.</P>
        <P mt>We ran two full rounds of wireframe testing with actual managers. Not UX researchers. Not stakeholders. The people who would use this tool for 8+ hours a day.</P>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '32px 0' }}>
          <div>
            <div style={{ borderRadius: 14, overflow: 'hidden', border: `1px solid ${line}` }}>
              <Image src="/images/ukrsibbank/09-Wireframe-Dashboard.png" alt="Wireframe — Dashboard" width={580} height={380} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ fontSize: 12, fontWeight: 300, color: dim, marginTop: 10, lineHeight: 1.6 }}>Manager dashboard — dialogue list, daily statistics, sector rankings, quick actions. Layout went through 3 iterations before managers stopped asking "where is X".</div>
          </div>
          <div>
            <div style={{ borderRadius: 14, overflow: 'hidden', border: `1px solid ${line}` }}>
              <Image src="/images/ukrsibbank/10-Wireframe-Chat-interface.png" alt="Wireframe — Chat interface" width={580} height={380} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ fontSize: 12, fontWeight: 300, color: dim, marginTop: 10, lineHeight: 1.6 }}>Communication workspace — client context panel (left), active conversation (centre), template library (right). Three-column layout was a late decision driven by testing.</div>
          </div>
        </div>

        <div style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 32, margin: '32px 0' }}>
          <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 12 }}>What changed between round 1 and round 2</div>
          <div style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.85, color: sub }}>
            In round 1, we had a two-column layout — conversation list on the left, active chat on the right. Managers found it clean. But when we observed them using it for real tasks, we noticed something: <strong style={{ color: T, fontWeight: 500 }}>they kept going back to SAP AMP to check account details mid-conversation.</strong> The client context panel didn't exist yet.
            <br /><br />
            Round 2 introduced the three-column layout. Managers were initially skeptical — "that's too much on one screen." But within 10 minutes of testing it with real scenarios, the same managers were asking us why we hadn't built it this way from the start. The insight: <strong style={{ color: T, fontWeight: 500 }}>density looks complex but feels simple when the density is contextually relevant.</strong>
          </div>
        </div>
      </div>

      {/* ── 07 FINAL DESIGN ──────────────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>07 · Final Design</SecNum>
        <H2>The UkrSibBank<br /><Em>digital ecosystem</Em></H2>

        <P>The Manager Workplace doesn't exist in isolation — it's part of a broader UkrSibBank digital ecosystem that includes Ukrsib Online (retail clients), Ukrsib Business (business clients), and the Trading Platform. <strong style={{ color: T, fontWeight: 500 }}>One of our core design principles was navigation consistency across all products.</strong> A manager who uses Business Banking shouldn't feel lost when they open the Communication module.</P>

        <ImgCard src="/images/ukrsibbank/11-UkrSibBank-Business-final-design.png" alt="UkrSibBank Business final design" caption="UkrSibBank Business — final design showing the navigation system shared across all UkrSib digital products. The Communication module (Manager Workplace) lives within this same navigation structure." />

        <ImgCard src="/images/ukrsibbank/12-App-switcher.png" alt="App switcher" caption="Unified app switcher — managers navigate between Ukrsib Online, Business, Trading Platform, Communication and Help Center from a single menu. Designed to reduce cognitive load for users who work across multiple products daily." />
      </div>

      {/* ── 08 KEY DECISIONS ─────────────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>08 · Key Design Decisions</SecNum>
        <H2>6–8 tools became one.<br /><Em>Here&apos;s how we got there.</Em></H2>

        <P>Every solution in this product came directly from a specific failure point we found in research. Nothing was added because it seemed like a good idea in isolation.</P>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 32 }}>
          {[
            { wide: true, ic: '⬡', t: 'Unified omnichannel interface', d: 'The central product decision: all client communication — bank app messages, phone, social media, messengers, email — in one compliant workspace. Every channel is logged, encrypted, and auditable. What looks like a feature is actually a regulatory requirement dressed as UX.' },
            { wide: false, ic: '◈', t: 'Client context always visible', d: 'Account status, transaction history, and full conversation thread visible alongside the active chat. This eliminated the need to switch to SAP AMP mid-conversation — the behaviour we observed most consistently during field research.' },
            { wide: false, ic: '◎', t: 'Templates & automation', d: 'Template library for the most common responses and workflows. Automated status updates, reminders, and escalation triggers. Built directly from the most frequent manager complaint: "I type the same things 20 times a day."' },
            { wide: false, ic: '◫', t: 'Sector head visibility layer', d: 'A dedicated view for Анна: real-time workload dashboard, dialogue statuses, team performance. Automated client reassignment when a manager is unavailable. Designed to answer Анна\'s core question — "What is actually happening in my sector right now?"' },
            { wide: false, ic: '◻', t: 'Compliance by design, not by policy', d: 'The hardest design challenge: making compliance feel invisible. Logging and encryption happen automatically. We tested multiple framings — "your conversations are protected" vs "all conversations are recorded" — and the language difference had a measurable impact on how managers felt about the tool.' },
          ].map(s => (
            <div key={s.t} style={{ gridColumn: s.wide ? 'span 2' : undefined, background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
              <div style={{ fontSize: 20, marginBottom: 12, color: T }}>{s.ic}</div>
              <div style={{ fontSize: 16, fontWeight: 500, color: T, marginBottom: 8 }}>{s.t}</div>
              <div style={{ fontSize: 13, fontWeight: 300, color: sub, lineHeight: 1.75 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 09 IMPACT ────────────────────────────────────────────── */}
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <SecNum>09 · Impact & Reflection</SecNum>
        <H2>What we shipped,<br /><Em>what we learned</Em></H2>

        <P>The project is currently in active development. The metrics below are based on usability testing sessions, pilot feedback, and stakeholder-validated KPI targets — not post-launch analytics yet.</P>
        <P mt>Looking back, the most valuable part of this project wasn't the interface we designed — it was the research. <strong style={{ color: T, fontWeight: 500 }}>We found a problem that looked like a tooling problem but was actually a systemic problem.</strong> Managers weren't struggling because they lacked a chat tool. They were struggling because the bank had never designed an internal experience with the same care it applied to customer-facing products.</P>

        <div style={{ borderLeft: '2px solid rgba(255,255,255,0.2)', padding: '20px 28px', margin: '32px 0', background: 'rgba(255,255,255,0.02)', borderRadius: '0 10px 10px 0' }}>
          <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 8 }}>What I'd do differently</div>
          <div style={{ fontSize: 16, fontWeight: 300, fontStyle: 'italic', color: T, lineHeight: 1.7 }}>We spent more time on the manager experience than on the client-side experience. In hindsight, the client's perspective — receiving a message through the new system rather than via WhatsApp — deserved its own research thread. The next design sprint should start there.</div>
        </div>

        {/* Impact grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginTop: 44 }}>
          {[
            { n: '−', su: '6', d: 'Tools consolidated into one workspace — from 6–8 disconnected systems to a single compliant interface' },
            { n: '−35', su: '%', d: 'Projected reduction in time per client interaction based on workflow analysis and testing' },
            { n: '100', su: '%', d: 'Compliant communication channels — from 0% before the project to full regulatory coverage' },
            { n: '3k', su: '+', d: 'Bank employees across Ukraine who will use the platform on full rollout' },
            { n: '−40', su: '%', d: 'Estimated reduction in manual tracking time for sector heads based on pilot sessions' },
            { n: '4', su: '', d: 'Key client journeys fully mapped with service blueprints — the foundation for every design decision' },
          ].map(s => (
            <div key={s.n + s.su} style={{ background: bg2, border: `1px solid ${line}`, borderRadius: 14, padding: 28 }}>
              <div style={{ fontSize: 42, fontWeight: 600, letterSpacing: '-.03em', color: T, lineHeight: 1, marginBottom: 10 }}>
                {s.n}<span style={{ fontSize: 22, color: sub }}>{s.su}</span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 300, color: sub, lineHeight: 1.65 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── NEXT CASE ────────────────────────────────────────────── */}
      <div style={{ borderTop: `1px solid ${line}` }}>
        <div style={{ padding: '80px 52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1160, margin: '0 auto' }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 8 }}>Next case</div>
            <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-.02em', color: T }}>P3 Wealth × BlackRock →</div>
            <div style={{ fontSize: 14, color: sub, marginTop: 4 }}>Capital Management Platform</div>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: dim, border: `1px solid ${line}`, borderRadius: 100, padding: '11px 24px' }}>← All cases</Link>
            <Link href="/work/p3-wealth" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: `1px solid ${line2}`, borderRadius: 100, padding: '12px 28px', fontSize: 13, color: T }}>View case ↗</Link>
          </div>
        </div>
      </div>
    </>
  )
}

// ── Tiny helpers ──────────────────────────────────────────────────────────────

function SecNum({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{ display: 'block', width: 24, height: 1, background: line2 }} />
      {children}
    </div>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.3, color: T, marginBottom: 20, maxWidth: 680 }}>{children}</h2>
}

function Em({ children }: { children: React.ReactNode }) {
  return <em style={{ fontStyle: 'italic', fontWeight: 300, color: sub }}>{children}</em>
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
function P({ children, mt }: { children: React.ReactNode; mt?: boolean }) {
  return <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.9, color: sub, marginTop: mt ? 20 : 0 }}>{children}</p>
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
