/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./src/static/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f7fe",
          100: "#deecfb",
          200: "#c4e0f9",
          300: "#9cccf4",
          400: "#6dafed",
          500: "#4b90e6",
          600: "#3674da",
          700: "#2d60c8",
          800: "#2a4fa3",
          900: "#274481",
          950: "#0f172a",
        },
        secondary: {
          50: "#f0faff",
          100: "#e0f5fe",
          200: "#bae8fd",
          300: "#7dd5fc",
          400: "#38bdf8",
          500: "#0ea6e9",
          600: "#028ac7",
          700: "#0370a1",
          800: "#075e85",
          900: "#0c506e",
          950: "#083549",
        },
        bigstone: {
          50: "#f5f7fa",
          100: "#eaeef4",
          200: "#d0dbe7",
          300: "#a6bdd3",
          400: "#779bb9",
          500: "#567ea1",
          600: "#426487",
          700: "#37526d",
          800: "#30465c",
          900: "#2c3d4e",
          950: "#232f3e",
        },
      },
      fontFamily: {
        pacifico: ["Pacifico", "sans-serif"],
        didact: ["Didact Gothic", "serif"],
      },
      maxWidth: {
        "lg-container": "1250px",
      },
    },
  },
  plugins: [],
};
