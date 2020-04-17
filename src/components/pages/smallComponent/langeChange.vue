<template>
  <div class="langeChange color999">
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
export default {
  data() {
    return {
      lang: 'en-US',
    };
  },
  methods: {
    langChange(lang) {
      let loading = this.$loading({
        text: this.$t('tools.toggleLang'),
      });

      setTimeout(() => {
        this.$i18n.locale = lang;
        localStorage.setItem('i18n', lang);
        loading.close();
        loading.$destroy();
      }, 500);
      // location.reload();
    },
  },
  mounted() {
    this.lang = this.$i18n.locale;
  },
  watch: {
    '$i18n.locale'() {
      this.lang = this.$i18n.locale;
    },
  },
};
</script>
<style lang="scss">
@import 'assets/content/color.scss';
.langeChange {
  display: inline-block;
  width: 140px;
  .el-switch__label {
    color: $Font04;
  }
  .el-switch__label.is-active {
    color: #409eff;
  }
}
</style>
