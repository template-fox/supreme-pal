const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: colors.lightBlue[100],
        theme: colors.lightBlue[800],
        focused: colors.lightBlue[600],
        light: colors.lightBlue[500],
        lighter: colors.lightBlue[200],
        lightest: colors.lightBlue[100],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
