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
(this["webpackJsonpmaterial-kit-pro-react"]=this["webpackJsonpmaterial-kit-pro-react"]||[]).push([[0],{208:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(189),o=(n(2),n(64));function r(){return Object(i.a)()||o.a}},217:function(e,t,n){"use strict";var i=n(60);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(2)),r=(0,i(n(74)).default)(o.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=r},226:function(e,t,n){"use strict";function i(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return i}))},289:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var i=function(e){return e.scrollTop};function o(e,t){var n=e.timeout,i=e.style,o=void 0===i?{}:i;return{duration:o.transitionDuration||"number"===typeof n?n:n[t.mode]||0,delay:o.transitionDelay}}},344:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(226);function o(e){return Object(i.a)(e).defaultView||window}},345:function(e,t,n){"use strict";function i(){var e=document.createElement("div");e.style.width="99px",e.style.height="99px",e.style.position="absolute",e.style.top="-9999px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}n.d(t,"a",(function(){return i}))},346:function(e,t,n){"use strict";function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];e.apply(this,i),t.apply(this,i)}}),(function(){}))}n.d(t,"a",(function(){return i}))},811:function(e,t,n){"use strict";var i=n(11),o=n(8),r=n(2),a=(n(17),n(13)),s=n(18),c=r.forwardRef((function(e,t){var n=e.classes,s=e.className,c=e.component,u=void 0===c?"div":c,l=e.square,d=void 0!==l&&l,f=e.elevation,p=void 0===f?1:f,b=e.variant,v=void 0===b?"elevation":b,h=Object(i.a)(e,["classes","className","component","square","elevation","variant"]);return r.createElement(u,Object(o.a)({className:Object(a.a)(n.root,s,"outlined"===v?n.outlined:n["elevation".concat(p)],!d&&n.rounded),ref:t},h))}));t.a=Object(s.a)((function(e){var t={};return e.shadows.forEach((function(e,n){t["elevation".concat(n)]={boxShadow:e}})),Object(o.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(c)},815:function(e,t,n){"use strict";var i=n(8),o=n(11),r=n(2),a=(n(17),n(41)),s=n(95),c=n(844),u=n(35),l=n(208),d=n(90),f=n(289);function p(e,t){var n=function(e,t){var n,i=t.getBoundingClientRect();if(t.fakeTransform)n=t.fakeTransform;else{var o=window.getComputedStyle(t);n=o.getPropertyValue("-webkit-transform")||o.getPropertyValue("transform")}var r=0,a=0;if(n&&"none"!==n&&"string"===typeof n){var s=n.split("(")[1].split(")")[0].split(",");r=parseInt(s[4],10),a=parseInt(s[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(r-i.left,"px)"):"right"===e?"translateX(-".concat(i.left+i.width-r,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(a-i.top,"px)"):"translateY(-".concat(i.top+i.height-a,"px)")}(e,t);n&&(t.style.webkitTransform=n,t.style.transform=n)}var b={enter:d.b.enteringScreen,exit:d.b.leavingScreen},v=r.forwardRef((function(e,t){var n=e.children,d=e.direction,v=void 0===d?"down":d,h=e.in,m=e.onEnter,E=e.onEntered,x=e.onEntering,g=e.onExit,y=e.onExited,O=e.onExiting,k=e.style,j=e.timeout,w=void 0===j?b:j,C=e.TransitionComponent,R=void 0===C?c.a:C,T=Object(o.a)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),S=Object(l.a)(),N=r.useRef(null),D=r.useCallback((function(e){N.current=a.findDOMNode(e)}),[]),M=Object(u.a)(n.ref,D),I=Object(u.a)(M,t),P=function(e){return function(t){e&&(void 0===t?e(N.current):e(N.current,t))}},L=P((function(e,t){p(v,e),Object(f.b)(e),m&&m(e,t)})),A=P((function(e,t){var n=Object(f.a)({timeout:w,style:k},{mode:"enter"});e.style.webkitTransition=S.transitions.create("-webkit-transform",Object(i.a)({},n,{easing:S.transitions.easing.easeOut})),e.style.transition=S.transitions.create("transform",Object(i.a)({},n,{easing:S.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",x&&x(e,t)})),F=P(E),B=P(O),z=P((function(e){var t=Object(f.a)({timeout:w,style:k},{mode:"exit"});e.style.webkitTransition=S.transitions.create("-webkit-transform",Object(i.a)({},t,{easing:S.transitions.easing.sharp})),e.style.transition=S.transitions.create("transform",Object(i.a)({},t,{easing:S.transitions.easing.sharp})),p(v,e),g&&g(e)})),W=P((function(e){e.style.webkitTransition="",e.style.transition="",y&&y(e)})),K=r.useCallback((function(){N.current&&p(v,N.current)}),[v]);return r.useEffect((function(){if(!h&&"down"!==v&&"right"!==v){var e=Object(s.a)((function(){N.current&&p(v,N.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[v,h]),r.useEffect((function(){h||K()}),[h,K]),r.createElement(R,Object(i.a)({nodeRef:N,onEnter:L,onEntered:F,onEntering:A,onExit:z,onExited:W,onExiting:B,appear:!0,in:h,timeout:w},T),(function(e,t){return r.cloneElement(n,Object(i.a)({ref:I,style:Object(i.a)({visibility:"exited"!==e||h?void 0:"hidden"},k,n.props.style)},t))}))}));t.a=v},816:function(e,t,n){"use strict";var i=n(2),o=n(41),r=(n(17),n(77)),a=n(35);var s="undefined"!==typeof window?i.useLayoutEffect:i.useEffect,c=i.forwardRef((function(e,t){var n=e.children,c=e.container,u=e.disablePortal,l=void 0!==u&&u,d=e.onRendered,f=i.useState(null),p=f[0],b=f[1],v=Object(a.a)(i.isValidElement(n)?n.ref:null,t);return s((function(){l||b(function(e){return e="function"===typeof e?e():e,o.findDOMNode(e)}(c)||document.body)}),[c,l]),s((function(){if(p&&!l)return Object(r.a)(t,p),function(){Object(r.a)(t,null)}}),[t,p,l]),s((function(){d&&(p||l)&&d()}),[d,p,l]),l?i.isValidElement(n)?i.cloneElement(n,{ref:v}):n:p?o.createPortal(n,p):p}));t.a=c},817:function(e,t,n){"use strict";var i=n(8),o=n(11),r=n(2),a=(n(17),n(13)),s=n(18),c=n(818),u=r.forwardRef((function(e,t){var n=e.children,s=e.classes,u=e.className,l=e.invisible,d=void 0!==l&&l,f=e.open,p=e.transitionDuration,b=e.TransitionComponent,v=void 0===b?c.a:b,h=Object(o.a)(e,["children","classes","className","invisible","open","transitionDuration","TransitionComponent"]);return r.createElement(v,Object(i.a)({in:f,timeout:p},h),r.createElement("div",{className:Object(a.a)(s.root,u,d&&s.invisible),"aria-hidden":!0,ref:t},n))}));t.a=Object(s.a)({root:{zIndex:-1,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})(u)},818:function(e,t,n){"use strict";var i=n(8),o=n(93),r=n(11),a=n(2),s=(n(17),n(844)),c=n(90),u=n(208),l=n(289),d=n(35),f={entering:{opacity:1},entered:{opacity:1}},p={enter:c.b.enteringScreen,exit:c.b.leavingScreen},b=a.forwardRef((function(e,t){var n=e.children,c=e.disableStrictModeCompat,b=void 0!==c&&c,v=e.in,h=e.onEnter,m=e.onEntered,E=e.onEntering,x=e.onExit,g=e.onExited,y=e.onExiting,O=e.style,k=e.TransitionComponent,j=void 0===k?s.a:k,w=e.timeout,C=void 0===w?p:w,R=Object(r.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","TransitionComponent","timeout"]),T=Object(u.a)(),S=T.unstable_strictMode&&!b,N=a.useRef(null),D=Object(d.a)(n.ref,t),M=Object(d.a)(S?N:void 0,D),I=function(e){return function(t,n){if(e){var i=S?[N.current,t]:[t,n],r=Object(o.a)(i,2),a=r[0],s=r[1];void 0===s?e(a):e(a,s)}}},P=I(E),L=I((function(e,t){Object(l.b)(e);var n=Object(l.a)({style:O,timeout:C},{mode:"enter"});e.style.webkitTransition=T.transitions.create("opacity",n),e.style.transition=T.transitions.create("opacity",n),h&&h(e,t)})),A=I(m),F=I(y),B=I((function(e){var t=Object(l.a)({style:O,timeout:C},{mode:"exit"});e.style.webkitTransition=T.transitions.create("opacity",t),e.style.transition=T.transitions.create("opacity",t),x&&x(e)})),z=I(g);return a.createElement(j,Object(i.a)({appear:!0,in:v,nodeRef:S?N:void 0,onEnter:L,onEntered:A,onEntering:P,onExit:B,onExited:z,onExiting:F,timeout:C},R),(function(e,t){return a.cloneElement(n,Object(i.a)({style:Object(i.a)({opacity:0,visibility:"exited"!==e||v?void 0:"hidden"},f[e],O,n.props.style),ref:M},t))}))}));t.a=b},839:function(e,t,n){"use strict";var i=n(11),o=n(8),r=n(2),a=n(41),s=(n(17),n(189)),c=n(182),u=n(226),l=n(816),d=n(346),f=n(35),p=n(45),b=n(103);var v=n(66),h=n(48),m=n(345),E=n(344);function x(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function g(e){return parseInt(window.getComputedStyle(e)["padding-right"],10)||0}function y(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,r=[t,n].concat(Object(h.a)(i)),a=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(e.children,(function(e){1===e.nodeType&&-1===r.indexOf(e)&&-1===a.indexOf(e.tagName)&&x(e,o)}))}function O(e,t){var n=-1;return e.some((function(e,i){return!!t(e)&&(n=i,!0)})),n}function k(e,t){var n,i=[],o=[],r=e.container;if(!t.disableScrollLock){if(function(e){var t=Object(u.a)(e);return t.body===e?Object(E.a)(t).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(r)){var a=Object(m.a)();i.push({value:r.style.paddingRight,key:"padding-right",el:r}),r.style["padding-right"]="".concat(g(r)+a,"px"),n=Object(u.a)(r).querySelectorAll(".mui-fixed"),[].forEach.call(n,(function(e){o.push(e.style.paddingRight),e.style.paddingRight="".concat(g(e)+a,"px")}))}var s=r.parentElement,c="HTML"===s.nodeName&&"scroll"===window.getComputedStyle(s)["overflow-y"]?s:r;i.push({value:c.style.overflow,key:"overflow",el:c}),c.style.overflow="hidden"}return function(){n&&[].forEach.call(n,(function(e,t){o[t]?e.style.paddingRight=o[t]:e.style.removeProperty("padding-right")})),i.forEach((function(e){var t=e.value,n=e.el,i=e.key;t?n.style.setProperty(i,t):n.style.removeProperty(i)}))}}var j=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.modals=[],this.containers=[]}return Object(v.a)(e,[{key:"add",value:function(e,t){var n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&x(e.modalRef,!1);var i=function(e){var t=[];return[].forEach.call(e.children,(function(e){e.getAttribute&&"true"===e.getAttribute("aria-hidden")&&t.push(e)})),t}(t);y(t,e.mountNode,e.modalRef,i,!0);var o=O(this.containers,(function(e){return e.container===t}));return-1!==o?(this.containers[o].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblingNodes:i}),n)}},{key:"mount",value:function(e,t){var n=O(this.containers,(function(t){return-1!==t.modals.indexOf(e)})),i=this.containers[n];i.restore||(i.restore=k(i,t))}},{key:"remove",value:function(e){var t=this.modals.indexOf(e);if(-1===t)return t;var n=O(this.containers,(function(t){return-1!==t.modals.indexOf(e)})),i=this.containers[n];if(i.modals.splice(i.modals.indexOf(e),1),this.modals.splice(t,1),0===i.modals.length)i.restore&&i.restore(),e.modalRef&&x(e.modalRef,!0),y(i.container,e.mountNode,e.modalRef,i.hiddenSiblingNodes,!1),this.containers.splice(n,1);else{var o=i.modals[i.modals.length-1];o.modalRef&&x(o.modalRef,!1)}return t}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}();var w=function(e){var t=e.children,n=e.disableAutoFocus,i=void 0!==n&&n,o=e.disableEnforceFocus,s=void 0!==o&&o,c=e.disableRestoreFocus,l=void 0!==c&&c,d=e.getDoc,p=e.isEnabled,b=e.open,v=r.useRef(),h=r.useRef(null),m=r.useRef(null),E=r.useRef(),x=r.useRef(null),g=r.useCallback((function(e){x.current=a.findDOMNode(e)}),[]),y=Object(f.a)(t.ref,g),O=r.useRef();return r.useEffect((function(){O.current=b}),[b]),!O.current&&b&&"undefined"!==typeof window&&(E.current=d().activeElement),r.useEffect((function(){if(b){var e=Object(u.a)(x.current);i||!x.current||x.current.contains(e.activeElement)||(x.current.hasAttribute("tabIndex")||x.current.setAttribute("tabIndex",-1),x.current.focus());var t=function(){e.hasFocus()&&!s&&p()&&!v.current?x.current&&!x.current.contains(e.activeElement)&&x.current.focus():v.current=!1},n=function(t){!s&&p()&&9===t.keyCode&&e.activeElement===x.current&&(v.current=!0,t.shiftKey?m.current.focus():h.current.focus())};e.addEventListener("focus",t,!0),e.addEventListener("keydown",n,!0);var o=setInterval((function(){t()}),50);return function(){clearInterval(o),e.removeEventListener("focus",t,!0),e.removeEventListener("keydown",n,!0),l||(E.current&&E.current.focus&&E.current.focus(),E.current=null)}}}),[i,s,l,p,b]),r.createElement(r.Fragment,null,r.createElement("div",{tabIndex:0,ref:h,"data-test":"sentinelStart"}),r.cloneElement(t,{ref:y}),r.createElement("div",{tabIndex:0,ref:m,"data-test":"sentinelEnd"}))},C={root:{zIndex:-1,position:"fixed",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},R=r.forwardRef((function(e,t){var n=e.invisible,a=void 0!==n&&n,s=e.open,c=Object(i.a)(e,["invisible","open"]);return s?r.createElement("div",Object(o.a)({"aria-hidden":!0,ref:t},c,{style:Object(o.a)({},C.root,a?C.invisible:{},c.style)})):null}));var T=new j,S=r.forwardRef((function(e,t){var n=Object(s.a)(),v=Object(c.a)({name:"MuiModal",props:Object(o.a)({},e),theme:n}),h=v.BackdropComponent,m=void 0===h?R:h,E=v.BackdropProps,g=v.children,y=v.closeAfterTransition,O=void 0!==y&&y,k=v.container,j=v.disableAutoFocus,C=void 0!==j&&j,S=v.disableBackdropClick,N=void 0!==S&&S,D=v.disableEnforceFocus,M=void 0!==D&&D,I=v.disableEscapeKeyDown,P=void 0!==I&&I,L=v.disablePortal,A=void 0!==L&&L,F=v.disableRestoreFocus,B=void 0!==F&&F,z=v.disableScrollLock,W=void 0!==z&&z,K=v.hideBackdrop,H=void 0!==K&&K,V=v.keepMounted,X=void 0!==V&&V,U=v.manager,Y=void 0===U?T:U,q=v.onBackdropClick,_=v.onClose,G=v.onEscapeKeyDown,J=v.onRendered,Q=v.open,Z=Object(i.a)(v,["BackdropComponent","BackdropProps","children","closeAfterTransition","container","disableAutoFocus","disableBackdropClick","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onEscapeKeyDown","onRendered","open"]),$=r.useState(!0),ee=$[0],te=$[1],ne=r.useRef({}),ie=r.useRef(null),oe=r.useRef(null),re=Object(f.a)(oe,t),ae=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(v),se=function(){return Object(u.a)(ie.current)},ce=function(){return ne.current.modalRef=oe.current,ne.current.mountNode=ie.current,ne.current},ue=function(){Y.mount(ce(),{disableScrollLock:W}),oe.current.scrollTop=0},le=Object(p.a)((function(){var e=function(e){return e="function"===typeof e?e():e,a.findDOMNode(e)}(k)||se().body;Y.add(ce(),e),oe.current&&ue()})),de=r.useCallback((function(){return Y.isTopModal(ce())}),[Y]),fe=Object(p.a)((function(e){ie.current=e,e&&(J&&J(),Q&&de()?ue():x(oe.current,!0))})),pe=r.useCallback((function(){Y.remove(ce())}),[Y]);if(r.useEffect((function(){return function(){pe()}}),[pe]),r.useEffect((function(){Q?le():ae&&O||pe()}),[Q,pe,ae,O,le]),!X&&!Q&&(!ae||ee))return null;var be=function(e){return{root:{position:"fixed",zIndex:e.zIndex.modal,right:0,bottom:0,top:0,left:0},hidden:{visibility:"hidden"}}}(n||{zIndex:b.a}),ve={};return void 0===g.props.tabIndex&&(ve.tabIndex=g.props.tabIndex||"-1"),ae&&(ve.onEnter=Object(d.a)((function(){te(!1)}),g.props.onEnter),ve.onExited=Object(d.a)((function(){te(!0),O&&pe()}),g.props.onExited)),r.createElement(l.a,{ref:fe,container:k,disablePortal:A},r.createElement("div",Object(o.a)({ref:re,onKeyDown:function(e){"Escape"===e.key&&de()&&(G&&G(e),P||(e.stopPropagation(),_&&_(e,"escapeKeyDown")))},role:"presentation"},Z,{style:Object(o.a)({},be.root,!Q&&ee?be.hidden:{},Z.style)}),H?null:r.createElement(m,Object(o.a)({open:Q,onClick:function(e){e.target===e.currentTarget&&(q&&q(e),!N&&_&&_(e,"backdropClick"))}},E)),r.createElement(w,{disableEnforceFocus:M,disableAutoFocus:C,disableRestoreFocus:B,getDoc:se,isEnabled:de,open:Q},r.cloneElement(g,ve))))}));t.a=S},844:function(e,t,n){"use strict";var i=n(16),o=n(21),r=(n(17),n(2)),a=n.n(r),s=n(41),c=n.n(s),u=!1,l=n(81),d=function(e){function t(t,n){var i;i=e.call(this,t,n)||this;var o,r=n&&!n.isMounting?t.enter:t.appear;return i.appearStatus=null,t.in?r?(o="exited",i.appearStatus="entering"):o="entered":o=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",i.state={status:o},i.nextCallback=null,i}Object(o.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,i=this.props.timeout;return e=t=n=i,null!=i&&"number"!==typeof i&&(e=i.exit,t=i.enter,n=void 0!==i.appear?i.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,i=this.context?this.context.isMounting:e,o=this.props.nodeRef?[i]:[c.a.findDOMNode(this),i],r=o[0],a=o[1],s=this.getTimeouts(),l=i?s.appear:s.enter;!e&&!n||u?this.safeSetState({status:"entered"},(function(){t.props.onEntered(r)})):(this.props.onEnter(r,a),this.safeSetState({status:"entering"},(function(){t.props.onEntering(r,a),t.onTransitionEnd(l,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(r,a)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),i=this.props.nodeRef?void 0:c.a.findDOMNode(this);t&&!u?(this.props.onExit(i),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(i),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(i)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(i)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(i){n&&(n=!1,t.nextCallback=null,e(i))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:c.a.findDOMNode(this),i=null==e&&!this.props.addEndListener;if(n&&!i){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],r=o[0],a=o[1];this.props.addEndListener(r,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(i.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.a.createElement(l.a.Provider,{value:null},"function"===typeof n?n(e,o):a.a.cloneElement(a.a.Children.only(n),o))},t}(a.a.Component);function f(){}d.contextType=l.a,d.propTypes={},d.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:f,onEntering:f,onEntered:f,onExit:f,onExiting:f,onExited:f},d.UNMOUNTED="unmounted",d.EXITED="exited",d.ENTERING="entering",d.ENTERED="entered",d.EXITING="exiting";t.a=d}}]);
//# sourceMappingURL=0.f1acd89b.chunk.js.map