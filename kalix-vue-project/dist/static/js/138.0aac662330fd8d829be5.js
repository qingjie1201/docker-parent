webpackJsonp([138],{caoJ:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=o("woOf"),a=o.n(l),i=o("gWm0"),n=o("yVQT"),r=o("1RNI"),s=o("btes"),d=o("u8p6"),p=o("eIdC");Object(p.a)(d.TemplateEditComponent);var c={data:function(){return{formModel:a()({},i.a),templateId:"-1",labelWidth:"140px",rules:{templateType:[{required:!0,message:"请选择模板类型",trigger:"change"}]},targetURL:d.templateContentURL,tinymcePlugins:"advlist,autolink,code,paste,textcolor, colorpicker,fullscreen,link,lists,media,wordcount,imagetools,fullpage"}},components:{KalixDialog:n.default,KalixDictSelect:r.default,Tinymce:s.a},computed:{popTableData:function(){return{buttonName:"模板属性",placement:"right",width:"300px",trigger:"click",targetUrl:d.templateConfigURL,tableFields:[{prop:"fieldName",label:"属性名",width:"100px"},{prop:"fieldDesc",label:"属性描述",width:"100px"}],bizKey:"templateAttr",jsonStr:"{'templateId': '"+this.templateId+"', '%fieldName%': ''}"}}},methods:{init:function(e){this.templateId=e.templateId},change:function(e){this.$refs.kalixBizDialog.$refs.dialogForm.clearValidate()},kalixDialogOpen:function(){var e=this;this.$nextTick(function(){e.$refs.editor.initTinymce()})},kalixDialogClose:function(){this.$refs.editor.destroyTinymce()},getPopoverTableRow:function(e){var t="${"+e.fieldName+"}";this.$refs.editor.setInsertContent(t)},onContentClick:function(){this.$refs.editor.getKalixPop(function(e){var t=e;setTimeout(function(){t.$refs.kalixPopTable.closePopover()},20)})}}},m={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("kalix-dialog",{ref:"kalixBizDialog",staticClass:"user-add",attrs:{title:"修改",bizKey:"templateContent",formModel:e.formModel,targetURL:e.targetURL},on:{"update:formModel":function(t){e.formModel=t}}},[o("div",{staticClass:"el-form",attrs:{slot:"dialogFormSlot"},slot:"dialogFormSlot"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.formModel.templateId,expression:"formModel.templateId"}],attrs:{type:"hidden"},domProps:{value:e.formModel.templateId},on:{input:function(t){t.target.composing||e.$set(e.formModel,"templateId",t.target.value)}}}),o("el-form-item",{attrs:{label:"模板类型",prop:"templateType",rules:e.rules.templateType,"label-width":e.labelWidth}},[o("kalix-dict-select",{staticStyle:{width:"100%"},attrs:{appName:"admin",dictType:"模板类型",disabled:"disabled"},on:{input:function(t){e.change(t)}},model:{value:e.formModel.templateType,callback:function(t){e.$set(e.formModel,"templateType",t)},expression:"formModel.templateType"}})],1),o("el-form-item",{attrs:{label:"模板内容",prop:"content","label-width":e.labelWidth}},[o("tinymce",{ref:"editor",attrs:{showCustomButton:!0,bizPop:"AdminTemplatePopTable",popData:e.popTableData,tinymcePlugins:e.tinymcePlugins},on:{popoverData:e.getPopoverTableRow,contentClick:e.onContentClick},model:{value:e.formModel.content,callback:function(t){e.$set(e.formModel,"content",t)},expression:"formModel.content"}})],1)],1)])},staticRenderFns:[]},f=o("VU/8")(c,m,!1,function(e){o("cb57")},"data-v-47c9f58c",null);t.default=f.exports},cb57:function(e,t,o){var l=o("m+qN");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);o("rjj0")("093ed8ce",l,!0)},"m+qN":function(e,t,o){(e.exports=o("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"templateContentEdit.vue",sourceRoot:""}])}});
//# sourceMappingURL=138.0aac662330fd8d829be5.js.map