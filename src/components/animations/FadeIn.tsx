'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number // Мы сделаем его больше
  y?: number
  className?: string
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 1.2, 
  y = 30,  // Чуть увеличил смещение по вертикали для большей амплитуды
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
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {children}
    </motion.div>
  )
}