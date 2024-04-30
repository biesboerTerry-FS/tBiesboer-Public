let colors = require('../colors')
module.exports = {
      content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
          ],
    fontFamil: {
        montserrat: ['Montserrat', 'Nabla'],
    },
  purge: [],
  darkMode: 'class',
  theme: {
    extend: { colors },
  },
  variants: [
    'responsive',
    'group-hover',
    'group-focus',
    'hover',
    'focus-within',
    'focus-visible',
    'focus',
    'active',
    'visited',
    'disabled',
    'checked',
  ],
  plugins: [],
}


module.exports =   content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],