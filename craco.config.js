const { POSTCSS_MODES } = require('@craco/craco')

module.exports = function({ env, paths }) {
  return {
    style: {
      postcss: {
        mode: POSTCSS_MODES.file,
      },
    },
  }
}
