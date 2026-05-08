'use client'

import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export default function HeroPhoto() {
  // ── 1. Глобальные координаты мыши ───────────────────────
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Пружины для максимально мягкого и "дорогого" движения
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  // Инвертируем движение (тяга в обратную сторону)
  // При перемещении мыши по экрану, фото сдвигается максимум на 25px
  const moveX = useTransform(springX, [-0.5, 0.5], [25, -25])
  const moveY = useTransform(springY, [-0.5, 0.5], [25, -25])

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      // Вычисляем положение курсора от -0.5 до 0.5 относительно центра экрана
      const xPct = (e.clientX / window.innerWidth) - 0.5
      const yPct = (e.clientY / window.innerHeight) - 0.5
      mouseX.set(xPct)
      mouseY.set(yPct)
    }

    window.addEventListener('mousemove', handleGlobalMouseMove)
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="absolute md:top-[12%] right-[140px] z-20 hidden lg:block group"
      initial={{ opacity: 0, x: 50, rotate: -15 }}
      animate={{ opacity: 1, x: 0, rotate: -10 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        x: moveX,
        y: moveY,
      }}
    >
      {/* ── 2. ТО САМОЕ СВЕЧЕНИЕ (White Gradient Glow) ───────── */}
      {/* Оно находится ПОЗАДИ карточки и мягко рассеивается */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] 
                     bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_70%)] 
                     blur-[60px] opacity-100"
        />
      </div>

      {/* ── 3. ЧИСТАЯ КАРТОЧКА (Без лишних рамок) ────────────── */}
      <motion.div
        className="relative bg-[#1a1a18] p-[10px] pb-7 z-10 rounded-sm shadow-2xl"
        style={{
          width: 210,
          boxShadow: '0 25px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)'
        }}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src="/images/misc/00-Elvin-Garaev.jpg"
            alt="Elvin Garaev"
            fill
            sizes="300px"
            className="object-cover object-top"
            style={{ filter: 'brightness(.9) contrast(1.1)' }}
            priority
          />
        </div>

        <p
          className="pt-4 text-[9px] text-center italic opacity-30 uppercase tracking-[0.2em]"
          style={{ color: '#fff', fontFamily: 'Georgia, serif' }}
        >
          Product Designer
        </p>

        {/* Деликатный блик на самой карточке при наведении */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none" />
      </motion.div>
    </motion.div>
  )
}