webpackJsonp([261],{VVVh:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var r=t("woOf"),a=t.n(r),o=t("+1gJ"),s=t("eQiG"),i=t("CXu2"),d=t("yVQT"),m=t("1RNI"),n=t("TOAQ"),c={data:function(){return{formModel:a()({},o.a),rules:{personCategory:[{type:"number",required:!0,message:"请选择人员类别",trigger:"change"}],orgId:[{type:"number",required:!0,message:"请选择所在部门",trigger:"change"}],xm:[{required:!0,message:"请输入姓名",trigger:"blur"}],sex:[{type:"number",required:!0,message:"请选择性别",trigger:"change"}],tel:[{required:!0,message:"请输入联系电话",trigger:"blur"}],graduateSchool:[{required:!0,message:"请输入毕业学校",trigger:"blur"}],major:[{required:!0,message:"请输入专业",trigger:"blur"}],education:[{required:!0,message:"请输入最后学历",trigger:"blur"}],residence:[{required:!0,message:"请输入户口所在地",trigger:"blur"}],position:[{required:!0,message:"请输入应聘岗位",trigger:"blur"}],salary:[{required:!0,message:"请输入期望工资",trigger:"blur"}],experience:[{required:!0,message:"请输入从业经验",trigger:"blur"}]},targetURL:s.CandidateURL,labelWidth:"110px",orgNameOptions:[]}},components:{KalixDialog:d.default,KalixDictSelect:m.default,KalixOrgSelect:n.default},created:function(){this.orgNameOptions=JSON.parse(i.a.get("UserOrgs".toUpperCase()+"-KEY"))},methods:{onOrgIdChange:function(e){this.formModel.orgName=e.name}}},u={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("kalix-dialog",{ref:"kalixBizDialog",staticClass:"user-add",attrs:{bizKey:"candidate",formModel:e.formModel,targetURL:e.targetURL},on:{"update:formModel":function(l){e.formModel=l}}},[t("div",{staticClass:"el-form",attrs:{slot:"dialogFormSlot"},slot:"dialogFormSlot"},[t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item",attrs:{label:"人员类别",prop:"personCategory",rules:e.rules.personCategory,"label-width":e.labelWidth}},[t("kalix-dict-select",{staticStyle:{width:"100%"},attrs:{appName:"oa",dictType:"招聘人员类别"},model:{value:e.formModel.personCategory,callback:function(l){e.$set(e.formModel,"personCategory",l)},expression:"formModel.personCategory"}})],1),t("el-form-item",{staticClass:"s-flex_item",attrs:{label:"专业",prop:"major",rules:e.rules.major,"label-width":e.labelWidth}},[t("el-input",{model:{value:e.formModel.major,callback:function(l){e.$set(e.formModel,"major",l)},expression:"formModel.major"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item",attrs:{label:"所在部门",prop:"orgId",rules:e.rules.orgId,"label-width":e.labelWidth}},[t("kalix-org-select",{on:{selectChange:e.onOrgIdChange},model:{value:e.formModel.orgId,callback:function(l){e.$set(e.formModel,"orgId",l)},expression:"formModel.orgId"}})],1),t("el-form-item",{staticClass:"s-flex_item",attrs:{label:"最后学历",prop:"education",rules:e.rules.education,"label-width":e.labelWidth}},[t("el-input",{model:{value:e.formModel.education,callback:function(l){e.$set(e.formModel,"education",l)},expression:"formModel.education"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item",attrs:{label:"姓名",prop:"xm",rules:e.rules.xm,"label-width":e.labelWidth}},[t("el-input",{model:{value:e.formModel.xm,callback:function(l){e.$set(e.formModel,"xm",l)},expression:"formModel.xm"}})],1),t("el-form-item",{staticClass:"s-flex_item",attrs:{label:"户口所在地",prop:"residence",rules:e.rules.residence,"label-width":e.labelWidth}},[t("el-input",{model:{value:e.formModel.residence,callback:function(l){e.$set(e.formModel,"residence",l)},expression:"formModel.residence"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item",attrs:{label:"性别",prop:"sex",rules:e.rules.sex,"label-width":e.labelWidth}},[t("kalix-dict-select",{staticStyle:{width:"100%"},attrs:{appName:"oa",dictType:"性别"},model:{value:e.formModel.sex,callback:function(l){e.$set(e.formModel,"sex",l)},expression:"formModel.sex"}})],1),t("el-form-item",{staticClass:"s-flex_item",attrs:{label:"应聘岗位",prop:"position",rules:e.rules.position,"label-width":e.labelWidth}},[t("el-input",{model:{value:e.formModel.position,callback:function(l){e.$set(e.formModel,"position",l)},expression:"formModel.position"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item",attrs:{label:"年龄",prop:"age","label-width":e.labelWidth}},[t("el-input-number",{staticStyle:{width:"100%"},model:{value:e.formModel.age,callback:function(l){e.$set(e.formModel,"age",l)},expression:"formModel.age"}})],1),t("el-form-item",{staticClass:"s-flex_item",attrs:{label:"期望工资",prop:"salary",rules:e.rules.salary,"label-width":e.labelWidth}},[t("el-input",{model:{value:e.formModel.salary,callback:function(l){e.$set(e.formModel,"salary",l)},expression:"formModel.salary"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item",attrs:{label:"联系电话",prop:"tel",rules:e.rules.tel,"label-width":e.labelWidth}},[t("el-input",{model:{value:e.formModel.tel,callback:function(l){e.$set(e.formModel,"tel",l)},expression:"formModel.tel"}})],1),t("el-form-item",{staticClass:"s-flex_item",attrs:{label:"从业经验",prop:"experience",rules:e.rules.experience,"label-width":e.labelWidth}},[t("el-input",{model:{value:e.formModel.experience,callback:function(l){e.$set(e.formModel,"experience",l)},expression:"formModel.experience"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item",attrs:{label:"毕业学校",prop:"graduateSchool",rules:e.rules.graduateSchool,"label-width":e.labelWidth}},[t("el-input",{model:{value:e.formModel.graduateSchool,callback:function(l){e.$set(e.formModel,"graduateSchool",l)},expression:"formModel.graduateSchool"}})],1),t("el-form-item",{staticClass:"s-flex_item",attrs:{label:"备注",prop:"comment","label-width":e.labelWidth}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.formModel.comment,callback:function(l){e.$set(e.formModel,"comment",l)},expression:"formModel.comment"}})],1)],1)])])},staticRenderFns:[]},f=t("VU/8")(c,u,!1,null,null,null);l.default=f.exports}});
//# sourceMappingURL=261.5f9c9d2ff9efcc4ee117.js.map