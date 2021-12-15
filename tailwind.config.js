const { colors } = require('./src/styles/common')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderColor: {
        'ghost-white': colors['ghost-white'],
      },
      backgroundColor: {
        'ghost-white': colors['ghost-white'],
        'venetian-red': colors['venetian-red'],
        'mystic-maroon': colors['mystic-maroon'],
      },
      textColor: {
        crayola: colors.crayola,
        'mystic-maroon': colors['mystic-maroon'],
        'venetian-red': colors['venetian-red'],
      },
      fontSize: {
        '3xs': ['0.5rem', '1rem'],
        '2xs': ['0.625rem', '1rem'],
      },
      fontFamily: {
        sans: ['Roboto', 'Tahoma', 'Verdana', 'sans-serif'],
      },
      height: {
        7.5: '1.875rem',
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
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
