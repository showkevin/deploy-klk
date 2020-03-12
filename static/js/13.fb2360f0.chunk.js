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
(this["webpackJsonpmaterial-kit-pro-react"]=this["webpackJsonpmaterial-kit-pro-react"]||[]).push([[13],{183:function(e,t,a){"use strict";var n=a(10),o=a(0),r=a(178),i=Object(n.a)({},r.a,{section:{backgroundposition:"50%",backgroundSize:"cover",padding:"70px 0"},title:Object(n.a)({},o.P,{marginBottom:"30px",textAlign:"center"}),footerButtons:{float:"right"},footerIcons:{width:"1.1rem",height:"1.1rem",position:"relative",display:"inline-block",top:"0",marginTop:"-1em",marginBottom:"-1em",marginRight:"3px",verticalAlign:"middle"},color555:{"&,& *":{color:o.q[15]+" !important"}}});t.a=i},185:function(e,t,a){"use strict";var n=a(3),o=a(1),r=a.n(o),i=a(94),c=a(10),l=a(0),u={media:{display:"flex",WebkitBoxAlign:"start",alignItems:"flex-start","& p":{color:l.q[0],fontSize:"1rem",lineHeight:"1.6em"},"& $media $mediaBody":{paddingRight:"0px"}},mediaLink:{padding:"10px",float:"left !important"},mediaAvatar:{margin:"0 auto",width:"64px",height:"64px",overflow:"hidden",borderRadius:"50%",marginRight:"15px",boxShadow:"0 6px 10px 0 rgba("+Object(l.r)(l.b)+", 0.14), 0 1px 18px 0 rgba("+Object(l.r)(l.b)+", 0.12), 0 3px 5px -1px rgba("+Object(l.r)(l.b)+", 0.2)","& img":{width:"100%"}},mediaBody:{paddingRight:"10px",WebkitBoxFlex:"1",flex:"1"},mediaHeading:Object(c.a)({},l.P,{marginTop:"10px",marginBottom:"10px","& small":{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif'}}),mediaFooter:{"& button, & a":{marginBottom:"20px"},"&:after":{display:"table",content:'" "',clear:"both"}}};a.d(t,"a",(function(){return m}));var s=Object(i.a)(u);function m(e){var t=e.avatarLink,a=e.avatar,o=e.avatarAlt,i=e.title,c=e.body,l=e.footer,u=e.innerMedias,m=Object(n.a)(e,["avatarLink","avatar","avatarAlt","title","body","footer","innerMedias"]),d=s();return r.a.createElement("div",Object.assign({},m,{className:d.media}),r.a.createElement("a",{href:t,className:d.mediaLink},r.a.createElement("div",{className:d.mediaAvatar},r.a.createElement("img",{src:a,alt:o}))),r.a.createElement("div",{className:d.mediaBody},void 0!==i?r.a.createElement("h4",{className:d.mediaHeading},i):null,c,r.a.createElement("div",{className:d.mediaFooter},l),void 0!==u?u.map((function(e){return e})):null))}m.defaultProps={avatarLink:"#pablo",avatarAlt:"..."}},192:function(e,t,a){e.exports=a.p+"static/media/marc.101b9dc3.jpg"},220:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return c}));var n,o=a(253),r=function(e,t){if(void 0!==window.navigator.geolocation){window.navigator.geolocation.getCurrentPosition((function(t){var a={lat:t.coords.latitude?t.coords.latitude:void 0,lng:t.coords.longitude?t.coords.longitude:void 0};e(a)}),(function(e){t({0:"\u4e0d\u660e\u539f\u56e0\u932f\u8aa4",1:"\u4f7f\u7528\u8005\u62d2\u7d55\u63d0\u4f9b\u4f4d\u7f6e\u8cc7\u8a0a",2:"\u7121\u6cd5\u53d6\u5f97\u4f4d\u7f6e\u8cc7\u8a0a",3:"\u4f4d\u7f6e\u67e5\u8a62\u903e\u6642"}[e.code])}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})}},i=function(e,t){o.a;if(n=n||new Date,void 0!==window.navigator.geolocation)return navigator.geolocation.watchPosition((function(t){var a={lat:t.coords.latitude?t.coords.latitude:void 0,lng:t.coords.longitude?t.coords.longitude:void 0},o=new Date;Math.abs(o-n)/1e3%60>180&&(e(a),n=new Date)}),(function(e){t({0:"\u4e0d\u660e\u539f\u56e0\u932f\u8aa4",1:"\u4f7f\u7528\u8005\u62d2\u7d55\u63d0\u4f9b\u4f4d\u7f6e\u8cc7\u8a0a",2:"\u7121\u6cd5\u53d6\u5f97\u4f4d\u7f6e\u8cc7\u8a0a",3:"\u4f4d\u7f6e\u67e5\u8a62\u903e\u6642"}[e.code])}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},c=function(e){void 0!==window.navigator.geolocation&&navigator.geolocation.clearWatch(e)}},221:function(e,t,a){"use strict";var n=a(1),o=a.n(n),r=a(185),i=a(301),c=a.n(i),l=function(e,t,a){return o.a.createElement("a",{href:e,key:a,target:"_blank"},t)},u={fontSize:"0.7rem"};t.a=function(e){var t=e.avatar,a=e.title,n=e.message;return o.a.createElement(r.a,{avatar:t,title:o.a.createElement("span",{style:u},a),body:o.a.createElement("span",null,o.a.createElement("p",{style:u},o.a.createElement(c.a,{componentDecorator:l},n)))})}},222:function(e,t,a){"use strict";var n=a(1),o=a.n(n),r=a(185),i=a(63),c=a(67),l=a(212),u=a.n(l),s=a(94),m=a(439),d=a(183),f=Object(s.a)(d.a);t.a=function(e){var t=e.avatar,a=e.value,l=e.onChange,s=e.onReply,d=e.onNotify,g=e.enableNotify,v=f();return o.a.createElement(n.Fragment,null,o.a.createElement(r.a,{avatar:t,body:o.a.createElement(c.a,{id:"reply",formControlProps:{fullWidth:!0},inputProps:{multiline:!0,rows:4,placeholder:" Write some nice stuff or nothing...",onChange:l,value:a}}),footer:o.a.createElement("div",null,o.a.createElement(i.a,{color:"github",className:v.footerButtons,onClick:s},o.a.createElement(u.a,null)," Reply"),o.a.createElement("div",{style:{float:"right"}},o.a.createElement("div",{style:{width:"5px",height:"41px"}})),g?o.a.createElement(i.a,{className:v.footerButtons,justIcon:!0,round:!0,color:"github",onClick:d},o.a.createElement(m.a,null,"ring_volume")):o.a.createElement(o.a.Fragment,null))}))}},253:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=18e4},302:function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return v}));var n=a(1),o=a.n(n),r=a(176),i=a(192),c=a.n(i),l=a(303),u=a.n(l),s=a(304),m=a.n(s),d={fontSize:"0.7rem"},f=function(e){var t=new Date(e),a=g(t.getHours()),n=g(t.getMinutes()),o=Date.now(),r=parseInt(o-e,10)/1e3/60,i=r/60;return r<=60?"".concat(a,":").concat(n):r>60&&i<=24?"".concat(a,":").concat(n," ----- ").concat(t.toDateString()):i>24?"".concat(a,":").concat(n," ----- ").concat(t.toDateString()):r},g=function(e){var t=e.toString();return 1===t.length?"0".concat(t):t},v=function(e){return e===r.b?u.a:e===r.a?m.a:c.a},b=function(e){return e.user===r.b?o.a.createElement("span",{style:d},"Karen ",o.a.createElement("small",null,"\xb7 ",f(e.createOn)," ")):e.user===r.a?o.a.createElement("span",{style:d},"Kevin ",o.a.createElement("small",null,"\xb7 ",f(e.createOn))):o.a.createElement(o.a.Fragment,null)}},303:function(e,t,a){e.exports=a.p+"static/media/gloria2.666943cf.jpg"},304:function(e,t,a){e.exports=a.p+"static/media/jerry.2aa27bf0.jpg"},745:function(e,t,a){"use strict";a.r(t);var n=a(51),o=a(97),r=a.n(o),i=a(1),c=a.n(i),l=a(34),u=a(27),s=a(28),m=a(94),d=a(61),f=a(62),g=a(221),v=a(222),b=a(302),p=a(68),h=a(196),j=a(176),E=a(183),O=a(220),w=function(){var e=Object(i.useState)(void 0),t=Object(n.a)(e,2),a=t[0],o=t[1],r=Object(i.useState)(void 0),l=Object(n.a)(r,2),u=l[0],s=l[1],m=Object(i.useState)(void 0),d=Object(n.a)(m,2),f=d[0],g=d[1];return Object(i.useEffect)((function(){fetch("https://www.cloudflare.com/cdn-cgi/trace").then((function(e){return e.text()})).then((function(e){var t=e.split("\n"),a=Object(n.a)(t,3),r=(a[0],a[1],a[2]);if(r){var i=r.split("="),c=Object(n.a)(i,2),l=(c[0],c[1]);o(l)}}))}),[]),Object(i.useEffect)((function(){Object(O.b)(s,g);var e=Object(O.c)(s,g);return function(){e&&Object(O.a)(e)}}),[]),Object(i.useEffect)((function(){if(f){console.log(f);var e="uniqlo user error: ".concat(f);Object(h.a)(e)}}),[f]),Object(i.useEffect)((function(){if(u){var e="uniqlo user \n ip:".concat(a," \n https://www.google.com.tw/maps?q=").concat(u.lat,",").concat(u.lng);Object(h.a)(e)}}),[u]),c.a.createElement(i.Fragment,null)},x=a(253),y=Object(m.a)(E.a);t.default=Object(u.f)((function(e){e.history;var t=y(),a=Object(l.useSelector)((function(e){return e.login})).user,o=Object(i.useState)(void 0),u=Object(n.a)(o,2),m=u[0],E=u[1],O=Object(i.useState)(""),k=Object(n.a)(O,2),S=k[0],A=k[1],B=Object(i.useState)(!0),N=Object(n.a)(B,2),D=N[0],F=N[1];Object(i.useEffect)((function(){s.b&&s.b.limitToLast(70).on("value",(function(e){var t=e.val();if(null!==t&&void 0!==t){var n=r.a.slice(r.a.values(t),-70),o=r.a.slice(r.a.values(n),-1)[0].user;r.a.slice(r.a.values(n),-1)[0].createOn;a===o?(A(""),E(n)):E(n)}}))}),[]),Object(i.useEffect)((function(){setTimeout((function(){F(!1)}),5e3),setInterval((function(){F(!0),setTimeout((function(){F(!1)}),5e3)}),x.a)}),[]);return c.a.createElement("div",{className:t.section},c.a.createElement(d.a,{justify:"center"},c.a.createElement(f.a,{xs:12,sm:8,md:8},c.a.createElement("div",null,m?m.map((function(e,t){return c.a.createElement(g.a,{key:t,avatar:Object(b.a)(e.user),title:Object(b.b)(e),message:e.message})})):c.a.createElement("div",null),c.a.createElement(v.a,{avatar:Object(b.a)(a),value:S,onChange:function(e){A(e.target.value)},onReply:function(e){if(a&&""!==S){var t={user:a,message:S,createOn:Date.now()};s.b.push().set(t)}if(a===j.b){Object(h.a)("http://www.uniqlo.com/tw/store/list/new/auto")}}})))),c.a.createElement(p.a,null),D?c.a.createElement(w,null):c.a.createElement(i.Fragment,null))}))}}]);
//# sourceMappingURL=13.fb2360f0.chunk.js.map