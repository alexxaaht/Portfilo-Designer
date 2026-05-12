'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Уменьшенная ширина заглушки до 72px
  if (!mounted) return <div className="w-[72px] h-8" />

  const isDark = theme === 'dark'

  return (
    <div
      className={`
        relative flex items-center rounded-full w-[72px] h-8 cursor-none transition-all duration-500
        ${isDark ? 'bg-[#525252]' : 'bg-[#525252c6]'}
      `}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >

      <motion.div
        className="absolute w-6 h-6 bg-[#F5F5F5] rounded-full shadow-sm z-0"
        initial={false}
        animate={{
          x: isDark ? 42 : 6,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      />

      {/* Иконка Солнца — контейнер w-1/2 (36px) центрирует иконку на 18px */}
      <div className="relative z-10 w-1/2 flex justify-center items-center pointer-events-none">
        <svg
          width="15" height="15" viewBox="0 0 24 24" fill="none"
          stroke={isDark ? '#AAAAAA' : '#050505'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-colors duration-300"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </div>

      {/* Иконка Луны — контейнер w-1/2 (36px) центрирует иконку на 54px (36+18) */}
      <div className="relative z-10 w-1/2 flex justify-center items-center pointer-events-none">
        <svg
          width="13" height="13" viewBox="0 0 24 24" fill="none"
          stroke={isDark ? '#000000' : '#FFFFFF'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-colors duration-300"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </div>
    </div>
  )
}
