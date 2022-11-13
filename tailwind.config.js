/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '320px', // min-width
      md: '768px', // min-width
      lg: '1024px', // min-width
      xl: '1440px', // min-width
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#111010',
        yellowAccent: '#E2BF57',
        yellowShadow: '#AD9448',
        red: '#DF5656',
        grayLight: '#D9D9D9',
        grayDark: '#8F8A8A',
      },
      // fontFamily: {
      //   // Inter: ['Inter'],
      //   // Telegraf: ['PPTelegraf'],
      // },
      transitionProperty: {
        width: 'width',
      },
    },
  },
}
