# factory.website
## 基于element-ui + vue 的网站介绍网页 

支持pc端和移动端

演示地址：[https://liar0320.github.io/factory-website/dist/index.html](https://liar0320.github.io/factory-website/dist/index.html)

## 项目安装
```
git clone https://github.com/Liar0320/spider.git
```
或者你也可以下载rar解压
```
npm i 
npm run serve
```

## 目录结构
本项目已经通过vue-cli3脚手架为你生产完整的开发框架（有根据业务需求做调整修改），下面是整个项目的目录结构。
```bash
├── dist                       // 构建打包生成部署文件
├── src                        // 源代码
│   ├── assets                 // 静态资源
│   │   ├── content            // css资源
│   │   ├── images             // 图片资源
│   ├── components             // 项目组成组件
│   │   ├── apis               // 项目中所有的api接口
│   │   ├── models             // 项目中所有的数据模型
│   │   ├── pages              // 项目的所有页面
│   │   ├── services           // 项目中提取的公用service
│   │   ├── app                // 项目总体结构
│   ├── directives             // 全局公用指令和组件注册
│   ├── eventHub               // 事件中心
│   ├── mocks                  // mocks数据
│   ├── utils                  // 全局公用方法
│   ├── vendors                // 第三方插件配置
│   ├── index.vue              // 入口组件
│   ├── main.js                // 入口
├── public                    
│   ├── favicon.ico            // 项目图标    
│   ├── index.html             // html模板    
├── .babel.config.js           // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── vue.config.js              // 构建相关
└── package.json               // package.json
```
## 打包部署
```bash
npm run build
```
## 项目介绍
### 栏目介绍
- [x] 首页
- [x] 关于我们  
   - [x] 企业介绍
   - [x] 发展历程
   - [x] 企业荣誉 
- [x] 产品展示
- [ ] 咨询动态
    - [x] 公司新闻
    - [ ] 员工福利
- [x] 合作客户
- [x] 常见问题解答
- [x] 联系我们
    - [x] 联系方式
    - [x] 在线留言

### 项目展示
![首页](res/home.jpg)