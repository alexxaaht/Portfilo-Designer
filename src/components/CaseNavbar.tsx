'use client'

import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'

interface CaseNavbarProps {
  title: string
}

export default function CaseNavbar({ title }: CaseNavbarProps) {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[60px] border-b border-line"
      style={{ background: 'rgba(19,19,18,0.92)', backdropFilter: 'blur(18px)' }}
    >
      {/* Внутренний контейнер только для кнопок и текста */}
      <div className="max-w-[1440px] mx-auto w-full h-full px-4 md:px-[52px] flex items-center justify-between relative">
        <a href="/#work"
          className="text-[14px] text-sub hover:text-text transition-colors duration-200 flex items-center gap-1.5"
        >
          ← All cases
        </a>

        <span className="text-[14px] font-medium text-text">{title}</span>
      </div>

      {/* Полоска прогресса — теперь ВНЕ контейнера, поэтому она на всю ширину экрана */}
      <motion.div
        className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-zinc-600 origin-left"
        style={{ scaleX }}
      />
    </nav>
  )
}