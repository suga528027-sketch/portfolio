/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        terracotta: {
          DEFAULT: '#C85A32',
          hover: '#B04B26',
          dark: '#9A3F1D',
          light: '#F5EBE6',
        },
        sage: {
          DEFAULT: '#607A66',
          hover: '#4C6351',
          light: '#EEF2EE',
        },
        earth: {
          dark: '#2F2E2C',
          muted: '#65625D',
          light: '#A5A098',
          border: '#E6DFD5',
        },
        beige: {
          DEFAULT: '#F7F4EF',
          card: '#FFFFFF',
          darkBg: '#121110',
          darkCard: '#1C1A18',
          darkBorder: '#2E2B27',
        }
      },
      boxShadow: {
        'terracotta-sm': '0 4px 14px rgba(200, 90, 50, 0.15)',
        'terracotta-lg': '0 10px 25px rgba(200, 90, 50, 0.25)',
        'warm-card': '0 4px 20px -2px rgba(47, 46, 44, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
