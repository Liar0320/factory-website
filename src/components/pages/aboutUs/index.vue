<template>
  <div data-aos="slide-right" v-polyfills-aos>
    <div class="aboutUs__main container">
      <!-- 标题 嘉善明其服饰辅料 -->
      <h3 class="aboutUs__main__title">{{ $t('companyInfo.name') }}</h3>
      <!-- 公司简介 -->
      <div>
        <div class="aboutUs__main__h3">
          <el-divider content-position="left" class="">{{
            $t('companyInfo.briefIntroduction')
          }}</el-divider>
        </div>
        <div class="aboutUs__main__containt">
          <div class="mb15">
            <video
              src="https://www.w3school.com.cn/i/movie.mp4"
              controls="controls"
              autoplay="autoplay"
              loop="loop"
              width="100%"
              height="275px"
            >
              your browser does not support the video tag
            </video>
          </div>
          <el-card>
            <p>
              {{ companyInfo.briefIntroduction }}
            </p>
          </el-card>
        </div>
      </div>
      <!-- 车间面貌 -->
      <div>
        <div class="aboutUs__main__h3">
          <el-divider content-position="left" class="">{{
            $t('companyInfo.workshop')
          }}</el-divider>
        </div>
        <company-factory></company-factory>
      </div>
      <!-- 地理位置 -->
      <div class="mb15">
        <div class="aboutUs__main__h3">
          <el-divider content-position="left" class="">{{
            $t('companyInfo.location')
          }}</el-divider>
        </div>
        <div class="aboutUs__main__containt">
          <el-card>
            <el-row :gutter="15">
              <el-col :xs="24" :sm="12" class="text-center ">
                <!-- 公司信息 -->
                <company-info></company-info>
              </el-col>
              <el-col :xs="24" :sm="12" class="text-center ">
                <!-- 公司地址 -->
                <company-location></company-location>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import companyInfo from './company.info';
import companyLocation from './company.location';
import companyFactory from './company.factory';
// import { getCompnayInfo } from '../../services/comany';
import { getCompanyInfo } from '../../apis';

export default {
  data() {
    return {
      companyInfo: {},
    };
  },
  components: {
    companyFactory,
    companyInfo,
    companyLocation,
  },
  mounted() {
    getCompanyInfo().then((res = {}) => (this.companyInfo = res));
  },
};
</script>
<style lang="scss" scoped>
.box-card {
  width: 100%;
  display: inline-block;
  margin-left: 5px;
  font-size: 16px;
}
</style>
