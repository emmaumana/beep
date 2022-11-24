/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3d4950',
        'primary-light': '#7582dc',
        secondary: '#ff4993',
        muted: '#e1e2e2',
        accent: '#4f45e4',
        page: '#e7f0fb'
      },
      backgroundImage: {
        gradient: 'radial-gradient(circle, rgba(109,142,254,1) 30%, rgba(193,246,241,1) 100%)'
      }
    },
    fontFamily: {
      primary: ['Poppins', 'sans-serif'],
      secondary: ['Chirp', 'serif'],
      logo: ['Audiowide']
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
