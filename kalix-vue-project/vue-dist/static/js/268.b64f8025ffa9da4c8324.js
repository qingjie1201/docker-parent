webpackJsonp([268],{"2CvX":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=a("woOf"),o=a.n(t),i=a("lxx8"),s=a("PkiF"),r=a("yVQT"),d=a("iMbh"),m=a("1RNI"),n=a("y7hl"),c={data:function(){return{formModel:o()({},i.a),labelWidth:"140px",functionCategroyURL:s.FunctionCategroyURL}},components:{KalixDialog:r.default,KalixDatePicker:d.default,KalixDictSelect:m.default,KalixFcTree2:n.default},methods:{}},f={render:function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("kalix-dialog",{ref:"kalixBizDialog",staticClass:"user-add",attrs:{bizKey:"artRecruit",formModel:e.formModel,isView:"isView"},on:{"update:formModel":function(l){e.formModel=l}}},[a("div",{staticClass:"el-form kalix-form-table",attrs:{slot:"dialogFormSlot"},slot:"dialogFormSlot"},[a("div",{staticClass:"table-title"},[e._v("企业信息")]),a("div",[a("el-form-item",{staticClass:"kalix-form-table-td",attrs:{label:"企业组织机构代码",prop:"companyCode","label-width":e.labelWidth}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.companyCode,callback:function(l){e.$set(e.formModel,"companyCode",l)},expression:"formModel.companyCode"}})],1)],1),a("div",{staticClass:"s-flex"},[a("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"企业名称",prop:"companyName","label-width":e.labelWidth}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.companyName,callback:function(l){e.$set(e.formModel,"companyName",l)},expression:"formModel.companyName"}})],1),a("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"企业邮箱",prop:"companyEmail","label-width":e.labelWidth}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.companyEmail,callback:function(l){e.$set(e.formModel,"companyEmail",l)},expression:"formModel.companyEmail"}})],1)],1),a("div",{staticClass:"s-flex"},[a("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"固定电话",prop:"companyPhone","label-width":e.labelWidth}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.companyPhone,callback:function(l){e.$set(e.formModel,"companyPhone",l)},expression:"formModel.companyPhone"}})],1),a("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"手机",prop:"companyMobile","label-width":e.labelWidth}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.companyMobile,callback:function(l){e.$set(e.formModel,"companyMobile",l)},expression:"formModel.companyMobile"}})],1)],1),a("div",{staticClass:"s-flex"},[a("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"企业性质",prop:"companyNature","label-width":e.labelWidth}},[a("kalix-dict-select",{attrs:{appName:"art",dictType:"企业性质",disabled:"disabled"},model:{value:e.formModel.companyNature,callback:function(l){e.$set(e.formModel,"companyNature",l)},expression:"formModel.companyNature"}})],1),a("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"企业规模",prop:"companyScale","label-width":e.labelWidth}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.companyScale,callback:function(l){e.$set(e.formModel,"companyScale",l)},expression:"formModel.companyScale"}})],1)],1),a("div",{staticClass:"s-flex"},[a("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"企业行业",prop:"companyIndustry","label-width":e.labelWidth}},[a("kalix-dict-select",{attrs:{appName:"art",dictType:"企业行业",disabled:"disabled"},model:{value:e.formModel.companyIndustry,callback:function(l){e.$set(e.formModel,"companyIndustry",l)},expression:"formModel.companyIndustry"}})],1),a("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"企业年限",prop:"companyLife","label-width":e.labelWidth}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.companyLife,callback:function(l){e.$set(e.formModel,"companyLife",l)},expression:"formModel.companyLife"}})],1)],1),a("div",{staticClass:"s-flex"},[a("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"企业所在省份",prop:"companyRegion","label-width":e.labelWidth}},[a("kalix-dict-select",{attrs:{appName:"art",dictType:"省份",disabled:"disabled"},model:{value:e.formModel.companyRegion,callback:function(l){e.$set(e.formModel,"companyRegion",l)},expression:"formModel.companyRegion"}})],1),a("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"企业所在城市",prop:"companyCity","label-width":e.labelWidth}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.companyCity,callback:function(l){e.$set(e.formModel,"companyCity",l)},expression:"formModel.companyCity"}})],1)],1),a("div",[a("el-form-item",{staticClass:"kalix-form-table-td",attrs:{label:"企业详细地址",prop:"companyAddress","label-width":e.labelWidth}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.companyAddress,callback:function(l){e.$set(e.formModel,"companyAddress",l)},expression:"formModel.companyAddress"}})],1)],1),a("div",{staticClass:"table-title"},[e._v("招聘信息")]),a("div",{staticClass:"s-flex"},[a("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"发布时间",prop:"publishDate","label-width":e.labelWidth}},[a("kalix-date-picker",{attrs:{placeholder:"发布时间",readonly:"readonly"},model:{value:e.formModel.publishDate,callback:function(l){e.$set(e.formModel,"publishDate",l)},expression:"formModel.publishDate"}})],1),a("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"岗位名称",prop:"position","label-width":e.labelWidth}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.position,callback:function(l){e.$set(e.formModel,"position",l)},expression:"formModel.position"}})],1)],1),a("div",{staticClass:"s-flex"},[a("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"工作省份",prop:"region","label-width":e.labelWidth}},[a("kalix-dict-select",{attrs:{appName:"art",dictType:"省份",disabled:"disabled"},model:{value:e.formModel.region,callback:function(l){e.$set(e.formModel,"region",l)},expression:"formModel.region"}})],1),a("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"工作城市",prop:"city","label-width":e.labelWidth}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.city,callback:function(l){e.$set(e.formModel,"city",l)},expression:"formModel.city"}})],1)],1),a("div",{staticClass:"s-flex"},[a("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"岗位要求",prop:"positionRequires","label-width":e.labelWidth}},[a("el-input",{attrs:{type:"textarea",readonly:"readonly"},model:{value:e.formModel.positionRequires,callback:function(l){e.$set(e.formModel,"positionRequires",l)},expression:"formModel.positionRequires"}})],1),a("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"岗位所需软件",prop:"requireSofts","label-width":e.labelWidth}},[a("el-input",{attrs:{type:"textarea",readonly:"readonly"},model:{value:e.formModel.requireSofts,callback:function(l){e.$set(e.formModel,"requireSofts",l)},expression:"formModel.requireSofts"}})],1)],1),a("div",{staticClass:"s-flex"},[a("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"岗位个数",prop:"jobNumbers","label-width":e.labelWidth}},[a("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.jobNumbers,callback:function(l){e.$set(e.formModel,"jobNumbers",l)},expression:"formModel.jobNumbers"}})],1),a("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"学历",prop:"education","label-width":e.labelWidth}},[a("kalix-dict-select",{attrs:{appName:"art",dictType:"学历",disabled:"disabled"},model:{value:e.formModel.education,callback:function(l){e.$set(e.formModel,"education",l)},expression:"formModel.education"}})],1)],1),a("div",[a("el-form-item",{staticClass:"kalix-form-table-td",attrs:{label:"职能类别",prop:"functionCategoryId","label-width":e.labelWidth}},[a("kalix-fc-tree2",{attrs:{treeDataURL:e.functionCategroyURL,disabled:"disabled"},model:{value:e.formModel.functionCategoryId,callback:function(l){e.$set(e.formModel,"functionCategoryId",l)},expression:"formModel.functionCategoryId"}})],1)],1),a("div",{staticClass:"s-flex"},[a("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"实习薪资",prop:"probationSalary","label-width":e.labelWidth}},[a("kalix-dict-select",{attrs:{appName:"art",dictType:"月薪",disabled:"disabled"},model:{value:e.formModel.probationSalary,callback:function(l){e.$set(e.formModel,"probationSalary",l)},expression:"formModel.probationSalary"}})],1),a("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"转正薪资",prop:"salary","label-width":e.labelWidth}},[a("kalix-dict-select",{attrs:{appName:"art",dictType:"月薪",disabled:"disabled"},model:{value:e.formModel.salary,callback:function(l){e.$set(e.formModel,"salary",l)},expression:"formModel.salary"}})],1)],1),e._v(" "),a("div",{staticClass:"s-flex"},[a("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"个人要求",prop:"personRequires","label-width":e.labelWidth}},[a("kalix-dict-select",{attrs:{appName:"art",dictType:"个人要求",multiple:"multiple",disabled:"disabled"},model:{value:e.formModel.personRequires,callback:function(l){e.$set(e.formModel,"personRequires",l)},expression:"formModel.personRequires"}})],1),a("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"工作类型",prop:"jobType","label-width":e.labelWidth}},[a("kalix-dict-select",{attrs:{appName:"art",dictType:"工作类型",disabled:"disabled"},model:{value:e.formModel.jobType,callback:function(l){e.$set(e.formModel,"jobType",l)},expression:"formModel.jobType"}})],1)],1)])])},staticRenderFns:[]},p=a("VU/8")(c,f,!1,null,null,null);l.default=p.exports}});
//# sourceMappingURL=268.b64f8025ffa9da4c8324.js.map