/**公司信息 */
export class CompnayInfo {
  /**电话 */
  phone = '';
  /**传真 */
  fax = '';
  /**手机号 */
  mobliePhone = '';
  /**联系人 */
  concatUser = '';
  /**邮箱 */
  email = '';
  /**地址 */
  address = '';
  /**图标 */
  logo = '';
  /**公司简介 */
  briefIntroduction = '';
  /**经纬度 */
  latLng = {
    lat: '',
    lng: '',
  };
}

/**公司历史 */
export class HistroyInfo {
  /**时间 */
  timeStamp = '';
  /**内容 */
  content = '';
}
/**公司面貌 */
export class Workshop {
  /**车间名称 */
  name = '';
  /**车间面貌 */
  images = [];
}

/**邮件类 */
export class Concat {
  name = '';
  company = '';
  phone = '';
  email = '';
  content = '';
}

/**新闻类 */
export class NewsInfo {
  /**标题 */
  title = '';
  /**总结 */
  summary = '';
  /**展示图片 */
  images = '';
  /**发布时间 */
  releaseTime = new Date();
  /**文章内容 */
  content = '';
  // /**文章图片 */
  // images = '';
}

/**常见问题解答 */
export class FaqQuestions {
  /**问题 */
  question = '';
  /**答案 */
  answer = '';
}

/**产品 */
export class ProductInfo {
  /**名称 */
  name = '';
  /**图片 */
  image = '';
  /**型号 */
  model = '';
  /**价格 */
  price = '';
}
