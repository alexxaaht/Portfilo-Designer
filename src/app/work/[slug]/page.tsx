import { notFound } from 'next/navigation'
import Image from 'next/image'
import type { Metadata } from 'next'

import { getCaseBySlug, generateCaseSlugs } from '@/lib/projects'
import CaseNavbar from '@/components/CaseNavbar'
import CaseHero from '@/components/sections/CaseHero'
import CaseSection from '@/components/sections/CaseSection'
import ScrollReveal from '@/components/animations/ScrollReveal'

// ── Static params for Next.js build ──────────────────────────────────────────

export function generateStaticParams() {
  return generateCaseSlugs()
}

// ── Metadata per case ─────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseBySlug(slug)
  if (!caseStudy) return {}

  return {
    title: `${caseStudy.title} — Elvin Garaev - Product Designer`,
    description: caseStudy.description,
  }
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caseStudy = getCaseBySlug(slug)

  if (!caseStudy) notFound()

  return (
    <>
      {/* Case-specific nav replaces the root Navbar for this route */}
      <CaseNavbar title="Elvin Garaev" />

      {/* Hero */}
      <CaseHero caseStudy={caseStudy} />

      {/* Cover image */}
      <div className="w-full overflow-hidden bg-surface">
        <Image
          src={caseStudy.cover}
          alt={`${caseStudy.title} cover`}
          width={1920}
          height={960}
          className="w-full h-auto object-cover"
          style={{ maxHeight: 640 }}
          priority
        />
      </div>

      {/* Sections */}
      {caseStudy.sections.map((section, i) => (
        <ScrollReveal key={section.num} delay={i === 0 ? 0.1 : 0}>
          <CaseSection section={section} />
        </ScrollReveal>
      ))}

      {/* Next case CTA */}
      <NextCaseSection currentSlug={slug} />
    </>
  )
}

// ── Next case navigation ──────────────────────────────────────────────────────

import Link from 'next/link'
import { cases } from '@/lib/projects'

function NextCaseSection({ currentSlug }: { currentSlug: string }) {
  const currentIdx = cases.findIndex((c) => c.slug === currentSlug)
  const next = cases[(currentIdx + 1) % cases.length]

  return (
    <section className="border-t border-line">
      <Link
        href={`/work/${next.slug}`}
        className="group flex items-center justify-between px-4 md:px-[52px] py-12 hover:bg-white/[0.02] transition-colors duration-300"
      >
        <div>
          <p
            className="text-[11px] uppercase mb-2 text-dim"
            style={{ letterSpacing: '0.1em' }}
          >
            Next case
          </p>
          <h3
            className="text-[20px] md:text-[28px] font-semibold text-text group-hover:opacity-80 transition-opacity"
            style={{ letterSpacing: '-0.02em' }}
          >
            {next.title}
          </h3>
          <p className="text-[14px] text-sub mt-1">{next.subtitle}</p>
        </div>
        <span
          className="text-[32px] text-dim group-hover:text-text group-hover:translate-x-1 transition-all duration-200"
        >
          →
        </span>
      </Link>
    </section>
  )
}
