// import { productsList } from '../../mocks';
// export function getProductsList() {
//   return productsList(...arguments);
// }
export const routerGo = {
  methods: {
    routerGo(filter) {
      this.$router.push({ path: '/app/products', query: { filter } });
    },
  },
};
