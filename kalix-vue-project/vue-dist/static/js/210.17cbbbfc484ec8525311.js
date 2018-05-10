webpackJsonp([210,250],{HGvm:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a={props:["formModel"],data:function(){return{labelWidth:"110px"}},components:{KalixDateTimePicker:t("pNnW").default},methods:{}},o={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"el-form kalix-form-table",attrs:{slot:"dialogFormSlot"},slot:"dialogFormSlot"},[t("div",{staticClass:"table-title"},[e._v("吉林动画学院会议室申请表")]),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"名称",prop:"title","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.title,callback:function(l){e.$set(e.formModel,"title",l)},expression:"formModel.title"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"创建时间",prop:"creationDate","label-width":e.labelWidth}},[t("kalix-date-time-picker",{staticStyle:{width:"100%"},attrs:{readonly:"readonly"},model:{value:e.formModel.creationDate,callback:function(l){e.$set(e.formModel,"creationDate",l)},expression:"formModel.creationDate"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"申请部门",prop:"orgName","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.orgName,callback:function(l){e.$set(e.formModel,"orgName",l)},expression:"formModel.orgName"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"申请时间",prop:"applyDate","label-width":e.labelWidth}},[t("kalix-date-time-picker",{attrs:{readonly:"readonly"},model:{value:e.formModel.applyDate,callback:function(l){e.$set(e.formModel,"applyDate",l)},expression:"formModel.applyDate"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"会议时间",prop:"meetingDate","label-width":e.labelWidth}},[e._v("   "+e._s(e.formModel.meetingDateStr)+" "+e._s(e.formModel.beginTimeStr)+" - "+e._s(e.formModel.endTimeStr))]),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"会议地点",prop:"meetingroomName","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.meetingroomName,callback:function(l){e.$set(e.formModel,"meetingroomName",l)},expression:"formModel.meetingroomName"}})],1)],1),t("el-form-item",{attrs:{label:"会议名称",prop:"meetingTopic","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.meetingTopic,callback:function(l){e.$set(e.formModel,"meetingTopic",l)},expression:"formModel.meetingTopic"}})],1),t("el-form-item",{attrs:{label:"会议内容",prop:"meetingAgenda","label-width":e.labelWidth}},[t("el-input",{attrs:{type:"textarea",rows:3,readonly:"readonly"},model:{value:e.formModel.meetingAgenda,callback:function(l){e.$set(e.formModel,"meetingAgenda",l)},expression:"formModel.meetingAgenda"}})],1),t("el-form-item",{attrs:{label:"参会人员",prop:"participant","label-width":e.labelWidth}},[t("el-input",{attrs:{type:"textarea",rows:2,readonly:"readonly"},model:{value:e.formModel.participant,callback:function(l){e.$set(e.formModel,"participant",l)},expression:"formModel.participant"}})],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"主持人",prop:"host","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.host,callback:function(l){e.$set(e.formModel,"host",l)},expression:"formModel.host"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"参会人数",prop:"attendance","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.attendance,callback:function(l){e.$set(e.formModel,"attendance",l)},expression:"formModel.attendance"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"协调人",prop:"securityPerson","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.securityPerson,callback:function(l){e.$set(e.formModel,"securityPerson",l)},expression:"formModel.securityPerson"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"协调人电话",prop:"securityTel","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.securityTel,callback:function(l){e.$set(e.formModel,"securityTel",l)},expression:"formModel.securityTel"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"申请人电话",prop:"operatorPhone","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.operatorPhone,callback:function(l){e.$set(e.formModel,"operatorPhone",l)},expression:"formModel.operatorPhone"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"宣传需求",prop:"requireType","label-width":e.labelWidth}},[t("el-input",{attrs:{value:e._f("getDictName")(e.formModel.requireType,"OA","会议需求类型"),readonly:"readonly"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"是否周历",prop:"weekCalander","label-width":e.labelWidth}},[t("div",{staticStyle:{"text-align":"center"}},[t("el-switch",{attrs:{"active-text":"是","inactive-text":"否",disabled:"disabled"},model:{value:e.formModel.weekCalander,callback:function(l){e.$set(e.formModel,"weekCalander",l)},expression:"formModel.weekCalander"}})],1)]),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"设备要求",prop:"equipmentRequirement","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.equipmentRequirement,callback:function(l){e.$set(e.formModel,"equipmentRequirement",l)},expression:"formModel.equipmentRequirement"}})],1)],1),e.formModel.weekCalander?[t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"学年",prop:"schoolYear","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.schoolYear,callback:function(l){e.$set(e.formModel,"schoolYear",l)},expression:"formModel.schoolYear"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"学期",prop:"term","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.term,callback:function(l){e.$set(e.formModel,"term",l)},expression:"formModel.term"}})],1)],1),t("el-form-item",{attrs:{label:"学周",prop:"week","label-width":e.labelWidth}},[t("el-input",{attrs:{value:e._f("getDictName")(e.formModel.week,"OA","学周"),readonly:"readonly"}})],1)]:e._e(),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"行政事务办主管",prop:"schoolAdminUser","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.schoolAdminUser,callback:function(l){e.$set(e.formModel,"schoolAdminUser",l)},expression:"formModel.schoolAdminUser"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"校务部",prop:"schoolUser","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.schoolUser,callback:function(l){e.$set(e.formModel,"schoolUser",l)},expression:"formModel.schoolUser"}})],1)],1)],2)},staticRenderFns:[]},r=t("VU/8")(a,o,!1,null,null,null);l.default=r.exports},rM3q:function(e,l,t){"use strict";l.a={title:"吉林动画学院会议室申请表",orgId:null,orgName:"",processInstanceId:"",currentNode:"",status:0,auditResult:"流程尚未启动",businessNo:"",applyDate:"",creationDate:"",createBy:"",meetingroomId:null,meetingroomName:"",meetingDate:null,meetingDateStr:"",beginTime:null,beginTimeStr:"",endTime:null,endTimeStr:"",meetingTopic:"",meetingAgenda:"相关内容",participant:"",host:"",securityPerson:"",securityTel:"",operatorPhone:"",requireType:null,attendance:null,equipmentRequirement:"",schoolAdminUser:"",schoolUser:"",weekCalander:!1,schoolYear:"",term:"",week:null}},zYMZ:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=t("woOf"),o=t.n(a),r=t("rM3q"),i=t("yVQT"),s=t("HGvm"),d={data:function(){return{formModel:o()({},r.a)}},created:function(){},components:{KalixDialog:i.default,KalixTempApplyViewForm:s.default},methods:{init:function(e,l){var t=l.meetingDateStr;this.formModel.beginTime=new Date(t+" "+l.beginTimeStr),this.formModel.endTime=new Date(t+" "+l.endTimeStr)}}},n={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("kalix-dialog",{ref:"kalixBizDialog",staticClass:"user-add",attrs:{bizKey:"tempApply",formModel:e.formModel,isView:"isView"},on:{"update:formModel":function(l){e.formModel=l}}},[t("kalix-temp-apply-view-form",{attrs:{slot:"dialogFormSlot","form-model":e.formModel},slot:"dialogFormSlot"})],1)},staticRenderFns:[]},m=t("VU/8")(d,n,!1,null,null,null);l.default=m.exports}});
//# sourceMappingURL=210.17cbbbfc484ec8525311.js.map