import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Базовые цвета проекта
        bg: '#111110',
        surface: '#1A1A18',

        // Типографика (основана на твоем светлом тексте #F2F0EC)
        text: '#F2F0EC',                            // 100% яркость (основные заголовки)
        sub: 'rgba(242, 240, 236, 0.80)',          // 80% яркость (текст 14px)
        dim: 'rgba(242, 240, 236, 0.55)',          // 55% яркость (служебный 12px)

        // Линии и границы
        line: 'rgba(255,255,255,0.08)',
        line2: 'rgba(255,255,255,0.16)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        /** 
         * ПРАВИЛА ТИПОГРАФИКИ:
         * case-p:   16px на десктопе -> 14px на мобилке (через clamp)
         * case-sub: строго 14px
         * case-dim: строго 12px (минимум)
         */
        'case-p': ['clamp(14px, 1.2vw, 16px)', { lineHeight: '1.7', letterSpacing: '-0.01em' }],
        'case-sub': ['14px', { lineHeight: '1.6', letterSpacing: '0' }],
        'case-dim': ['12px', { lineHeight: '1.4', letterSpacing: '0.02em' }],

        // Оставляем старые для совместимости, если они где-то используются в старых частях
        '11': '12px', // Автоматический редирект с 11 на 12, чтобы не нарушать правило
        '13': '14px', // Автоматический редирект с 13 на 14
      },
      letterSpacing: {
        wider: '0.08em',
        widest: '0.1em',
      },
      maxWidth: {
        content: '1160px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config