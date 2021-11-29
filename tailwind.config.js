module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '2/3': '66.666667%',
      },
      //these colors are for only dark mode
      colors: {
        primary: '#1f2028',
        secondary: '#2e3039',
      },
      //for representing thick underline under links
      boxShadow: {
        link: '0 -4px 0 0 rgba(255, 216, 95, 0.7) inset',
        hover: '0 -3rem 0 0 rgba(255, 216, 95, 0.7) inset',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
