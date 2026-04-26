'use client'

import { useEffect, useRef, useState } from 'react'

export function useCustomCursor() {
  const [position, setPosition]   = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible]  = useState(false)
  const rafRef = useRef<number>(0)
  const dotPos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      dotPos.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
    }

    // Lerp animation loop for the ring
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, dotPos.current.x, 0.12)
      ringPos.current.y = lerp(ringPos.current.y, dotPos.current.y, 0.12)
      setPosition({ x: ringPos.current.x, y: ringPos.current.y })
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    const onEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.cursor === 'hover'
      ) {
        setIsHovering(true)
      }
    }
    const onLeave = () => setIsHovering(false)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseenter', onEnter, true)
    document.addEventListener('mouseleave', onLeave, true)

    return () => {
      cancelAnimationFrame(rafRef.current)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseenter', onEnter, true)
      document.removeEventListener('mouseleave', onLeave, true)
    }
  }, [isVisible])

  return { position, dotPos: dotPos.current, isHovering, isVisible }
}
