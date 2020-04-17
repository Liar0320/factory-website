<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import { fixARoute } from './utils/vue.utils';
// import { test } from './components/apis';
/**测试语法 */
// async function sda() {
//   return new Promise(resolve => {
//     resolve(11);
//   });
// }
// console.log(sda);

export default {
  name: 'app',
  mounted() {
    // fixARoute.call(this);
    // test().then(res => {
    //   console.log(res);
    // });

    function checkIE() {
      return (
        '-ms-scroll-limit' in document.documentElement.style &&
        '-ms-ime-align' in document.documentElement.style
      );
    }
    if (checkIE()) {
      window.addEventListener(
        'hashchange',
        () => {
          var currentPath = window.location.hash.slice(1);

          if (this.$route.path !== currentPath) {
            this.$router.push(currentPath);
          }
        },
        false,
      );
    }
    // console.log(this.$http);
    // var b = this.$http.post('sda/asd', { dsa: 123 });
    // var a = this.$http.get('sda/asd', { dsa: 123 });
    // console.log(a, b);
    // (async () => {
    //   console.log(await sda());
    // })();
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
