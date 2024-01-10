/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2524D1",
        dark: "#1D1D1D",
      },
      container: {
        center: true,
        padding: {
          sm: "4rem",
          lg: "4rem",
          xl: "4rem",
          "2xl": "4rem",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
