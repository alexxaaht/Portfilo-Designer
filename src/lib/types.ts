// ─── Project list (index page) ────────────────────────────────────────────────

export type Stat = {
  value: string
  label: string
}

export type Project = {
  slug:     string        // URL slug, e.g. 'cryptoswift' | null = no case page
  num:      string        // '01', '02' ...
  tags:     string[]
  title:    string
  subtitle: string
  desc:     string
  company:  string
  period:   string
  accent:   string        // hex accent color per project
  hasCase:  boolean
}

// ─── Case study ───────────────────────────────────────────────────────────────

export type MetaItem = {
  label: string
  value: string
}

export type SectionBlock =
  | { type: 'text';   content: string }
  | { type: 'quote';  text: string; author: string }
  | { type: 'stats';  items: Stat[] }
  | { type: 'list';   items: string[] }
  | { type: 'image';  src: string; alt: string; caption?: string }

export type CaseSection = {
  num:    string           // '01', '02' ...
  title:  string
  lead?:  string           // optional lead sentence above body
  blocks: SectionBlock[]
}

export type CaseStudy = {
  slug:        string
  title:       string
  subtitle:    string
  description: string
  tags:        string[]
  accentTag?:  string      // which tag gets accent color highlight
  accent:      string
  meta:        MetaItem[]
  cover:       string      // path to cover image in /public
  sections:    CaseSection[]
}
