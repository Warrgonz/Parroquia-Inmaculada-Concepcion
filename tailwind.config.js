/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./src/static/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f2f8f9",
          100: "#deedef",
          200: "#c1dbe0",
          300: "#97c2c9",
          400: "#78acb6",
          500: "#498491",
          600: "#3f6d7b",
          700: "#385b66",
          800: "#344d56",
          900: "#2f424a",
          950: "#1c2a30",
        },
      },
    },
  },
  plugins: [],
};
