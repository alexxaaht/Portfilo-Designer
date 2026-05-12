'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Logo {
  name: string
  src: string
  srcLight?: string
  scale?: number
}

const LOGOS: Logo[] = [
  { name: 'ukrisib', src: '/images/logos/ukrsib-logo.svg', srcLight: '/images/logos/ukrsib_black.svg', scale: 1.3 },
  { name: 'p3w', src: '/images/logos/p3w-logo.svg', scale: 1.35 },
  { name: 'cryptoswift', src: '/images/logos/cryptoswift-logo.svg', scale: 1.25 },
  { name: 'factum', src: '/images/logos/factum-logo.svg', srcLight: '/images/logos/factum_black.svg' },
  { name: 'ifreq', src: '/images/logos/ifreq-logo.svg' },
  { name: 'xgo', src: '/images/logos/xgo-logo.svg' },
  { name: 'barva-tech', src: '/images/logos/barva-tech-logo.svg', scale: 1.25 },
  { name: 'blackrock', src: '/images/logos/blackrock-logo.svg', scale: 1.3 },
]

const imgStyle = (scale: number) => ({
  height: '44px',
  width: 'auto',
  maxWidth: '166px',
  objectFit: 'contain' as const,
  transform: `scale(${scale})`,
  transformOrigin: 'center center',
})

const baseClass = 'grayscale transition-all duration-300 hover:opacity-100'
const darkClass = `${baseClass} opacity-75 brightness-[1.8]`
const lightClass = `${baseClass} opacity-55 brightness-[0.1]`

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

      <motion.div
        className="flex items-center w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 35, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
      >
        {duplicatedLogos.map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center shrink-0"
            style={{ height: 50, paddingRight: '80px' }}
          >
            {logo.srcLight ? (
              <>
                {/* Версія для тёмної теми */}
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={200}
                  height={48}
                  style={imgStyle(logo.scale || 1)}
                  className={`${darkClass} [.light_&]:hidden`}
                  priority
                />
                {/* Версія для світлої теми */}
                <Image
                  src={logo.srcLight}
                  alt={logo.name}
                  width={200}
                  height={48}
                  style={imgStyle(logo.scale || 1)}
                  className={`hidden [.light_&]:block ${lightClass}`}
                  priority
                />
              </>
            ) : (
              <Image
                src={logo.src}
                alt={logo.name}
                width={200}
                height={48}
                style={imgStyle(logo.scale || 1)}
                className={`${baseClass} opacity-40 brightness-[0.2] dark:opacity-75 dark:brightness-[1.8] [.light_&]:opacity-55 [.light_&]:brightness-[0.1]`}
                priority
              />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
