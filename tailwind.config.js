/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'serif':['Roboto']
    },
    extend: {
      boxShadow:{
        '3xl':'1px 1px 8px 4px rgba(12, 5, 32, 0.6)'
      }
    },
  },
  plugins: [],
}

