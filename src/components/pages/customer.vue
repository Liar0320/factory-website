<template>
  <div data-aos="slide-left" v-polyfills-aos>
    <div class="container tbGap">
      <!-- 标题 -->
      <h4 class="aboutUs__main__title">{{ $t('navMain.menus.customer') }}</h4>
      <!-- 图片展示 在 pc端 以4分 在移动端 2分 -->
      <div v-loading="loading" style="min-height:150px">
        <el-row :gutter="25">
          <el-col
            :sm="6"
            :xs="12"
            v-for="item in customerList"
            :key="item.id"
            class="mb25"
          >
            <el-image
              style="width: 100%; height: 100%"
              :src="item.img"
              :preview-src-list="imgs"
              :title="item.name"
              v-fix-fixed-transition
            >
              <image-placehold slot="placeholder" />
            </el-image>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
// import companynews from 'assets/images/companynews.jpg';
import { getCustomer } from '../apis';
export default {
  data() {
    return {
      customerList: [],
      imgs: [],
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    getCustomer().then(_ => {
      this.loading = false;
      this.customerList = _;
      this.imgs = _.map(item => item.img);
    });
  },
  // watch(){
  //   this.$refs.elImage.showViewer
  // }
};
</script>
<style lang="scss" scoped>
// .el-image__inner--center {
//   top: initial;
//   left: initial;
// }
</style>
