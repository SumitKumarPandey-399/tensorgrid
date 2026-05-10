/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'ui-serif', 'serif'],
      },
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#dbeafe',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#4f46e5',
          700: '#4338ca',
          900: '#0b1020',
        },
      },
      boxShadow: {
        soft: '0 12px 40px rgba(7, 10, 22, 0.24)',
        glow: '0 0 0 1px rgba(96, 165, 250, 0.18), 0 22px 70px rgba(79, 70, 229, 0.28)',
      },
    },
  },
  plugins: [],
}

