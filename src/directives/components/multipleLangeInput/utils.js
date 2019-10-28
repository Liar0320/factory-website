import { MD5 } from './md5';
import JSONP from './jsonP';

export /** 翻译工具
 * @description
 * 1.默认翻译配置
 * 2.翻译方法
 * http://api.fanyi.baidu.com/api/trans/product/apidoc
 */
function TranslateByBAIDU() {
  var defaultConfig = {
    sourceUrl: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
    /**请求翻译query UTF-8编码 */
    query: 'apple',
    /**APP ID */
    appid: '20190930000338496',
    /**随机数 */
    salt: new Date().getTime(),
    /**翻译源语言 */
    from: 'zh',
    /**译文语言 */
    to: 'en',
    /**平台分配的密钥 */
    key: 'tMEtaHDVDsS6EkFwb4z7',
    /**签名 */
    sign: '',
  };

  /**创建请求参数 请求地址 */
  function createParams(defaultConfig) {
    /**生成随机数 */
    defaultConfig.salt = new Date().getTime();
    /**计算签名sign */
    var md5str =
      defaultConfig.appid +
      defaultConfig.query +
      defaultConfig.salt +
      defaultConfig.key;
    var parmas = {
      q: defaultConfig.query,
      // || encodeURIComponent(defaultConfig.query)?
      appid: defaultConfig.appid,
      salt: defaultConfig.salt,
      from: defaultConfig.from,
      to: defaultConfig.to,
      sign: MD5(md5str),
    };
    var result = {
      sourceUrl: defaultConfig.sourceUrl,
      params: parmas,
    };

    console.log(md5str);

    return result;
  }

  this.defaultConfig = defaultConfig;

  /** 获取翻译的数据
   * @param {axios} $http 请求方法
   * @param { defaultConfig } config 请求参数
   * @returns { promise }
   */
  this.get = function(config) {
    return new Promise((resolve, reject) => {
      /**更新请求参数 */
      Object.assign(this.defaultConfig, config);
      let getConfig = createParams(this.defaultConfig);

      JSONP({
        data: getConfig.params,
        url: getConfig.sourceUrl,
        success: data => {
          resolve((data || {}).trans_result || []);
        },
        error: err => {
          reject(err);
        },
      });
    });
  };
}
