const textColor = {
  crayola: '#bced91',
}

const fontFamily = {
  sans: ['Roboto', 'Tahoma', 'Verdana', 'sans-serif'],
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor,
      fontFamily,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
