const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : colors.indigo[600],
        dbg : '#05061B',
        dcard : '#070E27',
      }
    },
  },
  plugins: [],
}
