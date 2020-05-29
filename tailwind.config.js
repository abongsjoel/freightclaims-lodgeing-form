module.exports = {
  theme: {
    
    extend: {
      colors: {
        main: {
          500: '#afd743',      //main green
        },
        sec: {
          500: '#cec1f2',     //sec purple
        },
        neutral: {
          900: '#4b5156'        //Logo gray
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
