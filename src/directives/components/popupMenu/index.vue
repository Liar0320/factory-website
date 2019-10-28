<script>
export default {
  mounted() {
    console.log(this.$slots);
  },
  render() {
    let slots = this.$slots.default || [];

    slots.forEach(vnode => {
      if (typeof vnode['data'] !== 'object') {
        vnode['data'] = {};
      }
      if (typeof vnode['data'].staticClass !== 'string') {
        vnode['data'].staticClass = '';
      }
      vnode['data'].staticClass += ' popupMenu__item';
    });

    return (
      <nav class="popupMenu">
        <input
          type="checkbox"
          href="#"
          class="popupMenu--open"
          name="popupMenu--open"
          id="popupMenu--open"
        />
        <label class="popupMenu__open-button" for="popupMenu--open">
          <span class="popupMenu__line popupMenu__line-1" />
          <span class="popupMenu__line popupMenu__line-2" />
          <span class="popupMenu__line popupMenu__line-3" />
        </label>
        <div class="popupMenu__content">{slots}</div>
      </nav>
    );
  },
};
</script>

<style lang="scss" scoped>
// @import "./util";
//#region工具函数
//阶乘
@function fact($number) {
  $value: 1;
  @if $number>0 {
    @for $i from 1 through $number {
      $value: $value * $i;
    }
  }
  @return $value;
}
//平方
@function pow($number, $exp) {
  $value: 1;
  @if $exp>0 {
    @for $i from 1 through $exp {
      $value: $value * $number;
    }
  } @else if $exp < 0 {
    @for $i from 1 through -$exp {
      $value: $value / $number;
    }
  }
  @return $value;
}
//圆周率
@function pi() {
  @return 3.14159265359;
}
//弧度
@function rad($angle) {
  $unitless: $angle / 180 * pi();
  @return $unitless;
}
//正弦函数
@function sin($angle) {
  $sin: 0;
  $angle: rad($angle);
  // Iterate a bunch of times.
  @for $i from 0 through 10 {
    $sin: $sin + pow(-1, $i) * pow($angle, (2 * $i + 1)) / fact(2 * $i + 1);
  }
  @return $sin;
}
//余弦函数
@function cos($angle) {
  $cos: 0;
  $angle: rad($angle);
  // Iterate a bunch of times.
  @for $i from 0 through 10 {
    $cos: $cos + pow(-1, $i) * pow($angle, 2 * $i) / fact(2 * $i);
  }
  @return $cos;
}
//#endregion

//popupMenu__item按钮数量
$lengthOfpopupMenuItem: 6;

//popupMenu__item按钮对应的颜色
$colors__menu-item: #669ae1, #70cc72, #fe4365, #c49cde, #62c2e4, #fc913a,
  #669ae1;

//popupMenu__item按钮的具体样式
@mixin itemStyle($bgcolor) {
  background-color: $bgcolor;
  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
  &:hover {
    background: #eeeeee;
    color: $bgcolor;
    text-shadow: none;
  }
}

.popupMenu {
  // margin: auto;
  // position: absolute;
  // top: 0;
  // bottom: 0;
  // left: 0;
  // right: 0;
  width: 80px;
  height: 80px;
  text-align: center;
  box-sizing: border-box;
  font-size: 26px;

  //按钮 和 弹出按钮
  &__item,
  &__open-button {
    background: #eeeeee;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    margin-left: -40px;
    position: absolute;
    color: #ffffff;
    text-align: center;
    line-height: 80px;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition: -webkit-transform ease-out 200ms;
    transition: -webkit-transform ease-out 200ms;
    transition: transform ease-out 200ms;
    transition: transform ease-out 200ms, -webkit-transform ease-out 200ms;
  }

  //按钮
  &__open-button {
    z-index: 2;
    -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -webkit-transition-duration: 400ms;
    transition-duration: 400ms;
    -webkit-transform: scale(1.1, 1.1) translate3d(0, 0, 0);
    transform: scale(1.1, 1.1) translate3d(0, 0, 0);
    cursor: pointer;
    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);

    &:hover {
      -webkit-transform: scale(1.2, 1.2) translate3d(0, 0, 0);
      transform: scale(1.2, 1.2) translate3d(0, 0, 0);
    }
  }

  //生成线条图案
  &__line {
    width: 25px;
    height: 3px;
    background: #596778;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -12.5px;
    margin-top: -1.5px;
    -webkit-transition: -webkit-transform 200ms;
    transition: -webkit-transform 200ms;
    transition: transform 200ms;
    transition: transform 200ms, -webkit-transform 200ms;

    //线条的位置
    @for $i from 0 to 3 {
      &-#{ $i + 1 } {
        // @debug -8 + ( 8 * $i ) + px;
        $offset: -8 + (8 * $i) + px;
        -webkit-transform: translate3d(0, $offset, 0);
        transform: translate3d(0, $offset, 0);
      }
    }
  }

  //弹出按钮
  &__item {
    // 默认采用 rotate 旋转
    .popupMenu--open:checked ~ .popupMenu__content & {
      -webkit-transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
      transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
      @for $i from 0 to $lengthOfpopupMenuItem {
        //因为他是从第三个兄弟节点开始的  处理按钮的定位
        &:nth-child(#{ $i + 1 }) {
          //根据三角函数可得 下一个点的坐标
          // x = R*sin(deg) y = R*cos(deg)
          $sinOffset: sin((360 / $lengthOfpopupMenuItem) * $i);
          $cosOffset: cos((360 / $lengthOfpopupMenuItem) * $i);
          $x: 100 * $sinOffset + px;
          $y: -100 * $cosOffset + px;
          $time: $i * 100 + 180 + ms;
          transition-duration: $time;
          -webkit-transition-duration: $time;
          -webkit-transform: translate3d($x, $y, 0);
          transform: translate3d($x, $y, 0);
        }
      }
    }
    // 增加方向向上
    .popupMenu[data-dir='top']
      .popupMenu--open:checked
      ~ .popupMenu__content
      & {
      -webkit-transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
      transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
      @for $i from 0 to $lengthOfpopupMenuItem {
        //因为他是从第三个兄弟节点开始的  处理按钮的定位
        &:nth-child(#{ $i + 1 }) {
          //根据三角函数可得 下一个点的坐标
          // x = R*sin(deg) y = R*cos(deg)
          // $sinOffset: sin((360 / $lengthOfpopupMenuItem) * $i);
          // $cosOffset: cos((360 / $lengthOfpopupMenuItem) * $i);
          // $x: 100 * $sinOffset + px;
          $y: -100 - $i * 100 + px;
          $time: 300;
          $offsetTime: $time / ($lengthOfpopupMenuItem - 1);
          transition-delay: ($lengthOfpopupMenuItem - 1 - $i) *
            $offsetTime +
            ms;
          transition-duration: $time + ms;
          -webkit-transition-duration: $time + ms;
          -webkit-transform: translate3d(0, $y, 0);
          transform: translate3d(0, $y, 0);
        }
      }
    }
    //to
    // 添加样式
    @for $i from 0 to $lengthOfpopupMenuItem {
      &:nth-child(#{ $i + 1}) {
        @include itemStyle(nth($colors__menu-item, $i + 1));
      }
    }

    //to
    // 添加默认动画时间
    @for $i from 0 to $lengthOfpopupMenuItem {
      &:nth-child(#{ $i + 1}) {
        -webkit-transition-duration: 180ms;
        transition-duration: 180ms;
      }
    }

    & > i {
      position: relative;
      top: 50%;
      transform: translate(0, -50%);
    }
  }

  //控制 按钮开关
  &--open {
    display: none;
    //如果按钮被打开
    &:checked + .popupMenu__open-button {
      -webkit-transition-timing-function: linear;
      transition-timing-function: linear;
      -webkit-transition-duration: 200ms;
      transition-duration: 200ms;
      -webkit-transform: scale(0.8, 0.8) translate3d(0, 0, 0);
      transform: scale(0.8, 0.8) translate3d(0, 0, 0);

      //线条发生改变
      .popupMenu__line-1 {
        -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
        transform: translate3d(0, 0, 0) rotate(45deg);
      }
      .popupMenu__line-2 {
        -webkit-transform: translate3d(0, 0, 0) scale(0.1, 1);
        transform: translate3d(0, 0, 0) scale(0.1, 1);
      }
      .popupMenu__line-3 {
        -webkit-transform: translate3d(0, 0, 0) rotate(-45deg);
        transform: translate3d(0, 0, 0) rotate(-45deg);
      }
    }
  }
}
</style>
