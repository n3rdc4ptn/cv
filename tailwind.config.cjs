/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontSize: {
      base: '10px',
      lg: ['12px', '14px'],
      xl: ['14px', '20px'],
      "2xl": ['20px', '28px'],
      "3xl": ['28px', '34px']
    },
    extend: {},
  },
  plugins: [],
}
