/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e7e7ff", // Set your primary color
        secondary: "#0000A3", // Set your secondary color
      },
      fontFamily: {
        archivo: ["Archivo Narrow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
