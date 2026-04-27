import Image from 'next/image'
import FadeIn from '@/components/animations/FadeIn'
import HeroPhoto from '@/components/sections/HeroPhoto'
import StackingCards from '@/components/sections/StackingCards'
import { projects } from '@/lib/projects'

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="min-h-screen px-8 md:px-14 pt-[120px] pb-16 relative flex flex-col justify-center overflow-hidden">
        {/* Photo — absolute right, bigger, with hover animation */}
        <HeroPhoto />

        {/* Name — full row */}
        <FadeIn delay={0.05}>
          <span
            className="block font-bold uppercase leading-[0.88]"
            style={{
              fontSize: 'clamp(68px, 9.8vw, 138px)',
              letterSpacing: '-0.04em',
              color: 'var(--text)',
            }}
          >
            Elvin Garaev
          </span>
        </FadeIn>

        {/* Role — full width, can slightly overlap photo */}
        <FadeIn delay={0.12}>
          <span
            className="block font-bold uppercase leading-[0.88] mb-12"
            style={{
              fontSize: 'clamp(68px, 9.8vw, 138px)',
              letterSpacing: '-0.04em',
              color: 'rgba(178, 174, 168, 0.40)',
            }}
          >
            Product Designer
          </span>
        </FadeIn>

        {/* Bio */}
        <FadeIn delay={0.22}>
          <div className="max-w-[950px]">
            <p className="text-[clamp(15px,1.25vw,18px)] font-light text-sub leading-[1.7]">
              5+ years building digital products for{' '}
              <strong className="text-text font-medium">2M+ users</strong> across
              Fintech, SaaS, CRM, Crypto, AI and marketplace.
            </p>
            <p className="text-[clamp(15px,1.25vw,18px)] font-light text-sub leading-[1.7] mt-0.5">
              Collaborated with{' '}
              <strong className="text-text font-medium">BlackRock</strong> and{' '}
              <strong className="text-text font-medium">BNP Paribas Group</strong>.
              Lead teams end-to-end — from research to final handoff.
            </p>
          </div>
        </FadeIn>

        <a
          href="#work"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#D2CCC2]/45 no-underline transition-all duration-200 hover:border-white/30 hover:text-[#E5E0D8] hover:-translate-x-1/2 hover:translate-y-1 z-10"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 3v10M3.5 9l4.5 4 4.5-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>

      {/* ── Work list ─────────────────────────────────────────── */}
      <section id="work">
        {/* Section header */}
        <div className="flex items-center justify-between px-8 md:px-14 py-5 border-y border-line">
          <span className="text-[12px] uppercase text-dim" style={{ letterSpacing: '0.1em' }}>
            Selected Work
          </span>
          <span className="text-[12px] text-dim" style={{ letterSpacing: '0.04em' }}>
            7 projects · 2021–2026
          </span>
        </div>

        {/* Stacking cards */}
        <StackingCards projects={projects} />
      </section>

      {/* ── Contact ───────────────────────────────────────────── */}
      <section className="py-28 px-6 text-center border-t border-line">
        <h2
          className="font-bold uppercase leading-[0.9] mb-7"
          style={{
            fontSize: 'clamp(40px, 6.5vw, 96px)',
            letterSpacing: '-0.03em',
            color: 'var(--text)',
          }}
        >
          Let&apos;s build something great
        </h2>

        <p className="text-[16px] font-light text-sub leading-relaxed mb-10">
          Open to full-time roles and freelance projects in product design.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="mailto:e.garaev.dg@gmail.com"
            className="text-[14px] font-medium text-bg bg-text hover:opacity-90 transition-opacity rounded-full px-6 py-3"
          >
            e.garaev.dg@gmail.com ↗
          </a>
          <a
            href="https://www.linkedin.com/in/elvin-garaev-4798ba255/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-sub hover:text-text transition-colors border border-line hover:border-line2 rounded-full px-6 py-3"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://t.me/el13xx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-sub hover:text-text transition-colors border border-line hover:border-line2 rounded-full px-6 py-3"
          >
            Telegram →
          </a>
        </div>
      </section>
    </>
  )
}
