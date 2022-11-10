module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: [],
  content: ["./src/**/*.{html,js}", "../ui.apps/src/**/*.{html,js}"],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
}