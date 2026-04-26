import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 text-center">
      <p
        className="text-[11px] uppercase mb-6 text-dim"
        style={{ letterSpacing: '0.1em' }}
      >
        404
      </p>
      <h1
        className="font-bold uppercase mb-6 leading-[0.9]"
        style={{
          fontSize:      'clamp(48px, 8vw, 96px)',
          letterSpacing: '-0.04em',
          color:         'rgba(178,174,168,0.28)',
        }}
      >
        Not Found
      </h1>
      <Link
        href="/"
        className="text-[14px] text-sub hover:text-text transition-colors duration-200 border border-line rounded-full px-5 py-2.5 hover:border-line2"
      >
        ← Back to home
      </Link>
    </div>
  )
}
