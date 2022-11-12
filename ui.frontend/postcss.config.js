module.exports = {
  plugins: [
    require('postcss-easy-import')({
      prefix: '_'
    }),
    require('tailwindcss'),
    // require('tailwindcss')({config: "./tailwind.config.js"}),
    require('autoprefixer'),
    require('postcss-each'),
    require('postcss-inline-svg'),
    require('postcss-extend'),
    require('postcss-nested'),
  ]
}


