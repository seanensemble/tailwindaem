// module.exports = {
//   future: {
//     removeDeprecatedGapUtilities: true,
//     purgeLayersByDefault: true,
//     defaultLineHeights: true,
//     standardFontWeights: true
//   },
//   purge: [],
//   content: ["./src/**/*.{html,js}", "../ui.apps/src/**/*.{html,js}", "./src/title.html", "./title.html"],
//   theme: {
//     extend: {}
//   },
//   variants: {},
//   plugins: []
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "../ui.apps/src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}