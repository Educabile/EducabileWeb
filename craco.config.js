const path = require('path')
const { whenProd, POSTCSS_MODES, paths } = require('@craco/craco')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebappWebpackPlugin = require('webapp-webpack-plugin')

// TODO: It's not working as of now! :(
var DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

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
      plugins: [
        new HtmlWebpackPlugin(),
        new WebappWebpackPlugin({
          logo: './public/favicon.png',
          // This is going to create a custom manifest.json
          // Refer to this documentation for more information : https://github.com/itgalaxy/favicons#usage
          favicons: {
            appName: 'Educabile Srl - an Innovative Startup Company',
            appShortName: 'Educabile Srl',
            theme_color: '#0d47a1',
            lang: 'it-IT',
            start_url: './',
          },
        }),
      ],
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
    jest: {
      configure: {
        snapshotSerializers: ['enzyme-to-json/serializer'],
        moduleNameMapper: {
          '^components(.*)$': '<rootDir>/src/components$1',
          '^containers(.*)$': '<rootDir>/src/containers$1',
          '^hoc(.*)$': '<rootDir>/src/hoc$1',
          '^style(.*)$': '<rootDir>/src/style$1',
          '^libs(.*)$': '<rootDir>/src/libs$1',
          '^assets(.*)$': '<rootDir>/src/assets$1',
          '^vendor(.*)$': '<rootDir>/src/vendor$1',
        },
        moduleDirectories: ['node_modules', 'src'],
      },
    },
  }
}
