<template>
  <li class="timeline__item">
    <div class="timeline__item__tail"></div>
    <div class="timeline__item__wrap">
      <div class="timeline__item__datetime" :data-datetime="timestamp"></div>
      <div class="timeline__item__content">
        <slot></slot>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    timestamp: String || Number,
  },
  name: 'lchTimelineItem',
};
</script>
<style lang="scss" scoped>
.timeline__item {
  position: relative;
  &__tail {
    position: absolute;
    left: 4px;
    height: 100%;
    border-left: 2px solid #e4e7ed;
    .timeline__item:last-child & {
      display: none;
    }
  }

  &__wrap {
    // width: 100%;
    padding-left: 80px;
  }
  &__datetime {
    display: inline-block;
    position: absolute;
    left: -37px;
    font-size: 26px;
    color: #fff;
    &::before {
      content: attr(data-datetime);
      line-height: 80px;
      display: inline-block;
      height: 80px;
      position: relative;
      width: 80px;
      background-color: #39adf0;
      border-radius: 50%;
    }
  }
  &__content {
    color: #303133;
  }
}
</style>
