module.exports = {
  plugins: [
    require('postcss-easy-import')({
      prefix: '_'
    }),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-each'),
    require('postcss-inline-svg'),
    require('postcss-extend'),
    require('postcss-nested'),
  ]
}


// module.exports = {
//   plugins: {
//       'postcss-easy-import': {prefix: '_'},
//       'tailwindcss': {},
//       'autoprefixer': {},
//       'postcss-each': {},
//       'postcss-inline-svg': {},
//       'postcss-extend': {},
//       'postcss-nested': {},
//   }
// };