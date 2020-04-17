<template>
  <div data-aos="slide-right" v-polyfills-aos>
    <div
      class="container p15 companyNews"
      v-loading="loading"
      style="min-height:150px"
    >
      <!-- 标题 -->
      <h3 class="aboutUs__main__title mb15">{{ $t('navMain.menus.news') }}</h3>
      <!-- 新闻卡片 -->
      <el-card
        shadow="hover"
        class="mb15"
        v-for="item in newsInfo"
        :key="item.$index"
      >
        <el-row :gutter="10">
          <el-col :md="4">
            <el-image
              style="width: 100%; height: 100%"
              :src="item.img"
              :preview-src-list="[item.img]"
              :title="item.title"
              v-fix-fixed-transition
            >
              <image-placehold slot="placeholder" />
            </el-image>
          </el-col>
          <el-col :md="20">
            <div @click="routerGo(item.id)" class="cursor">
              <h4 class="mb5">
                {{ item.title }}
              </h4>
              <p class="color999 text-left text-indent news__summary">
                {{ item.summary }}
              </p>
              <p class="news__tools">
                <span class="news__tools__block text-left">
                  {{ $t('newsInfo.releaseTime') }}：{{ item.formattime }}</span
                >
                <span class="news__tools__block text-right">
                  {{ $t('newsInfo.readings') }}：{{ item.readings }}</span
                >
              </p>
            </div>
          </el-col>
        </el-row>
      </el-card>

      <!-- 分页 -->
      <div class="overhidden">
        <el-pagination
          :hide-on-single-page="false"
          :small="pagination.small"
          background
          :page-size.sync="pagination.pageSize"
          :current-page.sync="pagination.currentPage"
          @current-change="onPaginationChange"
          @size-change="onPaginationChange"
          :layout="pagination.layout"
          :total="pagination.total"
          :page-sizes="[10, 20, 40]"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { pagination } from '../../../utils/vue.utils';
import { routerGo } from '../../services/company.news.service';
import { getNewsInfoList } from '../../apis';
import systemInfo from '../../../utils/browser';
export default {
  mixins: [pagination, routerGo],
  data() {
    return {
      newsInfo: [],
      loading: false,
    };
  },
  mounted() {
    /**如果不是pc则采用small布局 */
    this.pagination.small = !systemInfo.IsPC;
    this.onPaginationChange();
    // getNewsInfo(this.pagination).then(res => {
    //   this.newsInfo = res;
    // });
  },
  methods: {
    async onPaginationChange() {
      this.loading = true;
      var res = await getNewsInfoList(this.pagination);

      this.loading = false;
      this.newsInfo = res.data;
      this.pagination.total = res.total;
    },
  },
  watch: {
    '$i18n.locale'() {
      this.onPaginationChange();
    },
  },
};
</script>
<style lang="scss">
@import '@/assets/content/color.scss';
.news__summary {
  font-size: 16px;
  letter-spacing: 1px;
  color: $Font02;
}
.text-indent {
  text-indent: 2em;
}
.news__tools {
  width: 100%;
  display: table;
  color: $Font03;
  margin-top: 15px;
}
.news__tools__block {
  display: table-cell;
}
// .companyNews {
//   @media (min-width: 400px) {
//     .el-pagination {
//       margin-left: -20px;
//     }
//   }
// }
</style>
