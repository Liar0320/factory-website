// import Vue from "Vue";
// // 注册一个全局自定义指令 `v-focus`
// Vue.directive("focus", {
// 	// 当被绑定的元素插入到 DOM 中时……
// 	inserted: function (el) {
// 		// 聚焦元素
// 		el.focus();
// 	}
// });
// https://www.jianshu.com/p/89a05706917a       关于vue.use的理解
// import loading from '@/components/common/loading';
import lchTimeline from './components/timeItem/main';
import lchTimelineItem from './components/timeItem/timeitem';
import multipleLangeInput from './components/multipleLangeInput';
// import multipleLangeInput from './components/multipleLangeInput/index';
// import elements from 'aos/src/js/helpers/elements';

export const utilsComponent = {
  /**
   *
   * @param { Vue } Vue
   * @param {*} options
   */
  install(Vue, options) {
    Vue.component('lchTimeline', lchTimeline);
    Vue.component('lchTimelineItem', lchTimelineItem);
    Vue.component('multipleLangeInput', multipleLangeInput);

    // Vue.component('Loading', loading);
    // Vue.component('multipleLangeInput', multipleLangeInput);
    console.log(options + 'options');
  },
};

import EventSystem from '@/utils/event';

export const utilsDec = {
  /**
   *
   * @param {Vue.VueConstructor} Vue
   * @param {*} options
   */
  install(Vue, options) {
    console.log(options + 'options');
    /**防止事件的冒泡 */
    Vue.directive('stopTouchMove', {
      bind: function(e) {
        e.addEventListener('touchmove', function(e) {
          e.preventDefault();
        });
      },
      // unbind: function (e) {
      // 	e.addEventListener('touchmove', function (e) {
      // 		e.stopPropagation();
      // 	});
      // },
    });
    /**给节点绑定回到顶部的操作 */
    Vue.directive('lichBackTop', {
      bind: function() {
        /**@type {import('vue').VNode} */
        var vNode = arguments[2];
        /*
         *定位页面目标元素到可视区域的减速滑动
         *作用类似却优于a标签锚点
         *@param targetPageY 目标元素位置(pageY)
         */

        function slideTo(targetPageY) {
          var timer = setInterval(function() {
            var currentY =
              document.documentElement.scrollTop || document.body.scrollTop; //当前及滑动中任意时刻位置
            var distance =
              targetPageY > currentY
                ? targetPageY - currentY
                : currentY - targetPageY; //剩余距离
            var speed = Math.ceil(distance / 10); //每时刻速度

            if (currentY == targetPageY) {
              clearInterval(timer);
            } else {
              window.scrollTo(
                0,
                targetPageY > currentY ? currentY + speed : currentY - speed,
              );
            }
          }, 10);
        }
        vNode['elm'].addEventListener('click', function() {
          // window.scrollTo(0, 0);
          slideTo(0);
          // window.scrollY();
        });
        console.log(vNode, 'lich-back-top');
      },
      unbind() {
        /**@type {import('vue').VNode} */
        var vNode = arguments[2];

        vNode['elm'].removeEventListener('click', null);
      },
    });
    /**修复 position：fixed在transform下受到影响   将其transform置空
     * 需要编写一个 class类简化处理 transform:none;transition-duration:0
     * 这边如果节点不销毁是否存在内存泄漏
     */
    Vue.directive('fixFixedTransition', {
      inserted() {
        /**@type {import('vue').VNode} */
        var vNode = arguments[2];
        /**@type {import('vue').VNodeDirective} */
        var VNodeDirective = arguments[1];

        /** @type { Array<{node:HTMLElement}> } */

        const elements = () => {
          const elements = document.querySelectorAll('[data-aos]');

          return Array.prototype.map.call(elements, node => ({ node }));
        };

        var $aosElements = elements();

        function watchfnc(newValue) {
          if (newValue) {
            $aosElements.forEach(item => {
              item.node.classList.add('fixFixedTransition');
            });
          } else {
            setTimeout(() => {
              $aosElements.forEach(item => {
                item.node.classList.remove('fixFixedTransition');
              });
            }, 400);
          }
        }

        if (VNodeDirective.expression) {
          vNode.context.$watch(VNodeDirective.expression, watchfnc);
        } else {
          /**兼容绑定在 el-image上的 取其实例 */
          vNode.componentInstance.$watch('showViewer', watchfnc);
        }
        // console.log(1, arguments);
        // vNode.componentInstance.$destroy(() => {
        //   console.log(arguments);
        // });
      },
      unbind() {
        // console.log('unbind');
      },
    });
    /**提供一个鼠标移动参数 */
    Vue.directive('eventSystem', {
      inserted(el, vNodeDirective, vNode) {
        // /**@type {import('vue').VNode} */
        // var vNode = arguments[2];
        // /**@type {import('vue').VNodeDirective} */
        // var VNodeDirective = arguments[1];

        const eventSystem = new EventSystem(el);

        el.setAttribute('ondragstart', 'return false;');

        eventSystem.on('mousemovedone', function(offset) {
          console.log(offset);
          vNode.context[vNodeDirective.expression](offset);
        });
      },
      unbind() {
        // console.log('unbind');
      },
    });
    /** 绑定点击路由跳转的指令*/
    // Vue.directive('lichRouterGo', {
    //   inserted(el) {
    //     el.addEventListener('click', e => {
    //       e.stopPropagation();
    //       let path = el.getAttribute('v-lich-router-go');

    //       Vue.$router.push(path);
    //     });
    //   },
    //   unbind(el) {
    //     el.removeEventListener('click');
    //     // console.log('unbind');
    //   },
    // });
    // Vue.directive(
    //   'childAsyncHeight',
    //   /**
    //    * @param
    //    * @param
    //    * @param { Vue.VNode }
    //    */
    //   function(a, b, VNode) {
    //     /** @type {import('vue').VNode} */
    //     var f = arguments[2];
    //   },
    // );
  },
};
