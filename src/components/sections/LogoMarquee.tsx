'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// 1. Добавляем опциональное свойство 'scale' (коэффициент масштаба)
interface Logo {
    name: string
    src: string
    scale?: number // ? означает, что свойство необязательно
}

const LOGOS: Logo[] = [
    { name: 'ukrisib', src: '/images/logos/ukrsib-logo.svg', scale: 1.3 },
    { name: 'p3w', src: '/images/logos/p3w-logo.svg', scale: 1.3 },
    { name: 'cryptoswift', src: '/images/logos/cryptoswift-logo.svg', scale: 1.25 },
    { name: 'factum', src: '/images/logos/factum-logo.svg' },
    { name: 'ifreq', src: '/images/logos/ifreq-logo.svg' },
    { name: 'xgo', src: '/images/logos/xgo-logo.svg' },
    { name: 'barva-tech', src: '/images/logos/barva-tech-logo.svg', scale: 1.25 },
    { name: 'blackrock', src: '/images/logos/blackrock-logo.svg', scale: 1.3 },
]

export default function LogoMarquee() {
    const duplicatedLogos = [...LOGOS, ...LOGOS]

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="absolute left-0 top-0 bottom-0 w-64 z-10 pointer-events-none"
                style={{
                    background: 'linear-gradient(to right, var(--bg) 0%, var(--bg) 10%, rgba(0,0,0,0) 100%)'
                }}
            />
            <div
                className="absolute right-0 top-0 bottom-0 w-64 z-10 pointer-events-none"
                style={{
                    background: 'linear-gradient(to left, var(--bg) 0%, var(--bg) 10%, rgba(0,0,0,0) 100%)'
                }}
            />

            <motion.div
                className="flex items-center w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 35,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'loop',
                }}
            >
                {duplicatedLogos.map((logo, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-center shrink-0"
                        style={{ height: 48, paddingRight: '80px' }}
                    >
                        <Image
                            src={logo.src}
                            alt={logo.name}
                            width={200}
                            height={48}
                            style={{
                                height: '40px',
                                width: 'auto',
                                maxWidth: '160px',
                                objectFit: 'contain',
                                transform: `scale(${logo.scale || 1})`,
                                transformOrigin: 'center center',
                            }}
                            className="opacity-60 grayscale  hover:opacity-100 transition-opacity duration-300"
                            priority
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}