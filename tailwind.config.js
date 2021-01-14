module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      header: ["Josefin Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
      bookTitle: ["Fjalla One", "sans-serif"],
    },
    colors: {
      jet: "#2e2e2e",
      platinum: "#e9e9e6",
      battleship: "#898989",
      white: "#f9f9f9",
      black: "#121212",
      red: "#A40606",
      background: "#e0e5ec",
      highlight: "#fefefe",
      shadow: "#c0cad7",
    },
    boxShadow: {
      nuemorphic: "-7px -7px 10px #fefefe, 7px 7px 10px #c0cad7",
      inset: "inset -7px -7px 10px #fefefe, inset 7px 7px 10px #c0cad7",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
