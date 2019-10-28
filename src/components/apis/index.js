import lbt1 from 'assets/images/lbt1.jpg';
import lbt2 from 'assets/images/lbt2.jpg';
/**获取轮播图的接口 */
export async function getBannerUrls() {
  return new Promise(resolve => {
    resolve([lbt1, lbt2]);
  });
}

import $http from '../../vendors/axios';
/**接口标识 */
const baseDir = '/api';

/**菜单栏 */
export function getNavMenusList() {
  return $http.get(`${baseDir}/nav/menus/list`);
}

/**获取公司展示信息 */
export function getCompanyInfo() {
  return $http.get(`${baseDir}/company/info`);
}

/**获取公司历史展示信息 */
export function getCompanyHistoryInfo() {
  return $http.get(`${baseDir}/company/history/get`);
}

/**获取车间面貌展示信息 */
export function getWorkshopList() {
  return $http.get(`${baseDir}/company/workshop/get`);
}

/**获取产品菜单种类展示信息 */
export function getProductTypesList(params) {
  return $http.get(`${baseDir}/productTypes/get`, params);
}

/**获取产品展示信息 */
export function getProductList(params) {
  return $http.get(`${baseDir}/products/get`, params);
}

/**获取新闻展示信息 */
export function getNewsInfoList(params) {
  return $http.get(`${baseDir}/newsInfo/get`, params);
}

/**获取常见问题解答展示信息 */
export function getFaqQuestionList(params) {
  return $http.get(`${baseDir}/faqQuestion/get`, params);
}

/**提交反馈 */
export function setFeedback(params) {
  return $http.post(`${baseDir}/feedback/submit`, params);
}

export function test() {
  return Promise.all([
    getNavMenusList(),
    getCompanyInfo(),
    getCompanyHistoryInfo(),
    getProductTypesList(),
    getProductList(),
    getNewsInfoList(),
    getFaqQuestionList(),
    getWorkshopList(),
  ]);
}
