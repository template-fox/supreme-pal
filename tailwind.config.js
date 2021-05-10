const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: colors.blueGray[100],
        theme: colors.blueGray[800],
        focused: colors.blueGray[600],
        light: colors.blueGray[500],
        lighter: colors.blueGray[200],
        lightest: colors.blueGray[100],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
