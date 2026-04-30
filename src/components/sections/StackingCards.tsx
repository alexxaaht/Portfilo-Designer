'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Tag from '@/components/ui/Tag'
import type { Project } from '@/lib/types'

const COVER_IMAGES: Record<string, string> = {
  'p3-wealth': '/images/misc/2-p3wealth.png',
  'ifreq': '/images/misc/3-ifreq.png',
  'safe': '/images/misc/4-safe.png',
  'cryptoswift': '/images/misc/5-crypto.png',
  'xgo': '/images/misc/6-xgo.png',
  'p3marine': '/images/misc/7-marine.png',
  'ukrsibbank': '/images/misc/1-ukrsib.png',
}

const STICKY_TOP = 57

interface StackingCardsProps {
  projects: Project[]
}

export default function StackingCards({ projects }: StackingCardsProps) {
  return (
    <div className="flex flex-col relative">
      {projects.map((project, i) => (
        <StickyCard key={project.slug} project={project} index={i} total={projects.length} />
      ))}
    </div>
  )
}

function StickyCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const cover = COVER_IMAGES[project.slug]
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0.6, 1], [1, 0.96])

  const inner = (
    <motion.div
      style={{ scale }}
      className="group w-full flex flex-col md:grid md:grid-cols-2 min-h-[520px] overflow-hidden"
    >
      {/* 1. МОБИЛЬНАЯ ШАПКА (Инфо: Номер + Теги) */}
      <div className="flex flex-col px-6 pt-10 pb-4 md:hidden" style={{ background: '#111110' }}>
        <span className="text-[11px] text-dim font-medium mb-4" style={{ letterSpacing: '0.06em' }}>
          {project.num} / {String(total).padStart(2, '0')}
        </span>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
        </div>
      </div>

      {/* 2. ИЗОБРАЖЕНИЕ (Сверху на мобилках, справа на десктопе) */}
      <div
        className="relative overflow-hidden bg-[#111110] w-full aspect-[16/10] md:aspect-auto md:h-auto p-0 md:py-10 md:pl-10 md:pr-0"
      >
        {cover ? (
          <div className="relative w-full h-full overflow-hidden rounded-none md:rounded-l-[24px]">
            <Image
              src={cover}
              alt={project.title}
              fill
              priority={index === 0}
              className="
                object-contain object-top 
                md:object-contain md:object-center
                transition-transform duration-700 ease-out 
                md:group-hover:scale-[1.03] 
                will-change-transform
              "
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[11px] uppercase text-dim">No preview</span>
          </div>
        )}
      </div>

      {/* 3. ТЕКСТОВЫЙ КОНТЕНТ (Слева на десктопе, снизу на мобилках) */}
      <div className="flex flex-col justify-between px-6 md:px-14 py-8 md:py-12 md:order-first" style={{ background: '#111110' }}>
        <div>
          {/* ДЕСКТОПНАЯ ШАПКА (Скрыта на мобилках) */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[11px] text-dim font-medium" style={{ letterSpacing: '0.06em' }}>
                {project.num} / {String(total).padStart(2, '0')}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
            </div>
          </div>

          <h2 className="font-semibold text-text leading-tight mb-4" style={{ fontSize: 'clamp(24px, 2.4vw, 32px)', letterSpacing: '-0.02em' }}>
            {project.title}
          </h2>
          <p className="text-[17px] md:text-[18px] font-light text-gray-200 leading-relaxed mb-3 max-w-sm">
            {project.subtitle}
          </p>
          <p className="text-[15px] md:text-[16px] font-light leading-relaxed max-w-lg" style={{ color: 'var(--sub)' }}>
            {project.desc}
          </p>
        </div>

        {/* НИЖНЯЯ ПАНЕЛЬ С КНОПКОЙ */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-10 pt-8 border-t border-line gap-6">
          <p className="text-[12px] text-dim" style={{ letterSpacing: '0.03em' }}>
            {project.company} · {project.period}
          </p>

          {project.hasCase ? (
            <div className="flex items-center justify-center md:justify-end w-full md:w-auto">
              <span className="
      text-[13px] text-text px-6 py-3 rounded-full 
      bg-white/5 border border-white/10 
      md:bg-transparent md:border-none md:p-0 md:text-sub 
      group-hover:text-text transition-all duration-200
    ">
                View case ↗
              </span>
            </div>
          ) : (
            <div className="flex justify-center md:justify-end w-full md:w-auto">
              <span className="text-[12px] text-dim italic">Under NDA</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )

  return (
    <div
      ref={ref}
      style={{
        position: isDesktop ? 'sticky' : 'relative',
        top: isDesktop ? STICKY_TOP : 0,
        zIndex: index + 1,
        background: '#111110',
      }}
      className="border-t border-white/[0.07] mb-8 md:mb-0"
    >
      {project.hasCase ? (
        <Link href={`/work/${project.slug}`} className="block focus:outline-none">
          {inner}
        </Link>
      ) : (
        inner
      )}
    </div>
  )
}