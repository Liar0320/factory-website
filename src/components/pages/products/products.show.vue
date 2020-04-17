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
    <div v-loading="loading" style="min-height:150px">
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
          <p class="products__show__item__txt">{{ item.model }}</p>
        </el-col>
      </el-row>
    </div>
    <!-- 分页 -->
    <div class="overhidden">
      <el-pagination
        :hide-on-single-page="true"
        :small="pagination.small"
        background
        :page-size.sync="pagination.pageSize"
        :current-page.sync="pagination.currentPage"
        @current-change="onPaginationChange"
        @size-change="onPaginationChange"
        :layout="pagination.layout"
        :total="pagination.total"
        :page-sizes="[8, 16, 24]"
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
    nodeType: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      productsList: [],
      filter: '',
      prevNodeType: null,
      loading: false,
    };
  },
  mounted() {
    this.pagination.pageSize = 8;
    /**如果不是pc则采用small布局 */
    this.pagination.small = !systemInfo.IsPC;

    this.onPaginationChange();
  },
  methods: {
    async onPaginationChange() {
      if (!this.nodeType) {
        return;
      }
      this.loading = true;
      let res = await getProductList(
        Object.assign(
          {},
          {
            page: this.pagination.currentPage,
            pageSize: this.pagination.pageSize,
          },
          { type: this.nodeType, model: this.filter },
        ),
      );

      this.loading = false;
      this.productsList = res.data;
      this.pagination.total = res.total;
    },
  },
  watch: {
    filterText() {
      this.filter = this.filterText;
      this.onPaginationChange();
    },
    // filterText() {
    //   this.filter = this.filterText;
    //   this.onPaginationChange();
    // },
    nodeType() {
      if (this.prevNodeType !== null) {
        this.filter = '';
      }
      this.pagination.currentPage = 1;
      this.prevNodeType = this.nodeType;
      this.onPaginationChange();
    },
    // destroyed() {
    //   this.prevNodeType = null;
    // },
    '$i18n.locale'() {
      this.onPaginationChange(true);
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
