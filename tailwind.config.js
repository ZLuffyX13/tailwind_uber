/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
  "./src/**/*.{html,js,ts,jsx,tsx}",
],
 preserveClasses: [
    'bg-uber',
    'bg-city',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'uber': "url('/src/assets/bguber.png')",
        'city': "url('/src/assets/bg-city.png')",
      },
    },
  },
  plugins: [],
}