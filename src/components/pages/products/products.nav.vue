<template>
  <div class="products__nav">
    <h3 class="text-left mb15 products__common__title fs20">
      {{ $t('productsCommon.nav') }}
    </h3>
    <!-- <el-input placeholder="输入关键字进行过滤" v-model="filterText"> </el-input> -->

    <el-tree
      class="filter-tree"
      accordion
      :data="data"
      :props="defaultProps"
      default-expand-all
    >
      <!-- ref="tree" -->
      <!-- :filter-node-method="filterNode" -->
    </el-tree>
  </div>
</template>

<script>
// import { getProductTypesList } from '../../../mocks';
import { getProductTypesList } from '../../apis';
export default {
  props: {
    filterText: String,
  },
  // watch: {
  //   filterText(val) {
  //     this.$refs.tree.filter(val);
  //   },
  // },

  // methods: {
  //   filterNode(value, data) {
  //     if (!value) {
  //       return true;
  //     }

  //     return data.label.indexOf(value) !== -1;
  //   },
  // },

  data() {
    return {
      // filterText: '',
      data: [],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    };
  },
  async mounted() {
    this.data = await getProductTypesList();
  },
};
</script>

<style lang="scss"></style>
