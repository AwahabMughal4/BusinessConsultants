/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#00CFFF',
        'navy-blue': '#1B3A57',
      },
      backgroundImage: {
        'header-gradient': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
