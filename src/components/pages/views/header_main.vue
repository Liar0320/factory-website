<template>
  <div class="header__main  ">
    <div class="container tly50">
      <el-row :gutter="20">
        <!-- 网站标志 -->
        <el-col :xs="24" :sm="16" :md="10" :lg="12">
          <div class="header__logo fl">
            <router-link to="/app/home" v-bind:title="$t('header.imgTitle')">
              <img
                width="100%"
                height="100%"
                v-bind:src="logoUrl"
                alt="这里是您的网站名称"
              />
            </router-link>
          </div>
        </el-col>
        <!-- 联系电话 -->
        <el-col :xs="24" :md="8" :lg="7" class="hidden-sm-and-down">
          <div class="header__tel fl">
            <s class="header__tel__ico header__tel__ico--image"></s>
            <span class="header__tel__ico--span">+86 0000 96877</span>
            <br />
            <span class="header__tel__ico--span">+86 0000 96877</span>
          </div>
        </el-col>
        <!-- 全局搜索 -->
        <el-col :xs="24" :sm="8" :md="6" :lg="5">
          <el-row :gutter="10">
            <el-col :span="20" :sm="24">
              <div class="header__search">
                <input
                  class="header__search__input"
                  type="text"
                  name="key"
                  v-model="filter"
                  @change="routerGo(filter)"
                  v-bind:placeholder="$t('tools.placeholder')"
                />
                <!-- <input
                class="header__search__input"
                type="text"
                name="key"
                value="请输入关键字"
                onfocus="if(this.value==defaultValue)this.value=''"
                onblur="if(this.value=='')this.value=defaultValue"
              /> -->
                <button class="btn-init header__search__btn">
                  <i class="iconfont icon-search fs26"></i>
                </button>
              </div>
            </el-col>
            <el-col :span="4" class="hidden-sm-and-up">
              <div class="">
                <el-button
                  size="mini"
                  type="primary"
                  @click="toggleNavMenu()"
                  class="el-icon-menu header__menuBtn"
                ></el-button>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
const logo = require('@/assets/images/logo.png');
const telIco = require('@/assets/images/icon.png');

import { routerGo } from '../../services/products.service';

import eventHub from '../../../eventHub';

export default {
  mixins: [routerGo],
  data: function() {
    return {
      logoUrl: logo,
      telIco: telIco,
      filter: '',
    };
  },
  methods: {
    toggleNavMenu() {
      eventHub.$emit('isShowNavMenu');
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  &__main {
    // width: 100%;

    z-index: 100;
    background: #fff;
  }

  @media (min-width: 768px) {
    &__main {
      height: 120px;
      .tly50 {
        transform: translateY(50%);
      }
    }
  }
  @media (max-width: 768px) {
    &__main {
      margin: 30px 30px 10px 30px;
    }
  }
  &__logo {
    height: 60px;
  }
  &__tel {
    line-height: 25px;
    &__ico {
      float: left;
      width: 57px;
      height: 57px;
      margin-right: 10px;
      background-position: 0 0;
    }
    &__ico--image {
      background: url(../../../assets/images/icon.png) no-repeat;
      display: inline-block;
      vertical-align: middle;
    }
    &__ico--span {
      font-size: 30px;
      font-weight: bold;
      color: #0185d0;
      font-family: arial;
    }
  }
  &__search {
    border: 2px solid #1048a0;
    position: relative;
    // width: 100%;
    margin: 6px 0;
    &__input {
      height: 41px;
      text-indent: 10px;
      line-height: 41px;
      border: 0px;
      background: none;
      outline: none;
      color: #999;
      width: 100%;
    }
    &__btn {
      position: absolute;
      right: 0;
      top: 0;
      margin-top: 6px;
    }
  }

  &__menuBtn {
    line-height: 30px;
    font-size: 20px;
    margin: 6px 0;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
