/*
 * @Author: lich
 * @Date: 2019-09-03 00:25:36
 * @Last Modified by: lich
 * @Last Modified time: 2019-09-04 13:57:14
 * @Done:兼容性
 * 通过对AOS的理解 
 * AOS通过  window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver
    来监听节点的变化
    当有新的节点时 将其加入队列中
    所以当不支持该方式时 需要手动去调用
 *@TODO:transform下position：fixed失效
 */
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init({
  // offset: 240, // offset (in px) from the original trigger point
});
// window.AOS = AOS;
// window.AOS.init({
//   // Global settings:
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: 'aos-init', // class applied after initialization
//   animatedClassName: 'aos-animate', // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 1000, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
// });
// import observer from 'aos/src/js/libs/observer';
// console.log(observer);

/**aos不支持时 禁用方法  IE 9 ixa classList 不支持*/
// const disable = function() {
//   let options = {
//     initClassName: 'aos-init', // class applied after initialization
//     animatedClassName: 'aos-animate', // class applied on animation
//   };

//   let $aosElements = (() => {
//     const elements = document.querySelectorAll('[data-aos]');

//     return Array.prototype.map.call(elements, node => ({ node }));
//   })();

//   console.log($aosElements);

//   $aosElements.forEach(function(el) {
//     console.log(el.node, el.node.removeAttribute);

//     el.node.removeAttribute('data-aos');
//     el.node.removeAttribute('data-aos-easing');
//     el.node.removeAttribute('data-aos-duration');
//     el.node.removeAttribute('data-aos-delay');

//     if (options.initClassName) {
//       el.node.classList.remove(options.initClassName);
//     }

//     if (options.animatedClassName) {
//       el.node.classList.remove(options.animatedClassName);
//     }
//   });
// };
// polyfillsAos IE 9 ixa classList 不支持
// https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList
if (!('classList' in document.documentElement)) {
  Object.defineProperty(HTMLElement.prototype, 'classList', {
    get: function() {
      var self = this;

      function update(fn) {
        return function(value) {
          var classes = self.className.split(/\s+/g),
            index = classes.indexOf(value);

          fn(classes, index, value);
          self.className = classes.join(' ');
        };
      }

      return {
        add: update(function(classes, index, value) {
          if (!~index) {
            classes.push(value);
          }
        }),

        remove: update(function(classes, index) {
          if (~index) {
            classes.splice(index, 1);
          }
        }),

        toggle: update(function(classes, index, value) {
          if (~index) {
            classes.splice(index, 1);
          } else {
            classes.push(value);
          }
        }),

        contains: function(value) {
          return Boolean(self.className.split(/\s+/g).indexOf(value) > -1);
        },

        item: function(i) {
          return self.className.split(/\s+/g)[i] || null;
        },
      };
    },
  });
}

function getMutationObserver() {
  return (
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver
  );
}
/**如果不支持  MutationObserver*/
function isSupported() {
  return Boolean(getMutationObserver());
}
export default {
  /**
   *
   * @param { Vue.VueConstructor } Vue
   * @param {*} options
   */
  install(Vue) {
    let config = {};

    /**如果不支持  MutationObserver*/
    if (!isSupported()) {
      config = {
        inserted() {
          AOS.refreshHard();
        },
      };
    }
    Vue.directive('polyfillsAos', config);
  },
};
