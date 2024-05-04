/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {}
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui')
  ],
  daisyui: {
    themes: ['light', 'night', 'lemonade']
  }
}
