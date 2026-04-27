import Link from 'next/link'

interface CaseNavbarProps {
  title: string
}

export default function CaseNavbar({ title }: CaseNavbarProps) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[60px] px-4 md:px-[52px] border-b border-line flex items-center justify-between"
      style={{ background: 'rgba(19,19,18,0.92)', backdropFilter: 'blur(18px)' }}
    >
      <Link
        href="#work"
        className="text-[14px] text-sub hover:text-text transition-colors duration-200 flex items-center gap-1.5"
      >
        ← All cases
      </Link>
      <span className="text-[14px] font-medium text-text">{title}</span>
    </nav>
  )
}
