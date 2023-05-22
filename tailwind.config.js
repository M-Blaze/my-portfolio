/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'lg-phone': '520px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px'
      },
      colors: {
        primary: '#f6f6f6',
        'primary-100': '#f2f2f2',
        positive: '#67a17e',
        'yellow-400': '#FFC017'
      }
    },
  },
  plugins: [],
}
