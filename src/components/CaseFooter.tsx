'use client'

import Link from 'next/link'

interface CaseFooterProps {
  nextTitle?: string
  nextSubtitle?: string
  nextHref?: string
}

export default function CaseFooter({ nextTitle, nextSubtitle, nextHref }: CaseFooterProps) {
  return (
    <footer className="transition-colors duration-500">
      {/* Контейнер с адаптивным выравниванием */}
      <div className={`max-w-[1160px] mx-auto px-6 md:px-[52px] py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20 ${nextHref ? 'justify-between' : 'justify-center'}`}>

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

        {/* 2. Блок следующего кейса */}
        {nextHref && (
          <Link
            href={nextHref}
            className="group w-full md:w-auto md:min-w-[400px] bg-surface border border-line rounded-[24px] p-6 md:p-8 transition-all duration-300 hover:bg-surface/80 hover:border-line2 hover:-translate-y-1 active:translate-y-0"
          >
            <div className="flex items-center justify-between gap-6">
              <div className="flex-1">
                <div className="text-[11px] uppercase tracking-[0.12em] text-dim font-medium mb-3 transition-colors">
                  Next case
                </div>
                <div className="text-[20px] md:text-[24px] font-semibold tracking-tight text-text leading-tight mb-1 transition-colors">
                  {nextTitle}
                </div>
                <div className="text-[14px] text-sub font-light leading-snug transition-colors">
                  {nextSubtitle}
                </div>
              </div>

              {/* Графическая стрелка в круге */}
              <div className="w-11 h-11 rounded-full border border-line flex items-center justify-center bg-bg flex-shrink-0 transition-all duration-300 group-hover:bg-surface group-hover:border-sub group-hover:scale-110">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor" 
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Link>
        )}
      </div>
    </footer>
  )
}