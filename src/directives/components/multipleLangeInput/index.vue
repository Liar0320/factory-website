<template>
  <!-- demo -->
  <!-- <el-form-item :label="$t('concat.content')" required prop="ffff.cn">
    <multiple-lange-input v-model="formMap.ffff" :label="'帅'" />
  </el-form-item> -->
  <div>
    <div class="multipleLangeInput__item mbsm">
      <el-input
        v-model="value['cn']"
        placeholder="请输入中文"
        :type="type"
        :rows="rows"
        @change="onInputCN('cn')"
      />
      <i
        v-if="loading"
        class="el-icon-loading multipleLangeInput__item__loading"
      />
    </div>
    <div class="multipleLangeInput__item mbsm">
      <el-input
        v-model="value['en']"
        placeholder="please enter English"
        :type="type"
        :rows="rows"
        @change="onInputEN('en')"
      />
      <i
        v-if="loading"
        class="el-icon-loading multipleLangeInput__item__loading"
      />
    </div>
  </div>
</template>
<script>
import { TranslateByBAIDU } from './utils';
const translateByBAIDU = new TranslateByBAIDU();

export default {
  name: 'MultipleLangeInput',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: Object,
      default: () => {
        return { cn: '', en: '' };
      },
    },
    type: {
      type: String,
      default: '',
    },
    rows: {
      // eslint-disable-next-line no-undef
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    onInputCN() {
      this.$emit('change', this.value);
      translateByBAIDU
        .get({ query: this.value.cn, from: 'zh', to: 'en' }, { otherUrl: true })
        .then(res => {
          this.loading = false;
          /** \/r\/n添加回车 */
          this.value.en = res.map(res => res.dst).join('\r\n    ');
        });
      this.loading = true;
    },
    onInputEN() {
      this.$emit('change', this.value);
      translateByBAIDU
        .get({ query: this.value.en, from: 'en', to: 'zh' }, { otherUrl: true })
        .then(res => {
          this.loading = false;
          /** \/r\/n添加回车 */
          this.value.cn = res.map(res => res.dst).join('\r\n    ');
        });
      this.loading = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.mbsm {
  margin-bottom: 5px;
}
.multipleLangeInput {
  &__item {
    position: relative;
    &__loading {
      position: absolute;
      right: 10px;
      top: 12px;
    }
  }
}
</style>
