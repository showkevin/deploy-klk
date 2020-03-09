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
(this["webpackJsonpmaterial-kit-pro-react"]=this["webpackJsonpmaterial-kit-pro-react"]||[]).push([[15],{182:function(e,t,a){"use strict";var n=a(10),r=a(0),i=a(177),o=Object(n.a)({},i.a,{section:{backgroundposition:"50%",backgroundSize:"cover",padding:"70px 0"},title:Object(n.a)({},r.P,{marginBottom:"30px",textAlign:"center"}),footerButtons:{float:"right"},footerIcons:{width:"1.1rem",height:"1.1rem",position:"relative",display:"inline-block",top:"0",marginTop:"-1em",marginBottom:"-1em",marginRight:"3px",verticalAlign:"middle"},color555:{"&,& *":{color:r.q[15]+" !important"}}});t.a=o},185:function(e,t,a){"use strict";var n=a(3),r=a(1),i=a.n(r),o=a(94),l=a(10),c=a(0),s={media:{display:"flex",WebkitBoxAlign:"start",alignItems:"flex-start","& p":{color:c.q[0],fontSize:"1rem",lineHeight:"1.6em"},"& $media $mediaBody":{paddingRight:"0px"}},mediaLink:{padding:"10px",float:"left !important"},mediaAvatar:{margin:"0 auto",width:"64px",height:"64px",overflow:"hidden",borderRadius:"50%",marginRight:"15px",boxShadow:"0 6px 10px 0 rgba("+Object(c.r)(c.b)+", 0.14), 0 1px 18px 0 rgba("+Object(c.r)(c.b)+", 0.12), 0 3px 5px -1px rgba("+Object(c.r)(c.b)+", 0.2)","& img":{width:"100%"}},mediaBody:{paddingRight:"10px",WebkitBoxFlex:"1",flex:"1"},mediaHeading:Object(l.a)({},c.P,{marginTop:"10px",marginBottom:"10px","& small":{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif'}}),mediaFooter:{"& button, & a":{marginBottom:"20px"},"&:after":{display:"table",content:'" "',clear:"both"}}};a.d(t,"a",(function(){return u}));var m=Object(o.a)(s);function u(e){var t=e.avatarLink,a=e.avatar,r=e.avatarAlt,o=e.title,l=e.body,c=e.footer,s=e.innerMedias,u=Object(n.a)(e,["avatarLink","avatar","avatarAlt","title","body","footer","innerMedias"]),d=m();return i.a.createElement("div",Object.assign({},u,{className:d.media}),i.a.createElement("a",{href:t,className:d.mediaLink},i.a.createElement("div",{className:d.mediaAvatar},i.a.createElement("img",{src:a,alt:r}))),i.a.createElement("div",{className:d.mediaBody},void 0!==o?i.a.createElement("h4",{className:d.mediaHeading},o):null,l,i.a.createElement("div",{className:d.mediaFooter},c),void 0!==s?s.map((function(e){return e})):null))}u.defaultProps={avatarLink:"#pablo",avatarAlt:"..."}},192:function(e,t,a){e.exports=a.p+"static/media/marc.101b9dc3.jpg"},221:function(e,t,a){"use strict";var n=a(1),r=a.n(n),i=a(185),o=a(301),l=a.n(o),c=function(e,t,a){return r.a.createElement("a",{href:e,key:a,target:"_blank"},t)},s={fontSize:"0.7rem"};t.a=function(e){var t=e.avatar,a=e.title,n=e.message;return r.a.createElement(i.a,{avatar:t,title:r.a.createElement("span",{style:s},a),body:r.a.createElement("span",null,r.a.createElement("p",{style:s},r.a.createElement(l.a,{componentDecorator:c},n)))})}},222:function(e,t,a){"use strict";var n=a(1),r=a.n(n),i=a(185),o=a(63),l=a(67),c=a(212),s=a.n(c),m=a(94),u=a(437),d=a(182),p=Object(m.a)(d.a);t.a=function(e){var t=e.avatar,a=e.value,c=e.onChange,m=e.onReply,d=e.onNotify,f=e.enableNotify,g=p();return r.a.createElement(n.Fragment,null,r.a.createElement(i.a,{avatar:t,body:r.a.createElement(l.a,{id:"reply",formControlProps:{fullWidth:!0},inputProps:{multiline:!0,rows:4,placeholder:" Write some nice stuff or nothing...",onChange:c,value:a}}),footer:r.a.createElement("div",null,r.a.createElement(o.a,{color:"github",className:g.footerButtons,onClick:m},r.a.createElement(s.a,null)," Reply"),r.a.createElement("div",{style:{float:"right"}},r.a.createElement("div",{style:{width:"5px",height:"41px"}})),f?r.a.createElement(o.a,{className:g.footerButtons,justIcon:!0,round:!0,color:"github",onClick:d},r.a.createElement(u.a,null,"ring_volume")):r.a.createElement(r.a.Fragment,null))}))}},302:function(e,t,a){"use strict";a.d(t,"b",(function(){return v})),a.d(t,"a",(function(){return g}));var n=a(1),r=a.n(n),i=a(184),o=a(192),l=a.n(o),c=a(303),s=a.n(c),m=a(304),u=a.n(m),d={fontSize:"0.7rem"},p=function(e){var t=new Date(e),a=f(t.getHours()),n=f(t.getMinutes()),r=Date.now(),i=parseInt(r-e,10)/1e3/60,o=i/60;return i<=60?"".concat(a,":").concat(n):i>60&&o<=24?"".concat(a,":").concat(n," ----- ").concat(t.toDateString()):o>24?"".concat(a,":").concat(n," ----- ").concat(t.toDateString()):i},f=function(e){var t=e.toString();return 1===t.length?"0".concat(t):t},g=function(e){return e===i.b?s.a:e===i.a?u.a:l.a},v=function(e){return e.user===i.b?r.a.createElement("span",{style:d},"Karen ",r.a.createElement("small",null,"\xb7 ",p(e.createOn)," ")):e.user===i.a?r.a.createElement("span",{style:d},"Kevin ",r.a.createElement("small",null,"\xb7 ",p(e.createOn))):r.a.createElement(r.a.Fragment,null)}},303:function(e,t,a){e.exports=a.p+"static/media/gloria2.666943cf.jpg"},304:function(e,t,a){e.exports=a.p+"static/media/jerry.2aa27bf0.jpg"},733:function(e,t,a){"use strict";a.r(t);var n=a(51),r=a(97),i=a.n(r),o=a(1),l=a.n(o),c=a(35),s=a(27),m=a(28),u=a(94),d=a(61),p=a(62),f=a(221),g=a(222),v=a(302),b=a(68),E=a(182),h=Object(u.a)(E.a);t.default=Object(s.f)((function(e){e.history;var t=h(),a=Object(c.useSelector)((function(e){return e.login})).user,r=Object(o.useState)(void 0),s=Object(n.a)(r,2),u=s[0],E=s[1],x=Object(o.useState)(""),y=Object(n.a)(x,2),j=y[0],O=y[1];Object(o.useEffect)((function(){m.b&&m.b.limitToLast(70).on("value",(function(e){var t=e.val();if(null!==t&&void 0!==t){var n=i.a.slice(i.a.values(t),-70),r=i.a.slice(i.a.values(n),-1)[0].user;i.a.slice(i.a.values(n),-1)[0].createOn;a===r?(O(""),E(n)):E(n)}}))}),[]);return l.a.createElement("div",{className:t.section},l.a.createElement(d.a,{justify:"center"},l.a.createElement(p.a,{xs:12,sm:8,md:8},l.a.createElement("div",null,u?u.map((function(e,t){return l.a.createElement(f.a,{key:t,avatar:Object(v.a)(e.user),title:Object(v.b)(e),message:e.message})})):l.a.createElement("div",null),l.a.createElement(g.a,{avatar:Object(v.a)(a),value:j,onChange:function(e){O(e.target.value)},onReply:function(e){if(a&&""!==j){var t={user:a,message:j,createOn:Date.now()};m.b.push().set(t)}}})))),l.a.createElement(b.a,null))}))}}]);
//# sourceMappingURL=15.33d469c5.chunk.js.map