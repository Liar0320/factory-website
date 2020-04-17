<template>
  <div class="copyright_main p15">
    <div class="container text-left">
      Copyright 2002 - 2018 Jiaxing XC Washer Co., Limited | All Rights Reserved
      |
      <router-link to="app/home" class="color999">home</router-link>
      <lange-change class="fr"></lange-change>
    </div>
  </div>
</template>
<script>
import langeChange from 'pages/smallComponent/langeChange.vue';
export default {
  components: {
    langeChange,
  },
};
</script>
<style lang="scss" scoped>
.copyright_main {
  color: #999999;
  font-size: 12px;
  background: #101010;
  border-top: 1px solid #434343;
}
</style>
