'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  // Dot follows mouse exactly
  const dotRef  = useRef<HTMLDivElement>(null)
  // Ring follows with lag
  const ringRef = useRef<HTMLDivElement>(null)

  const mouse      = useRef({ x: -200, y: -200 })
  const ring       = useRef({ x: -200, y: -200 })
  const rafId      = useRef(0)
  const [hover, setHover]     = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Don't init on touch devices
    if (window.matchMedia('(hover: none)').matches) return

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (!visible) setVisible(true)

      // Move dot instantly
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`
      }
    }

    // Lerp ring toward mouse each frame
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const tick = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.10)
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.10)
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`
      }
      rafId.current = requestAnimationFrame(tick)
    }
    rafId.current = requestAnimationFrame(tick)

    // Hover detection — any interactive element
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      if (el.closest('a, button, [data-cursor]')) setHover(true)
    }
    const onOut = (e: MouseEvent) => {
      const el = e.relatedTarget as HTMLElement | null
      if (!el?.closest('a, button, [data-cursor]')) setHover(false)
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      cancelAnimationFrame(rafId.current)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [visible])

  if (typeof window !== 'undefined' &&
      window.matchMedia('(hover: none)').matches) return null

  return (
    <>
      {/* Dot — precise, no lag */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position:        'fixed',
          top:             0,
          left:            0,
          width:           6,
          height:          6,
          borderRadius:    '50%',
          background:      '#E5E0D8',
          pointerEvents:   'none',
          zIndex:          9999,
          opacity:         visible ? 1 : 0,
          transition:      'opacity 0.3s, width 0.2s, height 0.2s',
          willChange:      'transform',
          mixBlendMode:    'difference',
        }}
      />

      {/* Ring — lags behind, morphs on hover */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position:      'fixed',
          top:           0,
          left:          0,
          width:         hover ? 52 : 40,
          height:        hover ? 52 : 40,
          marginTop:     hover ? -6 : 0,
          marginLeft:    hover ? -6 : 0,
          borderRadius:  '50%',
          border:        '1px solid rgba(229,224,216,0.55)',
          pointerEvents: 'none',
          zIndex:        9998,
          opacity:       visible ? 1 : 0,
          transition:    'width 0.35s cubic-bezier(.23,1,.32,1), height 0.35s cubic-bezier(.23,1,.32,1), opacity 0.3s, margin 0.35s cubic-bezier(.23,1,.32,1), border-color 0.3s',
          willChange:    'transform',
          backdropFilter: hover ? 'blur(1px)' : 'none',
        }}
      />
    </>
  )
}
