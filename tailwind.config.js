module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'

  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Libre Bodoni', 'serif'],
        serif: ['Noto Serif', 'serif']
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
