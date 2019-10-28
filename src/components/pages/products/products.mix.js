import productsDetial from './products.detial';
export const productsDetialMixin = {
  components: { productsDetial },
  data() {
    return {
      productsDetial: {
        dialogVisible: false,
        selectProductIndex: 0,
      },
    };
  },
  methods: {
    toggleDialogVisible(id) {
      this.productsDetial.selectedId = id || 0;
      this.productsDetial.dialogVisible = !this.productsDetial.dialogVisible;
    },
  },
};
