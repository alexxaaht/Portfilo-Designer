'use client'

import { motion } from 'framer-motion'

interface TypewriterProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

export default function TypewriterEffect({
  text,
  className = '',
  delay = 0,
  speed = 0.05,
}: TypewriterProps) {
  const letters = Array.from(text)

  const container = {
    hidden: {},
    visible: (customDelay: number) => ({
      transition: {
        staggerChildren: speed,
        delayChildren: customDelay,
      },
    }),
  }

  const letterVariants = {
    hidden: {
      display: 'none', // Буква не занимает места вообще
    },
    visible: {
      display: 'inline', // Буква появляется и "расталкивает" строку
      transition: {
        duration: 0
      }
    },
  }

  return (
    <motion.span
      // Используем inline-flex, чтобы курсор всегда был в одной строке с текстом
      className={`inline-flex items-center flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      custom={delay}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          style={{ whiteSpace: 'pre' }}
        >
          {letter}
        </motion.span>
      ))}

      {/* Каретка (курсор) */}
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        className="inline-block w-[0.04em] h-[0.9em] ml-[2px] align-middle"
        style={{
          backgroundColor: 'rgba(178, 174, 168, 0.40)',
          minWidth: '2px'
        }}
      />
    </motion.span>
  )
}