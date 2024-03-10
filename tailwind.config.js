const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      min1200: { min: "1201px" },
      max1200: { max: "1200px" },

      min1024: { min: "1025px" },
      max1024: { max: "1024px" },

      min768: { min: "769px" },
      max768: { max: "768px" },

      min480: { min: "481px" },
      max480: { max: "480px" },

      min1024max1200: { min: "1025px", max: "1200px" },
      min768max1024: { min: "769px", max: "1024px" },
      min480max768: { min: "481px", max: "768px" },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black800: "#2B2C36",
        black700: "#363744",
        gray300: "#BAC1CC",
      },
      fontFamily: {
        sans: ["var(--font-sofiaSans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
