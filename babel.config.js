const plugins = [];

const IS_PROD = process.env.NODE_ENV === 'production';

console.log(IS_PROD, process.env.NODE_ENV);
if (IS_PROD) {
  plugins.unshift(['transform-remove-console']),
    {
      exclude: ['error', 'warn'],
    };
}
module.exports = {
  presets: [['@vue/app', { polyfills: ['es6.promise', 'es6.symbol'] }]],
  plugins: plugins,
};
