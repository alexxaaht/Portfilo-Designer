'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroPhoto() {
  return (
    <motion.div
      className="absolute md:top-[6%] right-[140px] z-20 hidden lg:block"
      initial={{ opacity: 0, x: 50, rotate: -15 }}
      animate={{ opacity: 1, x: 0, rotate: -10 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        scale: 1.05,
        rotate: -5,
        transition: { duration: 0.2 }
      }}
    >
      {/* ── Обводка (SVG Drawing Animation) ─────────────────── */}
      <svg
        className="absolute inset-0 w-full h-full z-30 pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.rect
          x="0"
          y="0"
          width="100"
          height="100"
          fill="none"
          stroke="rgba(255, 255, 255, 0.15)" // Тонкая светлая линия
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.8, // Скорость отрисовки всего контура
            delay: 1.2,    // Начинает рисоваться чуть позже появления фото
            ease: "easeInOut"
          }}
        />
      </svg>

      {/* Polaroid Frame */}
      <div
        className="relative bg-[#1a1a18] p-[10px] pb-11 shadow-2xl"
        style={{
          boxShadow: '0 15px 90px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05)',
          width: 220, // Уменьшили размер (было 220)
        }}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src="/images/misc/00-Elvin-Garaev.jpg"
            alt="Elvin Garaev"
            fill
            sizes="300px"
            className="object-cover object-top"
            style={{ filter: 'brightness(.85) contrast(1.1)' }}
            priority
          />
        </div>
        <p
          className="pt-3 text-[10px] text-center italic opacity-30 uppercase tracking-widest"
          style={{ color: '#fff', fontFamily: 'Georgia, serif' }}
        >
          Product Designer
        </p>
      </div>
    </motion.div>
  )
}