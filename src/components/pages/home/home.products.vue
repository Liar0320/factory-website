<template>
  <div class="homeComponent homeProducts">
    <div class="container">
      <!-- 标题 -->
      <!-- <h2 class="homeComponent__title">{{ $t('home.products.title') }}</h2> -->
      <h3 class="homeComponent__titleSmall">
        <el-divider>{{ $t('home.products.title') }}</el-divider>
      </h3>
      <!-- 宗旨 -->
      <p class="homeComponent__tenet mb15">
        {{ $t('home.products.purpose') }}
      </p>
      <!--产品分类名 -->
      <div class="mb15">
        <el-radio-group v-model="productsType">
          <el-radio-button
            :label="$t('home.products.title') + '1'"
          ></el-radio-button>
          <el-radio-button
            :label="$t('home.products.title') + '2'"
          ></el-radio-button>
          <el-radio-button
            :label="$t('home.products.title') + '3'"
          ></el-radio-button>
        </el-radio-group>
      </div>
      <!-- 产品轮播展示 -->
      <div>
        <el-carousel
          :interval="30000"
          :height="'590px'"
          :indicator-position="'outside'"
          @change="carouselChange"
        >
          <el-carousel-item v-for="item in 4" :key="item">
            <div>
              <el-row :gutter="25">
                <el-col
                  :xs="24"
                  :sm="12"
                  :md="6"
                  v-for="item in productsList"
                  :key="item.$index"
                  class="mb25 cursor"
                >
                  <el-image
                    style="width: 100%; height: 255px"
                    :src="item.image"
                    :title="$t('header.imgTitle')"
                    @click="toggleDialogVisible(item.id)"
                    v-fix-fixed-transition="productsDetial.dialogVisible"
                    lazy
                  >
                  </el-image>
                  <p class="products__item__txt">{{ item.name }}</p>
                </el-col>
              </el-row>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 了解更多 -->
      <div>
        <el-link type="primary" href="/#/app/products">{{
          $t('common.more')
        }}</el-link>
      </div>

      <!-- 产品细节 -->
      <div>
        <el-dialog :visible.sync="productsDetial.dialogVisible" :modal="true">
          <products-detial
            :canvas-list="productsList"
            :selected-id="productsDetial.selectedId"
          ></products-detial>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
// import companynews from 'assets/images/companynews.jpg';
// import { getCompnayInfo } from '../../services/comany';
// import { getProductsList } from '../../services/products.service';
import { getProductList } from '../../apis';
import { productsDetialMixin } from '../products/products.mix';
export default {
  mixins: [productsDetialMixin],
  data() {
    return {
      productsType: '',
      carouselIndex: 0,
      productsListAll: [],
    };
  },
  computed: {
    productsList() {
      return this.productsListAll.slice(
        this.carouselIndex * 8,
        (this.carouselIndex + 1) * 8,
      );
    },
  },
  async mounted() {
    this.productsListAll = (await getProductList({ pageSize: 32 })).list;
  },
  methods: {
    carouselChange() {
      let current = arguments[0];

      this.carouselIndex = current;
    },
  },
};
</script>

<style lang="scss" scoped>
.homeProducts {
  $bgc: #f5f5f5;
  background-color: $bgc;
  .el-divider__text {
    background-color: $bgc;
  }
}
</style>
