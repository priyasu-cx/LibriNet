/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        "book-cover": "url('https://i.imgur.com/PMbASLPl.png')",
      }),
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
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

