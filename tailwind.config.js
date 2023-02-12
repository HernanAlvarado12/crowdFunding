/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './model.js'],
  theme: {
    extend: {
      screens: {
        'sm': '900px',
        'reverse': {'max': '889px'}
      },
      spacing: {
        '0.5': '0.3rem',
        '1': '1rem',
        '1.5': '1.5rem',
        '2': '2rem',
        '3': '3rem',
        '4': '4rem',
        '5': '5rem',
        '6': '6rem',
        '8': '8rem',
        '10': '10rem',
        '50': '50%',
        '85': '85%',
        '90': '90%'
      },
      fontSize: {
        'xs': '1.2rem',
        'sm': '1.4rem',
        'xsm': '1.6rem',
        'md': '1.8rem',
        'lg': '2.4rem',
        'base': '3.2rem',
        'xl': '4.2rem'
      },
      translate: {
        '5': '-5rem',
        '12': '-12rem',
        '50': '-50%'
      },
      borderRadius: {
        'sm': '0.6rem',
        'md': '0.8rem',
        'lg': '1rem'
      },
      borderColor: {
        'white': 'hsl(0, 0%, 82%)'
      },
      boxShadow: {
        'xs': '0 0.2rem 1rem rgb(0, 0, 0, 0.2)',
        'sm': '0 0.2rem 2rem rgb(0, 0, 0, 0.5)'
      },
      inset: {
        '2.5': '-2.5rem'
      },
      letterSpacing: {
        'widest': '0.3rem'
      },
      colors: {
        'gray': 'hsl(0, 0%, 48%)',
        cyan: {
          DEFAULT: 'hsl(176, 50%, 47%)',
          '500': 'hsl(176, 72%, 28%)'
        },
      },
      backgroundImage: {
        'header': "url('../assets/hero-mobile.jpg')",
        'header-sm': "url('../assets/hero-desktop.jpg')"
      }
    },
  },
  plugins: [],
}
