/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'ml': '900px',
      },
      colors: {
        'wheel': '#1B1B1B',
        'stone': '#222222',
        'wall': '#242424',
        'purpleSky': '#1B1630'
      }
    },
  },
  plugins: [],
}
