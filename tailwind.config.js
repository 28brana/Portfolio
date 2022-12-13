/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        info: '#1E47FF',
        subtitle: '#646464',
      },
    },
  },
  plugins: [],
}