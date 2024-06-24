/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          red: "#ff9999",
          blue: "#99bbff",
          yellow: "#ffff99",
          green: "#99ff99",
          orange: "#ffcc99",
          pink: "#ff99cc",
          "strong-blue": "#9999ff",
        },
        dark: {
          red: "#ffcccc",
          blue: "#ccd9ff",
          yellow: "#ffffcc",
          green: "#ccffcc",
          orange: "#ffe0cc",
          pink: "#ffccdd",
          "strong-blue": "#ccccff",
        },
      },
    },
    fontFamily: {
      sans: ["poppins", "sans-serif"],
    },
  },
  plugins: [],
};
