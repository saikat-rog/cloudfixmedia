// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'regular': ['League Spartan', 'sans-serif']
      },
      colors: {
        'purple': '#6264F7',
        'buttonPrimaryColor': '#8181ed',//button-primary-color
        'buttonSecondaryColor': '#f2f3f0',//button-secondary-color
        'textColorLarge': '#5c5cbb'//large-type-text-color
      }
    },
  },
  plugins: [],
}
