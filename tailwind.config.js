/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'customCream': '#f2ebe3',
      'customDarkCyan': '#3c8067',
      'customDarkBlue' : '#1c232b',
      'customDarkGrayBlue' : '#6c7289'
    }
  },
  plugins: [],
}

