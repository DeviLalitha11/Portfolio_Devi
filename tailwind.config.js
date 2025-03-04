/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A', // Dark background
        highlight: '#38BDF8', // Blue highlight color
      },
    },
  },
  plugins: [],
};
