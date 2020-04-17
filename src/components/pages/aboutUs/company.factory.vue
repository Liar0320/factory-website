<template>
  <div
    class="companyFactory "
    v-loading="loading"
    style="min-height:150px"
    v-scroll-in-container="isShow"
  >
    <div v-for="item in workshopList" :key="item.$index" class="">
      <el-divider content-position="left" class="">{{ item.name }}</el-divider>
      <div>
        <el-row :gutter="25">
          <el-col
            :sm="6"
            :xs="12"
            v-for="image in item.imgs"
            :key="image.$index"
            class="mb25"
          >
            <el-image
              style="width: 100%; height: 100%"
              :src="isShow ? image : ''"
              :preview-src-list="item.imgs"
              :title="$t('header.imgTitle')"
              v-fix-fixed-transition
            >
              <image-placehold slot="placeholder" />
            </el-image>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
// import companynews from 'assets/images/companynews.jpg';
import { getWorkshopList } from '../../apis';
export default {
  data() {
    return {
      workshopList: [],
      loading: false,
      isShow: false,
    };
  },
  mounted() {
    this.get();
  },

  methods: {
    async get() {
      this.loading = true;
      this.workshopList = await getWorkshopList();
      this.loading = false;
    },
  },
  // watch: {
  //   '$i18n.locale'() {
  //     this.get();
  //   },
  // },
  // watch(){
  //   this.$refs.elImage.showViewer
  // }
};
</script>
<style lang="scss" scoped>
.companyFactory {
  padding-left: 50px;
}
</style>
