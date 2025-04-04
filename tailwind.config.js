/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['Roboto', 'sans-serif']
      },
      colors: {
        'mainColor': '#680a08',
        // 'secondColor': '#dcd4ca',
        'secondColor': '#c1b29d',
        'textColor': '#161616'
      }
    },
    animation: {
      'fade-in': 'fadeIn 0.3s linear forwards',
      'move-right': 'move-right 0.6s ease-in-out infinite',  
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '50%': { opacity: '.5' },
        '100%': { opacity: '1' },
      },
      'move-right': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },   
          '100%': { transform: 'translateX(0)' },   
        },
    },
    boxShadow: {
      '4xl': '0 1px 4px #8080801c'
    }
  },
  plugins: [],
}

