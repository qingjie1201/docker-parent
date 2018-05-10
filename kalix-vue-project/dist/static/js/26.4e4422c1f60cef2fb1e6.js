webpackJsonp([26],{GRQz:function(e,t,i){(e.exports=i("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"student.vue",sourceRoot:""}])},q45O:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("woOf"),a=i.n(o),l=i("uOON"),d=i("oLqv"),r=i("wpX3"),s=i("eIdC"),n=i("u4eY");Object(s.a)(r.ResearchStudentComponent);var c={data:function(){return{dictDefine:[{cacheKey:"RESEARCH-DICT-KEY",type:"省份",targetField:"provinceName",sourceField:"province"}],btnList:r.ToolButtonPersonList,toolbarBtnList:[{id:"add",isShow:!1}],targetURL:r.StudentURL,tableFields:[{prop:"code",label:"学号"},{prop:"name",label:"姓名"},{prop:"sex",label:"性别"},{prop:"majorName",label:"专业"},{prop:"provinceName",label:"生源省份"},{prop:"entranceYear",label:"入学年份"},{prop:"phone",label:"固定电话"},{prop:"mobile",label:"手机"},{prop:"homePhone",label:"家庭联系电话"},{prop:"address",label:"联系地址"}],bizDialog:[{id:"view",dialog:"ResearchStudentView"},{id:"newEdit",dialog:"ResearchStudentAdd"}],detailBtnList:r.ToolButtonScoreList,detailToolbarBtnList:[{id:"add",isShow:!1},{id:"newAdd",title:"添加",isShow:!0,icon:"icon-add"}],detailTargetURL:"",detailTableFields:[{prop:"code",label:"学号"},{prop:"name",label:"姓名"},{prop:"majorCourseName",label:"专业课程"},{prop:"score",label:"成绩"}],detailBizDialog:[{id:"newEdit",dialog:"ResearchScoreAdd"},{id:"newAdd",dialog:"ResearchScoreAdd"}],detailJsonStr:""}},components:{BaseTable:d.default},created:function(){},methods:{customTableTool:function(e,t,i){switch(t){case"newEdit":this.onNewEdit(e,i)}},onNewEdit:function(e,t){var i=this;t.whichBizDialog="";var o=t.bizDialog.filter(function(e){return"newEdit"===e.id});t.whichBizDialog=o[0].dialog,setTimeout(function(){e.id&&e.id>0?t.$refs.kalixDialog.$refs.kalixBizDialog.open("编辑",!0,e):(i.$delete(e,"version"),i.$delete(e,"version_"),t.$refs.kalixDialog.$refs.kalixBizDialog.open("编辑",!1,e))},20)},detailCustomToolBar:function(e,t){switch(e){case"newAdd":this.onDetailNewAdd(t)}},onDetailNewAdd:function(e){var t=this,i=e.bizDialog.filter(function(e){return"newAdd"===e.id});e.whichBizDialog=i[0].dialog,setTimeout(function(){t.detailFormModel=a()({},l.a),t.detailRow&&t.detailRow.id?(t.detailFormModel.studentId=t.detailRow.id,t.detailFormModel.code=t.detailRow.code,t.detailFormModel.name=t.detailRow.name,t.detailFormModel.majorId=t.detailRow.majorId,t.detailFormModel.majorName=t.detailRow.majorName,t.detailFormModel.targetURL=t.detailTargetURL,e.$refs.kalixDialog.$refs.kalixBizDialog.open("添加",!1,t.detailFormModel)):n.a.error("学生信息无效,无法添加成绩! 请先选择学生并确认已经维护过其详细信息!")},20)},detailCustomTableTool:function(e,t,i){switch(t){case"newEdit":this.onDetailNewEdit(e,i)}},onDetailNewEdit:function(e,t){var i=this,o=t.bizDialog.filter(function(e){return"newEdit"===e.id});t.whichBizDialog=o[0].dialog,setTimeout(function(){i.detailRow?(e.targetURL=i.detailTargetURL,t.$refs.kalixDialog.$refs.kalixBizDialog.open("编辑",!0,e)):n.a.error("学生信息无效,无法编辑成绩! 请先选择学生并确认已经维护过其详细信息!")},20)},onTableRowClick:function(e,t,i){this.$refs.scoreTable.clearData(),this.detailRow=e,this.id=e.id,this.id&&(this.detailTargetURL=r.StudentURL+"/"+this.id+"/scores")}}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{position:"absolute",width:"100%",height:"100%",overflow:"auto"}},[t("div",{staticStyle:{height:"50%",position:"relative"}},[t("keep-alive",[t("base-table",{attrs:{bizKey:"researchStudent",title:"学生信息列表",targetURL:this.targetURL,bizDialog:this.bizDialog,tableFields:this.tableFields,bizSearch:"ResearchStudentSearch",btnList:this.btnList,toolbarBtnList:this.toolbarBtnList,customTableTool:this.customTableTool,dictDefine:this.dictDefine},on:{onTableRowClick:this.onTableRowClick}})],1)],1),t("div",{staticStyle:{height:"50%",position:"relative"}},[t("keep-alive",[t("base-table",{ref:"scoreTable",attrs:{bizKey:"researchScore",title:"学生成绩列表",targetURL:this.detailTargetURL,bizDialog:this.detailBizDialog,tableFields:this.detailTableFields,btnList:this.detailBtnList,toolbarBtnList:this.detailToolbarBtnList,customToolBar:this.detailCustomToolBar,customTableTool:this.detailCustomTableTool,jsonStr:this.detailJsonStr}})],1)],1)])},staticRenderFns:[]},h=i("VU/8")(c,u,!1,function(e){i("xqay")},"data-v-2919b3da",null);t.default=h.exports},uOON:function(e,t,i){"use strict";t.a={studentId:null,code:"",name:"",majorId:null,majorName:"",majorCourseId:null,majorCourseName:"",score:null,targetURL:""}},xqay:function(e,t,i){var o=i("GRQz");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i("rjj0")("87f5505c",o,!0)}});
//# sourceMappingURL=26.4e4422c1f60cef2fb1e6.js.map