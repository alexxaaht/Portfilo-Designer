'use client'

import { useRef, useState, useEffect } from 'react'
import { m, useScroll, useTransform } from 'framer-motion'
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
    <m.div
      style={{ scale: isDesktop ? scale : 1, willChange: 'transform' }}
      className="group w-full flex flex-col md:grid md:grid-cols-2 min-h-fit md:min-h-[580px] overflow-hidden bg-bg transition-colors duration-300"
    >
      {/* 1. ИЗОБРАЖЕНИЕ (Сверху на мобайле, справа на десктопе) */}
      <div className="relative overflow-hidden w-full aspect-video md:aspect-auto md:h-full md:py-16 md:pl-4 md:pr-14">
        {cover ? (
          <div
            className="relative w-full h-full overflow-hidden rounded-none md:rounded-[24px]"
            style={{
              WebkitMaskImage: '-webkit-radial-gradient(white, black)',
              isolation: 'isolate',
            }}
          >
            <Image
              src={cover}
              alt={project.title}
              fill
              priority={index === 0}
              /* object-cover гарантирует выравнивание по нижней границе текста */
              className="object-cover object-top transition-transform duration-700 ease-out md:group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : (
          <div className="absolute inset-0 md:inset-16 md:ml-4 md:mr-14 flex items-center justify-center bg-surface rounded-none md:rounded-[24px]">
            <span className="text-[11px] uppercase text-sub opacity-70">No preview</span>
          </div>
        )}
      </div>

      {/* 2. КОНТЕНТ (Снизу на мобайле, слева на десктопе) */}
      <div className="flex flex-col justify-between px-6 pt-2 pb-8 md:px-16 md:py-16 md:order-first">
        <div>
          {/* Header Info */}
          <div className="flex items-center justify-between mb-4 md:mb-10">
            <span className="text-[11px] text-sub font-medium" style={{ letterSpacing: '0.06em' }}>
              {project.num} / {String(total).padStart(2, '0')}
            </span>
          </div>

          {/* Теги */}
          <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
            {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
          </div>

          <h2 className="font-semibold text-text leading-tight mb-3 md:mb-6 transition-colors" style={{ fontSize: 'clamp(24px, 3vw, 38px)', letterSpacing: '-0.02em' }}>
            {project.title}
          </h2>

          <p className="text-[16px] md:text-[20px] font-light text-sub leading-relaxed mb-4 md:mb-6 max-w-xl">
            {project.subtitle}
          </p>

          <p className="text-[14px] md:text-[16px] font-light leading-relaxed max-w-xl text-sub opacity-80 mb-10 md:mb-0">
            {project.desc}
          </p>
        </div>

        {/* НИЖНЯЯ ПАНЕЛЬ */}
        <div className="mt-auto pt-0 md:pt-6 md:border-t md:border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors">
          {/* md:border-white/[0.08] — та самая "почти невидимая" серая полоска */}

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
                View case <span className="arrow-icon text-[0.8em] ml-1.5 align-top leading-none transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </span>
            </div>
          ) : (
            <div className="flex justify-center md:justify-end w-full md:w-auto">
              <span className="text-[12px] text-sub/60 italic">Under NDA</span>
            </div>
          )}
        </div>
      </div>
    </m.div>
  )

  return (
    <div
      ref={ref}
      style={{
        top: STICKY_TOP,
        zIndex: index + 1,
      }}
      className="relative md:sticky border-t border-line pb-24 md:pb-0 bg-bg transition-colors duration-300"
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
