<template>
  <div class="nav_main">
    <!-- pc端菜单 -->
    <el-row class="hidden-xs-only">
      <el-col :span="24">
        <el-menu
          :default-active="activeMenu"
          class="container"
          mode="horizontal"
          @select="handleSelect"
          background-color="#1048a0"
          :router="true"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <template v-for="item in menus">
            <!-- 菜单包含子级 -->
            <el-submenu
              :index="String(item.id)"
              :key="item.id"
              v-if="item.$hasChildren()"
            >
              <template slot="title">{{ $t('navMain.' + item.name) }}</template>
              <el-menu-item
                :index="item.state"
                v-for="item in item.children"
                :key="'lg-' + item.id"
                >{{ $t('navMain.' + item.name) }}</el-menu-item
              >
            </el-submenu>
            <!-- 菜单不包含子级 -->
            <el-menu-item :index="item.state" :key="item.id" v-else>{{
              $t('navMain.' + item.name)
            }}</el-menu-item>
          </template>
        </el-menu>
      </el-col>
    </el-row>
    <!-- 移动端菜单 -->

    <el-drawer :visible.sync="isShowNavMenu" :direction="'ltr'" :size="'300px'">
      <el-row class="hidden-sm-and-up">
        <el-col :span="24">
          <el-menu
            :default-active="activeMenu"
            class=" container"
            @open="handleOpen"
            @close="handleClose"
            background-color="#1048a0"
            :router="true"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <template v-for="item in menus">
              <!-- 菜单包含子级 -->
              <el-submenu
                :index="String(item.id)"
                :key="item.id"
                v-if="item.$hasChildren()"
              >
                <template slot="title">{{
                  $t('navMain.' + item.name)
                }}</template>
                <el-menu-item
                  :index="item.state"
                  v-for="item in item.children"
                  :key="item.id"
                  >{{ $t('navMain.' + item.name) }}</el-menu-item
                >
              </el-submenu>
              <!-- 菜单不包含子级 -->
              <el-menu-item :index="item.state" :key="item.id" v-else>{{
                $t('navMain.' + item.name)
              }}</el-menu-item>
            </template>
          </el-menu>
        </el-col>
      </el-row>
    </el-drawer>
  </div>
</template>
<script>
import { tree } from '@/utils';
// import { getMenuList } from '@/mocks';
import { getNavMenusList } from '../../apis';

import eventHub from '../../../eventHub';

export default {
  data() {
    return {
      menus: [],
      activeMenu: '/app/home',
      isShowNavMenu: false /**在手机端 采用 抽屉式菜单 */,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {
    // this.menus.forEach(item => (this.name = this.$t(item.name)));

    getNavMenusList().then((res = []) => {
      this.menus = tree.foreachTreeById(res);
    });

    this.activeMenu = this.$route.path || '/app/home';

    eventHub.$on('isShowNavMenu', () => {
      this.isShowNavMenu = !this.isShowNavMenu;
    });
  },
  destroyed() {
    eventHub.$off('isShowNavMenu');
  },
  /**fix当通过原生跳转时 无法触发更新菜单 */
  watch: {
    $route(to) {
      this.activeMenu = to.path;
      if (this.isShowNavMenu) {
        this.isShowNavMenu = false;
      }
    },
  },
};
</script>
<style lang="scss">
.nav_main {
  width: 100%;
  // height: 60px;
  line-height: 60px;
  background: #1048a0;
  position: relative;
  z-index: 3;
}
.el-drawer {
  background-color: #1048a0;
}
</style>
