webpackJsonp([24],{daDA:function(e,t){},xknq:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("4YfN"),n=a.n(o),i=a("aA9S"),l=a.n(i),s=a("A9zj"),r=a.n(s),c=a("OOvn"),d=a("Ap6m"),p=a("+ThO"),g=(a("/ADh"),{components:{searchForm:d.a,pagination:p.a},data:function(){return{formOptions:[{label:"公告标题",prop:"noticeTitle",element:"el-input"},{label:"提交时间",prop:"publishTime",element:"el-date-picker",type:"daterange"}],seeShow:!1,addShow:!1,button_loading:!1,tableData:[],modelForm:{noticeTitle:"",noticeContent:"",noticeType:"1",recipient:"1"},detailDate:{noticeTitle:"",noticeContent:"",noticeType:"1",recipient:"1"},rules:{noticeTitle:[{required:!0,message:"请输入公告标题",trigger:"change"}],noticeContent:[{required:!0,message:"请输入公告内容",trigger:"change"}],noticeType:[{required:!0,message:"请选择公告类型",trigger:"change"}]},pages:{page:0,size:10,total:0},searchForm:{},tableLoading:!1}},created:function(){this.getNoticeList()},methods:{onSearch:function(e){var t=e.publishTime,a=r()(e,["publishTime"]);t&&(a.beginTime=t[0],a.endTime=t[1]),this.pages.page=0,this.searchForm=l()({},a),this.pages.page=0,this.getNoticeList()},addNoticeModel:function(){var e=this;this.modelForm={noticeTitle:"",noticeContent:"",noticeType:"1",recipient:"1"},this.$nextTick(function(){e.$refs.form.resetFields()}),this.addShow=!0},getNoticeList:function(){var e=this;this.tableLoading=!0;var t=l()({},{page:this.pages.page,size:this.pages.size},this.searchForm);Object(c.B)(n()({},t)).then(function(t){var a=t.data;e.tableLoading=!1,0===a.subCode&&(e.tableData=a.data,e.pages=a.pageInfo)})},addnotice:function(){var e=this;this.$refs.form.validate(function(t){t&&(e.button_loading=!0,Object(c.c)(e.modelForm).then(function(t){var a=t.data;0===a.subCode?(e.$message.success("发布成功"),e.addShow=!1,e.button_loading=!1,e.getNoticeList(),e.modelForm={noticeTitle:"",noticeContent:"",noticeType:"1",recipient:"1"}):(e.$message.error(a.message),e.button_loading=!1)}))})},changeSize:function(e){this.pages=e,this.getNoticeList()},seeModelShow:function(e){this.detailDate=e,this.seeShow=!0},delModel:function(e){var t=this,a={noticeId:String(e.noticeId)};Object(c.i)(a).then(function(e){0===e.data.subCode&&(0!=t.pages.page&&1==t.tableData.length&&t.pages.page--,t.$message.success("删除成功"),t.getNoticeList())})}}}),m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"commonClass announcement"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("公告管理")]),e._v(" "),a("el-button",{staticStyle:{float:"right","margin-top":"-6px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.addNoticeModel()}}},[e._v("发布公告")])],1),e._v(" "),a("div",{staticClass:"text item"},[a("searchForm",{attrs:{formOptions:e.formOptions},on:{onSearch:e.onSearch}}),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],attrs:{size:"medium",border:"",data:e.tableData}},[a("el-table-column",{attrs:{align:"center",prop:"noticeTitle",label:"公告标题"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:t.row.noticeTitle,placement:"top"}},[a("span",[e._v(e._s(t.row.noticeTitle.length>15?t.row.noticeTitle.substring(0,14)+"...":t.row.noticeTitle))])])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"noticeContent",label:"公告内容"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:t.row.noticeContent,placement:"top"}},[a("span",[e._v(e._s(t.row.noticeContent.length>15?t.row.noticeContent.substring(0,14)+"...":t.row.noticeContent))])])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"noticeType",label:"公告类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s("1"==t.row.noticeType?"行业新闻":"2"==t.row.noticeType?"系统升级":"公告通知")+"\n          ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"sender",label:"发送人"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"recipient",label:"接收对象"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s("1"==t.row.recipient?"全体EC用户":"-")+"\n          ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"publishTime",label:"发布时间"}}),e._v(" "),a("el-table-column",{attrs:{width:"200",align:"center",prop:"status",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{staticStyle:{"margin-right":"20px"},on:{click:function(a){return e.seeModelShow(t.row)}}},[e._v("查看")]),e._v(" "),a("el-popconfirm",{attrs:{title:"是否确定删除此公告？"},on:{onConfirm:function(a){return e.delModel(t.row)}}},[a("el-tag",{attrs:{slot:"reference",type:"danger"},slot:"reference"},[e._v("删除")])],1)]}}])})],1),e._v(" "),a("pagination",{attrs:{page:e.pages.page,size:e.pages.size,total:e.pages.total},on:{getPaginationData:e.changeSize}})],1),e._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"发布公告",visible:e.addShow,top:"5vh",width:"630px"},on:{"update:visible":function(t){e.addShow=t}}},[a("el-form",{ref:"form",attrs:{size:"medium",model:e.modelForm,rules:e.rules,"label-width":"110px"}},[a("el-form-item",{attrs:{prop:"noticeTitle",label:"公告标题："}},[a("el-input",{attrs:{clearable:"",maxlength:"60",placeholder:"60个字符以内"},model:{value:e.modelForm.noticeTitle,callback:function(t){e.$set(e.modelForm,"noticeTitle","string"==typeof t?t.trim():t)},expression:"modelForm.noticeTitle"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"noticeContent",label:"公告内容："}},[a("el-input",{attrs:{clearable:"",maxlength:"500",type:"textarea",rows:5,placeholder:"500个字符以内"},model:{value:e.modelForm.noticeContent,callback:function(t){e.$set(e.modelForm,"noticeContent","string"==typeof t?t.trim():t)},expression:"modelForm.noticeContent"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"noticeType",label:"公告类型："}},[a("el-select",{staticClass:"width100",attrs:{clearable:""},model:{value:e.modelForm.noticeType,callback:function(t){e.$set(e.modelForm,"noticeType",t)},expression:"modelForm.noticeType"}},[a("el-option",{attrs:{label:"行业新闻",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"系统升级",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"公告通知",value:"3"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{prop:"remindType",label:"发送对象："}},[a("span",[e._v("全体EC用户")])])],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addShow=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{loading:e.button_loading,type:"primary"},on:{click:e.addnotice}},[e._v("发 布")])],1)],1),e._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"查看公告",visible:e.seeShow,top:"5vh",width:"630px"},on:{"update:visible":function(t){e.seeShow=t}}},[a("el-row",[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"grid-content"},[e._v("公告标题：")])]),e._v(" "),a("el-col",{attrs:{span:21}},[a("div",{staticClass:"grid-content"},[e._v(e._s(e.detailDate.noticeTitle))])])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"grid-content"},[e._v("公告内容：")])]),e._v(" "),a("el-col",{attrs:{span:21}},[a("div",{staticClass:"grid-content"},[e._v(e._s(e.detailDate.noticeContent))])])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"grid-content"},[e._v("公告类型：")])]),e._v(" "),a("el-col",{attrs:{span:21}},[a("div",{staticClass:"grid-content"},[e._v(e._s("1"==e.detailDate.noticeType?"行业新闻":"2"==e.detailDate.noticeType?"系统升级":"公告通知"))])])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"grid-content"},[e._v("发送对象")])]),e._v(" "),a("el-col",{attrs:{span:21}},[a("div",{staticClass:"grid-content"},[e._v(e._s(1==e.detailDate.recipient?"全体EC用户":"无"))])])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"grid-content"},[e._v("发送人：")])]),e._v(" "),a("el-col",{attrs:{span:21}},[a("div",{staticClass:"grid-content"},[e._v(e._s(e.detailDate.sender))])])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"grid-content"},[e._v("发布时间：")])]),e._v(" "),a("el-col",{attrs:{span:21}},[a("div",{staticClass:"grid-content"},[e._v(e._s(e.detailDate.publishTime))])])],1)],1)],1)],1)},staticRenderFns:[]};var u=a("C7Lr")(g,m,!1,function(e){a("daDA")},"data-v-0846ba47",null);t.default=u.exports}});