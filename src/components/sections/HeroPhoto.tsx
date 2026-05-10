'use client'

import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function HeroPhoto() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // ── 1. Глобальные координаты мыши ───────────────────────
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const moveX = useTransform(springX, [-0.5, 0.5], [25, -25])
  const moveY = useTransform(springY, [-0.5, 0.5], [25, -25])

  useEffect(() => {
    setMounted(true)
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const xPct = (e.clientX / window.innerWidth) - 0.5
      const yPct = (e.clientY / window.innerHeight) - 0.5
      mouseX.set(xPct)
      mouseY.set(yPct)
    }
    window.addEventListener('mousemove', handleGlobalMouseMove)
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove)
  }, [mouseX, mouseY])

  if (!mounted) return null

  return (
    <motion.div
      className="absolute md:top-[12%] right-[120px] z-20 hidden lg:block group"
      initial={{ opacity: 0, x: 50, rotate: -15 }}
      animate={{ opacity: 1, x: 0, rotate: -10 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        x: moveX,
        y: moveY,
      }}
    >
      {/* ── 2. АДАПТИВНОЕ СВЕЧЕНИЕ (Glow) ────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] 
                     blur-[80px] opacity-100 transition-colors duration-500
                     ${theme === 'dark'
              ? 'bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,transparent_70%)]'
              : 'bg-[radial-gradient(circle,rgba(0,0,0,0.05)_0%,transparent_70%)]'
            }`}
        />
      </div>

      {/* ── 3. КАРТОЧКА ──────────────────────────────────────── */}
      <motion.div
        className="relative bg-surface p-[10px] pb-7 z-10 rounded-sm transition-all duration-500"
        style={{
          width: 210,
          // В светлой теме делаем тень мягче и длиннее
          boxShadow: theme === 'dark'
            ? '0 25px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)'
            : '0 30px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.02)'
        }}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-bg transition-colors duration-500">
          <Image
            src="/images/misc/00-Elvin-Garaev.jpg"
            priority
            alt="Elvin Garaev"
            fill
            sizes="300px"
            className="object-cover object-top transition-all duration-500"
            // В светлой теме чуть убираем контраст, чтобы фото смотрелось мягче
            style={{ filter: theme === 'dark' ? 'brightness(.9) contrast(1.1)' : 'brightness(1) contrast(1.05)' }}
          />
        </div>

        <p
          className="pt-4 text-[9px] text-center italic opacity-30 uppercase tracking-[0.2em] transition-colors"
          style={{ color: 'var(--text)', fontFamily: 'Georgia, serif' }}
        >
          Product Designer
        </p>

        {/* Интерактивный блик сверху */}
        <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500
                        ${theme === 'dark'
            ? 'bg-gradient-to-tr from-white/[0.03] to-transparent opacity-100'
            : 'bg-gradient-to-tr from-black/[0.01] to-transparent opacity-50'}`}
        />
      </motion.div>
    </motion.div>
  )
}