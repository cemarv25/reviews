/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          100: "#d6cc5c",
          500: "#e0ca02",
          900: "#a89700",
        },
        secondary: {
          100: "#68e6d1",
          500: "#00ccaa",
          900: "#008670",
        },
      },
    },
  },
  plugins: [],
};
