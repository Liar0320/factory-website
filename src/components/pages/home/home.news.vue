<template>
  <div class="homeComponent homeNews">
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
      <el-row :gutter="20">
        <el-col :span="12" v-for="item in newsInfo" :key="item.$index">
          <el-card shadow="hover" class="mb15">
            <el-row :gutter="10">
              <el-col :md="8">
                <el-image
                  style="width: 100%; height: 100%"
                  :src="item.images"
                  :preview-src-list="[item.images]"
                  :title="$t('header.imgTitle')"
                  v-fix-fixed-transition
                  lazy
                ></el-image>
              </el-col>
              <el-col :md="16">
                <div @click="routerGo(item.id)" class="cursor">
                  <h4>
                    {{ item.title }}
                  </h4>
                  <p class="color999 homeNews__content__p">
                    {{ item.content }}
                  </p>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>

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
      newsInfo: [],
    };
  },
  async mounted() {
    this.newsInfo = (await getNewsInfoList({ pageSize: 4 })).list;
  },
};
</script>

<style lang="scss" scoped>
.homeNews {
  .homeNews__content__p {
    overflow: hidden;
    height: 80px;
  }
}
</style>
