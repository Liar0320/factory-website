<template>
  <div data-aos="slide-right" v-polyfills-aos>
    <div class="container company__histroy">
      <!-- 标题 -->
      <h4 class="aboutUs__main__title">{{ $t('navMain.menus.histroy') }}</h4>
      <!-- <div class="aboutUs__main__h3">
      <el-divider content-position="left" class="">发展历程</el-divider>
    </div> -->
      <!-- 时间线 -->
      <div class="block" v-loading="loading" style="min-height:150px">
        <lch-timeline>
          <lch-timeline-item
            class="pb15"
            :timestamp="key"
            v-for="(value, key) in histroyList"
            :key="key"
          >
            <el-card>
              <div
                class="mb15 text-left "
                v-for="child in value"
                :key="child.$index"
              >
                <span class="color999 mr15 histroy__month">{{
                  child.month
                }}</span>
                <span class="histroy__content">{{ child.content }}</span>
              </div>
            </el-card>
          </lch-timeline-item>
        </lch-timeline>
      </div>
    </div>
  </div>
</template>

<script>
// import { getHistroyList } from '../../../mocks';
import { getCompanyHistoryInfo } from '../../apis';
// import { sortGroupByfnc } from '../../../utils';
export default {
  data: function() {
    return {
      histroyList: [],
      loading: false,
    };
  },
  // computed: {
  //   histroyListComputed() {
  //     let tempList = this.histroyList.map(res => {
  //       let d = new Date(res.timeStamp);

  //       return {
  //         year: d.getFullYear(),
  //         month: d.getMonth() + 1,
  //         content: res.content,
  //       };
  //     });

  //     return sortGroupByfnc(tempList, 'year');
  //   },
  // },
  mounted() {
    this.get();
  },
  methods: {
    async get() {
      this.loading = true;
      this.histroyList = await getCompanyHistoryInfo();
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
@import '@/assets/content/color.scss';
.histroy__content {
  font-size: 16px;
  color: $Font02;
}

.histroy__month {
  font-size: 14px;
}

.mr15 {
  margin-right: 15px;
}
// .company__histroy {
// }
</style>
