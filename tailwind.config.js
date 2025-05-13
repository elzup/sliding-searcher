/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#121212',
        'dark-secondary': '#333333',
        'dark-accent': '#bb86fc',
        'light-primary': '#ffffff',
        'light-secondary': '#f5f5f5',
        'light-accent': '#6200ee',
      },
    },
  },
  plugins: [],
}
