webpackJsonp([28],{"6qgl":function(e,l,t){var a=t("IjWQ");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("rjj0")("4d7e5fdc",a,!0)},AZq4:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=t("woOf"),o=t.n(a),r=t("PvT2"),i=t("UZBS"),s=t("yVQT"),d=t("y7hl"),n=t("iMbh"),m=t("1RNI"),f={data:function(){return{formModel:o()({},r.a),orgURL:i.orgURL,orgId:i.TeachingUnitOrgID,labelWidth:"140px"}},components:{KalixDialog:s.default,KalixMajorTree2:d.default,KalixDatePicker:n.default,KalixDictSelect:m.default},created:function(){},methods:{}},c={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("kalix-dialog",{ref:"kalixBizDialog",staticClass:"user-add",attrs:{bizKey:"researchStudent",formModel:e.formModel,isView:"isView"},on:{"update:formModel":function(l){e.formModel=l}}},[t("div",{staticClass:"el-form kalix-form-table",attrs:{slot:"dialogFormSlot"},slot:"dialogFormSlot"},[t("div",{staticClass:"table-title"},[e._v("学生注册信息")]),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"学号",prop:"code","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.code,callback:function(l){e.$set(e.formModel,"code",l)},expression:"formModel.code"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"姓名",prop:"name","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.name,callback:function(l){e.$set(e.formModel,"name",l)},expression:"formModel.name"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"性别",prop:"sex","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.sex,callback:function(l){e.$set(e.formModel,"sex",l)},expression:"formModel.sex"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"邮箱",prop:"email","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.email,callback:function(l){e.$set(e.formModel,"email",l)},expression:"formModel.email"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"固定电话",prop:"phone","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.phone,callback:function(l){e.$set(e.formModel,"phone",l)},expression:"formModel.phone"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"手机",prop:"mobile","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.mobile,callback:function(l){e.$set(e.formModel,"mobile",l)},expression:"formModel.mobile"}})],1)],1),t("div",{staticClass:"table-title"},[e._v("学生详细信息")]),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"专业",prop:"majorId","label-width":e.labelWidth}},[t("kalix-major-tree2",{attrs:{treeDataURL:e.orgURL,parentNodeId:e.orgId,disabled:"disabled"},model:{value:e.formModel.majorId,callback:function(l){e.$set(e.formModel,"majorId",l)},expression:"formModel.majorId"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"辅导员",prop:"instructor","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.instructor,callback:function(l){e.$set(e.formModel,"instructor",l)},expression:"formModel.instructor"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"出生日期",prop:"birthday","label-width":e.labelWidth}},[t("kalix-date-picker",{attrs:{readonly:"readonly"},model:{value:e.formModel.birthday,callback:function(l){e.$set(e.formModel,"birthday",l)},expression:"formModel.birthday"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"民族",prop:"nation","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.nation,callback:function(l){e.$set(e.formModel,"nation",l)},expression:"formModel.nation"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"籍贯",prop:"placeOfOrigin","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.placeOfOrigin,callback:function(l){e.$set(e.formModel,"placeOfOrigin",l)},expression:"formModel.placeOfOrigin"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"现联系地址",prop:"address","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.address,callback:function(l){e.$set(e.formModel,"address",l)},expression:"formModel.address"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"政治面貌",prop:"politicalStatus","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.politicalStatus,callback:function(l){e.$set(e.formModel,"politicalStatus",l)},expression:"formModel.politicalStatus"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"入党(团)时间",prop:"joinPartyDate","label-width":e.labelWidth}},[t("kalix-date-picker",{attrs:{readonly:"readonly"},model:{value:e.formModel.joinPartyDate,callback:function(l){e.$set(e.formModel,"joinPartyDate",l)},expression:"formModel.joinPartyDate"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"邮政编码",prop:"postalcode","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.postalcode,callback:function(l){e.$set(e.formModel,"postalcode",l)},expression:"formModel.postalcode"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"家庭联系电话",prop:"homePhone","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.homePhone,callback:function(l){e.$set(e.formModel,"homePhone",l)},expression:"formModel.homePhone"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"生源省份",prop:"province","label-width":e.labelWidth}},[t("kalix-dict-select",{attrs:{appName:"research",dictType:"省份",disabled:"disabled"},model:{value:e.formModel.province,callback:function(l){e.$set(e.formModel,"province",l)},expression:"formModel.province"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"入学年份",prop:"entranceYear","label-width":e.labelWidth}},[t("kalix-date-picker",{attrs:{type:"year",readonly:"readonly"},model:{value:e.formModel.entranceYear,callback:function(l){e.$set(e.formModel,"entranceYear",l)},expression:"formModel.entranceYear"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"学生培养层次",prop:"trainingLevel","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.trainingLevel,callback:function(l){e.$set(e.formModel,"trainingLevel",l)},expression:"formModel.trainingLevel"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"学习年限",prop:"period","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.period,callback:function(l){e.$set(e.formModel,"period",l)},expression:"formModel.period"}})],1)],1)])])},staticRenderFns:[]},p=t("VU/8")(f,c,!1,function(e){t("6qgl")},"data-v-12bb6d32",null);l.default=p.exports},IjWQ:function(e,l,t){(e.exports=t("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"studentView.vue",sourceRoot:""}])},PvT2:function(e,l,t){"use strict";l.a={id:null,userId:null,code:"",name:"",sex:"",email:"",phone:"",mobile:"",majorId:null,majorName:"",instructor:"",birthday:null,nation:"",placeOfOrigin:"",politicalStatus:"",joinPartyDate:null,address:"",postalcode:"",homePhone:"",province:null,entranceYear:null,trainingLevel:"",period:""}}});
//# sourceMappingURL=28.bc91703be9093a19a50c.js.map