// src/app/template.tsx
'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import BackToTop from '@/components/ui/BackToTop'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Проверяем, является ли текущая страница главной
  const isHomePage = pathname === '/'

  useEffect(() => {
    if (!window.location.hash.includes('#work')) {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {children}

      {/* Рендерим кнопку только если это НЕ главная страница */}
      {!isHomePage && <BackToTop />}
    </motion.div>
  )
}