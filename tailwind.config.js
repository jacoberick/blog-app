module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        header: ["Josefin Sans", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
        bookTitle: ["Fjalla One", "sans-serif"],
      },
      colors: {
        main: "#2E4057",
        white: "#f9f9f9",
        highlight: "#e80f00",
        background: "#e0e5ec",
        text: "#243345",
        grey: "#b8b8b8",
      },
      boxShadow: {
        neumorphic: "-7px -7px 10px #fefefe, 7px 7px 10px #c0cad7",
        dropDown: "2px 2px 5px rgba(46, 64, 87, 0.81)",
      },
      height: {
        header: "4.25rem",
      },
    },
  },
  variants: {
    display: ["group-hover"],
    height: ["group-hover"],
  },
  plugins: [],
};
