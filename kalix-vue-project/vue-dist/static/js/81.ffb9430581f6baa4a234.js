webpackJsonp([81],{W6SW:function(e,t,o){var n=o("l5La");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o("rjj0")("cc30f5b8",n,!0)},l5La:function(e,t,o){(e.exports=o("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"sender.vue",sourceRoot:""}])},tZR6:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("oLqv"),l=o("RoA3"),i=o("eIdC");Object(i.a)(l.SenderComponent);var s={data:function(){return{deleteAllUrl:l.SenderURL+"/remove",isShowToolBar:!0,hasTableSelection:!0,toolbarBtnList:[{id:"deleteChecked",isShow:!0},{id:"add",isShow:!1}],dictDefine:[{cacheKey:"COMMON-DICT-KEY",type:"消息类别",targetField:"categoryName",sourceField:"category"}],btnList:l.SenderToolButtonList,targetURL:l.SenderURL,tableFields:[{prop:"receiverNames",label:"收件人"},{prop:"categoryName",label:"消息类别"},{prop:"title",label:"消息主题"},{prop:"creationDate",label:"发布时间"}],bizDialog:[{id:"view",dialog:"CommonSenderView"}],formModel:{title:"",content:"",publishPeople:"",publishDate:""},formRules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}]}}},created:function(){var e=this;this.customToolbarClickEvents={customBtn1:function(){e.customEventBtn1()},customBtn2:function(){e.customEventBtn2()},customBtn3:function(){e.customEventBtn3()},customBtn4:function(){e.customEventBtn4()}}},methods:{customEventBtn1:function(){console.log('This is "自定义按钮 1" click event ~~~~')},customEventBtn2:function(){console.log('This is "自定义按钮 2" click event ~~~~')},customEventBtn3:function(){console.log('This is "自定义按钮 3" click event ~~~~')},customEventBtn4:function(){console.log('This is "自定义按钮 4" click event ~~~~')}},components:{BaseTable:n.default}},c={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("keep-alive",[o("base-table",{ref:"kalixTable",attrs:{bizKey:"sender",title:"发件列表",tableFields:e.tableFields,targetURL:e.targetURL,formModel:e.formModel,formRules:e.formRules,bizDialog:e.bizDialog,btnList:e.btnList,dictDefine:e.dictDefine,hasTableSelection:e.hasTableSelection,isShowToolBar:e.isShowToolBar,toolbarBtnList:e.toolbarBtnList,deleteAllUrl:e.deleteAllUrl,customToolbarClickEvents:e.customToolbarClickEvents,bizSearch:"CommonSenderSearch"},on:{"update:formModel":function(t){e.formModel=t}}})],1)},staticRenderFns:[]},r=o("VU/8")(s,c,!1,function(e){o("W6SW")},"data-v-8897baf8",null);t.default=r.exports}});
//# sourceMappingURL=81.ffb9430581f6baa4a234.js.map