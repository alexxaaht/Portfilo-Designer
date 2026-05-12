'use client'

import { m } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
  className?: string
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 2.2,
  y = 30,
  className,
}: FadeInProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </m.div>
  )
}