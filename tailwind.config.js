/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sunny-yellow': '#FFD700',
        'meow-blue': '#4A90E2',
        'purr-gray': '#A9A9A9',
      },
      fontFamily: {
        'cat-font': ['Comic Sans MS', 'cursive'],
      },
    },
  },
  plugins: [],
};
