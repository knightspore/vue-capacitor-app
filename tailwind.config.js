const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      colors: {
        gray: colors.warmGray,
        red: colors.rose,
        yellow: colors.amber,
        green: colors.lime,
        indigo: colors.indigo,
        purple: colors.violet,
        transparent: colors.transparent
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
