/*!

=========================================================
* Now UI Kit PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-pro-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
(this["webpackJsonpmaterial-kit-pro-react"]=this["webpackJsonpmaterial-kit-pro-react"]||[]).push([[19],{830:function(e,t,a){"use strict";a.r(t);var n=a(57),c=a(111),r=a.n(c),s=a(1),i=a.n(s),u=a(38),l=a(10),o=a(28),f=a(107),v=a(67),b=a(68),m=a(276),O=a(275),j=a(431),d=a(74),p=a(207),g=a(72),h=a(77),E=Object(f.a)(p.a);t.default=Object(l.f)((function(e){e.history;var t=E(),a=Object(u.useSelector)((function(e){return e.login})).user,c=Object(s.useState)(void 0),l=Object(n.a)(c,2),f=l[0],p=l[1],y=Object(s.useState)(""),k=Object(n.a)(y,2),w=k[0],S=k[1],I=Object(s.useState)(""),U=Object(n.a)(I,2),x=U[0],D=U[1],J=Object(u.useSelector)((function(e){return e.chat})).maxMessageNumber;Object(s.useEffect)((function(){o.b&&void 0!==J&&o.b.limitToLast(J).on("value",(function(e){M(e)}))}),[J]),Object(s.useEffect)((function(){if(a&&x&&""!==x){var e={user:a,message:"".concat(x),createOn:Date.now()};o.b.push().set(e)}}),[x]);var M=function(e){var t=e.val();if(null!==t&&void 0!==t){var n=r.a.slice(r.a.values(t),-J);n.forEach((function(e){var a=r.a.pickBy(t,(function(t,a){return t.createOn===e.createOn}));if(a){var n=Object.keys(a)[0];e.id=n}}));var c=r.a.slice(r.a.values(n),-1)[0].user;r.a.slice(r.a.values(n),-1)[0].createOn;a===c?(S(""),p(n)):p(n)}},N=function(e,t){try{if(e)window.confirm("\u662f\u5426\u522a\u9664?")&&o.c.ref("chatMsg/".concat(e)).remove(),t&&clearInterval(t);else console.log("msgId not exist")}catch(a){console.log(a)}};return i.a.createElement("div",{className:t.section},i.a.createElement(v.a,{justify:"center"},i.a.createElement(b.a,{xs:12,sm:8,md:8},i.a.createElement("div",null,f?f.map((function(e,t){return i.a.createElement(m.a,{key:t,avatar:Object(j.a)(e.user),title:Object(j.b)(e),message:e.message,id:e.id,event:N})})):i.a.createElement("div",null),i.a.createElement(O.a,{avatar:Object(j.a)(a),value:w,onChange:function(e){S(e.target.value)},onReply:function(e){if(a&&""!==w){var t={user:a,message:w,createOn:Date.now()};o.b.push().set(t)}},onUpdate:function(e){if(a){var t=J+1;Object(g.a)(h.a,t)}},enableUpdate:!0,setReplyImageUrl:D,enableImageUpload:!0})))),i.a.createElement(d.a,null))}))}}]);
//# sourceMappingURL=19.ffb2b9f1.chunk.js.map