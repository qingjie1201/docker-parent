webpackJsonp([99],{"/2Ch":function(e,i,t){var a=t("bImF");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("rjj0")("0f408728",a,!0)},bImF:function(e,i,t){(e.exports=t("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"user.vue",sourceRoot:""}])},efLr:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=t("oLqv"),l=t("u8p6"),o=function(e){return 1===e.row.available},r=[{id:"view",title:"查看",isShow:!0,isPermission:!0},{id:"edit",title:"编辑",isShow:!0,isPermission:!0,cond:o},{id:"startStopUsing",title:"",isShow:!0,isPermission:!0,titleCompute:function(e){return 1===e.row.available?"停用":"启用"}},{id:"key",title:"密码",toolTipTitle:"重置密码",isShow:!0,isPermission:!0,cond:o},{id:"auth",title:"权限",toolTipTitle:"权限查看",isShow:!0,isPermission:!0}],n=t("eIdC"),s=t("u4eY"),c=t("Mf/2"),u=t("on5L");Object(n.a)(l.UserComponent);var p={props:{bizKey:{type:String,default:"user"},targetURL:{type:String,default:l.usersURL},bizSearch:{type:String,default:"AdminUserSearch"},isFixedColumn:{type:Boolean,default:!0}},data:function(){return{dictDefine:[{cacheKey:"ADMIN-DICT-KEY",type:"用户类型",targetField:"userTypeName",sourceField:"userType"},{cacheKey:"ADMIN-DICT-KEY",type:"岗位名称",targetField:"positionName",sourceField:"position"}],btnList:r,buttonPermissionPrefix:l.userBtnPermissionPrefix,tableFields:[{prop:"userTypeName",label:"用户类型"},{prop:"code",label:"用户代码"},{prop:"loginName",label:"登录名"},{prop:"name",label:"名称"},{prop:"sex",label:"性别"},{prop:"email",label:"邮箱"},{prop:"phone",label:"固定电话"},{prop:"mobile",label:"手机"}],bizDialog:[{id:"view",dialog:"AdminUserView"},{id:"edit",dialog:"AdminUserEdit"},{id:"add",dialog:"AdminUserAdd"},{id:"key",dialog:"AdminUserResetpwd"},{id:"auth",dialog:"AdminUserAuthView"}]}},components:{BaseTable:a.default},created:function(){},methods:{customTableTool:function(e,i,t){var a=this;switch(i){case"startStopUsing":var l="确定要"+(1===e.available?"停用":"启用")+"该用户吗？";t.$confirm(l,"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return a.axios.request({method:"PUT",url:a.targetURL+"/"+e.id,params:{},data:{id:e.id,available:1===e.available?0:1}})}).then(function(e){console.log(e),s.a.processResult(e),u.a.$emit(c.ON_REFRESH_DATA)});break;case"key":t.whichBizDialog="";var o=t.bizDialog.filter(function(e){return"key"===e.id});t.whichBizDialog=o[0].dialog,setTimeout(function(){t.$refs.kalixDialog.$refs.kalixBizDialog.open("",!0,e)},20);break;case"auth":t.whichBizDialog="";var r=t.bizDialog.filter(function(e){return"auth"===e.id});t.whichBizDialog=r[0].dialog,setTimeout(function(){t.$refs.kalixDialog.$refs.kalixBizDialog.open("",!1,e)},20)}}}},d={render:function(){var e=this.$createElement,i=this._self._c||e;return i("keep-alive",[i("base-table",{ref:"userTable",attrs:{title:"用户列表",bizKey:this.bizKey,targetURL:this.targetURL,bizDialog:this.bizDialog,bizSearch:this.bizSearch,btnList:this.btnList,customTableTool:this.customTableTool,isFixedColumn:this.isFixedColumn,buttonPermissionPrefix:this.buttonPermissionPrefix,dictDefine:this.dictDefine}},[i("template",{slot:"tableColumnSlot"},[i("el-table-column",{attrs:{prop:"icon",label:"头像",align:"center"},scopedSlots:this._u([{key:"default",fn:function(e){return[e.row.icon?i("img",{attrs:{src:e.row.icon,width:"32",height:"32",alt:""}}):i("img",{attrs:{src:t("wHGV"),width:"32",height:"32",alt:""}})]}}])}),i("el-table-column",{attrs:{prop:"userTypeName",label:"用户类型",align:"center",width:"100px"}}),i("el-table-column",{attrs:{prop:"code",label:"工号/学号/企业组织机构代码",align:"center",width:"200px"}}),i("el-table-column",{attrs:{prop:"loginName",label:"登录名",align:"center",width:"100px"}}),i("el-table-column",{attrs:{prop:"name",label:"姓名/企业名称",align:"center",width:"200px"}}),i("el-table-column",{attrs:{prop:"sex",label:"性别",align:"center",width:"100px"}}),i("el-table-column",{attrs:{prop:"email",label:"邮箱",align:"center",width:"150px"}}),i("el-table-column",{attrs:{prop:"phone",label:"固定电话",align:"center",width:"150px"}}),i("el-table-column",{attrs:{prop:"mobile",label:"手机",align:"center",width:"150px"}})],1)],2)],1)},staticRenderFns:[]},b=t("VU/8")(p,d,!1,function(e){t("/2Ch")},"data-v-7455a470",null);i.default=b.exports}});
//# sourceMappingURL=99.54ee2ab61aab992b263e.js.map