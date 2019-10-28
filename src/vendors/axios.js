import Axios from 'axios';
/**@type { import('node_modules/_axios@0.19.0@axios/index').AxiosStatic} axios */
const axios = Axios.create();

const defaultUrl = '/api';
// axios.defaults.baseURL = 'http://106.12.19.27:8000/';
// axios.defaults.baseURL = 'http://rz.talkingcake.cn/api'
// 请求拦截器

axios.interceptors.request.use(
  config => {
    // 如果有token 那么我们要带上token请求
    // if (localStorage.accessToken) {
    //   config.headers.accessToken = localStorage.accessToken;
    // }
    /**如果有i18n设置语言 */
    if (localStorage.i18n) {
      config.headers.language = { 'zh-CN': 'cn', 'en-US': 'en' }[
        localStorage.i18n
      ];
    }

    return config;
  },
  error => Promise.reject(error),
);

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.config.url.match(new RegExp(String('^' + defaultUrl)))) {
      if (response.data.code !== 1) {
        // 提示错误的loading
        return response.data.msg;
      }

      return response.data.data;
    }

    return response.data;
  },
  error => {
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
  get: async (path, params = {}) => {
    return await axios.get(path, { params });
  },
};

// /* eslint-disable */
// export const $post = async (path, data = {}) => await axios.post(path, data);

// // axios.get 请求

// /* eslint-disable */
// export const $get = async (path, params = {}) => await axios.get(path, {params});
// /*  */
// export const $posts = async (path, data = {}) => await axios.post(path, data,{
//   headers: {
//      'content-type': 'application/x-www-form-urlencoded'
//   }
// });
/**
 *
 *  当然你也可以用 Promise
 *  export const $get = (path, params = {}) => {
 *      new Promise((resolve, reject) => {
 *          axios.get(path, params)
 *            .then(res => resolve(res))
 *            .catch(err => reject(err))
 *      })
 *  }
 *
 */
