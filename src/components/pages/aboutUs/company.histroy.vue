<template>
  <div data-aos="slide-right" v-polyfills-aos>
    <div class="container company__histroy">
      <!-- 标题 -->
      <h4 class="aboutUs__main__title">{{ $t('navMain.menus.histroy') }}</h4>
      <!-- <div class="aboutUs__main__h3">
      <el-divider content-position="left" class="">发展历程</el-divider>
    </div> -->
      <!-- 时间线 -->
      <div class="block">
        <lch-timeline>
          <lch-timeline-item
            class="pb15"
            :timestamp="key"
            v-for="(value, key) in histroyListComputed"
            :key="key"
          >
            <el-card>
              <p class="mb15" v-for="child in value" :key="child.$index">
                <span class="color999">{{ child.month }}</span>
                {{ child.content }}
              </p>
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
import { sortGroupByfnc } from '../../../utils';
export default {
  data: function() {
    return {
      histroyList: [],
    };
  },
  computed: {
    histroyListComputed() {
      let tempList = this.histroyList.map(res => {
        let d = new Date(res.timeStamp);

        return {
          year: d.getFullYear(),
          month: d.getMonth() + 1,
          content: res.content,
        };
      });

      return sortGroupByfnc(tempList, 'year');
    },
  },
  mounted() {
    getCompanyHistoryInfo().then(res => (this.histroyList = res));
  },
};
</script>

<style lang="scss">
// .company__histroy {
// }
</style>
