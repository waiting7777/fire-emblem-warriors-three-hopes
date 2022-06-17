/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          main: "#a0aec0"
        },
        red: {
          main: "#862121"
        }
      }
    },
  },
  plugins: [],
}
