import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#111110',
        surface: '#1A1A18',
        text:    '#F2F0EC',
        sub:     '#B8B4AC',
        dim:     '#6E6B65',
        line:    'rgba(255,255,255,0.08)',
        line2:   'rgba(255,255,255,0.16)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '11': '11px',
        '13': '13px',
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
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up':  'fadeUp 0.6s ease forwards',
        'fade-in':  'fadeIn 0.5s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
