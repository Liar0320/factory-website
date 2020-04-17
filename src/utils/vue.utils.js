import systemInfo from './browser';

/**分页 */
export const pagination = {
  data: function() {
    return {
      pagination: {
        pageSize: 10,
        currentPage: 1,
        total: 0,
        pagerCount: 5,
        layout: !systemInfo.IsPC
          ? 'prev, pager, next'
          : 'sizes , prev, pager, next ,total',
      },
    };
  },
};
