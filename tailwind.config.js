/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#00000",
        secondary: "#ffc812",
        darky: "#fab23d",
        jet: "#383838",
        eblack: "#262626",
      },
      backgroundImage: {
        hero: "url('/image/logo.jpg')",
      },
    },
  },
  plugins: [],
};
