<template>
  <div data-aos="slide-right" v-polyfills-aos>
    <div class="aboutUs__main container">
      <!-- 标题 嘉善明其服饰辅料 -->
      <h3 class="aboutUs__main__title">{{ $t('companyInfo.name') }}</h3>
      <!-- 公司简介 -->
      <div>
        <div class="aboutUs__main__h3">
          <el-divider content-position="left" class>
            {{ $t('companyInfo.briefIntroduction') }}
          </el-divider>
        </div>
        <div class="aboutUs__main__containt">
          <div class="mb15 plyr">
            <div class="plyr__video-wrapper">
              <video
                preload="none"
                class="video_player"
                poster="//img95.699pic.com//video_cover/06/36/95/iU7nNmjTgbPp1529063695.jpg!/fw/820"
                width="820"
                height="514"
                controls
              >
                <source
                  src="//video.699pic.com/videos/06/36/87/P8m1DPneRVuV1529063687.mp4"
                  type="video/mp4"
                />
              </video>
              <!-- <div
                class="plyr__poster"
                style='background-image: url("//img95.699pic.com//video_cover/06/36/95/iU7nNmjTgbPp1529063695.jpg!/fw/820");'
              ></div> -->
            </div>
          </div>
          <div v-loading="loading" style="min-height:150px">
            <el-card>
              <p class="content">
                {{ companyInfo.briefIntroduction }}
              </p>
            </el-card>
          </div>
        </div>
      </div>
      <!-- 车间面貌 -->
      <div>
        <div class="aboutUs__main__h3">
          <el-divider content-position="left" class>
            {{ $t('companyInfo.workshop') }}
          </el-divider>
        </div>
        <company-factory></company-factory>
      </div>
      <!-- 地理位置 -->
      <div class="mb15">
        <div class="aboutUs__main__h3">
          <el-divider content-position="left" class>
            {{ $t('companyInfo.location') }}
          </el-divider>
        </div>
        <div class="aboutUs__main__containt">
          <el-card>
            <el-row :gutter="15">
              <el-col :xs="24" :sm="12" class="text-center">
                <!-- 公司信息 -->
                <company-info></company-info>
              </el-col>
              <el-col :xs="24" :sm="12" class="text-center">
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
      loading: false,
    };
  },
  components: {
    companyFactory,
    companyInfo,
    companyLocation,
  },
  mounted() {
    this.get();
  },
  methods: {
    get() {
      this.loading = true;
      getCompanyInfo().then((res = {}) => {
        this.companyInfo = res;
        this.loading = false;
      });
    },
  },
  watch: {
    '$i18n.locale'() {
      this.get();
    },
  },
};
</script>
<style lang="scss" scoped>
@import 'assets/content/color.scss';
.box-card {
  width: 100%;
  display: inline-block;
  margin-left: 5px;
  font-size: 16px;
}
.content {
  font-size: 18px;
  line-height: 32px;
  color: #303133;
  text-align: left;
  text-indent: 2em;
}
.plyr__video-wrapper {
  background: #000;
  border-radius: inherit;
  overflow: hidden;
  position: relative;
  z-index: 0;
}
.plyr audio,
.plyr video {
  height: 461px;
}
.plyr audio,
.plyr video {
  border-radius: inherit;
  height: auto;
  vertical-align: middle;
  width: 100%;
}
.plyr__poster {
  background-color: #000;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: opacity 0.2s ease;
  width: 100%;
  z-index: 1;
}
</style>
