webpackJsonp([212,259],{MkyF:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=t("woOf"),o=t.n(a),r=t("SKMj"),s=t("yVQT"),i=t("Ye/W"),d={data:function(){return{formModel:o()({},r.a)}},components:{KalixDialog:s.default,KalixCarApplyViewForm:i.default}},n={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("kalix-dialog",{ref:"kalixBizDialog",staticClass:"user-add",attrs:{bizKey:"carapply",formModel:e.formModel,isView:"isView"},on:{"update:formModel":function(l){e.formModel=l}}},[t("kalix-car-apply-view-form",{attrs:{slot:"dialogFormSlot",formModel:e.formModel},slot:"dialogFormSlot"})],1)},staticRenderFns:[]},m=t("VU/8")(d,n,!1,null,null,null);l.default=m.exports},SKMj:function(e,l,t){"use strict";l.a={title:"吉林动画学院公务用车申请表",orgId:null,orgName:"",processInstanceId:"",currentNode:"",status:0,auditResult:"流程尚未启动",businessNo:"",applyDate:"",creationDate:"",createBy:"",reason:"",usageCount:null,beginDate:null,endDate:null,address:"",city:!0,operatorPhone:"",depUser:"",depManageUser:"",schoolUser:"",schoolManageUser:"",carNo:"",entourage:"",entouragePhone:"",startKM:null,endKM:null}},"Ye/W":function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a={props:["formModel"],data:function(){return{labelWidth:"110px"}},components:{KalixDateTimePicker:t("pNnW").default}},o={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"el-form kalix-form-table",attrs:{slot:"dialogFormSlot"},slot:"dialogFormSlot"},[t("div",{staticClass:"table-title"},[e._v("吉林动画学院公务用车申请表")]),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"名称","label-width":e.labelWidth,prop:"title"}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.title,callback:function(l){e.$set(e.formModel,"title",l)},expression:"formModel.title"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"填表时间",prop:"creationDate","label-width":e.labelWidth}},[t("kalix-date-time-picker",{staticStyle:{width:"100%"},attrs:{readonly:"readonly"},model:{value:e.formModel.creationDate,callback:function(l){e.$set(e.formModel,"creationDate",l)},expression:"formModel.creationDate"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"申请部门",prop:"orgName","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.orgName,callback:function(l){e.$set(e.formModel,"orgName",l)},expression:"formModel.orgName"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"申请时间",prop:"applyDate","label-width":e.labelWidth}},[t("kalix-date-time-picker",{staticStyle:{width:"100%"},attrs:{readonly:"readonly"},model:{value:e.formModel.applyDate,callback:function(l){e.$set(e.formModel,"applyDate",l)},expression:"formModel.applyDate"}})],1)],1),t("el-form-item",{attrs:{label:"用车事由",prop:"reason","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.reason,callback:function(l){e.$set(e.formModel,"reason",l)},expression:"formModel.reason"}})],1),t("div",{staticClass:"s-flex"},[t("div",{staticClass:"s-flex_item"},[t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"kalix-form-table-td",attrs:{label:"乘车人数",prop:"usageCount","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.usageCount,callback:function(l){e.$set(e.formModel,"usageCount",l)},expression:"formModel.usageCount"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"用车时段","label-width":e.labelWidth}})],1)]),t("div",{staticClass:"s-flex_item",staticStyle:{"margin-left":"-1px"}},[t("div",{staticClass:"s-flex"},[t("div",{staticClass:"s-flex_item"},[t("kalix-date-time-picker",{staticStyle:{"margin-left":"1px",width:"100%"},attrs:{placeholder:"选择开始时间",readonly:"readonly"},model:{value:e.formModel.beginDate,callback:function(l){e.$set(e.formModel,"beginDate",l)},expression:"formModel.beginDate"}})],1),t("div",{staticStyle:{"line-height":"32px"}},[e._v("至")]),t("div",{staticClass:"s-flex_item"},[t("kalix-date-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择结束时间",readonly:"readonly"},model:{value:e.formModel.endDate,callback:function(l){e.$set(e.formModel,"endDate",l)},expression:"formModel.endDate"}})],1)])])]),t("el-form-item",{attrs:{label:"用车起始地点",prop:"address","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.address,callback:function(l){e.$set(e.formModel,"address",l)},expression:"formModel.address"}})],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"用车情况",prop:"city","label-width":e.labelWidth}},[t("div",{staticStyle:{"text-align":"center"}},[t("el-switch",{staticClass:"s-flex_item",attrs:{"active-text":"市内用车","inactive-text":"市外用车",disabled:"disabled"},model:{value:e.formModel.city,callback:function(l){e.$set(e.formModel,"city",l)},expression:"formModel.city"}})],1)]),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"申请人",prop:"createBy","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.createBy,callback:function(l){e.$set(e.formModel,"createBy",l)},expression:"formModel.createBy"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"联系电话",prop:"operatorPhone","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.operatorPhone,callback:function(l){e.$set(e.formModel,"operatorPhone",l)},expression:"formModel.operatorPhone"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"部门陪同人员",prop:"entourage","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.entourage,callback:function(l){e.$set(e.formModel,"entourage",l)},expression:"formModel.entourage"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"陪同人员电话",prop:"entouragePhone","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.entouragePhone,callback:function(l){e.$set(e.formModel,"entouragePhone",l)},expression:"formModel.entouragePhone"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"部门负责人",prop:"depUser","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.depUser,callback:function(l){e.$set(e.formModel,"depUser",l)},expression:"formModel.depUser"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"部门主管领导",prop:"depManageUser","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.depManageUser,callback:function(l){e.$set(e.formModel,"depManageUser",l)},expression:"formModel.depManageUser"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"校务部",prop:"schoolUser","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.schoolUser,callback:function(l){e.$set(e.formModel,"schoolUser",l)},expression:"formModel.schoolUser"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"校务部主管领导(市外)",prop:"schoolManageUser","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.schoolManageUser,callback:function(l){e.$set(e.formModel,"schoolManageUser",l)},expression:"formModel.schoolManageUser"}})],1)],1),t("div",{staticStyle:{"padding-left":"20px","font-weight":"bold"}},[e._v("以下是司机填写")]),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"车牌号",prop:"carNo","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.carNo,callback:function(l){e.$set(e.formModel,"carNo",l)},expression:"formModel.carNo"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"起车公里数",prop:"startKM","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.startKM,callback:function(l){e.$set(e.formModel,"startKM",l)},expression:"formModel.startKM"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"收车公里数",prop:"endKM","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.endKM,callback:function(l){e.$set(e.formModel,"endKM",l)},expression:"formModel.endKM"}})],1)],1),t("div",{staticStyle:{"padding-left":"20px","font-weight":"bold"}},[e._v("注：合计里程金额（大车：5元/公里，小车：2元/公里）")])],1)},staticRenderFns:[]},r=t("VU/8")(a,o,!1,null,null,null);l.default=r.exports}});
//# sourceMappingURL=212.c96f45c7664604de870f.js.map