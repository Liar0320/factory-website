(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68fdde9a"],{"0359":function(t,e,n){"use strict";var a=n("915c"),o=n.n(a);o.a},"1afb":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"map",staticClass:"map"}),n("div",{ref:"location",staticClass:"location",on:{click:t.location}},[n("svg",{staticClass:"cursor",attrs:{title:t.$t("companyInfo.name"),t:"1586422012341",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2780",width:"24",height:"24"}},[n("path",{attrs:{d:"M511.968 0c-207.84 0-376.96 169.12-376.96 376.992 0 54.208 11.104 105.984 32.96 153.888 94.24 206.24 274.976 424 328.128 485.824 3.968 4.608 9.792 7.296 15.904 7.296s11.904-2.656 15.904-7.296c53.12-61.824 233.856-279.552 328.128-485.824 21.888-47.904 32.96-99.648 32.96-153.888-0.032-207.872-169.152-376.992-376.992-376.992zM511.968 572.8c-107.968 0-195.808-87.84-195.808-195.808s87.84-195.84 195.808-195.84 195.808 87.84 195.808 195.84c0 107.968-87.84 195.808-195.808 195.808z","p-id":"2781",fill:"#d81e06"}})]),n("p",{staticClass:"location__label"},[t._v("\n      "+t._s(t.$t("companyInfo.name"))+"\n      "),n("i",{staticClass:"el-icon-position more",on:{click:t.more}})])])])},o=[],i=(n("96cf"),n("3b8d")),r=n("0f55"),c=n("3ed6"),s=n("db73"),l=n("cb05"),u=n("4a6f"),p={data:function(){return{mapCenter:{lat:30.847349,lng:120.91495},normal:"",zoom:15,keyword:"嘉善第二高级中学",map:null,mapUrl:"https://b.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.getCompanyInfo();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{getCompanyInfo:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["c"])();case 2:e=t.sent,this.mapCenter.latLng=e.latLng,this.keyword=e.keyword||e.address,this.map=new r["Map"]({target:this.$refs.map,view:new r["View"]({center:Object(l["fromLonLat"])([this.mapCenter.lng,this.mapCenter.lat]),zoom:this.zoom}),layers:[new c["Tile"]({source:new s["XYZ"]({url:this.mapUrl})})],overlays:[new r["Overlay"]({element:this.$refs.location,position:Object(l["fromLonLat"])([this.mapCenter.lng,this.mapCenter.lat]),positioning:"bottom-center"})]});case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),location:function(){this.map.getView().animate({center:Object(l["fromLonLat"])([this.mapCenter.lng,this.mapCenter.lat]),zoom:this.zoom})},more:function(){var t=Object(l["fromLonLat"])([this.mapCenter.lng,this.mapCenter.lat]),e="https://map.baidu.com/search/".concat(this.keyword,"/@").concat(t[0],",").concat(t[1],",13z?querytype=s&wd=").concat(this.keyword);window.open(e||"https://map.baidu.com/poi//@13460383.11,3590788.13,13z?uid=cc0849a06b843351940319e6&info_merge=1&ugc_type=3&ugc_ver=1&querytype=detailConInfo&da_src=","__blank")}},watch:{"$i18n.locale":function(){this.getCompanyInfo()}}},d=p,f=(n("0359"),n("2877")),m=Object(f["a"])(d,a,o,!1,null,"714879b5",null);e["a"]=m.exports},"38e1":function(t,e,n){var a=n("8f0d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("499e").default;o("26e8304b",a,!0,{sourceMap:!1,shadowMode:!1})},"48aa":function(t,e,n){var a=n("c70f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("499e").default;o("1745cff2",a,!0,{sourceMap:!1,shadowMode:!1})},"4a6f":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return p})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"k",(function(){return m})),n.d(e,"j",(function(){return h})),n.d(e,"i",(function(){return v})),n.d(e,"h",(function(){return g})),n.d(e,"g",(function(){return b})),n.d(e,"e",(function(){return y})),n.d(e,"l",(function(){return w})),n.d(e,"d",(function(){return _}));n("96cf"),n("7f7f"),n("ac6a");var a=n("3b8d"),o=n("1d6a"),i=n("ed08"),r=n("fec7"),c=n("8a59");function s(){return l.apply(this,arguments)}function l(){return l=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout((function(){t([r,c])}),300)})));case 1:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}var u="/server/public/v1";function p(){var t=[{name:"menus.home",state:"/app/home",id:7,pid:-1},{name:"menus.aboutUs",id:1,pid:-1},{name:"menus.products",id:2,state:"/app/products",pid:-1},{name:"menus.consult",id:3,pid:-1},{name:"menus.customer",id:4,state:"/app/customer",pid:-1},{name:"menus.faq",state:"/app/faqs",id:5,pid:-1},{name:"menus.concatUs",id:6,state:"/app/concatUs",pid:-1},{name:"menus.enterprise",pid:1,state:"/app/aboutUs/index",id:10},{name:"menus.histroy",state:"/app/aboutUs/histroy",pid:1,id:11},{name:"menus.news",state:"/app/consult/news",pid:3,id:30},{name:"menus.methods",state:"/app/concatUs/info",pid:6,id:60},{name:"menus.email",state:"/app/concatUs/email",pid:6,id:61}];return new Promise((function(e){e(t)}))}function d(){return o["b"].get("".concat(u,"/company/info"),null,!0)}function f(){return o["b"].get("".concat(u,"/company/history/list"),null,!0).then((function(t){return t.forEach((function(t){var e=new Date(1e3*t.timestamp);t.year=e.getFullYear(),t.month=e.getMonth()+1})),Object(i["b"])(t,"year")}))}function m(){return o["b"].get("".concat(u,"/workshop/get"),null,!0)}function h(t){return o["b"].get("".concat(u,"/products/nav/get"),t,!0).then((function(t){return t.forEach((function(t){t.label=t.name})),Object(i["c"])(t,"id","pid","children")}))}function v(t){return o["b"].get("".concat(u,"/products/item/get"),t,!0)}function g(t){return o["b"].get("".concat(u,"/company/news/list"),t,!0).then((function(t){return t.data.forEach((function(t){var e=new Date(1e3*t.time);return t.formattime="".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDay()),t})),t}))}function b(t){return o["b"].get("".concat(u,"/company/news/get"),t,!0).then((function(t){var e=new Date(1e3*t.time);return t.formattime="".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDay()),t}))}function y(t){return o["b"].get("".concat(u,"/faq/get"),t,!0)}function w(t){return o["b"].post("".concat(u,"/feedback/submit"),t)}function _(t){return o["b"].get("".concat(u,"/customer/get"),t,!0)}u="/api"},7766:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"box-card companyinfo"},[n("div",{staticClass:"text-left mb15 companyinfo__image",attrs:{slot:"header"},slot:"header"},[n("img",{staticStyle:{"max-width":"550px"},attrs:{src:t.companyInfo.logo||"",width:"305",height:"50",alt:"",title:t.$t("header.imgTitle")}})]),t._l(t.companyInfoComputed,(function(e,a){return n("div",{key:a,staticClass:"text-left mb15 companyinfo__text"},[n("span",{staticClass:"companyinfo__label"},[t._v(t._s(t.$t("companyInfo."+a)))]),t._v("\n    :\n    "),n("span",{staticClass:"companyinfo__value"},[t._v(t._s(e))])])}))],2)},o=[],i=n("4a6f"),r={data:function(){return{companyInfo:{},loading:!1}},mounted:function(){this.get()},computed:{companyInfoComputed:function(){var t={phone:"",fax:"",mobilePhone:"",concatUser:"",email:"",address:""};for(var e in t)t.hasOwnProperty(e)&&(t[e]=this.companyInfo[e]);return t}},methods:{get:function(){var t=this;this.loading=!0,Object(i["c"])().then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.loading=!1,t.companyInfo=e}))}},watch:{"$i18n.locale":function(){this.get()}}},c=r,s=(n("b367"),n("2877")),l=Object(s["a"])(c,a,o,!1,null,"4681f3e2",null);e["a"]=l.exports},"7f7f":function(t,e,n){var a=n("86cc").f,o=Function.prototype,i=/^\s*function ([^ (]*)/,r="name";r in o||n("9e1e")&&a(o,r,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},8881:function(t,e,n){"use strict";var a=n("38e1"),o=n.n(a);o.a},"8a59":function(t,e,n){t.exports=n.p+"assets/img/lbt2.b147c4e0.jpg"},"8f0d":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".companyFactory[data-v-122aec71]{padding-left:50px}",""])},"915c":function(t,e,n){var a=n("fcac");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("499e").default;o("328d00e2",a,!0,{sourceMap:!1,shadowMode:!1})},"9bb4":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"polyfills-aos",rawName:"v-polyfills-aos"}],attrs:{"data-aos":"slide-right"}},[n("div",{staticClass:"aboutUs__main container"},[n("h3",{staticClass:"aboutUs__main__title"},[t._v(t._s(t.$t("companyInfo.name")))]),n("div",[n("div",{staticClass:"aboutUs__main__h3"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("\n          "+t._s(t.$t("companyInfo.briefIntroduction"))+"\n        ")])],1),n("div",{staticClass:"aboutUs__main__containt"},[t._m(0),n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"min-height":"150px"}},[n("el-card",[n("p",{staticClass:"content"},[t._v("\n              "+t._s(t.companyInfo.briefIntroduction)+"\n            ")])])],1)])]),n("div",[n("div",{staticClass:"aboutUs__main__h3"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("\n          "+t._s(t.$t("companyInfo.workshop"))+"\n        ")])],1),n("company-factory")],1),n("div",{staticClass:"mb15"},[n("div",{staticClass:"aboutUs__main__h3"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("\n          "+t._s(t.$t("companyInfo.location"))+"\n        ")])],1),n("div",{staticClass:"aboutUs__main__containt"},[n("el-card",[n("el-row",{attrs:{gutter:15}},[n("el-col",{staticClass:"text-center",attrs:{xs:24,sm:12}},[n("company-info")],1),n("el-col",{staticClass:"text-center",attrs:{xs:24,sm:12}},[n("company-location")],1)],1)],1)],1)])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb15 plyr"},[n("div",{staticClass:"plyr__video-wrapper"},[n("video",{staticClass:"video_player",attrs:{preload:"none",poster:"//img95.699pic.com//video_cover/06/36/95/iU7nNmjTgbPp1529063695.jpg!/fw/820",width:"820",height:"514",controls:""}},[n("source",{attrs:{src:"//video.699pic.com/videos/06/36/87/P8m1DPneRVuV1529063687.mp4",type:"video/mp4"}})])])])}],i=n("7766"),r=n("1afb"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"},{name:"scroll-in-container",rawName:"v-scroll-in-container",value:t.isShow,expression:"isShow"}],staticClass:"companyFactory ",staticStyle:{"min-height":"150px"}},t._l(t.workshopList,(function(e){return n("div",{key:e.$index},[n("el-divider",{attrs:{"content-position":"left"}},[t._v(t._s(e.name))]),n("div",[n("el-row",{attrs:{gutter:25}},t._l(e.imgs,(function(a){return n("el-col",{key:a.$index,staticClass:"mb25",attrs:{sm:6,xs:12}},[n("el-image",{directives:[{name:"fix-fixed-transition",rawName:"v-fix-fixed-transition"}],staticStyle:{width:"100%",height:"100%"},attrs:{src:t.isShow?a:"","preview-src-list":e.imgs,title:t.$t("header.imgTitle")}},[n("image-placehold",{attrs:{slot:"placeholder"},slot:"placeholder"})],1)],1)})),1)],1)],1)})),0)},s=[],l=(n("96cf"),n("3b8d")),u=n("4a6f"),p={data:function(){return{workshopList:[],loading:!1,isShow:!1}},mounted:function(){this.get()},methods:{get:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,Object(u["k"])();case 3:this.workshopList=t.sent,this.loading=!1;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},d=p,f=(n("8881"),n("2877")),m=Object(f["a"])(d,c,s,!1,null,"122aec71",null),h=m.exports,v={data:function(){return{companyInfo:{},loading:!1}},components:{companyFactory:h,companyInfo:i["a"],companyLocation:r["a"]},mounted:function(){this.get()},methods:{get:function(){var t=this;this.loading=!0,Object(u["c"])().then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.companyInfo=e,t.loading=!1}))}},watch:{"$i18n.locale":function(){this.get()}}},g=v,b=(n("a759"),Object(f["a"])(g,a,o,!1,null,"770ee047",null));e["default"]=b.exports},a3dc:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".box-card[data-v-770ee047]{width:100%;display:inline-block;margin-left:5px;font-size:16px}.content[data-v-770ee047]{font-size:18px;line-height:32px;color:#303133;text-align:left;text-indent:2em}.plyr__video-wrapper[data-v-770ee047]{background:#000;border-radius:inherit;overflow:hidden;position:relative;z-index:0}.plyr audio[data-v-770ee047],.plyr video[data-v-770ee047]{height:461px;border-radius:inherit;height:auto;vertical-align:middle;width:100%}.plyr__poster[data-v-770ee047]{background-color:#000;background-position:50% 50%;background-repeat:no-repeat;background-size:contain;height:100%;left:0;opacity:0;position:absolute;top:0;-webkit-transition:opacity .2s ease;transition:opacity .2s ease;width:100%;z-index:1}",""])},a759:function(t,e,n){"use strict";var a=n("e9da"),o=n.n(a);o.a},b367:function(t,e,n){"use strict";var a=n("48aa"),o=n.n(a);o.a},c70f:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".companyinfo__label[data-v-4681f3e2]{display:inline-block;color:#303133}.companyinfo__value[data-v-4681f3e2]{color:#606266}",""])},e9da:function(t,e,n){var a=n("a3dc");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("499e").default;o("3f162126",a,!0,{sourceMap:!1,shadowMode:!1})},fcac:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".map[data-v-714879b5]{width:100%;height:300px}.location__label[data-v-714879b5]{padding:0 5px;background-color:rgba(255,255,0,.7);border-radius:5px;position:absolute;top:2px;white-space:nowrap;left:24px;line-height:18px}.location .more[data-v-714879b5]{color:#00f;cursor:pointer;font-size:18px;line-height:18px}",""])},fec7:function(t,e,n){t.exports=n.p+"assets/img/lbt1.d768163a.jpg"}}]);