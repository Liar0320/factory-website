<template>
  <div class="companyFactory ">
    <div v-for="item in workshopList" :key="item.$index" class="">
      <el-divider content-position="left" class="">{{ item.name }}</el-divider>
      <div>
        <el-row :gutter="25">
          <el-col
            :sm="6"
            :xs="12"
            v-for="image in item.images"
            :key="image.$index"
            class="mb25"
          >
            <el-image
              style="width: 100%; height: 100%"
              :src="image"
              :preview-src-list="item.images"
              :title="$t('header.imgTitle')"
              v-fix-fixed-transition
            >
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
    };
  },
  async mounted() {
    this.workshopList = await getWorkshopList();
  },
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
