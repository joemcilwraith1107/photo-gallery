/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      height: {
        '300': '300px',
      },
      width: {
        '300': '300px',
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
      gridTemplateColumns: {
        'photo': 'repeat(auto-fill, minmax(300px, 300px))',
      },
      flexBasis: {
        'content': 'content'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}