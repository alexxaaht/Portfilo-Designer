'use client'

import { motion } from 'framer-motion'
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
  duration = 2.2, // Увеличил здесь (было 1.2). Чем выше число, тем медленнее анимация.
  y = 30,
  className,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] // Эта кривая делает конец анимации очень плавным
      }}
    >
      {children}
    </motion.div>
  )
}