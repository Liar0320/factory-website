<template>
  <div class="homeComponent homeNews" v-scroll-in-container="isShow">
    <div class="container">
      <!-- 标题 -->
      <!-- <h2 class="homeComponent__title">{{ $t('home.introduce.title') }}</h2> -->
      <h3 class="homeComponent__titleSmall">
        <el-divider>{{ $t('home.news.title') }}</el-divider>
      </h3>
      <!-- 宗旨 -->
      <p class="homeComponent__tenet">
        {{ $t('home.news.purpose') }}
      </p>
      <!-- 新闻 -->
      <div v-loading="loading" style="min-height:150px">
        <el-row :gutter="20">
          <el-col :span="12" v-for="item in newsInfo" :key="item.$index">
            <el-card shadow="hover" class="mb15 card-height">
              <el-row :gutter="10">
                <el-col :md="8">
                  <el-image
                    style="width: 100%; height: 100%"
                    :src="isShow ? item.img : ''"
                    :title="item.title"
                    v-fix-fixed-transition
                  >
                    <image-placehold slot="placeholder" />
                  </el-image>
                </el-col>
                <el-col :md="16">
                  <div @click="routerGo(item.id)" class="cursor">
                    <h4>
                      {{ item.title }}
                    </h4>
                    <p class="color999 homeNews__content__p">
                      {{ item.summary }}
                    </p>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <!-- 了解更多 -->
      <div>
        <el-link type="primary" href="/#/app/consult/news">{{
          $t('common.more')
        }}</el-link>
      </div>
    </div>
  </div>
</template>

<script>
import { routerGo } from '../../services/company.news.service';
import { getNewsInfoList } from '../../apis';
export default {
  mixins: [routerGo],
  data() {
    return {
      store: [],
      newsInfo: [],
      loading: false,
      isShow: false,
    };
  },
  mounted() {
    console.log(this.loading);
    this.get();
  },
  methods: {
    async get() {
      this.loading = true;
      this.newsInfo = (await getNewsInfoList({ page: 1, pageSize: 4 })).data;

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

<style lang="scss">
.homeNews {
  .homeNews__content__p {
    overflow: hidden;
    height: 80px;
  }
  .card-height {
    height: 160px;
    .el-image__inner {
      max-height: 130px;
    }
  }
}
</style>
