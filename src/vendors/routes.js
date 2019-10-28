import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/app/home',
    },
    {
      path: '/app',
      name: 'app',
      component: () => import('components/app.vue'),
      redirect: '/app/home',
      children: [
        {
          path: 'home',
          name: 'app.home',
          component: () => import('pages/home.vue'),
        },
        {
          path: 'aboutUs',
          name: 'app.aboutUs',
          component: () => import('pages/aboutUs.vue'),
          children: [
            {
              path: 'index',
              name: 'app.aboutUs.index',
              component: () => import('pages/aboutUs/index.vue'),
            },
            {
              path: 'histroy',
              name: 'app.aboutUs.histroy',
              component: () => import('pages/aboutUs/company.histroy.vue'),
            },
          ],
        },
        {
          path: 'products',
          name: 'app.products',
          component: () => import('pages/products.vue'),
        },
        {
          path: 'consult',
          name: 'app.consult',
          component: () => import('pages/consult.vue'),
          children: [
            {
              path: 'news',
              name: 'app.consult.news',
              component: () => import('pages/consult/company.news.vue'),
            },
            {
              path: 'newsDetial/:id',
              name: 'app.consult.news.detial',
              component: () => import('pages/consult/company.news.detial.vue'),
              children: [],
            },
          ],
        },
        {
          path: 'customer',
          name: 'app.customer',
          component: () => import('pages/customer.vue'),
        },
        {
          path: 'faqs',
          name: 'faqs',
          component: () => import('pages/faqs.vue'),
        },
        {
          path: 'concatUs',
          name: 'app.concatUs',
          component: () => import('pages/concatUs.vue'),
          children: [
            {
              path: 'info',
              name: 'app.concatUs.info',
              component: () => import('pages/concatUs/concatUs.info.vue'),
            },
            {
              path: 'email',
              name: 'app.consult.email',
              component: () => import('pages/concatUs/concatUs.email.vue'),
            },
          ],
        },
      ],
    },
    {
      path: '*',
      redirect: 'app/home',
    },
  ],
});

// 全局守卫
/* eslint-disable */
router.beforeEach((to, from, next) => {
  // const isLogin = localStorage.accessToken ? true : false; // 获取token
  // const LoginFlag = localStorage.isLogin == 'true' ? true : false;  // 获取登录状态

  // if (to.path == "/login") {
  //   next();
  // } else {
  //   if (isLogin && LoginFlag) {
  //     iView.LoadingBar.start();
  //     next();
  //     return true;
  //   }
  //   router.push('/login');
  // }
  next();
  window.scrollTo(0,0);
});

router.afterEach(route => {
  // iView.LoadingBar.finish();
});

export default router;
