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
(this["webpackJsonpmaterial-kit-pro-react"]=this["webpackJsonpmaterial-kit-pro-react"]||[]).push([[18],{101:function(e,t,a){"use strict";var n=a(28),o=a(0),r=a.n(o),i=a(68),l=a.n(i),c=a(702),s=a(724),u=a(741),m=a(738),d=a(159),p=a.n(d),f=a(130),v=a.n(f),b=a(12),h=a(65),g={disabled:{"&:before":{backgroundColor:"transparent !important"}},underline:{"&:hover:not($disabled):before,&:before":{borderBottomColor:h.q[11]+" !important",borderBottomWidth:"1px !important"},"&:after":{borderBottomColor:h.E[0]}},underlineError:{"&:after":{borderBottomColor:h.j[0]}},underlineSuccess:{"&:after":{borderBottomColor:h.O[0]}},labelRoot:Object(b.a)({},h.k,{color:h.q[12]+" !important",fontWeight:"400",fontSize:"14px",lineHeight:"1.42857",top:"10px",letterSpacing:"unset","& + $underline":{marginTop:"0px"}}),labelRootError:{color:h.j[0]+" !important"},labelRootSuccess:{color:h.O[0]+" !important"},feedback:{position:"absolute",bottom:"4px",right:"0",zIndex:"2",display:"block",width:"24px",height:"24px",textAlign:"center",pointerEvents:"none"},formControl:{margin:"0 0 17px 0",paddingTop:"27px",position:"relative","& svg,& .fab,& .far,& .fal,& .fas,& .material-icons":{color:h.q[13]}},whiteUnderline:{"&:hover:not($disabled):before,&:before":{borderBottomColor:h.W},"&:after":{borderBottomColor:h.W}},input:{color:h.q[13],height:"unset","&,&::placeholder":{fontSize:"14px",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"400",lineHeight:"1.42857",opacity:"1"},"&::placeholder":{color:h.q[12]}},whiteInput:{"&,&::placeholder":{color:h.W,opacity:"1"}}};a.d(t,"a",(function(){return k}));var y=Object(c.a)(g);function k(e){var t,a,o,i,c=e.formControlProps,d=e.labelText,f=e.id,b=e.labelProps,h=e.inputProps,g=e.error,k=e.white,E=e.inputRootCustomClasses,x=e.success,w=y(),O=l()((t={},Object(n.a)(t," "+w.labelRootError,g),Object(n.a)(t," "+w.labelRootSuccess,x&&!g),t)),C=l()((a={},Object(n.a)(a,w.underlineError,g),Object(n.a)(a,w.underlineSuccess,x&&!g),Object(n.a)(a,w.underline,!0),Object(n.a)(a,w.whiteUnderline,k),a)),M=l()(Object(n.a)({},E,void 0!==E)),j=l()((o={},Object(n.a)(o,w.input,!0),Object(n.a)(o,w.whiteInput,k),o));return i=void 0!==c?l()(c.className,w.formControl):w.formControl,r.a.createElement(s.a,Object.assign({},c,{className:i}),void 0!==d?r.a.createElement(u.a,Object.assign({className:w.labelRoot+" "+O,htmlFor:f},b),d):null,r.a.createElement(m.a,Object.assign({classes:{input:j,root:M,disabled:w.disabled,underline:C},id:f},h)),g?r.a.createElement(p.a,{className:w.feedback+" "+w.labelRootError}):x?r.a.createElement(v.a,{className:w.feedback+" "+w.labelRootSuccess}):null)}},117:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=(a(118),r||{});r.addFloaty=function(e,t){if(e){var a=document.getElementById(e);a.className+=" floaty",this.makeFloaty(a,t)}else{var n=document.createElement("div");n.className+=" floaty",document.body.appendChild(n),this.makeFloaty(n,t)}},r.makeFloaty=function(e,t){var a=new r.floaty(e);t&&(t.onTouchStart&&(a.onTouchStart=t.onTouchStart),t.onTouchEnd&&(a.onTouchEnd=t.onTouchEnd),t.onTouchMove&&(a.onTouchMove=t.onTouchMove),t.onMouseOver&&(a.onMouseOver=t.onMouseOver),t.onMouseDown&&(a.onMouseDown=t.onMouseDown),t.onMouseUp&&(a.onMouseUp=t.onMouseUp),t.onMouseMove&&(a.onMouseMove=t.onMouseMove),t.onActivate&&(a.onActivate=t.onActivate)),a.addEventListener("mouseover",r.makeMouseoverCallback(a)),a.addEventListener("mousedown",r.makeMousedownCallback(a)),a.addEventListener("touchstart",r.makeTouchstartCallback(a),!1),a.addEventListener("mouseup",r.makeMouseupCallback(a)),a.addEventListener("touchend",r.makeTouchEndCallback(a),!1),a.addEventListener("mousemove",r.makeMousemoveCallback(a)),a.addEventListener("touchmove",r.makeTouchmoveCallback(a),!1)},r.pixelToInt=function(e){var t=e.split("px");return parseFloat(t[0])},r.makeMouseoverCallback=function(e){return function(){e.mouse_over=!0,e.onMouseOver(e)}},r.makeMousedownCallback=function(e){return function(){e.mouse_clicked=!0,e.activate=!0,e.addClass("active"),e.onMouseDown(e)}},r.makeTouchstartCallback=function(e){return function(){e.mouse_clicked=!0,e.activate=!0,e.addClass("active"),e.onTouchStart(e)}},r.makeMouseupCallback=function(e){return function(){if(e.mouse_clicked=!1,e.removeClass("active"),e.activate)e.onActivate(e),this.activate=!1;else{var t=e.calcMinDirection();e.snapback_interval=setInterval(e.snapback,10,e,t)}e.onMouseUp(e)}},r.makeTouchEndCallback=function(e){return function(){if(e.mouse_clicked=!1,e.removeClass("active"),e.activate)e.onActivate(e),this.activate=!1;else{var t=e.calcMinDirection();e.snapback_interval=setInterval(e.snapback,10,e,t)}e.onTouchEnd(e)}},r.makeMousemoveCallback=function(e){return function(t){t.preventDefault(),e.mouse_clicked&&(e.updatePosition(t.clientX,t.clientY),e.activate=!1),e.onMouseMove(e)}},r.makeTouchmoveCallback=function(e){return function(t){t.preventDefault(),e.mouse_clicked&&(e.updatePosition(t.changedTouches[0].clientX,t.changedTouches[0].clientY),e.activate=!1),e.onTouchMove(e)}},r.floaty=function(e){this.element=e,this.mouse_over=!1,this.mouse_click=!1,this.activate=!1,this.snapback_interval=null},r.floaty.prototype.onActivate=function(){},r.floaty.prototype.onTouchStart=function(){},r.floaty.prototype.onTouchEnd=function(){},r.floaty.prototype.onTouchMove=function(){},r.floaty.prototype.onMouseDown=function(){},r.floaty.prototype.onMouseUp=function(){},r.floaty.prototype.onMouseMove=function(){},r.floaty.prototype.onMouseOver=function(){},r.floaty.prototype.updatePosition=function(e,t){this.element.style.left=e-this.element.clientWidth/2+"px";var a=this.element.clientHeight;this.element.style.top=t-a/2+"px"},r.floaty.prototype.addEventListener=function(e,t){this.element.addEventListener(e,t)},r.floaty.prototype.removeClass=function(e){var t=new RegExp("(?:^|\\s)"+e+"(?!\\S)","g");this.element.className=this.element.className.replace(t,"")},r.floaty.prototype.hasClass=function(e){var t=new RegExp("(?:^|\\s)"+e+"(?!\\S)","g");return null!=this.element.className.match(t)},r.floaty.prototype.addClass=function(e){this.element.className+=" "+e},r.floaty.prototype.calcMinDirection=function(){var e=this.element.clientHeight,t=r.pixelToInt(this.element.style.left),a=r.pixelToInt(this.element.style.top),n=t,o="left";return window.innerWidth-t<n&&(n=window.innerWidth-t,o="right"),a<50&&(o="top"),window.innerHeight-a<e+50&&(o="bottom"),o},r.floaty.prototype.snapback=function(e,t){var a=r.pixelToInt(e.element.style.left),n=r.pixelToInt(e.element.style.top),o=e.element.clientWidth,i=e.element.clientHeight;(a<=.5&&a>=-.5||n<=.5&&n>=-.5||n+i>=window.innerHeight-.5&&n+i<=window.innerHeight+.5||a+o>=window.innerWidth-.5&&a+o<=window.innerWidth+.5||e.mouse_clicked)&&clearInterval(e.snapback_interval),"left"===t&&(a-=a/10,e.element.style.left=a+"px"),"right"===t&&(a-=(a+o-window.innerWidth)/10,e.element.style.left=a+"px"),"top"===t&&(n-=n/10,e.element.style.top=n+"px"),"bottom"===t&&(n-=(n+i-window.innerHeight)/10,e.element.style.top=n+"px")},document.addEventListener("DOMContentLoaded",(function(e){for(var t=document.getElementsByClassName("floaty"),a=0;a<t.length;a++)r.makeFloaty(t.item(a))}));t.a=function(){Object(n.useEffect)((function(){for(var e=document.getElementsByClassName("floaty"),t=0;t<e.length;t++)r.makeFloaty(e.item(t))}),[]);return o.a.createElement("div",{id:"gotop",className:"btn floaty",title:"Go to top",onClick:function(e){window.location.href="about:blank"}})}},118:function(e,t,a){},124:function(e,t,a){"use strict";var n=a(12),o=a(65),r=a(95),i=Object(n.a)({},r.a,{section:{backgroundposition:"50%",backgroundSize:"cover",padding:"70px 0"},title:Object(n.a)({},o.P,{marginBottom:"30px",textAlign:"center"}),footerButtons:{float:"right"},footerIcons:{width:"1.1rem",height:"1.1rem",position:"relative",display:"inline-block",top:"0",marginTop:"-1em",marginBottom:"-1em",marginRight:"3px",verticalAlign:"middle"},color555:{"&,& *":{color:o.q[15]+" !important"}}});t.a=i},126:function(e,t,a){"use strict";var n=a(66),o=a(0),r=a.n(o),i=a(702),l=a(12),c=a(65),s={media:{display:"flex",WebkitBoxAlign:"start",alignItems:"flex-start","& p":{color:c.q[0],fontSize:"1rem",lineHeight:"1.6em"},"& $media $mediaBody":{paddingRight:"0px"}},mediaLink:{padding:"10px",float:"left !important"},mediaAvatar:{margin:"0 auto",width:"64px",height:"64px",overflow:"hidden",borderRadius:"50%",marginRight:"15px",boxShadow:"0 6px 10px 0 rgba("+Object(c.r)(c.b)+", 0.14), 0 1px 18px 0 rgba("+Object(c.r)(c.b)+", 0.12), 0 3px 5px -1px rgba("+Object(c.r)(c.b)+", 0.2)","& img":{width:"100%"}},mediaBody:{paddingRight:"10px",WebkitBoxFlex:"1",flex:"1"},mediaHeading:Object(l.a)({},c.P,{marginTop:"10px",marginBottom:"10px","& small":{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif'}}),mediaFooter:{"& button, & a":{marginBottom:"20px"},"&:after":{display:"table",content:'" "',clear:"both"}}};a.d(t,"a",(function(){return m}));var u=Object(i.a)(s);function m(e){var t=e.avatarLink,a=e.avatar,o=e.avatarAlt,i=e.title,l=e.body,c=e.footer,s=e.innerMedias,m=Object(n.a)(e,["avatarLink","avatar","avatarAlt","title","body","footer","innerMedias"]),d=u();return r.a.createElement("div",Object.assign({},m,{className:d.media}),r.a.createElement("a",{href:t,className:d.mediaLink},r.a.createElement("div",{className:d.mediaAvatar},r.a.createElement("img",{src:a,alt:o}))),r.a.createElement("div",{className:d.mediaBody},void 0!==i?r.a.createElement("h4",{className:d.mediaHeading},i):null,l,r.a.createElement("div",{className:d.mediaFooter},c),void 0!==s?s.map((function(e){return e})):null))}m.defaultProps={avatarLink:"#pablo",avatarAlt:"..."}},160:function(e,t,a){e.exports=a.p+"static/media/marc.101b9dc3.jpg"},274:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(126),i=a(533),l=a.n(i),c=function(e,t,a){return o.a.createElement("a",{href:e,key:a,target:"_blank"},t)},s={fontSize:"0.7rem"};t.a=function(e){var t=e.avatar,a=e.title,n=e.message;return o.a.createElement(r.a,{avatar:t,title:o.a.createElement("span",{style:s},a),body:o.a.createElement("span",null,o.a.createElement("p",{style:s},o.a.createElement(l.a,{componentDecorator:c},n)))})}},275:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(126),i=a(81),l=a(101),c=a(214),s=a.n(c),u=a(702),m=a(559),d=a(124),p=Object(u.a)(d.a);t.a=function(e){var t=e.avatar,a=e.value,c=e.onChange,u=e.onReply,d=e.onNotify,f=e.enableNotify,v=p();return o.a.createElement(n.Fragment,null,o.a.createElement(r.a,{avatar:t,body:o.a.createElement(l.a,{id:"reply",formControlProps:{fullWidth:!0},inputProps:{multiline:!0,rows:4,placeholder:" Write some nice stuff or nothing...",onChange:c,value:a}}),footer:o.a.createElement("div",null,o.a.createElement(i.a,{color:"github",className:v.footerButtons,onClick:u},o.a.createElement(s.a,null)," Reply"),o.a.createElement("div",{style:{float:"right"}},o.a.createElement("div",{style:{width:"5px",height:"41px"}})),f?o.a.createElement(i.a,{className:v.footerButtons,justIcon:!0,round:!0,color:"github",onClick:d},o.a.createElement(m.a,null,"ring_volume")):o.a.createElement(o.a.Fragment,null))}))}},534:function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return v}));var n=a(0),o=a.n(n),r=a(125),i=a(160),l=a.n(i),c=a(535),s=a.n(c),u=a(536),m=a.n(u),d={fontSize:"0.7rem"},p=function(e){var t=new Date(e),a=f(t.getHours()),n=f(t.getMinutes()),o=Date.now(),r=parseInt(o-e,10)/1e3/60,i=r/60;return r<=60?"".concat(a,":").concat(n):r>60&&i<=24?"".concat(a,":").concat(n," ----- ").concat(t.toDateString()):i>24?"".concat(a,":").concat(n," ----- ").concat(t.toDateString()):r},f=function(e){var t=e.toString();return 1===t.length?"0".concat(t):t},v=function(e){return e===r.b?s.a:e===r.a?m.a:l.a},b=function(e){return e.user===r.b?o.a.createElement("span",{style:d},"Karen ",o.a.createElement("small",null,"\xb7 ",p(e.createOn)," ")):e.user===r.a?o.a.createElement("span",{style:d},"Kevin ",o.a.createElement("small",null,"\xb7 ",p(e.createOn))):o.a.createElement(o.a.Fragment,null)}},535:function(e,t,a){e.exports=a.p+"static/media/gloria2.666943cf.jpg"},536:function(e,t,a){e.exports=a.p+"static/media/jerry.2aa27bf0.jpg"},726:function(e,t,a){"use strict";a.r(t);var n=a(85),o=a(203),r=a.n(o),i=a(0),l=a.n(i),c=a(20),s=a(9),u=a(119),m=a(702),d=a(82),p=a(83),f=a(274),v=a(275),b=a(534),h=a(117),g=a(124),y=Object(m.a)(g.a);t.default=Object(s.f)((function(e){e.history;var t=y(),a=Object(c.useSelector)((function(e){return e.login})).user,o=Object(i.useState)(void 0),s=Object(n.a)(o,2),m=s[0],g=s[1],k=Object(i.useState)(""),E=Object(n.a)(k,2),x=E[0],w=E[1];Object(i.useEffect)((function(){u.b&&u.b.limitToLast(70).on("value",(function(e){var t=e.val();if(null!==t&&void 0!==t){var n=r.a.slice(r.a.values(t),-70),o=r.a.slice(r.a.values(n),-1)[0].user;r.a.slice(r.a.values(n),-1)[0].createOn;a===o?(w(""),g(n)):g(n)}}))}),[]);return l.a.createElement("div",{className:t.section},l.a.createElement(d.a,{justify:"center"},l.a.createElement(p.a,{xs:12,sm:8,md:8},l.a.createElement("div",null,m?m.map((function(e,t){return l.a.createElement(f.a,{key:t,avatar:Object(b.a)(e.user),title:Object(b.b)(e),message:e.message})})):l.a.createElement("div",null),l.a.createElement(v.a,{avatar:Object(b.a)(a),value:x,onChange:function(e){w(e.target.value)},onReply:function(e){if(a&&""!==x){var t={user:a,message:x,createOn:Date.now()};u.b.push().set(t)}}})))),l.a.createElement(h.a,null))}))}}]);
//# sourceMappingURL=18.d6243abf.chunk.js.map