<template>
  <div class="homeComponent homeProducts" v-scroll-in-container="isShow">
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
        <el-radio-group
          v-model="productsType"
          @change="getProducts"
          v-loading="loading1"
        >
          <el-radio-button
            v-for="item in productsTypeList"
            :key="item.id"
            :label="item.id"
            >{{ item.name }}</el-radio-button
          >
          <!-- <el-radio-button
            :label="$t('home.products.title') + '2'"
          ></el-radio-button>
          <el-radio-button
            :label="$t('home.products.title') + '3'"
          ></el-radio-button> -->
        </el-radio-group>
      </div>
      <!-- 产品轮播展示 -->
      <div v-loading="loading" style="min-height:150px">
        <el-carousel
          :interval="30000"
          :height="'590px'"
          :indicator-position="'outside'"
          @change="carouselChange"
        >
          <el-carousel-item v-for="item in cardCounts" :key="item">
            <div>
              <el-row :gutter="25">
                <el-col
                  :xs="24"
                  :sm="12"
                  :md="6"
                  v-for="item in productsList"
                  :key="item.$index"
                  class="mb25 cursor il"
                >
                  <el-image
                    style="width: 100%; height: 255px; line-height: 255px"
                    :src="isShow ? item.image : ''"
                    :title="$t('header.imgTitle')"
                    @click="toggleDialogVisible(item.id)"
                    v-fix-fixed-transition="productsDetial.dialogVisible"
                  >
                    <image-placehold slot="placeholder" />
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
import { getProductList, getProductTypesList } from '../../apis';
import { productsDetialMixin } from '../products/products.mix';
export default {
  mixins: [productsDetialMixin],
  data() {
    return {
      productsTypeList: [],
      productsType: '',
      carouselIndex: 0,
      productsListAll: [],
      cardCounts: 0,
      loading: false,
      loading1: false,
      isShow: false,
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
  mounted() {
    this.get();
  },
  methods: {
    async get() {
      this.loading1 = true;
      this.productsTypeList = await getProductTypesList();
      this.loading1 = false;
      this.productsTypeList.length = 3;
      if (!this.productsTypeList.length) {
        return;
      }
      this.productsType = this.productsTypeList[0].id;
      this.getProducts(this.productsType);
    },
    carouselChange() {
      let current = arguments[0];

      this.carouselIndex = current;
    },

    async getProducts(type = this.productsType) {
      this.loading = true;
      this.productsListAll = (
        await getProductList({
          page: 1,
          pageSize: 32,
          type: type,
        })
      ).data;
      this.loading = false;

      this.cardCounts = parseInt(this.productsListAll.length / 8) + 1;
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
.homeProducts {
  $bgc: #f5f5f5;
  background-color: $bgc;
  .el-divider__text {
    background-color: $bgc;
  }
  .il .el-image__inner {
    display: inline-block;
    vertical-align: middle;
    height: inherit;
    height: initial;
  }
}
</style>
