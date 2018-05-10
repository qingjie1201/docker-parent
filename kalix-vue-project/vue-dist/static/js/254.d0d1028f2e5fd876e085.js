webpackJsonp([254],{KCxH:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=l("woOf"),r=l.n(i),s=l("iwC4"),a=l("eQiG"),o=l("yVQT"),d=l("iMbh"),n=l("7+uW"),c={data:function(){return{candidate:{placeholder:"请选择应聘者",items:[],isRequest:!1},formModel:r()({},s.a),rules:{candidateId:[{type:"number",required:!0,message:"请选择应聘者",trigger:"change"}],dateFirst:[{required:!0,message:"请选择初试时间",trigger:"blur"}],interviewerFirst:[{required:!0,message:"请输入初试面试官",trigger:"blur"}],interviewContentFirst:[{required:!0,message:"请输入初试面试内容",trigger:"blur"}],dateSecond:[{required:!0,message:"请选择复试时间",trigger:"blur"}],interviewerSecond:[{required:!0,message:"请输入复试面试官",trigger:"blur"}],interviewContentSecond:[{required:!0,message:"请输入复试面试内容",trigger:"blur"}],xm:[{required:!0,message:"应聘者不允许为空",trigger:"blur"}]},targetURL:a.InterviewURL,labelWidth:"110px"}},components:{KalixDialog:o.default,KalixDatePicker:d.default},methods:{focus:function(){this.candidate.isRequest||(this.candidate.isRequest=!0,this.getCandidates(),"second"===this.formModel.whichInterview&&(this.formModel.whichInterview="review",this.formModel.dateFirst=null,this.formModel.interviewerFirst=null,this.formModel.interviewContentFirst=null,this.formModel.passFirst=null))},getCandidates:function(){var e=this,t="/camel/rest/candidatescheck/"+this.formModel.whichInterview,l={params:{"header.type":this.formModel.whichInterview,jsonStr:"",limit:50}};n.default.axios.get(t,l).then(function(t){e.candidate.items=t.data.data})}}},m={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("kalix-dialog",{ref:"kalixBizDialog",staticClass:"user-add",attrs:{bizKey:"interview",formModel:e.formModel,targetURL:e.targetURL},on:{"update:formModel":function(t){e.formModel=t}}},[l("div",{staticClass:"el-form",attrs:{slot:"dialogFormSlot"},slot:"dialogFormSlot"},["first"===e.formModel.whichInterview?[l("el-form-item",{staticClass:"s-flex_item",attrs:{label:"应聘者姓名",prop:"candidateId",rules:e.rules.candidateId,"label-width":e.labelWidth}},[l("el-select",{attrs:{placeholder:e.candidate.placeholder},on:{focus:e.focus},model:{value:e.formModel.candidateId,callback:function(t){e.$set(e.formModel,"candidateId",t)},expression:"formModel.candidateId"}},e._l(e.candidate.items,function(e){return l("el-option",{key:e.candidateId,attrs:{label:e.xm,value:e.candidateId}})}))],1),l("el-form-item",{staticClass:"s-flex_item",attrs:{label:"初试时间",prop:"dateFirst",rules:e.rules.dateFirst,"label-width":e.labelWidth}},[l("kalix-date-picker",{staticStyle:{width:"100%"},model:{value:e.formModel.dateFirst,callback:function(t){e.$set(e.formModel,"dateFirst",t)},expression:"formModel.dateFirst"}})],1),l("el-form-item",{staticClass:"s-flex_item",attrs:{label:"初试面试官",prop:"interviewerFirst",rules:e.rules.interviewerFirst,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.interviewerFirst,callback:function(t){e.$set(e.formModel,"interviewerFirst",t)},expression:"formModel.interviewerFirst"}})],1),l("el-form-item",{staticClass:"s-flex_item",attrs:{label:"初试面试内容",prop:"interviewContentFirst",rules:e.rules.interviewContentFirst,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.interviewContentFirst,callback:function(t){e.$set(e.formModel,"interviewContentFirst",t)},expression:"formModel.interviewContentFirst"}})],1),l("el-form-item",{staticClass:"s-flex_item",attrs:{label:"初试面试结果",prop:"passFirst",rules:e.rules.passFirst,"label-width":e.labelWidth}},[l("el-switch",{staticClass:"s-flex_item",attrs:{"active-text":"通过","inactive-text":"不通过"},model:{value:e.formModel.passFirst,callback:function(t){e.$set(e.formModel,"passFirst",t)},expression:"formModel.passFirst"}})],1)]:"second"===e.formModel.whichInterview||"review"===e.formModel.whichInterview?[l("el-form-item",{staticClass:"s-flex_item",attrs:{label:"应聘者姓名",prop:"candidateId",rules:e.rules.candidateId,"label-width":e.labelWidth}},[l("el-select",{attrs:{placeholder:e.candidate.placeholder},on:{focus:e.focus},model:{value:e.formModel.candidateId,callback:function(t){e.$set(e.formModel,"candidateId",t)},expression:"formModel.candidateId"}},e._l(e.candidate.items,function(e){return l("el-option",{key:e.candidateId,attrs:{label:e.xm,value:e.candidateId}})}))],1),l("el-form-item",{staticClass:"s-flex_item",attrs:{label:"复试时间",prop:"dateSecond",rules:e.rules.dateSecond,"label-width":e.labelWidth}},[l("kalix-date-picker",{staticStyle:{width:"100%"},model:{value:e.formModel.dateSecond,callback:function(t){e.$set(e.formModel,"dateSecond",t)},expression:"formModel.dateSecond"}})],1),l("el-form-item",{staticClass:"s-flex_item",attrs:{label:"复试面试官",prop:"interviewerSecond",rules:e.rules.interviewerSecond,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.interviewerSecond,callback:function(t){e.$set(e.formModel,"interviewerSecond",t)},expression:"formModel.interviewerSecond"}})],1),l("el-form-item",{staticClass:"s-flex_item",attrs:{label:"复试面试内容",prop:"interviewContentSecond",rules:e.rules.interviewContentSecond,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.interviewContentSecond,callback:function(t){e.$set(e.formModel,"interviewContentSecond",t)},expression:"formModel.interviewContentSecond"}})],1),l("el-form-item",{staticClass:"s-flex_item",attrs:{label:"复试面试结果",prop:"passSecond",rules:e.rules.passSecond,"label-width":e.labelWidth}},[l("el-switch",{staticClass:"s-flex_item",attrs:{"active-text":"通过","inactive-text":"不通过"},model:{value:e.formModel.passSecond,callback:function(t){e.$set(e.formModel,"passSecond",t)},expression:"formModel.passSecond"}})],1)]:[l("el-form-item",{staticClass:"s-flex_item",attrs:{label:"应聘者姓名",prop:"xm",rules:e.rules.xm,"label-width":e.labelWidth}},[l("el-input",{attrs:{disabled:"disabled"},model:{value:e.formModel.xm,callback:function(t){e.$set(e.formModel,"xm",t)},expression:"formModel.xm"}})],1),l("div",{staticClass:"s-flex"},[l("el-form-item",{staticClass:"s-flex_item",attrs:{label:"初试时间",prop:"dateFirst",rules:e.rules.dateFirst,"label-width":e.labelWidth}},[l("kalix-date-picker",{staticStyle:{width:"100%"},model:{value:e.formModel.dateFirst,callback:function(t){e.$set(e.formModel,"dateFirst",t)},expression:"formModel.dateFirst"}})],1),l("el-form-item",{staticClass:"s-flex_item",attrs:{label:"复试时间",prop:"dateSecond",rules:e.rules.dateSecond,"label-width":e.labelWidth}},[l("kalix-date-picker",{staticStyle:{width:"100%"},model:{value:e.formModel.dateSecond,callback:function(t){e.$set(e.formModel,"dateSecond",t)},expression:"formModel.dateSecond"}})],1)],1),l("div",{staticClass:"s-flex"},[l("el-form-item",{staticClass:"s-flex_item",attrs:{label:"初试面试官",prop:"interviewerFirst",rules:e.rules.interviewerFirst,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.interviewerFirst,callback:function(t){e.$set(e.formModel,"interviewerFirst",t)},expression:"formModel.interviewerFirst"}})],1),l("el-form-item",{staticClass:"s-flex_item",attrs:{label:"复试面试官",prop:"interviewerSecond",rules:e.rules.interviewerSecond,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.interviewerSecond,callback:function(t){e.$set(e.formModel,"interviewerSecond",t)},expression:"formModel.interviewerSecond"}})],1)],1),l("div",{staticClass:"s-flex"},[l("el-form-item",{staticClass:"s-flex_item",attrs:{label:"初试面试内容",prop:"interviewContentFirst",rules:e.rules.interviewContentFirst,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.interviewContentFirst,callback:function(t){e.$set(e.formModel,"interviewContentFirst",t)},expression:"formModel.interviewContentFirst"}})],1),l("el-form-item",{staticClass:"s-flex_item",attrs:{label:"复试面试内容",prop:"interviewContentSecond",rules:e.rules.interviewContentSecond,"label-width":e.labelWidth}},[l("el-input",{model:{value:e.formModel.interviewContentSecond,callback:function(t){e.$set(e.formModel,"interviewContentSecond",t)},expression:"formModel.interviewContentSecond"}})],1)],1),l("div",{staticClass:"s-flex"},[l("el-form-item",{staticClass:"s-flex_item",attrs:{label:"初试面试结果",prop:"passFirst",rules:e.rules.passFirst,"label-width":e.labelWidth}},[l("el-switch",{staticClass:"s-flex_item",attrs:{"active-text":"通过","inactive-text":"不通过"},model:{value:e.formModel.passFirst,callback:function(t){e.$set(e.formModel,"passFirst",t)},expression:"formModel.passFirst"}})],1),l("el-form-item",{staticClass:"s-flex_item",attrs:{label:"复试面试结果",prop:"passSecond",rules:e.rules.passSecond,"label-width":e.labelWidth}},[l("el-switch",{staticClass:"s-flex_item",attrs:{"active-text":"通过","inactive-text":"不通过"},model:{value:e.formModel.passSecond,callback:function(t){e.$set(e.formModel,"passSecond",t)},expression:"formModel.passSecond"}})],1)],1)]],2)])},staticRenderFns:[]},f=l("VU/8")(c,m,!1,null,null,null);t.default=f.exports}});
//# sourceMappingURL=254.d0d1028f2e5fd876e085.js.map