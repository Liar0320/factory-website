/**分页 */
export const pagination = {
  data: function() {
    return {
      pagination: {
        pageSize: 10,
        currentPage: 1,
        total: 100,
        pagerCount: 5,
      },
    };
  },
};
