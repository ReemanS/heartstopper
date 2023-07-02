/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#e9ede8",
        background: "#0e110d",
        "primary-button": "#a6b7a4",
        "secondary-button": "#191f19",
        accent: "#98ac95",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
