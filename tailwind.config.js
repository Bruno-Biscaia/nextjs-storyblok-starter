// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css}'        // <- garante que o Tailwind processe o globals.css
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
