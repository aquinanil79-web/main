/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          purple: '#8B5CF6',
          cyan: '#06B6D4',
          pink: '#EC4899',
          lavender: '#A78BFA',
          sky: '#22D3EE',
          rose: '#F472B6',
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(139, 92, 246, 0.38)',
      },
    },
  },
  plugins: [],
}

