module.exports = {
  content: [
    './layouts/*.html'
  ],
  theme: {
    extend: {
      colors: {
        'primary-darkest': '#05386b',
        'primary-dark': '#379683',
        'primary': '#5CDB95',
        'primary-light': '#8EE4AF',
        'primary-lightest': 'EDF5E1'

      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
