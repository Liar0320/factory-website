<template>
  <div class="products__show">
    <h3 class="text-left mb15 products__common__title fs20">
      {{ $t('productsCommon.display') }}
      <div class="products__show__filter fr hidden-xs-only">
        <el-input
          v-bind:placeholder="$t('tools.placeholder')"
          v-model="filter"
          @change="onPaginationChange(pagination.currentPage)"
        >
        </el-input>
        <button class="btn-init ">
          <i class="iconfont icon-search fs26"></i>
        </button>
      </div>
    </h3>
    <!-- 主要内容产品 -->
    <div>
      <el-row :gutter="25">
        <el-col class=" hidden-sm-and-up mb25" :xs="24" :sm="12" :md="6">
          <div class="products__show__filter fr wd ">
            <el-input
              v-bind:placeholder="$t('tools.placeholder')"
              v-model="filter"
              @change="onPaginationChange(pagination.currentPage)"
            >
            </el-input>
            <button class="btn-init ">
              <i class="iconfont icon-search fs26"></i>
            </button>
          </div>
        </el-col>
        <el-col
          :xs="24"
          :sm="12"
          :md="6"
          v-for="item in productsList"
          :key="item.$index"
          class="mb25 cursor"
        >
          <el-image
            style="width: 100%; height: 100%"
            :src="item.image"
            :title="$t('header.imgTitle')"
            @click="toggleDialogVisible(item.id)"
            v-fix-fixed-transition="productsDetial.dialogVisible"
          >
          </el-image>
          <p class="products__show__item__txt">{{ item.name }}</p>
        </el-col>
      </el-row>
    </div>
    <!-- 分页 -->
    <div class="overhidden">
      <el-pagination
        :small="pagination.small"
        background
        :page-size="pagination.pageSize"
        :current-page="pagination.currentPage"
        @current-change="onPaginationChange"
        layout=" prev, pager, next"
        :total="pagination.total"
        :pager-count="pagination.pagerCount"
      >
      </el-pagination>
    </div>

    <el-dialog :visible.sync="productsDetial.dialogVisible" :modal="true">
      <products-detial
        :canvas-list="productsList"
        :selected-id="productsDetial.selectedId"
      ></products-detial>
    </el-dialog>
  </div>
</template>

<script>
import { pagination } from '../../../utils/vue.utils';
// import { getProductsList } from '../../services/products.service';
import systemInfo from '../../../utils/browser';
import { getProductList } from '../../apis';
// import productsDetial from './products.detial';
import { productsDetialMixin } from '../products/products.mix';

export default {
  mixins: [pagination, productsDetialMixin],
  // components: { productsDetial },
  props: {
    filterText: null,
  },
  data() {
    return {
      productsList: [],
      filter: '',
    };
  },
  mounted() {
    this.pagination.pageSize = 8;
    /**如果不是pc则采用small布局 */
    this.pagination.small = !systemInfo.IsPC;
    this.onPaginationChange(1);
  },
  methods: {
    async onPaginationChange(val) {
      if (typeof val === 'number') {
        this.pagination.currentPage = val;
      }
      this.productsList = (await getProductList(
        Object.assign(this.pagination, { filterText: this.filter }),
      )).list;
    },
  },
  watch: {
    filterText() {
      this.filter = this.filterText;
      this.onPaginationChange();
    },
  },
};
</script>

<style lang="scss">
.products__show {
  &__item {
    &__txt {
      color: #606266;
      font-size: 14px;
    }
  }
  &__filter {
    width: 300px;
    position: relative;
    > button {
      position: absolute;
      right: 10px;
      top: 7px;
    }
  }
  .wd {
    width: 100%;
  }
}
</style>
