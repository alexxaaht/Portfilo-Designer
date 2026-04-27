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

export function Stats({ items }: { items: { n: string; d: string }[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${items.length},1fr)`, gap: 2, marginTop: 44 }}>
      {items.map(s => (
        <div key={s.n} style={{ background: '#1A1A18', border: `1px solid ${line}`, borderRadius: 14, padding: '30px 26px' }}>
          <div style={{ fontSize: 44, fontWeight: 600, letterSpacing: '-.04em', color: '#F2F0EC', lineHeight: 1, marginBottom: 8 }}>{s.n}</div>
          <div style={{ fontSize: 13, fontWeight: 300, color: 'rgba(220,216,208,0.75)', lineHeight: 1.6 }}>{s.d}</div>
        </div>
      ))}
    </div>
  )
}