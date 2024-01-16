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
        subtitle : '#171515',
        subtitles : '#171515',
        Cmain : '#00B709',
        Cwhite :'#FAFAFA',
        Cwhites : '#FFF',
        Cblackk: '#000',
        change : '#ECECEC',
        brand :  '#999999',
        
      },
      backgroundColor : {
        bgmain : '#00B709',
        bgblue : '#0F58E5',
        button : '#6EFF75',
        instruc : '#93B9D2',
        change : '#ECECEC',
        Cbadge : '#F81D1D',
        Cbanner : '#F0A719', 
        Clayout : '#6EFF75',
        Crect : '#FAFAFA',  
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
        Instruct : ['48px' , {
          fontWeight: 800,
          letterSpacing: 0
        }],
        Bodybold : ['16', {
          fontWeight: 700,
          letterSpacing: 0
        }],
        Bodysmall : ['12', {
          fontWeight: 400,
          letterSpacing: 0
        }],
        CTop : ['12', {
          fontWeight: 600,
          letterSpacing: 0
        }],
        Bodysmalet : ['5', {
          fontWeight: 50,
          letterSpacing: 0
        }],
      },
      backgroundImage: {
        banner : "url('src/assets/banner background.png')",
        banner2 : "url('src/assets/banner background2.png')",
        banner3 : "url('src/assets/banner background3.png')",
        computerimage : "url('src/assets/Rectangle 671.png')",
      },
    },
  },
  plugins: [],
}
