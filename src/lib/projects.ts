import type { Project, CaseStudy } from './types'

// ─── Home page project list ───────────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug:    'ukrsibbank',
    num:     '01',
    tags:    ['Fintech', 'B2B', 'CRM'],
    title:   'UkrSibBank — Omnichannel CRM',
    subtitle:'Unified interface for 3,000+ bank employees',
    desc:    'Consolidated all communication channels, reduced response times and manual workload. Design system covering 5+ digital platforms.',
    company: 'BNP Paribas Group',
    period:  '2024–2026',
    accent:  '#6B8CBA',
    hasCase: true,
  },
  {
    slug:    'p3-wealth',
    num:     '02',
    tags:    ['Fintech', 'Investments', 'BlackRock'],
    title:   'P3 Wealth × BlackRock — Capital Management',
    subtitle:'Role-based platform for professional investors',
    desc:    'Structured onboarding, transparent reporting, seamless integrations with financial institutions.',
    company: 'BARVA.TECH',
    period:  '2023–2024',
    accent:  '#A89060',
    hasCase: true,
  },
  {
    slug:    'ifreq',
    num:     '03',
    tags:    ['Sports Tech', 'Mobile', 'Lead Designer'],
    title:   'IFREQ — Football Scouting Platform',
    subtitle:'Led design for app, scouting CRM and website',
    desc:    '+32% user activation, −27% churn, +35% scout productivity. AI-powered workflows cut reporting time by 50%.',
    company: 'IFREQ, Brussels',
    period:  '2025–2026',
    accent:  '#C8F135',
    hasCase: true,
  },
  {
    slug:    'safe',
    num:     '04',
    tags:    ['Banking', 'Mobile', 'Feature'],
    title:   'Safe — Goal-Based Savings',
    subtitle:'Named savings jars tied to personal goals inside Ukrsib Online',
    desc:    '7 research sprints, A/B testing, competitor analysis. Projected +38% savings deposits, 3× habit improvement.',
    company: 'UkrSibBank',
    period:  '2024–2026',
    accent:  '#1DB954',
    hasCase: true,
  },
  {
    slug:    'cryptoswift',
    num:     '05',
    tags:    ['Web3', 'B2B', 'Payments'],
    title:   'CryptoSwift — Merchant Payment Platform',
    subtitle:'Full redesign across desktop, tablet and mobile',
    desc:    'Real-time fiat equivalent, invoice issuance, 5 responsive breakpoints. −40% support requests after launch.',
    company: 'BARVA.TECH',
    period:  '2023',
    accent:  '#4A9EE0',
    hasCase: true,
  },
  {
    slug:    'xgo',
    num:     '06',
    tags:    ['Web3', 'iOS & Android', '0→1'],
    title:   'XGo Wallet — Crypto & Fiat Mobile Wallet',
    subtitle:'Built from zero — branding, research, full UX/UI',
    desc:    'Launch on App Store & Google Play. 5K+ downloads. Wallet.ID viral mechanic drove organic growth.',
    company: 'Freelance',
    period:  '2021–2022',
    accent:  '#D4A843',
    hasCase: true,
  },
  {
    slug:    'p3marine',
    num:     '07',
    tags:    ['SaaS', 'CRM', 'MVP'],
    title:   'P3 Marine — Yacht Management Platform',
    subtitle:'Multi-role CRM for yacht owners, managers, accountants and crew',
    desc:    '300+ screens, multi-currency financial tracking, 5 adaptive breakpoints.',
    company: 'BARVA.TECH',
    period:  '2023–2024',
    accent:  '#8B9BB4',
    hasCase: true,
  },
]

// ─── Case studies ─────────────────────────────────────────────────────────────

export const cases: CaseStudy[] = [

  // ── UkrSibBank ───────────────────────────────────────────────────────────────
  {
    slug:        'ukrsibbank',
    title:       'UkrSibBank',
    subtitle:    'Omnichannel CRM',
    description: 'Unified interface for 3,000+ bank employees — consolidating all communication channels, reducing response times, and covering 5+ digital platforms with a single design system.',
    tags:        ['Fintech', 'B2B', 'CRM'],
    accentTag:   'Fintech',
    accent:      '#6B8CBA',
    cover:       '/images/misc/01-ukrsib.png',
    meta: [
      { label: 'Role',     value: 'Lead Product Designer' },
      { label: 'Timeline', value: '2024–2025' },
      { label: 'Platform', value: 'Web · Desktop · Mobile' },
      { label: 'Company',  value: 'BNP Paribas Group' },
    ],
    sections: [
      {
        num:  '01',
        title:'Overview',
        lead: 'A unified interface for 3,000+ bank employees',
        blocks: [
          { type: 'text', content: 'UkrSibBank is one of Ukraine\'s largest retail banks, operating as part of the BNP Paribas Group. The CRM project unified all internal communication channels — calls, chats, emails, tickets — into a single interface used by over 3,000 bank employees across multiple departments and digital platforms.' },
          { type: 'text', content: 'The brief: consolidate a fragmented ecosystem of internal tools into a coherent omnichannel platform. Reduce manual workload, cut response times, and create a design system that could scale across 5+ digital products consistently.' },
          { type: 'stats', items: [
            { value: '3,000+', label: 'Bank employees using the platform' },
            { value: '5+',     label: 'Digital platforms in the design system' },
            { value: '2024–25',label: 'Project timeline' },
          ]},
          { type: 'image', src: '/images/misc/01-ukrsib.png', alt: 'UkrSibBank CRM', caption: 'UkrSibBank Omnichannel CRM — Manager workspace with unified dialogues, tasks, and metrics' },
        ],
      },
      {
        num:  '02',
        title:'NDA Notice',
        lead: 'Full case available on request',
        blocks: [
          { type: 'text', content: 'This project is covered by a non-disclosure agreement with BNP Paribas Group / UkrSibBank. Detailed screens, user research, and process documentation are available during interviews or upon request with a signed NDA.' },
          { type: 'text', content: 'Key deliverables included: omnichannel dialogue management system, agent performance dashboard, design system covering web and mobile platforms, component library with 200+ components, and accessibility compliance across all touchpoints.' },
        ],
      },
    ],
  },


  {
    slug:        'cryptoswift',
    title:       'CryptoSwift',
    subtitle:    'Crypto Payment Platform for Merchants',
    description: 'Full redesign of a B2B crypto payment platform — making blockchain-backed payments feel as simple as card payments for non-technical merchants.',
    tags:        ['Web3', 'B2B', 'Payments', 'Freelance'],
    accentTag:   'Web3',
    accent:      '#4A9EE0',
    cover:       '/images/cryptoswift/00-CryptoSwift.png',
    meta: [
      { label: 'Role',     value: 'UX/UI Designer' },
      { label: 'Timeline', value: '2023' },
      { label: 'Platform', value: 'Web · Desktop · Mobile' },
      { label: 'Company',  value: 'BARVA.TECH' },
    ],
    sections: [
      {
        num:  '01',
        title:'Overview',
        lead: 'Accepting crypto should be as simple as accepting a card payment',
        blocks: [
          { type: 'text', content: 'CryptoSwift is a B2B platform that allows merchants to accept cryptocurrency payments in person and via invoice — with automatic conversion to fiat, real-time exchange rates, and full transaction history. The platform existed but the UX didn\'t really work. It was built by engineers for engineers. Merchants without blockchain knowledge were lost within minutes of signing up.' },
          { type: 'text', content: 'The brief was broad: redesign the entire platform, expand the feature set, and make it work seamlessly across desktop, tablet, and mobile. Every design decision was filtered through one question: does this make the merchant feel more or less in control?' },
          { type: 'stats', items: [
            { value: '5',    label: 'Device breakpoints designed' },
            { value: '3',    label: 'Core flows redesigned from scratch' },
            { value: '−40%', label: 'Reduction in merchant support requests' },
          ]},
        ],
      },
      {
        num:  '02',
        title:'Problems',
        lead: 'Five structural problems that made the platform hard to use',
        blocks: [
          { type: 'text', content: 'Before designing anything, we mapped the existing platform\'s failures through merchant interviews and a thorough audit. The platform had been built feature-first and UX-last.' },
          { type: 'list', items: [
            'Complex onboarding with no guidance — merchants couldn\'t complete first transactions without calling support',
            'Price volatility with no transparency — no real-time fiat equivalent during large transactions',
            'No responsive design — desktop-only interface broke completely on tablets and mobile',
            'Inconsistent UI — 60+ design inconsistencies creating cognitive load at every step',
            'No invoice issuance or analytics — merchants had no way to understand revenue trends',
          ]},
          { type: 'image', src: '/images/cryptoswift/01-CryptoSwift-—-New-Sale-screen.png', alt: 'CryptoSwift New Sale screen', caption: 'Redesigned New Sale flow — real-time fiat equivalent, clear status communication' },
        ],
      },
      {
        num:  '03',
        title:'Research & Strategy',
        lead: 'Understanding the merchant before designing for them',
        blocks: [
          { type: 'text', content: 'We interviewed merchants across different business types — art dealers, service businesses, luxury goods sellers — to understand how they thought about accepting crypto. The findings were consistent: merchants didn\'t care about blockchain. They cared about getting paid, knowing the amount, and having a paper trail.' },
          { type: 'quote', text: 'I had no idea if it worked. The screen said something. I didn\'t know if I should wait or do something else. I had to pretend I knew what was happening.', author: 'Art dealer merchant, CryptoSwift research, 2023' },
          { type: 'image', src: '/images/cryptoswift/02-New-Sale-—-dark-nav-variant.png', alt: 'New Sale dark variant', caption: 'Dark nav variant — point-of-sale context, full-screen status view' },
        ],
      },
      {
        num:  '04',
        title:'Design Process',
        lead: 'From audit to production in structured stages',
        blocks: [
          { type: 'text', content: 'The audit revealed 60+ UI inconsistencies. The first design decision: build the system before building the screens. A complete design system — colour tokens, typography, component library, responsive grid — before touching any product screens.' },
          { type: 'list', items: [
            'Platform audit & merchant interviews — 60+ inconsistencies catalogued',
            'Design system & component library — foundation for all subsequent work',
            'Core flow redesign — New Sale, Invoice, Transaction History',
            'Responsive expansion — 5 breakpoints with optimised layouts per device',
            'Developer handoff — full spec with interaction and edge case notes',
          ]},
          { type: 'image', src: '/images/cryptoswift/03-New-Sale-—-light-nav-variant.png', alt: 'New Sale light variant', caption: 'Light nav variant — e-commerce and invoice contexts' },
          { type: 'image', src: '/images/cryptoswift/04-Sale-Detail-—-completed-transaction.png', alt: 'Sale detail completed', caption: 'Transaction detail — completed state with full receipt and export options' },
        ],
      },
      {
        num:  '05',
        title:'Results',
        lead: 'Measurable outcomes after launch',
        blocks: [
          { type: 'stats', items: [
            { value: '−40%', label: 'Projected reduction in support requests' },
            { value: '5',    label: 'Device breakpoints shipped' },
            { value: '3',    label: 'Core flows fully redesigned' },
          ]},
          { type: 'text', content: 'The redesign transformed CryptoSwift from an engineering tool into a merchant product. The status communication design — real-time crypto equivalent, confirmation states, completion feedback — was driven entirely by one merchant interview about not knowing whether a payment had worked.' },
        ],
      },
    ],
  },

  // ── IFREQ ────────────────────────────────────────────────────────────────────
  {
    slug:        'ifreq',
    title:       'IFREQ',
    subtitle:    'Get Analyzed, Get Scouted',
    description: 'A football scouting platform giving every player a chance to be discovered. Led design end-to-end across mobile app, coach tools, scout CRM and marketing.',
    tags:        ['Sports Tech', 'Mobile', 'iOS & Android'],
    accentTag:   'Sports Tech',
    accent:      '#C8F135',
    cover:       '/images/ifreq/00-IFREQ.png',
    meta: [
      { label: 'Role',     value: 'Lead Product Designer' },
      { label: 'Timeline', value: '2025–2026' },
      { label: 'Platform', value: 'iOS · Android · Web' },
      { label: 'Company',  value: 'IFREQ, Belgium' },
    ],
    sections: [
      {
        num:  '01',
        title:'Overview',
        lead: 'Talent is everywhere. Opportunity isn\'t.',
        blocks: [
          { type: 'text', content: 'Every year thousands of talented footballers go unnoticed — not because they lack skill, but because no one with the right connections is watching. IFREQ was built to change the odds. The platform gives players a standardised evaluation, assigned a card with a global ranking. Professional clubs access a live database of rated players.' },
          { type: 'image', src: '/images/ifreq/01-IFREQ-—-Turn-Data-Into-Progress.png', alt: 'IFREQ overview screens', caption: 'Turn Data Into Progress — the IFREQ player journey' },
          { type: 'stats', items: [
            { value: '50+',  label: 'Players on pro trials at PSG, Bayern, FC Porto' },
            { value: '+32%', label: 'User activation after onboarding redesign' },
            { value: '−27%', label: 'Churn reduction through improved journey' },
          ]},
        ],
      },
      {
        num:  '02',
        title:'App Store Marketing',
        lead: 'Designed for App Store & Google Play',
        blocks: [
          { type: 'text', content: 'Created the full set of App Store screenshots communicating core product value — from player testing and card creation to pro club discovery.' },
          { type: 'image', src: '/images/ifreq/02-App-Store-Screenshots.png', alt: 'App Store screenshots', caption: 'App Store screenshot set — player card, test event, scout discovery' },
        ],
      },
      {
        num:  '03',
        title:'Research',
        lead: 'Three users, three completely different worlds',
        blocks: [
          { type: 'text', content: 'A player uses the app standing on a pitch after a test session, adrenaline still running. A coach uses it with a group of nervous players waiting around them. A scout uses it sitting at a desk with a second monitor. These context differences dictated every design decision.' },
          { type: 'image', src: '/images/ifreq/03-Customer-Journey-Map.png', alt: 'Customer Journey Map', caption: 'Customer Journey Map — 9 stages from onboarding to payment, emotions and pains mapped' },
          { type: 'quote', text: 'I\'ve been playing for 12 years and never had anyone evaluate me properly. IFREQ gave me a number, a card, and now a trial at a real club.', author: 'Player interview, IFREQ research session, Belgium' },
          { type: 'image', src: '/images/ifreq/04-User-Flow.png', alt: 'User Flow diagram', caption: 'Complete registration and test booking flow — new users and returning players' },
        ],
      },
      {
        num:  '04',
        title:'Onboarding — The Biggest Lever',
        lead: 'A 32% activation increase from one redesign',
        blocks: [
          { type: 'text', content: 'The original onboarding had too many steps, unclear value propositions, and no social login options. Players were dropping off before they ever saw the product.' },
          { type: 'image', src: '/images/ifreq/05-Onboarding-Flow.png', alt: 'Onboarding flow', caption: 'Redesigned onboarding — social login, single-screen value prop, progressive commitment' },
          { type: 'stats', items: [
            { value: '+32%', label: 'User activation improvement' },
            { value: '−27%', label: 'Churn reduction' },
            { value: '+35%', label: 'Scout productivity increase' },
          ]},
        ],
      },
      {
        num:  '05',
        title:'Product Screens',
        lead: 'Player app, coach tools, scout CRM',
        blocks: [
          { type: 'image', src: '/images/ifreq/06-Player-Profile.png', alt: 'Player profile screen', caption: 'Player profile — performance card, global ranking, video replays' },
          { type: 'image', src: '/images/ifreq/08-Test-Booking.png', alt: 'Test booking flow', caption: 'Test event booking — redesigned payment flow with order preview' },
          { type: 'image', src: '/images/ifreq/10-Scout-Dashboard.png', alt: 'Scout dashboard', caption: 'Scout dashboard — filter by age/position/score, compare candidates, export data' },
        ],
      },
      {
        num:  '06',
        title:'Design System',
        lead: 'Token layer first, components second, screens last',
        blocks: [
          { type: 'image', src: '/images/ifreq/12-Color---Typography.png', alt: 'Color and Typography', caption: 'IFREQ colour and typography system' },
          { type: 'image', src: '/images/ifreq/11-IFREQ-Inputs---Buttons.png', alt: 'IFREQ inputs and buttons', caption: 'Component library — inputs, buttons, states' },
        ],
      },
    ],
  },

  // ── P3 Wealth ────────────────────────────────────────────────────────────────
  {
    slug:        'p3-wealth',
    title:       'P3 Wealth × BlackRock',
    subtitle:    'Capital Management Platform',
    description: 'A regulated investment platform for high-net-worth investors — designed around trust, legibility, and role-based access with BlackRock integration.',
    tags:        ['Fintech', 'Investments', 'B2B'],
    accentTag:   'Fintech',
    accent:      '#A89060',
    cover:       '/images/p3-wealth/00-P3-Wealth-—-End-to-end-platform.png',
    meta: [
      { label: 'Role',     value: 'UX/UI Designer' },
      { label: 'Timeline', value: '2023–2024' },
      { label: 'Platform', value: 'Web · Desktop' },
      { label: 'Partner',  value: 'BlackRock' },
    ],
    sections: [
      {
        num:  '01',
        title:'Overview',
        lead: 'Professional investors deserve a professional-grade experience',
        blocks: [
          { type: 'text', content: 'P3 Wealth is a regulated capital management platform for high-net-worth investors and financial institutions managing third-party funds. Fund data from BlackRock was accessible, but buried. Onboarding existed, but it was painful. The role system treated a retail investor and an institutional fund manager as if they were the same person.' },
          { type: 'image', src: '/images/p3-wealth/00-P3-Wealth-—-End-to-end-platform.png', alt: 'P3 Wealth platform overview', caption: 'End-to-end platform — from onboarding to live fund dashboard' },
          { type: 'stats', items: [
            { value: '$48M+', label: 'AUM displayed on live dashboard' },
            { value: '4',     label: 'Distinct user roles designed' },
            { value: '3',     label: 'Currency markets (EUR/GBP/USD)' },
          ]},
        ],
      },
      {
        num:  '02',
        title:'Research',
        lead: 'The user we thought we had and the user we actually had',
        blocks: [
          { type: 'text', content: 'We assumed our primary users were sophisticated, digitally-fluent investors. Research told a different story. Our actual users — while financially sophisticated — had been managing investments through relationship managers and phone calls for years.' },
          { type: 'image', src: '/images/p3-wealth/01-P3-Wealth-Personas.png', alt: 'User personas', caption: 'User personas — Emma, Ivan, Diana, Mitch — each with Story, Goals, Pains mapped' },
          { type: 'quote', text: 'I need to see exactly where my money is, what it\'s doing, and what I can do about it — without calling anyone to explain.', author: 'Ivan, Professional investor persona, BARVA.TECH research' },
        ],
      },
      {
        num:  '03',
        title:'Design System',
        lead: 'Simplon Norm + Simplon Mono — built for financial data',
        blocks: [
          { type: 'text', content: 'Built a full UI kit from scratch. Mono typefaces for numerical data improve scannability significantly in financial interfaces. Every component designed for financial context: disabled states with explanations, error states that don\'t panic users, input validation that catches mistakes before they become transactions.' },
          { type: 'image', src: '/images/p3-wealth/02-P3-Wealth-Design-System.png', alt: 'Design system', caption: 'Design system — colour tokens, typography scale, component states' },
          { type: 'text', content: 'Monospaced numbers reduced read errors in user testing — participants took 23% less time to verify specific values when numbers were in a mono typeface versus a proportional one.' },
        ],
      },
      {
        num:  '04',
        title:'Product Screens',
        lead: 'Dashboard, fund pages, and role-based access',
        blocks: [
          { type: 'image', src: '/images/p3-wealth/03-Dashboard.png', alt: 'Dashboard', caption: 'Live dashboard — "Data sourced from BlackRock" as a first-class design element' },
          { type: 'image', src: '/images/p3-wealth/04-Funds-page.png', alt: 'Funds page', caption: 'Fund detail page — AUM, yield tracking, multi-currency support' },
        ],
      },
    ],
  },

  // ── P3 Marine ────────────────────────────────────────────────────────────────
  {
    slug:        'p3marine',
    title:       'P3 Marine',
    subtitle:    'Yacht Management Platform from Scratch',
    description: 'A financial and operational management platform for the marine industry — 300+ screens, 5 user roles, multi-currency, built from zero.',
    tags:        ['SaaS', 'CRM', 'MVP'],
    accentTag:   'SaaS',
    accent:      '#8B9BB4',
    cover:       '/images/p3marine/00-P3-Marine-—-Key-Benefits.png',
    meta: [
      { label: 'Role',     value: 'UX/UI Designer' },
      { label: 'Timeline', value: '2023–2024' },
      { label: 'Screens',  value: '300+' },
      { label: 'Company',  value: 'BARVA.TECH' },
    ],
    sections: [
      {
        num:  '01',
        title:'Overview',
        lead: 'The yachting industry runs on spreadsheets and WhatsApp groups',
        blocks: [
          { type: 'text', content: 'Managing a superyacht involves coordinating across owners, charter companies, family offices, management companies, captains, crew, accountants, and lawyers — simultaneously, across time zones, in multiple currencies. P3 Marine was built to replace that chaos with a single platform.' },
          { type: 'image', src: '/images/p3marine/01-P3-Marine-—-How-it-works.png', alt: 'P3 Marine how it works', caption: 'Platform overview — management company model and direct owner model' },
          { type: 'stats', items: [
            { value: '300+', label: 'Screens across all platforms' },
            { value: '5',    label: 'Distinct user roles' },
            { value: '20+',  label: 'Team members on the project' },
          ]},
          { type: 'quote', text: 'We manage seven yachts across three ownership structures. Every one uses a different spreadsheet. When a charter client asks for a financial summary, it takes us two days to compile.', author: 'Yacht management company, P3 Marine discovery research' },
        ],
      },
      {
        num:  '02',
        title:'User Roles',
        lead: 'Five worlds, one platform',
        blocks: [
          { type: 'list', items: [
            'Owner / Family Office — high-level financial visibility, approves major expenditures',
            'Management Company — full operational access, runs the platform day-to-day',
            'Accountant — financial data only, transaction logs, dense exportable tables',
            'Captain — operational access for their yacht, mobile-first',
            'Crew Member — schedules, card balance, expense logging — simplest interface',
          ]},
          { type: 'image', src: '/images/p3marine/02-Role-prioritisation-and-feature-mapping.png', alt: 'Role prioritisation', caption: 'Role prioritisation and feature mapping — value/effort analysis per user type' },
        ],
      },
      {
        num:  '03',
        title:'Information Architecture',
        lead: 'Mapping a complex domain before designing it',
        blocks: [
          { type: 'image', src: '/images/p3marine/03-P3-Marine-system-map-—-Mria-CRM.png', alt: 'System map', caption: 'System map — full CRM entity model and data relationships' },
          { type: 'image', src: '/images/p3marine/04-CRM-entity-model.png', alt: 'CRM entity model', caption: 'CRM entity model — Owner, Charter, Vessel, Expense, Invoice relationships' },
        ],
      },
      {
        num:  '04',
        title:'Product Screens',
        lead: '300+ screens, zero design debt',
        blocks: [
          { type: 'image', src: '/images/p3marine/06-P3-Marine-—-Clients-list.png', alt: 'Clients list', caption: 'Client management — multi-role access, real-time financial status' },
          { type: 'image', src: '/images/p3marine/08-P3-Marine-—-Card-details.png', alt: 'Card details', caption: 'Card management — prepaid crew cards, transaction history, limits' },
          { type: 'image', src: '/images/p3marine/09-P3-Marine-—-Mobile-views.png', alt: 'Mobile views', caption: 'Mobile views — Captain and Crew interfaces, optimised for on-yacht use' },
          { type: 'image', src: '/images/p3marine/07-P3-Marine-—-All-screens-Figma.png', alt: 'All screens overview', caption: 'Full screen overview — 300+ screens across all roles and breakpoints' },
        ],
      },
    ],
  },

  // ── Safe ─────────────────────────────────────────────────────────────────────
  {
    slug:        'safe',
    title:       'Safe',
    subtitle:    'Goal-Based Savings inside Ukrsib Online',
    description: 'A savings feature that transforms banking deposits into personal goals — named jars, visual progress, automatic top-ups. Designed with 7 research sprints.',
    tags:        ['Banking', 'Mobile', 'Feature Design'],
    accentTag:   'Banking',
    accent:      '#1DB954',
    cover:       '/images/safe/00-Safe-—-all-screens-overview.png',
    meta: [
      { label: 'Role',     value: 'Senior Product Designer' },
      { label: 'Timeline', value: '2024–2025' },
      { label: 'Platform', value: 'iOS · Android' },
      { label: 'Company',  value: 'UkrSibBank · BNP Paribas' },
    ],
    sections: [
      {
        num:  '01',
        title:'Overview',
        lead: 'People know they should save. They just don\'t know how to start.',
        blocks: [
          { type: 'text', content: 'A deposit is a financial instrument. A jar for your vacation is a dream you\'re building towards. Safe is a goal-based savings feature inside the Ukrsib Online mobile app — named savings accounts tied to personal goals, with visual progress tracking and smart reminders.' },
          { type: 'image', src: '/images/safe/00-Safe-—-all-screens-overview.png', alt: 'Safe all screens', caption: 'Safe — full screen overview, all states and flows' },
          { type: 'stats', items: [
            { value: '2M+',  label: 'Ukrsib Online users at launch' },
            { value: '7',    label: 'Design sprints conducted' },
            { value: '+38%', label: 'Projected increase in savings deposits' },
          ]},
        ],
      },
      {
        num:  '02',
        title:'Research Process',
        lead: 'Seven stages before a single screen was drawn',
        blocks: [
          { type: 'image', src: '/images/safe/01-Research-process-board-—-Service.so-for-.png', alt: 'Research process board', caption: 'Research process board — kickoff, timeline, methods, team structure' },
          { type: 'image', src: '/images/safe/02-Competitive-analysis-—-Privatbank-Monob.png', alt: 'Competitive analysis', caption: 'Competitive analysis — Privatbank, Monobank, Monzo, Revolut, N26' },
          { type: 'image', src: '/images/safe/03-Hypotheses-from-workshops.png', alt: 'Hypotheses from workshops', caption: 'Hypotheses from prioritisation workshops — value/effort matrix' },
          { type: 'image', src: '/images/safe/04-Interview-question-grouping-—-affinity-m.png', alt: 'Affinity mapping', caption: 'Interview question grouping — 80+ questions clustered by theme' },
        ],
      },
      {
        num:  '03',
        title:'Product Screens',
        lead: 'Savings that feel personal, not financial',
        blocks: [
          { type: 'image', src: '/images/safe/05-Safe-—-savings-screens.png', alt: 'Savings screens', caption: 'Safe savings screens — goal creation, progress tracking, automatic top-ups' },
          { type: 'image', src: '/images/safe/06-Safe-—-dreams-savings-detail.png', alt: 'Dreams savings detail', caption: 'Dreams savings detail — named jar, goal amount, deadline, progress visualisation' },
          { type: 'text', content: 'A/B testing revealed users who set a specific goal amount and deadline were 3× more likely to maintain the savings habit. Naming the jar after the goal changed the psychological relationship with the money.' },
        ],
      },
    ],
  },

  // ── XGo Wallet ───────────────────────────────────────────────────────────────
  {
    slug:        'xgo',
    title:       'XGo Wallet',
    subtitle:    'Crypto & Fiat, designed for humans',
    description: 'A crypto wallet built from zero — branding, research, full UX/UI. Designed for people who aren\'t crypto people. 5K+ downloads on launch.',
    tags:        ['Web3', 'iOS & Android', '0→1'],
    accentTag:   'Web3',
    accent:      '#D4A843',
    cover:       '/images/xgo/00-XGo-Wallet-Mobile-App.png',
    meta: [
      { label: 'Role',     value: 'Product Designer' },
      { label: 'Timeline', value: '2021–2022' },
      { label: 'Platform', value: 'iOS · Android · Web' },
      { label: 'Type',     value: '0→1 Startup' },
    ],
    sections: [
      {
        num:  '01',
        title:'Overview',
        lead: 'A crypto wallet built for people who aren\'t crypto people',
        blocks: [
          { type: 'text', content: 'XGo Wallet is a mobile-first crypto and fiat wallet — built from absolute zero. No existing design, no existing brand, no existing user research. The gap was a wallet that felt as intuitive as Revolut but worked natively in Web3.' },
          { type: 'image', src: '/images/xgo/00-XGo-Wallet-Mobile-App.png', alt: 'XGo Wallet app', caption: 'XGo Wallet — key screens from the iOS and Android app' },
          { type: 'stats', items: [
            { value: '5K+',  label: 'App downloads after launch' },
            { value: '231+', label: 'Crypto assets supported' },
            { value: '100+', label: 'Wallets integrated via Wallet.ID' },
          ]},
        ],
      },
      {
        num:  '02',
        title:'Problem Space',
        lead: 'Why existing wallets weren\'t working',
        blocks: [
          { type: 'quote', text: 'I downloaded three crypto wallets and gave up on all of them. They all look like they were designed for people who already know what they\'re doing.', author: 'User interview, XGo Wallet discovery research, 2021' },
          { type: 'image', src: '/images/xgo/01-XGo-Information-Model.png', alt: 'XGo information model', caption: 'Information model — entity relationships mapped before designing any screen' },
        ],
      },
      {
        num:  '03',
        title:'Branding & Identity',
        lead: 'Building a brand people actually want to be part of',
        blocks: [
          { type: 'image', src: '/images/xgo/02-XGo-Virtual-Card.png', alt: 'XGo Virtual Card', caption: 'XGo Virtual Card — pink-to-gold gradient, the most shared visual post-launch' },
          { type: 'text', content: 'The gradient card design — pink to gold, with the XGo wordmark — was designed to feel like a premium payment card, not a crypto interface. When users see the card, they think "I want that" before they think "how does blockchain work."' },
        ],
      },
      {
        num:  '04',
        title:'Wallet.ID Ecosystem',
        lead: 'A human-readable identity for Web3',
        blocks: [
          { type: 'image', src: '/images/xgo/04-XGo-App-—-three-key-screens.png', alt: 'XGo app key screens', caption: 'Three key screens — portfolio, swap, and receive with Wallet.ID' },
          { type: 'image', src: '/images/xgo/05-XGo-Wallet-ID-Ecosystem.png', alt: 'Wallet.ID ecosystem', caption: 'Wallet.ID ecosystem — 100+ integrated wallets, apps and browsers' },
          { type: 'image', src: '/images/xgo/03-Wallet.ID-website.png', alt: 'Wallet.ID website', caption: 'Wallet.ID landing page — "An ID for everything you own, across Web2 and Web3"' },
        ],
      },
    ],
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug)
}

export function generateCaseSlugs() {
  return cases.map((c) => ({ slug: c.slug }))
}
