/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-primary": "#FFD100",
        "text-primary": "#333533"
      },
      fontFamily: {
        sans: ["Archivo", "sans-serif"],
        Archivo: ["Archivo", "sans-serif"],
        Unica: ["Unica One", "cursive"],
      }
    },
  },
  plugins: [],
}

