import Image from 'next/image'

const line = 'rgba(255,255,255,0.07)'

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: 30, fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.25, color: '#F2F0EC', marginBottom: 20 }}>{children}</h2>
}

export function Em({ children }: { children: React.ReactNode }) {
  return <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(210,204,194,0.7)' }}>{children}</em>
}

export function P({ children, mt }: { children: React.ReactNode; mt?: boolean }) {
  return <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.85, color: 'rgba(220,216,208,0.75)', marginTop: mt ? 20 : 0 }}>{children}</p>
}

export function B({ children }: { children: React.ReactNode }) {
  return <strong style={{ color: '#F2F0EC', fontWeight: 500 }}>{children}</strong>
}

export function Ins({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: '2px solid rgba(255,255,255,0.2)', padding: '20px 28px', margin: '32px 0', background: 'rgba(255,255,255,0.02)', borderRadius: '0 10px 10px 0' }}>
      <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(210,204,194,0.5)', marginBottom: 8 }}>{label}</div>
      <div style={{ fontSize: 17, fontWeight: 300, fontStyle: 'italic', color: '#F2F0EC', lineHeight: 1.7 }}>{children}</div>
    </div>
  )
}

export function Think({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ background: '#1A1A18', border: `1px solid ${line}`, borderRadius: 14, padding: 32, margin: '32px 0' }}>
      <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(210,204,194,0.4)', marginBottom: 12 }}>{label}</div>
      <div style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: 'rgba(220,216,208,0.75)' }}>{children}</div>
    </div>
  )
}

export function Quote({ author, children }: { author: string; children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: '3px solid rgba(255,255,255,0.2)', padding: '24px 28px', margin: '32px 0' }}>
      <div style={{ fontSize: 20, fontWeight: 300, fontStyle: 'italic', color: '#F2F0EC', lineHeight: 1.65, marginBottom: 10 }}>{children}</div>
      <div style={{ fontSize: 13, color: 'rgba(210,204,194,0.45)' }}>{author}</div>
    </div>
  )
}

export function Img({ src, alt, cap }: { src: string; alt: string; cap: string }) {
  return (
    <>
      <div style={{ borderRadius: 14, overflow: 'hidden', border: `1px solid ${line}`, margin: '32px 0' }}>
        <Image src={src} alt={alt} width={1160} height={700} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
      {cap && <div style={{ fontSize: 13, fontWeight: 300, color: 'rgba(210,204,194,0.45)', marginTop: 10, lineHeight: 1.6 }}>{cap}</div>}
    </>
  )
}

function Stats({ items }: { items: { n: string; d: string }[] }) {
  return (
    // grid-cols-1 для мобилок, md:grid-cols-3 для десктопа
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-10 md:mt-12">
      {items.map(s => (
        <div
          key={s.n}
          className="bg-[#1A1A18] border border-white/[0.08] rounded-2xl p-7 md:p-9"
        >
          <div className="text-[40px] md:text-[46px] font-semibold tracking-tighter text-[#F2F0EC] leading-none mb-3">
            {s.n}
          </div>
          <div className="text-[13px] md:text-[14px] font-light text-[#DCD8D0]/85 leading-relaxed">
            {s.d}
          </div>
        </div>
      ))}
    </div>
  )
}