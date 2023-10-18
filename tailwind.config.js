/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#312f51',
        header: '#2a2841',
        body: '#25243a',
      }
    },
  },
  plugins: [
    require ('@tailwindcss/line-clamp')
  ],
}

