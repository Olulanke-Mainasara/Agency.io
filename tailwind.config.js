/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: { max: "320px" },
        "2xl": { min: "1536px" },
      },
      colors: {
        brandDark: "#389c96",
        brandLight: "#6fcbc6",
      },
    },
  },
  plugins: [],
};
