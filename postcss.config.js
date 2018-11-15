module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('postcss-brand-colors'),
    require('postcss-resemble-image').default,
    require('postcss-easing-gradients'),
    // TODO: Load every font we use here
    require('postcss-font-magician'),
    require('postcss-calc'),
    require('postcss-pseudo-content-insert'),
    require('postcss-unique-selectors'),
    require('postcss-ordered-values'),
    require('postcss-normalize-url'),
    require('postcss-normalize-charset'),
    require('postcss-convert-values'),
    require('postcss-merge-rules'),
    require('postcss-will-change-transition'),
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
