/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'afacad': ['"Afacad Flux"', 'sans-serif'],
        'stalemate': ['"Stalemate"', 'cursive'],
      },
      fontWeight: {
        'afacad-100': 100,
        'afacad-200': 200,
        'afacad-300': 300,
        'afacad-400': 400,
        'afacad-500': 500,
        'afacad-600': 600,
        'afacad-700': 700,
        'afacad-800': 800,
        'afacad-900': 900,
      },
    },
  },
  plugins: [],
};