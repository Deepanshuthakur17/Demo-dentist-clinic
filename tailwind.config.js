/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFBF9',
          100: '#FAF8F5',
          200: '#F4EFEA',
          300: '#ECE4DB',
          400: '#DFD4C6',
        },
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          800: '#1E2B3C',
          900: '#1A2332',
          950: '#0F172A',
        },
        sage: {
          50: '#F4F7F5',
          100: '#E8EFEB',
          200: '#D1E0D7',
          400: '#8FA89B',
          500: '#789382',
          600: '#5C7465',
        },
        champagne: {
          100: '#F9F5EC',
          200: '#F3E9D7',
          400: '#DFBE80',
          500: '#C5A059',
          600: '#A8833F',
        },
        charcoal: {
          700: '#3A3F47',
          800: '#2A2E35',
          900: '#1E2022',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Space Grotesk', 'sans-serif'],
        serif: ['var(--font-serif)', 'Dancing Script', 'Source Serif 4', 'cursive', 'serif'],
        dancing: ['Dancing Script', 'cursive'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(26, 35, 50, 0.05)',
        'elevated': '0 12px 32px -4px rgba(26, 35, 50, 0.08)',
        'modal': '0 24px 48px -12px rgba(15, 23, 42, 0.18)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
};
