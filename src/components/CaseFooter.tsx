'use client'

import Link from 'next/link'

// 1. Делаем пропсы опциональными (добавляем ?), чтобы на последней странице не было ошибки
interface CaseFooterProps {
  nextTitle?: string
  nextSubtitle?: string
  nextHref?: string
}

export default function CaseFooter({ nextTitle, nextSubtitle, nextHref }: CaseFooterProps) {
  return (
    <footer>
      {/* Если nextHref нет, центрируем единственную кнопку All cases */}
      <div className={`max-w-[1160px] mx-auto px-6 md:px-[52px] py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20 ${nextHref ? 'justify-between' : 'justify-center'}`}>

        {/* 1. Кнопка All cases (Широкая на мобилке, компактная на десктопе) */}
        <Link
          href="/#work"
          className="group flex items-center justify-center gap-2 w-full md:w-auto text-[13px] md:text-[14px] text-[#F2F0EC] border border-white/10 rounded-[32px] px-8 py-4 transition-all duration-300 hover:bg-white/[0.03] hover:border-white/30 hover:-translate-y-0.5 active:translate-y-0"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
            ↖
          </span>
          All cases
        </Link>

        {/* 2. Блок следующего кейса (Рендерится ТОЛЬКО если есть nextHref) */}
        {nextHref && (
          <Link
            href={nextHref}
            className="group w-full md:w-auto md:min-w-[400px] bg-white/[0.04] border border-white/10 rounded-[24px] p-6 md:p-8 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1 active:translate-y-0"
          >
            <div className="flex items-center justify-between gap-6">
              <div className="flex-1">
                <div className="text-[11px] uppercase tracking-[0.12em] text-[rgba(210,204,194,0.5)] font-medium mb-3">
                  Next case
                </div>
                <div className="text-[20px] md:text-[24px] font-semibold tracking-tight text-[#F2F0EC] leading-tight mb-1">
                  {nextTitle}
                </div>
                <div className="text-[14px] text-[rgba(210,204,194,0.4)] font-light leading-snug">
                  {nextSubtitle}
                </div>
              </div>

              {/* Графическая стрелка в круге */}
              <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.03] flex-shrink-0 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/30 group-hover:scale-110">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="#F2F0EC"
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