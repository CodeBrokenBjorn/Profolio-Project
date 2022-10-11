const tailwindcss =require('tailwindcss');
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    backgroundImage: {
      'backMain': "url('../image/backgroundStuff.png')",
    },
    extend: {
        
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
