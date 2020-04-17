import Axios from 'axios';
import Cache from '@/utils/cache';
/**@type { import('node_modules/@types/axios/node_modules/axios/index').AxiosStatic} axios */
const axios = Axios.create();

// const defaultUrl = '/api';
// axios.defaults.baseURL = 'http://rz.talkingcake.cn/api'
// 请求拦截器

export const cache = new Cache();

// cache.isLocal = true;

/**@type {import("axios/node_modules/axios/index").CancelTokenStatic} */
const CancelToken = Axios.CancelToken;

function createKey(config) {
  var params = config.params ? JSON.stringify(config.params) : '';
  var language = config.headers.language;

  return config.url + params + language;
}

axios.interceptors.request.use(
  config => {
    /**如果有i18n设置语言 */
    if (localStorage.i18n) {
      config.headers.language = { 'zh-CN': 'cn', 'en-US': 'en' }[
        localStorage.i18n
      ];
    }
    if (config.cache) {
      let source = CancelToken.source();

      config.cancelToken = source.token;
      let data = cache.get(createKey(config), undefined);

      if (data !== null) {
        source.cancel(data);
      }
    }

    return config;
  },
  error => Promise.reject(error),
);

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code !== 1) {
      // 提示错误的loading
      return response.data.msg;
    }
    // 只缓存get请求
    if (response.config.method === 'get' && response.config.cache) {
      // 缓存数据 并将当前时间存入 方便之后判断是否过期
      cache.set(createKey(response.config), response.data.data);
    }

    return response.data.data;
  },
  error => {
    // 请求拦截器中的source.cancel会将内容发送到error中
    // 通过axios.isCancel(error)来判断是否返回有数据 有的话直接返回给用户
    if (Axios.isCancel(error)) {
      return Promise.resolve(error.message);
    }

    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          console.log(`错误请求`);
          break;
        case 401:
          console.log(`未授权请重新登陆`);
          break;
        case 403:
          console.log(`拒绝访问`);
          break;
        case 404:
          console.log(`请求错误`);
          break;
        case 405:
          console.log(`请求方法未允许`);
          break;
        case 408:
          console.log(`请求超时`);
          break;
        case 501:
          console.log(`网络未实现`);
          break;
        case 502:
          console.log(`网络错误`);
          break;
        case 503:
          console.log(`服务器不可用`);
          break;
        case 504:
          console.log(`网络超时`);
          break;
        case 505:
          console.log(`版本不支持该请求`);
          break;
        default:
          console.log(`default`);
          break;
      }
    } else {
      console.log(`连接错误${error.response.status}`);
    }

    return Promise.reject('');
  },
);

// axios.post 请求

export default {
  post: async (path, data = {}, config = {}) => {
    if (config.normal) {
      config = {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      };
    }

    return await axios.post(path, data, config);
  },
  get: async (path, params = {}, cache = false) => {
    return await axios.get(path, { params, cache: cache });
  },
};
