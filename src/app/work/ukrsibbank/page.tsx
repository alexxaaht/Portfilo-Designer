import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import CaseNavbar from '@/components/CaseNavbar'
import FadeUp from '@/components/FadeUp'
import CaseFooter from '@/components/CaseFooter'
// Импортируем наши новые компоненты
import { H2, Em, P, B, Ins, Think, Quote, Img, Stats, SecNum } from '@/components/CaseComponents'

export const metadata: Metadata = {
  title: 'UkrSibBank CRM — Elvin Garaev',
  description: 'Manager Workplace — Communication Platform. Omnichannel CRM for 3,000+ bank employees.',
}

const bg2 = '#1A1A18'
const T = '#E5E0D8'
const sub = 'rgba(210,204,194,0.5)'
const dim = 'rgba(210,204,194,0.22)'
const line = 'rgba(255,255,255,0.07)'

export default function UkrSibBankPage() {
  return (
    <>
      <CaseNavbar title="Elvin Garaev" />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '100px 52px 56px', borderBottom: `1px solid ${line}` }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
          {['Fintech', 'B2B', 'CRM', 'Service Design', 'UkrSibBank'].map(t => (
            <span key={t} style={{ fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', color: sub, background: 'rgba(255,255,255,0.04)', border: `1px solid ${line}`, borderRadius: 100, padding: '4px 12px' }}>{t}</span>
          ))}
        </div>

        <h1 style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.05, color: T, marginBottom: 40, maxWidth: 760 }}>
          Manager Workplace —<br />
          <Em>Communication Platform</Em>
        </h1>

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
        <Image src="/images/ukrsibbank/11-UkrSibBank-Business-final-design.png" alt="Manager Workplace" width={1920} height={900} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 14 }} priority />
      </div>

      <FadeUp>
        {/* ── 01 OVERVIEW ──────────────────────────────────────────── */}
        <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
          <SecNum>01 · Overview</SecNum>
          <H2>Managers were running<br />a bank through <Em>WhatsApp and Excel</Em></H2>

          <P>Premium banking managers at UKRSIBBANK handled all client communication through personal messengers — WhatsApp, Telegram, personal phone calls. <B>This was not just inefficient — it was a compliance violation.</B> Banks cannot operate through uncontrolled, unlogged, unencrypted personal channels.</P>
          <P mt>Beyond the regulatory risk, the experience for managers was genuinely painful: scattered conversations across apps, no client history in one place, manual Excel sheets for tracking, no templates, no status visibility. Every single client interaction required switching between <B>6–8 different tools</B> — none of which talked to each other.</P>

          <Ins label="The core tension">
            The bank had invested heavily in digital products for clients — Ukrsib Online, Ukrsib Business — but the internal tooling for the people managing those clients was stuck in 2010.
          </Ins>

          <Stats items={[
            { n: '6–8', d: 'Tools a manager used daily — Outlook, SAP AMP, Rata net, Excel, Zoom, messengers — zero integration' },
            { n: '0', su: '%', d: 'Compliant communication channels before the project — all contact through personal phones and unmonitored apps' },
            { n: '550', su: '+', d: 'Average clients per manager — tracked manually in Excel, no CRM, no unified client view' },
          ]} />
        </div>
      </FadeUp>

      <FadeUp>
        {/* ── 02 FIELD RESEARCH ────────────────────────────────────── */}
        <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
          <SecNum>02 · Research — Going to the Source</SecNum>
          <H2>We went where the<br />problem <Em>actually lived</Em></H2>

          <P>The first instinct when designing internal tools is to interview stakeholders in meeting rooms. We deliberately avoided that. <B>Documented processes and actual work behaviour almost never match.</B></P>
          <P mt>So before any wireframe or workshop, I travelled across Ukraine visiting bank branches — observing managers in their actual working environment.</P>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '16px 0 0' }}>
            {['📍 Kyiv', '📍 Lviv', '📍 Kharkiv', '📍 Poltava', '📍 Vinnytsia'].map(c => (
              <span key={c} style={{ fontSize: 12, color: sub, background: 'rgba(255,255,255,0.04)', border: `1px solid ${line}`, borderRadius: 100, padding: '5px 14px' }}>{c}</span>
            ))}
          </div>

          <Img src="/images/ukrsibbank/01-Manager-workstations-across-Ukraine.png" alt="Workstations" cap="Real manager workstations photographed during field visits." />

          <Think label="What we found that surprised us">
            We expected to find tool overload. What we didn't expect was how much <B>invisible emotional load</B> managers were carrying.
          </Think>

          <Quote author="Василь, Premium Banking Manager, Kharkiv branch">
            "I have 6 tabs open at all times. WhatsApp on my personal phone, Excel, SAP, Outlook, Zoom... and none of them talk to each other."
          </Quote>

          <Img src="/images/ukrsibbank/02-Research-findings-presentation.png" alt="Research findings" cap="Research synthesis — Premium Communication Platform discovery results." />
        </div>
      </FadeUp>

      {/* Продолжай заменять секции 03-09 аналогичным образом, используя SecNum, H2, P, Ins, Stats, Img, Think и Quote */}
      
      <CaseFooter nextTitle="P3 Wealth × BlackRock" nextSubtitle="Capital Management Platform" nextHref="/work/p3-wealth" />
    </>
  )
}