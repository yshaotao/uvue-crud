(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-list-list"],{"0d56":function(e,t,a){"use strict";a.r(t);var o=a("713c"),i=a.n(o);for(var l in o)["default"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(l);t["default"]=i.a},"2ad6":function(e,t,a){"use strict";a.r(t);var o=a("bd75"),i=a("b27b");for(var l in i)["default"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(l);a("6f5d");var r,n=a("f0c5"),u=Object(n["a"])(i["default"],o["b"],o["c"],!1,null,"114217d4",null,!1,o["a"],r);t["default"]=u.exports},"35c2":function(e,t,a){"use strict";a("4de4"),Object.defineProperty(t,"__esModule",{value:!0}),t.listData=t.filter=t.option=void 0,a("d3b7");var o={rowKey:"id",formPath:"/pages/form/form",margin:"20rpx",padding:"20",navigateFormType:"view",formKeys:[]};t.option=o;var i=function(){return new Promise((function(e){setTimeout((function(){e({data:[{label:"综合排序",value:""},{label:"销量优先",value:"sales"},{label:"距离优先",value:"distance"},{label:"速度优先",value:"speed"},{label:"评分优先",value:"score"}]})}),1e3)}))},l={items:[{title:"排序",prop:"sort",options:i()},{title:"品类",prop:"category",cascader:!0,options:[{label:"全部品类",value:""},{label:"美食",value:"美食",children:[{label:"快餐便当",value:"快餐便当"},{label:"龙虾烧烤",value:"龙虾烧烤"},{label:"米粉面馆",value:"米粉面馆"},{label:"特色小吃",value:"特色小吃"},{label:"地方菜系",value:"地方菜系"},{label:"炸鸡炸串",value:"炸鸡炸串"}]},{label:"甜点饮品",value:"甜点饮品",children:[{label:"面包蛋糕",value:"面包蛋糕"},{label:"可口甜品",value:"可口甜品"},{label:"奶茶果汁",value:"奶茶果汁"},{label:"醒脑咖啡",value:"醒脑咖啡"},{label:"凉茶冰淇淋",value:"凉茶冰淇淋"}]},{label:"超市便利",value:"超市便利",children:[{label:"超市卖场",value:"超市卖场"},{label:"宠物用品",value:"宠物用品"},{label:"便利店",value:"便利店"},{label:"日用百货",value:"日用百货"},{label:"茶酒专卖",value:"茶酒专卖"},{label:"零食干果",value:"零食干果"}]}]},{title:"速度",prop:"speed",options:[{label:"全部",value:""},{label:"30分钟内",value:30},{label:"40分钟内",value:40},{label:"50分钟内",value:50},{label:"60分钟内",value:60}]},{title:"标签",prop:"tags",multiple:!0,options:[{label:"热情掌柜",value:"热情掌柜"},{label:"分量充足",value:"分量充足"},{label:"价格便宜",value:"价格便宜"},{label:"销量热门",value:"销量热门"}]}]};t.filter=l;var r=[{id:1,title:"XXX过桥米线",img:"/uvue-crud/build/h5/static/waimai.png",category:"米粉面馆",send:20,fee:1,score:4.6,sales:3929,distance:1200,speed:35,tags:["分量充足","热情掌柜"],discount:["30减9","45减14","60减26","90减45"]},{id:2,title:"XXX柠檬茶",img:"/uvue-crud/build/h5/static/waimai.png",category:"奶茶果汁",send:25,fee:0,score:4.7,sales:2960,distance:1200,speed:31,tags:["销量热门","热情掌柜"],discount:["26减3","8元无门槛红包"]},{id:3,title:"XX酸菜鱼",img:"/uvue-crud/build/h5/static/waimai.png",category:"快餐便当",send:15,fee:.5,score:4.7,sales:3273,distance:1300,speed:30,tags:["价格便宜"],discount:["19减18","42减19","68减28"]}];t.listData=r},"4f2b":function(e,t,a){var o=a("7873");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=a("4f06").default;i("ef619860",o,!0,{sourceMap:!1,shadowMode:!1})},"60ec":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return o}));var o={uvueList:a("d50e").default,uRow:a("d67a").default,uCol:a("b408").default,uIcon:a("f86b").default,uTag:a("2ad6").default,uButton:a("d9ad").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("uvue-list",{ref:"list",attrs:{option:e.option,data:e.listData,status:e.loadStatus,searchValue:e.filterForm.title,filter:e.filter,filterForm:e.filterForm},on:{"update:searchValue":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.filterForm,"title",t)},"update:search-value":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.filterForm,"title",t)},search:function(t){arguments[0]=t=e.$handleEvent(t),e.handleSearch.apply(void 0,arguments)},"update:filterForm":function(t){arguments[0]=t=e.$handleEvent(t),e.filterForm=t},"update:filter-form":function(t){arguments[0]=t=e.$handleEvent(t),e.filterForm=t},"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange.apply(void 0,arguments)}},scopedSlots:e._u([{key:"head",fn:function(t){var o=t.row;return[a("v-uni-text",[e._v(e._s(o.title))])]}},{key:"body",fn:function(t){var o=t.row;return[a("u-row",{attrs:{gutter:"20",align:"top"}},[a("u-col",{attrs:{span:"4"}},[a("img",{attrs:{src:o.img,width:"100%"}})]),a("u-col",{attrs:{span:"6"}},[a("v-uni-view",[a("u-icon",{attrs:{name:"star-fill"}}),a("v-uni-text",[e._v(e._s(o.score))]),a("v-uni-text",{staticClass:"u-margin-left-20"},[e._v("月售"+e._s(o.sales))])],1),a("v-uni-view",[a("v-uni-text",[e._v("起送￥"+e._s(o.send))]),a("v-uni-text",{staticClass:"u-margin-left-20"},[e._v("配送￥"+e._s(o.fee))])],1),a("v-uni-view",[a("v-uni-text",[e._v(e._s(o.speed)+"分钟")]),a("v-uni-text",{staticClass:"u-margin-left-20"},[e._v(e._s(o.distance)+"m")])],1),a("v-uni-view",e._l(o.tags,(function(e){return a("u-tag",{key:e,staticClass:"u-margin-right-20",attrs:{text:e,type:"warning",size:"mini"}})})),1)],1),a("u-col",{attrs:{span:"2"}},[a("u-button",{attrs:{size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$refs.list.rowView(o)}}},[e._v("查看")]),a("u-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$refs.list.rowEdit(o)}}},[e._v("编辑")])],1)],1)]}},{key:"foot",fn:function(t){var o=t.row;return[a("v-uni-view",e._l(o.discount,(function(e){return a("u-tag",{key:e,staticClass:"u-margin-right-20",attrs:{text:e,type:"error",size:"mini"}})})),1)]}}])})],1)},l=[]},"6f5d":function(e,t,a){"use strict";var o=a("4f2b"),i=a.n(o);i.a},"713c":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("4e82"),a("4de4"),a("caad"),a("2532"),a("a623");var o=a("35c2"),i={data:function(){return{option:o.option,filter:o.filter,listData:[],filterForm:{},loadStatus:"loadmore"}},mounted:function(){this.filterChange({})},methods:{filterChange:function(e){var t=this;this.loadStatus="loading",setTimeout((function(){t.listData=o.listData.filter((function(t){var a=[];return e.title&&a.push(t.title.includes(e.title)),e.speed&&a.push(t.speed<=e.speed),e.tags&&e.tags.length&&a.push(e.tags.every((function(e){return t.tags.includes(e)}))),e.category&&a.push(t.category===e.category),a.every((function(e){return e}))})).sort((function(t,a){return e.sort?["speed","distance"].includes(e.sort)?t[e.sort]-a[e.sort]:a[e.sort]-t[e.sort]:0})),t.loadStatus="nomore"}),1e3)},handleSearch:function(){this.filterChange(this.filterForm)}}};t.default=i},7325:function(e,t,a){"use strict";a.r(t);var o=a("60ec"),i=a("0d56");for(var l in i)["default"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(l);var r,n=a("f0c5"),u=Object(n["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);t["default"]=u.exports},7873:function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-tag[data-v-114217d4]{box-sizing:border-box;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?6?%;display:inline-block;line-height:1}.u-size-default[data-v-114217d4]{font-size:%?22?%;padding:%?12?% %?22?%}.u-size-mini[data-v-114217d4]{font-size:%?20?%;padding:%?6?% %?12?%}.u-mode-light-primary[data-v-114217d4]{background-color:#ecf5ff;color:#2979ff;border:1px solid #a0cfff}.u-mode-light-success[data-v-114217d4]{background-color:#dbf1e1;color:#19be6b;border:1px solid #71d5a1}.u-mode-light-error[data-v-114217d4]{background-color:#fef0f0;color:#fa3534;border:1px solid #fab6b6}.u-mode-light-warning[data-v-114217d4]{background-color:#fdf6ec;color:#f90;border:1px solid #fcbd71}.u-mode-light-info[data-v-114217d4]{background-color:#f4f4f5;color:#909399;border:1px solid #c8c9cc}.u-mode-dark-primary[data-v-114217d4]{background-color:#2979ff;color:#fff}.u-mode-dark-success[data-v-114217d4]{background-color:#19be6b;color:#fff}.u-mode-dark-error[data-v-114217d4]{background-color:#fa3534;color:#fff}.u-mode-dark-warning[data-v-114217d4]{background-color:#f90;color:#fff}.u-mode-dark-info[data-v-114217d4]{background-color:#909399;color:#fff}.u-mode-plain-primary[data-v-114217d4]{background-color:#fff;color:#2979ff;border:1px solid #2979ff}.u-mode-plain-success[data-v-114217d4]{background-color:#fff;color:#19be6b;border:1px solid #19be6b}.u-mode-plain-error[data-v-114217d4]{background-color:#fff;color:#fa3534;border:1px solid #fa3534}.u-mode-plain-warning[data-v-114217d4]{background-color:#fff;color:#f90;border:1px solid #f90}.u-mode-plain-info[data-v-114217d4]{background-color:#fff;color:#909399;border:1px solid #909399}.u-disabled[data-v-114217d4]{opacity:.55}.u-shape-circle[data-v-114217d4]{border-radius:%?100?%}.u-shape-circleRight[data-v-114217d4]{border-radius:0 %?100?% %?100?% 0}.u-shape-circleLeft[data-v-114217d4]{border-radius:%?100?% 0 0 %?100?%}.u-close-icon[data-v-114217d4]{margin-left:%?14?%;font-size:%?22?%;color:#19be6b}.u-icon-wrap[data-v-114217d4]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-transform:scale(.86);transform:scale(.86)}',""]),e.exports=t},abed:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a9e3");var o={name:"u-tag",props:{type:{type:String,default:"primary"},disabled:{type:[Boolean,String],default:!1},size:{type:String,default:"default"},shape:{type:String,default:"square"},text:{type:[String,Number],default:""},bgColor:{type:String,default:""},color:{type:String,default:""},borderColor:{type:String,default:""},closeColor:{type:String,default:""},index:{type:[Number,String],default:""},mode:{type:String,default:"light"},closeable:{type:Boolean,default:!1},show:{type:Boolean,default:!0}},data:function(){return{}},computed:{customStyle:function(){var e={};return this.color&&(e.color=this.color),this.bgColor&&(e.backgroundColor=this.bgColor),"plain"==this.mode&&this.color&&!this.borderColor?e.borderColor=this.color:e.borderColor=this.borderColor,e},iconStyle:function(){if(this.closeable){var e={};return"mini"==this.size?e.fontSize="20rpx":e.fontSize="22rpx","plain"==this.mode||"light"==this.mode?e.color=this.type:"dark"==this.mode&&(e.color="#ffffff"),this.closeColor&&(e.color=this.closeColor),e}},closeIconColor:function(){return this.closeColor?this.closeColor:this.color?this.color:"dark"==this.mode?"#ffffff":this.type}},methods:{clickTag:function(){this.disabled||this.$emit("click",this.index)},close:function(){this.$emit("close",this.index)}}};t.default=o},b27b:function(e,t,a){"use strict";a.r(t);var o=a("abed"),i=a.n(o);for(var l in o)["default"].indexOf(l)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(l);t["default"]=i.a},bd75:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return o}));var o={uIcon:a("f86b").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.show?a("v-uni-view",{staticClass:"u-tag",class:[e.disabled?"u-disabled":"","u-size-"+e.size,"u-shape-"+e.shape,"u-mode-"+e.mode+"-"+e.type],style:[e.customStyle],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickTag.apply(void 0,arguments)}}},[e._v(e._s(e.text)),a("v-uni-view",{staticClass:"u-icon-wrap",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t)}}},[e.closeable?a("u-icon",{staticClass:"u-close-icon",style:[e.iconStyle],attrs:{size:"22",color:e.closeIconColor,name:"close"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}}}):e._e()],1)],1):e._e()},l=[]}}]);