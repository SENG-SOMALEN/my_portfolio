import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        khmer: ['"Kantumruy Pro"', 'sans-serif'],
        sans: ['"Kantumruy Pro"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config