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
        800: 'rgba(47,134,94,0.47)',
        600: '#41a275',
        400: '#42b883', //#primary vue color
        300: '#4dc58e',
        200: '#5df8b1'
      },
      'cyan': {
        ...colors.cyan,
        900: '#35495e', //#secondary vue color
        850: '#303c4a7a'
      },

      'slate': {
        ...colors.slate,
        800: '#201e29'
      }
    }
  },
  plugins: [],
}

