/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      placeholderColor: {
        'teal-grey': "rgb(138, 194, 189)",
        'dark-blue-grey': "rgb(38, 56, 87)",
      },
      backgroundColor: {
        'blue-grey': 'rgb(14, 21, 33)',
        'creamyyellow-light': '#f0f3bd',
        'creamyyellow-normal': '#e9ed9f',
        'creamyyellow-dark': '#d9de7c',
        'creamyblue-light': '#19b2bf',
        'creamyblue-normal': '#00717B',
        'creamyblue-dark': '#01494f',
      },
      animation: {
        'blob': 'blob ease-in-out infinite 8s',
        'blob-spin': 'blob ease-in-out infinite 8s, spin 100s linear infinite',
        'wiggle': 'wiggle ease-in-out 1s',
      },
      keyframes: {
        blob: {
          '0%, 100%': { borderRadius: '24% 76% 35% 65% / 27% 36% 64% 73%'},
          '50%': {borderRadius: '76% 24% 33% 67% / 68% 55% 45% 32%'},
        },
        spin: {
          '0%': { transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(359deg)'},
        },
        wiggle: {
          '0%': { transform: 'rotate(0deg)'},
          '15%': { transform: 'rotate(5deg)'},
          '25%': { transform: 'rotate(-10deg)'},
          '50%': { transform: 'rotate(10deg)'},
          '75%': { transform: 'rotate(-5deg)'},
          '100%': {transform: 'rotate(0deg)'},
        },
      }
    },
  },
  plugins: [],
}