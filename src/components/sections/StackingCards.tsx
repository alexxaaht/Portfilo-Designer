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
    <div>
      {projects.map((project, i) => (
        <StickyCard key={project.slug} project={project} index={i} total={projects.length} />
      ))}
    </div>
  )
}

function StickyCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const cover = COVER_IMAGES[project.slug]

  // ← хуки ВНУТРИ функции
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
      className="group w-full grid grid-cols-1 md:grid-cols-2 min-h-[520px] overflow-hidden"
    >
      <div className="flex flex-col justify-between px-8 md:px-14 py-10 md:py-12" style={{ background: '#111110' }}>
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-[11px] text-dim font-medium" style={{ letterSpacing: '0.06em' }}>
              {project.num} / {String(total).padStart(2, '0')}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
          </div>
          <h2 className="font-semibold text-text leading-tight mb-4" style={{ fontSize: 'clamp(22px, 2.4vw, 32px)', letterSpacing: '-0.02em' }}>
            {project.title}
          </h2>
          <p className="text-[18px] font-light text-gray-200 leading-relaxed mb-3 max-w-xl">
            {project.subtitle}
          </p>
          <p className="text-[16px] font-light leading-relaxed max-w-lg" style={{ color: 'var(--sub)' }}>
            {project.desc}
          </p>
        </div>
        <div className="flex items-end justify-between mt-10 pt-8 border-t border-line">
          <p className="text-[12px] text-dim" style={{ letterSpacing: '0.03em' }}>
            {project.company} · {project.period}
          </p>
          {project.hasCase ? (
            <span className="text-[13px] text-sub group-hover:text-text transition-colors duration-200">View case ↗</span>
          ) : (
            <span className="text-[12px] text-dim">Under NDA</span>
          )}
        </div>
      </div>

      {/* ── Right: image ── */}
      <div
        className="relative overflow-hidden rounded-2xl isolate min-h-[280px] md:min-h-0" // Добавил rounded-2xl и isolate
        style={{ background: '#111110' }}
      >
        {cover ? (
          <Image
            src={cover}
            alt={project.title}
            fill
            priority={index === 0}
            className="object-contain group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[11px] uppercase text-dim" style={{ letterSpacing: '0.1em' }}>
              No preview
            </span>
          </div>
        )}
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
        borderTop: '1px solid rgba(255,255,255,0.07)',
        background: '#111110',
      }}
    >
      {project.hasCase ? (
        <Link href={`/work/${project.slug}`} className="block">{inner}</Link>
      ) : inner}
    </div>
  )
}