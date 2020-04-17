<template>
  <div data-aos="zoom-in" v-polyfills-aos>
    <div class="container faqs tbGap">
      <h4 class="aboutUs__main__title mb15">{{ $t('navMain.menus.faq') }}</h4>
      <el-collapse
        v-model="activeNames"
        v-loading="loading"
        style="min-height:150px"
      >
        <el-collapse-item
          :title="item.question"
          :name="item.id"
          v-for="item in faqQuestionList"
          :key="item.id"
        >
          <div>
            {{ item.answer }}
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script>
// import { getFaqQuestionList } from '../../mocks';
import { getFaqQuestionList } from '../apis';
export default {
  data() {
    return {
      activeNames: [63],
      faqQuestionList: null,
      loading: false,
    };
  },
  mounted() {
    this.get();
  },
  methods: {
    async get() {
      this.loading = true;
      this.faqQuestionList = await getFaqQuestionList();
      if (this.faqQuestionList[0]) {
        this.activeNames.push(this.faqQuestionList[0].id);
        this.loading = false;
      }
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
@import 'assets/content/color.scss';
.faqs {
  .el-collapse-item__header {
    font-size: 18px;
    color: $Font01;
  }
  .el-collapse-item__content {
    text-align: left;
    padding-left: 35px;
    color: $Font03;
  }
}
</style>
