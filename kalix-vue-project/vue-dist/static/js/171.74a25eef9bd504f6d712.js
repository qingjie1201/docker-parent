webpackJsonp([171],{"6vwg":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("oLqv"),a=i("PkiF"),l=i("eIdC");Object(l.a)(a.ArtStudentComponent,a.ArtScoreComponent);var n={data:function(){return{dictDefine:[{cacheKey:"RESEARCH-DICT-KEY",type:"省份",targetField:"provinceName",sourceField:"province"}],btnList:a.ToolButtonStudentList,toolbarBtnList:[{id:"add",isShow:!1}],targetURL:a.StudentURL,tableFields:[{prop:"code",label:"学号"},{prop:"name",label:"姓名"},{prop:"sex",label:"性别"},{prop:"majorName",label:"专业"},{prop:"className",label:"班级"},{prop:"provinceName",label:"生源省份"},{prop:"entranceYear",label:"入学年份"},{prop:"phone",label:"固定电话"},{prop:"mobile",label:"手机"},{prop:"address",label:"联系地址"}],bizDialog:[{id:"view",dialog:"ArtStudentView"},{id:"newEdit",dialog:"ArtStudentAdd"}],isFixedColumn:!0}},components:{BaseTable:o.default},created:function(){},methods:{customTableTool:function(e,t,i){var o=this;switch(t){case"newEdit":i.whichBizDialog="";var a=i.bizDialog.filter(function(e){return"newEdit"===e.id});i.whichBizDialog=a[0].dialog,setTimeout(function(){e.id&&e.id>0?i.$refs.kalixDialog.$refs.kalixBizDialog.open("编辑",!0,e):(o.$delete(e,"version"),o.$delete(e,"version_"),i.$refs.kalixDialog.$refs.kalixBizDialog.open("编辑",!1,e))},20)}}}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("keep-alive",[t("base-table",{attrs:{bizKey:"artStudent",title:"学生信息列表",targetURL:this.targetURL,bizDialog:this.bizDialog,tableFields:this.tableFields,bizSearch:"ArtStudentSearch",btnList:this.btnList,toolbarBtnList:this.toolbarBtnList,customTableTool:this.customTableTool,dictDefine:this.dictDefine,isFixedColumn:this.isFixedColumn}})],1)},staticRenderFns:[]},s=i("VU/8")(n,r,!1,function(e){i("AifP")},"data-v-25b9feaa",null);t.default=s.exports},AifP:function(e,t,i){var o=i("AnPz");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i("rjj0")("64a92516",o,!0)},AnPz:function(e,t,i){(e.exports=i("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"student.vue",sourceRoot:""}])}});
//# sourceMappingURL=171.74a25eef9bd504f6d712.js.map