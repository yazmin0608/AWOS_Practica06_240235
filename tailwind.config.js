/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/views/**/*.pug",
    "./src/public/**/*.js"
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem', // Personalización para tus botones profesionales
      }
    },
  },
  plugins: [],
}