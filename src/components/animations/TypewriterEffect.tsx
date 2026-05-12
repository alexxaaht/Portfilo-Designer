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
  // Разбиваем текст на слова, чтобы контролировать перенос
  const words = text.split(' ')

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
      display: 'none',
    },
    visible: {
      display: 'inline',
      transition: {
        duration: 0
      }
    },
  }

  return (
    <motion.span
      // flex-wrap позволяет словам падать на новую строку
      className={`inline-flex items-center flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      custom={delay}
    >
      {words.map((word, wordIndex) => (
        // whitespace-nowrap гарантирует, что слово не разорвется внутри
        <span key={wordIndex} className="whitespace-nowrap">
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span
              key={`${wordIndex}-${letterIndex}`}
              variants={letterVariants}
            >
              {letter}
            </motion.span>
          ))}

          {/* Добавляем пробел после слова (кроме последнего), который тоже анимируется */}
          {wordIndex < words.length - 1 && (
            <motion.span variants={letterVariants} style={{ whiteSpace: 'pre' }}>
              {' '}
            </motion.span>
          )}
        </span>
      ))}

      {/* Каретка (курсор) */}
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{
          duration: 0.7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="inline-block w-[0.04em] h-[0.9em] ml-[2px] align-middle"
        style={{
          backgroundColor: 'var(--hero-role)',
          minWidth: '2px'
        }}
      />
    </motion.span>
  )
}
