module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Raleway', 'sans-serif'],
        'serif': ["'Andada Pro'", 'serif'],
        'jp': ["'Klee One'", 'serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
