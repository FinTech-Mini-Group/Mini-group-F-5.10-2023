/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container : {
        padding : {
          sm: '15px',
          lg: '30px'
        },
      },

      fontFamily:{
      rl : ["'Raleway', sans-serif"]
      },
      colors : {
        black : '#171515',
        green : '#00B709',
        white :'#FAFAFA',
        Cwhites : '#FFF',
        Cblackk: '#000',
        gray : '#ECECEC',
      },
      backgroundColor : {
        bggreen : '#00B709',
        bgblue : '#0F58E5',
        button : '#6EFF75',
        bgdirtblue : '#93B9D2',
        bggrey : '#ECECEC',
        bgred : '#F81D1D',
        bgorange : '#F0A719', 
        Clayout : '#6EFF75' 
      },
     
      fontSize: {
        small: ['16px', {
          fontWeight: 400,
          letterSpacing: 0
        }],
        medium: ['24px', {
          fontWeight: 600,
          letterSpacing: 0
        }],
        Bold: ['36px', {
          fontWeight: 700,
          letterSpacing: 0
        }],
        minibold: ['16px', {
          fontWeight: 500,
          letterSpacing: 0
        }],
        Extra : ['48px', {
          fontWeight: 700,
          letterSpacing: 0
        }],
        Large : ['48px' , {
          fontWeight: 800,
          letterSpacing: 0
        }],
      },
      backgroundImage: {
        'computer-image': "url('/src/assets/images/computer.svg')",
      },
    },
  },
  plugins: [],
}
