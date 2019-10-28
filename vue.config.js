const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  // https://cli.vuejs.org/config/#publicpath
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: true,
  devServer: {
    port: 4141,
    host: '0.0.0.0',
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    proxy: {
      '/api': {
        target: 'http://106.12.19.27:9999',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/v1',
        },
      },
      // '/baidufanyi': {
      //   target: 'http://api.fanyi.baidu.com',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/baidufanyi': '/api/trans/vip/translate',
      //   },
      // },
    },
  },
  transpileDependencies: [
    // './node_modules/_aos@3.0.0-beta.6@aos/src/js/helpers/elements.js',
  ],
  configureWebpack: {
    resolve: {
      alias: {
        src: '@',
        assets: '@/assets',
        components: '@/components',
        pages: '@/components/pages',
        utils: '@/utils',
        api: '@/apis',
        services: '@/services',
        models: '@/models',
      },
    },
  },
  chainWebpack: config => {
    // #region 忽略生成环境打包的文件
    if (process.env.NODE_ENV === 'production') {
      // #region 启用GZip压缩
      config
        .plugin('compression')
        .use(CompressionPlugin, {
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8,
          cache: true,
        })
        .tap(args => {});

      // #endregion

      // #region 启用第三方cdn加速
      var externals = {
        vue: 'Vue',
        axios: 'axios',
        'element-ui': 'ELEMENT',
        'vue-router': 'VueRouter',
        // vuex: 'Vuex',
      };
      // https://webpack.docschina.org/configuration/externals/#src/components/Sidebar/Sidebar.jsx

      config.externals(externals);
      const cdn = {
        css: [
          // element-ui css
          '//unpkg.com/element-ui/lib/theme-chalk/index.css',
        ],
        js: [
          // vue
          '//cdn.staticfile.org/vue/2.5.22/vue.min.js',
          // vue-router
          '//cdn.staticfile.org/vue-router/3.0.2/vue-router.min.js',
          // vuex
          // '//cdn.staticfile.org/vuex/3.1.0/vuex.min.js',
          // axios
          '//cdn.staticfile.org/axios/0.19.0-beta.1/axios.min.js',
          // element-ui js
          '//unpkg.com/element-ui/lib/index.js',
        ],
      };

      config.plugin('html').tap(args => {
        args[0].cdn = cdn;

        return args;
      });
      // #endregion
    }
    // #endregion
  },
};
