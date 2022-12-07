/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pri: "#FF7000",
      },
    },
    fontFamily: {
      sans: ["Inter", " sans-serif"],
      paci: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};
