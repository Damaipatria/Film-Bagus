/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '38': '9.5rem',
        '68': '17rem',
        '84': '21rem',
        '86': '22rem',
      }
    },
  },
  plugins: [],
}