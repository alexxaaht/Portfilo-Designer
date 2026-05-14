'use client'

interface CaseFooterProps {
  previousTitle?: string
  previousSubtitle?: string
  previousHref?: string
  nextTitle?: string
  nextSubtitle?: string
  nextHref?: string
}

export default function CaseFooter({
  previousHref,
  nextTitle,
  nextSubtitle,
  nextHref,
}: CaseFooterProps) {
  const hasCaseNav = previousHref || nextHref

  return (
    <footer className="transition-colors duration-300 border-t border-line">
      <div className="max-w-[1160px] mx-auto px-6 md:px-[52px] py-14 md:py-24">

        {/* На десктопі items-stretch – Next кнопка тягнеться на повну висоту лівої колонки */}
        <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-stretch gap-4 md:gap-6">

          {/* Ліва колонка: All cases (зверху) → Previous (знизу) */}
          <div className="flex flex-row md:flex-col md:justify-between gap-2 w-full md:w-auto">

            {/* All cases – тепер перша */}
            <a
              href="/#work"
              className="flex-1 md:flex-none md:w-[210px] text-center text-[14px] font-medium text-text border border-white/20 [.light_&]:border-black/20 hover:bg-surface hover:border-white/40 [.light_&]:hover:border-black/40 transition-all duration-200 rounded-full px-8 py-5 hover:-translate-y-1 active:translate-y-0 active:scale-[0.97] inline-flex items-center justify-center gap-2"
            >
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M12 4H4v8M4 4l8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All cases
            </a>

            {/* Previous – тепер друга, з заповненим фоном як у Next */}
            {hasCaseNav && (
              <a
                href={previousHref || '#'}
                className={`
                  flex-1 md:flex-none md:w-[210px] text-center text-[14px] font-medium transition-all duration-200 rounded-full px-8 py-5
                  border inline-flex items-center justify-center gap-2
                  ${previousHref
                    ? 'bg-[#2E2E2C] border-[#FFFFFF20] text-white hover:bg-[#404040] hover:border-white/30 hover:-translate-y-1 active:translate-y-0 active:scale-[0.97] [.light_&]:bg-[#EAEAE8] [.light_&]:border-black/[0.12] [.light_&]:text-[#111110] [.light_&]:hover:bg-[#DEDED9] [.light_&]:hover:border-black/25'
                    : 'opacity-30 pointer-events-none border-line text-sub bg-surface'
                  }
                `}
              >
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Previous
              </a>
            )}
          </div>

          {/* Next Case: розтягується на повну висоту лівої колонки */}
          <a
            href={nextHref || '#'}
            className={`
              group relative overflow-hidden flex flex-row items-center justify-between
              w-full md:w-[360px] rounded-[20px] md:rounded-[24px] px-6 md:px-7 py-6 md:py-7
              border transition-all duration-200 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]
              ${nextHref
                ? 'bg-[#2E2E2C] border-[#FFFFFF20] hover:bg-[#404040] hover:border-white/30 [.light_&]:bg-[#EAEAE8] [.light_&]:border-black/[0.12] [.light_&]:hover:bg-[#DEDED9] [.light_&]:hover:border-black/25'
                : 'opacity-30 pointer-events-none border-line bg-surface'
              }
            `}
          >
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.18em] font-medium opacity-40 mb-1 block">Next case</span>
              <span className="text-[18px] md:text-[20px] font-semibold text-white [.light_&]:text-[#111110] leading-tight">{nextTitle}</span>
              {nextSubtitle && (
                <span className="text-[13px] font-light mt-1 opacity-50 text-white [.light_&]:text-[#111110] leading-snug">{nextSubtitle}</span>
              )}
            </div>
            <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/[0.12] [.light_&]:border-black/[0.12] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="text-white [.light_&]:text-[#111110]">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>

        </div>
      </div>
    </footer>
  )
}
