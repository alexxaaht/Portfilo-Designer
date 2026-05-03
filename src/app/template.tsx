// src/app/template.tsx
'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Скроллим вверх ТОЛЬКО если в URL нет хеша #work
    // Это позволит кнопке "All cases" довезти нас до нужного блока
    if (!window.location.hash.includes('#work')) {
      window.scrollTo(0, 0)
    }
  }, [pathname]) // Срабатывает при каждой смене пути

  return (
    <motion.div
      key={pathname} // КРИТИЧНО: заставляет анимацию играть при переходе между кейсами
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}