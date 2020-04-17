<template>
  <div data-aos="slide-left" v-polyfills-aos>
    <div class="container tbGap products">
      <!-- 页面标题 -->
      <h3 class="aboutUs__main__title">{{ $t('navMain.menus.products') }}</h3>
      <el-row :gutter="15">
        <el-col :xs="8" :sm="6" :md="4">
          <!-- 产品的分类 -->
          <products-nav @setNav="setNav"></products-nav>
        </el-col>
        <el-col :xs="16" :sm="18" :md="20">
          <!-- 产品展示 主体 -->
          <products-show
            :filter-text="filter"
            :node-type="nodeType"
          ></products-show>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import productsNav from './products/products.nav';
import productsShow from './products/products.show';
export default {
  components: {
    productsNav,
    productsShow,
  },
  data() {
    return {
      filter: '',
      nodeType: null,
    };
  },
  mounted() {
    this.filter = this.$route.query.filter || '';
  },
  methods: {
    setNav(nodeType) {
      // console.log(nodeType);
      this.nodeType = nodeType;
    },
  },
  watch: {
    $route() {
      this.filter = this.$route.query.filter || '';
    },
  },
};
</script>
<style lang="scss">
@import 'assets/content/color.scss';

.products {
  min-height: 450px;
  &__common__title {
    position: relative;
    padding-left: 15px;
    padding-bottom: 5px;
    height: 40px;
    line-height: 40px;
    border-bottom: solid 1px $Border01;
    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0px;
      width: 6px;
      height: 100%;
      background-color: $BrandColor;
    }
  }
}
</style>
