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
        'screen-80': '80%'
      },
      width: {
        '300': '300px',
        'screen-80': '80%'
      },
      maxHeight: {
        'screen-80': '80vh'
      },
      maxWidth: {
        'screen-80': '80vw'
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
      gridTemplateRows: {
        '12': 'repeat(12, minmax(0, 1fr))'
      },
      gridRow: {
        'span-11': 'span 11 / span 11'
      },
      flexBasis: {
        'content': 'content'
      }
    },
  },
  plugins: [],
}
