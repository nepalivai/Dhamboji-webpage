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
      animation: {
        "infinite-scroll": "infinite-for-scroll 25s linear infinite",
        "infinite-rev-scroll": "infinite-rev-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-for-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      keyframes: {
        "infinite-rev-scroll": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" },
        },
      },
      boxShadow: {
        button: "  10px 5px 5px rgba(255,200,18,1)",
        whitebutton: " 10px 5px 5px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
