/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#131313',
        light: '#ffffff',
        viio_blue: {
          soft: '#0092FF',
          strong: '#0059A3'
        }
      }
    },
  },
  plugins: [],
}

