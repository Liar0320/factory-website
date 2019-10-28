<template>
  <div class="footer_main">
    <div class="container">
      <el-row :gutter="0">
        <el-col :sm="16">
          <!-- 菜单导航 -->
          <div class="footer_main__menu clearfix">
            <div
              class="footer_main__menu__item fl mb15"
              v-for="item in menusComputed"
              :key="item.id"
              :class="{
                'hidden-xs-only': hiddenXsOnly.includes(item.name),
                'hidden-md-and-down': hiddenMdAndDown.includes(item.name),
                'hidden-sm-and-down': hiddenSmAndDown.includes(item.name),
              }"
            >
              <h3 class="footer_main__menu__item__title">
                <template>
                  <span v-if="item.$hasChildren()">
                    {{ $t('navMain.' + item.name) }}</span
                  >
                  <router-link :to="item.state" v-if="!item.$hasChildren()">{{
                    $t('navMain.' + item.name)
                  }}</router-link>
                </template>
              </h3>

              <div v-if="item.$hasChildren()">
                <p v-for="item in item.children" :key="item.id">
                  <router-link :to="item.state">{{
                    $t('navMain.' + item.name)
                  }}</router-link>
                </p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :sm="8">
          <!-- 公司信息 -->
          <company-info class="prl15"></company-info>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import companyInfo from 'pages/aboutUs/company.info.vue';
import { tree } from '@/utils';
// import { getMenuList } from '@/mocks';
import { getNavMenusList } from '../../apis';
export default {
  data() {
    return {
      menus: [],
      hiddenXsOnly: [],
    };
  },
  components: {
    companyInfo,
  },
  mounted() {
    getNavMenusList().then((res = []) => {
      this.menus = tree.foreachTreeById(res);
    });
    /**https://element.eleme.cn/#/zh-CN/component/layout */
    this.hiddenXsOnly = ['menus.faq'];
    this.hiddenMdAndDown = ['menus.customer'];
    this.hiddenSmAndDown = ['menus.concatUs'];
  },
  computed: {
    menusComputed() {
      let showMenus = [
        'menus.aboutUs',
        'menus.products',
        'menus.faq',
        'menus.customer',
        'menus.concatUs',
      ];

      return this.menus.filter(item => {
        return showMenus.includes(item.name);
      });
    },
  },
};
</script>
<style lang="scss">
@import 'assets/content/color.scss';
.footer_main {
  width: 100%;
  color: #fff;
  padding: 30px 0 20px;
  background: #191919;
  .companyinfo__image,
  .companyinfo__text {
    margin-bottom: 0;
  }
  .companyinfo__label {
    color: $Font03;
  }
}
.footer_main__menu__item {
  &__title {
    margin-bottom: 24px;
    padding: 0 34px;
    border-right: 1px solid #407fe1;
  }
}
</style>
