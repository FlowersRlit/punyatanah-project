/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    color: {},
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif;",
      },
      colors: {
        hijau1: "#016450",
        orange1: "#FF6500",
        black1: "#212121",
        gray1: "#999999",
      },
    },
  },
  plugins: [],
};
