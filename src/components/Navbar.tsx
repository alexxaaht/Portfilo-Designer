'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // ─── Логика полоски прогресса ───────────────────────────────────────
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // ─── Обработка клика по логотипу ────────────────────────────────────
  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  const links = [
    { name: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/elvin-garaev-4798ba255/' },
    { name: 'Telegram ↗', href: 'https://t.me/el13xx' },
    { name: 'Email ↗', href: 'e.garaev.dg55@gmail.com' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-line"
      style={{ background: 'rgba(17,17,16,0.94)', backdropFilter: 'blur(20px)' }}
    >
      <div className="px-8 md:px-14 h-full flex items-center justify-between relative z-[60]">
        {/* Логотип */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="italic text-[24px] font-bold text-text hover:text-sub transition-colors duration-200"
        >
          EG
        </Link>

        {/* Десктопное меню */}
        <ul className="hidden md:flex gap-7 list-none">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] text-sub hover:text-text transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Кнопка бургера (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 md:hidden p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-text block transition-transform"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-text block"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-text block transition-transform"
          />
        </button>
      </div>

      {/* Полоска прогресса скролла */}
      <motion.div
        className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-white origin-left z-[70]"
        style={{ scaleX }}
      />

      {/* Мобильное выпадающее меню */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 w-full h-screen bg-[#111110] flex flex-col pt-24 px-8 md:hidden"
          >
            <ul className="flex flex-col gap-8 list-none">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="text-[24px] font-medium text-text hover:text-sub transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}