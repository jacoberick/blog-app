module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      999: { max: '999px' },
    },
    extend: {
      fontFamily: {
        header: ['Josefin Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        bookTitle: ['Fjalla One', 'sans-serif'],
        quote: ['Merriweather', 'serif'],
        featured: ['Castoro', 'serif'],
      },
      colors: {
        main: '#2E4057',
        white: '#f9f9f9',
        highlight: '#DA3A2F',
        background: '#fefefe',
        text: '#243345',
        grey: '#b8b8b8',
      },
      boxShadow: {
        neumorphic: '-7px -7px 10px #cecece, 7px 7px 10px #c0cad7',
        dropDown: '2px 2px 5px rgba(46, 64, 87, 0.81)',
      },
      height: {
        header: '4.25rem',
        almostScreen: 'calc(100vh - 68px)',
        home: '75vh ',
      },
      minWidth: {
        '5rem': '5rem',
        '25rem': '25rem',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      height: ['group-hover'],
      gridColumnStart: ['last'],
    },
  },
  plugins: [],
};
