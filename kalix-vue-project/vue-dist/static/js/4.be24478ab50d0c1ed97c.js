webpackJsonp([4],{PjK4:function(t,e,s){var i=s("aKFr");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("33a4279a",i,!0)},TPYK:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("UZBS"),n="no_permission",o={data:function(){return{isShow:!1}},props:{permission:{type:String,required:!0,default:n},title:{type:String,required:!0}},mounted:function(){this.permission!==n?this.getData():this.isShow=!0},methods:{getData:function(){var t=this;this.axios.get({url:i.SecurityBtnUrl+this.permission}).then(function(e){e.data.buttons.map(function(e){e.permission===t.permission&&(t.isShow=e.status,console.log("[kalix] "+e.permission+"  can be set to "+e.status))})})}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.isShow?e("el-button",{attrs:{type:"text",size:"large"}},[this._v(this._s(this.title))]):this._e()],1)},staticRenderFns:[]},a=s("VU/8")(o,r,!1,function(t){s("PjK4")},"data-v-b0734cc8",null);e.default=a.exports},aKFr:function(t,e,s){(t.exports=s("FZ+f")(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"SecurityButtion.vue",sourceRoot:""}])}});
//# sourceMappingURL=4.be24478ab50d0c1ed97c.js.map