/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html, js}',
    './index.html',
    './css/styles.css'
  ],
  theme: {
    fontFamily: {
      'titles-fonts': ["Merriweather\\ Sans", "-apple-system", "BlinkMacSystemFont",
      "Segoe\\ UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira\\ Sans",
      "Droid\\ Sans", "Helvetica Neue", "sans-serif"],

      'paragraphs-fonts': ["Lato", "-apple-system", "BlinkMacSystemFont",
      "Segoe\\ UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira\\ Sans",
      "Droid\\ Sans", "Helvetica Neue", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}
