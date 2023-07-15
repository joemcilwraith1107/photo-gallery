module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        '300': '300px',
        'screen-80': '80vh'
      },
      width: {
        '300': '300px'
      },
      padding: {
        '1/1': '100%',
      },
      inset: {
        '1/10': '10%',
      },
      gridTemplateColumns: {
        'photo': 'repeat(auto-fill, minmax(300px, 300px))',
      },
      flexBasis: {
        'content': 'content'
      }
    },
  },
  plugins: [],
}
