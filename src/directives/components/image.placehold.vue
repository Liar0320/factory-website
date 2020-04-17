<template>
  <div class="image-slot">
    <img :src="logo" alt="" width="100%" height="100%" />
    <p class="image-slot__label">加载中...</p>
  </div>
</template>
<script>
let logo = require('@/assets/images/logo.icon.png');

console.log(logo);
export default {
  data() {
    return {
      logo: logo,
    };
  },
  methods: {},
};
</script>
<style lang="scss">
@import 'assets/content/color.scss';
.image-slot {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  flex-direction: column;
  position: relative;
}
.image-slot__label {
  position: absolute;
  bottom: 0;
  line-height: initial;
}
</style>
