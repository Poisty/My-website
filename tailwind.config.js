/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'serif'],    // Define 'Lora' as serif
        sans: ['Roboto', 'sans-serif'],  // Define 'Roboto' as sans-serif
        futura: ['Futura', 'sans-serif'], // Add 'Futura'
        raleway: ['Raleway', 'sans-serif'], // Add 'Raleway'
        oswald: ['Oswald', 'sans-serif'], // Add 'Oswald'
        poppins: ['Poppins', 'sans-serif'], // Add 'Poppins'
        lato: ['Lato', 'sans-serif'], // Add 'Lato'
        montserrat: ['Montserrat', 'sans-serif'], // Add 'Montserrat'
        alegreya: ['Alegreya', 'serif'], // Add 'Alegreya'
      },
    },
  },
  plugins: [],
}
