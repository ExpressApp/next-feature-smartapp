(this["webpackJsonp@smartapp/feature-smartapp"]=this["webpackJsonp@smartapp/feature-smartapp"]||[]).push([[0],{123:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(49),i=n.n(c),o=n(14),s=n(43),l=n(3),u=n(20),b=n(7),O=(n(123),n(1));function j(){return Object(O.jsx)("div",{className:"main-loader",children:Object(O.jsxs)("div",{className:"main-loader__spinner",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})})}n(125);var d,f,p,m,E,h,v,_,x=n(25),S=Object(x.a)([function(e){return e.bot.features}],(function(e){return e})),T=Object(x.a)([function(e){return e.bot.response}],(function(e){return e})),N=n(12),g=n(36),C=n(10),y=n(31),I=n(13);!function(e){e.SMARTAPP_RPC="smartapp_rpc",e.NOTIFICATION="notification",e.OPEN_SMARTAPP_META="open_smart_app_meta"}(d||(d={})),function(e){e.ECHO="echo",e.UPDATE_APP_COUNTER="update_app_counter",e.SEND_NOTIFICATION="send_notification",e.ECHO_FILE="echo_file",e.ECHO_FILES="echo_files",e.SEARCH_USERS="search_users"}(f||(f={})),function(e){e.ADD_CONTACT="add_contact",e.CREATE_PERSONAL_CHAT="create_personal_chat",e.SEND_MESSAGE="send_message",e.GET_CONTACT="get_contact",e.OPEN_SMARTAPP="open_smart_app",e.OPEN_CLIENT_SETTINGS="open_client_settings",e.GET_CHATS="get_chats",e.SEARCH_CORPORATE_PHONEBOOK="search_corporate_phonebook"}(p||(p={})),function(e){e.ADD_CONTACT="Add Contact",e.CREATE_PERSONAL_CHAT="Create Personal Chat",e.SEND_MESSAGE="Send Message to Group Chat or User",e.GET_CONTACT="Get Contact",e.OPEN_SMARTAPP="Open SmartApp",e.OPEN_CLIENT_SETTINGS="Open Client Settings",e.GET_CHATS="Get Chats",e.SEARCH_CORPORATE_PHONEBOOK="Search Corporate Phonebook"}(m||(m={})),function(e){e.READY="ready",e.UPLOAD_FILE="upload_file",e.UPLOAD_FILES="upload_files"}(E||(E={})),function(e){e.TEXT="text",e.COUNT="count",e.DELAY="delay",e.FILE="file",e.FILES="files",e.HUIDS="huids",e.PHONE="phone",e.NAME="name",e.HUID="huid",e.SMARTAPP_ID="appId",e.MESSAGE="message",e.GROUP_CHAT_ID="groupChatId",e.USER_HUID="userHuid",e.FILTER="filter"}(h||(h={})),function(e){e.TEXT="Text",e.COUNT="Count",e.DELAY="Delay",e.FILE="File",e.FILES="Files",e.HUIDS="Huids",e.PHONE="Phone",e.NAME="Name",e.HUID="Huid",e.SMARTAPP_ID="Smartapp ID",e.MESSAGE="Message",e.GROUP_CHAT_ID="Group chat id",e.USER_HUID="User huid",e.FILTER="Filter"}(v||(v={})),function(e){e.INPUT_TEXT="INPUT_TEXT",e.INPUT_NUMBER="INPUT_NUMBER",e.FILE_PICKER="FILE_PICKER",e.ARRAY_UUID="ARRAY_UUID",e.UUID="UUID"}(_||(_={}));n(126);var A,P="notification",R="Express Notification",w="Open Smart App Meta",U="open_smart_app",D="openSmartAppMeta",F="Open File",H="open_file",L="Scan QR",k="scan_qr",M={method:"menu",params:{text:"menu"}},G={INPUT_TEXT:"text",INPUT_NUMBER:"number",FILE_PICKER:"file",ARRAY_UUID:"text",UUID:"text"},V=[{method:p.ADD_CONTACT,name:m.ADD_CONTACT,uiElements:[{id:h.PHONE,label:v.PHONE,type:_.INPUT_TEXT},{id:h.NAME,label:v.NAME,type:_.INPUT_TEXT}]},{method:p.CREATE_PERSONAL_CHAT,name:m.CREATE_PERSONAL_CHAT,uiElements:[{id:h.HUID,label:v.HUID,type:_.UUID}]},{method:p.GET_CONTACT,name:m.GET_CONTACT,uiElements:[{id:h.PHONE,label:v.PHONE,type:_.INPUT_TEXT}]},{method:p.OPEN_SMARTAPP,name:m.OPEN_SMARTAPP,uiElements:[{id:h.SMARTAPP_ID,label:v.SMARTAPP_ID,type:_.INPUT_TEXT}]},{method:p.SEND_MESSAGE,name:m.SEND_MESSAGE,uiElements:[{id:h.MESSAGE,label:v.MESSAGE,type:_.INPUT_TEXT},{id:h.GROUP_CHAT_ID,label:v.GROUP_CHAT_ID,type:_.UUID},{id:h.USER_HUID,label:v.USER_HUID,type:_.UUID}]},{method:p.OPEN_CLIENT_SETTINGS,name:m.OPEN_CLIENT_SETTINGS,uiElements:[]},{method:p.GET_CHATS,name:m.GET_CHATS,uiElements:[{id:h.FILTER,label:v.FILTER,type:_.INPUT_TEXT}]},{method:p.SEARCH_CORPORATE_PHONEBOOK,name:m.SEARCH_CORPORATE_PHONEBOOK,uiElements:[{id:h.FILTER,label:v.FILTER,type:_.INPUT_TEXT}]}],B=n(86),X=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return e[t.id]=void 0,e}),{})},z=n(164),J="LOAD_FEATURES",K="LOAD_FEATURES_SUCCESS",Y="RESET_RESPONSE",q="SEND_FEATURE_BOT_EVENT",W="SEND_FEATURE_BOT_EVENT_SUCCESS",Q=Object(z.a)(J,(function(){})),Z=Object(z.a)(K,(function(e){return e})),$=Object(z.a)(Y,(function(){})),ee=Object(z.a)(q,(function(e){return e})),te=Object(z.a)(W,(function(e){return e})),ne=["title","titleId"];function re(){return re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},re.apply(this,arguments)}function ae(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ce(e,t){var n=e.title,a=e.titleId,c=ae(e,ne);return r.createElement("svg",re({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,A||(A=r.createElement("path",{fillRule:"evenodd",d:"M13 11V4h-2v7H4v2h7v7h2v-7h7v-2h-7z"})))}var ie,oe=r.forwardRef(ce),se=(n.p,["title","titleId"]);function le(){return le=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},le.apply(this,arguments)}function ue(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function be(e,t){var n=e.title,a=e.titleId,c=ue(e,se);return r.createElement("svg",le({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,ie||(ie=r.createElement("path",{fill:"currentColor",d:"M13 11V3h-2v8H3v2h8v8h2v-8h8v-2h-8z",transform:"rotate(45 12 12)"})))}var Oe,je=r.forwardRef(be),de=(n.p,["title","titleId"]);function fe(){return fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fe.apply(this,arguments)}function pe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function me(e,t){var n=e.title,a=e.titleId,c=pe(e,de);return r.createElement("svg",fe({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 26",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,Oe||(Oe=r.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(-1)"},r.createElement("path",{fill:"#595959",d:"M5 0C3.73 0 2.44 1.225 2.5 2.407V22.63c-.06 1.784 1.23 3.007 2.5 2.89h15c1.71.117 3-1.106 3-2.89V6.26L16 0H5zm0 24.556c-.298-.117-1.298-.59-1.5-1.445V2.41C3.702 2.148 4.702 1.2 5 .963h10.5v3.852c.01 1.467.903 2.315 2 1.926H22v15.89c-.262.864-.76 1.81-2 1.928H5z"}),r.createElement("rect",{width:18.5,height:9.148,x:1,y:12.519,fill:"#5C5C5C",rx:2}),r.createElement("text",{fill:"#FFF",fontSize:5.5,fontWeight:600},r.createElement("tspan",{x:4.302,y:19},"\n        FILE\n      ")))))}var Ee,he=r.forwardRef(me),ve=(n.p,n(77)),_e=n.n(ve),xe=["title","titleId"];function Se(){return Se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Se.apply(this,arguments)}function Te(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Ne(e,t){var n=e.title,a=e.titleId,c=Te(e,xe);return r.createElement("svg",Se({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,Ee||(Ee=r.createElement("path",{fill:"currentColor",d:"M10.667.667h-8c-.734 0-1.334.6-1.334 1.333v9.333h1.334V2h8V.667zm2 2.666H5.333C4.6 3.333 4 3.933 4 4.667V14c0 .733.6 1.333 1.333 1.333h7.334c.733 0 1.333-.6 1.333-1.333V4.667c0-.734-.6-1.334-1.333-1.334zm0 10.667H5.333V4.667h7.334V14z"})))}var ge=r.forwardRef(Ne),Ce=(n.p,n(78)),ye=n.n(Ce);n(128),n(129);function Ie(e){var t=Object(r.useRef)(null);return Object(r.useEffect)((function(){var n=new ye.a(t.current,{mode:"view",enableTransform:!0});e.json&&n.set(e.json);var r=document.createElement("button");r.className="copy-to-clipboard",r.innerHTML=_e.a.renderToStaticMarkup(Object(O.jsx)(ge,{height:"22",width:"22"})),r.addEventListener("click",(function(){return function(e){var t=document.createElement("textarea");t.innerHTML=JSON.stringify(e,null,"  "),document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(e.json)})),r.setAttribute("title","Copy To Clipboard");var a=document.querySelector(".jsoneditor-menu"),c=document.querySelector(".jsoneditor-menu .jsoneditor-search");return a.insertBefore(r,c),function(){return n.destroy()}}),[e.json]),Object(O.jsx)("div",{className:"json-viewer",ref:t})}var Ae,Pe=n(27),Re=n.n(Pe),we="UPLOAD_FILE",Ue="UPLOAD_FILE_SUCCESS",De="UPLOAD_FILES",Fe="UPLOAD_FILES_SUCCESS",He="REMOVE_FILE_SUCCESS",Le="RESET_ATTACHMENTS",ke="SEND_EXPRESS_EVENT",Me="SEND_MESSAGE_EXPRESS_EVENT",Ge="SEND_EXPRESS_EVENT_SUCCESS",Ve="SET_NOTIFICATION_SUCCESS",Be="RESET_EXPRESS_NOTIFICATION_SUCCESS",Xe="RESET_EXPRESS_RESPONSE",ze="SEND_EXPRESS_READY_EVENT",Je="SET_META",Ke=Object(z.a)(we,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:e}})),Ye=Object(z.a)(Ue,(function(e){return e})),qe=Object(z.a)(De,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:e}})),We=Object(z.a)(Fe,(function(e){return e})),Qe=(Object(z.a)("REMOVE_FILE",(function(e){return e})),Object(z.a)(He,(function(e){return e}))),Ze=Object(z.a)(Le,(function(){})),$e=Object(z.a)(ke,(function(e){return e})),et=Object(z.a)(Me,(function(e){return e})),tt=Object(z.a)(Ge,(function(e){return e})),nt=Object(z.a)(Ve,(function(e){return e})),rt=Object(z.a)(Be,(function(){})),at=Object(z.a)(Je,(function(e){return e})),ct=Object(z.a)(Xe,(function(){})),it=Object(z.a)(ze,(function(){})),ot=Object(x.a)([function(e){return e.client.attachments}],(function(e){return e})),st=Object(x.a)([function(e){return e.client.response}],(function(e){return e})),lt=Object(x.a)([function(e){return e.client.meta}],(function(e){return e})),ut=Object(x.a)([function(e){return e.client.notifications}],(function(e){return e})),bt=n(85),Ot=["title","titleId"];function jt(){return jt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jt.apply(this,arguments)}function dt(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ft(e,t){var n=e.title,a=e.titleId,c=dt(e,Ot);return r.createElement("svg",jt({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,Ae||(Ae=r.createElement("path",{d:"M7.828 11l5.586-5.586L12 4l-8 8 8 8 1.414-1.414L7.828 13H20v-2z"})))}var pt=r.forwardRef(ft);n.p,n(130);function mt(e){var t=e.name;return Object(O.jsxs)("div",{className:"feature-page__header",children:[Object(O.jsx)(g.a,{className:"btn--arrow-left",to:"/",children:Object(O.jsx)(pt,{className:"icon--arrow-left",height:24,width:24})}),Object(O.jsx)("div",{className:"feature-page__info",children:Object(O.jsxs)("span",{className:"feature-page__title",children:[t," method"]})})]})}function Et(e){var t,n,a,c=e.name,i=e.method,s=e.uiElements,j=void 0===s?[]:s,d=Object(o.d)(),m=Object(o.e)(T),E=Object(o.e)(st),x=Object(o.e)(ot),S=Object(r.useState)([]),N=Object(u.a)(S,2),g=N[0],A=N[1],P=Object(r.useState)(""),R=Object(u.a)(P,2),w=R[0],U=R[1],D=Object(r.useState)(!1),F=Object(u.a)(D,2),H=F[0],L=F[1],k=i===f.SEARCH_USERS,M=[f.ECHO_FILE,f.ECHO_FILES].includes(i),V=f.SEARCH_USERS===i,z=Object.values(p).includes(i),J=/iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent),K=function(){var e=Object(y.a)(Object(C.a)().mark((function e(t){var n,r,a,c,o,s,l,u;return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=i,e.next=e.t0===p.SEND_MESSAGE?3:e.t0===p.OPEN_CLIENT_SETTINGS?19:e.t0===p.GET_CHATS?21:e.t0===p.SEARCH_CORPORATE_PHONEBOOK?26:31;break;case 3:if(Y(t).length){e.next=5;break}return e.abrupt("return");case 5:if(n=t.userHuid,r=t.groupChatId,a=t.message,c=function(){return d(et({userHuid:n,groupChatId:r,messageBody:a,messageMeta:{}}))},J){e.next=16;break}return e.next=10,null===b.a||void 0===b.a?void 0:b.a.disableRenameParams();case 10:return e.next=12,c();case 12:return e.next=14,null===b.a||void 0===b.a?void 0:b.a.enableRenameParams();case 14:e.next=18;break;case 16:return e.next=18,c();case 18:return e.abrupt("break",46);case 19:return Object(b.c)(),e.abrupt("break",46);case 21:return e.next=23,Object(b.b)({filter:(null===t||void 0===t?void 0:t.filter)||null});case 23:return o=e.sent,d(tt(o)),e.abrupt("break",46);case 26:return e.next=28,Object(b.e)({filter:(null===t||void 0===t?void 0:t.filter)||null});case 28:return s=e.sent,d(tt(s)),e.abrupt("break",46);case 31:if(Y(t).length){e.next=33;break}return e.abrupt("return");case 33:if(l={method:i,params:t},u=function(){return d($e(l))},J){e.next=44;break}return e.next=38,null===b.a||void 0===b.a?void 0:b.a.disableRenameParams();case 38:return e.next=40,u();case 40:return e.next=42,null===b.a||void 0===b.a?void 0:b.a.enableRenameParams();case 42:e.next=46;break;case 44:return e.next=46,u();case 46:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=Object(r.useMemo)((function(){return function(e){return Object.values(e).filter((function(e){return e}))}}),[]),q=function(){return L(!H)},W=Object(B.a)({initialValues:X(g),onSubmit:function(e){z?K(e):function(e){var t=Y(e);t.length&&d(ee({method:i,params:V?{huids:t}:e}))}(e)}}),Q=function(){return i!==p.GET_CHATS&&(M?!(null!==x&&void 0!==x&&x.length):!Object.values(W.values).filter((function(e){return e})).length)};return Object(r.useEffect)((function(){var e=j.map((function(e,t){return Object(l.a)(Object(l.a)({},e),{},{id:e.id.includes(h.HUIDS)?"".concat(e.id).concat(t):e.id})}));return A(e),function(){d($()),d(Ze()),d(ct())}}),[j,d]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"feature-page",children:[Object(O.jsx)(mt,{name:c}),M?Object(O.jsxs)("div",{className:"feature-page__form",children:[Object(O.jsx)("span",{className:"feature-page__title",children:i===f.ECHO_FILE?v.FILE:v.FILES}),Object(O.jsx)("button",{className:"btn--attach",onClick:function(){i===f.ECHO_FILE?d(Ke()):i===f.ECHO_FILES&&d(qe())},children:i===f.ECHO_FILE?"Attach file":"Attach files"}),!(null===x||void 0===x||!x.length)&&Object(O.jsx)("div",{className:"attachments",children:x.map((function(e){return Object(O.jsxs)("span",{className:"attachments__item",children:[Object(O.jsx)("span",{children:e.fileName}),Object(O.jsx)(je,{width:20,height:20,className:"btn--remove-attachment",onClick:function(){return t=e.fileId,d(Qe(t)),void(1===(null===x||void 0===x?void 0:x.length)&&d(te(null)));var t}})]},e.fileId)}))}),Object(O.jsx)("div",{className:"form-buttons",children:Object(O.jsx)("button",{className:Re()({"btn--submit":!0,"btn--submit-disabled":Q()}),onClick:function(){x&&d(ee({method:i,params:{},files:x}))},disabled:Q(),type:"button",children:"Submit"})})]}):!(null===g||void 0===g||!g.length)&&Object(O.jsxs)("form",{className:"feature-page__form",onSubmit:W.handleSubmit,children:[g.map((function(e,t){var n=e.id,r=e.type,a=e.label,c=G[r],i=!V||0===t;return Object(O.jsxs)("div",{children:[i&&Object(O.jsx)("span",{className:"feature-page__title",children:a}),Object(O.jsx)("input",{className:Re()({input:!0,"input--error":function(){var e,t,a=W.values[n];return V||r===_.UUID?a&&(t=W.values[n],!/[0-9a-fA-F-]{36}/.test(t)):n===h.PHONE?a&&(e=W.values[n],!/(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/.test(e)):void 0}()}),onChange:W.handleChange,value:W.values[n]||"",type:c,multiple:n===h.FILES,id:n,min:0}),c===G.INPUT_TEXT&&W.values[n]&&Object(O.jsx)(je,{className:"btn--clear-input",onClick:function(){W.setFieldValue(n,""),w&&U("")},height:20,width:20})]},n)})),Object(O.jsxs)("div",{className:"form-buttons",children:[Object(O.jsx)("button",{className:Re()({"btn--submit":!0,"btn--submit-disabled":Q()}),disabled:Q(),type:"submit",children:"Submit"}),k&&Object(O.jsx)(oe,{title:"Add new input",className:"btn--plus",onClick:function(){var e=g[g.length-1],t=e.id,n=Object(l.a)(Object(l.a)({},e),{},{id:t.includes(h.HUIDS)?"".concat(t).concat(g.length):t});A((function(e){return[].concat(Object(I.a)(e),[n])}))},height:24,width:24})]})]})]}),m&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"response-markdown",children:Object(O.jsx)(bt.a,{children:null===m||void 0===m||null===(t=m.payload)||void 0===t||null===(n=t.result)||void 0===n?void 0:n.replaceAll("\n","\n\r")})}),i===f.ECHO_FILES&&Object(O.jsxs)("div",{className:"response-files",children:["Files:",null===m||void 0===m||null===(a=m.files)||void 0===a?void 0:a.map((function(){return Object(O.jsx)(he,{className:"response-files__file",height:20,width:20})}))]}),m&&Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"response-markdown-form",children:[Object(O.jsx)("input",{checked:H,className:"form-toggler__input",id:"form-toggler",type:"checkbox",onChange:q}),Object(O.jsx)("span",{className:"form-toggler",onClick:q,children:"Show JSON Viewer"})]}),H&&Object(O.jsx)("div",{className:"response-json",children:Object(O.jsx)(Ie,{height:24,json:m})})]})]}),E&&Object(O.jsx)("div",{className:"response-express",children:JSON.stringify(null===E||void 0===E?void 0:E.payload,null,2)})]})}n(136);var ht,vt=Object(x.a)([function(e){return e.ui.topLoader}],(function(e){return e})),_t=Object(x.a)([function(e){return e.ui.mainLoader}],(function(e){return e})),xt=Object(x.a)([function(e){return e.ui.redirectPath}],(function(e){return e}));function St(){var e=Object(o.e)(vt),t=Object(r.useState)(!1),n=Object(u.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(!1),s=Object(u.a)(i,2),l=s[0],b=s[1],j=Object(r.useState)(!1),d=Object(u.a)(j,2),f=d[0],p=d[1],m=Object(r.useRef)(null),E=Object(r.useRef)(null);return Object(r.useEffect)((function(){e&&!a&&c(!0),!e&&a&&(c(!1),b(!0),m.current=setTimeout((function(){p(!0),E.current=setTimeout((function(){b(!1),p(!1)}),100)}),200))}),[e,a]),Object(r.useEffect)((function(){return function(){m.current&&clearTimeout(m.current),E.current&&clearTimeout(E.current)}}),[]),Object(O.jsx)("div",{className:Re()({"top-loader":!0,"top-loader--enabled":a&&!f}),children:Object(O.jsx)("div",{className:Re()({"top-loader__bar":!0,"top-loader__bar--start":a,"top-loader__bar--stop":l,"top-loader__bar--finish":f})})})}var Tt=["title","titleId"];function Nt(){return Nt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Nt.apply(this,arguments)}function gt(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Ct(e,t){var n=e.title,a=e.titleId,c=gt(e,Tt);return r.createElement("svg",Nt({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,ht||(ht=r.createElement("g",{fill:"currentColor",fillRule:"nonzero"},r.createElement("path",{d:"M1.379 7.017v2.775h-.55A.816.816 0 0 1 0 8.989V7.427c0-.443.371-.803.829-.803h.566c-.01.13-.016.261-.016.393zm9.792-.393c.458 0 .829.36.829.803V8.99a.816.816 0 0 1-.829.803h-.55V7.017c0-.132-.006-.263-.016-.393h.566zM10.047 9.873v-2.82c0-.132-.006-.263-.018-.393C9.857 4.651 8.377 3.043 6.5 2.8h-.997c-1.88.244-3.36 1.853-3.532 3.863-.01.129-.017.26-.017.392v4.754h8.094V9.873zm-5.998-.66c-.608 0-1.101-.522-1.101-1.167 0-.644.493-1.166 1.1-1.166.609 0 1.102.522 1.102 1.166 0 .645-.493 1.167-1.101 1.167zm2.96-1.167c0-.644.493-1.166 1.1-1.166.609 0 1.102.522 1.102 1.166 0 .645-.493 1.167-1.101 1.167s-1.101-.522-1.101-1.167z"}))))}var yt=r.forwardRef(Ct);n.p,n(137);function It(){var e=Object(o.d)(),t=Object(o.e)(ut);return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"feature-page",children:[Object(O.jsx)(mt,{name:R}),Object(O.jsx)("div",{className:"feature-page__notifications",children:t.length?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"notifications__clear-button",onClick:function(){e(rt())},title:"Clear notifications",children:"Clear"}),t.map((function(e,t){return Object(O.jsx)("div",{className:"notifications__item",children:JSON.stringify(null===e||void 0===e?void 0:e.data,null,2)},t)}))]}):Object(O.jsx)("div",{className:"feature-page__notifications-placeholder",children:"New notifications will appear here..."})})]})})}var At="SET_TOP_LOADER",Pt="SET_MAIN_LOADER",Rt="SET_REDIRECT_PATH",wt=Object(z.a)(At,(function(e){return e})),Ut=Object(z.a)(Pt,(function(e){return e})),Dt=Object(z.a)(Rt,(function(e){return e}));function Ft(){var e=Object(o.d)(),t=Object(o.e)(lt);return Object(r.useEffect)((function(){return function(){e(Dt("")),e(at(null))}}),[e]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"feature-page",children:[Object(O.jsx)(mt,{name:w}),t&&Object(O.jsx)("div",{className:"response-express",children:JSON.stringify(t.payload,null,2)})]})})}var Ht=n(22),Lt=Object(Ht.a)(),kt=n(87);n(154);function Mt(e){var t=e.onScanSuccess,n=e.onScanFailure,a=Object(r.useRef)({fps:10,qrbox:250,disableFlip:!0});return Object(r.useEffect)((function(){return new kt.a("reader",a.current,!1).render(t,n),function(){}}),[]),Object(O.jsx)("div",{id:"reader"})}function Gt(){var e=Object(r.useState)(null),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),i=Object(u.a)(c,2),o=i[0],s=i[1],l=Object(r.useState)(null),b=Object(u.a)(l,2),j=b[0],d=b[1];return Object(O.jsxs)("div",{className:"feature-page",children:[Object(O.jsx)(mt,{name:L}),Object(O.jsx)(Mt,{onScanSuccess:function(e,t){a(e),s(t),d(null),console.log("Code matched: ".concat(e),t)},onScanFailure:function(e){d(e),console.warn("Code scan error: ".concat(e))}}),n&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{children:"Decoded text:"}),Object(O.jsx)("div",{children:n})]}),o&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{children:"Decoded result:"}),Object(O.jsx)("div",{children:JSON.stringify(o)})]}),j&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{children:"Error:"}),Object(O.jsx)("div",{children:j})]})]})}function Vt(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(O.jsxs)("div",{className:"feature-page",children:[Object(O.jsx)(mt,{name:F}),Object(O.jsx)("input",{className:Re()({input:!0}),onChange:function(e){return a(e.target.value)},value:n,type:"text"}),Object(O.jsx)("div",{className:"form-buttons",children:Object(O.jsx)("button",{className:Re()({"btn--submit":!0,"btn--submit-disabled":!n}),disabled:!n,type:"submit",onClick:function(){n&&(console.error({inputValue:JSON.parse(n)}),null===b.a||void 0===b.a||b.a.sendClientEvent({method:H,params:JSON.parse(n)}))},children:"Submit"})})]})}function Bt(){var e=Object(o.d)(),t=Object(o.e)(S),n=Object(o.e)(xt),a=Object(b.g)().platform;return Object(r.useEffect)((function(){t||e(Q())}),[e,t]),Object(r.useEffect)((function(){n&&Lt.push(n)}),[e,n]),Object(O.jsxs)("div",{className:"feature-smartapp",children:[Object(O.jsx)("div",{className:"header",children:Object(O.jsxs)("span",{className:"header__content",children:[Object(O.jsx)(yt,{className:"header__icon",height:20,width:20}),Object(O.jsx)("span",{className:"header__text",children:"Feature Smartapp"})]})}),Object(O.jsx)(St,{}),Object(O.jsx)("section",{className:"feature-smartapp__menu",children:Object(O.jsxs)(N.c,{children:[null===t||void 0===t?void 0:t.map((function(e){return Object(O.jsx)(N.a,{path:"/".concat(e.method),children:Object(O.jsx)(Et,Object(l.a)({},e))},"".concat(e.method,"-route"))})),V.map((function(e){return Object(O.jsx)(N.a,{path:"/".concat(e.method),children:Object(O.jsx)(Et,Object(l.a)({},e))},"".concat(e.method,"-route"))})),Object(O.jsx)(N.a,{path:"/".concat(U),children:Object(O.jsx)(Ft,{})},"".concat(U,"-route")),Object(O.jsx)(N.a,{path:"/".concat(P),children:Object(O.jsx)(It,{})},"".concat(P,"-route")),Object(O.jsx)(N.a,{path:"/".concat(k),children:Object(O.jsx)(Gt,{})},"".concat(k,"-route")),Object(O.jsx)(N.a,{path:"/".concat(H),children:Object(O.jsx)(Vt,{})},"".concat(H,"-route")),Object(O.jsxs)(N.a,{path:"/",children:[null===t||void 0===t?void 0:t.map((function(e){return Object(O.jsx)(g.a,{className:"menu-item",to:"/".concat(e.method),children:e.name},"".concat(e.method,"-link"))})),V.map((function(e){return e.method===p.OPEN_CLIENT_SETTINGS?Object(O.jsx)("div",{className:"menu-item",onClick:function(){"web"!==a?Object(b.c)():alert("Feature is unavailable on web client")},children:e.name}):Object(O.jsx)(g.a,{className:"menu-item",to:"/".concat(e.method),children:e.name},"".concat(e.method,"-link"))})),Object(O.jsx)(g.a,{className:"menu-item",to:"/".concat(P),children:R},"".concat(P,"-link")),Object(O.jsx)(g.a,{className:"menu-item",to:"/".concat(k),children:L},"".concat(k,"-link"))]})]})})]})}n(155);function Xt(e){var t=e.result,n=e.status;return Object(O.jsxs)("div",{className:"notifier",children:[Object(O.jsx)("span",{className:"notifier__text",children:t}),Object(O.jsxs)("span",{className:"notifier__text",children:["Status: ",n]})]})}function zt(){var e=Object(o.d)(),t=Object(r.useState)(!0),n=Object(u.a)(t,2),a=n[0],c=n[1],i=Object(o.e)(_t),s=Object(r.useState)(null),f=Object(u.a)(s,2),p=f[0],m=f[1];return Object(r.useEffect)((function(){a&&(c(!1),e(it())),null===b.a||void 0===b.a||b.a.onReceive((function(t){var n=t.type,r=t.payload;if("object"===typeof r)switch(n){case d.SMARTAPP_RPC:m(r),setTimeout((function(){return m(null)}),3e3);break;case d.NOTIFICATION:e(nt(r))}}))}),[e,a]),Object(O.jsxs)(O.Fragment,{children:[i&&Object(O.jsx)(j,{}),Object(O.jsx)(Bt,{}),p&&Object(O.jsx)(Xt,Object(l.a)({},p))]})}var Jt,Kt,Yt,qt=n(32),Wt=n(70),Qt=n(83),Zt=n(88),$t=n(5),en=n(163),tn=(Jt={},Object($t.a)(Jt,At,(function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),{},{topLoader:n})})),Object($t.a)(Jt,Pt,(function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),{},{mainLoader:n})})),Object($t.a)(Jt,Rt,(function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),{},{redirectPath:n})})),Jt),nn=Object(en.a)(tn,{topLoader:!1,mainLoader:!1,redirectPath:""}),rn=(Kt={},Object($t.a)(Kt,K,(function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),{},{features:n})})),Object($t.a)(Kt,W,(function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),{},{response:n})})),Object($t.a)(Kt,Y,(function(e){return Object(l.a)(Object(l.a)({},e),{},{response:null})})),Kt),an=Object(en.a)(rn,{features:null,response:null,notifications:null}),cn=(Yt={},Object($t.a)(Yt,Ue,(function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),{},{attachments:[n]})})),Object($t.a)(Yt,Fe,(function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),{},{attachments:Object(I.a)(n)})})),Object($t.a)(Yt,He,(function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),{},{attachments:e.attachments.filter((function(e){return e.fileId!==n}))})})),Object($t.a)(Yt,Le,(function(e){return Object(l.a)(Object(l.a)({},e),{},{attachments:null})})),Object($t.a)(Yt,Ve,(function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),{},{notifications:[n].concat(Object(I.a)(e.notifications))})})),Object($t.a)(Yt,Be,(function(e){return Object(l.a)(Object(l.a)({},e),{},{notifications:[]})})),Object($t.a)(Yt,Ge,(function(e,t){return Object(l.a)(Object(l.a)({},e),{},{response:t})})),Object($t.a)(Yt,Xe,(function(e){return Object(l.a)(Object(l.a)({},e),{},{response:null})})),Object($t.a)(Yt,Je,(function(e,t){var n=t.payload;return Object(l.a)(Object(l.a)({},e),{},{meta:n})})),Yt),on=Object(en.a)(cn,{attachments:null,response:null,meta:null,notifications:[]}),sn=Object(qt.combineReducers)({ui:nn,bot:an,client:on,router:Object(s.b)(Lt)}),ln=n(11),un=Object(C.a)().mark(bn);function bn(){var e;return Object(C.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ln.b)(Ut(!0));case 3:return t.next=5,b.a.sendBotEvent(M);case 5:if(!(e=t.sent)){t.next=9;break}return t.next=9,Object(ln.b)(Z(e.payload.result));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error("loadFeaturesSaga error",t.t0);case 14:return t.prev=14,t.next=17,Object(ln.b)(Ut(!1));case 17:return t.finish(14);case 18:case"end":return t.stop()}}),un,null,[[0,11,14,18]])}var On=Object(C.a)().mark(jn);function jn(e){var t;return Object(C.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(ln.b)(Ut(!0));case 3:return n.next=5,null===b.a||void 0===b.a?void 0:b.a.sendBotEvent(e.payload);case 5:return t=n.sent,n.next=8,Object(ln.b)(te(t));case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.error("sendFeatureBotEventSaga error",n.t0);case 13:return n.prev=13,n.next=16,Object(ln.b)(Ut(!1));case 16:return n.finish(13);case 17:case"end":return n.stop()}}),On,null,[[0,10,13,17]])}var dn=Object(C.a)().mark(hn),fn=Object(C.a)().mark(vn),pn=Object(C.a)().mark(_n),mn=Object(C.a)().mark(xn),En=Object(C.a)().mark(Sn);function hn(e){var t,n,r,a;return Object(C.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload.type,c.prev=1,c.next=4,null===b.a||void 0===b.a?void 0:b.a.sendClientEvent({method:E.UPLOAD_FILE,params:{type:t}});case 4:if(r=c.sent,null!==(n=r.payload)&&void 0!==n&&n.record){c.next=7;break}return c.abrupt("return");case 7:return a=Object(l.a)({},r.payload.record),c.next=10,Object(ln.b)(Ye(a));case 10:c.next=15;break;case 12:c.prev=12,c.t0=c.catch(1),console.error("uploadFileSaga error: ".concat(c.t0));case 15:case"end":return c.stop()}}),dn,null,[[1,12]])}function vn(e){var t,n,r;return Object(C.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload.type,a.prev=1,a.next=4,null===b.a||void 0===b.a?void 0:b.a.sendClientEvent({method:E.UPLOAD_FILES,params:{type:t}});case 4:if((n=a.sent).payload.records.length){a.next=7;break}return a.abrupt("return");case 7:return r=n.payload.records,a.next=10,Object(ln.b)(We(r));case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(1),console.error("uploadFilesSaga error: ".concat(a.t0));case 15:case"end":return a.stop()}}),fn,null,[[1,12]])}function _n(e){var t;return Object(C.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(ln.b)(wt(!0));case 3:return n.next=5,null===b.a||void 0===b.a?void 0:b.a.sendClientEvent(e.payload);case 5:return t=n.sent,n.next=8,Object(ln.b)(tt(t));case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.error("sendExpressEventSaga error",n.t0);case 13:return n.prev=13,n.next=16,Object(ln.b)(wt(!1));case 16:return n.finish(13);case 17:case"end":return n.stop()}}),pn,null,[[0,10,13,17]])}function xn(e){var t;return Object(C.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(ln.b)(wt(!0));case 3:return n.next=5,Object(b.f)(e.payload);case 5:return t=n.sent,n.next=8,Object(ln.b)(tt(t));case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.error("sendMessageExpressEventSaga error",n.t0);case 13:return n.prev=13,n.next=16,Object(ln.b)(wt(!1));case 16:return n.finish(13);case 17:case"end":return n.stop()}}),mn,null,[[0,10,13,17]])}function Sn(){var e,t;return Object(C.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(b.d)(300);case 3:if(null===(t=n.sent)||void 0===t||null===(e=t.payload)||void 0===e||!e[D]){n.next=11;break}return n.next=7,Object(ln.b)(Dt("/".concat(U)));case 7:return n.next=9,Object(ln.b)(at(t));case 9:n.next=12;break;case 11:Dt("/");case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),console.error("sendExpressReadyEventSaga",n.t0);case 17:case"end":return n.stop()}}),En,null,[[0,14]])}var Tn=Object(C.a)().mark(Nn);function Nn(){return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ln.a)([Object(ln.c)(J,bn),Object(ln.c)(q,jn),Object(ln.c)(ke,_n),Object(ln.c)(Me,xn),Object(ln.c)(ze,Sn),Object(ln.c)(we,hn),Object(ln.c)(De,vn)]);case 2:case"end":return e.stop()}}),Tn)}var gn=Nn;n(157);i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(o.a,{store:function(){var e=Object(Zt.a)(),t=Object(Wt.a)(Lt),n=Object(qt.createStore)(sn,void 0,Object(Qt.composeWithDevTools)(Object(qt.applyMiddleware)(e,t)));return e.run(gn).toPromise().catch((function(e){return console.error("Saga error",e)})),n}(),children:Object(O.jsx)(s.a,{history:Lt,children:Object(O.jsx)(zt,{})})})}),document.getElementById("root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.33a4e392.chunk.js.map