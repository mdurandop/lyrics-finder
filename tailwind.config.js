/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          transparent: 'transparent',
          main: '#7598A6',
          accent: '#46676C',
          bg: '#070B09',
          'input-black': '#101412'
        },
      },
    },
    plugins: [],
  }
  