/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors:{
        background:"#121214",
        secondColor:"#1E1E1E",
        otherColor:"#00875F"
       }
    },
  },
  plugins: [],
}