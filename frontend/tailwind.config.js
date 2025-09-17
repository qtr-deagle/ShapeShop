/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      spacing: {
        '21': '5.25rem',
        '22': '5.5rem',
        '23': '5.75rem',
        '24': '6rem',
        '25': '6.25rem',
      },
      boxShadow: {
        'offset-black': '4px 4px 0px rgba(0, 0, 0, 1)'
      }
    },
  },
  plugins: [],
}