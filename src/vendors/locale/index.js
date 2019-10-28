import VueI18n from 'vue-i18n';

// import enLocaleElement from 'element-ui/lib/locale/lang/en';
// import zhLocaleElement from 'element-ui/lib/locale/lang/zh-CN';

import en from './lang/en-US';
import zh from './lang/zh-CN';
import { getLocalStorage } from '../../utils';
const TYPELANG = {
  EN: 'en-US',
  中: 'zh-CN',
};
/**初始化语言 */
const initLang = '中';
// const messages = {
//   'en-US': Object.assign(en, enLocaleElement),
//   'zh-CN': Object.assign(zh, zhLocaleElement),
// };
const messages = {
  'en-US': Object.assign(en, {}),
  'zh-CN': Object.assign(zh, {}),
};

const config = {
  locale: getLocalStorage('i18n', TYPELANG[initLang]),
  // fallbackLocale: 'zh-CN', //没有英文的时候默认中文语言
  // silentFallbackWarn: true, //抑制警告
  messages, // set locale messages
};
// Create VueI18n instance with options

// console.log(VueI18n, en, zh, i18n);

/**
 *
 * @param {Vue.VueConstructor} Vue
 */
export default function(Vue) {
  Vue.use(VueI18n);
  const i18n = new VueI18n(config);

  function langChange(lang) {
    /**所有的语言值 */
    const langes = Object.values(TYPELANG);

    if (typeof lang === 'undefined') {
      const length = langes.length - 1;

      let index = langes.indexOf(i18n.locale);

      if (index >= length) {
        index = 0;
      } else {
        index++;
      }
      lang = langes[index];
    }

    i18n.locale = lang;

    // setCookie('i18n', lang);
    localStorage.setItem('i18n', lang);

    return Object.keys(TYPELANG)[langes.indexOf(lang)];
  }

  /** @TODO:语言切换 监听I18n如果改变则全局改变 */
  Vue.directive('langeChange', {
    /**
     * @param {HTMLElement} el
     * @param { import('vue').VNodeDirective } binding
     * @param { import('vue').VNode } Vnode
     */
    bind(el, binding, Vnode) {
      Vnode.context[binding.expression] = langChange(config.locale);
      el.addEventListener('click', function() {
        Vnode.context[binding.expression] = langChange();
      });
    },
    unbind(el) {
      el.removeEventListener('click');
    },
  });

  return i18n;
}
