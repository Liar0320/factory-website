(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-495ce9aa"],{"454f":function(t,e,n){n("46a7");var a=n("584a").Object;t.exports=function(t,e,n){return a.defineProperty(t,e,n)}},"46a7":function(t,e,n){var a=n("63b6");a(a.S+a.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"4a6f":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return f})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return p})),n.d(e,"k",(function(){return d})),n.d(e,"j",(function(){return g})),n.d(e,"i",(function(){return b})),n.d(e,"h",(function(){return h})),n.d(e,"g",(function(){return v})),n.d(e,"e",(function(){return y})),n.d(e,"l",(function(){return w})),n.d(e,"d",(function(){return M}));n("96cf"),n("7f7f"),n("ac6a");var a=n("3b8d"),r=n("1d6a"),o=n("ed08"),i=n("fec7"),c=n("8a59");function s(){return u.apply(this,arguments)}function u(){return u=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout((function(){t([i,c])}),300)})));case 1:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}var m="/server/public/v1";function f(){var t=[{name:"menus.home",state:"/app/home",id:7,pid:-1},{name:"menus.aboutUs",id:1,pid:-1},{name:"menus.products",id:2,state:"/app/products",pid:-1},{name:"menus.consult",id:3,pid:-1},{name:"menus.customer",id:4,state:"/app/customer",pid:-1},{name:"menus.faq",state:"/app/faqs",id:5,pid:-1},{name:"menus.concatUs",id:6,state:"/app/concatUs",pid:-1},{name:"menus.enterprise",pid:1,state:"/app/aboutUs/index",id:10},{name:"menus.histroy",state:"/app/aboutUs/histroy",pid:1,id:11},{name:"menus.news",state:"/app/consult/news",pid:3,id:30},{name:"menus.methods",state:"/app/concatUs/info",pid:6,id:60},{name:"menus.email",state:"/app/concatUs/email",pid:6,id:61}];return new Promise((function(e){e(t)}))}function l(){return r["b"].get("".concat(m,"/company/info"),null,!0)}function p(){return r["b"].get("".concat(m,"/company/history/list"),null,!0).then((function(t){return t.forEach((function(t){var e=new Date(1e3*t.timestamp);t.year=e.getFullYear(),t.month=e.getMonth()+1})),Object(o["b"])(t,"year")}))}function d(){return r["b"].get("".concat(m,"/workshop/get"),null,!0)}function g(t){return r["b"].get("".concat(m,"/products/nav/get"),t,!0).then((function(t){return t.forEach((function(t){t.label=t.name})),Object(o["c"])(t,"id","pid","children")}))}function b(t){return r["b"].get("".concat(m,"/products/item/get"),t,!0)}function h(t){return r["b"].get("".concat(m,"/company/news/list"),t,!0).then((function(t){return t.data.forEach((function(t){var e=new Date(1e3*t.time);return t.formattime="".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDay()),t})),t}))}function v(t){return r["b"].get("".concat(m,"/company/news/get"),t,!0).then((function(t){var e=new Date(1e3*t.time);return t.formattime="".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDay()),t}))}function y(t){return r["b"].get("".concat(m,"/faq/get"),t,!0)}function w(t){return r["b"].post("".concat(m,"/feedback/submit"),t)}function M(t){return r["b"].get("".concat(m,"/customer/get"),t,!0)}m="/api"},"7f7f":function(t,e,n){var a=n("86cc").f,r=Function.prototype,o=/^\s*function ([^ (]*)/,i="name";i in r||n("9e1e")&&a(r,i,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"85f2":function(t,e,n){t.exports=n("454f")},"8a59":function(t,e,n){t.exports=n.p+"assets/img/lbt2.b147c4e0.jpg"},bd86:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n("85f2"),r=n.n(a);function o(t,e,n){return e in t?r()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},d225:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return a}))},e1ef:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"polyfills-aos",rawName:"v-polyfills-aos"}],attrs:{"data-aos":"slide-left"}},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"container p15",staticStyle:{"min-height":"150px"}},[n("h3",{staticClass:"aboutUs__main__title mb15"},[t._v(t._s(t.$t("navMain.menus.email")))]),n("el-form",{ref:"concatForm",attrs:{model:t.formMap,rules:t.rules,"label-width":"80px"}},[n("el-row",[n("el-col",{attrs:{sm:12}},[n("el-form-item",{attrs:{label:t.$t("concat.name"),required:"",prop:"name"}},[n("el-input",{model:{value:t.formMap.name,callback:function(e){t.$set(t.formMap,"name",e)},expression:"formMap.name"}})],1)],1),n("el-col",{attrs:{sm:12}},[n("el-form-item",{attrs:{label:t.$t("concat.company")}},[n("el-input",{model:{value:t.formMap.company,callback:function(e){t.$set(t.formMap,"company",e)},expression:"formMap.company"}})],1)],1),n("el-col",{attrs:{sm:12}},[n("el-form-item",{attrs:{label:t.$t("concat.phone"),required:"",prop:"phone"}},[n("el-input",{model:{value:t.formMap.phone,callback:function(e){t.$set(t.formMap,"phone",e)},expression:"formMap.phone"}})],1)],1),n("el-col",{attrs:{sm:12}},[n("el-form-item",{attrs:{label:t.$t("concat.email"),required:"",prop:"email"}},[n("el-input",{model:{value:t.formMap.email,callback:function(e){t.$set(t.formMap,"email",e)},expression:"formMap.email"}})],1)],1)],1),n("el-form-item",{attrs:{label:t.$t("concat.content"),required:"",prop:"content"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.formMap.content,callback:function(e){t.$set(t.formMap,"content",e)},expression:"formMap.content"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onSubmit("concatForm")}}},[t._v("提交")])],1)],1)],1)])},r=[],o=(n("3b2b"),n("d225")),i=n("bd86"),c=function t(){Object(o["a"])(this,t),Object(i["a"])(this,"name",""),Object(i["a"])(this,"company",""),Object(i["a"])(this,"phone",""),Object(i["a"])(this,"email",""),Object(i["a"])(this,"content","")},s=n("4a6f"),u={data:function(){var t=function(t,e,n){if(!e)return n(new Error("手机号不能为空"));var a=new RegExp(/^\d{1,17}$/)||/^1[3|4|5|7|8][0-9]\d{8}$/;if(!a.test(e))return n(new Error("请输入正确的手机号"));n()};return{formMap:{},rules:{name:[{required:!0,message:this.getMessage("concat.name"),trigger:"blur"}],phone:[{required:!0,message:this.getMessage("concat.phone"),trigger:"blur"},{validator:t,message:this.getMessage("concat.phone","validInfo.format"),trigger:["blur","change"]}],email:[{required:!0,message:this.getMessage("concat.email"),trigger:"blur"},{type:"email",message:this.getMessage("concat.email","validInfo.format"),trigger:["blur","change"]}],message:[{required:!0,message:this.getMessage("concat.message"),trigger:"blur"}]},loading:!1}},mounted:function(){this.formMap={}||new c},methods:{getMessage:function(t,e){return e=e?this.$t(e):this.$t("validInfo.empty"),this.$t(t)+e},onSubmit:function(t){var e=this,n=this;this.$refs[t].validate((function(t){if(!t)return!1;e.loading=!0,Object(s["l"])(e.formMap).then((function(){n.$alert(n.$t("msg.success"),"",{confirmButtonText:n.$t("btn.ok"),type:"success"}),n.loading=!1})).catch((function(){n.$alert(n.$t("msg.error"),"",{confirmButtonText:n.$t("btn.ok"),type:"error"}),n.loading=!1}))}))}}},m=u,f=n("2877"),l=Object(f["a"])(m,a,r,!1,null,"625924f5",null);e["default"]=l.exports},fec7:function(t,e,n){t.exports=n.p+"assets/img/lbt1.d768163a.jpg"}}]);