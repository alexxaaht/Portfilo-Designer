'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { m, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isCasePage = pathname.startsWith('/work')

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const links = [
    { name: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/elvin-garaev-4798ba255/' },
    { name: 'Telegram ↗', href: 'https://t.me/el13xx' },
    { name: 'Email ↗', href: 'mailto:e.garaev.dg55@gmail.com' },
  ]

  // Если мы на странице кейса — ничего не рендерим
  if (isCasePage) return null

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-line transition-colors duration-300"
      style={{
        background: 'var(--bg)',
        opacity: 0.94,
        backdropFilter: 'blur(20px)'
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-14 h-full flex items-center justify-between relative z-[60]">
        {/* Логотип */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="italic text-[24px] font-bold text-text hover:text-sub transition-colors duration-200"
        >
          EG
        </Link>

        {/* Правая часть: Ссылки + Переключатель */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <ThemeToggle />

            <div className="h-6 w-[1px] bg-line" />

            {/* 3. Список контактов */}
            <ul className="flex gap-7 list-none items-center">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : "_blank"}
                    rel={link.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                    className="text-[16px] text-sub hover:text-text transition-colors duration-200"
                  >
                    {link.name.replace(' ↗', '')}<span className="arrow-icon text-[0.8em] ml-0.5 align-middle leading-none">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Группа для Мобильных устройств (md:hidden) */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <m.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-text block"
              />
              <m.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-text block"
              />
              <m.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-text block"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Полоска прогресса */}
      <m.div
        className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-sub opacity-70 origin-left z-[70]"
        style={{ scaleX }}
      />

      {/* Мобильное меню */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-bg flex flex-col pt-24 px-8 md:hidden z-[55]"
          >
            <ul className="flex flex-col gap-8 list-none">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="text-[28px] font-medium text-text"
                  >
                    {link.name.replace(' ↗', '')}<span className="arrow-icon text-[0.8em] ml-0.5 align-middle leading-none">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
