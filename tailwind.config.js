/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'move-right': {
          '0%': { transform: 'translateX(-0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'move-left': {
          '0%': { transform: 'translateX(-0)' },
          '100%': { transform: 'translate(-100%)' },
        },
        'move-left-right': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateY(20px)' },
          '50%': { transform: 'rotate(-15deg)' },
        },
      },
      animation: {
        'move-right': 'move-right 7s linear infinite',
        'move-left': 'move-left 7s linear infinite',
        'move-left-right': 'move-left-right 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}