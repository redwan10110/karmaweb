/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#293891",
        "secondary":"#19EB96",
        "tertiary":"#E46012",
        "para":"#666666"
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
   },
}
