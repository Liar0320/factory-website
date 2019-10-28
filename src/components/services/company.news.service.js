// import { newsInfo } from '../../mocks';
// export function getNewsInfo() {
//   return newsInfo(...arguments);
// }
export const routerGo = {
  methods: {
    routerGo(id) {
      this.$router.push('/app/consult/newsDetial/' + id);
    },
  },
};
