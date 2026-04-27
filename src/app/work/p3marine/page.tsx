import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import CaseNavbar from '@/components/CaseNavbar'
import CaseFooter from '@/components/CaseFooter'
import { H2, Em, P, B, Ins, Think, Quote, Img, Stats } from '@/components/CaseComponents'

export const metadata: Metadata = {
  title: 'P3 Marine — Elvin Garaev',
  description: 'P3 Marine — Yacht Management Platform from Scratch. 300+ screens, 5 user roles.',
}

const bg2='#1A1A18',T='#E5E0D8',sub='rgba(210,204,194,0.5)',dim='rgba(210,204,194,0.22)',line='rgba(255,255,255,0.07)',line2='rgba(255,255,255,0.13)',ACC='#8B9BB4'

export default function P3MarinePage() {
  return (
    <>
      <CaseNavbar title="Elvin Garaev" />
      <div style={{ maxWidth:1160,margin:'0 auto',padding:'100px 52px 56px',borderBottom:`1px solid ${line}` }}>
        <div style={{ display:'flex',gap:8,marginBottom:28,flexWrap:'wrap' }}>
          {['UX/UI Designer','SaaS','CRM','MVP','BARVA.TECH'].map(t=>(
            <span key={t} style={{ fontSize:11,letterSpacing:'.06em',textTransform:'uppercase',color:t==='UX/UI Designer'?ACC:sub,background:t==='UX/UI Designer'?`${ACC}18`:'rgba(255,255,255,0.04)',border:`1px solid ${t==='UX/UI Designer'?`${ACC}40`:line}`,borderRadius:100,padding:'4px 12px' }}>{t}</span>
          ))}
        </div>
        <h1 style={{ fontSize:'clamp(36px,5vw,60px)',fontWeight:600,letterSpacing:'-.03em',lineHeight:1.05,color:T,marginBottom:40,maxWidth:820 }}>
          P3 Marine — Yacht Management<br /><em style={{ fontStyle:'italic',fontWeight:300,color:sub }}>Platform from Scratch</em>
        </h1>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',border:`1px solid ${line}`,borderRadius:14,overflow:'hidden',maxWidth:760 }}>
          {[{l:'Role',v:'UX/UI Designer'},{l:'Timeline',v:'2023–2024'},{l:'Screens',v:'300+'},{l:'Company',v:'BARVA.TECH'}].map((m,i,a)=>(
            <div key={m.l} style={{ padding:'18px 22px',borderRight:i<a.length-1?`1px solid ${line}`:'none' }}>
              <div style={{ fontSize:10,letterSpacing:'.08em',textTransform:'uppercase',color:dim,marginBottom:5 }}>{m.l}</div>
              <div style={{ fontSize:13,fontWeight:500,color:T,lineHeight:1.3 }}>{m.v}</div>
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
          {n:'300+',d:'Screens designed across all platforms — desktop, two tablet sizes, and two mobile resolutions'},
          {n:'5',   d:'Distinct user roles — Owner, Manager, Accountant, Captain, Crew — each with a purpose-built interface'},
          {n:'20+', d:'Team members collaborated across the project — developers, product managers, backend engineers, and QA'},
        ]} />
      </S>

      <S num="02 · The Problem Space">
        <H2>What yacht management actually<br /><Em>looks like without a platform</Em></H2>
        <P>Before designing P3 Marine, we understood how yacht management companies actually operated. The answer: <B>most used a combination of Excel, PDF documents, WhatsApp groups, and phone calls.</B> For assets worth tens of millions of dollars, this was the operational infrastructure.</P>
        <Img src="/images/p3marine/01-P3-Marine-—-How-it-works.png" alt="P3 Marine — How it works" cap="P3 Marine platform overview — Expense Management, Automated Transaction System, Financial Invoicing, Charter Account Management, Analytics Dashboard, Card Management." />
        <Quote author="— Yacht management company interview, P3 Marine discovery research">"We manage seven yachts across three ownership structures. Every one of them uses a different spreadsheet. When a charter client asks for a financial summary, it takes us two days to compile."</Quote>
      </S>

      <S num="03 · User Roles — The Most Complex Design Problem">
        <H2>The most complex design problem<br /><Em>wasn't the interface — it was the roles</Em></H2>
        <P>Defining the five user roles was the foundational design work of the entire project. <B>We spent significant time on role profiling before touching any interface design.</B></P>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginTop:32 }}>
          {[
            {ic:'⚓',t:'Owner / Family Office',    d:'High-level financial visibility. Approves major expenditures. Sees portfolio view across multiple assets. Needs trustworthy summaries, not operational detail.'},
            {ic:'🏢',t:'Management Company',       d:'Full operational access. Manages crew, finances, charters, and documents. The primary power user — runs the platform day-to-day on behalf of owners.'},
            {ic:'📊',t:'Accountant',               d:'Financial data access only. Transaction logs, invoices, expense categories. Cannot modify operational settings. Needs dense, exportable data tables.'},
            {ic:'⛵',t:'Captain',                  d:'Operational access for their yacht. Manages crew, logs expenses, views charter schedules. Mobile-first — primarily uses the platform from the yacht.'},
            {ic:'👤',t:'Crew Member',              d:'Limited access. Views schedules, logs personal expenses on their prepaid card. Needs the simplest interface — often non-technical users in physical working environments.'},
            {ic:'🤝',t:'Charter Client',           d:'Temporary access during charter period. Views booking details, APA allocation, and costs. Read-only, time-limited, designed for occasional use.'},
          ].map(r=>(
            <div key={r.t} style={{ background:bg2,border:`1px solid ${line}`,borderRadius:14,padding:28 }}>
              <div style={{ fontSize:24,marginBottom:14 }}>{r.ic}</div>
              <div style={{ fontSize:15,fontWeight:600,color:T,marginBottom:8 }}>{r.t}</div>
              <div style={{ fontSize:13,fontWeight:300,color:sub,lineHeight:1.75 }}>{r.d}</div>
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

      <S num="05 · Final Design">
        <H2>A platform that feels as premium<br /><Em>as the assets it manages</Em></H2>
        <P>The visual language of P3 Marine was a deliberate design decision. <B>The people using this platform manage assets worth tens of millions of dollars.</B> The interface needed to feel trustworthy, precise, and premium.</P>
        <Img src="/images/p3marine/06-P3-Marine-—-Clients-list.png" alt="Clients list" cap="Clients list — Management view. Asset name, type, size, crew count, charter status, email, and multi-state status indicators. Sortable columns, search and filter, paginated table." />
        <Img src="/images/p3marine/07-P3-Marine-—-All-screens-Figma.png" alt="All screens Figma" cap="Figma screens overview — Management/Clients/SuperAdminView showing the breadcrumb navigation system and document management." />
        <Img src="/images/p3marine/08-P3-Marine-—-Card-details.png" alt="Card details" cap="Card details — Physical card management for crew members. Card balance ($2,563.898 USD), expense breakdown by category (Salary, Food, Fuel, Other), donut chart visualisation, Block/Top-up actions." />
        <Img src="/images/p3marine/09-P3-Marine-—-Mobile-views.png" alt="Mobile views" cap="Mobile views — Users list with search and filter. Client detail with yacht photos, asset details." />
        <Img src="/images/p3marine/10-Error-states-—-500-404-403.png" alt="Error states" cap="Error states — 500 (unexpected server error), 404 (page doesn't exist), 403 (access denied). Each designed with the platform's visual language." />
      </S>

      <S num="06 · Impact & Reflection">
        <H2>What we delivered and<br /><Em>what building this taught us</Em></H2>
        <P>P3 Marine launched and is live at p3marine.com. The platform is actively used by yacht management companies to manage their client portfolios — replacing the spreadsheet-and-WhatsApp model with a single structured system.</P>
        <Ins label="What I'd do differently">We designed the financial reporting screens for power users — accountants and management companies. In retrospect, we underinvested in the Owner view. Owners are often non-financial users who want to understand their yacht's economics without reading a transaction table.</Ins>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginTop:44 }}>
          {[
            {n:'300',su:'+',    d:'Screens designed across all platforms — desktop, two tablet sizes, two mobile sizes'},
            {n:'5',  su:'',     d:'Distinct role-based interfaces — genuinely separate information architectures, not permissions on one dashboard'},
            {n:'20', su:'+',    d:'Team members across the project — developers, product managers, QA, and backend engineers'},
            {n:'✦',  su:'',     d:'Platform live at p3marine.com — actively used by yacht management companies across Europe'},
            {n:'−2', su:' days',d:'Projected reduction in financial reporting time — from 2-day manual compilation to real-time dashboard access'},
            {n:'0→1',su:'',     d:'Built entirely from scratch — research, IA, design system, 300+ screens, full developer handoff.'},
          ].map(s=>(
            <div key={s.n+s.su} style={{ background:bg2,border:`1px solid ${line}`,borderRadius:14,padding:28 }}>
              <div style={{ fontSize:42,fontWeight:600,letterSpacing:'-.03em',color:T,lineHeight:1,marginBottom:10 }}>{s.n}<span style={{ fontSize:22,color:sub }}>{s.su}</span></div>
              <div style={{ fontSize:12,fontWeight:300,color:sub,lineHeight:1.65 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </S>

      <CaseFooter nextTitle="UkrSibBank" nextSubtitle="Omnichannel CRM" nextHref="/work/ukrsibbank" />
    </>
  )
}

function S({num,children}:{num:string;children:React.ReactNode}){return(<div style={{padding:'80px 52px',maxWidth:1160,margin:'0 auto',borderBottom:'1px solid rgba(255,255,255,0.07)'}}><div style={{fontSize:11,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(210,204,194,0.22)',marginBottom:20,display:'flex',alignItems:'center',gap:10}}><span style={{display:'block',width:24,height:1,background:'rgba(255,255,255,0.13)'}} />{num}</div>{children}</div>)}
function NC({title,subtitle,href}:{title:string;subtitle:string;href:string}){return(<div style={{borderTop:'1px solid rgba(255,255,255,0.07)'}}><div style={{padding:'80px 52px',display:'flex',alignItems:'center',justifyContent:'space-between',maxWidth:1160,margin:'0 auto'}}><div><div style={{fontSize:11,letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(210,204,194,0.22)',marginBottom:8}}>Next case</div><div style={{fontSize:24,fontWeight:600,letterSpacing:'-.02em',color:'#E5E0D8'}}>{title} →</div><div style={{fontSize:14,color:'rgba(210,204,194,0.5)',marginTop:4}}>{subtitle}</div></div><div style={{display:'flex',gap:12,alignItems:'center'}}><Link href="/" style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:13,color:'rgba(210,204,194,0.22)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:100,padding:'11px 24px'}}>← All cases</Link><Link href={href} style={{display:'inline-flex',alignItems:'center',gap:10,border:'1px solid rgba(255,255,255,0.13)',borderRadius:100,padding:'12px 28px',fontSize:13,color:'#E5E0D8'}}>View case ↗</Link></div></div></div>)}
