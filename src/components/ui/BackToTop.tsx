'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false) // Фикс для гидратации

  useEffect(() => {
    setIsMounted(true) // Помечаем, что клиент готов

    const toggleVisibility = () => {
      // Используем порог 1500, как ты и указал
      if (window.scrollY > 1500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Проверяем положение сразу при монтировании
    toggleVisibility()

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // Если компонент еще не прижился на клиенте, ничего не рендерим
  if (!isMounted) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="back-to-top" // Добавляем ключ для AnimatePresence
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          // Чтобы избежать конфликтов при быстром появлении/исчезновении
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-[#F2F0EC]/70 transition-colors duration-300 hover:border-white/40 hover:text-[#F2F0EC] z-50 group"
          aria-label="Scroll to top"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            className="rotate-180 transition-transform duration-300 group-hover:-translate-y-1"
          >
            <path
              d="M8 3v10M3.5 9l4.5 4 4.5-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}