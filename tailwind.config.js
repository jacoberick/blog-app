module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      mh858: { raw: '(min-height: 858px)' },
      m1200: { max: '1200px' },
      m999: { max: '999px' },
      m850: { max: '850px' },
      m775: { max: '775px' },
      m550: { max: '550px' },
      m475: { max: '475px' },
      m400: { max: '400px' },
      m300: { max: '300px' },
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
        main: '#243345',
        white: '#f9f9f9',
        highlight: '#dc2626',
        background: '#fefefe',
        text: '#243345',
        grey: '#b8b8b8',
      },
      boxShadow: {
        dropDown: '2px 2px 5px rgba(46, 64, 87, 0.81)',
        burgerMenu: '-5px 0 5px #0e3036',
        form: '0 0 3px #dc2626',
      },
      height: {
        header: '4.25rem',
        screenMinusHeader: 'calc(100vh - 68px)',
        home: '75vh ',
      },
      minWidth: {
        '5rem': '5rem',
        '25rem': '25rem',
      },
      maxWidth: {
        '15rem': '15rem',
        '60rem': '60rem',
        '100rem': '100rem',
      },
      zIndex: {
        '-1': '-1',
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
}
