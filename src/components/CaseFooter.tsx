'use client'

import Link from 'next/link'

interface CaseFooterProps {
  previousTitle?: string
  previousSubtitle?: string
  previousHref?: string
  nextTitle?: string
  nextSubtitle?: string
  nextHref?: string
}

interface CaseNavLinkProps {
  direction: 'previous' | 'next'
  title?: string
  subtitle?: string
  href: string
}

function CaseNavArrow({ direction }: { direction: 'previous' | 'next' }) {
  const isPrevious = direction === 'previous'

  return (
    <div className="case-nav-arrow w-11 h-11 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110">
      <svg
        width="18"
        height="18"
        viewBox="0 0 16 16"
        fill="none"
        className={`transition-transform duration-300 ${isPrevious ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`}
      >
        <path
          d={isPrevious ? 'M13 8H3M3 8L7 4M3 8L7 12' : 'M3 8H13M13 8L9 4M13 8L9 12'}
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

function CaseNavLink({ direction, title, subtitle, href }: CaseNavLinkProps) {
  const isPrevious = direction === 'previous'

  return (
    <Link
      href={href}
      className="case-nav-card group w-full border rounded-[24px] p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
    >
      <div className="flex items-center justify-between gap-6">
        {isPrevious && <CaseNavArrow direction="previous" />}

        <div className="flex-1 min-w-0">
          <div className="text-[11px] uppercase tracking-[0.12em] text-dim font-medium mb-3 transition-colors">
            {isPrevious ? 'Previous case' : 'Next case'}
          </div>
          <div className="text-[20px] md:text-[24px] font-semibold tracking-tight text-text leading-tight mb-1 transition-colors">
            {title}
          </div>
          <div className="text-[14px] text-sub font-light leading-snug transition-colors">
            {subtitle}
          </div>
        </div>

        {!isPrevious && <CaseNavArrow direction="next" />}
      </div>
    </Link>
  )
}

export default function CaseFooter({
  previousTitle,
  previousSubtitle,
  previousHref,
  nextTitle,
  nextSubtitle,
  nextHref,
}: CaseFooterProps) {
  const hasCaseNav = previousHref || nextHref

  return (
    <footer className="transition-colors duration-300">
      <div className="max-w-[1160px] mx-auto px-6 md:px-[52px] py-16 md:py-24 flex flex-col items-center gap-6 md:gap-8">

        {hasCaseNav && (
          <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4">
            {previousHref ? (
              <CaseNavLink
                direction="previous"
                href={previousHref}
                title={previousTitle}
                subtitle={previousSubtitle}
              />
            ) : (
              <div className="hidden md:block" aria-hidden="true" />
            )}

            {nextHref ? (
              <CaseNavLink
                direction="next"
                href={nextHref}
                title={nextTitle}
                subtitle={nextSubtitle}
              />
            ) : (
              <div className="hidden md:block" aria-hidden="true" />
            )}
          </div>
        )}

        {/* 1. Кнопка All cases */}
        <a
          href="/#work"
          className="group flex items-center justify-center gap-3 w-full md:w-auto text-[13px] md:text-[14px] text-text border border-line rounded-[32px] px-8 py-4 transition-all duration-300 hover:bg-surface hover:border-sub hover:-translate-y-0.5 active:translate-y-0"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
            ↖
          </span>
          All cases
        </a>
      </div>
    </footer>
  )
}
