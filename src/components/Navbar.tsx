import Link from 'next/link'

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-line"
      style={{ background: 'rgba(17,17,16,0.94)', backdropFilter: 'blur(20px)' }}
    >
      <div className="px-8 md:px-14 h-full flex items-center justify-between">
        <Link
          href="/"
          className="italic text-[24px]  font-bold text-text hover:text-sub transition-colors duration-200"
        >
          EG
        </Link>
        <ul className="flex gap-7 list-none">
          <li>
            <a
              href="https://www.linkedin.com/in/elvin-garaev-4798ba255/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] text-sub hover:text-text transition-colors duration-200"
            >
              LinkedIn ↗
            </a>
          </li>
          <li>
            <a
              href="https://t.me/el13xx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] text-sub hover:text-text transition-colors duration-200"
            >
              Telegram ↗
            </a>
          </li>
          <li>
            <a
              href="mailto:e.garaev.dg@gmail.com"
              className="text-[16px] text-sub hover:text-text transition-colors duration-200"
            >
              Email ↗
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
