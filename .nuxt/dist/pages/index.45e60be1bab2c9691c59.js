webpackJsonp([0],{PQtU:function(t,e,n){"use strict";e.a={asyncData:function(t){return{name:"Async data"}},fetch:function(){},head:function(){return{title:"new title",meta:[{hid:"description",name:"description",content:"My custom description"}]}},data:function(){return{search:"",country:null,countries:[{value:"1",text:"one"},{value:"2",text:"two"},{value:"3",text:"three"},{value:"4",text:"Four"},{value:"5",text:"Five"},{value:"6",text:"Six"}]}},methods:{onSearch:function(){},onInput:function(){console.log(this.country)}}}},zFIu:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{shrink:""}},[n("h1",[t._v("Hello "+t._s(t.name)+"!")]),n("p",[t._v("All dependencies install from sniffr")]),n("p",[t._v("Adding script into package.json from sniffr")]),n("h2",[t._v("Change back again adding hot")]),n("v-btn",{attrs:{dark:"",raised:""},on:{click:function(e){t.$store.commit("increment")}}},[t._v("Click me "+t._s(t.$store.getters.getCounter)+"\n                ")]),n("v-autocomplete",{attrs:{items:t.countries,"return-object":""},on:{input:function(e){t.onInput()}},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1)],1)],1)],1)};i._withStripped=!0;var r={render:i,staticRenderFns:[]};e.a=r},zmsi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("PQtU"),r=n("zFIu"),o=n("VU/8")(i.a,r.a,!1,null,null,null);o.options.__file="resources/nuxt/pages/index.vue",e.default=o.exports}});