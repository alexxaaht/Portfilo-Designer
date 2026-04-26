import Image from 'next/image'
import type { CaseSection as CaseSectionType } from '@/lib/types'

interface CaseSectionProps {
  section: CaseSectionType
}

export default function CaseSection({ section }: CaseSectionProps) {
  const { num, title, lead, blocks } = section

  return (
    <section className="px-4 md:px-[52px] py-[80px] max-w-content mx-auto border-b border-line">
      {/* Section number */}
      <div
        className="flex items-center gap-2.5 text-[11px] uppercase mb-5"
        style={{ letterSpacing: '0.1em', color: 'var(--dim)' }}
      >
        <span className="block w-6 h-px" style={{ background: 'var(--line2)' }} />
        {num} · {title}
      </div>

      {/* Lead */}
      {lead && (
        <h2
          className="text-[26px] font-semibold leading-snug mb-5 max-w-[680px]"
          style={{ letterSpacing: '-0.03em', color: 'var(--text)' }}
        >
          {lead}
        </h2>
      )}

      {/* Blocks */}
      <div className="space-y-8">
        {blocks.map((block, i) => {
          if (block.type === 'text') {
            return (
              <p
                key={i}
                className="text-[16px] font-light leading-[1.9] max-w-[680px]"
                style={{ color: 'var(--sub)' }}
                dangerouslySetInnerHTML={{
                  __html: block.content.replace(
                    /\*\*(.*?)\*\*/g,
                    '<strong style="color:var(--text);font-weight:500">$1</strong>'
                  ),
                }}
              />
            )
          }

          if (block.type === 'quote') {
            return (
              <blockquote
                key={i}
                className="border-l-2 pl-6 py-2 max-w-[640px]"
                style={{ borderColor: 'var(--line2)' }}
              >
                <p
                  className="text-[17px] font-light leading-[1.8] italic mb-3"
                  style={{ color: 'var(--text)' }}
                >
                  &ldquo;{block.text}&rdquo;
                </p>
                <cite
                  className="text-[12px] not-italic"
                  style={{ color: 'var(--dim)', letterSpacing: '0.04em' }}
                >
                  — {block.author}
                </cite>
              </blockquote>
            )
          }

          if (block.type === 'stats') {
            return (
              <div
                key={i}
                className="grid gap-0 border border-line rounded-[14px] overflow-hidden"
                style={{ gridTemplateColumns: `repeat(${block.items.length}, 1fr)` }}
              >
                {block.items.map((stat, j) => (
                  <div
                    key={j}
                    className="px-5 py-5"
                    style={{
                      borderRight:
                        j < block.items.length - 1
                          ? '1px solid var(--line)'
                          : 'none',
                    }}
                  >
                    <p
                      className="text-[28px] font-semibold mb-1 leading-none"
                      style={{ letterSpacing: '-0.03em', color: 'var(--text)' }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-[12px] font-light leading-snug"
                      style={{ color: 'var(--sub)' }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )
          }

          if (block.type === 'list') {
            return (
              <ul key={i} className="space-y-3 max-w-[640px]">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-[15px] font-light leading-[1.7]"
                    style={{ color: 'var(--sub)' }}
                  >
                    <span className="mt-[9px] shrink-0 w-1 h-1 rounded-full bg-dim" />
                    {item}
                  </li>
                ))}
              </ul>
            )
          }

          if (block.type === 'image') {
            return (
              <figure key={i} className="space-y-3">
                <div className="relative w-full  p-4 overflow-hidden rounded-xl bg-surface">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={1160}
                    height={700}
                    className="w-full h-auto object-cover"
                    style={{ maxHeight: 700 }}
                  />
                </div>
                {block.caption && (
                  <figcaption
                    className="text-[12px]"
                    style={{ color: 'var(--dim)', letterSpacing: '0.04em' }}
                  >
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            )
          }

          return null
        })}
      </div>
    </section>
  )
}
