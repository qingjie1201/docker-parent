webpackJsonp([37],{"47hR":function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=t("woOf"),o=t.n(a),r=t("SDTv"),s=t("yVQT"),d=t("1RNI"),i=t("ujYH"),n=t("nEZk"),m={data:function(){return{formModel:o()({},r.a),redheadapplyFormModel:o()({},n.a),labelWidth:"140px"}},components:{KalixDialog:s.default,KalixDictSelect:d.default,KalixRedheadApplyViewForm:i.default},methods:{}},c={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("kalix-dialog",{ref:"kalixBizDialog",staticClass:"user-add",attrs:{bizKey:"document",formModel:e.formModel,isView:"isView"},on:{"update:formModel":function(l){e.formModel=l}}},[t("template",{slot:"dialogFormSlot"},[t("div",{staticClass:"el-form kalix-form-table"},[t("div",{staticClass:"table-title"},[e._v("文号信息")]),t("div",[t("el-form-item",{staticClass:"kalix-form-table-td",attrs:{label:"文号",prop:"businessNo","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.businessNo,callback:function(l){e.$set(e.formModel,"businessNo",l)},expression:"formModel.businessNo"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"文号类型",prop:"docType","label-width":e.labelWidth}},[t("kalix-dict-select",{attrs:{appName:"oa",dictType:"文号类型",disabled:"disabled"},model:{value:e.formModel.docType,callback:function(l){e.$set(e.formModel,"docType",l)},expression:"formModel.docType"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"年份",prop:"year","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.year,callback:function(l){e.$set(e.formModel,"year",l)},expression:"formModel.year"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"文号状态",prop:"status","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.status,callback:function(l){e.$set(e.formModel,"status",l)},expression:"formModel.status"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"编号",prop:"number","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.number,callback:function(l){e.$set(e.formModel,"number",l)},expression:"formModel.number"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"发文时间",prop:"docDate","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.docDate,callback:function(l){e.$set(e.formModel,"docDate",l)},expression:"formModel.docDate"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"发文部门",prop:"docDept","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.docDept,callback:function(l){e.$set(e.formModel,"docDept",l)},expression:"formModel.docDept"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"打印人",prop:"printer","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.printer,callback:function(l){e.$set(e.formModel,"printer",l)},expression:"formModel.printer"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"校对人",prop:"checker","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.checker,callback:function(l){e.$set(e.formModel,"checker",l)},expression:"formModel.checker"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"页数",prop:"page","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.page,callback:function(l){e.$set(e.formModel,"page",l)},expression:"formModel.page"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"份数",prop:"copy","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.copy,callback:function(l){e.$set(e.formModel,"copy",l)},expression:"formModel.copy"}})],1)],1),t("div",[t("el-form-item",{staticClass:"kalix-form-table-td",attrs:{label:"抄送",prop:"other","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.other,callback:function(l){e.$set(e.formModel,"other",l)},expression:"formModel.other"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"创建时间",prop:"creationDate","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.creationDate,callback:function(l){e.$set(e.formModel,"creationDate",l)},expression:"formModel.creationDate"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"更新时间",prop:"updateDate","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.updateDate,callback:function(l){e.$set(e.formModel,"updateDate",l)},expression:"formModel.updateDate"}})],1)],1)]),t("div",{staticClass:"el-form kalix-form-table"},[t("div",{staticClass:"table-title"},[e._v("文件信息")])]),t("kalix-redhead-apply-view-form",{attrs:{formModel:e.redheadapplyFormModel,isRequest:!0,bizId:e.formModel.redheadId},on:{"update:formModel":function(l){e.redheadapplyFormModel=l}}})],1)],2)},staticRenderFns:[]},f=t("VU/8")(m,c,!1,function(e){t("XzHS")},null,null);l.default=f.exports},SDTv:function(e,l,t){"use strict";l.a={docType:null,year:"",number:null,businessNo:"",status:"",docDate:null,docDeptId:null,docDept:"",printer:"",checker:"",page:null,copy:null,other:"学校领导、学校各单位、部门",creationDate:null,updateDate:null,redheadId:null,title:"",docUrl:"",docContent:"",docStatus:""}},XzHS:function(e,l,t){var a=t("Zde0");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("rjj0")("40fc3e18",a,!0)},Zde0:function(e,l,t){(e.exports=t("FZ+f")(!0)).push([e.i,"\n.kalix-form-table + .kalix-form-table {\n  border-top: 0;\n}","",{version:3,sources:["D:/vue-develop/project/kalix-vue-project/src/views/oa/document/documentView.vue"],names:[],mappings:";AACA;EACE,cAAc;CACf",file:"documentView.vue",sourcesContent:["\n.kalix-form-table + .kalix-form-table {\n  border-top: 0;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=37.01d474afbe639e2626ea.js.map