<template>
  <div class="box-card companyinfo">
    <!-- 公司logo -->
    <div slot="header" class="text-left mb15 companyinfo__image">
      <img
        style="max-width:550px"
        :src="companyInfo.logo || ''"
        width="100%"
        height="100%"
        alt=""
        :title="$t('header.imgTitle')"
      />
    </div>
    <!-- 公司详细信息 -->
    <div
      v-for="(value, key) in companyInfoComputed"
      :key="key"
      class="text-left mb15 companyinfo__text"
    >
      <span class="companyinfo__label">{{ $t('companyInfo.' + key) }}</span>
      :
      <span class="companyinfo__value">{{ value }}</span>
    </div>
  </div>
</template>
<script>
// import companyLogo from 'assets/images/companyLogo.png';
// import { getCompnayInfo } from '../../services/comany';
// const clone = require('lodash/clone');
import { getCompanyInfo } from '../../apis';

export default {
  data() {
    return {
      companyInfo: {},
    };
  },
  mounted() {
    getCompanyInfo().then((res = {}) => {
      this.companyInfo = res;
    });
  },
  computed: {
    companyInfoComputed() {
      // const companyInfoCopy = clone(this.companyInfo);
      const companyInfo = {
        phone: '',
        fax: '',
        mobliePhone: '',
        concatUser: '',
        email: '',
        address: '',
      };

      for (const key in companyInfo) {
        if (companyInfo.hasOwnProperty(key)) {
          companyInfo[key] = this.companyInfo[key];
        }
      }

      // delete companyInfo['logo'];
      // delete companyInfo['latLng'];

      return companyInfo;
      // let companyInfo = Object.
      // this.companyInfo;
    },
  },
};
</script>
<style lang="scss" scoped>
@import 'assets/content/color.scss';
// .box-card {
//   // width: 480px;
// }
.companyinfo {
  &__label {
    display: inline-block;
    color: $Font01;
    // width: 120px;
  }
  &__value {
    color: $Font02;
  }
}
</style>
