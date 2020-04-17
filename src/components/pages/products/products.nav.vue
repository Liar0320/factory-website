<template>
  <div class="products__nav">
    <h3 class="text-left mb15 products__common__title fs20 custom-tree-node">
      {{ $t('productsCommon.nav') }}
    </h3>
    <div v-loading="loading" style="min-height:150px">
      <el-input
        v-model="filterText"
        class="mbs"
        :placeholder="$t('tools.placeholder')"
      />

      <el-tree
        v-if="currentNodeKey"
        ref="tree"
        class="filter-tree"
        node-key="id"
        accordion
        :data="data"
        :props="defaultProps"
        :current-node-key="currentNodeKey"
        default-expand-all
        :highlight-current="true"
        :filter-node-method="filterNode"
        @current-change="nodeChange"
      >
        <span slot-scope="{ node, data }" class="custom-tree-node fs14">
          <div :title="data.name">{{ data.name }}</div>
          <!-- <div>{{ data.name.en }}</div> -->
          <!-- <span>
          <el-button
            type="text"
            size="mini"
            icon="el-icon-plus"
            title="添加"
            @click.stop="() => append(data)"
          />
          <el-button
            type="text"
            size="mini"
            icon="el-icon-edit"
            title="编辑"
            @click.stop="() => edit(data)"
          />
          <el-button
            type="text"
            size="mini"
            icon="el-icon-delete"
            title="删除"
            @click.stop="() => remove(data)"
          />
        </span> -->
        </span>
        <!-- :filter-node-method="filterNode" -->
      </el-tree>
    </div>
  </div>
</template>

<script>
// import { getProductTypesList } from '../../../mocks';
import { getProductTypesList } from '../../apis';
export default {
  // components: {},
  // props: {
  //   filterText: {
  //     type: String,
  //     default: ""
  //   }
  // },
  data() {
    return {
      filterText: '',
      data: [],
      currentNodeKey: 10000,
      defaultProps: {
        children: 'children',
        label: 'label',
      },
      loading: false,
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
    '$i18n.locale'() {
      this.get(true).then(() => {
        let key = this.currentNodeKey;

        this.currentNodeKey = false;
        this.$nextTick(() => {
          this.currentNodeKey = key;
        });
      });
    },
  },
  async mounted() {
    this.get();
  },

  methods: {
    async get(flag) {
      this.loading = true;
      this.data = await getProductTypesList();
      this.data.unshift({
        name: this.$t('tools.all'),
        id: 10000,
        pid: 10001,
      });
      if (!flag && this.data.length > 0) {
        this.currentNodeKey = this.data[0].id;
        this.nodeChange(this.data[0]);
      }

      this.loading = false;
    },
    nodeChange(data) {
      this.currentNodeKey = data.id;
      this.$emit('setNav', data.id);
    },

    filterNode(value, data) {
      if (!value) {
        return true;
      }

      return JSON.stringify(data.name || {}).includes(value);
    },
  },
};
</script>

<style lang="scss">
.fs14 {
  font-size: 14px;
}
.mbs {
  margin-bottom: 5px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // font-size: 14px;
  padding-right: 8px;
}
// .products__nav .is-current , .el-tree-node:focus>.el-tree-node__content{
//   background-color: #409EFF;
//   color:#FFF;
//   border-radius: 4px;
//   & .el-button--text{
//      color:#FFF;
//   }
// }
.products__nav
  .el-tree--highlight-current
  .el-tree-node.is-current
  > .el-tree-node__content {
  background-color: #409eff;
  color: #fff;
  border-radius: 4px;
  & .el-button--text {
    color: #fff;
  }
}
</style>
