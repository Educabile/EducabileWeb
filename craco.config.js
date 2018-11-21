const { whenProd, POSTCSS_MODES } = require('@craco/craco')

module.exports = function() {
  return {
    style: {
      postcss: {
        mode: POSTCSS_MODES.file,
      },
    },
    babel: whenProd(() => ({
      plugins: [
        '@babel/plugin-transform-react-constant-elements',
        '@babel/plugin-transform-react-inline-elements',
        'babel-plugin-transform-react-remove-prop-types',
        [
          'babel-plugin-transform-imports',
          {
            'react-materialize': {
              transform: 'react-materialize/lib/${member}',
              preventFullImport: true,
            },
            'react-router-dom': {
              transform: 'react-router-dom/${member}',
              preventFullImport: true,
            },
            'react-router-transition': {
              transform: 'react-router-transition/lib/${member}',
              preventFullImport: true,
            },
          },
        ],
      ],
    })),
  }
}
