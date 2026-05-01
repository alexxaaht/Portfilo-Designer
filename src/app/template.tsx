'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
  
  // Принудительный сброс скролла в 0 при каждом монтаже страницы
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} // Минимум движения (всего 10px вместо 100)
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1] // Плавная кривая (Bézier)
      }}
    >
      {children}
    </motion.div>
  )
}