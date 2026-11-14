import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sand: {
          DEFAULT: '#F4F0E8',
          50: '#FAF8F5',
          100: '#F4F0E8',
          200: '#EAE4D8',
          300: '#DDD6C8',
          400: '#C8BEAE',
          500: '#A89C8B',
        },
        forest: {
          DEFAULT: '#1F3A2E',
          50: '#F3F7F5',
          100: '#E4ECE7',
          200: '#C2D6CB',
          300: '#8EAE9C',
          400: '#4D7661',
          500: '#1F3A2E',
          600: '#1A3127',
          700: '#162920',
          800: '#13241C',
          900: '#0E1A14',
        },
        brass: {
          DEFAULT: '#B08D57',
          50: '#FAF6EF',
          100: '#F3EDE2',
          200: '#E5D7BF',
          300: '#D4B889',
          400: '#C5A36E',
          500: '#B08D57',
          600: '#937444',
          700: '#765B34',
          800: '#5C4629',
          900: '#42321E',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
