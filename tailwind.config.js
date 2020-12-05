const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
      colors: {
        gray: colors.warmGray,
        red: colors.rose,
        yellow: colors.amber,
        green: colors.lime,
        indigo: colors.indigo,
        purple: colors.violet,
      },
      extend: {
          fontFamily: {
              'sans': ['JetBrains Mono', 'system-ui']
          }
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
