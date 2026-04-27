// @/components/CaseComponents.tsx
import Image from 'next/image'

const line = 'rgba(255,255,255,0.07)'
const line2 = 'rgba(255,255,255,0.13)'
const dim = 'rgba(210,204,194,0.48)'

export function SecNum({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{ display: 'block', width: 24, height: 1, background: line2 }} />
      {children}
    </div>
  )
}
// Основная обертка секции (заменяет твой хелпер S)
export function Section({ num, children }: { num: string; children: React.ReactNode }) {
  return (
      <div style={{ padding: '80px 52px', maxWidth: 1160, margin: '0 auto', borderBottom: `1px solid ${line}` }}>
        <div style={{ fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase', color: dim, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ display: 'block', width: 24, height: 1, background: line2 }} />
          {num}
        </div>
        {children}
      </div>
  )
}

// Новый компонент для шагов процесса
export function Steps({ items }: { items: { n: string; t: string; d: string; i?: string }[] }) {
  return (
    <div style={{ marginTop: 44 }}>
      {items.map((s, i, a) => (
        <div key={s.n} style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: 20, padding: '32px 0', borderTop: `1px solid ${line}`, borderBottom: i === a.length - 1 ? `1px solid ${line}` : 'none' }}>
          <div style={{ fontSize: 14, fontWeight: 500, color: dim, paddingTop: 3 }}>{s.n}</div>
          <div>
            <div style={{ fontSize: 19, fontWeight: 600, color: '#E5E0D8', marginBottom: 10, letterSpacing: '-.01em' }}>{s.t}</div>
            <div style={{ fontSize: 17, fontWeight: 300, color: 'rgba(210,204,194,0.72)', lineHeight: 1.8 }}>{s.d}</div>
            {s.i && <div style={{ marginTop: 14, fontSize: 16, fontWeight: 300, fontStyle: 'italic', color: 'rgba(210,204,194,0.62)', lineHeight: 1.6, borderTop: `1px solid ${line}`, paddingTop: 14 }}>{s.i}</div>}
          </div>
        </div>
      ))}
    </div>
  )
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: 32, fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1.25, color: '#F2F0EC', marginBottom: 20, maxWidth: 680 }}>{children}</h2>
}

export function Em({ children }: { children: React.ReactNode }) {
  return <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(210,204,194,0.85)' }}>{children}</em>
}

export function P({ children, mt }: { children: React.ReactNode; mt?: boolean }) {
  return <p style={{ fontSize: 19, fontWeight: 300, lineHeight: 1.85, color: 'rgba(220,216,208,0.88)', marginTop: mt ? 20 : 0 }}>{children}</p>
}

export function B({ children }: { children: React.ReactNode }) {
  return <strong style={{ color: '#F2F0EC', fontWeight: 500 }}>{children}</strong>
}

export function Ins({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: '2px solid rgba(255,255,255,0.2)', padding: '20px 28px', margin: '32px 0', background: 'rgba(255,255,255,0.02)', borderRadius: '0 10px 10px 0' }}>
      <div style={{ fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(210,204,194,0.72)', marginBottom: 8 }}>{label}</div>
      <div style={{ fontSize: 19, fontWeight: 300, fontStyle: 'italic', color: '#F2F0EC', lineHeight: 1.7 }}>{children}</div>
    </div>
  )
}

export function Think({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ background: '#1A1A18', border: `1px solid ${line}`, borderRadius: 14, padding: 32, margin: '32px 0' }}>
      <div style={{ fontSize: 14, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(210,204,194,0.72)', marginBottom: 12 }}>{label}</div>
      <div style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.85, color: 'rgba(220,216,208,0.92)' }}>{children}</div>
    </div>
  )
}

export function Quote({ author, children }: { author: string; children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: '3px solid rgba(255,255,255,0.2)', padding: '24px 28px', margin: '32px 0' }}>
      <div style={{ fontSize: 22, fontWeight: 300, fontStyle: 'italic', color: '#F2F0EC', lineHeight: 1.65, marginBottom: 10 }}>{children}</div>
      <div style={{ fontSize: 15, color: 'rgba(210,204,194,0.65)' }}>— {author}</div>
    </div>
  )
}

export function Img({ src, alt, cap }: { src: string; alt: string; cap?: string }) {
  return (
    <>
      <div style={{ borderRadius: 14, overflow: 'hidden', border: `1px solid ${line}`, margin: '32px 0' }}>
        <Image src={src} alt={alt} width={1160} height={700} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
      {cap && <div style={{ fontSize: 14, fontWeight: 300, color: 'rgba(210,204,194,0.5)', marginTop: 10, lineHeight: 1.6 }}>{cap}</div>}
    </>
  )
}

export function Stats({ items }: { items: { n: string; d: string; su?: string }[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: 12, marginTop: 44 }}>
      {items.map(s => (
        <div key={s.n} style={{ background: '#1A1A18', border: `1px solid ${line}`, borderRadius: 14, padding: '30px 26px' }}>
          <div style={{ fontSize: 46, fontWeight: 600, letterSpacing: '-.04em', color: '#F2F0EC', lineHeight: 1, marginBottom: 8 }}>
            {s.n}<span style={{ fontSize: 24, color: 'rgba(210,204,194,0.72)' }}>{s.su}</span>
          </div>
          <div style={{ fontSize: 14, fontWeight: 300, color: 'rgba(210,204,194,0.72)', lineHeight: 1.6 }}>{s.d}</div>
        </div>
      ))}
    </div>
  )
}
