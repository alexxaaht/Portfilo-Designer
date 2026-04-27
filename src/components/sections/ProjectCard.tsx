import Link from 'next/link'
import Image from 'next/image'
import Tag from '@/components/ui/Tag'
import type { Project } from '@/lib/types'

// Maps slug to the first/cover image in public/images
const COVER_IMAGES: Record<string, string> = {
  'p3-wealth': '/images/misc/02-p3wealth.png',
  'ifreq': '/images/misc/03-ifreq.png',
  'safe': '/images/misc/04-safe.png',
  'cryptoswift': '/images/misc/05-crypto.png',
  'xgo': '/images/misc/06-xgo-new.png',
  'p3marine': '/images/misc/07-marine.png',
  'ukrsibbank': '/images/misc/01-ukrsib.png',
}

interface ProjectCardProps {
  project: Project
  total: number
}

export default function ProjectCard({ project, total }: ProjectCardProps) {
  const cover = COVER_IMAGES[project.slug]

  const inner = (
    <div
      className="group border-b border-line py-8 md:py-10 grid grid-cols-1 md:grid-cols-[80px_1fr_280px] gap-6 md:gap-8 items-start transition-colors duration-300 hover:bg-white/[0.02] px-4 md:px-8"
    >
      {/* Number */}
      <div className="flex items-start gap-3 md:gap-0 md:flex-col">
        <span className="text-[11px] text-dim font-medium" style={{ letterSpacing: '0.06em' }}>
          {project.num} / {String(total).padStart(2, '0')}
        </span>
      </div>

      {/* Content */}
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <h2 className="text-[20px] md:text-[22px] font-semibold text-text leading-tight mb-2 tracking-[-0.02em] group-hover:opacity-80 transition-opacity duration-200">
          {project.title}
        </h2>
        <p className="text-[15px] text-sub font-light leading-relaxed mb-3 max-w-xl">
          {project.desc}
        </p>
        <p className="text-[12px] text-dim" style={{ letterSpacing: '0.04em' }}>
          {project.company} · {project.period}
        </p>

        {project.hasCase && (
          <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] text-sub group-hover:text-text transition-colors duration-200">
            View case
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">↗</span>
          </div>
        )}
      </div>

      {/* Cover image */}
      {cover && (
        <div className="hidden md:block overflow-hidden rounded-lg bg-surface aspect-[16/9] relative">
          <Image
            src={cover}
            alt={project.title}
            fill
            className="object-cover object-top opacity-70 group-hover:opacity-90 transition-all duration-500 group-hover:scale-[1.02]"
            sizes="280px"
          />
        </div>
      )}
    </div>
  )

  if (!project.hasCase) return inner

  return (
    <Link href={`/work/${project.slug}`} className="block">
      {inner}
    </Link>
  )
}
