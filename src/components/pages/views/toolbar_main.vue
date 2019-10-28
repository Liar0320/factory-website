<template>
  <div class="toolbar_main">
    <dl>
      <!-- 移动到顶部 -->
      <dd
        :title="$t('common.backTop')"
        class="mb1 toolbar_main__item"
        v-lich-back-top
      >
        <span class="toolbar_main__cricle">
          <i class="el-icon-arrow-up fs36 toolbar_main_icon"></i>
        </span>
        <!-- <lange-change></lange-change> -->
      </dd>
      <!-- 咨询电话 -->
      <dd :title="$t('common.consultTel')" class="mb1 toolbar_main__item">
        <span class="toolbar_main__cricle toolbar_main__phone">
          <div>
            <i class="el-icon-phone fs36 toolbar_main_icon mr5"></i>
            <a class="fs26 colorFFF" href="tel:13750832836">13750832836</a>
          </div>
        </span>
      </dd>
      <!-- 二维码 -->
      <dd></dd>
      <!-- 中英互译 -->
      <dd
        :title="$t('toolbar.langTitle')"
        class="mb1 toolbar_main__item"
        v-lange-change="langText"
      >
        <span class="toolbar_main__cricle fs26 toolbar_main__translate">
          {{ langText }}
        </span>
      </dd>
    </dl>
  </div>
</template>
<script>
// import langeChange from 'pages/smallComponent/langeChange.vue';
export default {
  components: {
    // langeChange,
  },
  data() {
    return {
      langText: '',
    };
  },
};
</script>
<style lang="scss" scoped>
.toolbar_main {
  position: fixed;
  right: 20px;
  top: 60%;
  transform: translateY(-50%);
  z-index: 999;
  &__item {
    text-align: right;
  }
  &__cricle {
    display: inline-block;
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background-color: #ddd;
    opacity: 0.5;
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: #0185d0;
      opacity: 1;
      color: #fff;
      &.toolbar_main__phone {
        > div {
          width: 225px;
        }
        width: 225px;
      }
    }
  }
  &__translate {
    line-height: 50px;
  }

  &_icon {
    padding: 6px 0;
  }

  &__phone {
    overflow: hidden;

    > div {
      width: 215px;
    }
    transition: width 0.25s ease-in;
  }
}
</style>
