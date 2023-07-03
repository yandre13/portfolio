/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
      },
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: '#16A085',
        secondary: '#999',
        textTitle: '#1a202c',
        textBody: '#4a5568',
      },
      screens: {
        md: '640px',
        // => @media (min-width: 640px) { ... }
        lg: '992px',
      },
    },
  },
  plugins: [],
}
