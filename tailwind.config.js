const { colors } = require('./src/styles/common')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor: {
        'ghost-white': colors['ghost-white'],
      },
      backgroundColor: {
        'ghost-white': colors['ghost-white'],
        'venetian-red': colors['venetian-red'],
      },
      textColor: {
        crayola: colors.crayola,
      },
      fontSize: {
        '3xs': ['0.5rem', '1rem'],
        '2xs': ['0.625rem', '1rem'],
      },
      fontFamily: {
        sans: ['Roboto', 'Tahoma', 'Verdana', 'sans-serif'],
      },
      width: {
        112: '28rem',
      },
      minWidth: {
        16: '4rem',
        48: '12rem',
        '1/2': '50%',
      },
      maxWidth: {
        '1/2': '50%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
