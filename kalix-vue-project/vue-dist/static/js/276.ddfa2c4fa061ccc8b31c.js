webpackJsonp([276],{moNK:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("woOf"),o=a.n(r),i=a("i5Gt"),l={data:function(){return{formModel:o()({},i.a),treeDataURL:"/camel/rest/users",treeData:[],emptyContent:"数据加载中！",defaultProps:{children:"children",label:"name"},checkedKeys:[]}},components:{KalixDialog:a("yVQT").default},mounted:function(){},watch:{formModel:{handler:"watchFormModel",deep:!0}},methods:{getData:function(){var e=this;if(this.treeData=[],this.checkedKeys=[],this.treeDataURL&&this.formModel.id){var t=this.treeDataURL+"/"+this.formModel.id+"/authorizations";this.axios.request({method:"GET",url:t,params:{}}).then(function(t){t.data.children&&(e.treeData=t.data.children,e.emptyContent="当前用户没有被授权！",e.getCheckedKeys(e.treeData))})}},getCheckedKeys:function(e){if(e&&e.length>0)for(var t=0;t<e.length;t++)e[t].children&&(e[t].disabled=!0,0===e[t].children.length?e[t].checked&&this.checkedKeys.push(e[t].id):this.getCheckedKeys(e[t].children))},watchFormModel:function(e){this.getData()}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kalix-dialog",{ref:"kalixBizDialog",staticClass:"user-add",attrs:{title:"权限查看",bizKey:"user",formModel:e.formModel,isView:"isView"},on:{"update:formModel":function(t){e.formModel=t}}},[a("div",{staticClass:"el-form",staticStyle:{"max-height":"550px","min-height":"550px",overflow:"auto",border:"1px solid #d0d0d0",margin:"-30px 0 -20px"},attrs:{slot:"dialogFormSlot"},slot:"dialogFormSlot"},[a("el-tree",{ref:"baseTree",staticClass:"filter-tree",attrs:{data:e.treeData,props:e.defaultProps,"node-key":"id","highlight-current":"highlight-current","show-checkbox":"show-checkbox","default-checked-keys":e.checkedKeys,"default-expand-all":"default-expand-all","empty-text":e.emptyContent}})],1)])},staticRenderFns:[]},s=a("VU/8")(l,d,!1,null,null,null);t.default=s.exports}});
//# sourceMappingURL=276.ddfa2c4fa061ccc8b31c.js.map