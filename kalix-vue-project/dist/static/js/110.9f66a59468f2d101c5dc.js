webpackJsonp([110],{"LF/J":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("oLqv"),a=i("PkiF"),l=i("eIdC");Object(l.a)(a.ArtCompanyComponent);var n={data:function(){return{dictDefine:[{cacheKey:"ART-DICT-KEY",type:"企业性质",targetField:"natureName",sourceField:"nature"},{cacheKey:"ART-DICT-KEY",type:"省份",targetField:"regionName",sourceField:"region"}],btnList:a.ToolButtonCompanyList,toolbarBtnList:[{id:"add",isShow:!1}],targetURL:a.CompanyURL,tableFields:[{prop:"code",label:"企业组织机构代码"},{prop:"name",label:"企业名称"},{prop:"natureName",label:"企业性质"},{prop:"regionName",label:"所在省份"},{prop:"city",label:"所在城市"},{prop:"email",label:"邮箱"},{prop:"phone",label:"固定电话"},{prop:"address",label:"企业详细地址"}],bizDialog:[{id:"view",dialog:"ArtCompanyView"},{id:"newEdit",dialog:"ArtCompanyAdd"}],isFixedColumn:!0}},components:{BaseTable:o.default},created:function(){},methods:{customTableTool:function(e,t,i){var o=this;switch(t){case"newEdit":i.whichBizDialog="";var a=i.bizDialog.filter(function(e){return"newEdit"===e.id});i.whichBizDialog=a[0].dialog,setTimeout(function(){e.id&&e.id>0?i.$refs.kalixDialog.$refs.kalixBizDialog.open("编辑",!0,e):(o.$delete(e,"version"),o.$delete(e,"version_"),i.$refs.kalixDialog.$refs.kalixBizDialog.open("编辑",!1,e))},20)}}}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("keep-alive",[t("base-table",{attrs:{bizKey:"artCompany",title:"公司信息列表",targetURL:this.targetURL,bizDialog:this.bizDialog,tableFields:this.tableFields,bizSearch:"ArtCompanySearch",btnList:this.btnList,toolbarBtnList:this.toolbarBtnList,customTableTool:this.customTableTool,dictDefine:this.dictDefine,isFixedColumn:this.isFixedColumn}})],1)},staticRenderFns:[]},s=i("VU/8")(n,r,!1,function(e){i("xmvt")},"data-v-6dfb8c80",null);t.default=s.exports},WXj4:function(e,t,i){(e.exports=i("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"company.vue",sourceRoot:""}])},xmvt:function(e,t,i){var o=i("WXj4");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i("rjj0")("75426480",o,!0)}});
//# sourceMappingURL=110.9f66a59468f2d101c5dc.js.map