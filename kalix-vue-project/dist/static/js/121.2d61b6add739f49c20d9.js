webpackJsonp([121],{Qwc3:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("oLqv"),o=i("wpX3"),r=i("eIdC");Object(r.a)(o.WorkerComponent);var l={data:function(){return{dictDefine:[{cacheKey:o.ResearchCacheKey,type:"职称",targetField:"lastTitleDict",sourceField:"lastTitle"}],btnList:o.ToolButtonList,targetURL:o.WorkerURL,tableFields:[{prop:"name",label:"姓名"},{prop:"identificationCard",label:"身份证号"},{prop:"sex",label:"性别"},{prop:"orgName",label:"单位部门"},{prop:"lastTitleDict",label:"职称"},{prop:"phone",label:"联系电话"},{prop:"email",label:"电子邮件"}],bizDialog:[{id:"view",dialog:"ResearchWorkerView"},{id:"edit",dialog:"ResearchWorkerAdd"},{id:"add",dialog:"ResearchWorkerAdd"}]}},components:{BaseTable:a.default},activated:function(){console.log(this.bizKey+"  is activated")},deactivated:function(){console.log(this.bizKey+"  is deactivated")}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("keep-alive",[t("base-table",{attrs:{bizKey:"worker",title:"科研人员列表",tableFields:this.tableFields,targetURL:this.targetURL,bizDialog:this.bizDialog,bizSearch:"ResearchWorkerSearch",btnList:this.btnList,dictDefine:this.dictDefine}})],1)},staticRenderFns:[]},n=i("VU/8")(l,s,!1,function(e){i("fyW0")},"data-v-60145627",null);t.default=n.exports},fyW0:function(e,t,i){var a=i("gSUA");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("rjj0")("2242e1cf",a,!0)},gSUA:function(e,t,i){(e.exports=i("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"worker.vue",sourceRoot:""}])}});
//# sourceMappingURL=121.2d61b6add739f49c20d9.js.map