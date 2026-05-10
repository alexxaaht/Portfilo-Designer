import { notFound } from 'next/navigation'
import Image from 'next/image'
import type { Metadata } from 'next'
import { getCaseBySlug, cases } from '@/lib/projects'
import CaseNavbar from '@/components/CaseNavbar'
import CaseFooter from '@/components/CaseFooter'
import ScrollReveal from '@/components/animations/ScrollReveal'

// ── 1. ДИНАМИЧЕСКИЕ КОНСТАНТЫ ───────────────────────────────────
const T = 'var(--text)'
const sub = 'var(--sub)'
const dim = 'var(--dim)'
const line = 'var(--line)'
const line2 = 'var(--line2)'

// ── 2. ХЕЛПЕРЫ (КОМПОНЕНТЫ) ────────────────────────────────────

const SecNum = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-6 text-[12px] md:text-[12px] uppercase tracking-[0.12em]" style={{ color: dim }}>
    <span className="block w-6 md:w-8 h-[1px]" style={{ background: line2 }} />
    {children}
  </div>
)

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-[28px] md:text-[34px] font-semibold leading-tight tracking-[-0.03em] mb-8 w-full" style={{ color: T }}>
    {children}
  </h2>
)

const P = ({ children, mt }: { children: React.ReactNode; mt?: boolean }) => (
  <p className={`text-[17px] md:text-[16px] font-light leading-[1.6] md:leading-[1.85] ${mt ? 'mt-6' : 'mt-0'}`} style={{ color: sub }}>
    {children}
  </p>
)

const parseContent = (content: string) => {
  return content.split(/(\*\*.*?\*\*|\*.*?\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-medium" style={{ color: T }}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i} className="font-light italic" style={{ color: dim }}>{part.slice(1, -1)}</em>
    }
    return part
  })
}

// ── 3. ОСНОВНАЯ ФУНКЦИЯ ────────────────────────────────────────

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getCaseBySlug(slug)
  if (!project) notFound()

  const currentIndex = cases.findIndex(c => c.slug === slug)
  const isLast = currentIndex === cases.length - 1
  const nextProject = isLast ? null : cases[currentIndex + 1]

  return (
    <div className="min-h-screen transition-colors duration-500" style={{ backgroundColor: 'var(--bg)' }}>
      <CaseNavbar />

      {/* ── HERO ── */}
      <section className="max-w-[1160px] mx-auto px-6 md:px-[52px] pt-[100px] md:pt-[120px] pb-10 md:pb-12 border-b" style={{ borderColor: line }}>
        <div className="flex flex-wrap gap-2.5 mb-8">
          {project.tags.map(t => {
            const isAccent = t === project.accentTag;
            return (
              <span
                key={t}
                className="text-[11px] md:text-[12px] uppercase tracking-wider rounded-full px-3.5 py-1.5 border transition-all"
                style={{
                  color: isAccent ? project.accent : sub,
                  background: isAccent ? `${project.accent}15` : 'var(--line)',
                  borderColor: isAccent ? `${project.accent}40` : line
                }}
              >
                {t}
              </span>
            );
          })}
        </div>

        <h1 className="text-[36px] md:text-[68px] font-semibold leading-[1.1] md:leading-[1.05] tracking-[-0.03em] mb-12 w-full" style={{ color: T }}>
          {project.title}<br />
          <em className="font-light italic" style={{ color: sub }}>{project.subtitle}</em>
        </h1>

        <p className="text-[17px] md:text-[19px] font-light leading-relaxed mb-12 max-w-[1100px]" style={{ color: sub }}>
          {project.description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden w-full border" style={{ borderColor: line }}>
          {project.infoGrid.map((m, i) => (
            <div key={m.label} className={`p-5 md:p-6 border-line ${i % 2 === 0 ? 'border-r' : 'md:border-r'} ${i < 2 ? 'border-b md:border-b-0' : 'max-md:border-b-0'} last:border-r-0`} style={{ borderColor: line }}>
              <div className="text-[10px] md:text-[11px] uppercase tracking-widest mb-2" style={{ color: dim }}>{m.label}</div>
              <div className="text-[13px] md:text-[14px] font-medium leading-tight" style={{ color: T }}>{m.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COVER ── */}
      <div className="max-w-[1160px] mx-auto px-6 md:px-[52px] mt-10">
        <Image src={project.cover} alt={project.title} width={1920} height={900} className="w-full h-auto block rounded-2xl border transition-colors" style={{ borderColor: line }} priority />
      </div>

      {/* ── SECTIONS ── */}
      {project.sections.map((section, sIdx) => (
        <section key={sIdx} className="max-w-[1160px] mx-auto px-6 md:px-[52px] py-10 md:py-12 border-b last:border-none" style={{ borderColor: line }}>
          <ScrollReveal>
            <SecNum>{section.num} · {section.title}</SecNum>
            <H2>{parseContent(section.heading)}</H2>

            <div className="space-y-6">
              {section.blocks.map((block, bIdx) => (
                <div key={bIdx}>
                  {/* Paragraph */}
                  {block.type === 'p' && <P mt={bIdx > 0}>{parseContent(block.content || '')}</P>}

                  {/* Quote */}
                  {block.type === 'quote' && (
                    <div className="bg-surface border-l-2 p-8 md:p-10 mt-12 mb-0 rounded-r-2xl transition-colors" style={{ borderColor: line2 }}>
                      <div className="text-[16px] md:text-[16px] font-light leading-relaxed italic mb-6" style={{ color: T }}>
                        {block.text}
                      </div>
                      <div className="text-[12px] flex items-center gap-4 uppercase tracking-widest" style={{ color: dim }}>
                        <span className="w-6 h-[1px]" style={{ background: line }} />
                        {block.author}
                      </div>
                    </div>
                  )}

                  {/* Insight */}
                  {block.type === 'insight' && (
                    <div className="bg-surface/50 border-l-2 p-8 md:p-10 mt-12 mb-0 rounded-r-2xl transition-colors" style={{ borderColor: project.accent }}>
                      <div className="text-[14px] uppercase tracking-[0.15em] mb-6 font-medium" style={{ color: project.accent }}>
                        {block.title}
                      </div>
                      <div className="text-[14px] md:text-[16px] font-light italic leading-relaxed" style={{ color: sub }}>
                        {parseContent(block.content || '')}
                      </div>
                    </div>
                  )}

                  {/* Steps */}
                  {block.type === 'steps' && (
                    <div className="mt-12">
                      {block.items.map((s, i, a) => (
                        <div key={s.n} className={`grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr] gap-6 py-10 border-t ${i === a.length - 1 ? 'border-b' : ''}`} style={{ borderColor: line }}>
                          <div className="text-[13px] md:text-[14px] font-medium pt-1" style={{ color: dim }}>{s.n}</div>
                          <div>
                            <div className="text-[19px] md:text-[20px] font-semibold mb-4 tracking-tight" style={{ color: T }}>{s.t}</div>
                            <div className="text-[16px] md:text-[17px] font-light leading-relaxed mb-6" style={{ color: sub }}>{s.d}</div>
                            {s.i && (
                              <div className="pt-6 border-t text-[15px] md:text-[16px] font-light italic leading-relaxed" style={{ borderColor: line, color: dim }}>
                                {s.i}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Card */}
                  {block.type === 'card' && (
                    <div className="bg-surface border rounded-3xl p-8 md:p-10 mt-12 mb-0 transition-colors" style={{ borderColor: line }}>
                      <div className="text-[14px] uppercase tracking-widest mb-5" style={{ color: dim }}>{block.title}</div>
                      <div className="text-[14px] font-light leading-relaxed space-y-4" style={{ color: sub }}>
                        {block.content?.split('\n\n').map((paragraph, i) => (
                          <p key={i}>{parseContent(paragraph)}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Metrics */}
                  {block.type === 'metrics' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                      {block.items?.map((s, idx) => {
                        const accentRequired = ['ifreq', 'cryptoswift', 'xgo', 'p3marine'].includes(project.slug);
                        const metricColor = (accentRequired && idx < 3) ? project.accent : T;
                        return (
                          <div key={idx} className="border rounded-2xl p-8 bg-surface transition-colors" style={{ borderColor: line }}>
                            <div className="text-[42px] md:text-[48px] font-semibold tracking-tighter leading-none mb-3" style={{ color: metricColor }}>
                              {s.n}<span className="text-[24px] md:text-[32px] ml-0.5">{s.su || ''}</span>
                            </div>
                            <div className="text-[13px] md:text-[14px] font-light leading-relaxed" style={{ color: sub }}>{s.d}</div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Pricing */}
                  {block.type === 'pricing' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                      {block.plans.map((p, idx) => (
                        <div
                          key={idx}
                          className="border rounded-[32px] p-8 md:p-10 transition-all duration-300 flex flex-col items-center md:items-start text-center md:text-left"
                          style={{
                            background: p.pro ? `${project.accent}10` : 'var(--bg2)',
                            borderColor: p.pro ? `${project.accent}40` : line
                          }}
                        >
                          <div className="inline-block text-[11px] font-bold tracking-wider uppercase rounded-full px-4 py-1.5 mb-8" style={{ background: project.accent, color: 'var(--bg)' }}>
                            {p.badge}
                          </div>
                          <div className="text-[26px] md:text-[28px] font-semibold mb-4 w-full" style={{ color: T }}>{p.name}</div>
                          <div className="flex items-baseline justify-center md:justify-start gap-2 mb-10 w-full">
                            <span className="text-[48px] md:text-[56px] font-bold tracking-tight" style={{ color: T }}>{p.price}</span>
                            <span className="text-[18px] font-light" style={{ color: dim }}>{p.period}</span>
                          </div>
                          <ul className="space-y-4 text-left self-center md:self-start">
                            {p.features.map((f, fIdx) => (
                              <li key={fIdx} className="text-[15px] font-light flex items-start gap-3" style={{ color: sub }}>
                                <span className="mt-1 flex-shrink-0" style={{ color: project.accent }}>✓</span>
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags Block */}
                  {block.type === 'tags' && (
                    <div className="flex flex-wrap gap-2.5 my-6">
                      {block.labels?.map((label) => (
                        <span key={label} className="text-[12px] md:text-[13px] bg-surface border rounded-full px-4 py-1.5 transition-colors" style={{ color: sub, borderColor: line }}>
                          {label}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Image Block */}
                  {block.type === 'image' && (
                    <div className="my-12">
                      <div className="rounded-2xl overflow-hidden border transition-colors" style={{ borderColor: line }}>
                        <Image src={block.src!} alt={block.alt || ''} width={1160} height={700} className="w-full h-auto block" />
                      </div>
                      {block.caption && <div className="text-[13px] md:text-[14px] font-light mt-4 leading-relaxed" style={{ color: dim }}>{block.caption}</div>}
                    </div>
                  )}

                  {/* Grid Images Block */}
                  {block.type === 'gridImages' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-12 mb-0">
                      {block.images?.map((img, i) => (
                        <div key={i}>
                          <div className="rounded-2xl overflow-hidden border transition-colors" style={{ borderColor: line }}>
                            <Image src={img.src} alt={img.alt} width={580} height={380} className="w-full h-auto block" />
                          </div>
                          <div className="text-[13px] md:text-[14px] font-light mt-4 leading-relaxed" style={{ color: dim }}>{img.caption}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Split Text Block */}
                  {block.type === 'splitText' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
                      <div className="border rounded-2xl p-8 bg-surface transition-colors" style={{ borderColor: line }}>
                        <div className="text-[11px] uppercase tracking-widest opacity-60 mb-5" style={{ color: project.accent }}>{block.leftTitle}</div>
                        <div className="text-[15px] font-light leading-relaxed" style={{ color: sub }}>{parseContent(block.leftContent || '')}</div>
                      </div>
                      <div className="border rounded-2xl p-8 bg-surface transition-colors" style={{ borderColor: line }}>
                        <div className="text-[11px] uppercase tracking-widest opacity-60 mb-5" style={{ color: project.accent }}>{block.rightTitle}</div>
                        <div className="text-[15px] font-light leading-relaxed" style={{ color: sub }}>{parseContent(block.rightContent || '')}</div>
                      </div>
                    </div>
                  )}

                  {/* Grid Decisions Block */}
                  {block.type === 'gridDecisions' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                      {block.decisions?.map((d, idx) => (
                        <div key={idx} className={`border rounded-2xl p-8 bg-surface transition-colors ${d.wide ? 'md:col-span-2' : ''}`} style={{ borderColor: line }}>
                          <div className="text-[24px] mb-4">{d.ic}</div>
                          <div className="text-[18px] font-medium mb-2.5" style={{ color: T }}>{d.t}</div>
                          <div className="text-[14px] font-light leading-relaxed" style={{ color: sub }}>{d.d}</div>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>
      ))}

      <CaseFooter
        nextTitle={nextProject?.title}
        nextSubtitle={nextProject?.subtitle}
        nextHref={nextProject ? `/work/${nextProject.slug}` : undefined}
      />
    </div>
  )
}