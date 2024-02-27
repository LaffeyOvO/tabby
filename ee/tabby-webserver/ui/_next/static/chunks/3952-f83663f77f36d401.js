"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3952],{80760:function(e,t,n){n.d(t,{u:function(){return r}});function r(e,[t,n]){return Math.min(n,Math.max(t,e))}},98608:function(e,t,n){let r;n.d(t,{VY:function(){return e$},ZA:function(){return eU},JO:function(){return eK},ck:function(){return eY},wU:function(){return eG},eT:function(){return eX},__:function(){return eq},h_:function(){return ez},fC:function(){return eB},Z0:function(){return eJ},xz:function(){return eN},B4:function(){return eF},l_:function(){return ej}});var l=n(13428),o=n(2265),i=n(54887),a=n(80760),u=n(85744),d=n(27733),s=n(42210),c=n(56989),p=n(65400),f=n(9381),v=n(16459),m=n(12488);let h="dismissableLayer.update",g=(0,o.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),w=(0,o.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:i=!1,onEscapeKeyDown:a,onPointerDownOutside:d,onFocusOutside:c,onInteractOutside:p,onDismiss:w,...E}=e,x=(0,o.useContext)(g),[C,S]=(0,o.useState)(null),P=null!==(n=null==C?void 0:C.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,D]=(0,o.useState)({}),R=(0,s.e)(t,e=>S(e)),_=Array.from(x.layers),[k]=[...x.layersWithOutsidePointerEventsDisabled].slice(-1),M=_.indexOf(k),T=C?_.indexOf(C):-1,O=x.layersWithOutsidePointerEventsDisabled.size>0,W=T>=M,I=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,v.W)(e),r=(0,o.useRef)(!1),l=(0,o.useRef)(()=>{});return(0,o.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function o(){b("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",l.current),l.current=o,t.addEventListener("click",l.current,{once:!0})):o()}r.current=!1},o=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",e),t.removeEventListener("click",l.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...x.branches].some(e=>e.contains(t));!W||n||(null==d||d(e),null==p||p(e),e.defaultPrevented||null==w||w())},P),V=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,v.W)(e),r=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{let e=e=>{e.target&&!r.current&&b("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target,n=[...x.branches].some(e=>e.contains(t));n||(null==c||c(e),null==p||p(e),e.defaultPrevented||null==w||w())},P);return(0,m.e)(e=>{let t=T===x.layers.size-1;t&&(null==a||a(e),!e.defaultPrevented&&w&&(e.preventDefault(),w()))},P),(0,o.useEffect)(()=>{if(C)return i&&(0===x.layersWithOutsidePointerEventsDisabled.size&&(r=P.body.style.pointerEvents,P.body.style.pointerEvents="none"),x.layersWithOutsidePointerEventsDisabled.add(C)),x.layers.add(C),y(),()=>{i&&1===x.layersWithOutsidePointerEventsDisabled.size&&(P.body.style.pointerEvents=r)}},[C,P,i,x]),(0,o.useEffect)(()=>()=>{C&&(x.layers.delete(C),x.layersWithOutsidePointerEventsDisabled.delete(C),y())},[C,x]),(0,o.useEffect)(()=>{let e=()=>D({});return document.addEventListener(h,e),()=>document.removeEventListener(h,e)},[]),(0,o.createElement)(f.WV.div,(0,l.Z)({},E,{ref:R,style:{pointerEvents:O?W?"auto":"none":void 0,...e.style},onFocusCapture:(0,u.M)(e.onFocusCapture,V.onFocusCapture),onBlurCapture:(0,u.M)(e.onBlurCapture,V.onBlurCapture),onPointerDownCapture:(0,u.M)(e.onPointerDownCapture,I.onPointerDownCapture)}))});function y(){let e=new CustomEvent(h);document.dispatchEvent(e)}function b(e,t,n,{discrete:r}){let l=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&l.addEventListener(e,t,{once:!0}),r?(0,f.jH)(l,o):l.dispatchEvent(o)}var E=n(31244),x=n(52759),C=n(20966),S=n(33136),P=n(73961),D=n(49473),R=n(99279),_=n(51030),k=n(94977);let M="Popper",[T,O]=(0,c.b)(M),[W,I]=T(M),V=(0,o.forwardRef)((e,t)=>{let{__scopePopper:n,virtualRef:r,...i}=e,a=I("PopperAnchor",n),u=(0,o.useRef)(null),d=(0,s.e)(t,u);return(0,o.useEffect)(()=>{a.onAnchorChange((null==r?void 0:r.current)||u.current)}),r?null:(0,o.createElement)(f.WV.div,(0,l.Z)({},i,{ref:d}))}),Z="PopperContent",[L,A]=T(Z),H=(0,o.forwardRef)((e,t)=>{var n,r,i,a,u,d,c,p;let{__scopePopper:m,side:h="bottom",sideOffset:g=0,align:w="center",alignOffset:y=0,arrowPadding:b=0,collisionBoundary:E=[],collisionPadding:x=0,sticky:C="partial",hideWhenDetached:R=!1,avoidCollisions:M=!0,onPlaced:T,...O}=e,W=I(Z,m),[V,A]=(0,o.useState)(null),H=(0,s.e)(t,e=>A(e)),[B,z]=(0,o.useState)(null),$=(0,k.t)(B),j=null!==(n=null==$?void 0:$.width)&&void 0!==n?n:0,U=null!==(r=null==$?void 0:$.height)&&void 0!==r?r:0,q="number"==typeof x?x:{top:0,right:0,bottom:0,left:0,...x},Y=Array.isArray(E)?E:[E],X=Y.length>0,G={padding:q,boundary:Y.filter(N),altBoundary:X},{refs:J,floatingStyles:Q,placement:ee,isPositioned:et,middlewareData:en}=(0,S.YF)({strategy:"fixed",placement:h+("center"!==w?"-"+w:""),whileElementsMounted:P.Me,elements:{reference:W.anchor},middleware:[(0,D.cv)({mainAxis:g+U,alignmentAxis:y}),M&&(0,D.uY)({mainAxis:!0,crossAxis:!1,limiter:"partial"===C?(0,D.dr)():void 0,...G}),M&&(0,D.RR)({...G}),(0,D.dp)({...G,apply:({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{let{width:l,height:o}=t.reference,i=e.floating.style;i.setProperty("--radix-popper-available-width",`${n}px`),i.setProperty("--radix-popper-available-height",`${r}px`),i.setProperty("--radix-popper-anchor-width",`${l}px`),i.setProperty("--radix-popper-anchor-height",`${o}px`)}}),B&&(0,S.x7)({element:B,padding:b}),F({arrowWidth:j,arrowHeight:U}),R&&(0,D.Cp)({strategy:"referenceHidden"})]}),[er,el]=K(ee),eo=(0,v.W)(T);(0,_.b)(()=>{et&&(null==eo||eo())},[et,eo]);let ei=null===(i=en.arrow)||void 0===i?void 0:i.x,ea=null===(a=en.arrow)||void 0===a?void 0:a.y,eu=(null===(u=en.arrow)||void 0===u?void 0:u.centerOffset)!==0,[ed,es]=(0,o.useState)();return(0,_.b)(()=>{V&&es(window.getComputedStyle(V).zIndex)},[V]),(0,o.createElement)("div",{ref:J.setFloating,"data-radix-popper-content-wrapper":"",style:{...Q,transform:et?Q.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ed,"--radix-popper-transform-origin":[null===(d=en.transformOrigin)||void 0===d?void 0:d.x,null===(c=en.transformOrigin)||void 0===c?void 0:c.y].join(" ")},dir:e.dir},(0,o.createElement)(L,{scope:m,placedSide:er,onArrowChange:z,arrowX:ei,arrowY:ea,shouldHideArrow:eu},(0,o.createElement)(f.WV.div,(0,l.Z)({"data-side":er,"data-align":el},O,{ref:H,style:{...O.style,animation:et?void 0:"none",opacity:null!==(p=en.hide)&&void 0!==p&&p.referenceHidden?0:void 0}}))))}),B={top:"bottom",right:"left",bottom:"top",left:"right"};function N(e){return null!==e}let F=e=>({name:"transformOrigin",options:e,fn(t){var n,r,l,o,i;let{placement:a,rects:u,middlewareData:d}=t,s=(null===(n=d.arrow)||void 0===n?void 0:n.centerOffset)!==0,c=s?0:e.arrowWidth,p=s?0:e.arrowHeight,[f,v]=K(a),m={start:"0%",center:"50%",end:"100%"}[v],h=(null!==(r=null===(l=d.arrow)||void 0===l?void 0:l.x)&&void 0!==r?r:0)+c/2,g=(null!==(o=null===(i=d.arrow)||void 0===i?void 0:i.y)&&void 0!==o?o:0)+p/2,w="",y="";return"bottom"===f?(w=s?m:`${h}px`,y=`${-p}px`):"top"===f?(w=s?m:`${h}px`,y=`${u.floating.height+p}px`):"right"===f?(w=`${-p}px`,y=s?m:`${g}px`):"left"===f&&(w=`${u.floating.width+p}px`,y=s?m:`${g}px`),{data:{x:w,y:y}}}});function K(e){let[t,n="center"]=e.split("-");return[t,n]}let z=e=>{let{__scopePopper:t,children:n}=e,[r,l]=(0,o.useState)(null);return(0,o.createElement)(W,{scope:t,anchor:r,onAnchorChange:l},n)},$=(0,o.forwardRef)((e,t)=>{var n;let{container:r=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...a}=e;return r?i.createPortal((0,o.createElement)(f.WV.div,(0,l.Z)({},a,{ref:t})),r):null});var j=n(67256),U=n(73763),q=n(85184),Y=n(8281),X=n(85859),G=n(17552);let J=[" ","Enter","ArrowUp","ArrowDown"],Q=[" ","Enter"],ee="Select",[et,en,er]=(0,d.B)(ee),[el,eo]=(0,c.b)(ee,[er,O]),ei=O(),[ea,eu]=el(ee),[ed,es]=el(ee),ec=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,disabled:r=!1,...i}=e,a=ei(n),d=eu("SelectTrigger",n),c=d.disabled||r,p=(0,s.e)(t,d.onTriggerChange),v=en(n),[m,h,g]=eA(e=>{let t=v().filter(e=>!e.disabled),n=t.find(e=>e.value===d.value),r=eH(t,e,n);void 0!==r&&d.onValueChange(r.value)}),w=()=>{c||(d.onOpenChange(!0),g())};return(0,o.createElement)(V,(0,l.Z)({asChild:!0},a),(0,o.createElement)(f.WV.button,(0,l.Z)({type:"button",role:"combobox","aria-controls":d.contentId,"aria-expanded":d.open,"aria-required":d.required,"aria-autocomplete":"none",dir:d.dir,"data-state":d.open?"open":"closed",disabled:c,"data-disabled":c?"":void 0,"data-placeholder":void 0===d.value?"":void 0},i,{ref:p,onClick:(0,u.M)(i.onClick,e=>{e.currentTarget.focus()}),onPointerDown:(0,u.M)(i.onPointerDown,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&(w(),d.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)},e.preventDefault())}),onKeyDown:(0,u.M)(i.onKeyDown,e=>{let t=""!==m.current,n=e.ctrlKey||e.altKey||e.metaKey;n||1!==e.key.length||h(e.key),(!t||" "!==e.key)&&J.includes(e.key)&&(w(),e.preventDefault())})})))}),ep=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,className:r,style:i,children:a,placeholder:u,...d}=e,c=eu("SelectValue",n),{onValueNodeHasChildrenChange:p}=c,v=void 0!==a,m=(0,s.e)(t,c.onValueNodeChange);return(0,_.b)(()=>{p(v)},[p,v]),(0,o.createElement)(f.WV.span,(0,l.Z)({},d,{ref:m,style:{pointerEvents:"none"}}),void 0===c.value&&void 0!==u?u:a)}),ef=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,children:r,...i}=e;return(0,o.createElement)(f.WV.span,(0,l.Z)({"aria-hidden":!0},i,{ref:t}),r||"▼")}),ev="SelectContent",em=(0,o.forwardRef)((e,t)=>{let n=eu(ev,e.__scopeSelect),[r,a]=(0,o.useState)();return((0,_.b)(()=>{a(new DocumentFragment)},[]),n.open)?(0,o.createElement)(ew,(0,l.Z)({},e,{ref:t})):r?(0,i.createPortal)((0,o.createElement)(eh,{scope:e.__scopeSelect},(0,o.createElement)(et.Slot,{scope:e.__scopeSelect},(0,o.createElement)("div",null,e.children))),r):null}),[eh,eg]=el(ev),ew=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,position:r="item-aligned",onCloseAutoFocus:i,onEscapeKeyDown:a,onPointerDownOutside:d,side:c,sideOffset:p,align:f,alignOffset:v,arrowPadding:m,collisionBoundary:h,collisionPadding:g,sticky:y,hideWhenDetached:b,avoidCollisions:C,...S}=e,P=eu(ev,n),[D,R]=(0,o.useState)(null),[_,k]=(0,o.useState)(null),M=(0,s.e)(t,e=>R(e)),[T,O]=(0,o.useState)(null),[W,I]=(0,o.useState)(null),V=en(n),[Z,L]=(0,o.useState)(!1),A=(0,o.useRef)(!1);(0,o.useEffect)(()=>{if(D)return(0,X.Ry)(D)},[D]),(0,E.EW)();let H=(0,o.useCallback)(e=>{let[t,...n]=V().map(e=>e.ref.current),[r]=n.slice(-1),l=document.activeElement;for(let n of e)if(n===l||(null==n||n.scrollIntoView({block:"nearest"}),n===t&&_&&(_.scrollTop=0),n===r&&_&&(_.scrollTop=_.scrollHeight),null==n||n.focus(),document.activeElement!==l))return},[V,_]),B=(0,o.useCallback)(()=>H([T,D]),[H,T,D]);(0,o.useEffect)(()=>{Z&&B()},[Z,B]);let{onOpenChange:N,triggerPointerDownPosRef:F}=P;(0,o.useEffect)(()=>{if(D){let e={x:0,y:0},t=t=>{var n,r,l,o;e={x:Math.abs(Math.round(t.pageX)-(null!==(n=null===(r=F.current)||void 0===r?void 0:r.x)&&void 0!==n?n:0)),y:Math.abs(Math.round(t.pageY)-(null!==(l=null===(o=F.current)||void 0===o?void 0:o.y)&&void 0!==l?l:0))}},n=n=>{e.x<=10&&e.y<=10?n.preventDefault():D.contains(n.target)||N(!1),document.removeEventListener("pointermove",t),F.current=null};return null!==F.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",n,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",n,{capture:!0})}}},[D,N,F]),(0,o.useEffect)(()=>{let e=()=>N(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}},[N]);let[K,z]=eA(e=>{let t=V().filter(e=>!e.disabled),n=t.find(e=>e.ref.current===document.activeElement),r=eH(t,e,n);r&&setTimeout(()=>r.ref.current.focus())}),$=(0,o.useCallback)((e,t,n)=>{let r=!A.current&&!n,l=void 0!==P.value&&P.value===t;(l||r)&&(O(e),r&&(A.current=!0))},[P.value]),U=(0,o.useCallback)(()=>null==D?void 0:D.focus(),[D]),q=(0,o.useCallback)((e,t,n)=>{let r=!A.current&&!n,l=void 0!==P.value&&P.value===t;(l||r)&&I(e)},[P.value]),Y="popper"===r?eb:ey,J=Y===eb?{side:c,sideOffset:p,align:f,alignOffset:v,arrowPadding:m,collisionBoundary:h,collisionPadding:g,sticky:y,hideWhenDetached:b,avoidCollisions:C}:{};return(0,o.createElement)(eh,{scope:n,content:D,viewport:_,onViewportChange:k,itemRefCallback:$,selectedItem:T,onItemLeave:U,itemTextRefCallback:q,focusSelectedItem:B,selectedItemText:W,position:r,isPositioned:Z,searchRef:K},(0,o.createElement)(G.Z,{as:j.g7,allowPinchZoom:!0},(0,o.createElement)(x.M,{asChild:!0,trapped:P.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,u.M)(i,e=>{var t;null===(t=P.trigger)||void 0===t||t.focus({preventScroll:!0}),e.preventDefault()})},(0,o.createElement)(w,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:a,onPointerDownOutside:d,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>P.onOpenChange(!1)},(0,o.createElement)(Y,(0,l.Z)({role:"listbox",id:P.contentId,"data-state":P.open?"open":"closed",dir:P.dir,onContextMenu:e=>e.preventDefault()},S,J,{onPlaced:()=>L(!0),ref:M,style:{display:"flex",flexDirection:"column",outline:"none",...S.style},onKeyDown:(0,u.M)(S.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||z(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=V().filter(e=>!e.disabled),n=t.map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(n=n.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let t=e.target,r=n.indexOf(t);n=n.slice(r+1)}setTimeout(()=>H(n)),e.preventDefault()}})}))))))}),ey=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,onPlaced:r,...i}=e,u=eu(ev,n),d=eg(ev,n),[c,p]=(0,o.useState)(null),[v,m]=(0,o.useState)(null),h=(0,s.e)(t,e=>m(e)),g=en(n),w=(0,o.useRef)(!1),y=(0,o.useRef)(!0),{viewport:b,selectedItem:E,selectedItemText:x,focusSelectedItem:C}=d,S=(0,o.useCallback)(()=>{if(u.trigger&&u.valueNode&&c&&v&&b&&E&&x){let e=u.trigger.getBoundingClientRect(),t=v.getBoundingClientRect(),n=u.valueNode.getBoundingClientRect(),l=x.getBoundingClientRect();if("rtl"!==u.dir){let r=l.left-t.left,o=n.left-r,i=e.left-o,u=e.width+i,d=Math.max(u,t.width),s=window.innerWidth-10,p=(0,a.u)(o,[10,s-d]);c.style.minWidth=u+"px",c.style.left=p+"px"}else{let r=t.right-l.right,o=window.innerWidth-n.right-r,i=window.innerWidth-e.right-o,u=e.width+i,d=Math.max(u,t.width),s=window.innerWidth-10,p=(0,a.u)(o,[10,s-d]);c.style.minWidth=u+"px",c.style.right=p+"px"}let o=g(),i=window.innerHeight-20,d=b.scrollHeight,s=window.getComputedStyle(v),p=parseInt(s.borderTopWidth,10),f=parseInt(s.paddingTop,10),m=parseInt(s.borderBottomWidth,10),h=parseInt(s.paddingBottom,10),y=p+f+d+h+m,C=Math.min(5*E.offsetHeight,y),S=window.getComputedStyle(b),P=parseInt(S.paddingTop,10),D=parseInt(S.paddingBottom,10),R=e.top+e.height/2-10,_=E.offsetHeight/2,k=E.offsetTop+_,M=p+f+k;if(M<=R){let e=E===o[o.length-1].ref.current;c.style.bottom="0px";let t=v.clientHeight-b.offsetTop-b.offsetHeight;c.style.height=M+Math.max(i-R,_+(e?D:0)+t+m)+"px"}else{let e=E===o[0].ref.current;c.style.top="0px";let t=Math.max(R,p+b.offsetTop+(e?P:0)+_);c.style.height=t+(y-M)+"px",b.scrollTop=M-R+b.offsetTop}c.style.margin="10px 0",c.style.minHeight=C+"px",c.style.maxHeight=i+"px",null==r||r(),requestAnimationFrame(()=>w.current=!0)}},[g,u.trigger,u.valueNode,c,v,b,E,x,u.dir,r]);(0,_.b)(()=>S(),[S]);let[P,D]=(0,o.useState)();(0,_.b)(()=>{v&&D(window.getComputedStyle(v).zIndex)},[v]);let R=(0,o.useCallback)(e=>{e&&!0===y.current&&(S(),null==C||C(),y.current=!1)},[S,C]);return(0,o.createElement)(eE,{scope:n,contentWrapper:c,shouldExpandOnScrollRef:w,onScrollButtonChange:R},(0,o.createElement)("div",{ref:p,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:P}},(0,o.createElement)(f.WV.div,(0,l.Z)({},i,{ref:h,style:{boxSizing:"border-box",maxHeight:"100%",...i.style}}))))}),eb=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,align:r="start",collisionPadding:i=10,...a}=e,u=ei(n);return(0,o.createElement)(H,(0,l.Z)({},u,a,{ref:t,align:r,collisionPadding:i,style:{boxSizing:"border-box",...a.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[eE,ex]=el(ev,{}),eC="SelectViewport",eS=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,...r}=e,i=eg(eC,n),a=ex(eC,n),d=(0,s.e)(t,i.onViewportChange),c=(0,o.useRef)(0);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),(0,o.createElement)(et.Slot,{scope:n},(0,o.createElement)(f.WV.div,(0,l.Z)({"data-radix-select-viewport":"",role:"presentation"},r,{ref:d,style:{position:"relative",flex:1,overflow:"auto",...r.style},onScroll:(0,u.M)(r.onScroll,e=>{let t=e.currentTarget,{contentWrapper:n,shouldExpandOnScrollRef:r}=a;if(null!=r&&r.current&&n){let e=Math.abs(c.current-t.scrollTop);if(e>0){let r=window.innerHeight-20,l=parseFloat(n.style.minHeight),o=parseFloat(n.style.height),i=Math.max(l,o);if(i<r){let l=i+e,o=Math.min(r,l),a=l-o;n.style.height=o+"px","0px"===n.style.bottom&&(t.scrollTop=a>0?a:0,n.style.justifyContent="flex-end")}}}c.current=t.scrollTop})}))))}),[eP,eD]=el("SelectGroup"),eR=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,...r}=e,i=(0,C.M)();return(0,o.createElement)(eP,{scope:n,id:i},(0,o.createElement)(f.WV.div,(0,l.Z)({role:"group","aria-labelledby":i},r,{ref:t})))}),e_=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,...r}=e,i=eD("SelectLabel",n);return(0,o.createElement)(f.WV.div,(0,l.Z)({id:i.id},r,{ref:t}))}),ek="SelectItem",[eM,eT]=el(ek),eO=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,value:r,disabled:i=!1,textValue:a,...d}=e,c=eu(ek,n),p=eg(ek,n),v=c.value===r,[m,h]=(0,o.useState)(null!=a?a:""),[g,w]=(0,o.useState)(!1),y=(0,s.e)(t,e=>{var t;return null===(t=p.itemRefCallback)||void 0===t?void 0:t.call(p,e,r,i)}),b=(0,C.M)(),E=()=>{i||(c.onValueChange(r),c.onOpenChange(!1))};return(0,o.createElement)(eM,{scope:n,value:r,disabled:i,textId:b,isSelected:v,onItemTextChange:(0,o.useCallback)(e=>{h(t=>{var n;return t||(null!==(n=null==e?void 0:e.textContent)&&void 0!==n?n:"").trim()})},[])},(0,o.createElement)(et.ItemSlot,{scope:n,value:r,disabled:i,textValue:m},(0,o.createElement)(f.WV.div,(0,l.Z)({role:"option","aria-labelledby":b,"data-highlighted":g?"":void 0,"aria-selected":v&&g,"data-state":v?"checked":"unchecked","aria-disabled":i||void 0,"data-disabled":i?"":void 0,tabIndex:i?void 0:-1},d,{ref:y,onFocus:(0,u.M)(d.onFocus,()=>w(!0)),onBlur:(0,u.M)(d.onBlur,()=>w(!1)),onPointerUp:(0,u.M)(d.onPointerUp,E),onPointerMove:(0,u.M)(d.onPointerMove,e=>{if(i){var t;null===(t=p.onItemLeave)||void 0===t||t.call(p)}else e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,u.M)(d.onPointerLeave,e=>{if(e.currentTarget===document.activeElement){var t;null===(t=p.onItemLeave)||void 0===t||t.call(p)}}),onKeyDown:(0,u.M)(d.onKeyDown,e=>{var t;let n=(null===(t=p.searchRef)||void 0===t?void 0:t.current)!=="";n&&" "===e.key||(Q.includes(e.key)&&E()," "===e.key&&e.preventDefault())})}))))}),eW="SelectItemText",eI=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,className:r,style:a,...u}=e,d=eu(eW,n),c=eg(eW,n),p=eT(eW,n),v=es(eW,n),[m,h]=(0,o.useState)(null),g=(0,s.e)(t,e=>h(e),p.onItemTextChange,e=>{var t;return null===(t=c.itemTextRefCallback)||void 0===t?void 0:t.call(c,e,p.value,p.disabled)}),w=null==m?void 0:m.textContent,y=(0,o.useMemo)(()=>(0,o.createElement)("option",{key:p.value,value:p.value,disabled:p.disabled},w),[p.disabled,p.value,w]),{onNativeOptionAdd:b,onNativeOptionRemove:E}=v;return(0,_.b)(()=>(b(y),()=>E(y)),[b,E,y]),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(f.WV.span,(0,l.Z)({id:p.textId},u,{ref:g})),p.isSelected&&d.valueNode&&!d.valueNodeHasChildren?(0,i.createPortal)(u.children,d.valueNode):null)}),eV=(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,...r}=e,i=eT("SelectItemIndicator",n);return i.isSelected?(0,o.createElement)(f.WV.span,(0,l.Z)({"aria-hidden":!0},r,{ref:t})):null}),eZ=((e,t)=>{let{__scopeSelect:n,onAutoScroll:r,...i}=e,a=eg("SelectScrollButton",n),d=(0,o.useRef)(null),s=en(n),c=(0,o.useCallback)(()=>{null!==d.current&&(window.clearInterval(d.current),d.current=null)},[]);return(0,o.useEffect)(()=>()=>c(),[c]),(0,_.b)(()=>{var e;let t=s().find(e=>e.ref.current===document.activeElement);null==t||null===(e=t.ref.current)||void 0===e||e.scrollIntoView({block:"nearest"})},[s]),(0,o.createElement)(f.WV.div,(0,l.Z)({"aria-hidden":!0},i,{ref:t,style:{flexShrink:0,...i.style},onPointerDown:(0,u.M)(i.onPointerDown,()=>{null===d.current&&(d.current=window.setInterval(r,50))}),onPointerMove:(0,u.M)(i.onPointerMove,()=>{var e;null===(e=a.onItemLeave)||void 0===e||e.call(a),null===d.current&&(d.current=window.setInterval(r,50))}),onPointerLeave:(0,u.M)(i.onPointerLeave,()=>{c()})}))},(0,o.forwardRef)((e,t)=>{let{__scopeSelect:n,...r}=e;return(0,o.createElement)(f.WV.div,(0,l.Z)({"aria-hidden":!0},r,{ref:t}))})),eL=(0,o.forwardRef)((e,t)=>{let{value:n,...r}=e,i=(0,o.useRef)(null),a=(0,s.e)(t,i),u=(0,q.D)(n);return(0,o.useEffect)(()=>{let e=i.current,t=window.HTMLSelectElement.prototype,r=Object.getOwnPropertyDescriptor(t,"value"),l=r.set;if(u!==n&&l){let t=new Event("change",{bubbles:!0});l.call(e,n),e.dispatchEvent(t)}},[u,n]),(0,o.createElement)(Y.T,{asChild:!0},(0,o.createElement)("select",(0,l.Z)({},r,{ref:a,defaultValue:n})))});function eA(e){let t=(0,v.W)(e),n=(0,o.useRef)(""),r=(0,o.useRef)(0),l=(0,o.useCallback)(e=>{let l=n.current+e;t(l),function e(t){n.current=t,window.clearTimeout(r.current),""!==t&&(r.current=window.setTimeout(()=>e(""),1e3))}(l)},[t]),i=(0,o.useCallback)(()=>{n.current="",window.clearTimeout(r.current)},[]);return(0,o.useEffect)(()=>()=>window.clearTimeout(r.current),[]),[n,l,i]}function eH(e,t,n){var r;let l=t.length>1&&Array.from(t).every(e=>e===t[0]),o=l?t[0]:t,i=n?e.indexOf(n):-1,a=(r=Math.max(i,0),e.map((t,n)=>e[(r+n)%e.length])),u=1===o.length;u&&(a=a.filter(e=>e!==n));let d=a.find(e=>e.textValue.toLowerCase().startsWith(o.toLowerCase()));return d!==n?d:void 0}eL.displayName="BubbleSelect";let eB=e=>{let{__scopeSelect:t,children:n,open:r,defaultOpen:l,onOpenChange:i,value:a,defaultValue:u,onValueChange:d,dir:s,name:c,autoComplete:f,disabled:v,required:m}=e,h=ei(t),[g,w]=(0,o.useState)(null),[y,b]=(0,o.useState)(null),[E,x]=(0,o.useState)(!1),S=(0,p.gm)(s),[P=!1,D]=(0,U.T)({prop:r,defaultProp:l,onChange:i}),[R,_]=(0,U.T)({prop:a,defaultProp:u,onChange:d}),k=(0,o.useRef)(null),M=!g||!!g.closest("form"),[T,O]=(0,o.useState)(new Set),W=Array.from(T).map(e=>e.props.value).join(";");return(0,o.createElement)(z,h,(0,o.createElement)(ea,{required:m,scope:t,trigger:g,onTriggerChange:w,valueNode:y,onValueNodeChange:b,valueNodeHasChildren:E,onValueNodeHasChildrenChange:x,contentId:(0,C.M)(),value:R,onValueChange:_,open:P,onOpenChange:D,dir:S,triggerPointerDownPosRef:k,disabled:v},(0,o.createElement)(et.Provider,{scope:t},(0,o.createElement)(ed,{scope:e.__scopeSelect,onNativeOptionAdd:(0,o.useCallback)(e=>{O(t=>new Set(t).add(e))},[]),onNativeOptionRemove:(0,o.useCallback)(e=>{O(t=>{let n=new Set(t);return n.delete(e),n})},[])},n)),M?(0,o.createElement)(eL,{key:W,"aria-hidden":!0,required:m,tabIndex:-1,name:c,autoComplete:f,value:R,onChange:e=>_(e.target.value),disabled:v},void 0===R?(0,o.createElement)("option",{value:""}):null,Array.from(T)):null))},eN=ec,eF=ep,eK=ef,ez=e=>(0,o.createElement)($,(0,l.Z)({asChild:!0},e)),e$=em,ej=eS,eU=eR,eq=e_,eY=eO,eX=eI,eG=eV,eJ=eZ},85184:function(e,t,n){n.d(t,{D:function(){return l}});var r=n(2265);function l(e){let t=(0,r.useRef)({value:e,previous:e});return(0,r.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},8281:function(e,t,n){n.d(t,{T:function(){return i},f:function(){return a}});var r=n(13428),l=n(2265),o=n(9381);let i=(0,l.forwardRef)((e,t)=>(0,l.createElement)(o.WV.span,(0,r.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),a=i},42910:function(e,t,n){var r=n(42123),l=n(97113),o=n(98220),i=n(5541),a=n(85222),u=n(55250),d=n(26343),s=n(2856),c=Object.prototype.hasOwnProperty;t.Z=function(e){if(null==e)return!0;if((0,a.Z)(e)&&((0,i.Z)(e)||"string"==typeof e||"function"==typeof e.splice||(0,u.Z)(e)||(0,s.Z)(e)||(0,o.Z)(e)))return!e.length;var t=(0,l.Z)(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if((0,d.Z)(e))return!(0,r.Z)(e).length;for(var n in e)if(c.call(e,n))return!1;return!0}}}]);