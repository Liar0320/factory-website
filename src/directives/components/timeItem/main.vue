<script>
export default {
  name: 'lchTimeLine',
  //   props: {
  //     reverse: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  provide() {
    return {
      timeline: this,
    };
  },
  render() {
    // const reverse = this.reverse;
    //   const classes = {
    //     'el-timeline': true,
    //     'is-reverse': reverse
    //   };

    let slots = this.$slots.default || [];
    //   if (reverse) {
    //     slots = slots.reverse();
    //   }

    return <ul class="timeline">{slots}</ul>;
  },
};
</script>
<style lang="scss" scoped>
.timeLine {
  margin: 0;
  font-size: 14px;
  list-style: none;
}
</style>
