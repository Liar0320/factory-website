<template>
  <div data-aos="zoom-in" v-polyfills-aos>
    <div class="container faqs tbGap">
      <h4 class="aboutUs__main__title">{{ $t('navMain.menus.faq') }}</h4>
      <el-collapse v-model="activeNames">
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
    };
  },
  async mounted() {
    this.faqQuestionList = await getFaqQuestionList();
    this.activeNames.push(this.faqQuestionList[0].id);
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
