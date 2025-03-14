/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
     
        "primary": '#039B9B',
        'primary-dark': '#028787',
        "primary-light":"#6FCFCF",
      },
      height:{
        '600':"510px"
      }
    },
  },
  plugins: [],
}
