'use client'

import { m } from 'framer-motion'
import Image from 'next/image'

interface Logo {
  name: string
  src: string
  srcLight?: string
  scale?: number
}

const LOGOS: Logo[] = [
  { name: 'ukrisib', src: '/images/logos/ukrsib-logo.svg', srcLight: '/images/logos/ukrsib_black.svg', scale: 1.3 },
  { name: 'p3w', src: '/images/logos/p3w-logo.svg', scale: 1.55 },
  { name: 'cryptoswift', src: '/images/logos/cryptoswift-logo.svg', scale: 1.55 },
  { name: 'factum', src: '/images/logos/factum-logo.svg', srcLight: '/images/logos/factum_black.svg' },
  { name: 'ifreq', src: '/images/logos/ifreq-logo.svg' },
  { name: 'xgo', src: '/images/logos/xgo-logo.svg' },
  { name: 'barva-tech', src: '/images/logos/barva-tech-logo.svg', scale: 1.35 },
  { name: 'blackrock', src: '/images/logos/blackrock-logo.svg', scale: 1.35 },
]

const imgStyle = (scale: number) => ({
  height: '44px',
  width: 'auto',
  maxWidth: '166px',
  objectFit: 'contain' as const,
  transform: `scale(${scale})`,
  transformOrigin: 'center center',
})

// srcLight logos: shown as-is, no filters – each file is already designed for its theme
const darkImgClass = 'transition-all duration-300 hover:opacity-100 opacity-80'
const lightImgClass = 'transition-all duration-300 hover:opacity-100 opacity-70'

export default function LogoMarquee() {
  const duplicatedLogos = [...LOGOS, ...LOGOS]

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="absolute left-0 top-0 bottom-0 w-64 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--bg) 0%, var(--bg) 10%, rgba(0,0,0,0) 100%)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-64 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--bg) 0%, var(--bg) 10%, rgba(0,0,0,0) 100%)' }}
      />

      {/* color drives currentColor for mask-image logos */}
      <m.div
        className="flex items-center w-max gap-[80px] text-[#F2F0EC] [.light_&]:text-[#111110]"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 35, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
      >
        {duplicatedLogos.map((logo, i) => {
          const s = logo.scale || 1
          return (
            <div
              key={i}
              className="flex items-center justify-center shrink-0"
              style={{ height: Math.round(44 * s) }}
            >
              {logo.srcLight ? (
                <>
                  {/* Dark theme: brightness lifts #999999 to white */}
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={200}
                    height={48}
                    style={imgStyle(s)}
                    className={`${darkImgClass} [.light_&]:hidden`}
                    priority
                  />
                  {/* Light theme: no brightness – white knockout fills stay white */}
                  <Image
                    src={logo.srcLight}
                    alt={logo.name}
                    width={200}
                    height={48}
                    style={imgStyle(s)}
                    className={`hidden [.light_&]:block ${lightImgClass}`}
                    priority
                  />
                </>
              ) : (
                /* currentColor via CSS mask: actual dimensions scale with logo.scale */
                <div
                  className="opacity-75 [.light_&]:opacity-55 transition-all duration-300 hover:opacity-100"
                  style={{
                    maskImage: `url('${logo.src}')`,
                    WebkitMaskImage: `url('${logo.src}')`,
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                    backgroundColor: 'currentColor',
                    height: `${Math.round(44 * s)}px`,
                    width: `${Math.round(166 * s)}px`,
                  }}
                />
              )}
            </div>
          )
        })}
      </m.div>
    </div>
  )
}
