<template>
  <!-- 新闻详情 -->
  <div
    class="container companyNewsDetial"
    v-loading="loading"
    style="min-height:150px"
  >
    <!-- 导航标题栏 -->
    <div class="companyNewsDetial__header">
      <span class="companyNewsDetial__header__title">{{
        $t('newsInfo.detial')
      }}</span>
    </div>
    <div class="companyNewsDetial__container">
      <h1 class="companyNewsDetial__title">
        {{ info.title }}
      </h1>
      <div v-if="info.img">
        <el-image
          style="max-width: 400px"
          :src="info.img"
          :preview-src-list="[info.img]"
          :title="info.title"
          v-fix-fixed-transition
        >
          <image-placehold slot="placeholder" />
        </el-image>
      </div>
      <p class="companyNewsDetial__time">
        {{ $t('newsInfo.releaseTime') }}：{{ info.formattime }}
      </p>
      <div class="companyNewsDetial__content" v-html="info.content">
        <!-- {{ info.content }} -->
      </div>
    </div>
    <div class="mb15 mt15">
      <router-link to="/app/consult/news" class="fs20 ">
        <p>
          {{ $t('common.goBack') }}
        </p>
        <p>
          <i class="el-icon-back fs20"></i>
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
// import { getNewsInfo } from '../../services/company.news.service';
import { getNewsInfoByid } from '../../apis';
export default {
  data() {
    return {
      /**@type { import('../../models/index').NewsInfo } */
      info: {},
      id: null,
      loading: false,
    };
  },
  mounted() {
    // this.info.releaseTime;
    // console.log(this.$route.params.id);
    this.id = this.$route.params.id;
    this.get();
    // getNewsInfoList({ pageSize: 1 }).then(res => {
    //   this.info = res[0];
    // });
  },
  methods: {
    async get() {
      this.loading = true;
      this.info = await getNewsInfoByid({ id: this.id });
      this.loading = false;
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
.companyNewsDetial {
  &__header {
    margin-top: 15px;
    border-bottom: $Border01 1px solid;
    text-align: left;
    &__title {
      color: $White;
      background-color: $BrandColor;
      padding: 20px;
      line-height: 20px;
      display: inline-block;
    }
  }
  &__container {
    padding: 15px;
  }
  &__title {
    margin: 30px 0;
    font-size: 38px;
    line-height: 55px;
  }
  &__time {
    font-size: 14px;
    color: $Font03;
    text-align: left;
    margin-bottom: 5px;
  }
  &__content {
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 32px;
    color: $Font01;
    text-align: left;
  }
}
</style>
