(this["webpackJsonp@smartapp/feature-smartapp"]=this["webpackJsonp@smartapp/feature-smartapp"]||[]).push([[0],{124:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},158:function(e,t,n){},159:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(49),s=n.n(a),i=n(13),o=n(43),l=n(3),u=n(20),j=n(15),b=(n(124),n(1));function O(){return Object(b.jsx)("div",{className:"main-loader",children:Object(b.jsxs)("div",{className:"main-loader__spinner",children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})})}n(126);var d,f,p,m,h,v,E,x,_=n(26),S=Object(_.a)([function(e){return e.bot.features}],(function(e){return e})),y=Object(_.a)([function(e){return e.bot.response}],(function(e){return e})),N=n(11),g=n(33),T=n(12);!function(e){e.SMARTAPP_RPC="smartapp_rpc",e.NOTIFICATION="notification",e.OPEN_SMARTAPP_META="open_smart_app_meta"}(d||(d={})),function(e){e.ECHO="echo",e.UPDATE_APP_COUNTER="update_app_counter",e.SEND_NOTIFICATION="send_notification",e.ECHO_FILE="echo_file",e.ECHO_FILES="echo_files",e.SEARCH_USERS="search_users"}(f||(f={})),function(e){e.ADD_CONTACT="add_contact",e.CREATE_PERSONAL_CHAT="create_personal_chat",e.SEND_MESSAGE="send_message",e.GET_CONTACT="get_contact",e.OPEN_SMARTAPP="open_smart_app"}(p||(p={})),function(e){e.ADD_CONTACT="Add contact",e.CREATE_PERSONAL_CHAT="Create personal chat",e.SEND_MESSAGE="Send message to group chat or user",e.GET_CONTACT="Get contact",e.OPEN_SMARTAPP="Open SmartApp"}(m||(m={})),function(e){e.READY="ready",e.UPLOAD_FILE="upload_file",e.UPLOAD_FILES="upload_files"}(h||(h={})),function(e){e.TEXT="text",e.COUNT="count",e.DELAY="delay",e.FILE="file",e.FILES="files",e.HUIDS="huids",e.PHONE="phone",e.NAME="name",e.HUID="huid",e.SMARTAPP_ID="appId",e.MESSAGE="message",e.GROUP_CHAT_ID="groupChatId",e.USER_HUID="userHuid"}(v||(v={})),function(e){e.TEXT="Text",e.COUNT="Count",e.DELAY="Delay",e.FILE="File",e.FILES="Files",e.HUIDS="Huids",e.PHONE="Phone",e.NAME="Name",e.HUID="Huid",e.SMARTAPP_ID="Smartapp ID",e.MESSAGE="Message",e.GROUP_CHAT_ID="Group chat id",e.USER_HUID="User huid"}(E||(E={})),function(e){e.INPUT_TEXT="INPUT_TEXT",e.INPUT_NUMBER="INPUT_NUMBER",e.FILE_PICKER="FILE_PICKER",e.ARRAY_UUID="ARRAY_UUID",e.UUID="UUID"}(x||(x={}));n(127);var I,A="notification",C="Express Notification",P="Open Smart App Meta",w="open_smart_app_meta",R="openSmartAppMeta",U="Scan QR",D="scan_qr",F={method:"menu",params:{text:"menu"}},k={INPUT_TEXT:"text",INPUT_NUMBER:"number",FILE_PICKER:"file",ARRAY_UUID:"text",UUID:"text"},L=[{method:p.ADD_CONTACT,name:m.ADD_CONTACT,uiElements:[{id:v.PHONE,label:E.PHONE,type:x.INPUT_TEXT},{id:v.NAME,label:E.NAME,type:x.INPUT_TEXT}]},{method:p.CREATE_PERSONAL_CHAT,name:m.CREATE_PERSONAL_CHAT,uiElements:[{id:v.HUID,label:E.HUID,type:x.UUID}]},{method:p.GET_CONTACT,name:m.GET_CONTACT,uiElements:[{id:v.PHONE,label:E.PHONE,type:x.INPUT_TEXT}]},{method:p.OPEN_SMARTAPP,name:m.OPEN_SMARTAPP,uiElements:[{id:v.SMARTAPP_ID,label:E.SMARTAPP_ID,type:x.INPUT_TEXT}]},{method:p.SEND_MESSAGE,name:m.SEND_MESSAGE,uiElements:[{id:v.MESSAGE,label:E.MESSAGE,type:x.INPUT_TEXT},{id:v.GROUP_CHAT_ID,label:E.GROUP_CHAT_ID,type:x.UUID},{id:v.USER_HUID,label:E.USER_HUID,type:x.UUID}]}],H=n(87),M=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return e[t.id]=void 0,e}),{})},V=n(165),G="LOAD_FEATURES",B="LOAD_FEATURES_SUCCESS",X="RESET_RESPONSE",z="SEND_FEATURE_BOT_EVENT",K="SEND_FEATURE_BOT_EVENT_SUCCESS",Y=Object(V.a)(G,(function(){})),J=Object(V.a)(B,(function(e){return e})),q=Object(V.a)(X,(function(){})),W=Object(V.a)(z,(function(e){return e})),Q=Object(V.a)(K,(function(e){return e})),Z=["title","titleId"];function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$.apply(this,arguments)}function ee(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function te(e,t){var n=e.title,c=e.titleId,a=ee(e,Z);return r.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,I||(I=r.createElement("path",{fillRule:"evenodd",d:"M13 11V4h-2v7H4v2h7v7h2v-7h7v-2h-7z"})))}var ne,re=r.forwardRef(te),ce=(n.p,["title","titleId"]);function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ae.apply(this,arguments)}function se(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function ie(e,t){var n=e.title,c=e.titleId,a=se(e,ce);return r.createElement("svg",ae({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,ne||(ne=r.createElement("path",{fill:"currentColor",d:"M13 11V3h-2v8H3v2h8v8h2v-8h8v-2h-8z",transform:"rotate(45 12 12)"})))}var oe,le=r.forwardRef(ie),ue=(n.p,["title","titleId"]);function je(){return je=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},je.apply(this,arguments)}function be(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Oe(e,t){var n=e.title,c=e.titleId,a=be(e,ue);return r.createElement("svg",je({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 26",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,oe||(oe=r.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(-1)"},r.createElement("path",{fill:"#595959",d:"M5 0C3.73 0 2.44 1.225 2.5 2.407V22.63c-.06 1.784 1.23 3.007 2.5 2.89h15c1.71.117 3-1.106 3-2.89V6.26L16 0H5zm0 24.556c-.298-.117-1.298-.59-1.5-1.445V2.41C3.702 2.148 4.702 1.2 5 .963h10.5v3.852c.01 1.467.903 2.315 2 1.926H22v15.89c-.262.864-.76 1.81-2 1.928H5z"}),r.createElement("rect",{width:18.5,height:9.148,x:1,y:12.519,fill:"#5C5C5C",rx:2}),r.createElement("text",{fill:"#FFF",fontSize:5.5,fontWeight:600},r.createElement("tspan",{x:4.302,y:19},"\n        FILE\n      ")))))}var de,fe=r.forwardRef(Oe),pe=(n.p,n(79)),me=n.n(pe),he=["title","titleId"];function ve(){return ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ve.apply(this,arguments)}function Ee(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function xe(e,t){var n=e.title,c=e.titleId,a=Ee(e,he);return r.createElement("svg",ve({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,de||(de=r.createElement("path",{fill:"currentColor",d:"M10.667.667h-8c-.734 0-1.334.6-1.334 1.333v9.333h1.334V2h8V.667zm2 2.666H5.333C4.6 3.333 4 3.933 4 4.667V14c0 .733.6 1.333 1.333 1.333h7.334c.733 0 1.333-.6 1.333-1.333V4.667c0-.734-.6-1.334-1.333-1.334zm0 10.667H5.333V4.667h7.334V14z"})))}var _e=r.forwardRef(xe),Se=(n.p,n(80)),ye=n.n(Se);n(129),n(130);function Ne(e){var t=Object(r.useRef)(null);return Object(r.useEffect)((function(){var n=new ye.a(t.current,{mode:"view",enableTransform:!0});e.json&&n.set(e.json);var r=document.createElement("button");r.className="copy-to-clipboard",r.innerHTML=me.a.renderToStaticMarkup(Object(b.jsx)(_e,{height:"22",width:"22"})),r.addEventListener("click",(function(){return function(e){var t=document.createElement("textarea");t.innerHTML=JSON.stringify(e,null,"  "),document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(e.json)})),r.setAttribute("title","Copy To Clipboard");var c=document.querySelector(".jsoneditor-menu"),a=document.querySelector(".jsoneditor-menu .jsoneditor-search");return c.insertBefore(r,a),function(){return n.destroy()}}),[e.json]),Object(b.jsx)("div",{className:"json-viewer",ref:t})}var ge,Te=n(36),Ie=n.n(Te),Ae="UPLOAD_FILE",Ce="UPLOAD_FILE_SUCCESS",Pe="UPLOAD_FILES",we="UPLOAD_FILES_SUCCESS",Re="REMOVE_FILE_SUCCESS",Ue="RESET_ATTACHMENTS",De="SEND_EXPRESS_EVENT",Fe="SEND_MESSAGE_EXPRESS_EVENT",ke="SEND_EXPRESS_EVENT_SUCCESS",Le="SET_NOTIFICATION_SUCCESS",He="RESET_EXPRESS_NOTIFICATION_SUCCESS",Me="RESET_EXPRESS_RESPONSE",Ve="SEND_EXPRESS_READY_EVENT",Ge="SET_META",Be=Object(V.a)(Ae,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:e}})),Xe=Object(V.a)(Ce,(function(e){return e})),ze=Object(V.a)(Pe,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:e}})),Ke=Object(V.a)(we,(function(e){return e})),Ye=(Object(V.a)("REMOVE_FILE",(function(e){return e})),Object(V.a)(Re,(function(e){return e}))),Je=Object(V.a)(Ue,(function(){})),qe=Object(V.a)(De,(function(e){return e})),We=Object(V.a)(Fe,(function(e){return e})),Qe=Object(V.a)(ke,(function(e){return e})),Ze=Object(V.a)(Le,(function(e){return e})),$e=Object(V.a)(He,(function(){})),et=Object(V.a)(Ge,(function(e){return e})),tt=Object(V.a)(Me,(function(){})),nt=Object(V.a)(Ve,(function(){})),rt=Object(_.a)([function(e){return e.client.attachments}],(function(e){return e})),ct=Object(_.a)([function(e){return e.client.response}],(function(e){return e})),at=Object(_.a)([function(e){return e.client.meta}],(function(e){return e})),st=Object(_.a)([function(e){return e.client.notifications}],(function(e){return e})),it=n(86),ot=["title","titleId"];function lt(){return lt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lt.apply(this,arguments)}function ut(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function jt(e,t){var n=e.title,c=e.titleId,a=ut(e,ot);return r.createElement("svg",lt({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,ge||(ge=r.createElement("path",{d:"M7.828 11l5.586-5.586L12 4l-8 8 8 8 1.414-1.414L7.828 13H20v-2z"})))}var bt=r.forwardRef(jt);n.p,n(131);function Ot(e){var t=e.name;return Object(b.jsxs)("div",{className:"feature-page__header",children:[Object(b.jsx)(g.a,{className:"btn--arrow-left",to:"/",children:Object(b.jsx)(bt,{className:"icon--arrow-left",height:24,width:24})}),Object(b.jsx)("div",{className:"feature-page__info",children:Object(b.jsxs)("span",{className:"feature-page__title",children:[t," method"]})})]})}function dt(e){var t,n,c,a=e.name,s=e.method,o=e.uiElements,j=void 0===o?[]:o,O=Object(i.d)(),d=Object(i.e)(y),m=Object(i.e)(ct),h=Object(i.e)(rt),_=Object(r.useState)([]),S=Object(u.a)(_,2),N=S[0],g=S[1],I=Object(r.useState)(""),A=Object(u.a)(I,2),C=A[0],P=A[1],w=Object(r.useState)(!1),R=Object(u.a)(w,2),U=R[0],D=R[1],F=s===f.SEARCH_USERS,L=[f.ECHO_FILE,f.ECHO_FILES].includes(s),V=f.SEARCH_USERS===s,G=Object.values(p).includes(s),B=function(){return D(!U)},X=Object(H.a)({initialValues:M(N),onSubmit:function(e){var t=Object.values(e).filter((function(e){return e}));if(t.length)if(G)if(s===p.SEND_MESSAGE){var n=e.userHuid,r=e.groupChatId,c=e.message;O(We({userHuid:n,groupChatId:r,messageBody:c,messageMeta:{}}))}else O(qe({method:s,params:e}));else O(W({method:s,params:V?{huids:t}:e}))}}),z=function(){return L?!(null!==h&&void 0!==h&&h.length):!Object.values(X.values).filter((function(e){return e})).length};return Object(r.useEffect)((function(){var e=j.map((function(e,t){return Object(l.a)(Object(l.a)({},e),{},{id:e.id.includes(v.HUIDS)?"".concat(e.id).concat(t):e.id})}));return g(e),function(){O(q()),O(Je()),O(tt())}}),[j,O]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"feature-page",children:[Object(b.jsx)(Ot,{name:a}),L?Object(b.jsxs)("div",{className:"feature-page__form",children:[Object(b.jsx)("span",{className:"feature-page__title",children:s===f.ECHO_FILE?E.FILE:E.FILES}),Object(b.jsx)("button",{className:"btn--attach",onClick:function(){s===f.ECHO_FILE?O(Be()):s===f.ECHO_FILES&&O(ze())},children:s===f.ECHO_FILE?"Attach file":"Attach files"}),!(null===h||void 0===h||!h.length)&&Object(b.jsx)("div",{className:"attachments",children:h.map((function(e){return Object(b.jsxs)("span",{className:"attachments__item",children:[Object(b.jsx)("span",{children:e.fileName}),Object(b.jsx)(le,{width:20,height:20,className:"btn--remove-attachment",onClick:function(){return t=e.fileId,O(Ye(t)),void(1===(null===h||void 0===h?void 0:h.length)&&O(Q(null)));var t}})]},e.fileId)}))}),Object(b.jsx)("div",{className:"form-buttons",children:Object(b.jsx)("button",{className:Ie()({"btn--submit":!0,"btn--submit-disabled":z()}),onClick:function(){h&&O(W({method:s,params:{},files:h}))},disabled:z(),type:"button",children:"Submit"})})]}):Object(b.jsxs)("form",{className:"feature-page__form",onSubmit:X.handleSubmit,children:[N.map((function(e,t){var n=e.id,r=e.type,c=e.label,a=k[r],s=!V||0===t;return Object(b.jsxs)("div",{children:[s&&Object(b.jsx)("span",{className:"feature-page__title",children:c}),Object(b.jsx)("input",{className:Ie()({input:!0,"input--error":function(){var e,t,c=X.values[n];return V||r===x.UUID?c&&(t=X.values[n],!/[0-9a-fA-F-]{36}/.test(t)):n===v.PHONE?c&&(e=X.values[n],!/(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/.test(e)):void 0}()}),onChange:X.handleChange,value:X.values[n]||"",type:a,multiple:n===v.FILES,id:n,min:0}),"text"===a&&X.values[n]&&Object(b.jsx)(le,{className:"btn--clear-input",onClick:function(){X.setFieldValue(n,""),C&&P("")},height:20,width:20})]},n)})),Object(b.jsxs)("div",{className:"form-buttons",children:[Object(b.jsx)("button",{className:Ie()({"btn--submit":!0,"btn--submit-disabled":z()}),disabled:z(),type:"submit",children:"Submit"}),F&&Object(b.jsx)(re,{title:"Add new input",className:"btn--plus",onClick:function(){var e=N[N.length-1],t=e.id,n=Object(l.a)(Object(l.a)({},e),{},{id:t.includes(v.HUIDS)?"".concat(t).concat(N.length):t});g((function(e){return[].concat(Object(T.a)(e),[n])}))},height:24,width:24})]})]})]}),d&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"response-markdown",children:Object(b.jsx)(it.a,{children:null===d||void 0===d||null===(t=d.payload)||void 0===t||null===(n=t.result)||void 0===n?void 0:n.replaceAll("\n","\n\r")})}),s===f.ECHO_FILES&&Object(b.jsxs)("div",{className:"response-files",children:["Files:",null===d||void 0===d||null===(c=d.files)||void 0===c?void 0:c.map((function(){return Object(b.jsx)(fe,{className:"response-files__file",height:20,width:20})}))]}),d&&Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"response-markdown-form",children:[Object(b.jsx)("input",{checked:U,className:"form-toggler__input",id:"form-toggler",type:"checkbox",onChange:B}),Object(b.jsx)("span",{className:"form-toggler",onClick:B,children:"Show JSON Viewer"})]}),U&&Object(b.jsx)("div",{className:"response-json",children:Object(b.jsx)(Ne,{height:24,json:d})})]})]}),m&&Object(b.jsx)("div",{className:"response-express",children:JSON.stringify(null===m||void 0===m?void 0:m.payload,null,2)})]})}n(137);var ft,pt=Object(_.a)([function(e){return e.ui.topLoader}],(function(e){return e})),mt=Object(_.a)([function(e){return e.ui.mainLoader}],(function(e){return e})),ht=Object(_.a)([function(e){return e.ui.redirectPath}],(function(e){return e}));function vt(){var e=Object(i.e)(pt),t=Object(r.useState)(!1),n=Object(u.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(!1),o=Object(u.a)(s,2),l=o[0],j=o[1],O=Object(r.useState)(!1),d=Object(u.a)(O,2),f=d[0],p=d[1],m=Object(r.useRef)(null),h=Object(r.useRef)(null);return Object(r.useEffect)((function(){e&&!c&&a(!0),!e&&c&&(a(!1),j(!0),m.current=setTimeout((function(){p(!0),h.current=setTimeout((function(){j(!1),p(!1)}),100)}),200))}),[e,c]),Object(r.useEffect)((function(){return function(){m.current&&clearTimeout(m.current),h.current&&clearTimeout(h.current)}}),[]),Object(b.jsx)("div",{className:Ie()({"top-loader":!0,"top-loader--enabled":c&&!f}),children:Object(b.jsx)("div",{className:Ie()({"top-loader__bar":!0,"top-loader__bar--start":c,"top-loader__bar--stop":l,"top-loader__bar--finish":f})})})}var Et=["title","titleId"];function xt(){return xt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xt.apply(this,arguments)}function _t(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function St(e,t){var n=e.title,c=e.titleId,a=_t(e,Et);return r.createElement("svg",xt({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,ft||(ft=r.createElement("g",{fill:"currentColor",fillRule:"nonzero"},r.createElement("path",{d:"M1.379 7.017v2.775h-.55A.816.816 0 0 1 0 8.989V7.427c0-.443.371-.803.829-.803h.566c-.01.13-.016.261-.016.393zm9.792-.393c.458 0 .829.36.829.803V8.99a.816.816 0 0 1-.829.803h-.55V7.017c0-.132-.006-.263-.016-.393h.566zM10.047 9.873v-2.82c0-.132-.006-.263-.018-.393C9.857 4.651 8.377 3.043 6.5 2.8h-.997c-1.88.244-3.36 1.853-3.532 3.863-.01.129-.017.26-.017.392v4.754h8.094V9.873zm-5.998-.66c-.608 0-1.101-.522-1.101-1.167 0-.644.493-1.166 1.1-1.166.609 0 1.102.522 1.102 1.166 0 .645-.493 1.167-1.101 1.167zm2.96-1.167c0-.644.493-1.166 1.1-1.166.609 0 1.102.522 1.102 1.166 0 .645-.493 1.167-1.101 1.167s-1.101-.522-1.101-1.167z"}))))}var yt=r.forwardRef(St);n.p,n(138);function Nt(){var e=Object(i.d)(),t=Object(i.e)(st);return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"feature-page",children:[Object(b.jsx)(Ot,{name:C}),Object(b.jsx)("div",{className:"feature-page__notifications",children:t.length?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"notifications__clear-button",onClick:function(){e($e())},title:"Clear notifications",children:"Clear"}),t.map((function(e,t){return Object(b.jsx)("div",{className:"notifications__item",children:JSON.stringify(null===e||void 0===e?void 0:e.data,null,2)},t)}))]}):Object(b.jsx)("div",{className:"feature-page__notifications-placeholder",children:"New notifications will appear here..."})})]})})}var gt="SET_TOP_LOADER",Tt="SET_MAIN_LOADER",It="SET_REDIRECT_PATH",At=Object(V.a)(gt,(function(e){return e})),Ct=Object(V.a)(Tt,(function(e){return e})),Pt=Object(V.a)(It,(function(e){return e}));function wt(){var e=Object(i.d)(),t=Object(i.e)(at);return Object(r.useEffect)((function(){return function(){e(Pt("")),e(et(null))}}),[e]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"feature-page",children:[Object(b.jsx)(Ot,{name:P}),t&&Object(b.jsx)("div",{className:"response-express",children:JSON.stringify(t.payload,null,2)})]})})}var Rt=n(22),Ut=Object(Rt.a)(),Dt=n(88);n(155);function Ft(e){var t=e.onScanSuccess,n=e.onScanFailure,c=Object(r.useRef)({fps:10,qrbox:250,disableFlip:!0});return Object(r.useEffect)((function(){return new Dt.a("reader",c.current,!1).render(t,n),function(){}}),[]),Object(b.jsx)("div",{id:"reader"})}function kt(){var e=Object(r.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),s=Object(u.a)(a,2),i=s[0],o=s[1],l=Object(r.useState)(null),j=Object(u.a)(l,2),O=j[0],d=j[1];return Object(b.jsxs)("div",{className:"feature-page",children:[Object(b.jsx)(Ot,{name:U}),Object(b.jsx)(Ft,{onScanSuccess:function(e,t){c(e),o(t),d(null),console.log("Code matched: ".concat(e),t)},onScanFailure:function(e){d(e),console.warn("Code scan error: ".concat(e))}}),n&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:"Decoded text:"}),Object(b.jsx)("div",{children:n})]}),i&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:"Decoded result:"}),Object(b.jsx)("div",{children:JSON.stringify(i)})]}),O&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:"Error:"}),Object(b.jsx)("div",{children:O})]})]})}function Lt(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(u.a)(a,2),i=s[0],o=s[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"feature-page",children:[Object(b.jsx)("div",{className:"feature-page__title",children:Object(b.jsx)("p",{children:"TEST ON KEY PRESS"})}),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("label",{htmlFor:"key-pressed",children:"Test onKeyPressed event"}),Object(b.jsx)("input",{name:"key-pressed",className:"input",type:"text",onKeyPress:function(e){console.log("onKeyPress",e.key),c(e.key)}}),Object(b.jsx)("div",{className:"response-express",children:n&&"".concat(n," key pressed")})]}),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("label",{htmlFor:"key-down",children:"Test onKeyDown event"}),Object(b.jsx)("input",{name:"key-down",className:"input",type:"text",onKeyDown:function(e){console.log("onKeyDown",e.key),o(e.key)}}),Object(b.jsx)("div",{className:"response-express",children:i&&"".concat(i," key down")})]}),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("label",{htmlFor:"no-handler",children:"No event handler"}),Object(b.jsx)("input",{name:"no-handler",className:"input",type:"text"})]})]})})}function Ht(){var e=Object(i.d)(),t=Object(i.e)(S),n=Object(i.e)(ht);return Object(r.useEffect)((function(){t||e(Y())}),[e,t]),Object(r.useEffect)((function(){n&&Ut.push(n)}),[e,n]),Object(b.jsxs)("div",{className:"feature-smartapp",children:[Object(b.jsx)("div",{className:"header",children:Object(b.jsxs)("span",{className:"header__content",children:[Object(b.jsx)(yt,{className:"header__icon",height:20,width:20}),Object(b.jsx)("span",{className:"header__text",children:"Feature Smartapp"})]})}),Object(b.jsx)(vt,{}),Object(b.jsx)("section",{className:"feature-smartapp__menu",children:Object(b.jsxs)(N.c,{children:[null===t||void 0===t?void 0:t.map((function(e){return Object(b.jsx)(N.a,{path:"/".concat(e.method),children:Object(b.jsx)(dt,Object(l.a)({},e))},"".concat(e.method,"-route"))})),L.map((function(e){return Object(b.jsx)(N.a,{path:"/".concat(e.method),children:Object(b.jsx)(dt,Object(l.a)({},e))},"".concat(e.method,"-route"))})),Object(b.jsx)(N.a,{path:"/".concat(w),children:Object(b.jsx)(wt,{})},"".concat(w,"-route")),Object(b.jsx)(N.a,{path:"/".concat(A),children:Object(b.jsx)(Nt,{})},"".concat(A,"-route")),Object(b.jsx)(N.a,{path:"/".concat(D),children:Object(b.jsx)(kt,{})},"".concat(D,"-route")),Object(b.jsx)(N.a,{path:"/test-on-key-press",children:Object(b.jsx)(Lt,{})},"test-on-key-press"),Object(b.jsxs)(N.a,{path:"/",children:[null===t||void 0===t?void 0:t.map((function(e){return Object(b.jsx)(g.a,{className:"menu-item",to:"/".concat(e.method),children:e.name},"".concat(e.method,"-link"))})),t&&L.map((function(e){return Object(b.jsx)(g.a,{className:"menu-item",to:"/".concat(e.method),children:e.name},"".concat(e.method,"-link"))})),t&&Object(b.jsx)(g.a,{className:"menu-item",to:"/".concat(A),children:C},"".concat(A,"-link")),t&&Object(b.jsx)(g.a,{className:"menu-item",to:"/".concat(D),children:U},"".concat(D,"-link")),t&&Object(b.jsx)(g.a,{className:"menu-item",to:"/test-on-key-press",children:"TEST ON KEY PRESS"},"test-on-key-press-link")]})]})})]})}n(156);function Mt(e){var t=e.result,n=e.status;return Object(b.jsxs)("div",{className:"notifier",children:[Object(b.jsx)("span",{className:"notifier__text",children:t}),Object(b.jsxs)("span",{className:"notifier__text",children:["Status: ",n]})]})}function Vt(){var e=Object(i.d)(),t=Object(r.useState)(!0),n=Object(u.a)(t,2),c=n[0],a=n[1],s=Object(i.e)(mt),o=Object(r.useState)(null),f=Object(u.a)(o,2),p=f[0],m=f[1];return Object(r.useEffect)((function(){c&&(a(!1),e(nt())),null===j.a||void 0===j.a||j.a.onReceive((function(t){var n=t.type,r=t.payload;if("object"===typeof r)switch(n){case d.SMARTAPP_RPC:m(r),setTimeout((function(){return m(null)}),3e3);break;case d.NOTIFICATION:e(Ze(r))}}))}),[e,c]),Object(b.jsxs)(b.Fragment,{children:[s&&Object(b.jsx)(O,{}),Object(b.jsx)(Ht,{}),p&&Object(b.jsx)(Mt,Object(l.a)({},p))]})}var Gt,Bt,Xt,zt=n(31),Kt=n(72),Yt=n(84),Jt=n(89),qt=n(4),Wt=n(164),Qt=(Gt={},Object(qt.a)(Gt,gt,(function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),{},{topLoader:n})})),Object(qt.a)(Gt,Tt,(function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),{},{mainLoader:n})})),Object(qt.a)(Gt,It,(function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),{},{redirectPath:n})})),Gt),Zt=Object(Wt.a)(Qt,{topLoader:!1,mainLoader:!1,redirectPath:""}),$t=(Bt={},Object(qt.a)(Bt,B,(function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),{},{features:n})})),Object(qt.a)(Bt,K,(function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),{},{response:n})})),Object(qt.a)(Bt,X,(function(e){return Object(l.a)(Object(l.a)({},e),{},{response:null})})),Bt),en=Object(Wt.a)($t,{features:null,response:null,notifications:null}),tn=(Xt={},Object(qt.a)(Xt,Ce,(function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),{},{attachments:[n]})})),Object(qt.a)(Xt,we,(function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),{},{attachments:Object(T.a)(n)})})),Object(qt.a)(Xt,Re,(function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),{},{attachments:e.attachments.filter((function(e){return e.fileId!==n}))})})),Object(qt.a)(Xt,Ue,(function(e){return Object(l.a)(Object(l.a)({},e),{},{attachments:null})})),Object(qt.a)(Xt,Le,(function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),{},{notifications:[n].concat(Object(T.a)(e.notifications))})})),Object(qt.a)(Xt,He,(function(e){return Object(l.a)(Object(l.a)({},e),{},{notifications:[]})})),Object(qt.a)(Xt,ke,(function(e,t){return Object(l.a)(Object(l.a)({},e),{},{response:t})})),Object(qt.a)(Xt,Me,(function(e){return Object(l.a)(Object(l.a)({},e),{},{response:null})})),Object(qt.a)(Xt,Ge,(function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),{},{meta:n})})),Xt),nn=Object(Wt.a)(tn,{attachments:null,response:null,meta:null,notifications:[]}),rn=Object(zt.combineReducers)({ui:Zt,bot:en,client:nn,router:Object(o.b)(Ut)}),cn=n(7),an=n(10),sn=Object(cn.a)().mark(on);function on(){var e;return Object(cn.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(an.b)(Ct(!0));case 3:return t.next=5,j.a.sendBotEvent(F);case 5:if(!(e=t.sent)){t.next=9;break}return t.next=9,Object(an.b)(J(e.payload.result));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error("loadFeaturesSaga error",t.t0);case 14:return t.prev=14,t.next=17,Object(an.b)(Ct(!1));case 17:return t.finish(14);case 18:case"end":return t.stop()}}),sn,null,[[0,11,14,18]])}var ln=Object(cn.a)().mark(un);function un(e){var t;return Object(cn.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(an.b)(Ct(!0));case 3:return n.next=5,null===j.a||void 0===j.a?void 0:j.a.sendBotEvent(e.payload);case 5:return t=n.sent,n.next=8,Object(an.b)(Q(t));case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.error("sendFeatureBotEventSaga error",n.t0);case 13:return n.prev=13,n.next=16,Object(an.b)(Ct(!1));case 16:return n.finish(13);case 17:case"end":return n.stop()}}),ln,null,[[0,10,13,17]])}var jn=Object(cn.a)().mark(pn),bn=Object(cn.a)().mark(mn),On=Object(cn.a)().mark(hn),dn=Object(cn.a)().mark(vn),fn=Object(cn.a)().mark(En);function pn(e){var t,n,r,c;return Object(cn.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload.type,a.prev=1,a.next=4,null===j.a||void 0===j.a?void 0:j.a.sendClientEvent({method:h.UPLOAD_FILE,params:{type:t}});case 4:if(r=a.sent,null!==(n=r.payload)&&void 0!==n&&n.record){a.next=7;break}return a.abrupt("return");case 7:return c=Object(l.a)({},r.payload.record),a.next=10,Object(an.b)(Xe(c));case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(1),console.error("uploadFileSaga error: ".concat(a.t0));case 15:case"end":return a.stop()}}),jn,null,[[1,12]])}function mn(e){var t,n,r;return Object(cn.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload.type,c.prev=1,c.next=4,null===j.a||void 0===j.a?void 0:j.a.sendClientEvent({method:h.UPLOAD_FILES,params:{type:t}});case 4:if((n=c.sent).payload.records.length){c.next=7;break}return c.abrupt("return");case 7:return r=n.payload.records,c.next=10,Object(an.b)(Ke(r));case 10:c.next=15;break;case 12:c.prev=12,c.t0=c.catch(1),console.error("uploadFilesSaga error: ".concat(c.t0));case 15:case"end":return c.stop()}}),bn,null,[[1,12]])}function hn(e){var t;return Object(cn.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(an.b)(At(!0));case 3:return n.next=5,null===j.a||void 0===j.a?void 0:j.a.sendClientEvent(e.payload);case 5:return t=n.sent,n.next=8,Object(an.b)(Qe(t));case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.error("sendExpressEventSaga error",n.t0);case 13:return n.prev=13,n.next=16,Object(an.b)(At(!1));case 16:return n.finish(13);case 17:case"end":return n.stop()}}),On,null,[[0,10,13,17]])}function vn(e){var t;return Object(cn.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(an.b)(At(!0));case 3:return n.next=5,Object(j.c)(e.payload);case 5:return t=n.sent,n.next=8,Object(an.b)(Qe(t));case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.error("sendMessageExpressEventSaga error",n.t0);case 13:return n.prev=13,n.next=16,Object(an.b)(At(!1));case 16:return n.finish(13);case 17:case"end":return n.stop()}}),dn,null,[[0,10,13,17]])}function En(){var e,t;return Object(cn.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(j.b)(300);case 3:if(null===(t=n.sent)||void 0===t||null===(e=t.payload)||void 0===e||!e[R]){n.next=11;break}return n.next=7,Object(an.b)(Pt("/".concat(w)));case 7:return n.next=9,Object(an.b)(et(t));case 9:n.next=12;break;case 11:Pt("/");case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),console.error("sendExpressReadyEventSaga",n.t0);case 17:case"end":return n.stop()}}),fn,null,[[0,14]])}var xn=Object(cn.a)().mark(_n);function _n(){return Object(cn.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(an.a)([Object(an.c)(G,on),Object(an.c)(z,un),Object(an.c)(De,hn),Object(an.c)(Fe,vn),Object(an.c)(Ve,En),Object(an.c)(Ae,pn),Object(an.c)(Pe,mn)]);case 2:case"end":return e.stop()}}),xn)}var Sn=_n;n(158);s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(i.a,{store:function(){var e=Object(Jt.a)(),t=Object(Kt.a)(Ut),n=Object(zt.createStore)(rn,void 0,Object(Yt.composeWithDevTools)(Object(zt.applyMiddleware)(e,t)));return e.run(Sn).toPromise().catch((function(e){return console.error("Saga error",e)})),n}(),children:Object(b.jsx)(o.a,{history:Ut,children:Object(b.jsx)(Vt,{})})})}),document.getElementById("root"))}},[[159,1,2]]]);
//# sourceMappingURL=main.05c11429.chunk.js.map