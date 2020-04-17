/**
 * @Done: 每个页面之间的切换动画  实现下滑动画 采用 AOS
 * @Done: 解决AOS下的定位Fixed出错
 * @Warn: 解决如果引入的依赖需要进行编译的化 https://github.com/staven630/vue-cli3-config   添加IE兼容  但是不完美 应该采用 只编译该依赖 而不是全部引入
 * @TODO: IE9上 element-ui的 privew图片定位出错
 * @Done: IE下使用原生的路由跳转无法出发vue跳转  https://blog.csdn.net/iorn_mangg/article/details/87856063
 * @TODO: el-pagination在小分辨率下会溢出
 * @TODO: 不同位置语言切换无法同步
 */
// import '@babel/polyfill';
import Vue from 'vue';
import App from './index.vue';
import router from './vendors/routes';
import axios from './vendors/axios';
// import BMap from 'vue-baidu-map';
// Vue.use(BMap, { ak: 'y3Fa7dIgukWM3vWWo87vKMcwP5l0SUxL' });

import './mocks/cache';

import AOSVUE from './vendors/aos';
AOSVUE.install(Vue);

import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import 'element-ui/lib/theme-chalk/display.css';

// import ElementLocale from 'element-ui/lib/locale'

import I18n from './vendors/locale';
var i18n = I18n(Vue);

Vue.use(ElementUI);

// Vue.use(ElementUI, {
//   i18n: (key, value) => I18n.t(key, value),
// });

import { utilsComponent, utilsDec } from './directives/index';
utilsComponent.install(Vue);
utilsDec.install(Vue);

// import { mockXHR } from './mocks';
// mockXHR();

/**引入样式表 */
import './assets/content/bootstrap.scss';
import './assets/content/utils.scss';
import './assets/content/app.scss';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

var app = new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app');

document.title = app.$t('companyInfo.name');
