<template>
  <div class="langeChange">
    <el-switch
      v-model="lang"
      @change="langChange(lang)"
      active-text="中文"
      inactive-text="English"
      active-value="zh-CN"
      inactive-value="en-US"
    >
    </el-switch>
  </div>
</template>
<script>
import { setCookie } from '@/utils';
export default {
  data() {
    return {
      lang: 'en-US',
    };
  },
  methods: {
    langChange(lang) {
      this.$i18n.locale = lang;
      setCookie('i18n', lang);
    },
  },
  mounted() {
    this.lang = this.$i18n.locale;
  },
};
</script>
<style lang="scss" scoped>
.langeChange {
  display: inline-block;
  width: 140px;
}
</style>
