(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47b48d98"],{"00e2":function(t,n,a){"use strict";var e=a("5179"),o=a.n(e);o.a},"1afb":function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("baidu-map",{staticClass:"map",attrs:{center:t.mapCenter,zoom:t.zoom,"scroll-wheel-zoom":!0}},[a("bm-navigation",{attrs:{anchor:"BMAP_ANCHOR_TOP_RIGHT"}}),a("bm-local-search",{attrs:{keyword:t.keyword,"auto-viewport":!0,"select-first-result":!0,"page-capacity":1}}),a("bm-geolocation",{attrs:{anchor:"BMAP_ANCHOR_BOTTOM_RIGHT",showAddressBar:!0,autoLocation:!0}})],1)],1)},o=[],i=a("4a6f"),s=a("6a99"),c={data:function(){return{mapCenter:{lat:30.847349,lng:120.91495},normal:"",zoom:15,keyword:"嘉善第二高级中学"}},mounted:function(){var t=this;Object(i["c"])().then((function(n){t.mapCenter=n.latLng,t.normal=s(t.mapCenter)}))},methods:{}},r=c,l=(a("ca5a"),a("6691")),u=Object(l["a"])(r,e,o,!1,null,"5f1ad8ac",null);n["a"]=u.exports},5179:function(t,n,a){},"6b50":function(t,n,a){},7766:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"box-card companyinfo"},[a("div",{staticClass:"text-left mb15 companyinfo__image",attrs:{slot:"header"},slot:"header"},[a("img",{staticStyle:{"max-width":"550px"},attrs:{src:t.companyInfo.logo||"",width:"100%",height:"100%",alt:"",title:t.$t("header.imgTitle")}})]),t._l(t.companyInfoComputed,(function(n,e){return a("div",{key:e,staticClass:"text-left mb15 companyinfo__text"},[a("span",{staticClass:"companyinfo__label"},[t._v(t._s(t.$t("companyInfo."+e)))]),t._v("\n    :\n    "),a("span",{staticClass:"companyinfo__value"},[t._v(t._s(n))])])}))],2)},o=[],i=a("4a6f"),s={data:function(){return{companyInfo:{}}},mounted:function(){var t=this;Object(i["c"])().then((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.companyInfo=n}))},computed:{companyInfoComputed:function(){var t={phone:"",fax:"",mobliePhone:"",concatUser:"",email:"",address:""};for(var n in t)t.hasOwnProperty(n)&&(t[n]=this.companyInfo[n]);return t}}},c=s,r=(a("00e2"),a("6691")),l=Object(r["a"])(c,e,o,!1,null,"6bc1b1cc",null);n["a"]=l.exports},8775:function(t,n,a){},"9bb4":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{directives:[{name:"polyfills-aos",rawName:"v-polyfills-aos"}],attrs:{"data-aos":"slide-right"}},[a("div",{staticClass:"aboutUs__main container"},[a("h3",{staticClass:"aboutUs__main__title"},[t._v(t._s(t.$t("companyInfo.name")))]),a("div",[a("div",{staticClass:"aboutUs__main__h3"},[a("el-divider",{attrs:{"content-position":"left"}},[t._v(t._s(t.$t("companyInfo.briefIntroduction")))])],1),a("div",{staticClass:"aboutUs__main__containt"},[t._m(0),a("el-card",[a("p",[t._v("\n            "+t._s(t.companyInfo.briefIntroduction)+"\n          ")])])],1)]),a("div",[a("div",{staticClass:"aboutUs__main__h3"},[a("el-divider",{attrs:{"content-position":"left"}},[t._v(t._s(t.$t("companyInfo.workshop")))])],1),a("company-factory")],1),a("div",{staticClass:"mb15"},[a("div",{staticClass:"aboutUs__main__h3"},[a("el-divider",{attrs:{"content-position":"left"}},[t._v(t._s(t.$t("companyInfo.location")))])],1),a("div",{staticClass:"aboutUs__main__containt"},[a("el-card",[a("el-row",{attrs:{gutter:15}},[a("el-col",{staticClass:"text-center ",attrs:{xs:24,sm:12}},[a("company-info")],1),a("el-col",{staticClass:"text-center ",attrs:{xs:24,sm:12}},[a("company-location")],1)],1)],1)],1)])])])},o=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"mb15"},[a("video",{attrs:{src:"https://www.w3school.com.cn/i/movie.mp4",controls:"controls",autoplay:"autoplay",loop:"loop",width:"490px",height:"275px"}},[t._v("\n            your browser does not support the video tag\n          ")])])}],i=a("7766"),s=a("1afb"),c=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"companyFactory "},t._l(t.workshopList,(function(n){return a("div",{key:n.$index},[a("el-divider",{attrs:{"content-position":"left"}},[t._v(t._s(n.name))]),a("div",[a("el-row",{attrs:{gutter:25}},t._l(n.images,(function(e){return a("el-col",{key:e.$index,staticClass:"mb25",attrs:{sm:6,xs:12}},[a("el-image",{directives:[{name:"fix-fixed-transition",rawName:"v-fix-fixed-transition"}],staticStyle:{width:"100%",height:"100%"},attrs:{src:e,"preview-src-list":n.images,title:t.$t("header.imgTitle")}})],1)})),1)],1)],1)})),0)},r=[],l=(a("63ff"),a("f8f9")),u=a("4a6f"),m={data:function(){return{workshopList:[]}},mounted:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["i"])();case 2:this.workshopList=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()},f=m,p=(a("ee62"),a("6691")),d=Object(p["a"])(f,c,r,!1,null,"6408b286",null),_=d.exports,v={data:function(){return{companyInfo:{}}},components:{companyFactory:_,companyInfo:i["a"],companyLocation:s["a"]},mounted:function(){var t=this;Object(u["c"])().then((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.companyInfo=n}))}},h=v,b=(a("b826"),Object(p["a"])(h,e,o,!1,null,"196260eb",null));n["default"]=b.exports},b826:function(t,n,a){"use strict";var e=a("e9e1"),o=a.n(e);o.a},ca5a:function(t,n,a){"use strict";var e=a("8775"),o=a.n(e);o.a},e9e1:function(t,n,a){},ee62:function(t,n,a){"use strict";var e=a("6b50"),o=a.n(e);o.a}}]);
//# sourceMappingURL=chunk-47b48d98.17a1be63.js.map