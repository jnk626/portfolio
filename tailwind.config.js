/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
      mytheme: {
        "primary": "#FACC15",
        "secondary": "#713800",
        "accent": "#b3aa99",
        "neutral": "#292929",
        "base-100": "#2A303C",
        "info": "#0c4a6e",
        "success": "#fff8e8",
        "warning": "#f59e0b",
        "error": "#F87272",
      },
    }
    ],
  },
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
  plugins: [
    require("daisyui")
  ],
}
