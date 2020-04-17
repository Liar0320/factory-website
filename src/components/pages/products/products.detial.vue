<template>
  <div class="modalViewer">
    <!-- ARROW -->
    <template v-if="!isSingle">
      <span
        class="modal__btn modal__prev"
        :class="{ 'is-disabled': !infinite && isFirst }"
        @click="prev"
      >
        <i class="el-icon-arrow-left" />
      </span>
      <span
        class="modal__btn modal__next"
        :class="{ 'is-disabled': !infinite && isLast }"
        @click="next"
      >
        <i class="el-icon-arrow-right" />
      </span>
    </template>
    <!-- ACTIONS -->
    <!-- CANVAS -->
    <div class="modal__canvas" v-if="currentProduct">
      <el-row :gutter="15">
        <el-col :span="24" class="mb15">
          <el-image
            class="productsInfo__image"
            :src="currentProduct.image"
          ></el-image>
        </el-col>
        <el-col :span="24">
          <h4 class="text-center mb15 productsInfo__title">
            {{ currentProduct.name }}
          </h4>
          <dl class="text-center">
            <!-- <dd class="mb15">
              <span class="productsInfo__label">{{
                $t('productsInfo.texture')
              }}</span>
              <span class="productsInfo__p">
                :不锈钢
              </span>
            </dd> -->
            <dd class="mb15">
              <span class="productsInfo__label">{{
                $t('productsInfo.model')
              }}</span>
              <span class="productsInfo__p">
                {{ currentProduct.model }}
              </span>
            </dd>
          </dl>
        </el-col>
      </el-row>
      <!-- <el-carousel trigger="hover" height="150px">
          <el-carousel-item v-for="item in items" :key="item.key">
          </el-carousel-item>
        </el-carousel>
      <el-row :gutter="20">
        <el-col
          :xs="12"
          :sm="6"
          v-for="product in canvasList"
          :key="product.$index"
        >
          <el-image :src="product.images"></el-image>
        </el-col>
      </el-row> -->
    </div>
  </div>
</template>

<script>
// import { on, off } from 'element-ui/src/utils/dom';
// import { rafThrottle } from 'element-ui/src/utils/util';
import systemInfo from '../../../utils/browser';

export default {
  name: 'modalViewer',

  props: {
    canvasList: {
      type: Array,
      default: () => [],
    },
    onSwitch: {
      type: Function,
      default: () => {
        return {};
      },
    },
    onClose: {
      type: Function,
      default: () => {
        return {};
      },
    },
    selectedId: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      index: 0,
      isShow: false,
      infinite: true,
    };
  },
  computed: {
    isSingle() {
      return !systemInfo.IsPC || this.canvasList.length <= 1;
    },
    isFirst() {
      return this.index === 0;
    },
    isLast() {
      return this.index === this.canvasList.length - 1;
    },
    currentProduct() {
      return this.canvasList[this.index];
    },
  },
  watch: {
    index: {
      handler: function(val) {
        this.onSwitch(val);
      },
    },
    selectedId(id) {
      if (!id) {
        return (this.index = 0);
      }
      this.index = this.canvasList.findIndex(item => item.id === id);
    },
  },
  methods: {
    hide() {
      // this.deviceSupportUninstall();
      this.onClose();
    },
    // deviceSupportInstall() {
    //   this._keyDownHandler = rafThrottle(e => {
    //     const keyCode = e.keyCode;

    //     switch (keyCode) {
    //       // ESC
    //       case 27:
    //         this.hide();
    //         break;
    //       // LEFT_ARROW
    //       case 37:
    //         this.prev();
    //         break;
    //       // RIGHT_ARROW
    //       case 39:
    //         this.next();
    //         break;
    //       default:
    //         void 0;
    //     }
    //   });
    //   on(document, 'keydown', this._keyDownHandler);
    // },
    // deviceSupportUninstall() {
    //   off(document, 'keydown', this._keyDownHandler);
    //   this._keyDownHandler = null;
    // },
    prev() {
      if (this.isFirst && !this.infinite) {
        return;
      }
      const len = this.canvasList.length;

      this.index = (this.index - 1 + len) % len;
    },
    next() {
      if (this.isLast && !this.infinite) {
        return;
      }
      const len = this.canvasList.length;

      this.index = (this.index + 1) % len;
    },
  },
  mounted() {
    this.index =
      this.canvasList.findIndex(item => item.id === this.selectedId) || 0;
    // this.deviceSupportInstall();
  },
  destroyed() {
    // this.deviceSupportUninstall();
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/content/color.scss';
.modal {
  &Viewer {
    padding: 30px 15px;
  }
  &__btn {
    position: absolute;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 50%;
    opacity: 0.8;
    cursor: pointer;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  &__next,
  &__prev {
    top: 50%;
    width: 44px;
    height: 44px;
    font-size: 24px;
    color: #fff;
    background-color: #606266;
    border-color: #fff;
  }
  &__prev {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    left: -60px;
  }
  &__next {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    right: -60px;
    text-indent: 2px;
  }
  &__containt {
    width: 100%;
    height: 100%;
    // display: -webkit-box;
    // display: -ms-flexbox;
    // display: flex;
    // -webkit-box-pack: center;
    // -ms-flex-pack: center;
    // justify-content: center;
    // -webkit-box-align: center;
    // -ms-flex-align: center;
    // align-items: center;
  }
}
.productsInfo {
  &__image {
  }
  &__title {
    font-family: 'Microsoft Yahei';

    font-size: 20px;
    color: $Font01;
    font-weight: 600;
  }
  &__label {
    font-size: 16px;
    color: $Font03;
  }
  &__p {
    font-size: 16px;
    color: $Font02;
  }
}
</style>
