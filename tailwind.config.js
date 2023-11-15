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
        Cback : '#171515',
        Cmain : '#00B709',
        Cwhite :'#FAFAFA',
        Cwhites : '#FFF',
        Cblackk: '#000',
      },
      backgroundColor : {
        bgmain : '#00B709',
        bgblue : '#0F58E5',
        button : '#6EFF75'   
      },
     
      fontSize: {
        Body: ['16px', {
          fontWeight: 400,
          letterSpacing: 0
        }],
        subtitle: ['24px', {
          fontWeight: 600,
          letterSpacing: 0
        }],
        TitleBold: ['36px', {
          fontWeight: 700,
          letterSpacing: 0
        }],
        Bodystrik: ['16px', {
          fontWeight: 500,
          letterSpacing: 0
        }],
        Headingbig : ['48px', {
          fontWeight: 700,
          letterSpacing: 0
        }],
      },
      backgroundImage: {
        banner : "url('src/assets/banner background.png')",
      },
    },
  },
  plugins: [],
}