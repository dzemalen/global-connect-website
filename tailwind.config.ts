import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563EB',
          sky: '#0EA5E9',
          cyan: '#06B6D4',
          amber: '#F59E0B',
          dark: '#0F172A',
        },
      },
      fontFamily: {
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #2563EB 0%, #0EA5E9 100%)',
        'gradient-hero': 'linear-gradient(135deg, #EFF6FF 0%, #F0F9FF 50%, #ECFDF5 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 6px rgba(0,0,0,0.05), 0 12px 32px rgba(37,99,235,0.12)',
        'card-xl': '0 8px 40px rgba(0,0,0,0.09), 0 2px 8px rgba(0,0,0,0.04)',
        'phone': '0 40px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.12)',
        'glow-blue': '0 0 40px rgba(37,99,235,0.25)',
        'glow-sky': '0 0 40px rgba(14,165,233,0.25)',
        'glow-blue-lg': '0 0 80px rgba(37,99,235,0.3)',
      },
    },
  },
  plugins: [],
}

export default config
