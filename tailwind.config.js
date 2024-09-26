/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lightblue: '#ADD8E6',
        'custom-blue': 'rgba(89, 59, 246, 0.71)'
      }
    },
  },
  plugins: [],
}

