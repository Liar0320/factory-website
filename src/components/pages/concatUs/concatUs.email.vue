<template>
  <div data-aos="slide-left" v-polyfills-aos>
    <div class="container p15" v-loading="loading" style="min-height:150px">
      <!-- 标题 -->
      <h3 class="aboutUs__main__title mb15">{{ $t('navMain.menus.email') }}</h3>
      <!-- 表单组件 name company phone email message -->
      <el-form
        ref="concatForm"
        :model="formMap"
        :rules="rules"
        label-width="80px"
      >
        <el-row>
          <el-col :sm="12">
            <el-form-item :label="$t('concat.name')" required prop="name">
              <el-input v-model="formMap.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="12">
            <el-form-item :label="$t('concat.company')">
              <el-input v-model="formMap.company"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="12">
            <el-form-item :label="$t('concat.phone')" required prop="phone">
              <el-input v-model="formMap.phone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="12">
            <el-form-item :label="$t('concat.email')" required prop="email">
              <el-input v-model="formMap.email"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item :label="$t('concat.content')" required prop="content">
          <el-input type="textarea" v-model="formMap.content"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('concatForm')"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { Concat } from '../../models';
import { setFeedback } from '../../apis';
// const clone = require('lodash/cloneDeep');
// const clone = item => JSON.parse(JSON.stringify(item));

export default {
  data() {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'));
      }
      const reg = new RegExp(/^\d{1,17}$/) || /^1[3|4|5|7|8][0-9]\d{8}$/;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('请输入正确的手机号'));
      }
    };

    return {
      formMap: {},
      rules: {
        name: [
          {
            required: true,
            message: this.getMessage('concat.name'),
            trigger: 'blur',
          },
        ],
        phone: [
          {
            required: true,
            message: this.getMessage('concat.phone'),
            trigger: 'blur',
          },
          {
            validator: checkPhone,
            message: this.getMessage('concat.phone', 'validInfo.format'),
            trigger: ['blur', 'change'],
          },
        ],
        email: [
          {
            required: true,
            message: this.getMessage('concat.email'),
            trigger: 'blur',
          },
          {
            type: 'email',
            message: this.getMessage('concat.email', 'validInfo.format'),
            trigger: ['blur', 'change'],
          },
        ],
        message: [
          {
            required: true,
            message: this.getMessage('concat.message'),
            trigger: 'blur',
          },
        ],
      },
      loading: false,
    };
  },
  mounted() {
    this.formMap = {} || new Concat();
  },
  methods: {
    getMessage(cszd, suffix) {
      suffix = suffix ? this.$t(suffix) : this.$t('validInfo.empty');

      return this.$t(cszd) + suffix;
    },
    onSubmit(formName) {
      var that = this;

      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;

          setFeedback(this.formMap)
            .then(function() {
              // that.$message({
              //   message: that.$t('msg.success'),
              //   type: 'success',
              // });
              that.$alert(that.$t('msg.success'), '', {
                confirmButtonText: that.$t('btn.ok'),
                // cancelButtonText: '取消',
                type: 'success',
              });

              that.loading = false;
            })
            .catch(function() {
              that.$alert(that.$t('msg.error'), '', {
                confirmButtonText: that.$t('btn.ok'),
                // cancelButtonText: '取消',
                type: 'error',
              });
              that.loading = false;
            });
        } else {
          // that.$message({
          //   message: that.$t('msg.error'),
          //   type: 'error',
          // });
          console.log('error submit!!');

          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>
