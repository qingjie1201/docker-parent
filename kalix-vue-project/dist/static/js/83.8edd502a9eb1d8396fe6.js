webpackJsonp([83],{"1cFE":function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"\n.el-form[data-v-8674dc38] {\n  padding: 30px 70px 30px 20px;\n}\n.popover[data-v-8674dc38] {\n  height: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 16px;\n  font-size: 20px;\n}","",{version:3,sources:["D:/vue-develop/project/kalix-vue-project/src/views/admin/config/configureView.vue"],names:[],mappings:";AACA;EACE,6BAA6B;CAC9B;AACD;EACE,aAAa;EACb,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,mBAAmB;EACnB,gBAAgB;CACjB",file:"configureView.vue",sourcesContent:["\n.el-form[data-v-8674dc38] {\n  padding: 30px 70px 30px 20px;\n}\n.popover[data-v-8674dc38] {\n  height: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 16px;\n  font-size: 20px;\n}"],sourceRoot:""}])},sAIi:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("cwe7"),a("+BTi");var s=a("2X9z"),o=a.n(s),l=a("woOf"),i=a.n(l),n={DB_NAME:{name:"",value:"mail value",id:"",type:"",desc:"",classType:""},Exist:{name:"",value:"address value",id:"",type:"",desc:"",classType:""},PROTOCOL:{name:"",value:"address value",id:"",type:"",desc:"",classType:""},IP:{name:"",value:"address value",id:"",type:"",desc:"",classType:""},PORT:{name:"",value:"address value",id:"",type:"",desc:"",classType:""},USER:{name:"",value:"address value",id:"",type:"",desc:"",classType:""},PASSWORD:{name:"",value:"address value",id:"",type:"",desc:"",classType:""},COUCHDB_URL:{name:"",value:"address value",id:"",type:"",desc:"",classType:""}},d=a("7+uW"),r=a("u8p6"),c=a("yVQT"),p=a("LA20"),u={data:function(){return{targetRestURL:r.configAdminURL,formModel:i()({},n),items:{},classname:"el-icon-question",placement:"top-start",trigger:"hover",popover:"popover",keyValue:"all"}},components:{KalixDialog:c.default,baseHelp:p.default},created:function(){console.log("this.formModel : ",this.formModel.classType)},mounted:function(){},methods:{divLoad:function(e,t){this.formModel[t]=e,console.log("divLoad",e,t)},submitCustom:function(e){var t=this;e.$refs.dialogForm.validate(function(a){if(console.log("valid",e.formModel),!a)return e.submitComplete(),!1;d.default.axios.request({method:e.isEdit?"PUT":"POST",url:e.isEdit?e.targetURL+"/"+t.formModel.id:e.targetURL,params:{content:e.formModel,AppName:"ConfigDb"}}).then(function(t){t.data.success?(e.visible=!1,e.$refs.dialogForm.resetFields(),e.submitComplete(),o.a.success("保存成功"),e.close()):(o.a.error("保存失败"),e.submitComplete()),e._afterDialogClose(),console.log("[kalix] dialog submit button clicked !"),e.visible=!1})})},listen:function(e,t){var a=this;console.log("===================[formModel]:",this.formModel),this.axios.request({method:"GET",url:this.targetRestURL+"/"+this.formModel.classType,params:{AppName:"ConfigDb"},dataType:"json",data:{}}).then(function(e){e.data&&(a.items=e.data.data)}).catch(function(){})}},watch:{formModel:{deep:!0,handler:"listen"}}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kalix-dialog",{ref:"kalixBizDialog",staticClass:"user-add",attrs:{bizKey:"hardwarelog",submitCustom:e.submitCustom,"form-model":e.formModel,targetURL:e.targetRestURL},on:{"update:formModel":function(t){e.formModel=t}}},[a("div",{staticClass:"el-form",attrs:{slot:"dialogFormSlot"},slot:"dialogFormSlot"},e._l(e.items,function(t,s){return a("div",{staticClass:"test"},e._l(t,function(t,s){return a("div",[e._v(e._s(e.divLoad(t,s))),e.formModel[s]?a("div",{staticClass:"s-flex"},[a("el-form-item",{staticClass:"s-flex_item",attrs:{label:t.name,"label-width":"120px"}},[a("el-input",{attrs:{type:t.type,id:t.id,placeholder:t.desc},model:{value:e.formModel[s].value,callback:function(t){e.$set(e.formModel[s],"value",t)},expression:"formModel[key].value"}})],1),a("div",{staticClass:"popover"},[a("base-help",{attrs:{popover:e.popover,placement:e.placement,classname:e.classname,title:t.desc,trigger:e.trigger}})],1)],1):e._e()])}))}))])},staticRenderFns:[]},f=a("VU/8")(u,m,!1,function(e){a("yXNV")},"data-v-8674dc38",null);t.default=f.exports},yXNV:function(e,t,a){var s=a("1cFE");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("b0901340",s,!0)}});
//# sourceMappingURL=83.8edd502a9eb1d8396fe6.js.map