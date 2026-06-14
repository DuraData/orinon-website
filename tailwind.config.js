/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        brand: {
          50: '#f5f4ff',
          100: '#edeafe',
          200: '#ddd7fd',
          300: '#c5baf9',
          400: '#a593f4',
          500: '#8164eb',
          600: '#5a41d8',
          700: '#3d2eb5',
          800: '#30258e',
          900: '#241b73',
        },
        ink: '#0C1126',
        slate: '#2A2E44',
        muted: '#5A6178',
        line: '#E8EAF2',
        cloud: '#F6F7FC',
        gold: '#E6A12E',
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
        display: ['Schibsted Grotesk', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 24px 60px -32px rgba(12, 17, 38, 0.28)',
        card: '0 24px 50px -24px rgba(12, 17, 38, 0.18)',
        glow: '0 10px 26px rgba(61, 46, 181, 0.28)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top right, rgba(61,46,181,.14), transparent 34%), radial-gradient(circle at bottom left, rgba(230,161,46,.12), transparent 26%)',
        'cta-gradient': 'linear-gradient(120deg, #3D2EB5 0%, #241B73 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0C1126 0%, #1A1550 100%)',
      },
    },
  },
  plugins: [],
};
