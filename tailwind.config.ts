import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--bg2)',
        text: 'var(--text)',
        sub: 'var(--sub)',
        dim: 'var(--dim)',
        line: 'var(--line)',
        line2: 'var(--line2)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'case-p': ['clamp(14px, 1.2vw, 16px)', { lineHeight: '1.7', letterSpacing: '-0.01em' }],
        'case-sub': ['14px', { lineHeight: '1.6', letterSpacing: '0' }],
        'case-dim': ['12px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        '11': '12px', 
        '13': '14px', 
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