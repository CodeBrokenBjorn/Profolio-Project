const tailwindcss =require('tailwindcss');
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    backgroundImage: {
      'backMain': "url('../image/backgroundStuff.png')",
      'secondBackMian': "url('../image/backSTud.png')",
      'seconadBackstuff': "url('../image/seconadBackstuff.png')",
      'thirdBackMian': "url('../image/Backgroundstuff.jpg')",
    },
    extend: {
        
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
