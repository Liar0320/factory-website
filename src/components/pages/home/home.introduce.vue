<template>
  <div class="homeComponent companyIntroduce">
    <div class="container">
      <!-- 标题 -->
      <!-- <h2 class="homeComponent__title">{{ $t('home.introduce.title') }}</h2> -->
      <h3 class="homeComponent__titleSmall ">
        <el-divider>{{ $t('home.introduce.title') }}</el-divider>
      </h3>
      <!-- 简介 -->
      <div class="companyIntroduce__brief mb25">
        <p>
          招商信诺人寿是一家专业、稳健、创新、以健康险为专长的中外合资寿险公司,
          为企业和个人提供涵盖保险保障、
          健康管理、财富规划的全方位产品及服务，中外股东分别为招商银行和美国信诺集团。
        </p>
      </div>
      <!-- 宗旨 -->
      <p class="homeComponent__tenet ">
        商信诺人寿的使命是帮助我们的客户更健康，更幸福，更有保障！
      </p>
      <!-- 商标 -->
      <img
        :src="companyLogo"
        class="mb5 companyLogo mb15"
        alt=""
        style="width:400px"
      />
      <!-- <el-image
        :src=""
      
       
      ></el-image> -->
      <!-- 了解更多 -->
      <div>
        <el-link type="primary" class="fs16" href="/#/app/aboutUs/index">{{
          $t('common.more')
        }}</el-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getCompanyInfo } from '../../apis';
export default {
  data() {
    return {
      companyLogo: null,
    };
  },
  async mounted() {
    let companyInfo = await getCompanyInfo();

    if (companyInfo) {
      this.companyLogo = companyInfo.logo;
    }
  },
};
</script>

<style lang="scss" scoped>
.companyIntroduce {
  // padding: 30px 0 30px;
  // &__title {
  //   font-size: 36px;
  //   color: #333;
  //   margin-bottom: 5px;
  // }
  &__brief {
    text-align: center;
    & > p {
      display: inline-block;
      font-size: 18px;
      color: #777;
      max-width: 1000px;
    }
  }
  .fs16 {
    font-size: 16px;
  }
  // .companyLogo {
  //   // height: 100px;
  //   // width: 400px;
  // }
  // &__tenet {
  //   font-size: 18px;
  //   color: #777;
  //   font-weight: bold;
  // }
}
</style>
