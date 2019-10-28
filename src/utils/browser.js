/*
 * @Author: lich
 * @Date: 2019-09-06 13:18:56
 * @Last Modified by: lich
 * @Last Modified time: 2019-09-08 21:47:46
 * @TODO:存储当前平台运行的所有有用信息 并且做一定的兼容
 */
import { IsPC } from './browser.util';

class SystemInfo {
  /**系统运行的宽度和高度 */
  //   screen = {
  //     width: 0,
  //     height: 0,
  //   };
  /**是否是pc端 */
  IsPC = false;
}
const systemInfo = new SystemInfo();

systemInfo.IsPC = IsPC();

export default systemInfo;
