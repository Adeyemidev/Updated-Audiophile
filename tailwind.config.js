/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {

      colors:{'text-black':'#000',
      'red': '#D87D4A',
    },
    transition:{'duration-0':'0.1s'},
hover:{'red':'#D87D4A'},

    margin:{'mx-36': '35px',
    'mt-10':'9px'},

    backgroundColor: {
        'bg-gray': ' #F1F1F1',
        'bg-black':'#000000',
        'bg-yellow': ' #D87D4A'
      },
      fontSize: {
        '7xl': '56px',
        'sm': '15px',
        'base': '28px',
        'xs':'13px',
        '5xl':'40px',
        '3xl':'32px',
      },

      Boxshadow:{'shadow-sm':' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'},
      letterSpacing: { 
        'tracking-normal': '2px',
        'tracking-wide': '10px',
        'tracking-tight': '1px',
        'tracking-widest':'1.143px',
        'tracking-wider':'1.429px'
      },

      lineHeight:{
        'leading-10':'58px',
        'leading-none':'44px',
        'leading-6': '25px'
      },

      fontWeight: {
        'font-bold':'700',
        'font-medium':'500'
      },

      fontStyle:{
        'not-italic': 'normal',
      },
      opacity:{
        '40':' 0.4'
      },

  
      screens:{'sm':'550px'}


    },
  },
  variants: {
    extend: {
      textColor: ['focus'], // Add 'focus' as a variant for textColor utility
    },
  },
  plugins: [],
};
    