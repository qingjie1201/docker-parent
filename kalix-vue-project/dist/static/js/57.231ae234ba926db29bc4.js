webpackJsonp([57],{"9bID":function(e,t,i){var n=i("Qvkw");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("4c47ba75",n,!0)},Qvkw:function(e,t,i){(e.exports=i("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"interview.vue",sourceRoot:""}])},UDGo:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("woOf"),o=i.n(n),l=i("iwC4"),a=i("oLqv"),r=i("eQiG"),s=i("eIdC");Object(s.a)(r.InterviewComponent);var c={data:function(){return{isFixedColumn:!0,btnList:r.ToolButtonList,toolbarBtnList:[{id:"add",isShow:!1},{id:"interviewOne",title:"面试",isShow:!0,icon:"icon-add"},{id:"interviewTwo",title:"复试",isShow:!0,icon:"icon-add"}],targetURL:r.InterviewURL,bizDialog:[{id:"view",dialog:"OaInterviewView"},{id:"edit",dialog:"OaInterviewAdd"},{id:"interviewOne",dialog:"OaInterviewAdd"},{id:"interviewTwo",dialog:"OaInterviewAdd"}],columnWidth:180}},components:{BaseTable:a.default},created:function(){},mounted:function(){},methods:{customToolBar:function(e,t){switch(e){case"interviewOne":this.onInterviewOne(t);break;case"interviewTwo":this.onInterviewTwo(t)}},onInterviewOne:function(e){var t=this,i=e.bizDialog.filter(function(e){return"interviewOne"===e.id});e.whichBizDialog=i[0].dialog,setTimeout(function(){t.formModel=o()({},l.a),t.formModel.whichInterview="first",e.$refs.kalixDialog.$refs.kalixBizDialog.open("添加",!1,t.formModel)},20)},onInterviewTwo:function(e){var t=this,i=e.bizDialog.filter(function(e){return"interviewTwo"===e.id});e.whichBizDialog=i[0].dialog,setTimeout(function(){t.formModel=o()({},l.a),t.formModel.whichInterview="second",e.$refs.kalixDialog.$refs.kalixBizDialog.open("修改",!1,t.formModel)},20)},customRender:function(e){e.forEach(function(e){e.passFirstName=e.passFirst?"是":"否",e.passSecondName=e.passSecond?"是":"否"})}}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("keep-alive",[t("base-table",{attrs:{bizKey:"interview",title:"面试人员列表",targetURL:this.targetURL,bizDialog:this.bizDialog,bizSearch:"OaInterviewSearch",btnList:this.btnList,isFixedColumn:this.isFixedColumn,toolbarBtnList:this.toolbarBtnList,customToolBar:this.customToolBar,customRender:this.customRender}},[t("template",{slot:"tableColumnSlot"},[t("el-table-column",{attrs:{prop:"xm",label:"应聘者姓名",align:"center",width:this.columnWidth}}),t("el-table-column",{attrs:{prop:"dateFirst",label:"初试时间",align:"center",width:this.columnWidth}}),t("el-table-column",{attrs:{prop:"interviewerFirst",label:"初试面试官",align:"center",width:this.columnWidth}}),t("el-table-column",{attrs:{prop:"interviewContentFirst",label:"初试面试内容",align:"center",width:this.columnWidth}}),t("el-table-column",{attrs:{prop:"passFirstName",label:"初试是否通过",align:"center",width:this.columnWidth}}),t("el-table-column",{attrs:{prop:"dateSecond",label:"复试时间",align:"center",width:this.columnWidth}}),t("el-table-column",{attrs:{prop:"interviewerSecond",label:"复试面试官",align:"center",width:this.columnWidth}}),t("el-table-column",{attrs:{prop:"interviewContentSecond",label:"复试面试内容",align:"center",width:this.columnWidth}}),t("el-table-column",{attrs:{prop:"passSecondName",label:"复试是否通过",align:"center",width:this.columnWidth}})],1)],2)],1)],1)},staticRenderFns:[]},u=i("VU/8")(c,d,!1,function(e){i("9bID")},"data-v-e480f366",null);t.default=u.exports}});
//# sourceMappingURL=57.231ae234ba926db29bc4.js.map