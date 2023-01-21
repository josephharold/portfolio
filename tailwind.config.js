/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'serif':['Palatino'],
        'sans': ['Trebuchet MS']
      },
      borderRadius: {
        'large': '0.7rem'
      }
    },
  },
  plugins: [],
}
