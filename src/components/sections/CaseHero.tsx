import Tag from '@/components/ui/Tag'
import type { CaseStudy } from '@/lib/types'

interface CaseHeroProps {
  caseStudy: CaseStudy
}

export default function CaseHero({ caseStudy }: CaseHeroProps) {
  // Вытаскиваем только те поля, которые реально существуют в типе CaseStudy
  const { title, subtitle, tags, accentTag, accent, infoGrid } = caseStudy

  return (
    <section className="max-w-content mx-auto px-4 md:px-[52px] pt-[100px] pb-14 border-b border-line">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-7">
        {tags.map((tag) => (
          <Tag
            key={tag}
            label={tag}
            accent={tag === accentTag ? accent : undefined}
          />
        ))}
      </div>

      {/* Title & Subtitle */}
      <h1
        className="text-[clamp(36px,5vw,60px)] font-semibold leading-[1.05] mb-10 max-w-[820px]"
        style={{ letterSpacing: '-0.03em', color: 'var(--text)' }}
      >
        {title} —{' '}
        <em className="italic font-light" style={{ color: 'var(--sub)' }}>
          {subtitle}
        </em>
      </h1>

      {/* Meta grid (infoGrid) */}
      {infoGrid && infoGrid.length > 0 && (
        <div
          className="grid border border-line rounded-[14px] overflow-hidden max-w-[760px]"
          style={{ gridTemplateColumns: `repeat(${infoGrid.length}, 1fr)` }}
        >
          {infoGrid.map((item: { label: string; value: string }, i: number) => (
            <div
              key={item.label}
              className="px-5 py-[18px]"
              style={{
                borderRight: i < infoGrid.length - 1 ? '1px solid var(--line)' : 'none'
              }}
            >
              <p
                className="text-[10px] uppercase mb-1.5"
                style={{ letterSpacing: '0.08em', color: 'var(--dim)' }}
              >
                {item.label}
              </p>
              <p className="text-[13px] font-medium text-text leading-snug">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}