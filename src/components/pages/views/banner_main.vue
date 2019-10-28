<template>
  <div class="banner_main">
    <el-carousel height="420px;" v-event-system="moveDirection" ref="carousel">
      <el-carousel-item v-for="item in bannerUrls" :key="item">
        <el-image :src="item" :fit="'fill'" lazy>
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">...</span>
          </div>
        </el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import { getBannerUrls } from '../../apis';
export default {
  data() {
    return {
      bannerUrls: [],
    };
  },
  mounted() {
    getBannerUrls().then(res => {
      this.bannerUrls = res;
    });
  },
  methods: {
    moveDirection({ moveX }) {
      if (moveX < 0) {
        this.$refs.carousel.prev();
      } else {
        this.$refs.carousel.next();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.banner_main {
  .el-image {
    height: 100%;
    width: 100%;
  }
}
</style>
