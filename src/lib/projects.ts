import type { Project, CaseStudy } from './types'

// ─── Home page project list ───────────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: 'ukrsibbank',
    num: '01',
    tags: ['Fintech', 'B2B', 'CRM'],
    title: 'UkrSibBank — Omnichannel CRM',
    subtitle: 'Unified interface for 3,000+ bank employees',
    desc: 'Consolidated all communication channels, reduced response times and manual workload. Design system covering 5+ digital platforms.',
    company: 'BNP Paribas Group',
    period: '2024–2026',
    accent: '#6B8CBA',
    hasCase: true,
  },
  {
    slug: 'p3-wealth',
    num: '02',
    tags: ['Fintech', 'Investments', 'BlackRock'],
    title: 'P3 Wealth × BlackRock — Capital Management',
    subtitle: 'Role-based platform for professional investors',
    desc: 'Structured onboarding, transparent reporting, seamless integrations with financial institutions.',
    company: 'BARVA.TECH',
    period: '2023–2024',
    accent: '#A89060',
    hasCase: true,
  },
  {
    slug: 'ifreq',
    num: '03',
    tags: ['Sports Tech', 'Mobile', 'Lead Designer'],
    title: 'IFREQ — Football Scouting Platform',
    subtitle: 'Led design for app, scouting CRM and website',
    desc: '+32% user activation, −27% churn, +35% scout productivity. AI-powered workflows cut reporting time by 50%.',
    company: 'IFREQ, Brussels',
    period: '2025–2026',
    accent: '#C8F135',
    hasCase: true,
  },
  {
    slug: 'safe',
    num: '04',
    tags: ['Banking', 'Mobile', 'Feature'],
    title: 'Safe — Goal-Based Savings',
    subtitle: 'Named savings jars tied to personal goals inside Ukrsib Online',
    desc: '7 research sprints, A/B testing, competitor analysis. Projected +38% savings deposits, 3× habit improvement.',
    company: 'UkrSibBank',
    period: '2024–2026',
    accent: '#1DB954',
    hasCase: true,
  },
  {
    slug: 'cryptoswift',
    num: '05',
    tags: ['Web3', 'B2B', 'Payments'],
    title: 'CryptoSwift — Merchant Payment Platform',
    subtitle: 'Full redesign across desktop, tablet and mobile',
    desc: 'Real-time fiat equivalent, invoice issuance, 5 responsive breakpoints. −40% support requests after launch.',
    company: 'BARVA.TECH',
    period: '2023',
    accent: '#4A9EE0',
    hasCase: true,
  },
  {
    slug: 'xgo',
    num: '06',
    tags: ['Web3', 'iOS & Android', '0→1'],
    title: 'XGo Wallet — Crypto & Fiat Mobile Wallet',
    subtitle: 'Built from zero — branding, research, full UX/UI',
    desc: 'Launch on App Store & Google Play. 5K+ downloads. Wallet.ID viral mechanic drove organic growth.',
    company: 'Freelance',
    period: '2021–2022',
    accent: '#D4A843',
    hasCase: true,
  },
  {
    slug: 'p3marine',
    num: '07',
    tags: ['SaaS', 'CRM', 'MVP'],
    title: 'P3 Marine — Yacht Management Platform',
    subtitle: 'Multi-role CRM for yacht owners, managers, accountants and crew',
    desc: '300+ screens, multi-currency financial tracking, 5 adaptive breakpoints.',
    company: 'BARVA.TECH',
    period: '2023–2024',
    accent: '#8B9BB4',
    hasCase: true,
  },
]

// ─── Case studies ─────────────────────────────────────────────────────────────

export const cases: CaseStudy[] = [

  // ── UkrSibBank ───────────────────────────────────────────────────────────────
  {
    slug: 'ukrsibbank',
    title: 'Manager Workplace',
    subtitle: 'Communication Platform',
    description: 'Manager Workplace — Communication Platform. Omnichannel CRM for 3,000+ bank employees.',
    tags: ['Fintech', 'B2B', 'CRM', 'Service Design', 'UkrSibBank'],
    accentTag: 'Fintech',
    accent: '#6B8CBA',
    cover: '/images/ukrsibbank/11-UkrSibBank-Business-final-design.png',
    infoGrid: [
      { label: 'Role', value: 'Lead Product Designer' },
      { label: 'Timeline', value: '2024–2026' },
      { label: 'Platform', value: 'Web · Desktop' },
      { label: 'Status', value: 'In development' },
    ],
    sections: [
      {
        num: '01',
        title: 'Overview',
        heading: 'Managers were running a bank through WhatsApp and Excel',
        blocks: [
          { type: 'p', content: 'Premium banking managers at UKRSIBBANK handled all client communication through personal messengers — WhatsApp, Telegram, personal phone calls. **This was not just inefficient — it was a compliance violation.** Banks cannot operate through uncontrolled, unlogged, unencrypted personal channels.' },
          { type: 'p', content: 'Beyond the regulatory risk, the experience for managers was genuinely painful: scattered conversations across apps, no client history in one place, manual Excel sheets for tracking, no templates, no status visibility. Every single client interaction required switching between **6–8 different tools** — none of which talked to each other.' },
          {
            type: 'insight',
            title: 'The core tension',
            content: 'The bank had invested heavily in digital products for clients — Ukrsib Online, Ukrsib Business — but the internal tooling for the people managing those clients was stuck in 2010. There was a deep irony in managers promoting digital banking while managing their own work with WhatsApp and a personal notebook.'
          },
          {
            type: 'metrics',
            items: [
              { n: '6–8', d: 'Tools a manager used daily — Outlook, SAP AMP, Rata net, Excel, Zoom, messengers — zero integration' },
              { n: '0%', d: 'Compliant communication channels before the project — all contact through personal phones and unmonitored apps' },
              { n: '550+', d: 'Average clients per manager — tracked manually in Excel, no CRM, no unified client view' },
            ]
          }
        ]
      },
      {
        num: '02',
        title: 'Research — Going to the Source',
        heading: 'We went where the problem actually lived',
        blocks: [
          { type: 'p', content: 'The first instinct when designing internal tools is to interview stakeholders in meeting rooms and work from documented processes. We deliberately avoided that. **Documented processes and actual work behaviour almost never match.** People adapt, work around broken systems, develop informal workarounds — and that\'s exactly where the real design insights live.' },
          { type: 'p', content: 'So before any wireframe or workshop, I travelled across Ukraine visiting bank branches — observing managers in their actual working environment, watching them handle real client interactions in real time.' },
          { type: 'tags', labels: ['📍 Kyiv', '📍 Lviv', '📍 Kharkiv', '📍 Poltava', '📍 Vinnytsia'] },
          { type: 'image', src: '/images/ukrsibbank/01-Manager-workstations-across-Ukraine.png', alt: 'Manager workstations', caption: 'Real manager workstations photographed during field visits — the physical evidence of fragmentation.' },
          {
            type: 'card',
            title: 'What we found that surprised us',
            content: 'We expected to find tool overload. What we didn\'t expect was how much **invisible emotional load** managers were carrying. They weren\'t just managing tasks — they were managing relationships, urgency, and anxiety across 550+ clients with no system to help them prioritise. A manager in Kharkiv told us she woke up at 2am to check if a client had replied. That\'s not a tool problem. That\'s a mental health problem disguised as a UX problem.\n\nThis reframed our whole approach. We weren\'t just building a chat tool. We were building a system that **gives managers back a sense of control** over their workday.'
          },
          {
            type: 'quote',
            text: '"I have 6 tabs open at all times. WhatsApp on my personal phone, Excel, SAP, Outlook, Zoom, and the bank\'s own system — and none of them talk to each other."',
            author: 'Василь, Premium Banking Manager, Kharkiv branch'
          },
          { type: 'image', src: '/images/ukrsibbank/02-Research-findings-presentation.png', alt: 'Research findings', caption: 'Research synthesis — Premium Communication Platform discovery results presented to product and compliance stakeholders.' }
        ]
      },
      {
        num: '03',
        title: 'Personas — Two Users, One System',
        heading: 'Same broken system, *two completely different pains*',
        blocks: [
          {
            type: 'p',
            content: 'Early in the project we made a mistake that a lot of B2B product teams make: we focused entirely on the front-line user and almost missed the second critical actor. The persona work forced us to confront this.'
          },
          {
            type: 'p',
            content: '**Василь, 25 — the Manager.** He\'s measured by sales plan execution. His bonus depends on client satisfaction scores and product cross-sells. He handles 550+ clients and switches tools constantly. He wants speed, templates, and to never have to leave one screen mid-conversation. His problem is fragmentation.'
          },
          {
            type: 'p',
            content: '**Анна, 35 — the Sector Head.** She manages 8–12 managers and is accountable for the entire sector\'s performance. Her problem is invisibility. She has no real-time view into her team\'s workload. She finds out about a problem when a client escalates — by which point it\'s already a management issue, not a product issue.'
          },
          {
            type: 'image',
            src: '/images/ukrsibbank/03-Personas-and.png',
            alt: 'Personas',
            caption: 'Detailed personas — Керівник сектору Анна (35) and Менеджер СДКФ Василь (25).'
          },
          {
            type: 'card',
            title: 'The design implication',
            content: 'Designing for Василь and Анна in the same interface required a fundamentally different approach чем большинство чатов. **We weren\'t building a single product — we were building two overlapping products that share a data layer.** Василь needs speed and context within conversations. Анна needs visibility across conversations. Getting the information architecture right to serve both without cluttering either was the central design challenge of the entire project.'
          }
        ]
      },
      {
        num: '04',
        title: 'Customer Journey Maps',
        heading: 'Mapping failure points before designing solutions',
        blocks: [
          {
            type: 'p',
            content: 'Before jumping to solutions, we needed to understand exactly where things broke down — not at a high level, but at every individual step of every key scenario. We mapped 4 client journeys in full detail: account closure (standard), closure with service refusal, payment instruction operations, and unauthorised card charge disputes.'
          },
          {
            type: 'p',
            content: 'The CJM work was revealing not because it confirmed what we expected — but because it **showed us patterns we hadn\'t noticed in individual interviews**. The same failure modes kept appearing across different scenarios: the manager had to manually verify information that should have been in the system; the client received no status updates; the manager had to use 3 different tools for one operation.'
          },
          { type: 'image', src: '/images/ukrsibbank/04-FigJam-CJM-overview.png', alt: 'FigJam CJM overview', caption: 'FigJam board — all 4 CJMs and Service Blueprints mapped together.' },
          {
            type: 'gridImages',
            images: [
              { src: '/images/ukrsibbank/05-CJM-Account-closure.png', alt: 'CJM Account closure', caption: 'CJM — Account Closure (standard). 6 stages, with client pain, emotions, manager pain, tools and improvement opportunities per stage.' },
              { src: '/images/ukrsibbank/06-CJM-Payment-instructions.png', alt: 'CJM Payment instructions', caption: 'CJM — Payment Instructions. 7 stages. The most tool-intensive scenario — manager switches between SAP AMP, chat, PDF tools and email in a single operation.' }
            ]
          },
          { type: 'image', src: '/images/ukrsibbank/07-CJM-Dispute.png', alt: 'CJM Dispute', caption: 'CJM — Unauthorised Charge Dispute. Client emotions tracked across all 7 stages. ' },
          {
            type: 'insight',
            title: 'THE KEY PATTERN WE FOUND',
            content: '*Across all 4 scenarios, the same three failures appeared repeatedly: the manager didn\'t have client context at hand, the client didn\'t know what was happening, and handoffs between systems generated manual work. These three patterns became the three design principles.*'
          }
        ]
      },
      {
        num: '05',
        title: 'User Flows & Architecture',
        heading: 'Designing the system before the screens',
        blocks: [
          { type: 'p', content: 'One of the most important decisions was how to structure the information architecture of the Manager Workplace itself. The temptation was to build a chat-first interface. We tested this and found it was wrong. **Managers didn\'t think of their job as "having conversations". They thought of their job as "managing clients".**' },
          {
            type: 'splitText',
            leftTitle: 'What we originally tried',
            leftContent: 'Chat-first layout with client details in a sidebar. Felt natural — like Slack. But in testing, managers kept switching back and forth, losing context mid-conversation.',
            rightTitle: 'What we shipped instead',
            rightContent: '**Client-first layout.** The active conversation is always visible — but it\'s framed within the client record.  Account data, transaction history, and conversation live on the same screen.'
          },
          { type: 'image', src: '/images/ukrsibbank/08-User-flows-overview.png', alt: 'User flows', caption: 'User flow diagrams showing end-to-end scenarios and system decisions.' }
        ]
      },
      {
        num: '06',
        title: 'Wireframes — Testing Structure',
        heading: 'Two rounds of testing before a single colour was applied',
        blocks: [
          { type: 'p', content: 'The wireframing phase was longer than most projects. **A confused manager wastes client time. A missing status update causes an escalation.** We ran two full rounds of wireframe testing with actual managers who would use this tool for 8+ hours a day.' },
          {
            type: 'gridImages',
            images: [
              { src: '/images/ukrsibbank/09-Wireframe-Dashboard.png', alt: 'Wireframe Dashboard', caption: 'Manager dashboard layout iterations.' },
              { src: '/images/ukrsibbank/10-Wireframe-Chat-interface.png', alt: 'Wireframe Chat', caption: 'Communication workspace — three-column layout was a late decision.' }
            ]
          },
          {
            type: 'card',
            title: 'What changed between round 1 and round 2',
            content: 'In round 1, we had a two-column layout. Managers found it clean. But they kept going back to SAP to check account details mid-conversation.\n\nRound 2 introduced the three-column layout. The insight: **density looks complex but feels simple when the density is contextually relevant.**'
          }
        ]
      },
      {
        num: '07',
        title: 'Final Design',
        heading: 'The UkrSibBank digital ecosystem',
        blocks: [
          { type: 'p', content: 'The Manager Workplace doesn\'t exist in isolation — it\'s part of a broader UkrSibBank digital ecosystem. **One of our core design principles was navigation consistency.**' },
          { type: 'image', src: '/images/ukrsibbank/11-UkrSibBank-Business-final-design.png', alt: 'Final Design', caption: 'UkrSibBank Business — final design showing the shared navigation system.' },
          { type: 'image', src: '/images/ukrsibbank/12-App-switcher.png', alt: 'App switcher', caption: 'Unified app switcher designed to reduce cognitive load.' }
        ]
      },
      {
        num: '08',
        title: 'Key Design Decisions',
        heading: '6–8 tools became one. Here\'s how we got there.',
        blocks: [
          {
            type: 'gridDecisions',
            decisions: [
              { wide: true, ic: '⬡', t: 'Unified omnichannel interface', d: 'The central product decision: all client communication — messages, phone, email — in one compliant workspace. Every channel is logged and encrypted.' },
              { ic: '◈', t: 'Client context always visible', d: 'Account status and transaction history visible alongside the active chat. Eliminated the need to switch to SAP AMP.' },
              { ic: '◎', t: 'Templates & automation', d: 'Template library for common responses. Automated status updates and reminders.' },
              { ic: '◫', t: 'Sector head visibility layer', d: 'Dedicated view for Анна: real-time workload dashboard and dialogue statuses.' },
              { ic: '◻', t: 'Compliance by design', d: 'Making compliance feel invisible. Logging and encryption happen automatically.' }
            ]
          }
        ]
      },
      {
        num: '09',
        title: 'Impact & Reflection',
        heading: 'What we shipped, what we learned',
        blocks: [
          { type: 'p', content: 'Looking back, the most valuable part of this project wasn\'t the interface — it was the research. **We found a problem that looked like a tooling problem but was actually a systemic problem.** Managers werent struggling because they lacked a chat tool, but because of a lack of designed internal experience.' },
          {
            type: 'card',
            title: 'What I\'d do differently',
            content: 'We spent more time on the manager experience. The client\'s perspective — receiving a message through the new system — deserves its own research thread.'
          },
          {
            type: 'metrics',
            items: [
              { n: '−', su: '6', d: 'Tools consolidated into one workspace — from 6–8 systems to one' },
              { n: '−35', su: '%', d: 'Projected reduction in time per client interaction' },
              { n: '100', su: '%', d: 'Compliant communication channels — from 0% before' },
              { n: '3k', su: '+', d: 'Bank employees who will use the platform' },
              { n: '−40', su: '%', d: 'Estimated reduction in manual tracking time for sector heads' },
              { n: '4', d: 'Key client journeys fully mapped with blueprints' }
            ]
          }
        ]
      }
    ]
  },

  // ── P3 Wealth ───────────────────────────────────────────────────────────────
  {
    slug: 'p3-wealth',
    title: 'P3 Wealth × BlackRock',
    subtitle: 'Capital Management Platform',
    description: 'A regulated investment platform for high-net-worth investors — designed around trust, legibility, and role-based access with BlackRock integration.',
    tags: ['Fintech', 'Investments', 'B2B', 'BlackRock', 'Web Platform'],
    accentTag: 'Fintech',
    accent: '#A89060',
    cover: '/images/p3-wealth/00-P3-Wealth-—-End-to-end-platform.png',
    infoGrid: [
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Timeline', value: '2023–2024' },
      { label: 'Platform', value: 'Web · Desktop' },
      { label: 'Partner', value: 'BlackRock' },
    ],
    sections: [
      {
        num: '01',
        title: 'Overview',
        heading: 'Professional investors deserve **a professional-grade experience**',
        blocks: [
          { type: 'p', content: 'P3 Wealth is a regulated capital management platform for high-net-worth investors and financial institutions. When we started, the platform existed — but the UX didn\'t. **Fund data from BlackRock was accessible, but buried.** Onboarding was painful, and the system treated retail investors and institutional managers as the same person.' },
          { type: 'p', content: 'The brief was to design the platform from the ground up: information architecture, onboarding flows, dashboard, and reporting. With BlackRock integration and FCA compliance as hard constraints that couldn\'t be negotiated — only designed within.' },
          {
            type: 'insight',
            title: 'The central design challenge',
            content: '*In regulated financial products, you can\'t simplify the underlying system. Complexity is a requirement. The design challenge is making that complexity invisible without pretending it doesn\'t exist.*'
          },
          {
            type: 'metrics',
            items: [
              { n: '$48M', su: '+', d: 'AUM displayed on the live dashboard — real-time fund data sourced directly from BlackRock' },
              { n: '4', d: 'Distinct user roles designed — investor, fund manager, administrator, compliance officer' },
              { n: '3', d: 'Currency markets supported — EUR, GBP, USD — with real-time AUM and yield tracking' },
            ]
          }
        ]
      },
      {
        num: '02',
        title: 'Research',
        heading: 'The user we thought we had **and the user we actually had**',
        blocks: [
          { type: 'p', content: 'We initially assumed our users were digitally fluent investors who would prioritise data density. **The research told a different story.** Through interviews, we found that our users — while financially sophisticated — had been managing investments through relationship managers and phone calls for years.' },
          { type: 'image', src: '/images/p3-wealth/01-P3-Wealth-Personas.png', alt: 'P3 Wealth Personas', caption: 'User personas — Emma, Ivan, Diana, and Mitch. Mapping Story, Goals, and Pain Points from research sessions.' },
          {
            type: 'card',
            title: 'The insight that changed everything',
            content: 'Professional investors don\'t trust interfaces they don\'t understand. Confusion leads to distrust — and distrust leads to zero investment. This is why **"Data sourced from BlackRock" with a timestamp** became a first-class design element, not a footnote.'
          },
          {
            type: 'quote',
            text: '"I need to see exactly where my money is, what it\'s doing, and what I can do about it — without calling anyone to explain."',
            author: 'Ivan, Professional investor persona'
          }
        ]
      },
      {
        num: '03',
        title: 'Process',
        heading: 'Five stages, one **consistent thread**',
        blocks: [
          {
            type: 'steps',
            items: [
              {
                n: '01',
                t: 'Persona & Hypothesis Generation',
                d: 'Mapped archetypes and conducted competitive analysis of Saxo Bank and private banking portals.',
                i: 'Investors abandon onboarding if they can\'t see the end. Solution: clear progress indicators.'
              },
              {
                n: '02',
                t: 'Feature Prioritisation & MVP',
                d: 'Negotiated 14 compliance disclosure screens down to 3 by surfacing legal info contextually.',
                i: 'Compliance and UX aren\'t in conflict; it\'s just a matter of timing and placement.'
              },
              {
                n: '03',
                t: 'Design System & Simplon Mono',
                d: 'Built a full UI kit. Chose monospaced fonts for numerical data to improve scannability in tables.',
                i: 'Mono numbers reduced read errors by 23% in user testing sessions.'
              },
              {
                n: '04',
                t: 'Role-Based IA',
                d: 'Investors, managers, and admins share the platform but see fundamentally different, tailored interfaces.',
                i: 'Right approach: show only what is relevant. Wrong approach: show everything and disable what is locked.'
              },
              {
                n: '05',
                t: 'Iterative Testing',
                d: 'Three rounds of usability testing. The dashboard graph went through 3 iterations to remove ambiguity.',
                i: 'Users are more afraid of making mistakes than they are of "hard" interfaces.'
              }
            ]
          }
        ]
      },
      {
        num: '04',
        title: 'Design System',
        heading: 'A system built for **trust, not aesthetics**',
        blocks: [
          { type: 'p', content: 'The design system wasn\'t designed to look good — it was designed to communicate reliability. Button states, input validation, and error messages were built to guide, not panic.' },
          { type: 'image', src: '/images/p3-wealth/02-P3-Wealth-Design-System.png', alt: 'Design System' },
          {
            type: 'card',
            title: 'Why Simplon Mono for numbers',
            content: 'Monospaced numerals align vertically in tables, making it dramatically easier to compare values at a glance. **Typography in financial design is a functional decision, not a stylistic one.**'
          }
        ]
      },
      {
        num: '05',
        title: 'Final Design',
        heading: 'Screens that shipped **and are used by real investors**',
        blocks: [
          { type: 'p', content: 'The platform is live. The decisions we made — trust signals, daily update timestamps, and the AUM/Yield toggle — are now being validated by actual user behavior.' },
          { type: 'image', src: '/images/p3-wealth/03-Dashboard.png', alt: 'Dashboard', caption: 'Investment dashboard — AUM overview ($48.2M) and Performance graph.' },
          {
            type: 'splitText',
            leftTitle: 'First version of the graph',
            leftContent: 'Tabbed interface for AUM and Yield. Users were unsure if clicking would navigate away or just change the view.',
            rightTitle: 'Shipped version',
            rightContent: '**Toggle control with clear active state.** Users immediately understood they were switching the view, not navigating away.'
          },
          { type: 'image', src: '/images/p3-wealth/04-Funds-page.png', alt: 'Funds page', caption: 'Structured comparison across different fund types with inline subscription flow.' }
        ]
      },
      {
        num: '06',
        title: 'Key Decisions',
        heading: 'What we solved and **how we got there**',
        blocks: [
          {
            type: 'gridDecisions',
            decisions: [
              { wide: true, ic: '🪜', t: 'Multi-step onboarding', d: 'Added a step counter to the first screen to reduce abandonment. Multi-signatory flows were handled asynchronously, removing coordination friction.' },
              { ic: '🔑', t: 'Role architecture', d: 'Each role sees a purposeful interface. The permission system operates silently — users never encounter "access denied" screens.' },
              { ic: '📈', t: 'Trust-first data', d: 'BlackRock attribution with timestamps is a primary UI element. Trends are shown clearly without false precision.' },
              { ic: '⚖️', t: 'Compliance as context', d: 'Integrated FCA disclosures contextually. Tested and proven to have higher recall than front-loaded walls of text.' },
            ]
          }
        ]
      },
      {
        num: '07',
        title: 'Impact',
        heading: 'Shipped, live, **and still learning**',
        blocks: [
          { type: 'p', content: 'The decisions we made about trust and legibility proved to be the right frame for every downstream design decision.' },
          {
            type: 'insight',
            title: 'The key takeaway',
            content: '*In fintech, the relationship with risk is the central UX problem. Design for certainty first. Design for efficiency second.*'
          },
          {
            type: 'metrics',
            items: [
              { n: '↑30', su: '%', d: 'Onboarding completion after redesigning multi-step institution setup with visible progress' },
              { n: '4', su: ' roles', d: 'User permission levels — each with a tailored interface rather than a restricted one' },
              { n: '$48M', su: '+', d: 'AUM tracked live on the platform — sourced from BlackRock with daily update timestamps' },
              { n: '3', su: ' cur.', d: 'EUR, GBP, USD — full per-currency routing and bank details in the flow' },
              { n: '✦', d: 'Platform live in production — real investors, real funds, real decisions through our UI' },
              { n: '0', d: 'Compliance violations in the design — every FCA requirement met contextually' },
            ]
          }
        ]
      }
    ]
  },

  // ── IFREQ ────────────────────────────────────────────────────────────────────
  {
    slug: 'ifreq',
    title: 'IFREQ — Get Analyzed', // Перенесли часть фразы сюда для первой строки
    subtitle: 'Get Scouted',       // Оставили только италик для второй строки
    description: 'A football scouting platform giving every player a chance to be discovered. Led design end-to-end across mobile app, coach tools, scout CRM and marketing — managing a team of designers, developers, and motion designers.',
    tags: ['Lead Designer', 'Sports Tech', 'Mobile App', 'Scout CRM', 'IFREQ, Belgium'],
    accent: '#C8F135',
    accentTag: 'Lead Designer',
    cover: '/images/ifreq/01-IFREQ-—-Turn-Data-Into-Progress.png',
    infoGrid: [
      { label: 'Role', value: 'Lead Product Designer' },
      { label: 'Timeline', value: '2025–2026' },
      { label: 'Platform', value: 'iOS · Android · Web' },
      { label: 'Company', value: 'IFREQ, Belgium' },
    ],
    sections: [
      {
        num: '00',
        title: 'App Store — Marketing Screenshots',
        heading: 'Designed for App Store & Google Play',
        blocks: [
          { type: 'p', content: 'Created the full set of App Store screenshots communicating core product value — from player testing and card creation to pro club discovery.' },
          { type: 'image', src: '/images/ifreq/02-App-Store-Screenshots.png', alt: 'App Store Screenshots' }
        ]
      },
      {
        num: '01',
        title: 'Overview',
        heading: 'Talent is everywhere. **Opportunity isn\'t.**',
        blocks: [
          { type: 'p', content: 'Every year thousands of talented footballers go unnoticed — not because they lack skill, but because no one with the right connections is watching. The traditional scouting system favours players who are already in academies, in the right cities, with the right parents. **IFREQ was built to change the odds.**' },
          { type: 'p', content: 'The platform gives players a standardised evaluation — tested at real events, assessed across 5 dimensions, assigned a card with a global ranking. Professional clubs access a live database of rated players. **If you standardise the data, you democratise the opportunity.**' },
          { type: 'insight', title: 'Why this is a hard design problem', content: '*IFREQ isn\'t one product — it\'s three. A player app, a coach app, and a scout CRM. Each serves a completely different user type with different mental models, different contexts of use, and different definitions of success.*' },
          {
            type: 'metrics',
            items: [
              { n: '50', su: '+', d: 'Players on pro trials at clubs like PSG, Bayern Munich, FC Porto. 20+ officially signed.' },
              { n: '+32', su: '%', d: 'User activation after onboarding redesign — validated through Mixpanel funnel analysis' },
              { n: '−27', su: '%', d: 'Churn reduction through improved user journey and AI-driven training personalisation' },
            ]
          }
        ]
      },
      {
        num: '02',
        title: 'Product Ecosystem',
        heading: 'Three products, one team, **one design lead**',
        blocks: [
          { type: 'p', content: 'As Lead Product Designer, I owned the full design process end-to-end. I also managed a cross-functional team of designers, developers, motion designers, and graphic designers.**How do you keep visual consistency and UX coherence when multiple people are working on different parts of the system?**' },
          { type: 'p', content: 'The answer was the design system. Before building any product screens, we invested time in defining the token layer — colours, typography, spacing, component states.' },

          {
            type: 'gridDecisions',
            decisions: [
              { ic: '⚽', t: 'Player App', d: 'Players register, attend test events, get evaluated, receive their performance card. Track rankings, view video replays, share profile with clubs.' },
              { ic: '🎯', t: 'Coach App', d: 'Coaches manage test events on the pitch in real time — create sessions, confirm players, capture profile photos with AI alignment.' },
              { ic: '📊', t: 'Scout Dashboard', d: 'Professional clubs browse rated players, filter by age/position/score, compare candidates, export data. Used in offices by decision makers.' },
            ]
          }
        ]
      },
      {
        num: '03',
        title: 'Research — Different Contexts',
        heading: 'We had to understand **three completely different contexts**',
        blocks: [
          { type: 'p', content: 'IFREQ wasn\'t built to change rules — it was built to change what\'s possible. These context differences dictated design decisions.  If you standardise the data, you democratise the opportunity. **These context differences dictated design decisions.**' },
          { type: 'p', content: 'The player app needed to be emotional and motivating. The coach app needed to be fast and error-tolerant. The scout dashboard needed to be dense and filterable.' },
          { type: 'image', src: '/images/ifreq/03-Customer-Journey-Map.png', alt: 'CJM', caption: 'Customer Journey Map — 9 stages from Onboarding to Payment. Steps, Actions, Goals, Emotions, Pains and Opportunities.' },
          { type: 'image', src: '/images/ifreq/04-User-Flow.png', alt: 'User Flow', caption: 'User flow diagram — complete registration and test booking flow.' },
          { type: 'card', title: 'What the CJM revealed', content: 'The CJM showed something we didn\'t expect: the biggest emotional low point in the player journey wasn\'t the test itself. It was the payment screen. Players felt **stress and "fear of mistake"** about whether they were registering correctly.' },
          { type: 'quote', text: '"I\'ve been paying for 12 years and never had anyone evaluate me properly. IFREQ gave me a number, a card, and now a trial at a real club."', author: 'Player interview, IFREQ research session' }
        ]
      },
      {
        num: '04',
        title: 'Onboarding — 32% Increase',
        heading: 'A 32% activation increase **from one redesign**',
        blocks: [
          { type: 'p', content: 'The original onboarding had too many steps and no social login options. Players were dropping off before they ever saw the product.' },
          {
            type: 'splitText',
            leftTitle: 'Original onboarding problem',
            leftContent: 'Generic welcome screens with no clear value statement. Email-only registration. No progress indicator. Players dropped off mid-flow.',
            rightTitle: 'What we changed',
            rightContent: '**Three emotionally resonant welcome screens** — Social login added. Progress indicator from screen 1. Result: +32% activation.'
          },
          { type: 'image', src: '/images/ifreq/05-Onboarding-Flow.png', alt: 'Onboarding Flow', caption: 'Redesigned onboarding flow — from welcome screens to main dashboard.' }
        ]
      },
      {
        num: '05',
        title: 'Player Experience',
        heading: 'Your identity, your card — **designed to feel earned**',
        blocks: [
          {
            type: 'p',
            content: "The player profile is the product's emotional centrepiece. The moment a player sees their card for the first time needs to feel significant. **This is a player's digital identity in football.**"
          },
          {
            type: 'image',
            src: '/images/ifreq/06-Player-Profile.png',
            alt: 'Player Profile',
            caption: 'Player profile — radar chart, video replay with AI feedback, shareable card design.'
          },
          {
            type: 'image',
            src: '/images/ifreq/07-Test-Flow.png',
            alt: 'Test Flow',
            caption: 'Test Flow — coach captures profile photo using AI face-framing tool.'
          }
        ]
      },
      {
        num: '06',
        title: 'Booking & Payment',
        heading: 'The moment players almost **didn\'t sign up**',
        blocks: [
          {
            type: 'p',
            content: 'We redesigned the checkout flow specifically around "fear of mistake". **Every step before payment is a confirmation, not a form.** The Order Preview screen was added explicitly to give players one complete view before any money moves.'
          },
          {
            type: 'image',
            src: '/images/ifreq/08-Test-Booking.png',
            alt: 'Test Booking',
            caption: 'Test booking — event list with filters, session detail with countdown timer.'
          },
          {
            type: 'image',
            src: '/images/ifreq/09-Payment-Flow.png',
            alt: 'Payment Flow',
            caption: 'Payment — Order Preview with inline voucher entry. Apple Pay, Google Pay, Klarna.'
          }
        ]
      },
      {
        num: '07',
        title: 'Pricing — Three Tiers',
        heading: 'Pricing designed to **convert at every level**',
        blocks: [
          {
            type: 'p',
            content: "The three-tier package structure wasn't just a business decision — it was a design decision. **We needed to make IFREQ accessible at different stages.**"
          },
          {
            type: 'card',
            title: 'Scarcity in pricing',
            content: 'The "Plus sold out" state creates scarcity that makes the Standard tier feel reasonable and the Pro tier feel like a premium worth unlocking.'
          },
          {
            type: 'pricing',
            plans: [
              { badge: 'Standard', name: 'Standard', price: '€500', period: '/ test', features: ['Basic AI feedback', 'Performance report', 'AI video analysis', 'Test participation'], pro: false },
              { badge: 'Plus', name: 'Plus', price: '€1000', period: '/ test', features: ['Everything in Standard', 'Priority scout visibility', 'Comparative analytics', 'Direct recommendation'], pro: false },
              { badge: 'Pro', name: 'Pro', price: '€1500', period: '/ 2 tests', features: ['Everything in Plus', '2 IFREQ sessions', 'Top placement in CRM', 'Direct club contact'], pro: true },
            ]
          }
        ]
      },
      {
        num: '08',
        title: 'Scout CRM',
        heading: 'Scouts think in comparisons. **The dashboard had to too.**',
        blocks: [
          {
            type: 'p',
            content: 'The scout dashboard was the most technically complex product. **Scouts are professional evaluators.** They need the interface to get out of their way, allowing for rapid comparison and data export.'
          },
          {
            type: 'image',
            src: '/images/ifreq/10-Scout-Dashboard.png',
            alt: 'Scout Dashboard',
            caption: 'Scout CRM — player database with filters and side-by-side radar chart comparison.'
          }
        ]
      },
      {
        num: '09',
        title: 'Design System',
        heading: 'The foundation that made **three products feel like one**',
        blocks: [
          {
            type: 'p',
            content: 'The IFREQ design system allowed a team to work in parallel. **The most important decision was the colour token structure**, ensuring consistency across the player app and the professional scout CRM.'
          },
          {
            type: 'image',
            src: '/images/ifreq/11-IFREQ-Inputs---Buttons.png',
            alt: 'Inputs & Buttons'
          },
          {
            type: 'gridImages',
            images: [
              { src: '/images/ifreq/12-Color---Typography.png', alt: 'Color & Typography', caption: 'Color styles and Aeonik typography scale.' },
              { src: '/images/ifreq/13-Icon-Library.png', alt: 'Icon Library', caption: '500+ custom icons specifically for football test modules.' }
            ]
          }
        ]
      },
      {
        num: '10',
        title: 'Impact & Reflection',
        heading: 'What the numbers say **and what they don\'t**',
        blocks: [
          {
            type: 'p',
            content: "The metrics are good, but I'm most proud of the 20+ players who officially signed with professional clubs. **That's the outcome this product was built for.**"
          },
          {
            type: 'metrics',
            items: [
              { n: '+32', su: '%', d: 'User activation — onboarding redesign with value-driven screens' },
              { n: '−27', su: '%', d: 'Churn reduction through improved journey and personalisation' },
              { n: '+41', su: '%', d: 'Training module completion via AI guidance' },
              { n: '+35', su: '%', d: 'Scout productivity after CRM launch' },
              { n: '−50', su: '%', d: 'Reporting time cut through AI workflow automation' },
              { n: '50', su: '+', d: 'Players on pro trials. 20+ officially signed.' }
            ]
          }
        ]
      }
    ]
  },

  // ── Safe ─────────────────────────────────────────────────────────────────────
  {
    slug: 'safe',
    title: 'Safe — Goal-Based Savings',
    subtitle: 'inside Ukrsib Online',
    description: 'A savings feature that transforms banking deposits into personal goals — named jars, visual progress, automatic top-ups. Designed with 7 research sprints.',
    tags: ['Senior Designer', 'Fintech', 'Mobile', 'Feature Design', 'UkrSibBank'],
    accent: '#1DB954',
    accentTag: 'Senior Designer',
    cover: '/images/safe/00-Safe-—-all-screens-overview.png',
    infoGrid: [
      { label: 'Role', value: 'Senior Product Designer' },
      { label: 'Timeline', value: '2024–2026' },
      { label: 'Platform', value: 'iOS · Android' },
      { label: 'Company', value: 'UkrSibBank BNP Paribas' },
    ],
    sections: [
      {
        num: '01',
        title: 'Overview',
        heading: 'People know they should save. **They just don\'t know how to start.**',
        blocks: [
          { type: 'p', content: 'Ukrsib Online already offered deposits and savings accounts — but they felt like banking products, not personal tools. Users understood the mechanics but didn\'t connect them to their own goals. **A deposit is a financial instrument. A "Банка" (jar) for your vacation is a dream you\'re building towards.** The language and the UX needed to change completely.' },
          { type: 'p', content: 'Safe is a goal-based savings feature inside the Ukrsib Online mobile app — a way for users to create named savings accounts tied to personal goals, with visual progress tracking, automatic top-ups, and smart reminders. The hypothesis: **if we make saving feel personal and progress visible, users will save more and stay longer.**' },
          {
            type: 'insight',
            title: 'Why this matters at scale',
            content: '*Ukrsib Online has 2M+ users. Even a small improvement in savings engagement directly impacts the bank\'s liquidity and long-term client retention. This wasn\'t a nice-to-have feature — it was a strategic bet.*'
          },
          {
            type: 'metrics',
            items: [
              { n: '2M', su: '+', d: 'Ukrsib Online users who could access the feature on launch — Ukraine\'s largest retail banking apps' },
              { n: '7', d: 'Design sprints and workshops conducted across the full process — from alignment to A/B testing' },
              { n: '3', d: 'Competing approaches tested in hypothesis validation before committing to the model' },
            ]
          }
        ]
      },
      {
        num: '02',
        title: 'Research Process',
        heading: 'Seven stages before **a single screen was drawn**',
        blocks: [
          { type: 'p', content: 'This was one of the most research-heavy projects I\'ve worked on at UkrSibBank. The process was deliberately structured. **Savings behaviour is deeply personal and often irrational, and designing without understanding the psychology would have meant designing the wrong thing.**' },
          { type: 'image', src: '/images/safe/01-Research-process-board-—-Service.so-for-.png', alt: 'Research process', caption: 'Full research process board — Kickoff meeting documentation, timeline schedule, team structure, competitive analysis.' },
          {
            type: 'steps',
            items: [
              { n: '01', t: 'Stakeholder & Business Goals Alignment', d: 'Started with a kickoff mapping business objectives against motivations. **The tension we found: the bank wants users to lock money away longer. Users want flexibility.**', i: 'Key output: we had to design a fundamentally different relationship with saving.' },
              { n: '02', t: 'Competitive Analysis — Ukraine & Global', d: 'Analysed Ukrainian competitors and international references. **The market gap wasn\'t about interest rates — it was about UX.**', i: 'Monobank\'s "jar" was the closest reference — we studied why it worked and where it fell short.' },
              { n: '03', t: 'Question Generation & Grouping', d: 'Generated 80+ research questions across the team to identify the most important unknowns. **Good research starts with good questions.**', i: '' },
              { n: '04', t: 'User Interviews', d: 'Conducted interviews with active and occasional savers. Goal: understand **why their saving behaviour broke down**.', i: 'Pattern: people set goals in their head but had no system to track them.' },
              { n: '05', t: 'Hypothesis Generation', d: 'Translated research findings into testable hypotheses prioritised by impact and feasibility.', i: '' },
              { n: '06', t: 'Wireframing', d: 'Turned hypotheses into a feature list, then mapped them to high-level wireframes for validation.', i: '' },
              { n: '07', t: 'A/B Testing & Full User Map', d: 'Ran A/B tests on key decisions. Built the full user map covering every state. **The user map ensured no edge case was left undesigned.**', i: 'Users who set a specific goal and deadline were 3x more likely to maintain the habit.' }
            ]
          }
        ]
      },
      {
        num: '03',
        title: 'Competitive Analysis',
        heading: 'What the market had **and what was missing**',
        blocks: [
          { type: 'p', content: 'We studied both Ukrainian competitors and international benchmarks. The gap was clear: **Ukrainian banks treated savings as a financial instrument. International fintechs treated saving as a behaviour.**' },
          { type: 'image', src: '/images/safe/02-Competitive-analysis-—-Privatbank-Monob.png', alt: 'Analysis', caption: 'Competitive analysis mapping strengths and weaknesses per competitor.' },
          {
            type: 'splitText',
            leftTitle: 'What competitors had',
            leftContent: 'No goal naming. No progress bars. No visual motivation. **Functionally correct, emotionally disconnected.**',
            rightTitle: 'What we designed instead',
            rightContent: '**Named savings "jars" tied to personal goals.** Progress visualisation. Automatic top-ups and milestone push reminders.'
          }
        ]
      },
      {
        num: '04',
        title: 'Key Hypotheses',
        heading: 'What we believed **before we built anything**',
        blocks: [
          { type: 'p', content: 'Hypotheses are the most honest artefact. They force you to state what you believe. **We wrote every hypothesis in the format: if we do X, we expect Y, because Z.**' },
          { type: 'image', src: '/images/safe/03-Hypotheses-from-workshops.png', alt: 'Workshops', caption: 'Hypothesis generation workshops grouped by theme: progress, social, automation.' },
          {
            type: 'gridDecisions',
            decisions: [
              { ic: '01', t: 'If we add visual progress indicators', d: 'Users will top up more frequently — because seeing progress triggers completion bias.' },
              { ic: '02', t: 'If we add push notifications tied to milestones', d: 'Users will return regularly — because timely reminders reduce the gap between intention and action.' },
              { ic: '03', t: 'If we enable shared savings jars', d: 'More users will start saving — because social accountability is a stronger motivator.' },
              { ic: '04', t: 'If we add automatic top-ups', d: 'Users will accumulate consistently — because automation removes decision fatigue.' },
            ]
          }
        ]
      },
      {
        num: '05',
        title: 'Interview Synthesis',
        heading: 'Grouping what users **actually told us**',
        blocks: [
          { type: 'p', content: 'After interviews we synthesised findings using affinity mapping. **Users had more than one goal simultaneously**, but their tools forced them to track everything in one account.' },
          { type: 'image', src: '/images/safe/04-Interview-question-grouping-—-affinity-m.png', alt: 'Affinity mapping', caption: '80+ interview questions grouped into thematic clusters.' },
          { type: 'quote', text: '"I have one account for savings but I\'m actually saving for a car, a vacation, and my kid\'s education at the same time."', author: 'UkrSibBank client interview' }
        ]
      },
      {
        num: '06',
        title: 'Final Design',
        heading: 'Screens that make saving **feel personal**',
        blocks: [
          { type: 'p', content: 'The design covers the empty state, the active state, and the goal-creation flow. Each had to feel cohesive but serve a different emotional need.' },
          { type: 'image', src: '/images/safe/05-Safe-—-savings-screens.png', alt: 'Savings screens', caption: 'Active state with deposits and jars in UAH/USD/EUR.' },
          { type: 'image', src: '/images/safe/06-Safe-—-dreams-savings-detail.png', alt: 'Detail', caption: 'Dreams account detail — hero image personalisation and progress tracking.' }
        ]
      },
      {
        num: '07',
        title: 'Key Features',
        heading: 'What we built and **why each decision was made**',
        blocks: [
          {
            type: 'gridDecisions',
            decisions: [
              { wide: true, ic: '🏺', t: 'Named goal jars', d: 'Users create a jar with custom name and photo. The naming turns a financial account into a personal commitment. Engagement was significantly higher.' },
              { ic: '📊', t: 'Visual progress', d: 'Progress bar with percentage. Tested against number-only — progress bar had higher return visits. Seeing 73% makes you want 100%.' },
              { ic: '🔄', t: 'Automatic top-ups', d: 'Flexible scheduling. Simplified to three options after research showed too much choice led to lower adoption.' },
              { ic: '👥', t: 'Shared jars', d: 'Multiple users can contribute. A highly-requested feature for travel funds or family goals.' },
              { ic: '💰', t: 'Interest', d: 'Jars earn interest — removing the psychological cost of "locking" money away.' },
            ]
          }
        ]
      },
      {
        num: '08',
        title: 'Impact & Reflection',
        heading: 'What the feature achieved **and what it taught us**',
        blocks: [
          { type: 'p', content: 'Metrics below are projected based on A/B testing and KPI targets. The feature is in final development.' },
          {
            type: 'metrics',
            items: [
              { n: '+38', su: '%', d: 'Increase in deposits from users who create at least one named goal jar' },
              { n: '+22', su: '%', d: 'Retention improvement — active goals bring users back to the app' },
              { n: '3x', d: 'More likely to maintain habit — users who set specific amount and deadline' },
              { n: '−40', su: '%', d: 'Drop in abandonment rate after adding progress visualisation' },
              { n: '7', d: 'Design sprints conducted before a single production screen was approved' },
              { n: '2M', su: '+', d: 'Potential users who can access the feature on launch' },
            ]
          }
        ]
      }
    ]
  },

  // ── CryptoSwift ─────────────────────────────────────────────────────────────
  {
    slug: 'cryptoswift',
    title: 'CryptoSwift',
    subtitle: 'Crypto Payment Platform for Merchants',
    description: 'CryptoSwift — Crypto Payment Platform for Merchants. Full redesign across desktop, tablet and mobile.',
    tags: ['UX/UI Designer', 'Web3', 'B2B', 'Payments', 'Freelance'],
    accentTag: 'UX/UI Designer',
    accent: '#4A9EE0',
    cover: '/images/cryptoswift/01-CryptoSwift-—-New-Sale-screen.png',
    infoGrid: [
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Timeline', value: '2023' },
      { label: 'Platform', value: 'Web · Desktop · Mobile' },
      { label: 'Company', value: 'BARVA.TECH' },
    ],
    sections: [
      {
        num: '01',
        title: 'Overview',
        heading: 'Accepting crypto should be as simple **as accepting a card payment**',
        blocks: [
          { type: 'p', content: 'CryptoSwift is a B2B platform that allows merchants to accept cryptocurrency payments in person and via invoice — with automatic conversion to fiat, real-time exchange rates, and full transaction history. **It was built by engineers for engineers.** Merchants without blockchain knowledge were lost within minutes of signing up.' },
          { type: 'p', content: 'The brief was broad: redesign the entire platform, expand the feature set, and make it work seamlessly across desktop, tablet, and mobile. Crypto payments are genuinely complex and **none of that complexity could be designed away. It had to be designed through.**' },
          {
            type: 'insight',
            title: 'The core design tension',
            content: '*Crypto payments are more complex than card payments — but merchants don\'t want to think about that complexity. Every design decision was filtered through one question: does this make the merchant feel more or less in control?*'
          },
          {
            type: 'metrics',
            items: [
              { n: '5', d: 'Device breakpoints designed — desktop, two tablet sizes, and two mobile variations — with unique optimised layouts' },
              { n: '3', d: 'Core flows redesigned from scratch — New Sale, Invoice, and Transaction History — with scenarios mapped' },
              { n: '−40', su: '%', d: 'Projected reduction in merchant support requests after simplifying the currency conversion and invoicing flows' }
            ]
          }
        ]
      },
      {
        num: '02',
        title: 'Problems',
        heading: 'Five problems that made **the platform hard to use**',
        blocks: [
          { type: 'p', content: 'Before designing anything, we mapped the existing platform\'s failures through merchant interviews and a thorough audit. **The platform had been built feature-first and UX-last.**' },
          {
            type: 'gridDecisions',
            decisions: [
              { wide: true, ic: '🧩', t: 'Complex onboarding with no guidance', d: 'New merchants were dropped into a dashboard with no onboarding flow. Most couldn\'t complete their first transaction without calling support.' },
              { ic: '📉', t: 'Price volatility with no transparency', d: 'The existing interface showed a crypto amount with no real-time fiat equivalent and no exchange rate display.' },
              { ic: '🖥️', t: 'No responsive design', d: 'The platform was desktop-only in practice. On a tablet or phone, the interface broke completely.' },
              { ic: '📊', t: 'Inconsistent UI across all screens', d: 'Built iteratively by multiple engineers without a design system. Inconsistency created high cognitive load.' },
              { ic: '📄', t: 'No invoice issuance or analytics', d: 'Merchants couldn\'t send payment requests or understand their revenue trends and conversion rates.' }
            ]
          }
        ]
      },
      {
        num: '03',
        title: 'Research & Strategy',
        heading: 'Understanding the merchant **before designing for them**',
        blocks: [
          { type: 'p', content: 'Findings showed: **merchants didn\'t care about blockchain. They cared about getting paid and having a paper trail.**' },
          {
            type: 'insight',
            title: 'The interview finding that shaped everything',
            content: '*"I had no idea if it worked. The screen said something... I had to pretend I knew what was happening." That story became our design north star.*'
          },
          { type: 'quote', text: 'I had no idea if it worked. The screen said something. I didn\'t know if I should wait or do something else.', author: 'Art dealer merchant interview, 2023' }
        ]
      },
      {
        num: '04',
        title: 'Design Process',
        heading: 'From audit to production **in structured stages**',
        blocks: [
          {
            type: 'steps',
            items: [
              { n: '01', t: 'Platform Audit & Merchant Interviews', d: 'Full audit catalogued **over 60 UI inconsistencies**. Parallel interviews helped us understand real pain points.', i: 'The inconsistency was not just visual — it was structural.' },
              { n: '02', t: 'Competitive Analysis', d: 'Analysed BitPay, CoinGate, Coinbase Commerce. Key finding: all failed at the human interface layer.', i: '' },
              { n: '03', t: 'Design System from Scratch', d: 'Built a complete system — tokens, typography, component library. **Clean visual language**: white and navy accents.', i: 'Merchants are running businesses, not trading crypto.' },
              { n: '04', t: 'Core Flow Redesign', d: 'Redesigned New Sale as the primary action. Added real-time fiat equivalent as a persistent element.', i: '' },
              { n: '05', t: 'Responsive Design', d: 'Designed adaptive layouts for 5 breakpoints. Tablet layout was optimised for point-of-sale context.', i: '' },
              { n: '06', t: 'Usability Testing', d: 'Tested blockchain details vs merchant-relevant outcomes. **Simplified version had dramatically better comprehension.**', i: 'Showing less can create more trust if it is the right info.' }
            ]
          }
        ]
      },
      {
        num: '05',
        title: 'Final Design',
        heading: 'Screens that work at the **point of sale**',
        blocks: [
          { type: 'p', content: 'The final design of CryptoSwift is built around one primary action: making a sale. Everything else is secondary. **Every screen needed to be readable at a glance.**' },
          {
            type: 'gridImages',
            images: [
              { src: '/images/cryptoswift/02-New-Sale-—-dark-nav-variant.png', alt: 'New Sale', caption: 'New Sale — dark navigation variant. Merchants preferred it for clearer separation.' },
              { src: '/images/cryptoswift/03-New-Sale-—-light-nav-variant.png', alt: 'Light Nav', caption: 'New Sale — light variant tested in A/B. Same architecture, lighter treatment.' }
            ]
          },
          { type: 'image', src: '/images/cryptoswift/04-Sale-Detail-—-completed-transaction.png', alt: 'Sale Detail', caption: 'Sale Detail — fiat amount (£300,000.00) and crypto amount (16.88 BTC) displayed side by side.' }
        ]
      },
      {
        num: '06',
        title: 'Key Solutions',
        heading: 'What we built and **why each decision was made**',
        blocks: [
          {
            type: 'gridDecisions',
            decisions: [
              { wide: true, ic: '⚡', t: 'Real-time fiat equivalent', d: 'Merchants always see exactly what they\'re getting in their currency. The fiat amount is primary, crypto is secondary.' },
              { ic: '📋', t: 'Dual-mode sale flow', d: 'In-person sale and Send an invoice handled in the same screen with a simple toggle. No page switches needed.' },
              { ic: '📸', t: 'Photo attachment', d: 'Merchants can attach proof of service. Useful for high-value transactions like art or luxury goods.' },
              { ic: '📱', t: '5-breakpoint responsive system', d: 'Optimised for desktop, tablet (landscape/portrait) and mobile. Not just scaled down, but context-aware.' },
              { ic: '✅', t: 'Status-first transaction design', d: '"Completed" in green is the most prominent element. Merchants shouldn\'t have to read to know it worked.' }
            ]
          }
        ]
      },
      {
        num: '07',
        title: 'Impact & Reflection',
        heading: 'What changed and **what we learned**',
        blocks: [
          { type: 'p', content: 'The redesigned platform is live. Decisions were validated by a measurable reduction in merchant support requests following launch.' },
          {
            type: 'insight',
            title: 'What I\'d do differently',
            content: '*We underinvested in the analytics dashboard. Merchants wanted deeper insights — conversion rates by crypto type and peak sale periods.*'
          },
          {
            type: 'metrics',
            items: [
              { n: '−40', su: '%', d: 'Reduction in merchant support requests related to currency conversions' },
              { n: '5', d: 'Device breakpoints — each with a purpose-designed layout' },
              { n: '+28', su: '%', d: 'Merchant onboarding completion rate after simplifying the sale flow' },
              { n: '60', su: '+', d: 'UI inconsistencies resolved through the new design system' },
              { n: '2', d: 'New features shipped — invoice issuance and advanced analytics' },
              { n: '✦', d: 'Platform live in production — processing real high-value transactions' }
            ]
          }
        ]
      }
    ]
  },

  // ── XGo Wallet ───────────────────────────────────────────────────────────────
  {
    slug: 'xgo',
    title: 'XGo Wallet — Crypto & Fiat',
    subtitle: 'designed for humans',
    description: 'A crypto wallet built from absolute zero — branding, research, full UX/UI. Designed for people who aren\'t crypto people. 5K+ downloads after launch.',
    tags: ['Product Designer', 'Web3', 'iOS & Android', 'Branding', 'Freelance'],
    accent: '#D4A843',
    accentTag: 'Product Designer',
    cover: '/images/xgo/00-XGo-Wallet-Mobile-App.png',
    infoGrid: [
      { label: 'Role', value: 'Product Designer' },
      { label: 'Timeline', value: '2021–2022' },
      { label: 'Platform', value: 'iOS · Android · Web' },
      { label: 'Type', value: '0→1 Startup' },
    ],
    sections: [
      {
        num: '01',
        title: 'Overview',
        heading: 'A crypto wallet built for people **who aren\'t crypto people**',
        blocks: [
          { type: 'p', content: 'XGo Wallet is a mobile-first crypto and fiat wallet — built from absolute zero. No existing design, no existing brand, no existing user research. The gap: a wallet that felt as intuitive as Revolut but worked natively in Web3. **MetaMask is powerful but technical. Trust Wallet is functional but dense. Coinbase Wallet has brand recognition but a cluttered interface.**' },
          { type: 'p', content: 'The most important design question: how do you make a crypto wallet feel as natural as a bank app, without hiding what makes crypto different? The answer required a complete rethink of how wallets present information — starting not from the blockchain, but from the user.' },
          { type: 'insight', title: 'The most distinctive feature', content: '*The wallet-first card design — pink to gold gradient with the XGo wordmark — was the centrepiece of the identity. It became the most shared visual element post-launch. **When users see the card, they think "I want that" before they think "how does blockchain work."** That distinction was intentional.*' },
          {
            type: 'metrics',
            items: [
              { n: '5K', su: '+', d: 'App downloads after launch on App Store and Google Play — organic growth through Wallet.ID virality' },
              { n: '231', su: '+', d: 'Crypto assets supported in the market view — with real-time price tracking and yield indicators' },
              { n: '100', su: '+', d: 'Wallets, apps and browsers integrated through the Wallet.ID ecosystem — Coinbase, MetaMask, OpenSea' },
            ]
          }
        ]
      },
      {
        num: '02',
        title: 'Why Existing Wallets Weren\'t Working',
        heading: 'Why existing wallets **weren\'t working**',
        blocks: [
          { type: 'p', content: 'Crypto wallet UX has a well-documented problem: it was designed by people who understand blockchain for people who understand blockchain. **We audited the five most-used wallets in 2021 and found the same failures repeated across all of them.**' },
          {
            type: 'splitText',
            leftTitle: 'What existing wallets got wrong',
            leftContent: 'Exposed private keys without explanation. No fiat equivalent displayed by default. No onboarding — just a dashboard. **Using them felt like reading a spreadsheet.**',
            rightTitle: 'XGo\'s design mandate',
            rightContent: '**Human-first wallet design.** Fiat values always visible. Security education baked into onboarding. A unique Wallet ID instead of a cryptographic address.'
          },
          { type: 'quote', text: '"I downloaded three crypto wallets and gave up on all of them. They all look like they were designed for people who already know what they\'re doing."', author: 'User interview, XGo Wallet discovery research, 2021' }
        ]
      },
      {
        num: '03',
        title: 'Research & Foundation',
        heading: 'Understanding the user before **building the product**',
        blocks: [
          { type: 'p', content: 'Because we were building from zero, research had to answer two questions simultaneously: what do crypto-native users need that existing wallets don\'t provide, and what would it take to bring non-crypto users into the space?' },
          { type: 'image', src: '/images/xgo/01-XGo-Information-Model.png', alt: 'XGo Information Model', caption: 'Information model — entity relationships across the XGo ecosystem.' },
          { type: 'card', title: 'The information architecture insight', content: 'One of the first things we did was build a full information model before drawing a single screen. **Most wallet UX problems come from unclear information hierarchy, not bad visual design.**' }
        ]
      },
      {
        num: '04',
        title: 'Branding & Identity',
        heading: 'Building a brand that people **actually want to be part of**',
        blocks: [
          { type: 'p', content: 'Most crypto wallets have logos and colour schemes. They don\'t have brands. **XGo needed a brand strong enough that users would feel proud to say "I use XGo" the same way they\'d say "I use Revolut."**' },
          { type: 'image', src: '/images/xgo/02-XGo-Virtual-Card.png', alt: 'XGo Virtual Card', caption: 'XGo Virtual Card — pink-to-gold gradient with Apple Pay and Google Pay integration.' },
          { type: 'image', src: '/images/xgo/03-Wallet.ID-website.png', alt: 'Wallet.ID website', caption: 'Wallet.ID landing page — Interactive network graph showing xgo.id usernames.' }
        ]
      },
      {
        num: '05',
        title: 'Design Process — 0 to Launch',
        heading: '0 to launch in structured stages — **every decision documented**',
        blocks: [
          {
            type: 'steps',
            items: [
              { n: '01', t: 'Market Research & Web3 Landscape Analysis', d: 'Full audit of MetaMask, Trust Wallet, Rainbow, Coinbase Wallet, and Phantom.', i: 'The most technically capable wallets had the worst onboarding.' },
              { n: '02', t: 'User Interviews & Persona Development', d: 'Interviewed users across three profiles: the Crypto Native, the Curious Newcomer, and the Fiat-First User.', i: 'The Curious Newcomer would use XGo only if the UX removed their anxiety entirely.' },
              { n: '03', t: 'Information Architecture & Wallet ID Concept', d: 'Defined the core IA. Developed the Wallet ID concept — replacing 0x-style addresses with human-readable identifiers.', i: 'Every single non-crypto user cited the same fear: "What if I type the wrong address?"' },
              { n: '04', t: 'Design System & Brand Identity', d: 'Built a complete design system covering colour tokens, typography, and component library.', i: '' },
              { n: '05', t: 'A/B Testing & Onboarding Optimisation', d: 'Tested two onboarding approaches. The feature-first flow had 34% higher completion rates.', i: 'Show the card first. Then the seed phrase.' },
              { n: '06', t: 'Launch & Growth Design', d: 'Designed the full App Store presence — screenshots, preview video frame.', i: '' }
            ]
          }
        ]
      },
      {
        num: '06',
        title: 'Final Design',
        heading: 'Every screen designed for **the user who almost gave up on crypto**',
        blocks: [
          { type: 'p', content: 'The final product is a dark-first, clean interface — premium without being intimidating. **Complexity is earned by scrolling, not imposed at arrival.**' },
          { type: 'image', src: '/images/xgo/04-XGo-App-—-three-key-screens.png', alt: 'XGo App', caption: 'Wallet dashboard, Market view, and Grow screen.' },
          { type: 'image', src: '/images/xgo/05-XGo-Wallet-ID-Ecosystem.png', alt: 'Ecosystem', caption: 'Wallet.ID Ecosystem — integrates with 100+ wallets.' },
          { type: 'image', src: '/images/xgo/06-Wallet.ID-—-Your-ID-Your-Wallet.png', alt: 'Wallet.ID', caption: '"Your ID, Your Wallet, Your Way" — landing hero.' }
        ]
      },
      {
        num: '07',
        title: 'Impact & Reflection',
        heading: 'What we shipped and **what building from zero taught us**',
        blocks: [
          {
            type: 'p',
            content: 'XGo Wallet reached 5K+ downloads in its first period — without paid campaigns. Growth came from the Wallet.ID virality mechanic.'
          },
          {
            type: 'insight',
            title: 'The thing I\'d do differently',
            content: '*We underinvested in the post-onboarding experience. We designed the onboarding well, but the moment users finished setup, the product became relatively passive.*'
          },
          {
            type: 'metrics',
            items: [
              {
                n: '5K',
                su: '+',
                d: 'App downloads after launch — organic growth driven by the Wallet.ID virality mechanic'
              },
              {
                n: '+34',
                su: '%',
                d: 'Onboarding completion rate improvement — feature-first flow vs security-first flow in A/B test'
              },
              {
                n: '100',
                su: '+',
                d: 'Wallets, apps and browsers in the Wallet.ID ecosystem — deep Web3 integration'
              },
              {
                n: '231',
                su: '+',
                d: 'Crypto assets supported — with real-time market data, yield indicators and filter/sort'
              },
              {
                n: '15',
                su: '+',
                d: 'Marketing banner formats designed — full acquisition ecosystem from landing to paid ads'
              },
              {
                n: '0→1',
                d: 'Built entirely from scratch — brand, IA, design system, app, landing page. Every decision made from first principles.'
              },
            ]
          }
        ]
      }
    ]
  },

  // ── P3 Marine ──────────────────────────────────────────────────────────────
  {
    slug: 'p3marine',
    title: 'P3 Marine',
    subtitle: 'Yacht Management Platform from Scratch',
    description: 'A financial and operational management platform for the marine industry — 300+ screens, 5 user roles, multi-currency, built from zero.',
    tags: ['UX/UI Designer', 'SaaS', 'CRM', 'MVP', 'BARVA.TECH'],
    accentTag: 'UX/UI Designer',
    accent: '#8B9BB4',
    cover: '/images/p3marine/00-P3-Marine-—-Key-Benefits.png',
    infoGrid: [
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Timeline', value: '2023–2024' },
      { label: 'Screens', value: '300+' },
      { label: 'Company', value: 'BARVA.TECH' },
    ],
    sections: [
      {
        num: '01',
        title: 'Overview',
        heading: 'The yachting industry runs on **spreadsheets and WhatsApp groups**',
        blocks: [
          { type: 'p', content: 'Managing a superyacht involves coordinating across owners, charter companies, family offices, captains, crew, and accountants simultaneously. **The existing tools for this were cobbled together from generic software not built for the context.**' },
          { type: 'p', content: 'P3 Marine is a financial and operational management platform for the marine industry. We built it from zero: research, IA, design system, and 300+ screens. **We built it from the ground up.**' },
          {
            type: 'insight',
            title: 'Why this was genuinely hard',
            content: '*Most B2B SaaS products have two or three user types. P3 Marine had five — with genuinely different mental models and data access requirements. Designing for an Owner and a Crew member is not just a permission problem. It\'s an information architecture problem.*'
          },
          {
            type: 'metrics',
            items: [
              { n: '300', su: '+', d: 'Screens designed across all platforms — desktop, tablet, and mobile resolutions' },
              { n: '5', d: 'Distinct user roles — Owner, Manager, Accountant, Captain, Crew — with purpose-built interfaces' },
              { n: '20', su: '+', d: 'Team members collaborated across the project — developers, PMs, and QA' },
            ]
          }
        ]
      },
      {
        num: '02',
        title: 'The Problem Space',
        heading: 'What yacht management actually **looks like without a platform**',
        blocks: [
          { type: 'p', content: 'Before designing P3 Marine, we understood how yacht management companies actually operated: **most used a combination of Excel, PDF documents, WhatsApp groups, and phone calls.**' },
          { type: 'p', content: 'Financial reporting had to satisfy multiple stakeholders with different levels of authority. Crew needed mobile access in environments with unreliable connectivity. **Every one of these constraints shaped a design decision.**' },
          { type: 'image', src: '/images/p3marine/01-P3-Marine-—-How-it-works.png', alt: 'How it works', caption: 'P3 Marine platform overview — Expense Management, Invoicing, Analytics, and Card Management.' },
          { type: 'quote', text: 'We manage seven yachts... every one of them uses a different spreadsheet. When a client asks for a summary, it takes us two days to compile.', author: 'Yacht management company interview' }
        ]
      },
      {
        num: '03',
        title: 'User Roles',
        heading: 'The most complex design problem **wasn\'t the interface — it was the roles**',
        blocks: [
          { type: 'p', content: 'Defining the five user roles was the foundational design work. **We spent significant time on role profiling before touching any interface design.**' },
          {
            type: 'gridDecisions',
            decisions: [
              { ic: '⚓', t: 'Owner / Family Office', d: 'High-level financial visibility. Approves major expenditures. Needs trustworthy summaries, not operational detail.' },
              { ic: '🏢', t: 'Management Company', d: 'Full operational access. Manages crew, finances, and charters. The primary power user of the platform.' },
              { ic: '📊', t: 'Accountant', d: 'Financial data access only. Transaction logs and categories. Needs dense, exportable data tables.' },
              { ic: '⛵', t: 'Captain', d: 'Operational access for their yacht. Manages crew and logs expenses. Primarily uses the platform from the yacht.' },
              { ic: '👤', t: 'Crew Member', d: 'Limited access. Views schedules and logs personal expenses on their prepaid card. Simplest interface.' },
              { ic: '🤝', t: 'Charter Client', d: 'Temporary access. Views booking details and costs. Read-only, designed for occasional use.' }
            ]
          },
          { type: 'card', title: 'The architecture insight', content: 'The Owner and the Crew Member don\'t just need different levels of access — they need entirely different information hierarchies. An Owner wants totals and approvals; a Crew member wants today\'s schedule and their card balance.' },
          { type: 'image', src: '/images/p3marine/02-Role-prioritisation-and-feature-mapping.png', alt: 'Role prioritisation', caption: 'Role-based feature prioritisation — value/effort analysis per role.' }
        ]
      },
      {
        num: '04',
        title: 'Research & IA',
        heading: 'Mapping a complex domain **before designing it**',
        blocks: [
          { type: 'p', content: 'P3 Marine operates in a genuinely complex domain. **You cannot design the information architecture of a financial platform by intuition.** We built a full entity model before touching UI.' },
          { type: 'image', src: '/images/p3marine/03-P3-Marine-system-map-—-Mria-CRM.png', alt: 'System map', caption: 'System architecture map — from communication channels to core CRM modules.' },
          { type: 'card', title: 'From entity model to screens', content: 'We spent two weeks building the entity model. Is a "Charter" the same as a "Client"? Answering these in a diagram is much cheaper than in a shipped interface.' },
          {
            type: 'gridImages',
            images: [
              { src: '/images/p3marine/04-CRM-entity-model.png', alt: 'Entity model', caption: 'CRM entity model mapping mandatory fields and relationships.' },
              { src: '/images/p3marine/05-Feature-mapping-board.png', alt: 'Feature mapping', caption: 'MVP feature prioritisation board mapped by impact and effort.' }
            ]
          }
        ]
      },
      {
        num: '05',
        title: 'Design Process',
        heading: 'From entity model to **300+ screens in production**',
        blocks: [
          {
            type: 'steps',
            items: [
              { n: '01', t: 'User Role Profiling', d: 'Defined five primary user types. Owners wanted summary-level data with drill-down on demand — not detailed transaction logs by default.', i: 'This simplified the owner dashboard design significantly.' },
              { n: '02', t: 'Competitive Analysis', d: 'Audited Yachtspot, Dockmaster, and Siren. Existing tools were built by maritime professionals, assuming too much domain expertise.', i: '' },
              { n: '03', t: 'Design System', d: 'Built the system before any screens. Navy and white visual language. **Users managing $50M yachts expect premium software.**', i: 'Typographic decision: used a 16px base size for legibility in bright sunlight.' },
              { n: '04', t: 'Screen Design', d: 'Designed every screen across 5 breakpoints. Mobile was critical for Captain and Crew — designed for one-hand use.', i: '' },
              { n: '05', t: 'Iterative Testing', d: 'Redesigned validation and error messaging three times. Failure states were designed to maintain the premium feel.', i: '' }
            ]
          }
        ]
      },
      {
        num: '06',
        title: 'Final Design',
        heading: 'A platform that feels as premium **as the assets it manages**',
        blocks: [
          { type: 'p', content: 'The visual language was a deliberate decision. **The people using this platform manage assets worth millions.** The interface needed to feel trustworthy and precise.' },
          { type: 'image', src: '/images/p3marine/06-P3-Marine-—-Clients-list.png', alt: 'Clients list', caption: 'Management view clients list with multi-state status indicators.' },
          { type: 'image', src: '/images/p3marine/07-P3-Marine-—-All-screens-Figma.png', alt: 'All screens', caption: 'Figma overview — showing the breadcrumb system and document management.' },
          { type: 'image', src: '/images/p3marine/08-P3-Marine-—-Card-details.png', alt: 'Card details', caption: 'Prepaid card management for crew members with expense breakdown.' },
          { type: 'image', src: '/images/p3marine/09-P3-Marine-—-Mobile-views.png', alt: 'Mobile views', caption: 'Mobile views showing asset details and user approval lists.' },
          { type: 'image', src: '/images/p3marine/10-Error-states-—-500-404-403.png', alt: 'Error states', caption: 'Premium error states maintaining the product tone.' }
        ]
      },
      {
        num: '07',
        title: 'Key Design Decisions',
        heading: 'What we built and **the thinking behind each decision**',
        blocks: [
          {
            type: 'gridDecisions',
            decisions: [
              { wide: true, ic: '🏗️', t: 'Separate dashboards per role', d: 'Rather than data hidden by permissions, we designed genuinely separate experiences. This eliminated greyed-out features and disorientation.' },
              { ic: '💳', t: 'Prepaid card management', d: 'Managers issue, block, and top-up crew cards from the platform. Replaced the old cash envelope system.' },
              { ic: '📊', t: 'Real-time financial analytics', d: 'Transaction logs, FX tracking, and revenue analytics in one dashboard with export to PDF and CSV.' },
              { ic: '⚡', t: 'Offline with automatic sync', d: 'Designed for maritime environments with unreliable connectivity. Actions queue for sync automatically.' },
              { ic: '🔒', t: 'Approval flows', d: 'Large expenditures require approval from the appropriate level (Owner/Family Office).' },
              { ic: '🌍', t: 'Multi-currency IBANs', d: 'Virtual IBANs supporting USD, EUR, GBP with real-time rate logging.' }
            ]
          }
        ]
      },
      {
        num: '08',
        title: 'Impact & Reflection',
        heading: 'What we delivered and **what building this taught us**',
        blocks: [
          {
            type: 'p',
            content: 'P3 Marine launched and is actively used by yacht management companies to manage their client portfolios, replacing the spreadsheet-and-WhatsApp model.'
          },
          {
            type: 'insight',
            title: 'What I\'d do differently',
            content: '*We underinvested in the Owner view. A summary visualisation layer — "here\'s what your yacht cost you simply" — would have made the platform even more valuable for the highest-authority users.*'
          },
          {
            type: 'metrics',
            items: [
              { n: '300', su: '+', d: 'Screens designed across all platforms — desktop, tablet, and mobile' },
              { n: '5', d: 'Distinct role-based interfaces with separate information architectures' },
              { n: '20', su: '+', d: 'Team members across the project — developers, PMs, and engineers' },
              { n: '✦', d: 'Platform live at p3marine.com — actively used across Europe' },
              { n: '−2', su: ' days', d: 'Reduction in financial reporting time via real-time dashboard access' },
              { n: '0→1', d: 'Built entirely from scratch — research, IA, system, and handoff.' }
            ]
          }
        ]
      }
    ]
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug)
}

export function generateCaseSlugs() {
  return cases.map((c) => ({ slug: c.slug }))
}
