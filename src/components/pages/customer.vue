<template>
  <div data-aos="slide-left" v-polyfills-aos>
    <div class="container tbGap">
      <!-- 标题 -->
      <h4 class="aboutUs__main__title">{{ $t('navMain.menus.customer') }}</h4>
      <!-- 图片展示 在 pc端 以4分 在移动端 2分 -->
      <el-row :gutter="25">
        <el-col
          :sm="6"
          :xs="12"
          v-for="image in customerList"
          :key="image.$index"
          class="mb25"
        >
          <el-image
            style="width: 100%; height: 100%"
            :src="image"
            :preview-src-list="customerList"
            :title="$t('header.imgTitle')"
            v-fix-fixed-transition
          >
          </el-image>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import companynews from 'assets/images/companynews.jpg';
export default {
  data() {
    return {
      customerList: new Array(8).fill(companynews),
    };
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
