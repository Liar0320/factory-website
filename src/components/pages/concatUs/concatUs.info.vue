<template>
  <div data-aos="slide-right" v-polyfills-aos>
    <div class="container p15 concatUs__info">
      <!-- 标题 联系我们 -->
      <h3 class="aboutUs__main__title">{{ $t('navMain.menus.methods') }}</h3>
      <el-card>
        <el-row :gutter="15">
          <el-col :xs="24" :sm="12" class="text-center mb15">
            <!-- 公司信息 -->
            <company-info></company-info>
          </el-col>
          <el-col :xs="24" :sm="12" class="text-center mb15">
            <!-- 公司地址 -->
            <company-location></company-location>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>
<script>
import companyInfo from '../aboutUs/company.info';
import companyLocation from '../aboutUs/company.location';
export default {
  components: {
    companyInfo,
    companyLocation,
  },
};
</script>
<style lang="scss">
.concatUs__info {
  .box-card {
    width: 100%;
    display: inline-block;
    margin-left: 5px;
    font-size: 16px;
  }
  // .map {
  //   height: 218px;
  // }
}
</style>
