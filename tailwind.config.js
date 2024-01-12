/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#252525",
        secondary: "#ffc812",
        darky: "#fab23d",
        jet: "#383838",
        eblack: "#262626",
      },
      boxShadow: {
        button: "  10px 5px 5px rgba(255,200,18,1)",
        whitebutton: " 10px 5px 5px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
