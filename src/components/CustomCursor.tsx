'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const mouse = useRef({ x: -200, y: -200 })
  const ring = useRef({ x: -200, y: -200 })
  const rafId = useRef(0)
  const [hover, setHover] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (!visible) setVisible(true)

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`
      }
    }

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
      {/* Точка — теперь чисто белая с инверсией */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#FFFFFF', // Чистый белый для корректной инверсии
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s, width 0.2s, height 0.2s',
          willChange: 'transform',
          mixBlendMode: 'difference', // Магия адаптивности
        }}
      />

      {/* Кольцо — теперь тоже с инверсией */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: hover ? 52 : 40,
          height: hover ? 52 : 40,
          marginTop: hover ? -6 : 0,
          marginLeft: hover ? -6 : 0,
          borderRadius: '50%',
          // Белая граница с инверсией станет черной на светлом фоне
          border: '1px solid #FFFFFF',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: visible ? (hover ? 1 : 0.4) : 0,
          transition: 'width 0.35s cubic-bezier(.23,1,.32,1), height 0.35s cubic-bezier(.23,1,.32,1), opacity 0.3s, margin 0.35s cubic-bezier(.23,1,.32,1)',
          willChange: 'transform',
          mixBlendMode: 'difference', // Кольцо тоже инвертируется
          // Размытие оставляем только для эффекта наслоения
          backdropFilter: hover ? 'blur(1px)' : 'none',
        }}
      />
    </>
  )
}