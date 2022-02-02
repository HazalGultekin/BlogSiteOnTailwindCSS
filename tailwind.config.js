module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
/* colors ve spacing içinde yazdıklarımız tailwind'de olmayan kendi isteğime göre yazmış olduğum şeylerdir*/ 
      colors: {
        twitter:'blue'
      },
      spacing: {
        '15':'3.75rem'
      },
      zIndex: {
        '-1':'-1'
      },
    },
  },
  plugins: [],
}
