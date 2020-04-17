/*
 * @Author: lich
 * @Date: 2019-09-05 11:31:53
 * @Last Modified by: lich
 * @Last Modified time: 2020-04-07 16:05:28
 * 事件中心
 * 处理  父子 兄弟 子父 之间的通信
 */

import Vue from 'vue';
export const eventHubGlobal = {};

const eventHub = new Vue();

export default eventHub;
