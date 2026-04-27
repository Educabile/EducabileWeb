const path = require('path')
const { whenProd, POSTCSS_MODES, paths } = require('@craco/craco')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebappWebpackPlugin = require('webapp-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack')
const imageminSvgo = require('imagemin-svgo')
const imageminPngquant = require('imagemin-pngquant')
const imageminGiflossy = require('imagemin-giflossy')

const { NODE_ENV } = process.env

module.exports = function() {
  return {
    style: {
      modules: {
        localIdentName: '[sha1:hash:hex:4]',
      },
      postcss: {
        mode: POSTCSS_MODES.file,
      },
    },
    babel: whenProd(() => ({
      comments: false,
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
      plugins: NODE_ENV !== 'development' && [
        new CompressionPlugin(),
        new ImageminPlugin({
          bail: false,
          cache: true,
          include: /.*\/src\/assets/,
          imageminOptions: {
            plugins: [
              imageminGiflossy({
                interlaced: true,
                optimizationLevel: 3,
              }),
              imageminPngquant({
                speed: 1,
                quality: [0.85, 1],
                optimizationLevel: 5,
                strip: true,
              }),
              imageminSvgo({
                removeViewBox: true,
              }),
            ],
          },
        }),
        new HtmlWebpackPlugin(),
        new WebappWebpackPlugin({
          prefix: 'static/media',
          logo: './public/favicon.png',
          favicons: {
            appName: 'Educabile Srl - an Innovative Startup Company',
            appShortName: 'Educabile Srl',
            theme_color: '#0d47a1',
            lang: 'it-IT',
            start_url: './',
          },
        }),
      ],
      alias: {
        src: path.join(paths.appSrc),
        components: path.join(paths.appSrc, 'components'),
        containers: path.join(paths.appSrc, 'containers'),
        hoc: path.join(paths.appSrc, 'hoc'),
        style: path.join(paths.appSrc, 'style'),
        libs: path.join(paths.appSrc, 'libs'),
        assets: path.join(paths.appSrc, 'assets'),
        vendor: path.join(paths.appSrc, 'vendor'),
        store: path.join(paths.appSrc, 'store'),
        actions: path.join(paths.appSrc, 'store', 'actions'),
        reducers: path.join(paths.appSrc, 'store', 'reducers'),
      },
    },
    jest: {
      configure: {
        snapshotSerializers: ['enzyme-to-json/serializer'],
        moduleNameMapper: {
          '^src(.*)$': '<rootDir>/src/$1',
          '^components(.*)$': '<rootDir>/src/components$1',
          '^containers(.*)$': '<rootDir>/src/containers$1',
          '^hoc(.*)$': '<rootDir>/src/hoc$1',
          '^style(.*)$': '<rootDir>/src/style$1',
          '^libs(.*)$': '<rootDir>/src/libs$1',
          '^assets(.*)$': '<rootDir>/src/assets$1',
          '^vendor(.*)$': '<rootDir>/src/vendor$1',
          '^store(.*)$': '<rootDir>/src/store$1',
          '^actions(.*)$': '<rootDir>/src/store/actions$1',
          '^reducers(.*)$': '<rootDir>/src/store/reducers$1',
        },
        moduleDirectories: ['node_modules', 'src'],
        testPathIgnorePatterns: ['<rootDir>/cypress/', '<rootDir>/node_modules/'],
      },
    },
  }
}
