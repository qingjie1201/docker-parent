webpackJsonp([284],{uB0e:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=t("woOf"),l=t.n(r),a=t("qD60"),i={data:function(){return{orgName:"",formModel:l()({},a.a),rules:{name:[{required:!0,message:"请输入职务名称",trigger:"blur"}]},targetURL:"",labelWidth:"110px"}},components:{KalixDialog:t("yVQT").default},created:function(){},methods:{init:function(e){this.orgName=e.orgName,this.formModel.orgid=e.orgId,this.targetURL=e.targetURL}}},n={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("kalix-dialog",{ref:"kalixBizDialog",staticClass:"user-add",attrs:{bizKey:"duty",formModel:e.formModel,targetURL:e.targetURL},on:{"update:formModel":function(o){e.formModel=o}}},[t("div",{staticClass:"el-form",attrs:{slot:"dialogFormSlot"},slot:"dialogFormSlot"},[t("el-form-item",{attrs:{label:"所属机构",prop:"orgid","label-width":"120px"}},[t("el-input",{domProps:{textContent:e._s(e.orgName)}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.formModel.orgid,expression:"formModel.orgid"}],attrs:{type:"hidden"},domProps:{value:e.formModel.orgid},on:{input:function(o){o.target.composing||e.$set(e.formModel,"orgid",o.target.value)}}})],1),t("el-form-item",{attrs:{label:"职务名称",prop:"name","label-width":"120px",rules:e.rules.name}},[t("el-input",{model:{value:e.formModel.name,callback:function(o){e.$set(e.formModel,"name",o)},expression:"formModel.name"}})],1),t("el-form-item",{attrs:{label:"职务描述",prop:"comment","label-width":"120px"}},[t("el-input",{model:{value:e.formModel.comment,callback:function(o){e.$set(e.formModel,"comment",o)},expression:"formModel.comment"}})],1)],1)])},staticRenderFns:[]},m=t("VU/8")(i,n,!1,null,null,null);o.default=m.exports}});
//# sourceMappingURL=284.cd7e15b727ed77af92ba.js.map