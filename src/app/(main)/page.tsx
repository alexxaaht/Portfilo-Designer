'use client'

import FadeIn from '@/components/animations/FadeIn'
import HeroPhoto from '@/components/sections/HeroPhoto'
import StackingCards from '@/components/sections/StackingCards'
import LogoMarquee from '@/components/sections/LogoMarquee'
import TypewriterEffect from '@/components/animations/TypewriterEffect'
import Link from 'next/link'
import { projects } from '@/lib/projects'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const nav = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const isReload = nav?.type === 'reload';

    if (isReload) {
      window.scrollTo(0, 0);
      if (window.location.hash === '#work') {
        window.history.replaceState(null, '', window.location.pathname);
      }
      return;
    }

    if (window.location.hash === '#work') {
      window.history.replaceState(null, '', window.location.pathname);

      const element = document.getElementById('work');
      if (!element) return;

      const timer = setTimeout(() => {
        element.scrollIntoView({ behavior: 'auto' });
      }, 0);

      return () => clearTimeout(timer);
    }
  }, []);


  return (
    <main className="w-full bg-bg">
      <div className="max-w-[1444px] mx-auto relative min-h-screen">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section
          className="
    relative
    min-h-[100svh]
    md:min-h-[800px]
    px-5
    sm:px-6
    md:px-14
    flex
    flex-col
    justify-between
    md:justify-start
    pt-20
    md:pt-60
    pb-20
    md:pb-24
    overflow-hidden
  "
        >
          <HeroPhoto />

          {/* Main Content */}
          <div className="flex flex-col justify-center md:block flex-1">
            {/* Name */}
            <FadeIn delay={0.05}>
              <h1
                className="
          block
          text-[66px]
          min-[390px]:text-[76px]
          md:text-[clamp(68px,9.8vw,138px)]
          font-bold
          uppercase
          leading-[0.86]
          md:leading-[0.88]
          tracking-[-0.02em]
          md:tracking-[-0.04em]
          mb-3
          md:mb-0
        "
                style={{
                  color: 'var(--text)',
                }}
              >
                <span className="block md:inline">Elvin</span>{' '}
                <span className="block md:inline">Garaev</span>
              </h1>
            </FadeIn>

            {/* Role */}
            <FadeIn delay={0.12} y={0}>
              <div
                className="
          relative
          overflow-hidden
          text-[56px]
          min-[390px]:text-[64px]
          md:text-[clamp(38px,9.8vw,138px)]
          font-bold
          uppercase
          leading-[0.9]
          md:leading-[0.88]
          tracking-[-0.02em]
          md:tracking-[-0.04em]
          mb-6
          md:mb-12
          transition-colors
          duration-500
        "
                style={{
                  color: 'var(--hero-role)',
                }}
              >
                {/* Reserve layout space */}
                <div
                  className="invisible pointer-events-none select-none"
                  aria-hidden="true"
                >
                  <span className="block md:inline">Product</span>{' '}
                  <span className="block md:inline">Designer</span>
                </div>

                {/* Animated text */}
                <div className="absolute inset-0">
                  <TypewriterEffect
                    text="Product Designer"
                    delay={0.8}
                    speed={0.06}
                    className="
              max-md:flex-col
              max-md:items-start
              max-md:leading-[0.9]
            "
                  />
                </div>
              </div>
            </FadeIn>

            {/* Bio */}
            <div className="max-w-[680px] md:max-w-[1300px]">
              <p
                className="
          text-[16px]
          md:text-[clamp(15px,1.25vw,18px)]
          font-light
          text-sub
          leading-[1.58]
          md:leading-[1.65]
        "
              >
                <strong className="text-text font-medium">
                  Lead Product Designer
                </strong>{' '}
                with 5+ years building digital products for{' '}
                <strong className="text-text font-medium">
                  2M+ users
                </strong>{' '}
                across Fintech, SaaS, CRM, Crypto, AI and marketplace.
              </p>

              <p
                className="
          text-[16px]
          md:text-[clamp(15px,1.25vw,18px)]
          font-light
          text-sub
          leading-[1.58]
          md:leading-[1.65]
          mt-3
          md:mt-1
        "
              >
                Collaborated with{' '}
                <strong className="text-text font-medium">
                  BlackRock
                </strong>{' '}
                and{' '}
                <strong className="text-text font-medium">
                  BNP Paribas Group
                </strong>
                . Lead teams end-to-end — from research to final handoff.
              </p>
            </div>
          </div>

          {/* Scroll button */}
          <Link
            href="#work"
            onClick={(e) => {
              e.preventDefault()

              const element = document.getElementById('work')

              if (element) {
                element.scrollIntoView({
                  behavior: 'smooth',
                })

                window.history.pushState(null, '', '#work')
              }
            }}
            className="
  absolute
  bottom-8
  left-1/2
  -translate-x-1/2
  w-12
  h-12
  md:w-14
  md:h-14
  rounded-full
  flex
  items-center
  justify-center
  no-underline
  transition-all
  duration-200
  hover:-translate-y-1
  z-10
  border
  border-white/20
  bg-white/10
  text-[#F2F0EC]/70
  hover:border-white/40
  hover:text-[#F2F0EC]
  /* Light Theme */
  [.light_&]:border-black
  [.light_&]:bg-[#F1F1EE]
  [.light_&]:text-black
  [.light_&]:hover:bg-[#E5E5E2]
"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8 3v10M3.5 9l4.5 4 4.5-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </section>

        {/* ── Block with a carousel ──────────── */}
        <section className="pt-24 pb-44">
          <LogoMarquee />
        </section>

        {/* ── Work list ───────────── */}
        <section id="work" className="scroll-mt-20 relative">
          {/* Section header */}
          <div className="flex items-center justify-between px-8 md:px-14 py-5 border-t border-line">
            {/* Заменили text-dim на text-sub для лучшей видимости */}
            <span className="text-[12px] uppercase text-sub" style={{ letterSpacing: '0.1em' }}>
              Selected Work
            </span>
            <span className="text-[12px] text-sub" style={{ letterSpacing: '0.04em' }}>
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
            Let&apos;s build <br /> something great
          </h2>

          <div className="flex flex-wrap gap-3 justify-center items-center w-full max-w-[900px] mx-auto">
            <a
              href="mailto:e.garaev.dg55@gmail.com"
              className="w-full md:w-auto text-center text-[14px] font-medium text-bg bg-text hover:opacity-90 transition-opacity rounded-full px-8 py-4"
            >
              e.garaev.dg55@gmail.com ↗
            </a>
            <div className="flex md:contents gap-3 w-full md:w-auto">
              <a
                href="https://www.linkedin.com/in/elvin-garaev-4798ba255/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none text-center text-[14px] font-medium text-text border border-line2 hover:bg-surface transition-all duration-300 rounded-full px-6 py-4 hover:-translate-y-0.5 active:translate-y-0"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://t.me/el13xx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none text-center text-[14px] font-medium text-text border border-line2 hover:bg-surface transition-all duration-300 rounded-full px-6 py-4 hover:-translate-y-0.5 active:translate-y-0"
              >
                Telegram ↗
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}