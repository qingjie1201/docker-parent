webpackJsonp([170],{Lhvj:function(e,l,t){var a=t("PCmo");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("rjj0")("57f3076c",a,!0)},PCmo:function(e,l,t){(e.exports=t("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"SealApplyModifyForm.vue",sourceRoot:""}])},hFfg:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=t("eQiG"),o=t("TOAQ"),r=t("yVQT"),s=t("1RNI"),i={props:["formModel"],created:function(){this.labelWidth="110px"},data:function(){return{targetURL:a.SealApplyURL,rules:{title:[{required:!0,message:"请输入名称",trigger:"blur"}]}}},methods:{onOrgIdChange:function(e){this.formModel.orgName=e.name}},components:{KalixOrgSelect:o.default,KalixDictSelect:s.default,KalixDialog:r.default}},d={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"el-form kalix-form-table",attrs:{slot:"dialogFormSlot"},slot:"dialogFormSlot"},[t("div",{staticClass:"table-title"},[e._v("吉林动画学院用章申请表")]),t("el-form-item",{attrs:{label:"名称","label-width":e.labelWidth}},[t("el-input",{model:{value:e.formModel.title,callback:function(l){e.$set(e.formModel,"title",l)},expression:"formModel.title"}})],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"申请部门","label-width":e.labelWidth}},[t("kalix-org-select",{on:{selectChange:e.onOrgIdChange},model:{value:e.formModel.orgId,callback:function(l){e.$set(e.formModel,"orgId",l)},expression:"formModel.orgId"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"用印数","label-width":e.labelWidth}},[t("el-input-number",{staticStyle:{width:"100%"},attrs:{min:1,max:10},model:{value:e.formModel.usageCount,callback:function(l){e.$set(e.formModel,"usageCount",l)},expression:"formModel.usageCount"}})],1)],1),t("el-form-item",{attrs:{label:"印章类别","label-width":e.labelWidth}},[t("kalix-dict-select",{attrs:{appName:"oa",dictType:"印章类型"},model:{value:e.formModel.sealType,callback:function(l){e.$set(e.formModel,"sealType",l)},expression:"formModel.sealType"}})],1),t("el-form-item",{attrs:{label:"备注","label-width":e.labelWidth}},[t("el-input",{model:{value:e.formModel.remark,callback:function(l){e.$set(e.formModel,"remark",l)},expression:"formModel.remark"}})],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"部门负责人","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.departmentHead,callback:function(l){e.$set(e.formModel,"departmentHead",l)},expression:"formModel.departmentHead"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"分公司负责人","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.tableFormField,callback:function(l){e.$set(e.formModel,"tableFormField",l)},expression:"formModel.tableFormField"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"法律顾问","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.counsel,callback:function(l){e.$set(e.formModel,"counsel",l)},expression:"formModel.counsel"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"总经理","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.generalManager,callback:function(l){e.$set(e.formModel,"generalManager",l)},expression:"formModel.generalManager"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"印章专管员","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.sealAdministrator,callback:function(l){e.$set(e.formModel,"sealAdministrator",l)},expression:"formModel.sealAdministrator"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"经办人","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.createBy,callback:function(l){e.$set(e.formModel,"createBy",l)},expression:"formModel.createBy"}})],1)],1)],1)},staticRenderFns:[]},m=t("VU/8")(i,d,!1,function(e){t("Lhvj")},"data-v-275ab28f",null);l.default=m.exports}});
//# sourceMappingURL=170.79e3b924d30c9eaef01a.js.map