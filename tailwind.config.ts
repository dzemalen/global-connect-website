import type { Config } from 'tailwindcss'

// Palette is derived directly from the Global Connect Flutter app
// (lib/core/const/app_color.dart):
//   primary  #1577B8   primary2/brandLight #4BADE6   brandLighter #95D4ED
//   brandDark (navy) #00263F   brandSurface #EAF4FB
// The default Tailwind `blue` and `sky` scales are overridden so every existing
// utility class (blue-600, sky-500, etc.) maps onto the real app brand colors.
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand blue — anchored at 600 = app primary, 900 = app navy.
        blue: {
          50: '#EAF4FB',
          100: '#D6E9F6',
          200: '#B2D5ED',
          300: '#7DB7DF',
          400: '#4FA1D6',
          500: '#1F86C9',
          600: '#1577B8',
          700: '#106296',
          800: '#0A476E',
          900: '#00263F',
          950: '#001B2E',
        },
        // Bright sky accent — 400 = app brandLight (#4BADE6), the app icon /
        // splash background colour.
        sky: {
          50: '#EAF7FD',
          100: '#D2EEFA',
          200: '#ADDFF4',
          300: '#82CDEE',
          400: '#4BADE6',
          500: '#2E9BD9',
          600: '#1E88C6',
          700: '#1A6E9F',
          800: '#195C84',
          900: '#1A4D6D',
          950: '#07314A',
        },
        brand: {
          blue: '#1577B8', // primary
          sky: '#4BADE6', // bright accent
          light: '#95D4ED', // light tint
          navy: '#00263F', // deep navy
          surface: '#EAF4FB', // tinted blue surface
          amber: '#F5A623', // app warning / tips accent
          dark: '#00263F', // legacy key, now navy
        },
      },
      fontFamily: {
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #1577B8 0%, #4BADE6 100%)',
        'gradient-hero': 'linear-gradient(135deg, #F7F9FC 0%, #EAF4FB 50%, #FFFFFF 100%)',
        'gradient-dark': 'linear-gradient(135deg, #00263F 0%, #013A5E 100%)',
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
        'card-hover': '0 4px 6px rgba(0,0,0,0.05), 0 12px 32px rgba(21,119,184,0.12)',
        'card-xl': '0 8px 40px rgba(0,0,0,0.09), 0 2px 8px rgba(0,0,0,0.04)',
        'phone': '0 40px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.12)',
        'glow-blue': '0 0 40px rgba(21,119,184,0.25)',
        'glow-sky': '0 0 40px rgba(75,173,230,0.25)',
        'glow-blue-lg': '0 0 80px rgba(21,119,184,0.3)',
      },
    },
  },
  plugins: [],
}

export default config
