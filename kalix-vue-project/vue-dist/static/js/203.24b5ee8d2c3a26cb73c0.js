webpackJsonp([203],{MYDV:function(e,t,o){var a=o("OKNH");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);o("rjj0")("02136022",a,!0)},OKNH:function(e,t,o){(e.exports=o("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"receiver.vue",sourceRoot:""}])},VMhB:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("oLqv"),i=o("RoA3"),n=o("u4eY"),l={methods:{onDeleteChecked:function(){var e=this;if(this.deleteList&&this.deleteList.length>0){var t=[];this.deleteList.forEach(function(e){t.push(e.id)}),this.$confirm("确定要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return e.axios.request({method:"DELETE",url:e.batchDeleteUrl,params:{ids:t.join(":")}})}).then(function(t){n.a.success(t.data.msg),e.$refs.kalixTable.getData()}).catch(function(){})}},onTableSelectionChange:function(e){this.deleteList=e},customToolBar:function(e){switch(e){case"deleteChecked":this.onDeleteChecked()}}}},r=o("eIdC");Object(r.a)(i.ReceiverComponent);var s={mixins:[l],data:function(){return{bizKey:"receiver",batchDeleteUrl:i.ReceiverURL+"/remove",hasTableSelection:!0,toolbarBtnList:[{id:"add",title:"写消息",isShow:!0,icon:"icon-add"},{id:"deleteChecked",isShow:!0}],dictDefine:[{cacheKey:"COMMON-DICT-KEY",type:"消息类别",targetField:"categoryName",sourceField:"category"}],btnList:i.SenderToolButtonList,targetURL:i.ReceiverURL,dialogOptions:{row:{}},bizDialog:[{id:"view",dialog:"CommonReceiverView"},{id:"add",dialog:"CommonReceiverAdd"}],formModel:{title:"",content:"",receiverIds:"",receiverNames:"",category:2,senderId:"",senderName:""},formRules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}]}}},created:function(){},methods:{customRender:function(e){e.forEach(function(e){e.isRead=e.read?"已读":"未读"})},handleAfterView:function(e){!1===e.read&&(e.read=!0,this.axios.request({method:"PUT",url:this.targetURL+"/"+e.id,data:e,params:{}}).then(function(e){}))},handleAfterDialogClose:function(e,t){t&&this.$refs.kalixTable.getData()}},components:{BaseTable:a.default}},c={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("keep-alive",[o("base-table",{ref:"kalixTable",attrs:{bizKey:e.bizKey,title:"收件列表",targetURL:e.targetURL,formModel:e.formModel,formRules:e.formRules,bizDialog:e.bizDialog,btnList:e.btnList,dictDefine:e.dictDefine,customRender:e.customRender,toolbarBtnList:e.toolbarBtnList,hasTableSelection:e.hasTableSelection,customToolBar:e.customToolBar,isBeforeView:!0,isAfterView:!0,dialogOptions:e.dialogOptions,deleteAllUrl:e.batchDeleteUrl,bizToolBar:"CommonReceiverTableToolBar",bizSearch:"CommonReceiverSearch"},on:{tableSelectionChange:e.onTableSelectionChange,handleAfterView:e.handleAfterView,afterDialogClose:e.handleAfterDialogClose}},[o("template",{slot:"tableColumnSlot"},[o("el-table-column",{attrs:{prop:"senderName",label:"发件人",align:"center"}}),o("el-table-column",{attrs:{prop:"categoryName",label:"消息类别",align:"center"}}),o("el-table-column",{attrs:{prop:"title",label:"消息主题",align:"center"}}),o("el-table-column",{attrs:{prop:"creationDate",label:"发布时间"}}),o("el-table-column",{attrs:{label:"是否已读",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.read?"已读":"未读"))])]}}])})],1)],2)],1)},staticRenderFns:[]},d=o("VU/8")(s,c,!1,function(e){o("MYDV")},"data-v-024438bb",null);t.default=d.exports}});
//# sourceMappingURL=203.24b5ee8d2c3a26cb73c0.js.map