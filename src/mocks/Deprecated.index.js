/**获取菜单信息 */
export function getMenuList() {
  return new Promise(resolve => {
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

    resolve(menus);
  });
}

/**获取产品菜单信息 */
export function getProductTypesList() {
  return new Promise(resolve => {
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

    resolve(productTypes);
  });
}

/**获取新闻数据 */
import { NewsInfo } from '../components/models';
import companynews from 'assets/images/companynews.jpg';
/**@param { import ('element-ui/types/pagination').ElPagination } pagination  */
export function newsInfo(pagination) {
  /**如何使用解构赋默认值 */
  pagination.pageSize = pagination.pageSize || 10;
  pagination.currentPage = pagination.currentPage || 1;
  pagination.total = pagination.total || pagination.pageSize;

  let startIndex = pagination.pageSize * (pagination.currentPage - 1);

  let maxIndex = startIndex + pagination.pageSize;

  return new Promise(resolve => {
    let newsInfo = [];

    for (let index = startIndex; index < maxIndex; index++) {
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
      newsInfo.push(element);
    }
    resolve(newsInfo);
  });
}

/**获取产品数据 */
// import { NewsInfo } from '../components/models';
// import companynews from 'assets/images/companynews.jpg';
/**@param { import ('element-ui/types/pagination').ElPagination  } pagination  */
export function productsList(pagination) {
  return newsInfo(pagination).then(res => {
    return res.filter(
      item => item.title.indexOf(pagination.filterText || '') > -1,
    );
  });
}

/**公司历史 */
import { HistroyInfo } from '../components/models';
export function getHistroyList() {
  return new Promise(resolve => {
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
    resolve(histroyList);
  });
}

/**公司历史 */
import { FaqQuestions } from '../components/models';
export function getFaqQuestionList() {
  return new Promise(resolve => {
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
    resolve(faqQuestions);
  });
}
