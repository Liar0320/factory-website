/**模型管理 */
import {
  CompnayInfo,
  HistroyInfo,
  ProductInfo,
  NewsInfo,
  FaqQuestions,
  Workshop,
} from '../components/models';
/**测试图片 */
import companyLogo from 'assets/images/companyLogo.png';
import companynews from 'assets/images/companynews.jpg';
/**接口标识 */
const baseDir = '/api';

/**处理分页参数 */
function reDeal(query) {
  query.pageSize = Number(query.pageSize || 10);
  query.currentPage = Number(query.currentPage || 1);
  query.total = Number(query.total || 100);
  query.startIndex = query.pageSize * (query.currentPage - 1);
  query.maxIndex = query.startIndex + query.pageSize;

  return query;
}

export default [
  /**菜单栏 */
  {
    url: `${baseDir}/nav/menus/list`,
    type: 'get',
    response: () => {
      //   const { importance, type, title, page = 1, limit = 20, sort } = config.query

      const menus = [
        {
          name: 'menus.home',
          state: '/app/home',
          id: 7,
          pid: -1,
        },
        {
          name: 'menus.aboutUs',
          id: 1,
          pid: -1,
        },
        {
          name: 'menus.products',
          id: 2,
          state: '/app/products',
          pid: -1,
        },
        {
          name: 'menus.consult',
          id: 3,
          pid: -1,
        },
        {
          name: 'menus.customer',
          id: 4,
          state: '/app/customer',
          pid: -1,
        },
        {
          name: 'menus.faq',
          state: '/app/faqs',
          id: 5,
          pid: -1,
        },
        {
          name: 'menus.concatUs',
          id: 6,
          state: '/app/concatUs',
          pid: -1,
        },
        {
          name: 'menus.enterprise',
          pid: 1,
          state: '/app/aboutUs/index',
          id: 10,
        },
        {
          name: 'menus.histroy',
          state: '/app/aboutUs/histroy',
          pid: 1,
          id: 11,
        },
        {
          name: 'menus.honors',
          state: '/app/aboutUs',
          pid: 1,
          id: 12,
        },
        {
          name: 'menus.news',
          state: '/app/consult/news',
          pid: 3,
          id: 30,
        },
        {
          name: 'menus.welfare',
          state: '/app/consult',
          pid: 3,
          id: 31,
        },
        {
          name: 'menus.methods',
          state: '/app/concatUs/info',
          pid: 6,
          id: 60,
        },
        {
          name: 'menus.email',
          state: '/app/concatUs/email',
          pid: 6,
          id: 61,
        },
      ];

      return {
        code: 1,
        data: menus,
      };
    },
  },
  /**获取公司展示信息 */
  {
    url: `${baseDir}/company/info`,
    type: 'get',
    response: () => {
      const info = new CompnayInfo();

      info.phone = '+86-573-84878903';
      info.fax = '+86-573-84878949';
      info.mobliePhone = '+86-13967301898';
      info.concatUser = '柴敏峰';
      info.email = 'jimmy@mqbutton.com';
      info.address = '中国浙江省嘉兴市嘉善县西塘镇大舜工业开发区';
      info.logo = companyLogo;
      info.latLng = { lat: 30.847349, lng: 120.91495 };
      info.briefIntroduction = ` 嘉善明其服饰辅料厂是一家专业的纽扣制造工厂，位于江浙沪三省交界处，距沪杭高速公路仅11公里，上海虹桥国际机场仅65公里，交通十分便利。
      目前我厂主要生产牛仔纽扣、牛仔铆钉，合金纽扣、四合扣，大白扣，裤钩，风纪扣，揿扣，树脂纽扣、贝壳纽扣等产品，是一家集开发，生产，销售，贸易，服务于一体的新型企业，并拥有自己的高标准环保电镀厂，以确保产品的质量及交期，形成牛仔纽扣及合金纽扣的生产电镀一条龙服务，产品主要销往国内服装厂及外贸公司，并远销欧美东南亚地区，服务的品牌如：
      GAP、NEXT、AEROPOSTALE、ESPRIT、PIMKIE、MOGAN、ZARA、NEWLOOK、RIVER
      ISLAND...`;

      return {
        code: 1,
        data: info,
      };
    },
  },
  /**获取公司历史展示信息 */
  {
    url: `${baseDir}/company/history/get`,
    type: 'get',
    response: () => {
      const histroyList = [];

      for (let index = 0; index < 18; index++) {
        let histroy = new HistroyInfo();

        let counts = Math.floor(index / 3);

        let counts2 = index % 3;

        histroy.timeStamp = new Date(2016 + counts, counts2).toString();
        histroy.content =
          '招商信诺人寿“醇享人生”个人高端医疗保险和“珍爱宝贝”少儿教育年金保险分别荣获《中国保险报》“2018年度健康保险产品”和“2018年度少儿保险产品”称号。';
        histroyList.push(histroy);
      }

      return {
        code: 1,
        data: histroyList,
      };
    },
  },
  /**获取车间面貌展示信息 */
  {
    url: `${baseDir}/company/workshop/get`,
    type: 'get',
    response: () => {
      let workshopList = [];

      for (let index = 0; index < 10; index++) {
        let workshop = new Workshop();

        workshop.id = 'workshop' + index;
        workshop.name = `车间-${index}`;
        workshop.images = new Array(Math.round(Math.random(0, 1) * 10)).fill(
          companynews,
        );
        workshopList.push(workshop);
      }

      return {
        code: 1,
        data: workshopList,
      };
    },
  },
  /**获取产品菜单种类展示信息 */
  {
    url: `${baseDir}/productTypes/get`,
    type: 'get',
    response: () => {
      //   const { importance, type, title, page = 1, limit = 20, sort } = config.query

      const productTypes = [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1',
                },
                {
                  id: 10,
                  label: '三级 1-1-2',
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1',
            },
            {
              id: 6,
              label: '二级 2-2',
            },
          ],
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1',
            },
            {
              id: 8,
              label: '二级 3-2',
            },
          ],
        },
      ];

      return {
        code: 1,
        data: productTypes,
      };
    },
  },
  /**获取产品展示信息 */
  {
    url: `${baseDir}/products/get`,
    type: 'get',
    response: ({ query }) => {
      reDeal(query);
      let productList = [];

      for (let index = query.startIndex; index < query.maxIndex; index++) {
        let product = new ProductInfo();

        product.id = 'products' + index;
        product.name = `单片机-10-${index}`;
        product.model = `dpj-10-${index}`;
        product.image = companynews;
        product.price = '';
        productList.push(product);
      }
      productList = productList.filter(res =>
        res.name.includes(query.filterText || ''),
      );

      return {
        code: 1,
        data: Object.assign({}, query, { list: productList }),
      };
    },
  },
  /**获取新闻展示信息 */
  {
    url: `${baseDir}/newsInfo/get`,
    type: 'get',
    response: ({ query }) => {
      reDeal(query);
      let newsInfoList = [];

      for (let index = query.startIndex; index < query.maxIndex; index++) {
        const element = new NewsInfo();

        element.id = 'newsInfo' + index;
        element.title = '中建三局三公司项目岗位优化、绩效考' + index;
        element.summary =
          '2019年6月6日，中建三局第三建设工程有限责任公司（以下简称“中建三局三公司”）项目岗位优化、绩效考核及两级组织优化咨询项目正式启动。' +
          index;
        element.content =
          '  2019年6月6日，中建三局第三建设工程有限责任公司（以下简称“中建三局三公司”）项目岗位优化、绩效考核及两级组织优化咨询项目正式启动。公司董事长、党委书记刘晓清，党委副书记、工会主席杨巍及三公司总部机关、在汉分公司主管领导等出席参加，武汉高登管理咨询有限公司（以下简称“高登项目管理”）作为本次咨询项目的主要实施方受邀参加，总工程师丁伟祥担任主持，本次会议既是启动会，又是动员会，标志着咨询项目实施' +
          index;
        element.releaseTime = new Date(
          new Date().getTime() + 1000 * 60 * 60 * 24 * index,
        );
        element.images = companynews;
        newsInfoList.push(element);
      }
      newsInfoList = newsInfoList.filter(res =>
        res.title.includes(query.filterText || ''),
      );

      return {
        code: 1,
        data: Object.assign({}, query, { list: newsInfoList }),
      };
    },
  },
  /**获取常见问题解答展示信息 */
  {
    url: `${baseDir}/faqQuestion/get`,
    type: 'get',
    response: () => {
      const faqQuestions = [];

      for (let index = 0; index < 3; index++) {
        let faq = new FaqQuestions();

        faq.id = index;
        faq.question = [
          '一致性 Consistency',
          '反馈 Feedback',
          '效率 Efficiency',
          '可控 Controllability',
        ][index];
        faq.answer = [
          `
          与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
          在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
          `,
          `控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
          页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
          `,
          `
          简化流程：设计简洁直观的操作流程；
          清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
          帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
          `,
          `
           用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
           结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
           `,
        ][index];
        faqQuestions.push(faq);
      }

      return {
        code: 1,
        data: faqQuestions,
      };
    },
  },
  /**提交反馈信息 */
  {
    url: `${baseDir}/feedback/submit`,
    type: 'post',
    response: () => {
      alert('反馈成功');

      return {
        code: 1,
        data: null,
      };
    },
  },
];
