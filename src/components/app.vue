<template>
  <div class="">
    <!-- 页头开始 -->
    <!-- <div class="header_main"></div> -->
    <lc-header data-aos="fade-up" v-polyfills-aos></lc-header>
    <!-- 页头结束 -->
    <!-- 导航栏 -->
    <!-- <div class="nav_main"></div> -->
    <lc-nav data-aos="slide-right" v-polyfills-aos></lc-nav>
    <!-- 导航栏结束 -->
    <!-- 轮播图 -->
    <!-- <div class="banner_main"></div> -->
    <banner-main data-aos="fade-up" v-polyfills-aos></banner-main>
    <!-- 轮播图结束 -->
    <!-- 主体开始 -->
    <div class="content_main" v-polyfills-aos>
      <!-- <transition :name="transitionName">
        <router-view></router-view>
      </transition> -->
      <router-view></router-view>
    </div>
    <!-- 主体结束 -->
    <!-- 页尾开始 -->
    <!-- <div class="footer_main"></div> -->
    <footer-main></footer-main>
    <!-- 页尾结束 -->
    <!-- 版权开始 -->
    <!-- <div class="copyright_main"></div> -->
    <copyright-main></copyright-main>
    <!-- 版权结束 -->
    <!-- 浮动客服开始 -->
    <!-- <div class="toolbar_main"></div> -->
    <tool-bar data-aos="slide-left" v-polyfills-aos></tool-bar>
    <!-- 浮动客服结束 -->
  </div>
</template>
<script>
import lcHeader from 'pages/views/header_main.vue';
import lcNav from 'pages/views/nav_main.vue';
import toolBar from 'pages/views/toolbar_main.vue';
import footerMain from 'pages/views/footer_main.vue';
import copyrightMain from 'pages/views/copyright_main.vue';
import bannerMain from 'pages/views/banner_main.vue';
export default {
  name: 'app',
  // data() {
  //   return {
  //     transitionName: 'fade',
  //   };
  // },
  components: {
    lcHeader,
    lcNav,
    toolBar,
    footerMain,
    copyrightMain,
    bannerMain,
  },
  mounted() {
    console.log(this);
  },
  // 接着在父组件内
  // watch $route 决定使用哪种过渡
  // watch: {
  //   $route(to) {
  //     // const toDepth = to.path.split('/').length;
  //     // const fromDepth = from.path.split('/').length;

  //     this.transitionName = to.path === '/app/home' ? '' : 'fade';
  //   },
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
} */
/* .fade-leave-active below version 2.1.8 */
</style>
