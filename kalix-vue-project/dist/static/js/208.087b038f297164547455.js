webpackJsonp([208,247],{KKuP:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=t("woOf"),o=t.n(a),r=t("ZShM"),s=t("yVQT"),i=t("hLSX"),n={data:function(){return{formModel:o()({},r.a)}},components:{KalixDialog:s.default,KalixReimbursementApplyViewForm:i.default}},d={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("kalix-dialog",{ref:"kalixBizDialog",staticClass:"user-add",attrs:{bizKey:"reimbursementApply",formModel:e.formModel,isView:"isView"},on:{"update:formModel":function(l){e.formModel=l}}},[t("div",{staticClass:"el-form kalix-form-table",attrs:{slot:"dialogFormSlot"},slot:"dialogFormSlot"},[t("kalix-reimbursement-apply-view-form",{attrs:{formModel:e.formModel}})],1)])},staticRenderFns:[]},m=t("VU/8")(n,d,!1,null,null,null);l.default=m.exports},ZShM:function(e,l,t){"use strict";l.a={id:0,title:"吉林动画学院差旅费用报销单",orgId:null,orgName:"",processInstanceId:"",currentNode:"",status:0,auditResult:"流程尚未启动",businessNo:"",applyDate:"",creationDate:"",createBy:"",evectionApplyId:null,reimbursementDate:"",reimbursementNo:"",bussinessPeopleId:null,bussinessPeopleName:"",reason:"",projectName:"",managerUser:"",chairmanUser:"",depUser:"",financeUser:"",accountantUser:"",cashierUser:"",payeeUser:"",borrowMoney:null,backMoney:null,cjjt:null,qt1:null,qt2:null}},hLSX:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=t("iMbh"),o=t("+kNV"),r={props:["formModel"],data:function(){return{label_width:110}},components:{KalixDatePicker:a.default,ReimbursementApplyDetail:o.default},computed:{labelWidth:function(){return this.label_width+"px"},labelWidth1:function(){return this.label_width+1+"px"}}},s={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"el-form kalix-form-table"},[t("div",{staticClass:"table-title"},[e._v("吉林动画学院差旅费用报销单"),t("el-form-item",{attrs:{label:"名称","label-width":e.labelWidth,prop:"title"}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.title,callback:function(l){e.$set(e.formModel,"title",l)},expression:"formModel.title"}})],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"申请部门",prop:"orgName","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.orgName,callback:function(l){e.$set(e.formModel,"orgName",l)},expression:"formModel.orgName"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"报销日期",prop:"reimbursementDate","label-width":e.labelWidth}},[t("kalix-date-picker",{staticStyle:{"margin-left":"0px",width:"100%"},attrs:{placeholder:"报销日期",readonly:"readonly"},model:{value:e.formModel.reimbursementDate,callback:function(l){e.$set(e.formModel,"reimbursementDate",l)},expression:"formModel.reimbursementDate"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"编号",prop:"reimbursementNo","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.reimbursementNo,callback:function(l){e.$set(e.formModel,"reimbursementNo",l)},expression:"formModel.reimbursementNo"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"出差人",prop:"bussinessPeopleName","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.bussinessPeopleName,callback:function(l){e.$set(e.formModel,"bussinessPeopleName",l)},expression:"formModel.bussinessPeopleName"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"出差事由",prop:"reason","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.reason,callback:function(l){e.$set(e.formModel,"reason",l)},expression:"formModel.reason"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"项目名称",prop:"projectName","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.projectName,callback:function(l){e.$set(e.formModel,"projectName",l)},expression:"formModel.projectName"}})],1)],1),t("div",{staticStyle:{height:"500px",position:"relative"}},[t("reimbursement-apply-detail",{attrs:{reimbursementApplyId:e.formModel.id,readonly:"readonly"}})],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",staticStyle:{flex:"2","margin-right":"-1px"},attrs:{label:"报销总额","label-width":"50px"}},[t("el-input",{attrs:{readonly:"readonly"}})],1),t("div",{staticClass:"s-flex_item"},[t("div",{staticClass:"s-flex",staticStyle:{"border-bottom":"1px solid #000"}},[t("el-form-item",{staticClass:"kalix-form-table-td",attrs:{label:"预留金额￥",prop:"borrowMoney","label-width":e.labelWidth1}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.borrowMoney,callback:function(l){e.$set(e.formModel,"borrowMoney",l)},expression:"formModel.borrowMoney"}})],1)],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"kalix-form-table-td",attrs:{label:"退/补金额￥",prop:"backMoney","label-width":e.labelWidth1}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.backMoney,callback:function(l){e.$set(e.formModel,"backMoney",l)},expression:"formModel.backMoney"}})],1)],1)])],1),t("div",{staticClass:"s-flex"},[t("el-form-item",{staticClass:"s-flex_item label-center",attrs:{label:"附单据张数合计（对应上方的项目）","label-width":"304px"}}),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"城际交通","label-width":e.labelWidth}},[t("el-input",{attrs:{readonly:"readonly"},model:{value:e.formModel.cjjt,callback:function(l){e.$set(e.formModel,"cjjt",l)},expression:"formModel.cjjt"}})],1),t("el-form-item",{staticClass:"s-flex_item kalix-form-table-td",attrs:{label:"其他",labelWidth:e.labelWidth}},[t("div",{staticClass:"s-flex"},[t("el-input",{staticClass:"s-flex_item kalix-form-table-td",attrs:{readonly:"readonly"},model:{value:e.formModel.qt1,callback:function(l){e.$set(e.formModel,"qt1",l)},expression:"formModel.qt1"}}),t("el-input",{staticClass:"s-flex_item kalix-form-table-td",attrs:{readonly:"readonly"},model:{value:e.formModel.qt2,callback:function(l){e.$set(e.formModel,"qt2",l)},expression:"formModel.qt2"}})],1)])],1)],1)])},staticRenderFns:[]},i=t("VU/8")(r,s,!1,null,null,null);l.default=i.exports}});
//# sourceMappingURL=208.087b038f297164547455.js.map