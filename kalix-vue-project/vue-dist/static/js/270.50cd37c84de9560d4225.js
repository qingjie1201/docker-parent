webpackJsonp([270],{"0YMs":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("woOf"),o=l.n(a),r=l("uQgA"),n=l("yVQT"),d=l("PkiF"),i={data:function(){return{targetURL:d.FunctionCategroyURL,formModel:o()({},r.a),rules:{name:[{required:!0,message:"请输名称",trigger:"blur"}]},labelWidth:"110px"}},components:{KalixDialog:n.default},created:function(){},methods:{},watch:{}},s={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("kalix-dialog",{ref:"kalixBizDialog",staticClass:"user-add",attrs:{bizKey:"functioncategory",formModel:e.formModel,targetURL:e.targetURL},on:{"update:formModel":function(t){e.formModel=t}}},[l("div",{staticClass:"el-form",attrs:{slot:"dialogFormSlot",align:"center"},slot:"dialogFormSlot"},[l("el-form-item",{attrs:{prop:"parentId","label-width":e.labelWidth,type:"hidden"}},[l("el-input",{attrs:{type:"hidden"},model:{value:e.formModel.parentId,callback:function(t){e.$set(e.formModel,"parentId",t)},expression:"formModel.parentId"}})],1),l("el-form-item",{attrs:{label:"所属类别","label-width":e.labelWidth,readonly:"readonly"}},[l("el-input",{model:{value:e.formModel.parentName,callback:function(t){e.$set(e.formModel,"parentName",t)},expression:"formModel.parentName"}})],1),l("el-form-item",{attrs:{label:"类别名称",prop:"name","label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.name,callback:function(t){e.$set(e.formModel,"name",t)},expression:"formModel.name"}})],1)],1)])},staticRenderFns:[]},m=l("VU/8")(i,s,!1,null,null,null);t.default=m.exports}});
//# sourceMappingURL=270.50cd37c84de9560d4225.js.map