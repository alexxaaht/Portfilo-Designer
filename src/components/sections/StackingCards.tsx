'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Tag from '@/components/ui/Tag'
import type { Project } from '@/lib/types'

const COVER_IMAGES: Record<string, string> = {
  'p3-wealth': '/images/misc/02-p3wealth.png',
  'ifreq': '/images/misc/03-ifreq.png',
  'safe': '/images/misc/04-safe.png',
  'cryptoswift': '/images/misc/05-crypto.png',
  'xgo': '/images/misc/06-xgo.png',
  'p3marine': '/images/misc/07-marine.png',
  'ukrsibbank': '/images/misc/01-ukrsib.png',
}

// Top offset so cards peek below the nav bar
const STICKY_TOP = 57

interface StackingCardsProps {
  projects: Project[]
}

export default function StackingCards({ projects }: StackingCardsProps) {
  return (
    <div>
      {projects.map((project, i) => (
        <StickyCard
          key={project.slug}
          project={project}
          index={i}
          total={projects.length}
        />
      ))}
    </div>
  )
}

// ── Single sticky card ────────────────────────────────────────────────────────

function StickyCard({
  project,
  index,
  total,
}: {
  project: Project
  index: number
  total: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const cover = COVER_IMAGES[project.slug]

  // Track how far this card has scrolled through its "slot"
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Scale down card as the NEXT one slides over it
  const scale = useTransform(scrollYProgress, [0.6, 1], [1, 0.96])

  const inner = (
    <motion.div
      style={{ scale }}
      className="group w-full grid grid-cols-1 md:grid-cols-2 min-h-[520px] overflow-hidden"
    >
      {/* ── Left: text content ───────────────────────────── */}
      <div
        className="flex flex-col justify-between px-8 md:px-14 py-10 md:py-12"
        style={{ background: '#111110' }}
      >
        {/* Top */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <span
              className="text-[11px] text-dim font-medium"
              style={{ letterSpacing: '0.06em' }}
            >
              {project.num} / {String(total).padStart(2, '0')}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>

          {/* Title */}
          <h2
            className="font-semibold text-text leading-tight mb-4"
            style={{
              fontSize: 'clamp(22px, 2.4vw, 32px)',
              letterSpacing: '-0.02em',
            }}
          >
            {project.title}
          </h2>

          {/* Subtitle */}
          <p className="text-[18px] font-light text-gray-200 leading-relaxed mb-3 max-w-sm">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-[16px] font-light leading-relaxed max-w-sm"
            style={{ color: 'var(--sub)' }}>
            {project.desc}
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex items-end justify-between mt-10 pt-8 border-t border-line">
          <p className="text-[12px] text-dim" style={{ letterSpacing: '0.03em' }}>
            {project.company} · {project.period}
          </p>
          {project.hasCase && (
            <span className="text-[13px] text-sub group-hover:text-text transition-colors duration-200">
              View case ↗
            </span>
          )}
          {!project.hasCase && (
            <span className="text-[12px] text-dim">
              Under NDA
            </span>
          )}
        </div>
      </div>

      {/* ── Right: image ─────────────────────────────────── */}
      <div
        className="relative overflow-hidden min-h-[340px] md:min-h-0"
        /* МЕНЯЕМ ЗДЕСЬ: ставим такой же фон, как у текстового блока (#111110) */
        style={{ background: '#111110' }}
      >
        <div className="absolute inset-0 pt-10 md:pt-12 pr-8 md:pr-14 pb-10 md:pb-12 pl-4 md:pl-0">
          {/* Внутренний контейнер для картинки с закруглением */}
          <div className="relative w-full h-full overflow-hidden rounded-2xl bg-[#1A1A18]/20">
            {cover ? (
              <Image
                src={cover}
                alt={project.title}
                fill
                className="object-cover object-top group-hover:scale-[1.05] transition-transform duration-700 ease-out"
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
        </div>
      </div>
    </motion.div>
  )

  // Wrapper: sticky positioning creates the stacking effect
  return (
    <div
      ref={ref}
      style={{
        position: 'sticky',
        top: STICKY_TOP,
        zIndex: index + 1,
        // border-top between cards
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {project.hasCase ? (
        <Link href={`/work/${project.slug}`} className="block">
          {inner}
        </Link>
      ) : (
        inner
      )}
    </div>
  )
}
