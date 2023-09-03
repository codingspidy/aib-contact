/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'network-anim': "url('/images/network-background.jpg')",
      },
      colors: {
        primary: "#0C134F",
        'primary-light': "#3F72AF",
        secondary: "#E57C23",
        'secondary-light': "#D4ADFC"
      }
    },
  },
  plugins: [],
}

// #112D4E
// #3F72AF
// #DBE2EF
// #F9F7F7
// #E57C23

// #0C134F
// #1D267D


// 1st
// #14274E
// #F1F6F9
// #394867
// #9BA4B4