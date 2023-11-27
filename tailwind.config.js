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
        '90': '90vh'
      },
      maxWidth: {
        '90': '90vw'
      },
      padding: {
        '1/1': '100%',
      },
      inset: {
        '1/10': '10%',
      },
      gridTemplateColumns: {
        'photo': 'repeat(auto-fill, minmax(300px, 300px))',
        '12': 'repeat(12, minmax(0, 1fr))',
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
