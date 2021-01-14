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
      neumorphic: "-7px -7px 10px #fefefe, 7px 7px 10px #c0cad7",
      inset: "-7px -7px 10px #fefefe inset, 7px 7px 10px #c0cad7 inset",
    },
    keyframes: {
      shadowFade: {
        "0%": { boxShadow: "-7px -7px 10px #fefefe, 7px 7px 10px #c0cad7" },
        "50%": { boxShadow: "none" },
        "100%": { boxShadow: "-7px -7px 10px #fefefe inset, 7px 7px 10px #c0cad7 inset" },
      },
    },
    animation: {
      shadowFade: "shadowFade 0.35s linear forwards",
    },
  },
  variants: {
    extend: {},
    animation: ["responsive", "hover"],
  },
  plugins: [],
};
