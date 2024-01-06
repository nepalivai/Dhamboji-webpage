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
        nepal: "#744742",
      },
      backgroundImage: {
        hero: "url('/image/logo.jpg')",
      },
    },
  },
  plugins: [
    // scrollbar plugin
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
