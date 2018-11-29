const path = require('path')
const { whenProd, POSTCSS_MODES, paths } = require('@craco/craco')
// TODO: It's not working as of now! :(
var DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin')

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
          },
        ],
        'babel-plugin-transform-react-class-to-function',
      ],
    })),
    webpack: {
      resolve: {
        plugins: [new DirectoryNamedWebpackPlugin()],
      },
      alias: {
        components: path.join(paths.appSrc, 'components'),
        containers: path.join(paths.appSrc, 'containers'),
        hoc: path.join(paths.appSrc, 'hoc'),
        style: path.join(paths.appSrc, 'style'),
        libs: path.join(paths.appSrc, 'libs'),
        assets: path.join(paths.appSrc, 'assets'),
        vendor: path.join(paths.appSrc, 'vendor'),
      },
    },
  }
}
