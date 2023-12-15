/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: { void: "#252525", primary: "#00000", secondary: "#fffff" },
      backgroundImage: {
        hero: "url('/image/logo.jpg')",
      },
    },
  },
  plugins: [],
};
