webpackJsonp([209,249],{"5CVn":function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var o=t("woOf"),a=t.n(o),r=t("zkw0"),i=t("yVQT"),s=t("SKoF"),n={data:function(){return{formModel:a()({},r.a)}},components:{KalixDialog:i.default,KalixRecruitApplyViewForm:s.default}},d={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("kalix-dialog",{ref:"kalixBizDialog",staticClass:"user-add",attrs:{bizKey:"recruitApply",formModel:e.formModel,isView:"isView"},on:{"update:formModel":function(l){e.formModel=l}}},[t("div",{staticClass:"el-form",attrs:{slot:"dialogFormSlot"},slot:"dialogFormSlot"},[t("kalix-recruit-apply-view-form",{attrs:{formModel:e.formModel}})],1)])},staticRenderFns:[]},m=t("VU/8")(n,d,!1,null,null,null);l.default=m.exports},SKoF:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var o={props:["formModel"],data:function(){return{labelWidth:"110px"}},components:{KalixDateTimePicker:t("pNnW").default}},a={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"el-form kalix-form-table",attrs:{slot:"dialogFormSlot"},slot:"dialogFormSlot"},[t("div",{staticClass:"table-title"},[e._v("吉林动画学院用人申请表")]),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"名称","label-width":e.labelWidth,prop:"title"}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.title,callback:function(l){e.$set(e.formModel,"title",l)},expression:"formModel.title"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:" 创建时间",prop:"creationDate","label-width":e.labelWidth}},[t("kalix-date-time-picker",{staticStyle:{width:"100%"},attrs:{readonly:"readonly"},model:{value:e.formModel.creationDate,callback:function(l){e.$set(e.formModel,"creationDate",l)},expression:"formModel.creationDate"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"申请部门",prop:"orgName","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.orgName,callback:function(l){e.$set(e.formModel,"orgName",l)},expression:"formModel.orgName"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"申请事由",prop:"reason","label-width":e.labelWidth}},[t("el-input",{attrs:{value:e._f("getDictName")(e.formModel.reason,"OA","招聘需求原因"),readonly:"readonly"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"职位名称",prop:"positionName","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.positionName,callback:function(l){e.$set(e.formModel,"positionName",l)},expression:"formModel.positionName"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"kalix-form-table-td",attrs:{label:"拟聘人数",prop:"recruitCount","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.recruitCount,callback:function(l){e.$set(e.formModel,"recruitCount",l)},expression:"formModel.recruitCount"}})],1),t("el-form-item",{staticClass:"kalix-form-table-td",attrs:{label:"定编人数",prop:"allocationCount","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.allocationCount,callback:function(l){e.$set(e.formModel,"allocationCount",l)},expression:"formModel.allocationCount"}})],1),t("el-form-item",{staticClass:"kalix-form-table-td",attrs:{label:"现有人数",prop:"existCount","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.existCount,callback:function(l){e.$set(e.formModel,"existCount",l)},expression:"formModel.existCount"}})],1)],1),t("el-form-item",{attrs:{label:"核心职责",prop:"coreRecruit","label-width":e.labelWidth}},[t("el-input",{attrs:{type:"textarea",readonly:"readonly"},model:{value:e.formModel.coreRecruit,callback:function(l){e.$set(e.formModel,"coreRecruit",l)},expression:"formModel.coreRecruit"}})],1),t("el-form-item",{attrs:{label:"常规职责",prop:"commonRecruit","label-width":e.labelWidth}},[t("el-input",{attrs:{type:"textarea",readonly:"readonly"},model:{value:e.formModel.commonRecruit,callback:function(l){e.$set(e.formModel,"commonRecruit",l)},expression:"formModel.commonRecruit"}})],1),t("el-form-item",{attrs:{label:"任职基本条件",prop:"baseCondition","label-width":e.labelWidth}},[t("el-input",{attrs:{type:"textarea",readonly:"readonly"},model:{value:e.formModel.baseCondition,callback:function(l){e.$set(e.formModel,"baseCondition",l)},expression:"formModel.baseCondition"}})],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"待遇标准",prop:"treatmentLevel","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.treatmentLevel,callback:function(l){e.$set(e.formModel,"treatmentLevel",l)},expression:"formModel.treatmentLevel"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"建议招聘方式",prop:"recruitType","label-width":e.labelWidth}},[t("el-input",{attrs:{value:e._f("getDictName")(e.formModel.recruitType,"OA","招聘方式"),readonly:"readonly"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"申请人",prop:"createBy","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.createBy,callback:function(l){e.$set(e.formModel,"createBy",l)},expression:"formModel.createBy"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"部门负责人",prop:"depUser","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.depUser,callback:function(l){e.$set(e.formModel,"depUser",l)},expression:"formModel.depUser"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"人力资源处长",prop:"manpower","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.manpower,callback:function(l){e.$set(e.formModel,"manpower",l)},expression:"formModel.manpower"}})],1)],1)],1)},staticRenderFns:[]},r=t("VU/8")(o,a,!1,null,null,null);l.default=r.exports},zkw0:function(e,l,t){"use strict";l.a={title:"吉林动画学院用人申请表",orgId:null,orgName:"",processInstanceId:"",currentNode:"",status:0,auditResult:"流程尚未启动",businessNo:"",applyDate:"",creationDate:"",createBy:"",personType:"",reason:null,positionName:"",recruitCount:null,allocationCount:null,existCount:null,leaderName:"",treatmentLevel:"",coreRecruit:"",commonRecruit:"",baseCondition:"",recruitType:null,depUser:"",manpower:""}}});
//# sourceMappingURL=209.5f4bbe9e7a6eebb7074e.js.map