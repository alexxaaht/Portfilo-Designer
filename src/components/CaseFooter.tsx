'use client'

import Link from 'next/link'

interface CaseFooterProps {
  nextTitle: string
  nextSubtitle: string
  nextHref: string
}

export default function CaseFooter({ nextTitle, nextSubtitle, nextHref }: CaseFooterProps) {
  const lineStyle = 'rgba(255,255,255,0.07)'
  const dim = 'rgba(210,204,194,0.22)'
  const T = '#E5E0D8'
  const sub = 'rgba(210,204,194,0.5)'

  const btnBase: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontSize: 13,
    borderRadius: 100,
    padding: '12px 28px',
    textDecoration: 'none',
    transition: 'background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s',
    cursor: 'none',
  }

  return (
    <div style={{ borderTop: `1px solid ${lineStyle}` }}>
      <div style={{ padding: '80px 52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1160, margin: '0 auto' }}>

        {/* Next case info */}
        <div>
          <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 8 }}>
            Next case
          </div>
          <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-.02em', color: T }}>
            {nextTitle} →
          </div>
          <div style={{ fontSize: 14, color: sub, marginTop: 4 }}>
            {nextSubtitle}
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>

          {/* All cases */}
          <Link
            href="/#work"
            style={{ ...btnBase, color: dim, border: `1px solid rgba(255,255,255,0.07)` }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.color = T
              el.style.borderColor = 'rgba(255,255,255,0.22)'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.color = dim
              el.style.borderColor = 'rgba(255,255,255,0.07)'
              el.style.transform = 'translateY(0)'
            }}
          >
            ← All cases
          </Link>

          {/* View next case */}
          <Link
            href={nextHref}
            style={{ ...btnBase, color: T, border: `1px solid rgba(255,255,255,0.13)` }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.background = 'rgba(255,255,255,0.06)'
              el.style.borderColor = 'rgba(255,255,255,0.28)'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.background = 'transparent'
              el.style.borderColor = 'rgba(255,255,255,0.13)'
              el.style.transform = 'translateY(0)'
            }}
          >
            View case ↗
          </Link>

        </div>
      </div>
    </div>
  )
}