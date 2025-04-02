import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...colors,
      'combat-red': '#e01e1e',
      'combat-red-dark': '#b31818',
      'combat-black': '#1a1a1a',
      'combat-gray': '#2c2c2c',
    },
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'impact': ['Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'sans-serif'],
        'bebas': ['Anton', 'Impact', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'texture-dark': "url('/images/dark-texture.png')",
      },
      boxShadow: {
        'combat': '0 0 15px rgba(224, 30, 30, 0.6)',
        'combat-lg': '0 0 30px rgba(224, 30, 30, 0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

export default config
