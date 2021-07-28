module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      yellow: '#F2CD13',
      light: '#F2DA91',
      darkLight: '#F29F05',
      orange: '#D96704',
      lightRed: '#BF4804',
      red: '#D93D04',
      white: 'white',
      black: 'black',
      lightGrey: '#868e96',
      darkGrey: '#707070',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '400px': '400px',
      'full': '100%',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      fontSize: {
        smallMedium: '1.6rem',
        medium: '2rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}