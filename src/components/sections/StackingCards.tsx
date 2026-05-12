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
      style={{ scale: isDesktop ? scale : 1 }}
      className="group w-full flex flex-col md:grid md:grid-cols-2 min-h-fit md:min-h-[520px] overflow-hidden bg-bg transition-colors duration-300"
    >
      {/* 1. ИЗОБРАЖЕНИЕ */}
      <div className="relative overflow-hidden w-full aspect-video md:aspect-auto md:h-auto md:py-10 md:pl-10">
        {cover ? (
          <div className="relative w-full h-full overflow-hidden rounded-none md:rounded-l-[24px]">
            <Image
              src={cover}
              alt={project.title}
              fill
              priority={index === 0}
              className="object-contain object-top md:object-contain md:object-center transition-transform duration-700 ease-out md:group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-surface transition-colors">
            {/* Сделали надпись "No preview" светлее */}
            <span className="text-[11px] uppercase text-sub opacity-70">No preview</span>
          </div>
        )}
      </div>

      {/* 2. КОНТЕНТ */}
      <div className="flex flex-col justify-between px-6 md:px-14 pt-2 pb-8 md:py-12 md:order-first">
        <div>
          {/* Header Info */}
          <div className="flex items-center justify-between mb-4">
            {/* Номер проекта: заменили text-dim на text-sub для яркости */}
            <span className="text-[11px] text-sub font-medium" style={{ letterSpacing: '0.06em' }}>
              {project.num} / {String(total).padStart(2, '0')}
            </span>
          </div>

          {/* Теги */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
          </div>

          <h2 className="font-semibold text-text leading-tight mb-3 md:mb-4 transition-colors" style={{ fontSize: 'clamp(24px, 2.4vw, 32px)', letterSpacing: '-0.02em' }}>
            {project.title}
          </h2>

          {/* Подзаголовок: text-sub оставляем, он обычно достаточно яркий, но можно добавить opacity если нужно */}
          <p className="text-[16px] md:text-[18px] font-light text-sub leading-relaxed mb-4 max-w-lg">
            {project.subtitle}
          </p>

          {/* ОПИСАНИЕ: Заменили text-dim на text-sub, чтобы текст стал светлее и читабельнее */}
          <p className="text-[14px] md:text-[16px] font-light leading-relaxed max-w-lg text-sub opacity-80 mb-10 md:mb-0">
            {project.desc}
          </p>
        </div>

        {/* НИЖНЯЯ ПАНЕЛЬ */}
        <div className="mt-auto pt-0 md:pt-6 md:border-t md:border-line flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors">
          {/* Компания и период: Заменили text-dim на text-sub */}
          <p className="text-[11px] md:text-[12px] text-sub uppercase" style={{ letterSpacing: '0.05em' }}>
            {project.company} · {project.period}
          </p>

          {project.hasCase ? (
            <div className="w-full md:w-auto">
              <span className="
    flex items-center justify-center w-full md:w-auto
    text-[13px] font-medium px-8 py-4 rounded-full 
    bg-surface border border-line 
    text-text 
    md:bg-transparent md:border-none md:p-0 
    md:text-sub 
    md:group-hover:text-text 
    transition-all duration-300
">
                View case <span className="ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </span>
            </div>
          ) : (
            <div className="flex justify-center md:justify-end w-full md:w-auto">
              {/* NDA текст: заменили text-dim на text-sub с низкой прозрачностью */}
              <span className="text-[12px] text-sub/60 italic">Under NDA</span>
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
      }}
      className="border-t border-line pb-24 md:pb-0 bg-bg transition-colors duration-300"
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
