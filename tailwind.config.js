const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      'emerald': {
        ...colors.emerald,
        400: '#42b883' //#primary vue color
      },
      'cyan': {
        ...colors.cyan,
        900: '#35495e' //#secondary vue color
      },

      'slate': {
        ...colors.slate,
        800: '#201e29'
      }
    }
  },
  plugins: [],
}

