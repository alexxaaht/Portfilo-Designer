'use client'

import Link from 'next/link'

interface CaseFooterProps {
  nextTitle: string
  nextSubtitle: string
  nextHref: string
}

export default function CaseFooter({ nextTitle, nextSubtitle, nextHref }: CaseFooterProps) {
  const lineStyle = 'rgba(255,255,255,0.07)'
  const dim = 'rgba(210,204,194,0.25)' // Сделал чуть ярче для читаемости
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
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  }

  return (
    <div style={{ marginTop: 20 }}>
      <div style={{
        padding: '80px 52px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 1200,
        margin: '0 auto',
        gap: 40
      }}>

        {/* 1. Кнопка All cases (теперь слева) */}
        <Link
          href="/#work"
          style={{
            ...btnBase,
            color: T,
            border: `1px solid rgba(255,255,255,0.13)`,
            whiteSpace: 'nowrap'
          }}
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
          ↖ All cases
        </Link>

        {/* 2. Блок следующего кейса (теперь справа и полностью кликабельный) */}
        <Link
          href={nextHref}
          style={{
            flex: '0 1 340px', // Уменьшили ширину (было 600px)
            display: 'block',
            padding: '24px 30px', // Уменьшили высоту за счет отступов (было 32px 40px)
            backgroundColor: 'rgba(255, 255, 255, 0.08)', // Повысили контраст фона
            border: '1px solid rgba(255, 255, 255, 0.15)', // Сделали границу заметнее
            borderRadius: '20px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget
            el.style.backgroundColor = 'rgba(255, 255, 255, 0.12)'
            el.style.borderColor = 'rgba(255, 255, 255, 0.25)'
            el.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget
            el.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'
            el.style.borderColor = 'rgba(255, 255, 255, 0.15)'
            el.style.transform = 'translateY(0)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{
                fontSize: 11,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: sub,
                marginBottom: 8,
                fontWeight: 500
              }}>
                Next case
              </div>
              <div style={{
                fontSize: 22, // Немного уменьшили шрифт заголовка
                fontWeight: 600,
                letterSpacing: '-.02em',
                color: T
              }}>
                {nextTitle}
              </div>
              <div style={{ fontSize: 14, color: sub, marginTop: 4 }}>
                {nextSubtitle}
              </div>
            </div>

            {/* Графическая стрелка в круге (как в Back to Top) */}
            <div style={{
              width: 42,
              height: 42,
              borderRadius: '50%',
              border: `1px solid rgba(255, 255, 255, 0.2)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              marginLeft: 20,
              flexShrink: 0
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke={T}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}