import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-body)', 'system-ui', 'sans-serif'],
        logo: ['var(--font-logo)', 'var(--font-display)', 'var(--font-body)', 'system-ui', 'sans-serif'],
      },
      colors: {
        stone: {
          950: '#0c0a09',
        },
        brand: {
          cyan: '#F91C26',
          'cyan-light': '#FF6B72',
          'cyan-mid': '#E01820',
          'cyan-dark': '#C4141C',
          charcoal: '#303030',
          sand: '#FDE8EA',
          white: '#FFFFFF',
        },
        gold: {
          DEFAULT: '#F91C26',
          light: '#FF6B72',
          dark: '#C4141C',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'skeleton': 'skeleton 1.5s ease-in-out infinite',
        scroll: 'scroll 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        skeleton: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        scroll: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
