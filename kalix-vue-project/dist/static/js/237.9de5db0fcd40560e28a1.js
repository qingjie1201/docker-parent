webpackJsonp([237],{SDTv:function(e,l,t){"use strict";l.a={docType:null,year:"",number:null,businessNo:"",status:"",docDate:null,docDeptId:null,docDept:"",printer:"",checker:"",page:null,copy:null,other:"学校领导、学校各单位、部门",creationDate:null,updateDate:null,redheadId:null,title:"",docUrl:"",docContent:"",docStatus:""}},beBi:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=t("woOf"),o=t.n(a),r=t("SDTv"),s=t("eQiG"),i=t("yVQT"),d=t("1RNI"),m=t("TOAQ"),n=t("iMbh"),c=t("nEZk"),f=t("ujYH"),u=t("u4eY"),p=t("Mf/2"),b=t("on5L"),x={data:function(){return{formModel:o()({},r.a),rules:{docDeptId:[{type:"number",required:!0,message:"请选择发文部门",trigger:"change"}],docDate:[{required:!0,message:"请选择发文日期",trigger:"change"}],printer:[{required:!0,message:"请输入打印人",trigger:"blur"}],checker:[{required:!0,message:"请输入校对人",trigger:"blur"}]},targetURL:s.DocumentPublishURL,redheadapplyFormModel:o()({},c.a),labelWidth:"140px"}},components:{KalixDialog:i.default,KalixDictSelect:d.default,KalixOrgSelect:m.default,KalixDatePicker:n.default,KalixRedheadApplyViewForm:f.default},methods:{submitCustom:function(e){var l=this;e.$refs.dialogForm.validate(function(t){if(!t)return u.a.error("请检查输入项！"),!1;l.formModel.id&&l.axios.request({method:"POST",url:l.targetURL+l.formModel.id,data:l.formModel,params:{}}).then(function(l){u.a.processResult(l),e.$refs.dialogForm.resetFields(),b.a.$emit(p.ON_REFRESH_DATA),e._afterDialogClose()})})},onOrgIdChange:function(e){this.formModel.docDept=e.name}}},h={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("kalix-dialog",{ref:"kalixBizDialog",staticClass:"user-add",attrs:{bizKey:"document","form-model":e.formModel,targetURL:e.targetURL,submitCustom:e.submitCustom},on:{"update:formModel":function(l){e.formModel=l}}},[t("template",{slot:"dialogFormSlot"},[t("div",{staticClass:"el-form kalix-form-table"},[t("div",{staticClass:"table-title"},[e._v("文号信息")]),t("div",[t("el-form-item",{staticClass:"kalix-form-table-td",attrs:{label:"文号",prop:"businessNo","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.businessNo,callback:function(l){e.$set(e.formModel,"businessNo",l)},expression:"formModel.businessNo"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"文号类型",prop:"docType","label-width":e.labelWidth}},[t("kalix-dict-select",{attrs:{appName:"oa",dictType:"文号类型",disabled:"disabled"},model:{value:e.formModel.docType,callback:function(l){e.$set(e.formModel,"docType",l)},expression:"formModel.docType"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"年份",prop:"year","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.year,callback:function(l){e.$set(e.formModel,"year",l)},expression:"formModel.year"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"文号状态",prop:"status","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.status,callback:function(l){e.$set(e.formModel,"status",l)},expression:"formModel.status"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"编号",prop:"number","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.number,callback:function(l){e.$set(e.formModel,"number",l)},expression:"formModel.number"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"创建时间",prop:"creationDate","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.creationDate,callback:function(l){e.$set(e.formModel,"creationDate",l)},expression:"formModel.creationDate"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"更新时间",prop:"updateDate","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.updateDate,callback:function(l){e.$set(e.formModel,"updateDate",l)},expression:"formModel.updateDate"}})],1)],1)]),t("div",{staticClass:"el-form kalix-form-table"},[t("div",{staticClass:"table-title"},[e._v("文件信息")])]),t("kalix-redhead-apply-view-form",{attrs:{formModel:e.redheadapplyFormModel,isRequest:!0,bizId:e.formModel.redheadId},on:{"update:formModel":function(l){e.redheadapplyFormModel=l}}}),t("div",{staticClass:"el-form kalix-form-table"},[t("div",{staticClass:"table-title"},[e._v("发文信息")]),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"发文部门",prop:"docDeptId",rules:e.rules.docDeptId,"label-width":e.labelWidth}},[t("kalix-org-select",{on:{selectChange:e.onOrgIdChange},model:{value:e.formModel.docDeptId,callback:function(l){e.$set(e.formModel,"docDeptId",l)},expression:"formModel.docDeptId"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"发文日期",prop:"docDate",rules:e.rules.docDate,"label-width":e.labelWidth}},[t("kalix-date-picker",{model:{value:e.formModel.docDate,callback:function(l){e.$set(e.formModel,"docDate",l)},expression:"formModel.docDate"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"打印人",prop:"printer",rules:e.rules.printer,"label-width":e.labelWidth}},[t("el-input",{model:{value:e.formModel.printer,callback:function(l){e.$set(e.formModel,"printer",l)},expression:"formModel.printer"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"校对人",prop:"checker",rules:e.rules.checker,"label-width":e.labelWidth}},[t("el-input",{model:{value:e.formModel.checker,callback:function(l){e.$set(e.formModel,"checker",l)},expression:"formModel.checker"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"页数",prop:"page","label-width":e.labelWidth}},[t("el-input-number",{staticStyle:{width:"100%"},attrs:{min:1},model:{value:e.formModel.page,callback:function(l){e.$set(e.formModel,"page",l)},expression:"formModel.page"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"份数",prop:"copy","label-width":e.labelWidth}},[t("el-input-number",{staticStyle:{width:"100%"},attrs:{min:1},model:{value:e.formModel.copy,callback:function(l){e.$set(e.formModel,"copy",l)},expression:"formModel.copy"}})],1)],1),e._e()])],1)],2)},staticRenderFns:[]},M=t("VU/8")(x,h,!1,null,null,null);l.default=M.exports}});
//# sourceMappingURL=237.9de5db0fcd40560e28a1.js.map