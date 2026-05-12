'use client'

import { m, useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}

export default function ScrollReveal({
  children,
  delay = 0,
  y = 32,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <m.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: 3.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </m.div>
  )
}