/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['Tajawal', 'sans-serif']
      },
      colors: {
        'mainColor': '#680a08',
        // 'secondColor': '#dcd4ca',
        'secondColor': '#c1b29d',
        'textColor': '#161616'
      }
    },
    keyframes: {
      fadeInLeft: {
        '0%': { opacity: '0', transform: 'translateX(-50px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
      fadeInRight: {
        '0%': { opacity: '0', transform: 'translateX(50px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
      'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
    },
    animation: {
      'fade-in-left': 'fadeInLeft 1s ease-out forwards',
      'fade-in-right': 'fadeInRight 1s ease-out forwards',
      'slide-right': 'slide-right 1s ease-in-out',
    },
    // animation: {
    //   'fade-in': 'fadeIn 0.3s linear forwards',
    //   'move-right': 'move-right 0.6s ease-in-out infinite', 
    //   'float-xy': 'floatXY 3s ease-in-out infinite',
    //   'spin-slow': 'spin 5s linear infinite',
    //   'rotate-infinite': 'rotate360 2s linear infinite',
    //   'moveLeft': 'moveLeft 0.3s linear forwards',
    //   'disappear': 'disappear 3s linear forwards',
    //   'moveLeftError': 'moveLeftError 0.3s linear forwards',
    //   'disappearError': 'disappearError 3s linear forwards',

    // },
    // keyframes: {
    //   fadeIn: {
    //     '0%': { opacity: '0' },
    //     '50%': { opacity: '.5' },
    //     '100%': { opacity: '1' },
    //   },
    //   'move-right': {
    //       '0%': { transform: 'translateX(0)' },
    //       '50%': { transform: 'translateX(10px)' },   
    //       '100%': { transform: 'translateX(0)' },   
    //     },
    //     floatXY: {
    //       '0%': { transform: 'translate(0px, 0px)' },
    //       '25%': { transform: 'translate(10px, -5px)' },
    //       '50%': { transform: 'translate(0px, -10px)' },
    //       '75%': { transform: 'translate(-10px, -5px)' },
    //       '100%': { transform: 'translate(0px, 0px)' },
    //     },
    //     rotate360: {
    //       '0%': { transform: 'rotate(0deg)' },
    //       '100%': { transform: 'rotate(360deg)' },
    //     },
    //     moveLeft: {
    //       '0%': { transform: 'translateX(-100%)' },
    //       '100%': { transform: 'translateX(0)' },
    //     },
    //     disappear: {
    //       '0%': { width: '100%' },
    //       '100%': { width: '0' },
    //     },
    //     moveLeftError: {
    //       '0%': { transform: 'translateX(100%)' },
    //       '100%': { transform: 'translateX(0)' },
    //     },
    //     disappearError: {
    //       '0%': { width: '100%' },
    //       '100%': { width: '0' },
    //     },

    // },
    boxShadow: {
      '4xl': '0 1px 4px #8080801c'
    }
  },
  plugins: [],
}

