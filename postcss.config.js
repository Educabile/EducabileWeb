module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('postcss-brand-colors'),
    require('postcss-assets')({
      basePath: 'src/assets/',
      loadPaths: ['img/'],
      relative: true,
    }),
    require('postcss-easing-gradients'),
    require('postcss-font-magician')({
      variants: {
        Raleway: {
          '400': ['woff, eot, woff2'],
        },
        Roboto: {
          '400': ['woff, eot, woff2'],
        },
      },
      foundries: ['google'],
    }),
    require('postcss-calc'),
    require('postcss-pseudo-content-insert'),
    require('postcss-unique-selectors'),
    require('postcss-ordered-values'),
    require('postcss-normalize-url'),
    require('postcss-normalize-charset'),
    require('postcss-convert-values'),
    require('postcss-merge-rules'),
    require('postcss-will-change-transition'),
    require('webpcss').default({}),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    }),
  ],
}
