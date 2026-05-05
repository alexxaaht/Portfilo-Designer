// ─── Project list (Index page) ────────────────────────────────────────────────

export type Project = {
  slug: string        // URL slug (например, 'ukrsibbank')
  num: string        // '01', '02' ...
  tags: string[]
  title: string
  subtitle: string
  desc: string
  company: string
  period: string
  accent: string        // Hex цвет акцента для карточки
  hasCase: boolean
}

// ─── Case Study: Blocks ───────────────────────────────────────────────────────

/**
 * Описывает все возможные типы контентных блоков внутри секции кейса.
 * Это позволяет шаблону понимать, какой компонент рендерить.
 */
// src/lib/types.ts
export type SectionBlock =
  | { type: 'p'; content: string }
  | { type: 'quote'; text: string; author: string }
  | { type: 'insight'; title: string; content: string }
  | { type: 'card'; title: string; content: string }
  | { type: 'metrics'; items: { n: string; d: string; su?: string }[] }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'gridImages'; images: { src: string; alt: string; caption: string }[] }
  | { type: 'splitText'; leftTitle: string; leftContent: string; rightTitle: string; rightContent: string }
  | { type: 'gridDecisions'; decisions: { ic: string; t: string; d: string; wide?: boolean }[] }
  | { type: 'tags'; labels: string[] }
  | { type: 'steps'; items: { n: string; t: string; d: string; i: string }[] }
  | { type: 'pricing'; plans: { badge: string; name: string; price: string; period: string; features: string[]; pro: boolean }[]};

// ─── Case Study: Structure ────────────────────────────────────────────────────

export type InfoItem = {
  label: string
  value: string
}

export type CaseSection = {
  num: string
  title: string
  heading: string
  blocks: SectionBlock[]
}

export type CaseStudy = {
  slug: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  accentTag?: string; // <-- Сделал необязательным, чтобы P3 Wealth не выдавал ошибку
  accent: string
  cover: string
  infoGrid: InfoItem[]
  sections: CaseSection[]
}