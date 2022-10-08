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
        'blob-spin': 'blob ease-in-out infinite 8s, spin 100s linear infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { borderRadius: '24% 76% 35% 65% / 27% 36% 64% 73%'},
          '50%': {borderRadius: '76% 24% 33% 67% / 68% 55% 45% 32%'},
        },
        spin: {
          '0%': { transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(359deg)'},
        }
      }
    },
  },
  plugins: [],
}