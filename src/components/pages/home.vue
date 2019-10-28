<template>
  <div class="overhidden">
    <!-- 公司介绍 -->
    <home-introduce data-aos="slide-right" v-polyfills-aos></home-introduce>
    <!-- 产品展示 -->
    <home-products
      data-aos="slide-left"
      v-polyfills-aos
      data-aos-offset="280"
    ></home-products>
    <!-- 成功案列 -->

    <!-- 新闻资讯 -->
    <home-news
      data-aos="slide-right"
      v-polyfills-aos
      data-aos-offset="280"
    ></home-news>
  </div>
</template>
<script>
import homeIntroduce from './home/home.introduce';
import homeProducts from './home/home.products';
import homeNews from './home/home.news';
export default {
  components: {
    homeIntroduce,
    homeProducts,
    homeNews,
  },
};
</script>
<style lang="scss">
.homeComponent {
  padding: 80px 0 80px;
  &__title {
    font-size: 36px;
    color: #333;
    margin-bottom: 25px;
  }
  &__titleSmall {
    .el-divider--horizontal {
      max-width: 345px;
      display: inline-block;
    }
    .el-divider__text {
      font-size: 25px;
    }
    margin-bottom: 25px;
  }
  &__tenet {
    font-size: 18px;
    color: #777;
    font-weight: bold;
    margin-bottom: 15px;
  }
}
</style>
