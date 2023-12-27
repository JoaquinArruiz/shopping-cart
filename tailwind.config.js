/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        rama:{
          darker: '#161A30',
          dark: '#31304D',
          light: '#B6BBC4',
          lightest: '#F0ECE5',
        }
      },
    },
    
  },
  plugins: [],
}

