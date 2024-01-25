/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#273043',
        'cool-gray': '#9197ae',
        'light-green-gray': '#eff6ee',
      },
    },
  },
  plugins: [],
}

