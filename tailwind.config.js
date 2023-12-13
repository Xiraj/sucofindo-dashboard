/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main-color': '#4E73DF',
      },
      fontFamily: {
        Montserrat: [
          "Montserrat", "sans-serif"
        ]
      },
      maxHeight: {
        '1/2': '50%',
        '3/4': '75%',
      },
    },
  },
  plugins: [],
}
