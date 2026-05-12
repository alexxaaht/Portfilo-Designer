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
  previousTitle,
  previousSubtitle,
  previousHref,
  nextTitle,
  nextSubtitle,
  nextHref,
}: CaseFooterProps) {
  const hasCaseNav = previousHref || nextHref

  return (
    <footer className="transition-colors duration-300 border-t border-line">
      <div className="max-w-[1160px] mx-auto px-6 md:px-[52px] py-14 md:py-24">

        {/* Контейнер: на десктопе выравнивание по нижнему краю (items-end) */}
        <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-end gap-4 md:gap-6">

          {/* Кнопки слева: теперь строго md:w-[180px] */}
          <div className="flex flex-row md:flex-col gap-2 w-full md:w-auto">

            {/* Previous case */}
            {hasCaseNav && (
              <a
                href={previousHref || '#'}
                className={`
              flex-1 md:flex-none md:w-[180px] text-center text-[14px] font-medium transition-all duration-300 rounded-full px-6 py-4
              border inline-flex items-center justify-center gap-2
              ${previousHref
                    ? 'text-text border-line2 hover:bg-surface hover:-translate-y-0.5 active:translate-y-0'
                    : 'opacity-30 pointer-events-none border-line text-sub'
                  }
            `}
              >
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Previous
              </a>
            )}

            {/* All cases */}
            <a
              href="/#work"
              className="flex-1 md:flex-none md:w-[180px] text-center text-[14px] font-medium text-text border border-line2 hover:bg-surface transition-all duration-300 rounded-full px-6 py-4 hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2"
            >
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M12 4H4v8M4 4l8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All cases
            </a>
          </div>

          {/* Кнопка Next Case: центрирование стрелки сохранено, высота независима */}
          <a
            href={nextHref || '#'}
            className={`
          group relative overflow-hidden flex flex-row items-center justify-between
          w-full md:w-[320px] rounded-[20px] md:rounded-[24px] px-6 md:px-7 py-6 md:py-7
          border transition-all duration-300
          ${nextHref
                ? 'bg-[#2E2E2C] border-[#FFFFFF12] hover:bg-[#363634] [.light_&]:bg-[#EAEAE8] [.light_&]:border-black/[0.06]'
                : 'opacity-30 pointer-events-none border-line bg-surface'
              }
        `}
          >
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.18em] font-medium opacity-40 mb-1 block">Next case</span>
              <span className="text-[18px] md:text-[20px] font-semibold text-white [.light_&]:text-[#111110] leading-tight">{nextTitle}</span>
            </div>
            <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/[0.12] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>

        </div>
      </div>
    </footer>
  )
}
