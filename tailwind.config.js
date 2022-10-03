/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('./images/React-icon.svg')",
      }
    },
    fontFamily : {
      'jost': ['Jost','sans-serif'],
      'inter': ['Inter', 'sans-serif'],
      'sans': ['Open Sans', 'sans-serif']
    }
  },
  plugins: [require('@tailwindcss/forms'),],
}
