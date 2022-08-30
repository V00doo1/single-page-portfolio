/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'sm': '600px',
      'md': '960px',
      'lg': '1280px',
      'xl': '1920px',

      'exs': '100px',
      // ...defaultTheme.screens,
    },
    container: {
      center: true,
    },
    extend: {
      screens: {
        
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}
