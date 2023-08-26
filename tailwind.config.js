/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '10rem',
      },
    },
    extend: {
      colors: {
        info: '#1E47FF',
        subtitle: '#646464',
        primary:'#222A36',
        secondary:'#1C232D',
        main:'#676CDA'
      },
    },
  },
  plugins: [],
}