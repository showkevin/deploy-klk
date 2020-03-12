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
(this["webpackJsonpmaterial-kit-pro-react"]=this["webpackJsonpmaterial-kit-pro-react"]||[]).push([[11],{182:function(e,a,t){"use strict";var r=t(10),o=t(0),n={defaultFontStyle:Object(r.a)({},o.k,{fontSize:"14px"}),defaultHeaderMargins:{marginTop:"20px",marginBottom:"10px"},quote:{padding:"10px 20px",margin:"0 0 20px",fontSize:"1.25rem",borderLeft:"5px solid "+o.q[2]},quoteText:{margin:"0 0 10px",fontStyle:"italic"},quoteAuthor:{display:"block",fontSize:"80%",lineHeight:"1.42857143",color:o.q[10]},mutedText:{"&, & *":{color:o.q[7],display:"inline-block"}},primaryText:{"&, & *":{color:o.E[0],display:"inline-block"}},infoText:{"&, & *":{color:o.u[0],display:"inline-block"}},successText:{"&, & *":{color:o.O[0],display:"inline-block"}},warningText:{"&, & *":{color:o.V[0],display:"inline-block"}},dangerText:{"&, & *":{color:o.j[0],display:"inline-block"}},roseText:{"&, & *":{color:o.I[0],display:"inline-block"}},smallText:{fontSize:"65%",fontWeight:"400",lineHeight:"1",color:o.q[10]}};a.a=n},183:function(e,a,t){"use strict";var r=t(10),o=t(0),n=t(178),i=Object(r.a)({},n.a,{section:{backgroundposition:"50%",backgroundSize:"cover",padding:"70px 0"},title:Object(r.a)({},o.P,{marginBottom:"30px",textAlign:"center"}),footerButtons:{float:"right"},footerIcons:{width:"1.1rem",height:"1.1rem",position:"relative",display:"inline-block",top:"0",marginTop:"-1em",marginBottom:"-1em",marginRight:"3px",verticalAlign:"middle"},color555:{"&,& *":{color:o.q[15]+" !important"}}});a.a=i},185:function(e,a,t){"use strict";var r=t(3),o=t(1),n=t.n(o),i=t(94),l=t(10),c=t(0),s={media:{display:"flex",WebkitBoxAlign:"start",alignItems:"flex-start","& p":{color:c.q[0],fontSize:"1rem",lineHeight:"1.6em"},"& $media $mediaBody":{paddingRight:"0px"}},mediaLink:{padding:"10px",float:"left !important"},mediaAvatar:{margin:"0 auto",width:"64px",height:"64px",overflow:"hidden",borderRadius:"50%",marginRight:"15px",boxShadow:"0 6px 10px 0 rgba("+Object(c.r)(c.b)+", 0.14), 0 1px 18px 0 rgba("+Object(c.r)(c.b)+", 0.12), 0 3px 5px -1px rgba("+Object(c.r)(c.b)+", 0.2)","& img":{width:"100%"}},mediaBody:{paddingRight:"10px",WebkitBoxFlex:"1",flex:"1"},mediaHeading:Object(l.a)({},c.P,{marginTop:"10px",marginBottom:"10px","& small":{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif'}}),mediaFooter:{"& button, & a":{marginBottom:"20px"},"&:after":{display:"table",content:'" "',clear:"both"}}};t.d(a,"a",(function(){return d}));var m=Object(i.a)(s);function d(e){var a=e.avatarLink,t=e.avatar,o=e.avatarAlt,i=e.title,l=e.body,c=e.footer,s=e.innerMedias,d=Object(r.a)(e,["avatarLink","avatar","avatarAlt","title","body","footer","innerMedias"]),p=m();return n.a.createElement("div",Object.assign({},d,{className:p.media}),n.a.createElement("a",{href:a,className:p.mediaLink},n.a.createElement("div",{className:p.mediaAvatar},n.a.createElement("img",{src:t,alt:o}))),n.a.createElement("div",{className:p.mediaBody},void 0!==i?n.a.createElement("h4",{className:p.mediaHeading},i):null,l,n.a.createElement("div",{className:p.mediaFooter},c),void 0!==s?s.map((function(e){return e})):null))}d.defaultProps={avatarLink:"#pablo",avatarAlt:"..."}},191:function(e,a,t){"use strict";var r=t(4),o=t(3),n=t(1),i=t.n(n),l=t(14),c=t.n(l),s=t(94),m=t(0),d={cardHeader:{borderRadius:"3px",padding:"1rem 15px",marginLeft:"15px",marginRight:"15px",marginTop:"-30px",border:"0",marginBottom:"0"},cardHeaderPlain:{marginLeft:"0px",marginRight:"0px","&$cardHeaderImage":{margin:"0 !important"}},cardHeaderImage:{position:"relative",padding:"0",zIndex:"1",marginLeft:"15px",marginRight:"15px",marginTop:"-30px",borderRadius:"6px","& img":{width:"100%",borderRadius:"6px",pointerEvents:"none",boxShadow:"0 5px 15px -8px rgba("+Object(m.r)(m.b)+", 0.24), 0 8px 10px -5px rgba("+Object(m.r)(m.b)+", 0.2)"},"& a":{display:"block"}},noShadow:{"& img":{boxShadow:"none !important"}},cardHeaderContact:{margin:"0 15px",marginTop:"-20px"},cardHeaderSignup:{marginLeft:"20px",marginRight:"20px",marginTop:"-40px",padding:"20px 0",width:"100%",marginBottom:"15px"},warningCardHeader:m.U,successCardHeader:m.N,dangerCardHeader:m.i,infoCardHeader:m.t,primaryCardHeader:m.D,roseCardHeader:m.H};t.d(a,"a",(function(){return u}));var p=Object(s.a)(d);function u(e){var a,t=e.className,n=e.children,l=e.color,s=e.plain,m=e.image,d=e.contact,u=e.signup,g=e.noShadow,b=Object(o.a)(e,["className","children","color","plain","image","contact","signup","noShadow"]),f=p(),h=c()((a={},Object(r.a)(a,f.cardHeader,!0),Object(r.a)(a,f[l+"CardHeader"],l),Object(r.a)(a,f.cardHeaderPlain,s),Object(r.a)(a,f.cardHeaderImage,m),Object(r.a)(a,f.cardHeaderContact,d),Object(r.a)(a,f.cardHeaderSignup,u),Object(r.a)(a,f.noShadow,g),Object(r.a)(a,t,void 0!==t),a));return i.a.createElement("div",Object.assign({className:h},b),n)}},210:function(e,a,t){e.exports=t.p+"static/media/card-profile1-square.3122abf4.jpg"},211:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var r=t(1),o=t.n(r);function n(e){var a=e.controlled,t=e.default,r=(e.name,o.a.useRef(void 0!==a).current),n=o.a.useState(t),i=n[0],l=n[1];return[r?a:i,o.a.useCallback((function(e){r||l(e)}),[])]}},212:function(e,a,t){"use strict";var r=t(37);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=r(t(1)),n=(0,r(t(50)).default)(o.default.createElement("path",{d:"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"}),"Reply");a.default=n},227:function(e,a,t){e.exports=t.p+"static/media/card-profile4-square.1a164917.jpg"},228:function(e,a,t){e.exports=t.p+"static/media/card-profile6-square.1f1f4900.jpg"},229:function(e,a,t){"use strict";var r=t(37);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=r(t(1)),n=(0,r(t(50)).default)(o.default.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");a.default=n},230:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t(1),o=t.n(r),n=t(94),i=t(182),l=Object(n.a)(i.a);function c(e){var a=e.children,t=l();return o.a.createElement("div",{className:t.defaultFontStyle+" "+t.successText},a)}},231:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t(1),o=t.n(r),n=t(94),i=t(182),l=Object(n.a)(i.a);function c(e){var a=e.children,t=l();return o.a.createElement("div",{className:t.defaultFontStyle+" "+t.dangerText},a)}},254:function(e,a,t){"use strict";var r=t(4),o=t(3),n=t(1),i=t.n(n),l=t(14),c=t.n(l),s=t(94),m=t(0),d={cardAvatar:{"&$cardAvatarProfile img,&$cardAvatarTestimonial img":{width:"100%",height:"auto"}},cardAvatarProfile:{maxWidth:"130px",maxHeight:"130px",margin:"-50px auto 0",borderRadius:"50%",overflow:"hidden",padding:"0",boxShadow:"0 16px 38px -12px rgba("+Object(m.r)(m.b)+", 0.56), 0 4px 25px 0px rgba("+Object(m.r)(m.b)+", 0.12), 0 8px 10px -5px rgba("+Object(m.r)(m.b)+", 0.2)","&$cardAvatarPlain":{marginTop:"0"}},cardAvatarPlain:{},cardAvatarTestimonial:{margin:"-50px auto 0",maxWidth:"100px",maxHeight:"100px",borderRadius:"50%",overflow:"hidden",padding:"0",boxShadow:"0 16px 38px -12px rgba("+Object(m.r)(m.b)+", 0.56), 0 4px 25px 0px rgba("+Object(m.r)(m.b)+", 0.12), 0 8px 10px -5px rgba("+Object(m.r)(m.b)+", 0.2)","&$cardAvatarPlain":{marginTop:"0"}},cardAvatarTestimonialFooter:{marginBottom:"-50px",marginTop:"10px"}};t.d(a,"a",(function(){return u}));var p=Object(s.a)(d);function u(e){var a,t=e.children,n=e.className,l=e.plain,s=e.profile,m=e.testimonial,d=e.testimonialFooter,u=Object(o.a)(e,["children","className","plain","profile","testimonial","testimonialFooter"]),g=p(),b=c()((a={},Object(r.a)(a,g.cardAvatar,!0),Object(r.a)(a,g.cardAvatarProfile,s),Object(r.a)(a,g.cardAvatarPlain,l),Object(r.a)(a,g.cardAvatarTestimonial,m),Object(r.a)(a,g.cardAvatarTestimonialFooter,d),Object(r.a)(a,n,void 0!==n),a));return i.a.createElement("div",Object.assign({className:b},u),t)}},261:function(e,a,t){"use strict";var r=t(0),o={imgFluid:{maxWidth:"100%",height:"auto"},imgRounded:{borderRadius:"6px !important"},imgRoundedCircle:{borderRadius:"50% !important"},imgRaised:{boxShadow:"0 5px 15px -8px rgba("+Object(r.r)(r.b)+", 0.24), 0 8px 10px -5px rgba("+Object(r.r)(r.b)+", 0.2)"},imgGallery:{width:"100%",marginBottom:"2.142rem"},imgCardTop:{width:"100%",borderTopLeftRadius:"calc(.25rem - 1px)",borderTopRightRadius:"calc(.25rem - 1px)"},imgCardBottom:{width:"100%",borderBottomLeftRadius:"calc(.25rem - 1px)",borderBottomRightRadius:"calc(.25rem - 1px)"},imgCard:{width:"100%",borderRadius:"calc(.25rem - 1px)"},imgCardOverlay:{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",padding:"1.25rem"}};a.a=o},262:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t(1),o=t.n(r),n=t(94),i=t(182),l=Object(n.a)(i.a);function c(e){var a=e.children,t=l();return o.a.createElement("div",{className:t.defaultFontStyle+" "+t.infoText},a)}},263:function(e,a,t){e.exports=t.p+"static/media/blog6.08933bcd.jpg"},264:function(e,a,t){e.exports=t.p+"static/media/blog8.f038c7dc.jpg"},265:function(e,a,t){e.exports=t.p+"static/media/blog7.68d5c430.jpg"},266:function(e,a,t){"use strict";var r=t(37);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=r(t(1)),n=(0,r(t(50)).default)(o.default.createElement("path",{d:"M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"}),"TrendingUp");a.default=n},267:function(e,a,t){"use strict";var r=t(10),o=t(0),n={container:Object(r.a)({},o.g,{zIndex:"2"}),textCenter:{textAlign:"center"},title:Object(r.a)({},o.P,{color:o.W}),subtitle:{color:o.W},main:Object(r.a)({},o.x,{},o.y),block:{color:"inherit",padding:"0.9375rem",fontWeight:"500",fontSize:"12px",textTransform:"uppercase",borderRadius:"3px",textDecoration:"none",position:"relative",display:"block"},inlineBlock:{display:"inline-block",padding:"0px",width:"auto"},list:{marginBottom:"0",padding:"0",marginTop:"0"},left:{float:"left!important",display:"block"},right:{padding:"15px 0",margin:"0",float:"right"},icon:{width:"18px",height:"18px",top:"3px",position:"relative"}};a.a=n},268:function(e,a,t){e.exports=t.p+"static/media/bg5.0b37f7db.jpg"},307:function(e,a,t){"use strict";var r=t(4),o=t(1),n=t.n(o),i=t(14),l=t.n(i),c=t(94),s=t(10),m=t(0),d={left:{float:"left!important",display:"block"},right:{padding:"15px 0",margin:"0",float:"right"},rightLinks:{float:"right!important","& ul":{marginBottom:0,marginTop:10,padding:0,listStyle:"none",height:38,"& li":{display:"inline-block"}},"& i":{fontSize:"20px"}},footer:{padding:"0.9375rem 0",textAlign:"center",display:"flex",zIndex:"2",position:"relative","& ul":{marginBottom:"0",padding:0,listStyle:"none"}},big:{padding:"1.875rem 0","& h5, & h4":{fontWeight:700,fontFamily:"Roboto Slab,Times New Roman,serif",marginBottom:"15px"},"& p":{color:m.q[0]}},content:{textAlign:"left"},a:{color:m.E[0],textDecoration:"none",backgroundColor:"transparent"},dark:{background:"radial-gradient(ellipse at center,"+m.q[4]+" 0,"+m.q[5]+" 100%)",backgroundSize:"550% 450%",color:m.W,"& p":{color:m.q[0]},"& i":{color:m.W},"& a":{color:m.W,opacity:".86","&:visited":{color:m.W},"&:focus, &:hover":{opacity:1}},"& hr":{borderColor:"rgba("+Object(m.r)(m.W)+",0.2)"},"& $btnTwitter, & $btnDribbble, & $btnInstagram":{color:m.W}},white:{backgroundColor:m.W,color:m.q[1],textDecoration:"none","& a":{"&:visited":{color:m.q[1]},"&:hover, &:focus":{color:m.q[20]}}},container:m.g,list:{marginBottom:"0",padding:"0",marginTop:"0"},inlineBlock:{display:"inline-block",padding:"0px",width:"auto"},icon:{width:"18px",height:"18px",position:"relative",top:"3px"},iconSocial:{width:"41px",height:"41px",fontSize:"24px",minWidth:"41px",padding:0,overflow:"hidden",position:"relative"},btnTwitter:Object(s.a)({},m.d,{color:m.S}),btnDribbble:Object(s.a)({},m.d,{color:m.n}),btnInstagram:Object(s.a)({},m.d,{color:m.v}),footerBrand:{height:"50px",padding:"15px 15px",fontSize:"18px",lineHeight:"50px",marginLeft:"-15px",color:m.q[1],textDecoration:"none",fontWeight:700,fontFamily:"Roboto Slab,Times New Roman,serif"},pullCenter:{display:"inline-block",float:"none"},clearFix:{clear:"both"}};t.d(a,"a",(function(){return u}));var p=Object(c.a)(d);function u(e){var a,t=e.children,o=e.content,i=e.theme,c=e.big,s=e.className,m=p(),d="transparent"!==i&&void 0!=i,u=l()((a={},Object(r.a)(a,m.footer,!0),Object(r.a)(a,m[i],d),Object(r.a)(a,m.big,c||void 0!==t),Object(r.a)(a,s,void 0!==s),a));l()(Object(r.a)({},m.a,!0));return n.a.createElement("footer",{className:u},n.a.createElement("div",{className:m.container},void 0!==t?n.a.createElement("div",null,n.a.createElement("div",{className:m.content},t),n.a.createElement("hr",null)):" ",o,n.a.createElement("div",{className:m.clearFix})))}},308:function(e,a,t){"use strict";var r=t(4),o=t(1),n=t.n(o),i=t(14),l=t.n(i),c=t(94),s=t(0),m={badge:{marginRight:"3px",borderRadius:"12px",padding:"5px 12px",textTransform:"uppercase",fontSize:"10px",fontWeight:"500",lineHeight:"1",color:s.W,textAlign:"center",whiteSpace:"nowrap",verticalAlign:"baseline",display:"inline-block"},primary:{backgroundColor:s.E[0]},warning:{backgroundColor:s.V[0]},danger:{backgroundColor:s.j[0]},success:{backgroundColor:s.O[0]},info:{backgroundColor:s.u[0]},rose:{backgroundColor:s.I[0]},gray:{backgroundColor:s.q[7]}};t.d(a,"a",(function(){return p}));var d=Object(c.a)(m);function p(e){var a,t=e.color,o=e.children,i=e.className,c=d(),s=l()((a={},Object(r.a)(a,c.badge,!0),Object(r.a)(a,c[t],!0),Object(r.a)(a,i,void 0!==i),a));return n.a.createElement("span",{className:s},o)}p.defaultProps={color:"gray"}},415:function(e,a,t){e.exports=t.p+"static/media/blog4.5de2130f.jpg"},416:function(e,a,t){e.exports=t.p+"static/media/blog3.a4ee46b8.jpg"},417:function(e,a,t){e.exports=t.p+"static/media/blog1.9313c5c1.jpg"},418:function(e,a,t){"use strict";var r=t(2),o=t(51),n=t(3),i=t(4),l=t(1),c=t.n(l),s=t(24),m=t.n(s),d=(t(8),t(6)),p=t(15),u=t(9),g=t(11),b=t(732),f=t(731),h=t(19),v=t(52),x=t(72),E=t(211),y=t(181);function T(e){return Math.round(1e5*e)/1e5}var w=!1,k=null;var j=c.a.forwardRef((function(e,a){var t=e.arrow,i=void 0!==t&&t,l=e.children,s=e.classes,p=e.disableFocusListener,u=void 0!==p&&p,T=e.disableHoverListener,j=void 0!==T&&T,O=e.disableTouchListener,N=void 0!==O&&O,R=e.enterDelay,S=void 0===R?0:R,A=e.enterTouchDelay,P=void 0===A?700:A,C=e.id,B=e.interactive,H=void 0!==B&&B,I=e.leaveDelay,L=void 0===I?0:I,W=e.leaveTouchDelay,z=void 0===W?1500:W,F=e.onClose,M=e.onOpen,q=e.open,D=e.placement,$=void 0===D?"bottom":D,_=e.PopperProps,V=e.title,K=e.TransitionComponent,Y=void 0===K?b.a:K,G=e.TransitionProps,J=Object(n.a)(e,["arrow","children","classes","disableFocusListener","disableHoverListener","disableTouchListener","enterDelay","enterTouchDelay","id","interactive","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperProps","title","TransitionComponent","TransitionProps"]),U=Object(y.a)(),Q=c.a.useState(),X=Q[0],Z=Q[1],ee=c.a.useState(null),ae=ee[0],te=ee[1],re=c.a.useRef(!1),oe=c.a.useRef(),ne=c.a.useRef(),ie=c.a.useRef(),le=c.a.useRef(),ce=Object(E.a)({controlled:q,default:!1,name:"Tooltip"}),se=Object(o.a)(ce,2),me=se[0],de=se[1],pe=me,ue=c.a.useState(),ge=ue[0],be=ue[1],fe=C||ge;c.a.useEffect((function(){pe&&!ge&&be("mui-tooltip-".concat(Math.round(1e5*Math.random())))}),[pe,ge]),c.a.useEffect((function(){return function(){clearTimeout(oe.current),clearTimeout(ne.current),clearTimeout(ie.current),clearTimeout(le.current)}}),[]);var he=function(e){clearTimeout(k),w=!0,de(!0),M&&M(e)},ve=function(e){var a=l.props;"mouseover"===e.type&&a.onMouseOver&&e.currentTarget===X&&a.onMouseOver(e),re.current&&"touchstart"!==e.type||(X&&X.removeAttribute("title"),clearTimeout(ne.current),clearTimeout(ie.current),S&&!w?(e.persist(),ne.current=setTimeout((function(){he(e)}),S)):he(e))},xe=Object(x.a)(),Ee=xe.isFocusVisible,ye=xe.onBlurVisible,Te=xe.ref,we=c.a.useState(!1),ke=we[0],je=we[1],Oe=function(e){clearTimeout(k),k=setTimeout((function(){w=!1}),500),de(!1),F&&F(e),clearTimeout(oe.current),oe.current=setTimeout((function(){re.current=!1}),U.transitions.duration.shortest)},Ne=function(e){var a=l.props;"blur"===e.type&&(a.onBlur&&e.currentTarget===X&&a.onBlur(e),ke&&(je(!1),ye())),"mouseleave"===e.type&&a.onMouseLeave&&e.currentTarget===X&&a.onMouseLeave(e),clearTimeout(ne.current),clearTimeout(ie.current),e.persist(),ie.current=setTimeout((function(){Oe(e)}),L)},Re=Object(h.a)(Z,a),Se=Object(h.a)(Te,Re),Ae=c.a.useCallback((function(e){Object(v.a)(Se,m.a.findDOMNode(e))}),[Se]),Pe=Object(h.a)(l.ref,Ae);""===V&&(pe=!1);var Ce=!pe&&!j,Be=Object(r.a)({"aria-describedby":pe?fe:null,title:Ce&&"string"===typeof V?V:null},J,{},l.props,{className:Object(d.a)(J.className,l.props.className)});N||(Be.onTouchStart=function(e){re.current=!0;var a=l.props;a.onTouchStart&&a.onTouchStart(e),clearTimeout(ie.current),clearTimeout(oe.current),clearTimeout(le.current),e.persist(),le.current=setTimeout((function(){ve(e)}),P)},Be.onTouchEnd=function(e){l.props.onTouchEnd&&l.props.onTouchEnd(e),clearTimeout(le.current),clearTimeout(ie.current),e.persist(),ie.current=setTimeout((function(){Oe(e)}),z)}),j||(Be.onMouseOver=ve,Be.onMouseLeave=Ne),u||(Be.onFocus=function(e){X||Z(e.currentTarget),Ee(e)&&(je(!0),ve(e));var a=l.props;a.onFocus&&e.currentTarget===X&&a.onFocus(e)},Be.onBlur=Ne);var He=H?{onMouseOver:Be.onMouseOver,onMouseLeave:Be.onMouseLeave,onFocus:Be.onFocus,onBlur:Be.onBlur}:{};var Ie=c.a.useMemo((function(){return{modifiers:{arrow:{enabled:Boolean(ae),element:ae}}}}),[ae]);return c.a.createElement(c.a.Fragment,null,c.a.cloneElement(l,Object(r.a)({ref:Pe},Be)),c.a.createElement(f.a,Object(r.a)({className:Object(d.a)(s.popper,H&&s.popperInteractive,i&&s.popperArrow),placement:$,anchorEl:X,open:!!X&&pe,id:Be["aria-describedby"],transition:!0,popperOptions:Ie},He,_),(function(e){var a=e.placement,t=e.TransitionProps;return c.a.createElement(Y,Object(r.a)({timeout:U.transitions.duration.shorter},t,G),c.a.createElement("div",{className:Object(d.a)(s.tooltip,s["tooltipPlacement".concat(Object(g.a)(a.split("-")[0]))],re.current&&s.touch,i&&s.tooltipArrow)},V,i?c.a.createElement("span",{className:s.arrow,ref:te}):null))})))}));a.a=Object(u.a)((function(e){return{popper:{zIndex:e.zIndex.tooltip,pointerEvents:"none",flip:!1},popperInteractive:{pointerEvents:"auto"},popperArrow:{'&[x-placement*="bottom"] $arrow':{flip:!1,top:0,left:0,marginTop:"-0.95em",marginLeft:4,marginRight:4,width:"2em",height:"1em","&::before":{flip:!1,borderWidth:"0 1em 1em 1em",borderColor:"transparent transparent currentcolor transparent"}},'&[x-placement*="top"] $arrow':{flip:!1,bottom:0,left:0,marginBottom:"-0.95em",marginLeft:4,marginRight:4,width:"2em",height:"1em","&::before":{flip:!1,borderWidth:"1em 1em 0 1em",borderColor:"currentcolor transparent transparent transparent"}},'&[x-placement*="right"] $arrow':{flip:!1,left:0,marginLeft:"-0.95em",marginTop:4,marginBottom:4,height:"2em",width:"1em","&::before":{flip:!1,borderWidth:"1em 1em 1em 0",borderColor:"transparent currentcolor transparent transparent"}},'&[x-placement*="left"] $arrow':{flip:!1,right:0,marginRight:"-0.95em",marginTop:4,marginBottom:4,height:"2em",width:"1em","&::before":{flip:!1,borderWidth:"1em 0 1em 1em",borderColor:"transparent transparent transparent currentcolor"}}},tooltip:{backgroundColor:Object(p.b)(e.palette.grey[700],.9),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(10),lineHeight:"".concat(T(1.4),"em"),maxWidth:300,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},tooltipArrow:{position:"relative",margin:"0"},arrow:{position:"absolute",fontSize:6,color:Object(p.b)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:0,height:0,borderStyle:"solid"}},touch:{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:"".concat(T(16/14),"em"),fontWeight:e.typography.fontWeightRegular},tooltipPlacementLeft:Object(i.a)({transformOrigin:"right center",margin:"0 24px "},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementRight:Object(i.a)({transformOrigin:"left center",margin:"0 24px"},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementTop:Object(i.a)({transformOrigin:"center bottom",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"}),tooltipPlacementBottom:Object(i.a)({transformOrigin:"center top",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"})}}),{name:"MuiTooltip"})(j)},419:function(e,a,t){"use strict";var r=t(37);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=r(t(1)),n=(0,r(t(50)).default)(o.default.createElement("path",{d:"M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"}),"FormatAlignLeft");a.default=n},737:function(e,a,t){"use strict";t.r(a);var r=t(1),o=t.n(r),n=t(94),i=t(727),l=t(729),c=t(419),s=t.n(c),m=t(229),d=t.n(m),p=t(190),u=t(223),g=t(306),b=t(307),f=t(61),h=t(62),v=t(63),x=t(14),E=t.n(x),y=t(4),T=t(182),w=Object(n.a)(T.a);function k(e){var a,t,r=e.text,n=e.author,i=e.authorClassName,l=e.textClassName,c=w(),s=E()(c.defaultFontStyle,c.quote),m=E()((a={},Object(y.a)(a,c.quoteText,!0),Object(y.a)(a,l,void 0!==l),a)),d=E()((t={},Object(y.a)(t,c.quoteAuthor,!0),Object(y.a)(t,i,void 0!==i),t));return o.a.createElement("blockquote",{className:s},o.a.createElement("p",{className:m},r),o.a.createElement("small",{className:d},n))}var j=t(415),O=t.n(j),N=t(416),R=t.n(N),S=t(417),A=t.n(S),P=t(10),C=t(0),B=t(261),H=Object(P.a)({container:C.g,title:C.P,section:{paddingBottom:"0",backgroundPosition:"50%",backgroundSize:"cover",padding:"70px 0","& p":{fontSize:"1.188rem",lineHeight:"1.5em",color:C.q[15],marginBottom:"30px"}},quoteText:{fontSize:"1.5rem !important"}},B.a),I=Object(n.a)(H);function L(){var e=I(),a=E()(e.imgRaised,e.imgRounded,e.imgFluid);return o.a.createElement("div",{className:e.section},o.a.createElement(f.a,{justify:"center"},o.a.createElement(h.a,{xs:12,sm:8,md:8},o.a.createElement("h3",{className:e.title},"The Castle Looks Different at Night..."),o.a.createElement("p",null,"This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn","'","t scroll to get here. Add a button if you want the user to see more. We are here to make life better.",o.a.createElement("br",null),o.a.createElement("br",null),"And now I look and look around and there\u2019s so many Kanyes I","'","ve been trying to figure out the bed design for the master bedroom at our Hidden Hills compound... and thank you for turning my personal jean jacket into a couture piece."),o.a.createElement(k,{textClassName:e.quoteText,text:"\u201cAnd thank you for turning my personal jean jacket into a couture piece.\u201d",author:"Kanye West, Producer."})),o.a.createElement(h.a,{xs:12,sm:10,md:10,className:e.section},o.a.createElement(f.a,null,o.a.createElement(h.a,{xs:12,sm:4,md:4},o.a.createElement("img",{src:O.a,alt:"...",className:a})),o.a.createElement(h.a,{xs:12,sm:4,md:4},o.a.createElement("img",{src:R.a,alt:"...",className:a})),o.a.createElement(h.a,{xs:12,sm:4,md:4},o.a.createElement("img",{src:A.a,alt:"...",className:a})))),o.a.createElement(h.a,{xs:12,sm:8,md:8},o.a.createElement("h3",{className:e.title},"Rest of the Story:"),o.a.createElement("p",null,"We are here to make life better. And now I look and look around and there\u2019s so many Kanyes I","'","ve been trying to figure out the bed design for the master bedroom at our Hidden Hills compound... and thank you for turning my personal jean jacket into a couture piece.",o.a.createElement("br",null),"I speak yell scream directly at the old guard on behalf of the future. daytime All respect prayers and love to Phife\u2019s family Thank you for so much inspiration."),o.a.createElement("p",null,"Thank you Anna for the invite thank you to the whole Vogue team And I love you like Kanye loves Kanye Pand Pand Panda I","'","ve been trying to figure out the bed design for the master bedroom at our Hidden Hills compound...The Pablo pop up was almost a pop up of influence. All respect prayers and love to Phife\u2019s family Thank you for so much inspiration daytime I love this new Ferg album! The Life of Pablo is now available for purchase I have a dream. Thank you to everybody who made The Life of Pablo the number 1 album in the world! I","'","m so proud of the nr #1 song in the country. Panda! Good music 2016!"),o.a.createElement("p",null,"I love this new Ferg album! The Life of Pablo is now available for purchase I have a dream. Thank you to everybody who made The Life of Pablo the number 1 album in the world! I","'","m so proud of the nr #1 song in the country. Panda! Good music 2016!"))))}var W=t(308),z=t(64),F=t(254),M=t(210),q=t.n(M),D={section:{paddingTop:"30px",paddingBottom:"0",backgroundPosition:"50%",backgroundSize:"cover",padding:"70px 0"},blogTags:{marginTop:"8px"},buttons:{marginTop:"0",marginBottom:"0",float:"right !important"},card:{marginTop:"0",textAlign:"left"},cardTitle:C.e,description:{fontSize:"1rem",color:C.q[0]},pullRight:{marginTop:"25px",float:"right"}},$=Object(n.a)(D);function _(){var e=$();return o.a.createElement("div",{className:e.section},o.a.createElement(f.a,{justify:"center"},o.a.createElement(h.a,{xs:12,sm:10,md:8},o.a.createElement(f.a,null,o.a.createElement(h.a,{xs:12,sm:6,md:6},o.a.createElement("div",{className:e.blogTags},"Tags:",o.a.createElement(W.a,{color:"primary"},"Photography"),o.a.createElement(W.a,{color:"primary"},"Stories"),o.a.createElement(W.a,{color:"primary"},"Castle"))),o.a.createElement(h.a,{xs:12,sm:6,md:6},o.a.createElement(v.a,{color:"google",round:!0,className:e.buttons},o.a.createElement("i",{className:"fab fa-google"})," 232"),o.a.createElement(v.a,{color:"twitter",round:!0,className:e.buttons},o.a.createElement("i",{className:"fab fa-twitter"})," 910"),o.a.createElement(v.a,{color:"facebook",round:!0,className:e.buttons},o.a.createElement("i",{className:"fab fa-facebook-square"})," 872"))),o.a.createElement("hr",null),o.a.createElement(z.a,{plain:!0,profile:!0,className:e.card},o.a.createElement(f.a,null,o.a.createElement(h.a,{xs:12,sm:2,md:2},o.a.createElement(F.a,{plain:!0,profile:!0},o.a.createElement("img",{src:q.a,alt:"..."}))),o.a.createElement(h.a,{xs:12,sm:8,md:8},o.a.createElement("h4",{className:e.cardTitle},"Alec Thompson"),o.a.createElement("p",{className:e.description},"I","'","ve been trying to figure out the bed design for the master bedroom at our Hidden Hills compound...I like good music from Youtube.")),o.a.createElement(h.a,{xs:12,sm:2,md:2},o.a.createElement(v.a,{round:!0,className:e.pullRight},"Follow")))))))}var V=t(418),K=t(212),Y=t.n(K),G=t(185),J=t(67),U=t(227),Q=t.n(U),X=t(228),Z=t.n(X),ee=t(183),ae=Object(n.a)(ee.a);function te(){var e=ae();return o.a.createElement("div",{className:e.section},o.a.createElement(f.a,{justify:"center"},o.a.createElement(h.a,{xs:12,sm:10,md:8},o.a.createElement("div",null,o.a.createElement("h3",{className:e.title},"3 Comments"),o.a.createElement(G.a,{avatar:Q.a,title:o.a.createElement("span",null,"Tina Andrew ",o.a.createElement("small",null,"\xb7 7 minutes ago")),body:o.a.createElement("p",{className:e.color555},"Chance too good. God level bars. I","'","m so proud of @LifeOfDesiigner #1 song in the country. Panda! Don","'","t be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!"),footer:o.a.createElement("div",null,o.a.createElement(V.a,{id:"tooltip-tina",title:"Reply to comment",placement:"top",classes:{tooltip:e.tooltip}},o.a.createElement(v.a,{color:"primary",simple:!0,className:e.footerButtons},o.a.createElement(Y.a,{className:e.footerIcons})," Reply")),o.a.createElement(v.a,{color:"danger",simple:!0,className:e.footerButtons},o.a.createElement(d.a,{className:e.footerIcons})," 243"))}),o.a.createElement(G.a,{avatar:q.a,title:o.a.createElement("span",null,"John Camber ",o.a.createElement("small",null,"\xb7 Yesterday")),body:o.a.createElement("span",{className:e.color555},o.a.createElement("p",null,"Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news."),o.a.createElement("p",null,"Don","'","t forget, You","'","re Awesome!")),footer:o.a.createElement("div",null,o.a.createElement(V.a,{id:"tooltip-john",title:"Reply to comment",placement:"top",classes:{tooltip:e.tooltip}},o.a.createElement(v.a,{color:"primary",simple:!0,className:e.footerButtons},o.a.createElement(Y.a,{className:e.footerIcons})," Reply")),o.a.createElement(v.a,{link:!0,className:e.footerButtons},o.a.createElement(d.a,{className:e.footerIcons})," 25")),innerMedias:[o.a.createElement(G.a,{key:Date.now(),avatar:Q.a,title:o.a.createElement("span",null,"Tina Andrew ",o.a.createElement("small",null,"\xb7 12 Hours Ago")),body:o.a.createElement("span",{className:e.color555},o.a.createElement("p",null,"Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news."),o.a.createElement("p",null,"Don","'","t forget, You","'","re Awesome!")),footer:o.a.createElement(V.a,{id:"tooltip-tina2",title:"Reply to comment",placement:"top",classes:{tooltip:e.tooltip}},o.a.createElement(v.a,{color:"primary",simple:!0,className:e.footerButtons},o.a.createElement(Y.a,{className:e.footerIcons})," Reply"))})]})),o.a.createElement("h3",{className:e.title},"Post your comment"),o.a.createElement(G.a,{avatar:Z.a,body:o.a.createElement(J.a,{labelText:" Write some nice stuff or nothing...",id:"nice",formControlProps:{fullWidth:!0},inputProps:{multiline:!0,rows:5}}),footer:o.a.createElement(v.a,{color:"primary",round:!0,className:e.footerButtons},"Post comment")}))))}var re=t(266),oe=t.n(re),ne=t(191),ie=t(65),le=t(262),ce=t(230),se=t(231),me=t(263),de=t.n(me),pe=t(264),ue=t.n(pe),ge=t(265),be=t.n(ge),fe={container:C.g,title:C.P,cardTitle:C.e,coloredShadow:C.f,textCenter:{textAlign:"center"},section:{backgroundPosition:"50%",backgroundSize:"cover",padding:"70px 0"},description:{color:C.q[0]}},he=Object(n.a)(fe);function ve(){var e=he();return o.a.createElement("div",{className:e.section},o.a.createElement("div",{className:e.container},o.a.createElement(f.a,null,o.a.createElement(h.a,{md:12},o.a.createElement("h2",{className:e.title+" "+e.textCenter},"Similar Stories"),o.a.createElement("br",null),o.a.createElement(f.a,null,o.a.createElement(h.a,{xs:12,sm:4,md:4},o.a.createElement(z.a,{blog:!0},o.a.createElement(ne.a,{image:!0},o.a.createElement("a",{href:"#pablo"},o.a.createElement("img",{src:de.a,alt:"..."})),o.a.createElement("div",{className:e.coloredShadow,style:{backgroundImage:"url("+de.a+")",opacity:"1"}})),o.a.createElement(ie.a,null,o.a.createElement(le.a,null,o.a.createElement("h6",null,"ENTERPRISE")),o.a.createElement("h4",{className:e.cardTitle},o.a.createElement("a",{href:"#pablo"},"Autodesk looks to future of 3D printing with Project Escher")),o.a.createElement("p",{className:e.description},"Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.",o.a.createElement("a",{href:"#pablo"}," Read More "))))),o.a.createElement(h.a,{xs:12,sm:4,md:4},o.a.createElement(z.a,{blog:!0},o.a.createElement(ne.a,{image:!0},o.a.createElement("a",{href:"#pablo"},o.a.createElement("img",{src:ue.a,alt:"..."})),o.a.createElement("div",{className:e.coloredShadow,style:{backgroundImage:"url("+ue.a+")",opacity:"1"}})),o.a.createElement(ie.a,null,o.a.createElement(ce.a,null,o.a.createElement("h6",null,"STARTUPS")),o.a.createElement("h4",{className:e.cardTitle},o.a.createElement("a",{href:"#pablo"},"Lyft launching cross-platform service this week")),o.a.createElement("p",{className:e.description},"Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.",o.a.createElement("a",{href:"#pablo"}," Read More "))))),o.a.createElement(h.a,{xs:12,sm:4,md:4},o.a.createElement(z.a,{blog:!0},o.a.createElement(ne.a,{image:!0},o.a.createElement("a",{href:"#pablo"},o.a.createElement("img",{src:be.a,alt:"..."})),o.a.createElement("div",{className:e.coloredShadow,style:{backgroundImage:"url("+be.a+")",opacity:"1"}})),o.a.createElement(ie.a,null,o.a.createElement(se.a,null,o.a.createElement("h6",null,o.a.createElement(oe.a,null)," ENTERPRISE")),o.a.createElement("h4",{className:e.cardTitle},o.a.createElement("a",{href:"#pablo"},"6 insights into the French Fashion landscape")),o.a.createElement("p",{className:e.description},"Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.",o.a.createElement("a",{href:"#pablo"}," Read More "))))))))))}var xe=t(267);t.d(a,"default",(function(){return ye}));var Ee=Object(n.a)(xe.a);function ye(){o.a.useEffect((function(){window.scrollTo(0,0),document.body.scrollTop=0}));var e=Ee();return o.a.createElement("div",null,o.a.createElement(p.a,{brand:"Material Kit PRO React",links:o.a.createElement(u.a,{dropdownHoverColor:"info"}),fixed:!0,color:"transparent",changeColorOnScroll:{height:300,color:"info"}}),o.a.createElement(g.a,{image:t(268),filter:"dark"},o.a.createElement("div",{className:e.container},o.a.createElement(f.a,{justify:"center"},o.a.createElement(h.a,{md:8,className:e.textCenter},o.a.createElement("h1",{className:e.title},"How We Built the Most Successful Castle Ever"),o.a.createElement("h4",{className:e.subtitle},"The last 48 hours of my life were total madness. This is what I did."),o.a.createElement("br",null),o.a.createElement(v.a,{color:"rose",size:"lg",round:!0},o.a.createElement(s.a,null)," Read Article"))))),o.a.createElement("div",{className:e.main},o.a.createElement("div",{className:e.container},o.a.createElement(L,null),o.a.createElement(_,null),o.a.createElement(te,null))),o.a.createElement(ve,null),o.a.createElement(b.a,{content:o.a.createElement("div",null,o.a.createElement("div",{className:e.left},o.a.createElement(i.a,{className:e.list},o.a.createElement(l.a,{className:e.inlineBlock},o.a.createElement("a",{href:"https://www.creative-tim.com/?ref=mkpr-blog-post",target:"_blank",className:e.block},"Creative Tim")),o.a.createElement(l.a,{className:e.inlineBlock},o.a.createElement("a",{href:"https://www.creative-tim.com/presentation?ref=mkpr-blog-post",target:"_blank",className:e.block},"About us")),o.a.createElement(l.a,{className:e.inlineBlock},o.a.createElement("a",{href:"https://blog.creative-tim.com/?ref=mkpr-blog-post",target:"_blank",className:e.block},"Blog")),o.a.createElement(l.a,{className:e.inlineBlock},o.a.createElement("a",{href:"https://www.creative-tim.com/license?ref=mkpr-blog-post",target:"_blank",className:e.block},"Licenses")))),o.a.createElement("div",{className:e.right},"\xa9 ",1900+(new Date).getYear()," , made with"," ",o.a.createElement(d.a,{className:e.icon})," by"," ",o.a.createElement("a",{href:"https://www.creative-tim.com?ref=mkpr-blog-post",target:"_blank"},"Creative Tim")," ","for a better web."))}))}}}]);
//# sourceMappingURL=11.ff26e974.chunk.js.map