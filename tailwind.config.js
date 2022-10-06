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
      animation: {
        'blob': 'blob ease-in-out infinite 8s',
      },
      keyframes: {
        blob: {
          '0%, 100%': { borderRadius: '65% 100% 80% 100%'},
          '25%': {borderRadius: '100% 80% 100% 65%'},
          '50%': { borderRadius: '80% 100% 65% 100%'},
          '75%': {borderRadius: '100% 65% 100% 80%'},
        },
      }
    },
  },
  plugins: [],
}