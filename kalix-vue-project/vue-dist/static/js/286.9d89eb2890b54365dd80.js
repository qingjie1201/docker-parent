webpackJsonp([286],{dGW7:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=a("woOf"),r=a.n(t),o=a("kdxk"),d=a("u8p6"),p=a("yVQT"),i=a("oHp7"),s=a("Ukv7"),m=a("1RNI"),n={data:function(){return{formModel:r()({},o.a),isEdit:!1,rules:{appId:[{type:"string",required:!0,message:"请选择应用名称",trigger:"change"}],menuId:[{type:"string",required:!0,message:"请选择菜单名称",trigger:"change"}],type:[{type:"number",required:!0,message:"请选择数据权限",trigger:"change"}]},targetURL:d.dataauthURL,labelWidth:"140px",appURL:d.appsURL,menuURL:"",menuAppName:""}},components:{KalixDialog:p.default,KalixSelect:i.default,KalixMenuSelect:s.default,KalixDictSelect:m.default},mounted:function(){var e=this;setTimeout(function(){e.isEdit=e.$refs.kalixBizDialog.$data.isEdit,e.formModel.appId&&(e.menuURL=d.appsURL+"/"+e.formModel.appId,e.menuAppName=e.formModel.appId+"-menus")},20)},methods:{selectChange:function(e){this.formModel.menuId="",e.id&&(this.menuURL=d.appsURL+"/"+e.id,this.menuAppName=e.id+"-menus")}}},u={render:function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("kalix-dialog",{ref:"kalixBizDialog",staticClass:"dataauth-add",attrs:{bizKey:"dataauth","form-model":e.formModel,targetURL:e.targetURL},on:{"update:formModel":function(l){e.formModel=l}}},[a("div",{staticClass:"el-form",attrs:{slot:"dialogFormSlot"},slot:"dialogFormSlot"},[e.isEdit?[a("el-form-item",{attrs:{label:"应用名称",prop:"appId","label-width":e.labelWidth}},[a("kalix-select",{attrs:{requestUrl:e.appURL,label:"text",appName:"applications",placeholder:"请选择应用",disabled:"disabled"},model:{value:e.formModel.appId,callback:function(l){e.$set(e.formModel,"appId",l)},expression:"formModel.appId"}})],1),a("el-form-item",{attrs:{label:"菜单名称",prop:"menuId","label-width":e.labelWidth}},[a("kalix-menu-select",{attrs:{requestUrl:e.menuURL,label:"text",appName:e.menuAppName,placeholder:"请选择菜单",disabled:"disabled"},model:{value:e.formModel.menuId,callback:function(l){e.$set(e.formModel,"menuId",l)},expression:"formModel.menuId"}})],1)]:[a("el-form-item",{attrs:{label:"应用名称",prop:"appId",rules:e.rules.appId,"label-width":e.labelWidth}},[a("kalix-select",{attrs:{requestUrl:e.appURL,label:"text",appName:"applications",placeholder:"请选择应用"},on:{selectChange:e.selectChange},model:{value:e.formModel.appId,callback:function(l){e.$set(e.formModel,"appId",l)},expression:"formModel.appId"}})],1),a("el-form-item",{attrs:{label:"菜单名称",prop:"menuId",rules:e.rules.menuId,"label-width":e.labelWidth}},[a("kalix-menu-select",{attrs:{requestUrl:e.menuURL,label:"text",appName:e.menuAppName,placeholder:"请选择菜单"},model:{value:e.formModel.menuId,callback:function(l){e.$set(e.formModel,"menuId",l)},expression:"formModel.menuId"}})],1)],a("el-form-item",{attrs:{label:"数据权限",prop:"type",rules:e.rules.type,"label-width":e.labelWidth}},[a("kalix-dict-select",{attrs:{appName:"admin",dictType:"数据权限"},model:{value:e.formModel.type,callback:function(l){e.$set(e.formModel,"type",l)},expression:"formModel.type"}})],1),a("el-form-item",{attrs:{label:"备注",prop:"remark","label-width":e.labelWidth}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.formModel.remark,callback:function(l){e.$set(e.formModel,"remark",l)},expression:"formModel.remark"}})],1)],2)])},staticRenderFns:[]},c=a("VU/8")(n,u,!1,null,null,null);l.default=c.exports}});
//# sourceMappingURL=286.9d89eb2890b54365dd80.js.map