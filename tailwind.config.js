module.exports = {
  theme: {
    
    extend: {
      fontFamily: {
        'body': [ 'Arial', 'Roboto', '"Open Sans"'],
       },
      colors: {
        main: {
          500: '#afd743',      //main green
        },
        sec: {
          500: '#cec1f2',     //sec purple
        },
        neutral: {
          500: '#ebebeb',
          700: '#a4a4a4'
        },
      },
      spacing: {
        '72': '20rem',
        '74': '24rem',
        '76': '28rem',
        '78': '32rem',
      },
    },
  },
  variants: {
    border: ['responsive', 'hover', 'focus', 'active'],
    padding: ['responsive', 'hover', 'focus', 'active'],
    transitionDuration: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
