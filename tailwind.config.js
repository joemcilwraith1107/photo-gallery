module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      padding: {
        '1/1': '100%',
      },
      animation: {
        fadeIn: 'fadeIn 1s',
        fadeOut: 'fadeOut 1s',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.5' },
        },
        fadeOut: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '0' }, 
        },
      },
      inset: {
        '1/10': '10%',
      },
    },
  },
  plugins: [],
}
