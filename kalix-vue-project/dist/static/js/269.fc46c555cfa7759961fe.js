webpackJsonp([269],{Q6Yk:function(e,l,o){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=o("woOf"),a=o.n(t),r=o("uQgA"),n={data:function(){return{formModel:a()({},r.a),labelWidth:"110px",orgName:""}},methods:{init:function(e){this.orgName=e.orgName}},components:{KalixDialog:o("yVQT").default}},i={render:function(){var e=this,l=e.$createElement,o=e._self._c||l;return o("kalix-dialog",{ref:"kalixBizDialog",staticClass:"user-add",attrs:{bizKey:"majorCourse",formModel:e.formModel,isView:"isView"},on:{"update:formModel":function(l){e.formModel=l}}},[o("div",{staticClass:"el-form",attrs:{slot:"dialogFormSlot"},slot:"dialogFormSlot"},[o("el-form-item",{attrs:{label:"所属专业","label-width":e.labelWidth}},[o("el-input",{domProps:{textContent:e._s(e.orgName)}})],1),o("el-form-item",{attrs:{label:"课程名称",prop:"name","label-width":e.labelWidth}},[o("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.name,callback:function(l){e.$set(e.formModel,"name",l)},expression:"formModel.name"}})],1),o("el-form-item",{attrs:{label:"课程描述",prop:"comment","label-width":e.labelWidth}},[o("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.comment,callback:function(l){e.$set(e.formModel,"comment",l)},expression:"formModel.comment"}})],1)],1)])},staticRenderFns:[]},m=o("VU/8")(n,i,!1,null,null,null);l.default=m.exports}});
//# sourceMappingURL=269.fc46c555cfa7759961fe.js.map