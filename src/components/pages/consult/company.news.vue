<template>
  <div data-aos="slide-right" v-polyfills-aos>
    <div class="container p15 companyNews">
      <!-- 标题 -->
      <h3 class="aboutUs__main__title">{{ $t('navMain.menus.news') }}</h3>
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
              :src="item.images"
              :preview-src-list="[item.images]"
              :title="$t('header.imgTitle')"
              v-fix-fixed-transition
            ></el-image>
          </el-col>
          <el-col :md="20">
            <div @click="routerGo(item.id)" class="cursor">
              <h4>
                {{ item.title }}
              </h4>
              <p class="color999">
                {{ item.content }}
              </p>
            </div>
          </el-col>
        </el-row>
      </el-card>

      <!-- 分页 -->
      <div class="overhidden">
        <el-pagination
          :small="pagination.small"
          background
          :page-size="pagination.pageSize"
          :current-page="pagination.currentPage"
          @current-change="onPaginationChange"
          layout=" prev, pager, next"
          :total="pagination.total"
          :pager-count="pagination.pagerCount"
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
    };
  },
  mounted() {
    this.pagination.pageSize = 6;
    /**如果不是pc则采用small布局 */
    this.pagination.small = !systemInfo.IsPC;
    this.onPaginationChange(1);
    // getNewsInfo(this.pagination).then(res => {
    //   this.newsInfo = res;
    // });
  },
  methods: {
    async onPaginationChange(val) {
      this.pagination.currentPage = val;
      this.newsInfo = (await getNewsInfoList(this.pagination)).list;
    },
  },
};
</script>
<style lang="scss">
// .companyNews {
//   @media (min-width: 400px) {
//     .el-pagination {
//       margin-left: -20px;
//     }
//   }
// }
</style>
