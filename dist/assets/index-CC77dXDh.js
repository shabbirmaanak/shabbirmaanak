(function(){const z=document.createElement("link").relList;if(z&&z.supports&&z.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))M(b);new MutationObserver(b=>{for(const v of b)if(v.type==="childList")for(const C of v.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&M(C)}).observe(document,{childList:!0,subtree:!0});function d(b){const v={};return b.integrity&&(v.integrity=b.integrity),b.referrerPolicy&&(v.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?v.credentials="include":b.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function M(b){if(b.ep)return;b.ep=!0;const v=d(b);fetch(b.href,v)}})();function Bc(h){return h&&h.__esModule&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h}var Po={exports:{}},wr={},Mo={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc;function Zd(){if(Lc)return G;Lc=1;var h=Symbol.for("react.element"),z=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),C=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),J=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),O=Symbol.iterator;function ee(p){return p===null||typeof p!="object"?null:(p=O&&p[O]||p["@@iterator"],typeof p=="function"?p:null)}var xe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ze=Object.assign,q={};function Z(p,w,Y){this.props=p,this.context=w,this.refs=q,this.updater=Y||xe}Z.prototype.isReactComponent={},Z.prototype.setState=function(p,w){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,w,"setState")},Z.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function Q(){}Q.prototype=Z.prototype;function ye(p,w,Y){this.props=p,this.context=w,this.refs=q,this.updater=Y||xe}var Ke=ye.prototype=new Q;Ke.constructor=ye,ze(Ke,Z.prototype),Ke.isPureReactComponent=!0;var Pe=Array.isArray,Je=Object.prototype.hasOwnProperty,E={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function k(p,w,Y){var X,ie={},le=null,ue=null;if(w!=null)for(X in w.ref!==void 0&&(ue=w.ref),w.key!==void 0&&(le=""+w.key),w)Je.call(w,X)&&!x.hasOwnProperty(X)&&(ie[X]=w[X]);var ae=arguments.length-2;if(ae===1)ie.children=Y;else if(1<ae){for(var me=Array(ae),qe=0;qe<ae;qe++)me[qe]=arguments[qe+2];ie.children=me}if(p&&p.defaultProps)for(X in ae=p.defaultProps,ae)ie[X]===void 0&&(ie[X]=ae[X]);return{$$typeof:h,type:p,key:le,ref:ue,props:ie,_owner:E.current}}function F(p,w){return{$$typeof:h,type:p.type,key:w,ref:p.ref,props:p.props,_owner:p._owner}}function _(p){return typeof p=="object"&&p!==null&&p.$$typeof===h}function re(p){var w={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(Y){return w[Y]})}var Se=/\/+/g;function ke(p,w){return typeof p=="object"&&p!==null&&p.key!=null?re(""+p.key):w.toString(36)}function at(p,w,Y,X,ie){var le=typeof p;(le==="undefined"||le==="boolean")&&(p=null);var ue=!1;if(p===null)ue=!0;else switch(le){case"string":case"number":ue=!0;break;case"object":switch(p.$$typeof){case h:case z:ue=!0}}if(ue)return ue=p,ie=ie(ue),p=X===""?"."+ke(ue,0):X,Pe(ie)?(Y="",p!=null&&(Y=p.replace(Se,"$&/")+"/"),at(ie,w,Y,"",function(qe){return qe})):ie!=null&&(_(ie)&&(ie=F(ie,Y+(!ie.key||ue&&ue.key===ie.key?"":(""+ie.key).replace(Se,"$&/")+"/")+p)),w.push(ie)),1;if(ue=0,X=X===""?".":X+":",Pe(p))for(var ae=0;ae<p.length;ae++){le=p[ae];var me=X+ke(le,ae);ue+=at(le,w,Y,me,ie)}else if(me=ee(p),typeof me=="function")for(p=me.call(p),ae=0;!(le=p.next()).done;)le=le.value,me=X+ke(le,ae++),ue+=at(le,w,Y,me,ie);else if(le==="object")throw w=String(p),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.");return ue}function gt(p,w,Y){if(p==null)return p;var X=[],ie=0;return at(p,X,"","",function(le){return w.call(Y,le,ie++)}),X}function Ve(p){if(p._status===-1){var w=p._result;w=w(),w.then(function(Y){(p._status===0||p._status===-1)&&(p._status=1,p._result=Y)},function(Y){(p._status===0||p._status===-1)&&(p._status=2,p._result=Y)}),p._status===-1&&(p._status=0,p._result=w)}if(p._status===1)return p._result.default;throw p._result}var we={current:null},P={transition:null},H={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:P,ReactCurrentOwner:E};function L(){throw Error("act(...) is not supported in production builds of React.")}return G.Children={map:gt,forEach:function(p,w,Y){gt(p,function(){w.apply(this,arguments)},Y)},count:function(p){var w=0;return gt(p,function(){w++}),w},toArray:function(p){return gt(p,function(w){return w})||[]},only:function(p){if(!_(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},G.Component=Z,G.Fragment=d,G.Profiler=b,G.PureComponent=ye,G.StrictMode=M,G.Suspense=D,G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,G.act=L,G.cloneElement=function(p,w,Y){if(p==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+p+".");var X=ze({},p.props),ie=p.key,le=p.ref,ue=p._owner;if(w!=null){if(w.ref!==void 0&&(le=w.ref,ue=E.current),w.key!==void 0&&(ie=""+w.key),p.type&&p.type.defaultProps)var ae=p.type.defaultProps;for(me in w)Je.call(w,me)&&!x.hasOwnProperty(me)&&(X[me]=w[me]===void 0&&ae!==void 0?ae[me]:w[me])}var me=arguments.length-2;if(me===1)X.children=Y;else if(1<me){ae=Array(me);for(var qe=0;qe<me;qe++)ae[qe]=arguments[qe+2];X.children=ae}return{$$typeof:h,type:p.type,key:ie,ref:le,props:X,_owner:ue}},G.createContext=function(p){return p={$$typeof:C,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},p.Provider={$$typeof:v,_context:p},p.Consumer=p},G.createElement=k,G.createFactory=function(p){var w=k.bind(null,p);return w.type=p,w},G.createRef=function(){return{current:null}},G.forwardRef=function(p){return{$$typeof:B,render:p}},G.isValidElement=_,G.lazy=function(p){return{$$typeof:te,_payload:{_status:-1,_result:p},_init:Ve}},G.memo=function(p,w){return{$$typeof:J,type:p,compare:w===void 0?null:w}},G.startTransition=function(p){var w=P.transition;P.transition={};try{p()}finally{P.transition=w}},G.unstable_act=L,G.useCallback=function(p,w){return we.current.useCallback(p,w)},G.useContext=function(p){return we.current.useContext(p)},G.useDebugValue=function(){},G.useDeferredValue=function(p){return we.current.useDeferredValue(p)},G.useEffect=function(p,w){return we.current.useEffect(p,w)},G.useId=function(){return we.current.useId()},G.useImperativeHandle=function(p,w,Y){return we.current.useImperativeHandle(p,w,Y)},G.useInsertionEffect=function(p,w){return we.current.useInsertionEffect(p,w)},G.useLayoutEffect=function(p,w){return we.current.useLayoutEffect(p,w)},G.useMemo=function(p,w){return we.current.useMemo(p,w)},G.useReducer=function(p,w,Y){return we.current.useReducer(p,w,Y)},G.useRef=function(p){return we.current.useRef(p)},G.useState=function(p){return we.current.useState(p)},G.useSyncExternalStore=function(p,w,Y){return we.current.useSyncExternalStore(p,w,Y)},G.useTransition=function(){return we.current.useTransition()},G.version="18.3.1",G}var Rc;function Ro(){return Rc||(Rc=1,Mo.exports=Zd()),Mo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oc;function ep(){if(Oc)return wr;Oc=1;var h=Ro(),z=Symbol.for("react.element"),d=Symbol.for("react.fragment"),M=Object.prototype.hasOwnProperty,b=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function C(B,D,J){var te,O={},ee=null,xe=null;J!==void 0&&(ee=""+J),D.key!==void 0&&(ee=""+D.key),D.ref!==void 0&&(xe=D.ref);for(te in D)M.call(D,te)&&!v.hasOwnProperty(te)&&(O[te]=D[te]);if(B&&B.defaultProps)for(te in D=B.defaultProps,D)O[te]===void 0&&(O[te]=D[te]);return{$$typeof:z,type:B,key:ee,ref:xe,props:O,_owner:b.current}}return wr.Fragment=d,wr.jsx=C,wr.jsxs=C,wr}var Ac;function tp(){return Ac||(Ac=1,Po.exports=ep()),Po.exports}var l=tp(),se=Ro();const np=Bc(se);var Ti={},To={exports:{}},Ge={},Do={exports:{}},Io={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc;function rp(){return Fc||(Fc=1,(function(h){function z(P,H){var L=P.length;P.push(H);e:for(;0<L;){var p=L-1>>>1,w=P[p];if(0<b(w,H))P[p]=H,P[L]=w,L=p;else break e}}function d(P){return P.length===0?null:P[0]}function M(P){if(P.length===0)return null;var H=P[0],L=P.pop();if(L!==H){P[0]=L;e:for(var p=0,w=P.length,Y=w>>>1;p<Y;){var X=2*(p+1)-1,ie=P[X],le=X+1,ue=P[le];if(0>b(ie,L))le<w&&0>b(ue,ie)?(P[p]=ue,P[le]=L,p=le):(P[p]=ie,P[X]=L,p=X);else if(le<w&&0>b(ue,L))P[p]=ue,P[le]=L,p=le;else break e}}return H}function b(P,H){var L=P.sortIndex-H.sortIndex;return L!==0?L:P.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var v=performance;h.unstable_now=function(){return v.now()}}else{var C=Date,B=C.now();h.unstable_now=function(){return C.now()-B}}var D=[],J=[],te=1,O=null,ee=3,xe=!1,ze=!1,q=!1,Z=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,ye=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ke(P){for(var H=d(J);H!==null;){if(H.callback===null)M(J);else if(H.startTime<=P)M(J),H.sortIndex=H.expirationTime,z(D,H);else break;H=d(J)}}function Pe(P){if(q=!1,Ke(P),!ze)if(d(D)!==null)ze=!0,Ve(Je);else{var H=d(J);H!==null&&we(Pe,H.startTime-P)}}function Je(P,H){ze=!1,q&&(q=!1,Q(k),k=-1),xe=!0;var L=ee;try{for(Ke(H),O=d(D);O!==null&&(!(O.expirationTime>H)||P&&!re());){var p=O.callback;if(typeof p=="function"){O.callback=null,ee=O.priorityLevel;var w=p(O.expirationTime<=H);H=h.unstable_now(),typeof w=="function"?O.callback=w:O===d(D)&&M(D),Ke(H)}else M(D);O=d(D)}if(O!==null)var Y=!0;else{var X=d(J);X!==null&&we(Pe,X.startTime-H),Y=!1}return Y}finally{O=null,ee=L,xe=!1}}var E=!1,x=null,k=-1,F=5,_=-1;function re(){return!(h.unstable_now()-_<F)}function Se(){if(x!==null){var P=h.unstable_now();_=P;var H=!0;try{H=x(!0,P)}finally{H?ke():(E=!1,x=null)}}else E=!1}var ke;if(typeof ye=="function")ke=function(){ye(Se)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,gt=at.port2;at.port1.onmessage=Se,ke=function(){gt.postMessage(null)}}else ke=function(){Z(Se,0)};function Ve(P){x=P,E||(E=!0,ke())}function we(P,H){k=Z(function(){P(h.unstable_now())},H)}h.unstable_IdlePriority=5,h.unstable_ImmediatePriority=1,h.unstable_LowPriority=4,h.unstable_NormalPriority=3,h.unstable_Profiling=null,h.unstable_UserBlockingPriority=2,h.unstable_cancelCallback=function(P){P.callback=null},h.unstable_continueExecution=function(){ze||xe||(ze=!0,Ve(Je))},h.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<P?Math.floor(1e3/P):5},h.unstable_getCurrentPriorityLevel=function(){return ee},h.unstable_getFirstCallbackNode=function(){return d(D)},h.unstable_next=function(P){switch(ee){case 1:case 2:case 3:var H=3;break;default:H=ee}var L=ee;ee=H;try{return P()}finally{ee=L}},h.unstable_pauseExecution=function(){},h.unstable_requestPaint=function(){},h.unstable_runWithPriority=function(P,H){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var L=ee;ee=P;try{return H()}finally{ee=L}},h.unstable_scheduleCallback=function(P,H,L){var p=h.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?p+L:p):L=p,P){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=L+w,P={id:te++,callback:H,priorityLevel:P,startTime:L,expirationTime:w,sortIndex:-1},L>p?(P.sortIndex=L,z(J,P),d(D)===null&&P===d(J)&&(q?(Q(k),k=-1):q=!0,we(Pe,L-p))):(P.sortIndex=w,z(D,P),ze||xe||(ze=!0,Ve(Je))),P},h.unstable_shouldYield=re,h.unstable_wrapCallback=function(P){var H=ee;return function(){var L=ee;ee=H;try{return P.apply(this,arguments)}finally{ee=L}}}})(Io)),Io}var $c;function ip(){return $c||($c=1,Do.exports=rp()),Do.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc;function lp(){if(Uc)return Ge;Uc=1;var h=Ro(),z=ip();function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var M=new Set,b={};function v(e,t){C(e,t),C(e+"Capture",t)}function C(e,t){for(b[e]=t,e=0;e<t.length;e++)M.add(t[e])}var B=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),D=Object.prototype.hasOwnProperty,J=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,te={},O={};function ee(e){return D.call(O,e)?!0:D.call(te,e)?!1:J.test(e)?O[e]=!0:(te[e]=!0,!1)}function xe(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ze(e,t,n,r){if(t===null||typeof t>"u"||xe(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function q(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Z[e]=new q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Z[t]=new q(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Z[e]=new q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Z[e]=new q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Z[e]=new q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Z[e]=new q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Z[e]=new q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Z[e]=new q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Z[e]=new q(e,5,!1,e.toLowerCase(),null,!1,!1)});var Q=/[\-:]([a-z])/g;function ye(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Q,ye);Z[t]=new q(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Q,ye);Z[t]=new q(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Q,ye);Z[t]=new q(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Z[e]=new q(e,1,!1,e.toLowerCase(),null,!1,!1)}),Z.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Z[e]=new q(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ke(e,t,n,r){var i=Z.hasOwnProperty(t)?Z[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ze(t,n,i,r)&&(n=null),r||i===null?ee(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pe=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Je=Symbol.for("react.element"),E=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),re=Symbol.for("react.context"),Se=Symbol.for("react.forward_ref"),ke=Symbol.for("react.suspense"),at=Symbol.for("react.suspense_list"),gt=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),P=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var L=Object.assign,p;function w(e){if(p===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);p=t&&t[1]||""}return`
`+p+e}var Y=!1;function X(e,t){if(!e||Y)return"";Y=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var r=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){r=g}e.call(t.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var i=g.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{Y=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?w(e):""}function ie(e){switch(e.tag){case 5:return w(e.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 2:case 15:return e=X(e.type,!1),e;case 11:return e=X(e.type.render,!1),e;case 1:return e=X(e.type,!0),e;default:return""}}function le(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case x:return"Fragment";case E:return"Portal";case F:return"Profiler";case k:return"StrictMode";case ke:return"Suspense";case at:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case re:return(e.displayName||"Context")+".Consumer";case _:return(e._context.displayName||"Context")+".Provider";case Se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gt:return t=e.displayName||null,t!==null?t:le(e.type)||"Memo";case Ve:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}function ue(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(t);case 8:return t===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ae(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qe(e){var t=me(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){e._valueTracker||(e._valueTracker=qe(e))}function Uo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=me(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ri(e,t){var n=t.checked;return L({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ae(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ho(e,t){t=t.checked,t!=null&&Ke(e,"checked",t,!1)}function Oi(e,t){Ho(e,t);var n=ae(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ai(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ai(e,t.type,ae(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ai(e,t,n){(t!=="number"||br(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ln=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ae(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Fi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(d(91));return L({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(d(92));if(Ln(n)){if(1<n.length)throw Error(d(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ae(n)}}function Qo(e,t){var n=ae(t.value),r=ae(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Yo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Go(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $i(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Go(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nr,Ko=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ru=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){ru.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function Jo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function qo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jo(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var iu=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ui(e,t){if(t){if(iu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(d(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(d(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(d(61))}if(t.style!=null&&typeof t.style!="object")throw Error(d(62))}}function Vi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hi=null;function Wi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bi=null,dn=null,pn=null;function Xo(e){if(e=lr(e)){if(typeof Bi!="function")throw Error(d(280));var t=e.stateNode;t&&(t=Yr(t),Bi(e.stateNode,e.type,t))}}function Zo(e){dn?pn?pn.push(e):pn=[e]:dn=e}function es(){if(dn){var e=dn,t=pn;if(pn=dn=null,Xo(e),t)for(e=0;e<t.length;e++)Xo(t[e])}}function ts(e,t){return e(t)}function ns(){}var Qi=!1;function rs(e,t,n){if(Qi)return e(t,n);Qi=!0;try{return ts(e,t,n)}finally{Qi=!1,(dn!==null||pn!==null)&&(ns(),es())}}function An(e,t){var n=e.stateNode;if(n===null)return null;var r=Yr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(d(231,t,typeof n));return n}var Yi=!1;if(B)try{var Fn={};Object.defineProperty(Fn,"passive",{get:function(){Yi=!0}}),window.addEventListener("test",Fn,Fn),window.removeEventListener("test",Fn,Fn)}catch{Yi=!1}function lu(e,t,n,r,i,o,s,a,c){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(j){this.onError(j)}}var $n=!1,Sr=null,Cr=!1,Gi=null,ou={onError:function(e){$n=!0,Sr=e}};function su(e,t,n,r,i,o,s,a,c){$n=!1,Sr=null,lu.apply(ou,arguments)}function au(e,t,n,r,i,o,s,a,c){if(su.apply(this,arguments),$n){if($n){var g=Sr;$n=!1,Sr=null}else throw Error(d(198));Cr||(Cr=!0,Gi=g)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function is(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ls(e){if(Kt(e)!==e)throw Error(d(188))}function cu(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(d(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ls(i),e;if(o===r)return ls(i),t;o=o.sibling}throw Error(d(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(d(189))}}if(n.alternate!==r)throw Error(d(190))}if(n.tag!==3)throw Error(d(188));return n.stateNode.current===n?e:t}function os(e){return e=cu(e),e!==null?ss(e):null}function ss(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ss(e);if(t!==null)return t;e=e.sibling}return null}var as=z.unstable_scheduleCallback,cs=z.unstable_cancelCallback,uu=z.unstable_shouldYield,du=z.unstable_requestPaint,be=z.unstable_now,pu=z.unstable_getCurrentPriorityLevel,Ki=z.unstable_ImmediatePriority,us=z.unstable_UserBlockingPriority,zr=z.unstable_NormalPriority,fu=z.unstable_LowPriority,ds=z.unstable_IdlePriority,Er=null,vt=null;function mu(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(Er,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:vu,hu=Math.log,gu=Math.LN2;function vu(e){return e>>>=0,e===0?32:31-(hu(e)/gu|0)|0}var _r=64,Pr=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Un(a):(o&=s,o!==0&&(r=Un(o)))}else s=n&~i,s!==0?r=Un(s):o!==0&&(r=Un(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),i=1<<n,r|=e[n],t&=~i;return r}function xu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ct(o),a=1<<s,c=i[s];c===-1?((a&n)===0||(a&r)!==0)&&(i[s]=xu(a,t)):c<=t&&(e.expiredLanes|=a),o&=~a}}function Ji(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ps(){var e=_r;return _r<<=1,(_r&4194240)===0&&(_r=64),e}function qi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function wu(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ct(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Xi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ce=0;function fs(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ms,Zi,hs,gs,vs,el=!1,Tr=[],Pt=null,Mt=null,Tt=null,Hn=new Map,Wn=new Map,Dt=[],ju="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xs(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function Bn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=lr(t),t!==null&&Zi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ku(e,t,n,r,i){switch(t){case"focusin":return Pt=Bn(Pt,e,t,n,r,i),!0;case"dragenter":return Mt=Bn(Mt,e,t,n,r,i),!0;case"mouseover":return Tt=Bn(Tt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Hn.set(o,Bn(Hn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Wn.set(o,Bn(Wn.get(o)||null,e,t,n,r,i)),!0}return!1}function ys(e){var t=Jt(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=is(n),t!==null){e.blockedOn=t,vs(e.priority,function(){hs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Hi=r,n.target.dispatchEvent(r),Hi=null}else return t=lr(n),t!==null&&Zi(t),e.blockedOn=n,!1;t.shift()}return!0}function ws(e,t,n){Dr(e)&&n.delete(t)}function bu(){el=!1,Pt!==null&&Dr(Pt)&&(Pt=null),Mt!==null&&Dr(Mt)&&(Mt=null),Tt!==null&&Dr(Tt)&&(Tt=null),Hn.forEach(ws),Wn.forEach(ws)}function Qn(e,t){e.blockedOn===t&&(e.blockedOn=null,el||(el=!0,z.unstable_scheduleCallback(z.unstable_NormalPriority,bu)))}function Yn(e){function t(i){return Qn(i,e)}if(0<Tr.length){Qn(Tr[0],e);for(var n=1;n<Tr.length;n++){var r=Tr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&Qn(Pt,e),Mt!==null&&Qn(Mt,e),Tt!==null&&Qn(Tt,e),Hn.forEach(t),Wn.forEach(t),n=0;n<Dt.length;n++)r=Dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)ys(n),n.blockedOn===null&&Dt.shift()}var fn=Pe.ReactCurrentBatchConfig,Ir=!0;function Nu(e,t,n,r){var i=ce,o=fn.transition;fn.transition=null;try{ce=1,tl(e,t,n,r)}finally{ce=i,fn.transition=o}}function Su(e,t,n,r){var i=ce,o=fn.transition;fn.transition=null;try{ce=4,tl(e,t,n,r)}finally{ce=i,fn.transition=o}}function tl(e,t,n,r){if(Ir){var i=nl(e,t,n,r);if(i===null)yl(e,t,r,Lr,n),xs(e,r);else if(ku(i,e,t,n,r))r.stopPropagation();else if(xs(e,r),t&4&&-1<ju.indexOf(e)){for(;i!==null;){var o=lr(i);if(o!==null&&ms(o),o=nl(e,t,n,r),o===null&&yl(e,t,r,Lr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else yl(e,t,r,null,n)}}var Lr=null;function nl(e,t,n,r){if(Lr=null,e=Wi(r),e=Jt(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=is(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Lr=e,null}function js(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pu()){case Ki:return 1;case us:return 4;case zr:case fu:return 16;case ds:return 536870912;default:return 16}default:return 16}}var It=null,rl=null,Rr=null;function ks(){if(Rr)return Rr;var e,t=rl,n=t.length,r,i="value"in It?It.value:It.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Rr=i.slice(e,1<r?1-r:void 0)}function Or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ar(){return!0}function bs(){return!1}function Xe(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ar:bs,this.isPropagationStopped=bs,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ar)},persist:function(){},isPersistent:Ar}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=Xe(mn),Gn=L({},mn,{view:0,detail:0}),Cu=Xe(Gn),ll,ol,Kn,Fr=L({},Gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:al,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kn&&(Kn&&e.type==="mousemove"?(ll=e.screenX-Kn.screenX,ol=e.screenY-Kn.screenY):ol=ll=0,Kn=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:ol}}),Ns=Xe(Fr),zu=L({},Fr,{dataTransfer:0}),Eu=Xe(zu),_u=L({},Gn,{relatedTarget:0}),sl=Xe(_u),Pu=L({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),Mu=Xe(Pu),Tu=L({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Du=Xe(Tu),Iu=L({},mn,{data:0}),Ss=Xe(Iu),Lu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ru={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ou={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Au(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ou[e])?!!t[e]:!1}function al(){return Au}var Fu=L({},Gn,{key:function(e){if(e.key){var t=Lu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ru[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:al,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$u=Xe(Fu),Uu=L({},Fr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cs=Xe(Uu),Vu=L({},Gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:al}),Hu=Xe(Vu),Wu=L({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bu=Xe(Wu),Qu=L({},Fr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yu=Xe(Qu),Gu=[9,13,27,32],cl=B&&"CompositionEvent"in window,Jn=null;B&&"documentMode"in document&&(Jn=document.documentMode);var Ku=B&&"TextEvent"in window&&!Jn,zs=B&&(!cl||Jn&&8<Jn&&11>=Jn),Es=" ",_s=!1;function Ps(e,t){switch(e){case"keyup":return Gu.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ms(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function Ju(e,t){switch(e){case"compositionend":return Ms(t);case"keypress":return t.which!==32?null:(_s=!0,Es);case"textInput":return e=t.data,e===Es&&_s?null:e;default:return null}}function qu(e,t){if(hn)return e==="compositionend"||!cl&&Ps(e,t)?(e=ks(),Rr=rl=It=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zs&&t.locale!=="ko"?null:t.data;default:return null}}var Xu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xu[e.type]:t==="textarea"}function Ds(e,t,n,r){Zo(r),t=Wr(t,"onChange"),0<t.length&&(n=new il("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,Xn=null;function Zu(e){qs(e,0)}function $r(e){var t=wn(e);if(Uo(t))return e}function ed(e,t){if(e==="change")return t}var Is=!1;if(B){var ul;if(B){var dl="oninput"in document;if(!dl){var Ls=document.createElement("div");Ls.setAttribute("oninput","return;"),dl=typeof Ls.oninput=="function"}ul=dl}else ul=!1;Is=ul&&(!document.documentMode||9<document.documentMode)}function Rs(){qn&&(qn.detachEvent("onpropertychange",Os),Xn=qn=null)}function Os(e){if(e.propertyName==="value"&&$r(Xn)){var t=[];Ds(t,Xn,e,Wi(e)),rs(Zu,t)}}function td(e,t,n){e==="focusin"?(Rs(),qn=t,Xn=n,qn.attachEvent("onpropertychange",Os)):e==="focusout"&&Rs()}function nd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $r(Xn)}function rd(e,t){if(e==="click")return $r(t)}function id(e,t){if(e==="input"||e==="change")return $r(t)}function ld(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:ld;function Zn(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!D.call(t,i)||!ut(e[i],t[i]))return!1}return!0}function As(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fs(e,t){var n=As(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=As(n)}}function $s(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$s(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Us(){for(var e=window,t=br();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=br(e.document)}return t}function pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function od(e){var t=Us(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$s(n.ownerDocument.documentElement,n)){if(r!==null&&pl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Fs(n,o);var s=Fs(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sd=B&&"documentMode"in document&&11>=document.documentMode,gn=null,fl=null,er=null,ml=!1;function Vs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ml||gn==null||gn!==br(r)||(r=gn,"selectionStart"in r&&pl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),er&&Zn(er,r)||(er=r,r=Wr(fl,"onSelect"),0<r.length&&(t=new il("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gn)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vn={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionend:Ur("Transition","TransitionEnd")},hl={},Hs={};B&&(Hs=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function Vr(e){if(hl[e])return hl[e];if(!vn[e])return e;var t=vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hs)return hl[e]=t[n];return e}var Ws=Vr("animationend"),Bs=Vr("animationiteration"),Qs=Vr("animationstart"),Ys=Vr("transitionend"),Gs=new Map,Ks="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lt(e,t){Gs.set(e,t),v(t,[e])}for(var gl=0;gl<Ks.length;gl++){var vl=Ks[gl],ad=vl.toLowerCase(),cd=vl[0].toUpperCase()+vl.slice(1);Lt(ad,"on"+cd)}Lt(Ws,"onAnimationEnd"),Lt(Bs,"onAnimationIteration"),Lt(Qs,"onAnimationStart"),Lt("dblclick","onDoubleClick"),Lt("focusin","onFocus"),Lt("focusout","onBlur"),Lt(Ys,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),v("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),v("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),v("onBeforeInput",["compositionend","keypress","textInput","paste"]),v("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ud=new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));function Js(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,au(r,t,void 0,e),e.currentTarget=null}function qs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,g=a.currentTarget;if(a=a.listener,c!==o&&i.isPropagationStopped())break e;Js(i,a,g),o=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,g=a.currentTarget,a=a.listener,c!==o&&i.isPropagationStopped())break e;Js(i,a,g),o=c}}}if(Cr)throw e=Gi,Cr=!1,Gi=null,e}function pe(e,t){var n=t[Sl];n===void 0&&(n=t[Sl]=new Set);var r=e+"__bubble";n.has(r)||(Xs(t,e,2,!1),n.add(r))}function xl(e,t,n){var r=0;t&&(r|=4),Xs(n,e,r,t)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function nr(e){if(!e[Hr]){e[Hr]=!0,M.forEach(function(n){n!=="selectionchange"&&(ud.has(n)||xl(n,!1,e),xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hr]||(t[Hr]=!0,xl("selectionchange",!1,t))}}function Xs(e,t,n,r){switch(js(t)){case 1:var i=Nu;break;case 4:i=Su;break;default:i=tl}n=i.bind(null,t,n,e),i=void 0,!Yi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function yl(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Jt(a),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}a=a.parentNode}}r=r.return}rs(function(){var g=o,j=Wi(n),N=[];e:{var y=Gs.get(e);if(y!==void 0){var T=il,R=e;switch(e){case"keypress":if(Or(n)===0)break e;case"keydown":case"keyup":T=$u;break;case"focusin":R="focus",T=sl;break;case"focusout":R="blur",T=sl;break;case"beforeblur":case"afterblur":T=sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Eu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Hu;break;case Ws:case Bs:case Qs:T=Mu;break;case Ys:T=Bu;break;case"scroll":T=Cu;break;case"wheel":T=Yu;break;case"copy":case"cut":case"paste":T=Du;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Cs}var A=(t&4)!==0,Ne=!A&&e==="scroll",f=A?y!==null?y+"Capture":null:y;A=[];for(var u=g,m;u!==null;){m=u;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,f!==null&&(S=An(u,f),S!=null&&A.push(rr(u,S,m)))),Ne)break;u=u.return}0<A.length&&(y=new T(y,R,null,n,j),N.push({event:y,listeners:A}))}}if((t&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",y&&n!==Hi&&(R=n.relatedTarget||n.fromElement)&&(Jt(R)||R[kt]))break e;if((T||y)&&(y=j.window===j?j:(y=j.ownerDocument)?y.defaultView||y.parentWindow:window,T?(R=n.relatedTarget||n.toElement,T=g,R=R?Jt(R):null,R!==null&&(Ne=Kt(R),R!==Ne||R.tag!==5&&R.tag!==6)&&(R=null)):(T=null,R=g),T!==R)){if(A=Ns,S="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(A=Cs,S="onPointerLeave",f="onPointerEnter",u="pointer"),Ne=T==null?y:wn(T),m=R==null?y:wn(R),y=new A(S,u+"leave",T,n,j),y.target=Ne,y.relatedTarget=m,S=null,Jt(j)===g&&(A=new A(f,u+"enter",R,n,j),A.target=m,A.relatedTarget=Ne,S=A),Ne=S,T&&R)t:{for(A=T,f=R,u=0,m=A;m;m=xn(m))u++;for(m=0,S=f;S;S=xn(S))m++;for(;0<u-m;)A=xn(A),u--;for(;0<m-u;)f=xn(f),m--;for(;u--;){if(A===f||f!==null&&A===f.alternate)break t;A=xn(A),f=xn(f)}A=null}else A=null;T!==null&&Zs(N,y,T,A,!1),R!==null&&Ne!==null&&Zs(N,Ne,R,A,!0)}}e:{if(y=g?wn(g):window,T=y.nodeName&&y.nodeName.toLowerCase(),T==="select"||T==="input"&&y.type==="file")var $=ed;else if(Ts(y))if(Is)$=id;else{$=nd;var U=td}else(T=y.nodeName)&&T.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&($=rd);if($&&($=$(e,g))){Ds(N,$,n,j);break e}U&&U(e,y,g),e==="focusout"&&(U=y._wrapperState)&&U.controlled&&y.type==="number"&&Ai(y,"number",y.value)}switch(U=g?wn(g):window,e){case"focusin":(Ts(U)||U.contentEditable==="true")&&(gn=U,fl=g,er=null);break;case"focusout":er=fl=gn=null;break;case"mousedown":ml=!0;break;case"contextmenu":case"mouseup":case"dragend":ml=!1,Vs(N,n,j);break;case"selectionchange":if(sd)break;case"keydown":case"keyup":Vs(N,n,j)}var V;if(cl)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else hn?Ps(e,n)&&(W="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(W="onCompositionStart");W&&(zs&&n.locale!=="ko"&&(hn||W!=="onCompositionStart"?W==="onCompositionEnd"&&hn&&(V=ks()):(It=j,rl="value"in It?It.value:It.textContent,hn=!0)),U=Wr(g,W),0<U.length&&(W=new Ss(W,e,null,n,j),N.push({event:W,listeners:U}),V?W.data=V:(V=Ms(n),V!==null&&(W.data=V)))),(V=Ku?Ju(e,n):qu(e,n))&&(g=Wr(g,"onBeforeInput"),0<g.length&&(j=new Ss("onBeforeInput","beforeinput",null,n,j),N.push({event:j,listeners:g}),j.data=V))}qs(N,t)})}function rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=An(e,n),o!=null&&r.unshift(rr(e,o,i)),o=An(e,t),o!=null&&r.push(rr(e,o,i))),e=e.return}return r}function xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zs(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,g=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&g!==null&&(a=g,i?(c=An(n,o),c!=null&&s.unshift(rr(n,c,a))):i||(c=An(n,o),c!=null&&s.push(rr(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var dd=/\r\n?/g,pd=/\u0000|\uFFFD/g;function ea(e){return(typeof e=="string"?e:""+e).replace(dd,`
`).replace(pd,"")}function Br(e,t,n){if(t=ea(t),ea(e)!==t&&n)throw Error(d(425))}function Qr(){}var wl=null,jl=null;function kl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bl=typeof setTimeout=="function"?setTimeout:void 0,fd=typeof clearTimeout=="function"?clearTimeout:void 0,ta=typeof Promise=="function"?Promise:void 0,md=typeof queueMicrotask=="function"?queueMicrotask:typeof ta<"u"?function(e){return ta.resolve(null).then(e).catch(hd)}:bl;function hd(e){setTimeout(function(){throw e})}function Nl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Yn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yn(t)}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function na(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),xt="__reactFiber$"+yn,ir="__reactProps$"+yn,kt="__reactContainer$"+yn,Sl="__reactEvents$"+yn,gd="__reactListeners$"+yn,vd="__reactHandles$"+yn;function Jt(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=na(e);e!==null;){if(n=e[xt])return n;e=na(e)}return t}e=n,n=e.parentNode}return null}function lr(e){return e=e[xt]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(d(33))}function Yr(e){return e[ir]||null}var Cl=[],jn=-1;function Ot(e){return{current:e}}function fe(e){0>jn||(e.current=Cl[jn],Cl[jn]=null,jn--)}function de(e,t){jn++,Cl[jn]=e.current,e.current=t}var At={},Re=Ot(At),He=Ot(!1),qt=At;function kn(e,t){var n=e.type.contextTypes;if(!n)return At;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function We(e){return e=e.childContextTypes,e!=null}function Gr(){fe(He),fe(Re)}function ra(e,t,n){if(Re.current!==At)throw Error(d(168));de(Re,t),de(He,n)}function ia(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(d(108,ue(e)||"Unknown",i));return L({},n,r)}function Kr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,qt=Re.current,de(Re,e),de(He,He.current),!0}function la(e,t,n){var r=e.stateNode;if(!r)throw Error(d(169));n?(e=ia(e,t,qt),r.__reactInternalMemoizedMergedChildContext=e,fe(He),fe(Re),de(Re,e)):fe(He),de(He,n)}var bt=null,Jr=!1,zl=!1;function oa(e){bt===null?bt=[e]:bt.push(e)}function xd(e){Jr=!0,oa(e)}function Ft(){if(!zl&&bt!==null){zl=!0;var e=0,t=ce;try{var n=bt;for(ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}bt=null,Jr=!1}catch(i){throw bt!==null&&(bt=bt.slice(e+1)),as(Ki,Ft),i}finally{ce=t,zl=!1}}return null}var bn=[],Nn=0,qr=null,Xr=0,nt=[],rt=0,Xt=null,Nt=1,St="";function Zt(e,t){bn[Nn++]=Xr,bn[Nn++]=qr,qr=e,Xr=t}function sa(e,t,n){nt[rt++]=Nt,nt[rt++]=St,nt[rt++]=Xt,Xt=e;var r=Nt;e=St;var i=32-ct(r)-1;r&=~(1<<i),n+=1;var o=32-ct(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Nt=1<<32-ct(t)+i|n<<i|r,St=o+e}else Nt=1<<o|n<<i|r,St=e}function El(e){e.return!==null&&(Zt(e,1),sa(e,1,0))}function _l(e){for(;e===qr;)qr=bn[--Nn],bn[Nn]=null,Xr=bn[--Nn],bn[Nn]=null;for(;e===Xt;)Xt=nt[--rt],nt[rt]=null,St=nt[--rt],nt[rt]=null,Nt=nt[--rt],nt[rt]=null}var Ze=null,et=null,he=!1,dt=null;function aa(e,t){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ca(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,et=Rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xt!==null?{id:Nt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ze=e,et=null,!0):!1;default:return!1}}function Pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ml(e){if(he){var t=et;if(t){var n=t;if(!ca(e,t)){if(Pl(e))throw Error(d(418));t=Rt(n.nextSibling);var r=Ze;t&&ca(e,t)?aa(r,n):(e.flags=e.flags&-4097|2,he=!1,Ze=e)}}else{if(Pl(e))throw Error(d(418));e.flags=e.flags&-4097|2,he=!1,Ze=e}}}function ua(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function Zr(e){if(e!==Ze)return!1;if(!he)return ua(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!kl(e.type,e.memoizedProps)),t&&(t=et)){if(Pl(e))throw da(),Error(d(418));for(;t;)aa(e,t),t=Rt(t.nextSibling)}if(ua(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){et=Rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}et=null}}else et=Ze?Rt(e.stateNode.nextSibling):null;return!0}function da(){for(var e=et;e;)e=Rt(e.nextSibling)}function Sn(){et=Ze=null,he=!1}function Tl(e){dt===null?dt=[e]:dt.push(e)}var yd=Pe.ReactCurrentBatchConfig;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(d(309));var r=n.stateNode}if(!r)throw Error(d(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(d(284));if(!n._owner)throw Error(d(290,e))}return e}function ei(e,t){throw e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pa(e){var t=e._init;return t(e._payload)}function fa(e){function t(f,u){if(e){var m=f.deletions;m===null?(f.deletions=[u],f.flags|=16):m.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function i(f,u){return f=Yt(f,u),f.index=0,f.sibling=null,f}function o(f,u,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<u?(f.flags|=2,u):m):(f.flags|=2,u)):(f.flags|=1048576,u)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,u,m,S){return u===null||u.tag!==6?(u=No(m,f.mode,S),u.return=f,u):(u=i(u,m),u.return=f,u)}function c(f,u,m,S){var $=m.type;return $===x?j(f,u,m.props.children,S,m.key):u!==null&&(u.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Ve&&pa($)===u.type)?(S=i(u,m.props),S.ref=or(f,u,m),S.return=f,S):(S=Ni(m.type,m.key,m.props,null,f.mode,S),S.ref=or(f,u,m),S.return=f,S)}function g(f,u,m,S){return u===null||u.tag!==4||u.stateNode.containerInfo!==m.containerInfo||u.stateNode.implementation!==m.implementation?(u=So(m,f.mode,S),u.return=f,u):(u=i(u,m.children||[]),u.return=f,u)}function j(f,u,m,S,$){return u===null||u.tag!==7?(u=an(m,f.mode,S,$),u.return=f,u):(u=i(u,m),u.return=f,u)}function N(f,u,m){if(typeof u=="string"&&u!==""||typeof u=="number")return u=No(""+u,f.mode,m),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Je:return m=Ni(u.type,u.key,u.props,null,f.mode,m),m.ref=or(f,null,u),m.return=f,m;case E:return u=So(u,f.mode,m),u.return=f,u;case Ve:var S=u._init;return N(f,S(u._payload),m)}if(Ln(u)||H(u))return u=an(u,f.mode,m,null),u.return=f,u;ei(f,u)}return null}function y(f,u,m,S){var $=u!==null?u.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return $!==null?null:a(f,u,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Je:return m.key===$?c(f,u,m,S):null;case E:return m.key===$?g(f,u,m,S):null;case Ve:return $=m._init,y(f,u,$(m._payload),S)}if(Ln(m)||H(m))return $!==null?null:j(f,u,m,S,null);ei(f,m)}return null}function T(f,u,m,S,$){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(m)||null,a(u,f,""+S,$);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Je:return f=f.get(S.key===null?m:S.key)||null,c(u,f,S,$);case E:return f=f.get(S.key===null?m:S.key)||null,g(u,f,S,$);case Ve:var U=S._init;return T(f,u,m,U(S._payload),$)}if(Ln(S)||H(S))return f=f.get(m)||null,j(u,f,S,$,null);ei(u,S)}return null}function R(f,u,m,S){for(var $=null,U=null,V=u,W=u=0,De=null;V!==null&&W<m.length;W++){V.index>W?(De=V,V=null):De=V.sibling;var oe=y(f,V,m[W],S);if(oe===null){V===null&&(V=De);break}e&&V&&oe.alternate===null&&t(f,V),u=o(oe,u,W),U===null?$=oe:U.sibling=oe,U=oe,V=De}if(W===m.length)return n(f,V),he&&Zt(f,W),$;if(V===null){for(;W<m.length;W++)V=N(f,m[W],S),V!==null&&(u=o(V,u,W),U===null?$=V:U.sibling=V,U=V);return he&&Zt(f,W),$}for(V=r(f,V);W<m.length;W++)De=T(V,f,W,m[W],S),De!==null&&(e&&De.alternate!==null&&V.delete(De.key===null?W:De.key),u=o(De,u,W),U===null?$=De:U.sibling=De,U=De);return e&&V.forEach(function(Gt){return t(f,Gt)}),he&&Zt(f,W),$}function A(f,u,m,S){var $=H(m);if(typeof $!="function")throw Error(d(150));if(m=$.call(m),m==null)throw Error(d(151));for(var U=$=null,V=u,W=u=0,De=null,oe=m.next();V!==null&&!oe.done;W++,oe=m.next()){V.index>W?(De=V,V=null):De=V.sibling;var Gt=y(f,V,oe.value,S);if(Gt===null){V===null&&(V=De);break}e&&V&&Gt.alternate===null&&t(f,V),u=o(Gt,u,W),U===null?$=Gt:U.sibling=Gt,U=Gt,V=De}if(oe.done)return n(f,V),he&&Zt(f,W),$;if(V===null){for(;!oe.done;W++,oe=m.next())oe=N(f,oe.value,S),oe!==null&&(u=o(oe,u,W),U===null?$=oe:U.sibling=oe,U=oe);return he&&Zt(f,W),$}for(V=r(f,V);!oe.done;W++,oe=m.next())oe=T(V,f,W,oe.value,S),oe!==null&&(e&&oe.alternate!==null&&V.delete(oe.key===null?W:oe.key),u=o(oe,u,W),U===null?$=oe:U.sibling=oe,U=oe);return e&&V.forEach(function(Xd){return t(f,Xd)}),he&&Zt(f,W),$}function Ne(f,u,m,S){if(typeof m=="object"&&m!==null&&m.type===x&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Je:e:{for(var $=m.key,U=u;U!==null;){if(U.key===$){if($=m.type,$===x){if(U.tag===7){n(f,U.sibling),u=i(U,m.props.children),u.return=f,f=u;break e}}else if(U.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Ve&&pa($)===U.type){n(f,U.sibling),u=i(U,m.props),u.ref=or(f,U,m),u.return=f,f=u;break e}n(f,U);break}else t(f,U);U=U.sibling}m.type===x?(u=an(m.props.children,f.mode,S,m.key),u.return=f,f=u):(S=Ni(m.type,m.key,m.props,null,f.mode,S),S.ref=or(f,u,m),S.return=f,f=S)}return s(f);case E:e:{for(U=m.key;u!==null;){if(u.key===U)if(u.tag===4&&u.stateNode.containerInfo===m.containerInfo&&u.stateNode.implementation===m.implementation){n(f,u.sibling),u=i(u,m.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=So(m,f.mode,S),u.return=f,f=u}return s(f);case Ve:return U=m._init,Ne(f,u,U(m._payload),S)}if(Ln(m))return R(f,u,m,S);if(H(m))return A(f,u,m,S);ei(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,u!==null&&u.tag===6?(n(f,u.sibling),u=i(u,m),u.return=f,f=u):(n(f,u),u=No(m,f.mode,S),u.return=f,f=u),s(f)):n(f,u)}return Ne}var Cn=fa(!0),ma=fa(!1),ti=Ot(null),ni=null,zn=null,Dl=null;function Il(){Dl=zn=ni=null}function Ll(e){var t=ti.current;fe(ti),e._currentValue=t}function Rl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function En(e,t){ni=e,Dl=zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Be=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Dl!==e)if(e={context:e,memoizedValue:t,next:null},zn===null){if(ni===null)throw Error(d(308));zn=e,ni.dependencies={lanes:0,firstContext:e}}else zn=zn.next=e;return t}var en=null;function Ol(e){en===null?en=[e]:en.push(e)}function ha(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ol(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ct(e,r)}function Ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $t=!1;function Al(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ga(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ne&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ct(e,n)}return i=r.interleaved,i===null?(t.next=t,Ol(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ct(e,n)}function ri(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xi(e,n)}}function va(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ii(e,t,n,r){var i=e.updateQueue;$t=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,g=c.next;c.next=null,s===null?o=g:s.next=g,s=c;var j=e.alternate;j!==null&&(j=j.updateQueue,a=j.lastBaseUpdate,a!==s&&(a===null?j.firstBaseUpdate=g:a.next=g,j.lastBaseUpdate=c))}if(o!==null){var N=i.baseState;s=0,j=g=c=null,a=o;do{var y=a.lane,T=a.eventTime;if((r&y)===y){j!==null&&(j=j.next={eventTime:T,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var R=e,A=a;switch(y=t,T=n,A.tag){case 1:if(R=A.payload,typeof R=="function"){N=R.call(T,N,y);break e}N=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=A.payload,y=typeof R=="function"?R.call(T,N,y):R,y==null)break e;N=L({},N,y);break e;case 2:$t=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[a]:y.push(a))}else T={eventTime:T,lane:y,tag:a.tag,payload:a.payload,callback:a.callback,next:null},j===null?(g=j=T,c=N):j=j.next=T,s|=y;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;y=a,a=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(j===null&&(c=N),i.baseState=c,i.firstBaseUpdate=g,i.lastBaseUpdate=j,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);rn|=s,e.lanes=s,e.memoizedState=N}}function xa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(d(191,i));i.call(r)}}}var sr={},yt=Ot(sr),ar=Ot(sr),cr=Ot(sr);function tn(e){if(e===sr)throw Error(d(174));return e}function Fl(e,t){switch(de(cr,t),de(ar,e),de(yt,sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$i(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$i(t,e)}fe(yt),de(yt,t)}function _n(){fe(yt),fe(ar),fe(cr)}function ya(e){tn(cr.current);var t=tn(yt.current),n=$i(t,e.type);t!==n&&(de(ar,e),de(yt,n))}function $l(e){ar.current===e&&(fe(yt),fe(ar))}var ge=Ot(0);function li(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function Vl(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var oi=Pe.ReactCurrentDispatcher,Hl=Pe.ReactCurrentBatchConfig,nn=0,ve=null,Ee=null,Me=null,si=!1,ur=!1,dr=0,wd=0;function Oe(){throw Error(d(321))}function Wl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function Bl(e,t,n,r,i,o){if(nn=o,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oi.current=e===null||e.memoizedState===null?Nd:Sd,e=n(r,i),ur){o=0;do{if(ur=!1,dr=0,25<=o)throw Error(d(301));o+=1,Me=Ee=null,t.updateQueue=null,oi.current=Cd,e=n(r,i)}while(ur)}if(oi.current=ui,t=Ee!==null&&Ee.next!==null,nn=0,Me=Ee=ve=null,si=!1,t)throw Error(d(300));return e}function Ql(){var e=dr!==0;return dr=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ve.memoizedState=Me=e:Me=Me.next=e,Me}function lt(){if(Ee===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Me===null?ve.memoizedState:Me.next;if(t!==null)Me=t,Ee=e;else{if(e===null)throw Error(d(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Me===null?ve.memoizedState=Me=e:Me=Me.next=e}return Me}function pr(e,t){return typeof t=="function"?t(e):t}function Yl(e){var t=lt(),n=t.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var r=Ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,c=null,g=o;do{var j=g.lane;if((nn&j)===j)c!==null&&(c=c.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var N={lane:j,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};c===null?(a=c=N,s=r):c=c.next=N,ve.lanes|=j,rn|=j}g=g.next}while(g!==null&&g!==o);c===null?s=r:c.next=a,ut(r,t.memoizedState)||(Be=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ve.lanes|=o,rn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gl(e){var t=lt(),n=t.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);ut(o,t.memoizedState)||(Be=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function wa(){}function ja(e,t){var n=ve,r=lt(),i=t(),o=!ut(r.memoizedState,i);if(o&&(r.memoizedState=i,Be=!0),r=r.queue,Kl(Na.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,fr(9,ba.bind(null,n,r,i,t),void 0,null),Te===null)throw Error(d(349));(nn&30)!==0||ka(n,t,i)}return i}function ka(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ba(e,t,n,r){t.value=n,t.getSnapshot=r,Sa(t)&&Ca(e)}function Na(e,t,n){return n(function(){Sa(t)&&Ca(e)})}function Sa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function Ca(e){var t=Ct(e,1);t!==null&&ht(t,e,1,-1)}function za(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pr,lastRenderedState:e},t.queue=e,e=e.dispatch=bd.bind(null,ve,e),[t.memoizedState,e]}function fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ea(){return lt().memoizedState}function ai(e,t,n,r){var i=wt();ve.flags|=e,i.memoizedState=fr(1|t,n,void 0,r===void 0?null:r)}function ci(e,t,n,r){var i=lt();r=r===void 0?null:r;var o=void 0;if(Ee!==null){var s=Ee.memoizedState;if(o=s.destroy,r!==null&&Wl(r,s.deps)){i.memoizedState=fr(t,n,o,r);return}}ve.flags|=e,i.memoizedState=fr(1|t,n,o,r)}function _a(e,t){return ai(8390656,8,e,t)}function Kl(e,t){return ci(2048,8,e,t)}function Pa(e,t){return ci(4,2,e,t)}function Ma(e,t){return ci(4,4,e,t)}function Ta(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Da(e,t,n){return n=n!=null?n.concat([e]):null,ci(4,4,Ta.bind(null,t,e),n)}function Jl(){}function Ia(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function La(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ra(e,t,n){return(nn&21)===0?(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n):(ut(n,t)||(n=ps(),ve.lanes|=n,rn|=n,e.baseState=!0),t)}function jd(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var r=Hl.transition;Hl.transition={};try{e(!1),t()}finally{ce=n,Hl.transition=r}}function Oa(){return lt().memoizedState}function kd(e,t,n){var r=Bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Aa(e))Fa(t,n);else if(n=ha(e,t,n,r),n!==null){var i=Ue();ht(n,e,r,i),$a(n,t,r)}}function bd(e,t,n){var r=Bt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Aa(e))Fa(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,ut(a,s)){var c=t.interleaved;c===null?(i.next=i,Ol(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=ha(e,t,i,r),n!==null&&(i=Ue(),ht(n,e,r,i),$a(n,t,r))}}function Aa(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function Fa(e,t){ur=si=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $a(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xi(e,n)}}var ui={readContext:it,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},Nd={readContext:it,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:_a,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ai(4194308,4,Ta.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ai(4194308,4,e,t)},useInsertionEffect:function(e,t){return ai(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=kd.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:za,useDebugValue:Jl,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=za(!1),t=e[0];return e=jd.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,i=wt();if(he){if(n===void 0)throw Error(d(407));n=n()}else{if(n=t(),Te===null)throw Error(d(349));(nn&30)!==0||ka(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,_a(Na.bind(null,r,o,e),[e]),r.flags|=2048,fr(9,ba.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=wt(),t=Te.identifierPrefix;if(he){var n=St,r=Nt;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=wd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sd={readContext:it,useCallback:Ia,useContext:it,useEffect:Kl,useImperativeHandle:Da,useInsertionEffect:Pa,useLayoutEffect:Ma,useMemo:La,useReducer:Yl,useRef:Ea,useState:function(){return Yl(pr)},useDebugValue:Jl,useDeferredValue:function(e){var t=lt();return Ra(t,Ee.memoizedState,e)},useTransition:function(){var e=Yl(pr)[0],t=lt().memoizedState;return[e,t]},useMutableSource:wa,useSyncExternalStore:ja,useId:Oa,unstable_isNewReconciler:!1},Cd={readContext:it,useCallback:Ia,useContext:it,useEffect:Kl,useImperativeHandle:Da,useInsertionEffect:Pa,useLayoutEffect:Ma,useMemo:La,useReducer:Gl,useRef:Ea,useState:function(){return Gl(pr)},useDebugValue:Jl,useDeferredValue:function(e){var t=lt();return Ee===null?t.memoizedState=e:Ra(t,Ee.memoizedState,e)},useTransition:function(){var e=Gl(pr)[0],t=lt().memoizedState;return[e,t]},useMutableSource:wa,useSyncExternalStore:ja,useId:Oa,unstable_isNewReconciler:!1};function pt(e,t){if(e&&e.defaultProps){t=L({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ql(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:L({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var di={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=Bt(e),o=zt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ut(e,o,i),t!==null&&(ht(t,e,i,r),ri(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=Bt(e),o=zt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ut(e,o,i),t!==null&&(ht(t,e,i,r),ri(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=Bt(e),i=zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ut(e,i,r),t!==null&&(ht(t,e,r,n),ri(t,e,r))}};function Ua(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,r)||!Zn(i,o):!0}function Va(e,t,n){var r=!1,i=At,o=t.contextType;return typeof o=="object"&&o!==null?o=it(o):(i=We(t)?qt:Re.current,r=t.contextTypes,o=(r=r!=null)?kn(e,i):At),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=di,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ha(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&di.enqueueReplaceState(t,t.state,null)}function Xl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Al(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=it(o):(o=We(t)?qt:Re.current,i.context=kn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ql(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&di.enqueueReplaceState(i,i.state,null),ii(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Pn(e,t){try{var n="",r=t;do n+=ie(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Zl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function eo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zd=typeof WeakMap=="function"?WeakMap:Map;function Wa(e,t,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xi||(xi=!0,go=r),eo(e,t)},n}function Ba(e,t,n){n=zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){eo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){eo(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Qa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zd;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ud.bind(null,e,t,n),t.then(e,e))}function Ya(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ga(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zt(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Ed=Pe.ReactCurrentOwner,Be=!1;function $e(e,t,n,r){t.child=e===null?ma(t,null,n,r):Cn(t,e.child,n,r)}function Ka(e,t,n,r,i){n=n.render;var o=t.ref;return En(t,i),r=Bl(e,t,n,r,o,i),n=Ql(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(he&&n&&El(t),t.flags|=1,$e(e,t,r,i),t.child)}function Ja(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!bo(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,qa(e,t,o,r,i)):(e=Ni(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(s,r)&&e.ref===t.ref)return Et(e,t,i)}return t.flags|=1,e=Yt(o,r),e.ref=t.ref,e.return=t,t.child=e}function qa(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Zn(o,r)&&e.ref===t.ref)if(Be=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Be=!0);else return t.lanes=e.lanes,Et(e,t,i)}return to(e,t,n,r,i)}function Xa(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Tn,tt),tt|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(Tn,tt),tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,de(Tn,tt),tt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,de(Tn,tt),tt|=r;return $e(e,t,i,n),t.child}function Za(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function to(e,t,n,r,i){var o=We(n)?qt:Re.current;return o=kn(t,o),En(t,i),n=Bl(e,t,n,r,o,i),r=Ql(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(he&&r&&El(t),t.flags|=1,$e(e,t,n,i),t.child)}function ec(e,t,n,r,i){if(We(n)){var o=!0;Kr(t)}else o=!1;if(En(t,i),t.stateNode===null)fi(e,t),Va(t,n,r),Xl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,g=n.contextType;typeof g=="object"&&g!==null?g=it(g):(g=We(n)?qt:Re.current,g=kn(t,g));var j=n.getDerivedStateFromProps,N=typeof j=="function"||typeof s.getSnapshotBeforeUpdate=="function";N||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==g)&&Ha(t,s,r,g),$t=!1;var y=t.memoizedState;s.state=y,ii(t,r,s,i),c=t.memoizedState,a!==r||y!==c||He.current||$t?(typeof j=="function"&&(ql(t,n,j,r),c=t.memoizedState),(a=$t||Ua(t,n,a,r,y,c,g))?(N||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=g,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ga(e,t),a=t.memoizedProps,g=t.type===t.elementType?a:pt(t.type,a),s.props=g,N=t.pendingProps,y=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=it(c):(c=We(n)?qt:Re.current,c=kn(t,c));var T=n.getDerivedStateFromProps;(j=typeof T=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==N||y!==c)&&Ha(t,s,r,c),$t=!1,y=t.memoizedState,s.state=y,ii(t,r,s,i);var R=t.memoizedState;a!==N||y!==R||He.current||$t?(typeof T=="function"&&(ql(t,n,T,r),R=t.memoizedState),(g=$t||Ua(t,n,g,r,y,R,c)||!1)?(j||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,R,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,R,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=R),s.props=r,s.state=R,s.context=c,r=g):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return no(e,t,n,r,o,i)}function no(e,t,n,r,i,o){Za(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&la(t,n,!1),Et(e,t,o);r=t.stateNode,Ed.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Cn(t,e.child,null,o),t.child=Cn(t,null,a,o)):$e(e,t,a,o),t.memoizedState=r.state,i&&la(t,n,!0),t.child}function tc(e){var t=e.stateNode;t.pendingContext?ra(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ra(e,t.context,!1),Fl(e,t.containerInfo)}function nc(e,t,n,r,i){return Sn(),Tl(i),t.flags|=256,$e(e,t,n,r),t.child}var ro={dehydrated:null,treeContext:null,retryLane:0};function io(e){return{baseLanes:e,cachePool:null,transitions:null}}function rc(e,t,n){var r=t.pendingProps,i=ge.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),de(ge,i&1),e===null)return Ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Si(s,r,0,null),e=an(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=io(n),t.memoizedState=ro,e):lo(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return _d(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Yt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Yt(a,o):(o=an(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?io(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ro,r}return o=e.child,e=o.sibling,r=Yt(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function lo(e,t){return t=Si({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function pi(e,t,n,r){return r!==null&&Tl(r),Cn(t,e.child,null,n),e=lo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _d(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Zl(Error(d(422))),pi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Si({mode:"visible",children:r.children},i,0,null),o=an(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Cn(t,e.child,null,s),t.child.memoizedState=io(s),t.memoizedState=ro,o);if((t.mode&1)===0)return pi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(d(419)),r=Zl(o,r,void 0),pi(e,t,s,r)}if(a=(s&e.childLanes)!==0,Be||a){if(r=Te,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ct(e,i),ht(r,e,i,-1))}return ko(),r=Zl(Error(d(421))),pi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Vd.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,et=Rt(i.nextSibling),Ze=t,he=!0,dt=null,e!==null&&(nt[rt++]=Nt,nt[rt++]=St,nt[rt++]=Xt,Nt=e.id,St=e.overflow,Xt=t),t=lo(t,r.children),t.flags|=4096,t)}function ic(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Rl(e.return,t,n)}function oo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function lc(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if($e(e,t,r.children,n),r=ge.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ic(e,n,t);else if(e.tag===19)ic(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(ge,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&li(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),oo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&li(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}oo(t,!0,n,null,o);break;case"together":oo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,n=Yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pd(e,t,n){switch(t.tag){case 3:tc(t),Sn();break;case 5:ya(t);break;case 1:We(t.type)&&Kr(t);break;case 4:Fl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;de(ti,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(de(ge,ge.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?rc(e,t,n):(de(ge,ge.current&1),e=Et(e,t,n),e!==null?e.sibling:null);de(ge,ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return lc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(ge,ge.current),r)break;return null;case 22:case 23:return t.lanes=0,Xa(e,t,n)}return Et(e,t,n)}var oc,so,sc,ac;oc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},so=function(){},sc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,tn(yt.current);var o=null;switch(n){case"input":i=Ri(e,i),r=Ri(e,r),o=[];break;case"select":i=L({},i,{value:void 0}),r=L({},r,{value:void 0}),o=[];break;case"textarea":i=Fi(e,i),r=Fi(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qr)}Ui(n,r);var s;n=null;for(g in i)if(!r.hasOwnProperty(g)&&i.hasOwnProperty(g)&&i[g]!=null)if(g==="style"){var a=i[g];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(b.hasOwnProperty(g)?o||(o=[]):(o=o||[]).push(g,null));for(g in r){var c=r[g];if(a=i!=null?i[g]:void 0,r.hasOwnProperty(g)&&c!==a&&(c!=null||a!=null))if(g==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(g,n)),n=c;else g==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(o=o||[]).push(g,c)):g==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(g,""+c):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(b.hasOwnProperty(g)?(c!=null&&g==="onScroll"&&pe("scroll",e),o||a===c||(o=[])):(o=o||[]).push(g,c))}n&&(o=o||[]).push("style",n);var g=o;(t.updateQueue=g)&&(t.flags|=4)}},ac=function(e,t,n,r){n!==r&&(t.flags|=4)};function mr(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Md(e,t,n){var r=t.pendingProps;switch(_l(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return We(t.type)&&Gr(),Ae(t),null;case 3:return r=t.stateNode,_n(),fe(He),fe(Re),Vl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,dt!==null&&(yo(dt),dt=null))),so(e,t),Ae(t),null;case 5:$l(t);var i=tn(cr.current);if(n=t.type,e!==null&&t.stateNode!=null)sc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(d(166));return Ae(t),null}if(e=tn(yt.current),Zr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[xt]=t,r[ir]=o,e=(t.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<tr.length;i++)pe(tr[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Vo(r,o),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},pe("invalid",r);break;case"textarea":Bo(r,o),pe("invalid",r)}Ui(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Br(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Br(r.textContent,a,e),i=["children",""+a]):b.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&pe("scroll",r)}switch(n){case"input":kr(r),Wo(r,o,!0);break;case"textarea":kr(r),Yo(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Qr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Go(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[xt]=t,e[ir]=r,oc(e,t,!1,!1),t.stateNode=e;e:{switch(s=Vi(n,r),n){case"dialog":pe("cancel",e),pe("close",e),i=r;break;case"iframe":case"object":case"embed":pe("load",e),i=r;break;case"video":case"audio":for(i=0;i<tr.length;i++)pe(tr[i],e);i=r;break;case"source":pe("error",e),i=r;break;case"img":case"image":case"link":pe("error",e),pe("load",e),i=r;break;case"details":pe("toggle",e),i=r;break;case"input":Vo(e,r),i=Ri(e,r),pe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=L({},r,{value:void 0}),pe("invalid",e);break;case"textarea":Bo(e,r),i=Fi(e,r),pe("invalid",e);break;default:i=r}Ui(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var c=a[o];o==="style"?qo(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ko(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Rn(e,c):typeof c=="number"&&Rn(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(b.hasOwnProperty(o)?c!=null&&o==="onScroll"&&pe("scroll",e):c!=null&&Ke(e,o,c,s))}switch(n){case"input":kr(e),Wo(e,r,!1);break;case"textarea":kr(e),Yo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ae(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?un(e,!!r.multiple,o,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)ac(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(d(166));if(n=tn(cr.current),tn(yt.current),Zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(o=r.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:Br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Br(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return Ae(t),null;case 13:if(fe(ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&et!==null&&(t.mode&1)!==0&&(t.flags&128)===0)da(),Sn(),t.flags|=98560,o=!1;else if(o=Zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(d(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(d(317));o[xt]=t}else Sn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),o=!1}else dt!==null&&(yo(dt),dt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ge.current&1)!==0?_e===0&&(_e=3):ko())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return _n(),so(e,t),e===null&&nr(t.stateNode.containerInfo),Ae(t),null;case 10:return Ll(t.type._context),Ae(t),null;case 17:return We(t.type)&&Gr(),Ae(t),null;case 19:if(fe(ge),o=t.memoizedState,o===null)return Ae(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)mr(o,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=li(e),s!==null){for(t.flags|=128,mr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return de(ge,ge.current&1|2),t.child}e=e.sibling}o.tail!==null&&be()>Dn&&(t.flags|=128,r=!0,mr(o,!1),t.lanes=4194304)}else{if(!r)if(e=li(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!he)return Ae(t),null}else 2*be()-o.renderingStartTime>Dn&&n!==1073741824&&(t.flags|=128,r=!0,mr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=be(),t.sibling=null,n=ge.current,de(ge,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return jo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(tt&1073741824)!==0&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(d(156,t.tag))}function Td(e,t){switch(_l(t),t.tag){case 1:return We(t.type)&&Gr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _n(),fe(He),fe(Re),Vl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return $l(t),null;case 13:if(fe(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(ge),null;case 4:return _n(),null;case 10:return Ll(t.type._context),null;case 22:case 23:return jo(),null;case 24:return null;default:return null}}var mi=!1,Fe=!1,Dd=typeof WeakSet=="function"?WeakSet:Set,I=null;function Mn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(e,t,r)}else n.current=null}function ao(e,t,n){try{n()}catch(r){je(e,t,r)}}var cc=!1;function Id(e,t){if(wl=Ir,e=Us(),pl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,g=0,j=0,N=e,y=null;t:for(;;){for(var T;N!==n||i!==0&&N.nodeType!==3||(a=s+i),N!==o||r!==0&&N.nodeType!==3||(c=s+r),N.nodeType===3&&(s+=N.nodeValue.length),(T=N.firstChild)!==null;)y=N,N=T;for(;;){if(N===e)break t;if(y===n&&++g===i&&(a=s),y===o&&++j===r&&(c=s),(T=N.nextSibling)!==null)break;N=y,y=N.parentNode}N=T}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(jl={focusedElem:e,selectionRange:n},Ir=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var R=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var A=R.memoizedProps,Ne=R.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?A:pt(t.type,A),Ne);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(d(163))}}catch(S){je(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return R=cc,cc=!1,R}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ao(t,n,o)}i=i.next}while(i!==r)}}function hi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function co(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function uc(e){var t=e.alternate;t!==null&&(e.alternate=null,uc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[ir],delete t[Sl],delete t[gd],delete t[vd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dc(e){return e.tag===5||e.tag===3||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qr));else if(r!==4&&(e=e.child,e!==null))for(uo(e,t,n),e=e.sibling;e!==null;)uo(e,t,n),e=e.sibling}function po(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(po(e,t,n),e=e.sibling;e!==null;)po(e,t,n),e=e.sibling}var Ie=null,ft=!1;function Vt(e,t,n){for(n=n.child;n!==null;)fc(e,t,n),n=n.sibling}function fc(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(Er,n)}catch{}switch(n.tag){case 5:Fe||Mn(n,t);case 6:var r=Ie,i=ft;Ie=null,Vt(e,t,n),Ie=r,ft=i,Ie!==null&&(ft?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(ft?(e=Ie,n=n.stateNode,e.nodeType===8?Nl(e.parentNode,n):e.nodeType===1&&Nl(e,n),Yn(e)):Nl(Ie,n.stateNode));break;case 4:r=Ie,i=ft,Ie=n.stateNode.containerInfo,ft=!0,Vt(e,t,n),Ie=r,ft=i;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&ao(n,t,s),i=i.next}while(i!==r)}Vt(e,t,n);break;case 1:if(!Fe&&(Mn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,t,a)}Vt(e,t,n);break;case 21:Vt(e,t,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,Vt(e,t,n),Fe=r):Vt(e,t,n);break;default:Vt(e,t,n)}}function mc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Dd),t.forEach(function(r){var i=Hd.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,ft=!1;break e;case 3:Ie=a.stateNode.containerInfo,ft=!0;break e;case 4:Ie=a.stateNode.containerInfo,ft=!0;break e}a=a.return}if(Ie===null)throw Error(d(160));fc(o,s,i),Ie=null,ft=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(g){je(i,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hc(t,e),t=t.sibling}function hc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),jt(e),r&4){try{hr(3,e,e.return),hi(3,e)}catch(A){je(e,e.return,A)}try{hr(5,e,e.return)}catch(A){je(e,e.return,A)}}break;case 1:mt(t,e),jt(e),r&512&&n!==null&&Mn(n,n.return);break;case 5:if(mt(t,e),jt(e),r&512&&n!==null&&Mn(n,n.return),e.flags&32){var i=e.stateNode;try{Rn(i,"")}catch(A){je(e,e.return,A)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Ho(i,o),Vi(a,s);var g=Vi(a,o);for(s=0;s<c.length;s+=2){var j=c[s],N=c[s+1];j==="style"?qo(i,N):j==="dangerouslySetInnerHTML"?Ko(i,N):j==="children"?Rn(i,N):Ke(i,j,N,g)}switch(a){case"input":Oi(i,o);break;case"textarea":Qo(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var T=o.value;T!=null?un(i,!!o.multiple,T,!1):y!==!!o.multiple&&(o.defaultValue!=null?un(i,!!o.multiple,o.defaultValue,!0):un(i,!!o.multiple,o.multiple?[]:"",!1))}i[ir]=o}catch(A){je(e,e.return,A)}}break;case 6:if(mt(t,e),jt(e),r&4){if(e.stateNode===null)throw Error(d(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(A){je(e,e.return,A)}}break;case 3:if(mt(t,e),jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yn(t.containerInfo)}catch(A){je(e,e.return,A)}break;case 4:mt(t,e),jt(e);break;case 13:mt(t,e),jt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ho=be())),r&4&&mc(e);break;case 22:if(j=n!==null&&n.memoizedState!==null,e.mode&1?(Fe=(g=Fe)||j,mt(t,e),Fe=g):mt(t,e),jt(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!j&&(e.mode&1)!==0)for(I=e,j=e.child;j!==null;){for(N=I=j;I!==null;){switch(y=I,T=y.child,y.tag){case 0:case 11:case 14:case 15:hr(4,y,y.return);break;case 1:Mn(y,y.return);var R=y.stateNode;if(typeof R.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,R.props=t.memoizedProps,R.state=t.memoizedState,R.componentWillUnmount()}catch(A){je(r,n,A)}}break;case 5:Mn(y,y.return);break;case 22:if(y.memoizedState!==null){xc(N);continue}}T!==null?(T.return=y,I=T):xc(N)}j=j.sibling}e:for(j=null,N=e;;){if(N.tag===5){if(j===null){j=N;try{i=N.stateNode,g?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=N.stateNode,c=N.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Jo("display",s))}catch(A){je(e,e.return,A)}}}else if(N.tag===6){if(j===null)try{N.stateNode.nodeValue=g?"":N.memoizedProps}catch(A){je(e,e.return,A)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;j===N&&(j=null),N=N.return}j===N&&(j=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:mt(t,e),jt(e),r&4&&mc(e);break;case 21:break;default:mt(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(dc(n)){var r=n;break e}n=n.return}throw Error(d(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Rn(i,""),r.flags&=-33);var o=pc(e);po(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=pc(e);uo(e,a,s);break;default:throw Error(d(161))}}catch(c){je(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ld(e,t,n){I=e,gc(e)}function gc(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||mi;if(!s){var a=i.alternate,c=a!==null&&a.memoizedState!==null||Fe;a=mi;var g=Fe;if(mi=s,(Fe=c)&&!g)for(I=i;I!==null;)s=I,c=s.child,s.tag===22&&s.memoizedState!==null?yc(i):c!==null?(c.return=s,I=c):yc(i);for(;o!==null;)I=o,gc(o),o=o.sibling;I=i,mi=a,Fe=g}vc(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,I=o):vc(e)}}function vc(e){for(;I!==null;){var t=I;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Fe||hi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&xa(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xa(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var j=g.memoizedState;if(j!==null){var N=j.dehydrated;N!==null&&Yn(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(d(163))}Fe||t.flags&512&&co(t)}catch(y){je(t,t.return,y)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function xc(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function yc(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hi(4,t)}catch(c){je(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){je(t,i,c)}}var o=t.return;try{co(t)}catch(c){je(t,o,c)}break;case 5:var s=t.return;try{co(t)}catch(c){je(t,s,c)}}}catch(c){je(t,t.return,c)}if(t===e){I=null;break}var a=t.sibling;if(a!==null){a.return=t.return,I=a;break}I=t.return}}var Rd=Math.ceil,gi=Pe.ReactCurrentDispatcher,fo=Pe.ReactCurrentOwner,ot=Pe.ReactCurrentBatchConfig,ne=0,Te=null,Ce=null,Le=0,tt=0,Tn=Ot(0),_e=0,gr=null,rn=0,vi=0,mo=0,vr=null,Qe=null,ho=0,Dn=1/0,_t=null,xi=!1,go=null,Ht=null,yi=!1,Wt=null,wi=0,xr=0,vo=null,ji=-1,ki=0;function Ue(){return(ne&6)!==0?be():ji!==-1?ji:ji=be()}function Bt(e){return(e.mode&1)===0?1:(ne&2)!==0&&Le!==0?Le&-Le:yd.transition!==null?(ki===0&&(ki=ps()),ki):(e=ce,e!==0||(e=window.event,e=e===void 0?16:js(e.type)),e)}function ht(e,t,n,r){if(50<xr)throw xr=0,vo=null,Error(d(185));Vn(e,n,r),((ne&2)===0||e!==Te)&&(e===Te&&((ne&2)===0&&(vi|=n),_e===4&&Qt(e,Le)),Ye(e,r),n===1&&ne===0&&(t.mode&1)===0&&(Dn=be()+500,Jr&&Ft()))}function Ye(e,t){var n=e.callbackNode;yu(e,t);var r=Mr(e,e===Te?Le:0);if(r===0)n!==null&&cs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cs(n),t===1)e.tag===0?xd(jc.bind(null,e)):oa(jc.bind(null,e)),md(function(){(ne&6)===0&&Ft()}),n=null;else{switch(fs(r)){case 1:n=Ki;break;case 4:n=us;break;case 16:n=zr;break;case 536870912:n=ds;break;default:n=zr}n=_c(n,wc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wc(e,t){if(ji=-1,ki=0,(ne&6)!==0)throw Error(d(327));var n=e.callbackNode;if(In()&&e.callbackNode!==n)return null;var r=Mr(e,e===Te?Le:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=bi(e,r);else{t=r;var i=ne;ne|=2;var o=bc();(Te!==e||Le!==t)&&(_t=null,Dn=be()+500,on(e,t));do try{Fd();break}catch(a){kc(e,a)}while(!0);Il(),gi.current=o,ne=i,Ce!==null?t=0:(Te=null,Le=0,t=_e)}if(t!==0){if(t===2&&(i=Ji(e),i!==0&&(r=i,t=xo(e,i))),t===1)throw n=gr,on(e,0),Qt(e,r),Ye(e,be()),n;if(t===6)Qt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Od(i)&&(t=bi(e,r),t===2&&(o=Ji(e),o!==0&&(r=o,t=xo(e,o))),t===1))throw n=gr,on(e,0),Qt(e,r),Ye(e,be()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(d(345));case 2:sn(e,Qe,_t);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=ho+500-be(),10<t)){if(Mr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=bl(sn.bind(null,e,Qe,_t),t);break}sn(e,Qe,_t);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ct(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rd(r/1960))-r,10<r){e.timeoutHandle=bl(sn.bind(null,e,Qe,_t),r);break}sn(e,Qe,_t);break;case 5:sn(e,Qe,_t);break;default:throw Error(d(329))}}}return Ye(e,be()),e.callbackNode===n?wc.bind(null,e):null}function xo(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=bi(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&yo(t)),e}function yo(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function Od(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ut(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~mo,t&=~vi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function jc(e){if((ne&6)!==0)throw Error(d(327));In();var t=Mr(e,0);if((t&1)===0)return Ye(e,be()),null;var n=bi(e,t);if(e.tag!==0&&n===2){var r=Ji(e);r!==0&&(t=r,n=xo(e,r))}if(n===1)throw n=gr,on(e,0),Qt(e,t),Ye(e,be()),n;if(n===6)throw Error(d(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,Qe,_t),Ye(e,be()),null}function wo(e,t){var n=ne;ne|=1;try{return e(t)}finally{ne=n,ne===0&&(Dn=be()+500,Jr&&Ft())}}function ln(e){Wt!==null&&Wt.tag===0&&(ne&6)===0&&In();var t=ne;ne|=1;var n=ot.transition,r=ce;try{if(ot.transition=null,ce=1,e)return e()}finally{ce=r,ot.transition=n,ne=t,(ne&6)===0&&Ft()}}function jo(){tt=Tn.current,fe(Tn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,fd(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(_l(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gr();break;case 3:_n(),fe(He),fe(Re),Vl();break;case 5:$l(r);break;case 4:_n();break;case 13:fe(ge);break;case 19:fe(ge);break;case 10:Ll(r.type._context);break;case 22:case 23:jo()}n=n.return}if(Te=e,Ce=e=Yt(e.current,null),Le=tt=t,_e=0,gr=null,mo=vi=rn=0,Qe=vr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}en=null}return e}function kc(e,t){do{var n=Ce;try{if(Il(),oi.current=ui,si){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}si=!1}if(nn=0,Me=Ee=ve=null,ur=!1,dr=0,fo.current=null,n===null||n.return===null){_e=1,gr=t,Ce=null;break}e:{var o=e,s=n.return,a=n,c=t;if(t=Le,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var g=c,j=a,N=j.tag;if((j.mode&1)===0&&(N===0||N===11||N===15)){var y=j.alternate;y?(j.updateQueue=y.updateQueue,j.memoizedState=y.memoizedState,j.lanes=y.lanes):(j.updateQueue=null,j.memoizedState=null)}var T=Ya(s);if(T!==null){T.flags&=-257,Ga(T,s,a,o,t),T.mode&1&&Qa(o,g,t),t=T,c=g;var R=t.updateQueue;if(R===null){var A=new Set;A.add(c),t.updateQueue=A}else R.add(c);break e}else{if((t&1)===0){Qa(o,g,t),ko();break e}c=Error(d(426))}}else if(he&&a.mode&1){var Ne=Ya(s);if(Ne!==null){(Ne.flags&65536)===0&&(Ne.flags|=256),Ga(Ne,s,a,o,t),Tl(Pn(c,a));break e}}o=c=Pn(c,a),_e!==4&&(_e=2),vr===null?vr=[o]:vr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Wa(o,c,t);va(o,f);break e;case 1:a=c;var u=o.type,m=o.stateNode;if((o.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ht===null||!Ht.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Ba(o,a,t);va(o,S);break e}}o=o.return}while(o!==null)}Sc(n)}catch($){t=$,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function bc(){var e=gi.current;return gi.current=ui,e===null?ui:e}function ko(){(_e===0||_e===3||_e===2)&&(_e=4),Te===null||(rn&268435455)===0&&(vi&268435455)===0||Qt(Te,Le)}function bi(e,t){var n=ne;ne|=2;var r=bc();(Te!==e||Le!==t)&&(_t=null,on(e,t));do try{Ad();break}catch(i){kc(e,i)}while(!0);if(Il(),ne=n,gi.current=r,Ce!==null)throw Error(d(261));return Te=null,Le=0,_e}function Ad(){for(;Ce!==null;)Nc(Ce)}function Fd(){for(;Ce!==null&&!uu();)Nc(Ce)}function Nc(e){var t=Ec(e.alternate,e,tt);e.memoizedProps=e.pendingProps,t===null?Sc(e):Ce=t,fo.current=null}function Sc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Md(n,t,tt),n!==null){Ce=n;return}}else{if(n=Td(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,Ce=null;return}}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);_e===0&&(_e=5)}function sn(e,t,n){var r=ce,i=ot.transition;try{ot.transition=null,ce=1,$d(e,t,n,r)}finally{ot.transition=i,ce=r}return null}function $d(e,t,n,r){do In();while(Wt!==null);if((ne&6)!==0)throw Error(d(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(wu(e,o),e===Te&&(Ce=Te=null,Le=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||yi||(yi=!0,_c(zr,function(){return In(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=ot.transition,ot.transition=null;var s=ce;ce=1;var a=ne;ne|=4,fo.current=null,Id(e,n),hc(n,e),od(jl),Ir=!!wl,jl=wl=null,e.current=n,Ld(n),du(),ne=a,ce=s,ot.transition=o}else e.current=n;if(yi&&(yi=!1,Wt=e,wi=i),o=e.pendingLanes,o===0&&(Ht=null),mu(n.stateNode),Ye(e,be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xi)throw xi=!1,e=go,go=null,e;return(wi&1)!==0&&e.tag!==0&&In(),o=e.pendingLanes,(o&1)!==0?e===vo?xr++:(xr=0,vo=e):xr=0,Ft(),null}function In(){if(Wt!==null){var e=fs(wi),t=ot.transition,n=ce;try{if(ot.transition=null,ce=16>e?16:e,Wt===null)var r=!1;else{if(e=Wt,Wt=null,wi=0,(ne&6)!==0)throw Error(d(331));var i=ne;for(ne|=4,I=e.current;I!==null;){var o=I,s=o.child;if((I.flags&16)!==0){var a=o.deletions;if(a!==null){for(var c=0;c<a.length;c++){var g=a[c];for(I=g;I!==null;){var j=I;switch(j.tag){case 0:case 11:case 15:hr(8,j,o)}var N=j.child;if(N!==null)N.return=j,I=N;else for(;I!==null;){j=I;var y=j.sibling,T=j.return;if(uc(j),j===g){I=null;break}if(y!==null){y.return=T,I=y;break}I=T}}}var R=o.alternate;if(R!==null){var A=R.child;if(A!==null){R.child=null;do{var Ne=A.sibling;A.sibling=null,A=Ne}while(A!==null)}}I=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,I=s;else e:for(;I!==null;){if(o=I,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:hr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,I=f;break e}I=o.return}}var u=e.current;for(I=u;I!==null;){s=I;var m=s.child;if((s.subtreeFlags&2064)!==0&&m!==null)m.return=s,I=m;else e:for(s=u;I!==null;){if(a=I,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:hi(9,a)}}catch($){je(a,a.return,$)}if(a===s){I=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,I=S;break e}I=a.return}}if(ne=i,Ft(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(Er,e)}catch{}r=!0}return r}finally{ce=n,ot.transition=t}}return!1}function Cc(e,t,n){t=Pn(n,t),t=Wa(e,t,1),e=Ut(e,t,1),t=Ue(),e!==null&&(Vn(e,1,t),Ye(e,t))}function je(e,t,n){if(e.tag===3)Cc(e,e,n);else for(;t!==null;){if(t.tag===3){Cc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=Pn(n,e),e=Ba(t,e,1),t=Ut(t,e,1),e=Ue(),t!==null&&(Vn(t,1,e),Ye(t,e));break}}t=t.return}}function Ud(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,Te===e&&(Le&n)===n&&(_e===4||_e===3&&(Le&130023424)===Le&&500>be()-ho?on(e,0):mo|=n),Ye(e,t)}function zc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Pr,Pr<<=1,(Pr&130023424)===0&&(Pr=4194304)));var n=Ue();e=Ct(e,t),e!==null&&(Vn(e,t,n),Ye(e,n))}function Vd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zc(e,n)}function Hd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(d(314))}r!==null&&r.delete(t),zc(e,n)}var Ec;Ec=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Be=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Be=!1,Pd(e,t,n);Be=(e.flags&131072)!==0}else Be=!1,he&&(t.flags&1048576)!==0&&sa(t,Xr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fi(e,t),e=t.pendingProps;var i=kn(t,Re.current);En(t,n),i=Bl(null,t,r,e,i,n);var o=Ql();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(r)?(o=!0,Kr(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Al(t),i.updater=di,t.stateNode=i,i._reactInternals=t,Xl(t,r,e,n),t=no(null,t,r,!0,o,n)):(t.tag=0,he&&o&&El(t),$e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Bd(r),e=pt(r,e),i){case 0:t=to(null,t,r,e,n);break e;case 1:t=ec(null,t,r,e,n);break e;case 11:t=Ka(null,t,r,e,n);break e;case 14:t=Ja(null,t,r,pt(r.type,e),n);break e}throw Error(d(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),to(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),ec(e,t,r,i,n);case 3:e:{if(tc(t),e===null)throw Error(d(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ga(e,t),ii(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Pn(Error(d(423)),t),t=nc(e,t,r,n,i);break e}else if(r!==i){i=Pn(Error(d(424)),t),t=nc(e,t,r,n,i);break e}else for(et=Rt(t.stateNode.containerInfo.firstChild),Ze=t,he=!0,dt=null,n=ma(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sn(),r===i){t=Et(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return ya(t),e===null&&Ml(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,kl(r,i)?s=null:o!==null&&kl(r,o)&&(t.flags|=32),Za(e,t),$e(e,t,s,n),t.child;case 6:return e===null&&Ml(t),null;case 13:return rc(e,t,n);case 4:return Fl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cn(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Ka(e,t,r,i,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,de(ti,r._currentValue),r._currentValue=s,o!==null)if(ut(o.value,s)){if(o.children===i.children&&!He.current){t=Et(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=zt(-1,n&-n),c.tag=2;var g=o.updateQueue;if(g!==null){g=g.shared;var j=g.pending;j===null?c.next=c:(c.next=j.next,j.next=c),g.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Rl(o.return,n,t),a.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(d(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Rl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}$e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,En(t,n),i=it(i),r=r(i),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,i=pt(r,t.pendingProps),i=pt(r.type,i),Ja(e,t,r,i,n);case 15:return qa(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),fi(e,t),t.tag=1,We(r)?(e=!0,Kr(t)):e=!1,En(t,n),Va(t,r,i),Xl(t,r,i,n),no(null,t,r,!0,e,n);case 19:return lc(e,t,n);case 22:return Xa(e,t,n)}throw Error(d(156,t.tag))};function _c(e,t){return as(e,t)}function Wd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,r){return new Wd(e,t,n,r)}function bo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bd(e){if(typeof e=="function")return bo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Se)return 11;if(e===gt)return 14}return 2}function Yt(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ni(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")bo(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case x:return an(n.children,i,o,t);case k:s=8,i|=8;break;case F:return e=st(12,n,t,i|2),e.elementType=F,e.lanes=o,e;case ke:return e=st(13,n,t,i),e.elementType=ke,e.lanes=o,e;case at:return e=st(19,n,t,i),e.elementType=at,e.lanes=o,e;case we:return Si(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:s=10;break e;case re:s=9;break e;case Se:s=11;break e;case gt:s=14;break e;case Ve:s=16,r=null;break e}throw Error(d(130,e==null?e:typeof e,""))}return t=st(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function an(e,t,n,r){return e=st(7,e,r,t),e.lanes=n,e}function Si(e,t,n,r){return e=st(22,e,r,t),e.elementType=we,e.lanes=n,e.stateNode={isHidden:!1},e}function No(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function So(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qd(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qi(0),this.expirationTimes=qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Co(e,t,n,r,i,o,s,a,c){return e=new Qd(e,t,n,a,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=st(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Al(o),e}function Yd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:E,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Pc(e){if(!e)return At;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(d(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(d(171))}if(e.tag===1){var n=e.type;if(We(n))return ia(e,n,t)}return t}function Mc(e,t,n,r,i,o,s,a,c){return e=Co(n,r,!0,e,i,o,s,a,c),e.context=Pc(null),n=e.current,r=Ue(),i=Bt(n),o=zt(r,i),o.callback=t??null,Ut(n,o,i),e.current.lanes=i,Vn(e,i,r),Ye(e,r),e}function Ci(e,t,n,r){var i=t.current,o=Ue(),s=Bt(i);return n=Pc(n),t.context===null?t.context=n:t.pendingContext=n,t=zt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(i,t,s),e!==null&&(ht(e,i,s,o),ri(e,i,s)),s}function zi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zo(e,t){Tc(e,t),(e=e.alternate)&&Tc(e,t)}function Gd(){return null}var Dc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Eo(e){this._internalRoot=e}Ei.prototype.render=Eo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));Ci(e,t,null,null)},Ei.prototype.unmount=Eo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){Ci(null,e,null,null)}),t[kt]=null}};function Ei(e){this._internalRoot=e}Ei.prototype.unstable_scheduleHydration=function(e){if(e){var t=gs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&t!==0&&t<Dt[n].priority;n++);Dt.splice(n,0,e),n===0&&ys(e)}};function _o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ic(){}function Kd(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var g=zi(s);o.call(g)}}var s=Mc(t,r,e,0,null,!1,!1,"",Ic);return e._reactRootContainer=s,e[kt]=s.current,nr(e.nodeType===8?e.parentNode:e),ln(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var g=zi(c);a.call(g)}}var c=Co(e,0,!1,null,null,!1,!1,"",Ic);return e._reactRootContainer=c,e[kt]=c.current,nr(e.nodeType===8?e.parentNode:e),ln(function(){Ci(t,c,n,r)}),c}function Pi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var c=zi(s);a.call(c)}}Ci(t,s,e,i)}else s=Kd(n,t,e,i,r);return zi(s)}ms=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Un(t.pendingLanes);n!==0&&(Xi(t,n|1),Ye(t,be()),(ne&6)===0&&(Dn=be()+500,Ft()))}break;case 13:ln(function(){var r=Ct(e,1);if(r!==null){var i=Ue();ht(r,e,1,i)}}),zo(e,1)}},Zi=function(e){if(e.tag===13){var t=Ct(e,134217728);if(t!==null){var n=Ue();ht(t,e,134217728,n)}zo(e,134217728)}},hs=function(e){if(e.tag===13){var t=Bt(e),n=Ct(e,t);if(n!==null){var r=Ue();ht(n,e,t,r)}zo(e,t)}},gs=function(){return ce},vs=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}},Bi=function(e,t,n){switch(t){case"input":if(Oi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Yr(r);if(!i)throw Error(d(90));Uo(r),Oi(r,i)}}}break;case"textarea":Qo(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}},ts=wo,ns=ln;var Jd={usingClientEntryPoint:!1,Events:[lr,wn,Yr,Zo,es,wo]},yr={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qd={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=os(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||Gd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mi.isDisabled&&Mi.supportsFiber)try{Er=Mi.inject(qd),vt=Mi}catch{}}return Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jd,Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_o(t))throw Error(d(200));return Yd(e,t,null,n)},Ge.createRoot=function(e,t){if(!_o(e))throw Error(d(299));var n=!1,r="",i=Dc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Co(e,1,!1,null,null,n,!1,r,i),e[kt]=t.current,nr(e.nodeType===8?e.parentNode:e),new Eo(t)},Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=os(t),e=e===null?null:e.stateNode,e},Ge.flushSync=function(e){return ln(e)},Ge.hydrate=function(e,t,n){if(!_i(t))throw Error(d(200));return Pi(null,e,t,!0,n)},Ge.hydrateRoot=function(e,t,n){if(!_o(e))throw Error(d(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Dc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Mc(t,null,e,1,n??null,i,!1,o,s),e[kt]=t.current,nr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ei(t)},Ge.render=function(e,t,n){if(!_i(t))throw Error(d(200));return Pi(null,e,t,!1,n)},Ge.unmountComponentAtNode=function(e){if(!_i(e))throw Error(d(40));return e._reactRootContainer?(ln(function(){Pi(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1},Ge.unstable_batchedUpdates=wo,Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_i(n))throw Error(d(200));if(e==null||e._reactInternals===void 0)throw Error(d(38));return Pi(e,t,n,!1,r)},Ge.version="18.3.1-next-f1338f8080-20240426",Ge}var Vc;function op(){if(Vc)return To.exports;Vc=1;function h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)}catch(z){console.error(z)}}return h(),To.exports=lp(),To.exports}var Hc;function sp(){if(Hc)return Ti;Hc=1;var h=op();return Ti.createRoot=h.createRoot,Ti.hydrateRoot=h.hydrateRoot,Ti}var ap=sp();const cp=Bc(ap);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=h=>h.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qc=(...h)=>h.filter((z,d,M)=>!!z&&z.trim()!==""&&M.indexOf(z)===d).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=se.forwardRef(({color:h="currentColor",size:z=24,strokeWidth:d=2,absoluteStrokeWidth:M,className:b="",children:v,iconNode:C,...B},D)=>se.createElement("svg",{ref:D,...dp,width:z,height:z,stroke:h,strokeWidth:M?Number(d)*24/Number(z):d,className:Qc("lucide",b),...B},[...C.map(([J,te])=>se.createElement(J,te)),...Array.isArray(v)?v:[v]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=(h,z)=>{const d=se.forwardRef(({className:M,...b},v)=>se.createElement(pp,{ref:v,iconNode:z,className:Qc(`lucide-${up(h)}`,M),...b}));return d.displayName=`${h}`,d};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Yc=K("Briefcase",fp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]],hp=K("Building",mp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],vp=K("Calendar",gp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],yp=K("Check",xp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Gc=K("ChevronDown",wp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],kp=K("ChevronUp",jp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Kc=K("CircleAlert",bp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],jr=K("CircleCheck",Np);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Cp=K("Compass",Sp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Oo=K("Download",zp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Jc=K("Eye",Ep);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],qc=K("FileText",_p);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],Mp=K("FolderGit2",Pp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Dp=K("Github",Tp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Xc=K("GraduationCap",Ip);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Rp=K("Instagram",Lp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Ap=K("Layers",Op);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],$p=K("Linkedin",Fp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Lo=K("Mail",Up);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Ao=K("MapPin",Vp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],Wp=K("Microscope",Hp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Zc=K("Phone",Bp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Di=K("Plus",Qp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],Gp=K("Printer",Yp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],eu=K("Quote",Kp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],qp=K("RotateCcw",Jp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Zp=K("Save",Xp);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],tf=K("Send",ef);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Li=K("Sparkles",nf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],lf=K("Target",rf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Ii=K("Trash2",of);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],af=K("Upload",sf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],uf=K("User",cf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],pf=K("Video",df);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],mf=K("Workflow",ff);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],tu=K("Wrench",hf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Fo=K("X",gf);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],nu=K("Zap",vf),xf="/assets/logo-C90VGyZE.jpg";function yf({data:h,onOpenResume:z}){const[d,M]=se.useState(!1),b=(h==null?void 0:h.personalInfo)||{};return l.jsxs("aside",{className:"vcard-sidebar-col",children:[l.jsxs("div",{className:`sidebar ${d?"active":""}`,children:[l.jsxs("div",{className:"sidebar-info",children:[l.jsx("figure",{className:"avatar-box",children:l.jsx("div",{className:"avatar-img-wrap",children:l.jsx("img",{src:xf,alt:"Shabbir Maanak Emblem",className:"avatar-logo-img",loading:"eager"})})}),l.jsxs("div",{className:"info-content",children:[l.jsx("h1",{className:"name",title:b.name,children:b.name}),l.jsx("p",{className:"title",children:b.role}),l.jsx("p",{className:"sub-title",children:b.organization})]}),l.jsxs("button",{type:"button",className:"info_more-btn",onClick:()=>M(!d),"aria-label":d?"Hide Contacts":"Show Contacts",children:[l.jsx("span",{children:d?"Hide Contacts":"Show Contacts"}),d?l.jsx(kp,{size:16}):l.jsx(Gc,{size:16})]})]}),l.jsxs("div",{className:"sidebar-info_more",children:[l.jsx("div",{className:"separator"}),l.jsxs("ul",{className:"contacts-list",children:[l.jsxs("li",{className:"contact-item",children:[l.jsx("div",{className:"icon-box",children:l.jsx(Lo,{size:16})}),l.jsxs("div",{className:"contact-info",children:[l.jsx("p",{className:"contact-title",children:"Email"}),l.jsx("a",{href:`mailto:${b.email}`,className:"contact-link",title:b.email,children:b.email})]})]}),l.jsxs("li",{className:"contact-item",children:[l.jsx("div",{className:"icon-box",children:l.jsx(Zc,{size:16})}),l.jsxs("div",{className:"contact-info",children:[l.jsx("p",{className:"contact-title",children:"Phone"}),l.jsx("a",{href:`tel:${b.phone?b.phone.replace(/\s+/g,""):""}`,className:"contact-link",children:b.phone})]})]}),l.jsxs("li",{className:"contact-item",children:[l.jsx("div",{className:"icon-box",children:l.jsx(vp,{size:16})}),l.jsxs("div",{className:"contact-info",children:[l.jsx("p",{className:"contact-title",children:"Experience"}),l.jsxs("span",{className:"contact-link",children:["Since ",b.experienceSince," (5+ Yrs)"]})]})]}),l.jsxs("li",{className:"contact-item",children:[l.jsx("div",{className:"icon-box",children:l.jsx(hp,{size:16})}),l.jsxs("div",{className:"contact-info",children:[l.jsx("p",{className:"contact-title",children:"Department"}),l.jsx("span",{className:"contact-link contact-wrap-text",children:b.department})]})]}),l.jsxs("li",{className:"contact-item",children:[l.jsx("div",{className:"icon-box",children:l.jsx(Ao,{size:16})}),l.jsxs("div",{className:"contact-info",children:[l.jsx("p",{className:"contact-title",children:"Location"}),l.jsx("address",{className:"contact-link contact-wrap-text",children:b.location})]})]})]}),l.jsx("div",{className:"separator"}),l.jsxs("ul",{className:"social-list",children:[b.linkedin&&l.jsx("li",{className:"social-item",children:l.jsx("a",{href:b.linkedin,target:"_blank",rel:"noreferrer",className:"social-link",title:"LinkedIn",children:l.jsx($p,{size:17})})}),b.instagram&&l.jsx("li",{className:"social-item",children:l.jsx("a",{href:b.instagram,target:"_blank",rel:"noreferrer",className:"social-link",title:"Instagram",children:l.jsx(Rp,{size:17})})}),b.github&&l.jsx("li",{className:"social-item",children:l.jsx("a",{href:b.github,target:"_blank",rel:"noreferrer",className:"social-link",title:"GitHub",children:l.jsx(Dp,{size:17})})}),b.email&&l.jsx("li",{className:"social-item",children:l.jsx("a",{href:`mailto:${b.email}`,className:"social-link",title:"Send Email",children:l.jsx(Lo,{size:17})})})]}),l.jsx("div",{className:"sidebar-resume-action",children:l.jsxs("button",{type:"button",onClick:z,className:"sidebar-cv-btn",children:[l.jsx(qc,{size:15}),l.jsx("span",{children:"Download CV (PDF)"})]})})]})]}),l.jsx("style",{children:`
        .sidebar {
          transition: var(--transition-2);
          overflow: hidden;
        }

        .sidebar-info {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .avatar-box {
          background: linear-gradient(135deg, hsla(43, 96%, 64%, 0.5) 0%, hsla(348, 83%, 52%, 0.4) 100%);
          border-radius: 20px;
          padding: 3px;
          box-shadow: var(--shadow-1), 0 0 16px hsla(43, 96%, 64%, 0.2);
          flex-shrink: 0;
        }

        .avatar-img-wrap {
          width: 98px;
          height: 75px;
          border-radius: 17px;
          overflow: hidden;
          background: #dfe3ea;
          background-image: linear-gradient(135deg, #edf0f5 0%, #dfe3ea 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.08);
        }

        .avatar-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          transition: transform 0.3s ease;
        }

        .avatar-box:hover .avatar-logo-img {
          transform: scale(1.05);
        }

        .info-content {
          flex: 1;
          min-width: 0;
        }

        .info-content .name {
          color: var(--white-2);
          font-size: var(--fs-3);
          font-weight: var(--fw-600);
          letter-spacing: -0.2px;
          margin-bottom: 6px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .info-content .title {
          color: var(--gold-primary);
          background: hsla(43, 96%, 64%, 0.08);
          border: 1px solid hsla(43, 96%, 64%, 0.2);
          font-size: var(--fs-8);
          font-weight: var(--fw-500);
          width: max-content;
          padding: 3px 12px;
          border-radius: 8px;
          margin-bottom: 4px;
        }

        .info-content .sub-title {
          font-size: 11px;
          color: var(--ruby-glow);
          font-weight: 500;
        }

        .info_more-btn {
          position: absolute;
          top: -4px;
          right: -4px;
          border-radius: 0 16px;
          font-size: var(--fs-7);
          color: var(--gold-primary);
          background: var(--border-gradient-onyx);
          padding: 8px 12px;
          display: none;
          align-items: center;
          gap: 6px;
          box-shadow: var(--shadow-2);
          transition: var(--transition-1);
          z-index: 1;
        }

        .info_more-btn::before {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          background: var(--bg-gradient-jet);
          transition: var(--transition-1);
          z-index: -1;
        }

        .contacts-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .contact-item .icon-box {
          margin-top: 2px;
          flex-shrink: 0;
        }

        .contact-info {
          flex: 1;
          min-width: 0;
        }

        .contact-title {
          color: var(--light-gray-70);
          font-size: var(--fs-8);
          text-transform: uppercase;
          margin-bottom: 3px;
          letter-spacing: 0.3px;
        }

        .contact-link {
          color: var(--white-2);
          font-size: var(--fs-7);
          font-weight: var(--fw-400);
          display: block;
          font-style: normal;
          line-height: 1.45;
        }

        .contact-link.contact-wrap-text {
          white-space: normal;
          word-break: break-word;
        }

        .contact-link:not(.contact-wrap-text) {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .contact-link:hover {
          color: var(--gold-primary);
        }

        .social-list {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          padding-bottom: 4px;
        }

        .social-link {
          color: var(--light-gray-70);
          font-size: 18px;
          transition: var(--transition-1);
        }

        .social-link:hover {
          color: var(--gold-primary);
          transform: translateY(-2px);
        }

        .sidebar-resume-action {
          margin-top: 18px;
        }

        .sidebar-cv-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 12px;
          background: linear-gradient(135deg, hsla(43, 96%, 64%, 0.12) 0%, hsla(348, 83%, 52%, 0.12) 100%);
          border: 1px solid hsla(43, 96%, 64%, 0.35);
          color: var(--gold-primary);
          font-size: 13px;
          font-weight: 600;
          transition: var(--transition-1);
          box-shadow: var(--shadow-1);
        }

        .sidebar-cv-btn:hover {
          background: linear-gradient(135deg, hsla(43, 96%, 64%, 0.22) 0%, hsla(348, 83%, 52%, 0.22) 100%);
          border-color: var(--gold-primary);
          box-shadow: var(--shadow-gold-glow);
          transform: translateY(-2px);
        }

        /* Desktop Sidebar View */
        @media (min-width: 1024px) {
          .sidebar-info {
            flex-direction: column;
            text-align: center;
          }

          .avatar-box {
            padding: 3.5px;
            border-radius: 22px;
            margin-bottom: 8px;
          }

          .avatar-img-wrap {
            width: 145px;
            height: 111px;
            border-radius: 19px;
          }

          .info-content .name {
            font-size: var(--fs-2);
            white-space: normal;
          }

          .info-content .title {
            margin: 0 auto 6px auto;
          }

          .sidebar-info_more {
            opacity: 1;
            visibility: visible;
          }
        }

        /* Mobile & Tablet Toggle */
        @media (max-width: 1023px) {
          .sidebar {
            max-height: 120px;
          }

          .sidebar.active {
            max-height: 600px;
          }

          .info_more-btn {
            display: flex;
          }

          .sidebar-info_more {
            opacity: 0;
            visibility: hidden;
            transition: var(--transition-2);
          }

          .sidebar.active .sidebar-info_more {
            opacity: 1;
            visibility: visible;
          }
        }
      `})]})}function wf({activeTab:h,onTabChange:z}){const d=[{id:"about",label:"About"},{id:"resume",label:"Resume"},{id:"portfolio",label:"Portfolio"},{id:"skills",label:"Skills"},{id:"contact",label:"Contact"}];return l.jsx("nav",{className:"vcard-navbar","aria-label":"Portfolio Sections Navigation",children:l.jsx("ul",{className:"vcard-nav-list",children:d.map(M=>l.jsx("li",{className:"vcard-nav-item",children:l.jsx("button",{type:"button",className:`vcard-nav-link ${h===M.id?"active":""}`,onClick:()=>z(M.id),children:M.label})},M.id))})})}function jf({data:h}){const z=(h==null?void 0:h.personalInfo)||{},d=(h==null?void 0:h.whatIDo)||[],M=(h==null?void 0:h.aboutStats)||[],b=(h==null?void 0:h.philosophy)||{},v={rd:l.jsx(Wp,{size:26}),multimedia:l.jsx(pf,{size:26}),operations:l.jsx(mf,{size:26})};return l.jsxs("article",{className:"about-tab tab-content-active",children:[l.jsx("header",{children:l.jsx("h2",{className:"h2 article-title",children:"About Me"})}),l.jsxs("section",{className:"about-text-section",children:[l.jsxs("p",{className:"about-lead-quote",children:['"',z.tagline,'"']}),l.jsx("p",{className:"about-paragraph",children:z.bio}),l.jsxs("p",{className:"about-paragraph",children:["Serving as ",l.jsx("strong",{className:"text-gold",children:z.role})," at ",l.jsx("strong",{className:"text-ruby",children:z.organization})," (",z.department,") since ",z.experienceSince,", Shabbir specializes in bridging technical possibilities with practical institutional realities—delivering measurable enhancements to communication outreach and operational agility."]})]}),l.jsxs("section",{className:"service-section",children:[l.jsx("h3",{className:"h3 service-heading",children:"What I'm Doing"}),l.jsxs("ul",{className:"service-list",children:[d.map(C=>l.jsxs("li",{className:"service-item",children:[l.jsx("div",{className:"service-icon-box",children:v[C.id]||l.jsx(Li,{size:26})}),l.jsxs("div",{className:"service-content-box",children:[l.jsx("h4",{className:"h4 service-item-title",children:C.title}),l.jsxs("p",{className:"service-highlight",children:['"',C.highlight,'"']}),l.jsx("p",{className:"service-item-text",children:C.description})]})]},C.id)),l.jsxs("li",{className:"service-item",children:[l.jsx("div",{className:"service-icon-box",children:l.jsx(Li,{size:26})}),l.jsxs("div",{className:"service-content-box",children:[l.jsx("h4",{className:"h4 service-item-title",children:"Innovation & Digital Transformation"}),l.jsx("p",{className:"service-highlight",children:'"Continuous system refinement & digital modernization"'}),l.jsx("p",{className:"service-item-text",children:"Auditing manual administrative routines, conducting feasibility studies for modern productivity tooling, and authoring rigorous standard operating procedures (SOPs)."})]})]})]})]}),l.jsxs("section",{className:"highlights-section",children:[l.jsx("h3",{className:"h3 service-heading",children:"Key Highlights"}),l.jsx("div",{className:"highlights-grid",children:M.map((C,B)=>l.jsxs("div",{className:"content-card highlight-card",children:[l.jsx("span",{className:"highlight-label",children:C.label}),l.jsx("h4",{className:"highlight-val text-gradient-yellow",children:C.value}),l.jsx("p",{className:"highlight-sub",children:C.subtext})]},B))})]}),l.jsxs("section",{className:"ethos-section",children:[l.jsx("h3",{className:"h3 service-heading",children:"Guiding Philosophy"}),l.jsxs("div",{className:"content-card ethos-card",children:[l.jsx("div",{className:"ethos-quote-icon",children:l.jsx(eu,{size:28})}),l.jsxs("blockquote",{className:"ethos-quote",children:['"',b.quote,'"']}),l.jsx("p",{className:"ethos-subtext",children:b.subtext}),l.jsx("div",{className:"ethos-principles-row",children:(b.principles||[]).map((C,B)=>l.jsxs("div",{className:"ethos-principle-box",children:[l.jsx("div",{className:"principle-bullet",children:l.jsx(jr,{size:16})}),l.jsxs("div",{children:[l.jsx("h5",{children:C.title}),l.jsx("p",{children:C.description})]})]},B))})]})]}),l.jsx("style",{children:`
        .about-tab {
          display: block;
        }

        .about-text-section {
          margin-bottom: 35px;
        }

        .about-lead-quote {
          font-size: var(--fs-4);
          font-weight: var(--fw-600);
          color: var(--gold-primary);
          margin-bottom: 14px;
          line-height: 1.5;
          letter-spacing: -0.01em;
        }

        .about-paragraph {
          color: var(--light-gray-70);
          font-size: var(--fs-6);
          font-weight: var(--fw-300);
          line-height: 1.7;
          margin-bottom: 15px;
        }

        .text-gold {
          color: var(--gold-primary);
          font-weight: var(--fw-600);
        }

        .text-ruby {
          color: var(--ruby-glow);
          font-weight: var(--fw-600);
        }

        .service-section, .highlights-section, .ethos-section {
          margin-bottom: 35px;
        }

        .service-heading {
          margin-bottom: 20px;
        }

        .service-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .service-item {
          position: relative;
          background: var(--border-gradient-onyx);
          padding: 22px;
          border-radius: 16px;
          box-shadow: var(--shadow-2);
          z-index: 1;
          display: flex;
          align-items: flex-start;
          gap: 18px;
          transition: transform var(--transition-1), border-color var(--transition-1);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .service-item::before {
          content: "";
          position: absolute;
          inset: 1px;
          background: var(--bg-gradient-jet);
          border-radius: inherit;
          z-index: -1;
        }

        .service-item:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-3);
          border-color: hsla(348, 83%, 52%, 0.3);
        }

        .service-icon-box {
          margin-top: 4px;
          color: var(--ruby-glow);
          flex-shrink: 0;
        }

        .service-content-box {
          flex: 1;
        }

        .service-item-title {
          margin-bottom: 4px;
          color: var(--white-2);
          font-size: var(--fs-4);
        }

        .service-highlight {
          font-size: var(--fs-8);
          font-style: italic;
          color: var(--vegas-gold);
          margin-bottom: 8px;
        }

        .service-item-text {
          color: var(--light-gray-70);
          font-size: var(--fs-6);
          font-weight: var(--fw-300);
          line-height: 1.6;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .highlight-card {
          padding: 18px;
        }

        .highlight-label {
          font-size: var(--fs-8);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--ruby-glow);
          font-weight: var(--fw-600);
          display: block;
          margin-bottom: 4px;
        }

        .highlight-val {
          font-size: var(--fs-3);
          font-weight: var(--fw-700);
          margin-bottom: 4px;
        }

        .highlight-sub {
          font-size: var(--fs-7);
          color: var(--light-gray-70);
          line-height: 1.4;
        }

        .ethos-card {
          padding: 26px 24px;
          text-align: center;
        }

        .ethos-quote-icon {
          color: var(--ruby-glow);
          display: flex;
          justify-content: center;
          margin-bottom: 12px;
        }

        .ethos-quote {
          font-size: var(--fs-3);
          font-weight: var(--fw-600);
          color: var(--white-2);
          line-height: 1.45;
          margin-bottom: 10px;
        }

        .ethos-subtext {
          font-size: var(--fs-6);
          color: var(--vegas-gold);
          margin-bottom: 22px;
        }

        .ethos-principles-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          text-align: left;
          border-top: 1px solid var(--jet);
          padding-top: 20px;
        }

        .ethos-principle-box {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .principle-bullet {
          color: var(--gold-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .ethos-principle-box h5 {
          font-size: var(--fs-7);
          color: var(--white-2);
          font-weight: var(--fw-600);
          margin-bottom: 4px;
        }

        .ethos-principle-box p {
          font-size: 11px;
          color: var(--light-gray-70);
          line-height: 1.45;
        }

        @media (min-width: 768px) {
          .service-list {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .highlights-grid {
            grid-template-columns: 1fr;
          }
          .ethos-principles-row {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function kf({data:h,onOpenResume:z}){const d=(h==null?void 0:h.experience)||{},M=(h==null?void 0:h.education)||[],v=((h==null?void 0:h.skills)||[]).slice(0,6);return l.jsxs("article",{className:"resume-tab tab-content-active",children:[l.jsxs("header",{className:"resume-tab-header",children:[l.jsx("h2",{className:"h2 article-title",children:"Resume"}),l.jsx("div",{className:"resume-quick-actions",children:l.jsxs("button",{type:"button",onClick:z,className:"vcard-btn-primary",children:[l.jsx(Oo,{size:15}),l.jsx("span",{children:"Download CV"})]})})]}),l.jsxs("section",{className:"timeline-section",children:[l.jsxs("div",{className:"title-wrapper",children:[l.jsx("div",{className:"icon-box",children:l.jsx(Yc,{size:18})}),l.jsx("h3",{className:"h3",children:"Experience"})]}),l.jsx("ol",{className:"timeline-list",children:l.jsxs("li",{className:"timeline-item",children:[l.jsxs("h4",{className:"h4 timeline-item-title",children:[d.role," ",l.jsxs("span",{className:"timeline-org",children:["— ",d.organization]})]}),l.jsx("div",{className:"timeline-dept",children:d.department}),l.jsx("span",{className:"timeline-period",children:d.period}),l.jsx("p",{className:"timeline-text",children:d.description}),l.jsx("div",{className:"timeline-pillars-grid",children:(d.pillars||[]).map(C=>l.jsxs("div",{className:"timeline-pillar-card",children:[l.jsx("h5",{className:"pillar-title",children:C.title}),l.jsx("ul",{className:"pillar-bullets",children:(C.responsibilities||[]).map((B,D)=>l.jsxs("li",{children:[l.jsx(jr,{size:13,className:"bullet-icon"}),l.jsx("span",{children:B})]},D))})]},C.title))})]})})]}),l.jsxs("section",{className:"timeline-section",children:[l.jsxs("div",{className:"title-wrapper",children:[l.jsx("div",{className:"icon-box",children:l.jsx(Xc,{size:18})}),l.jsx("h3",{className:"h3",children:"Education"})]}),l.jsx("ol",{className:"timeline-list",children:M.map((C,B)=>l.jsxs("li",{className:"timeline-item",children:[l.jsx("h4",{className:"h4 timeline-item-title",children:C.degree}),l.jsxs("div",{className:"timeline-dept",children:[C.institution," • ",C.location]}),l.jsx("span",{className:"timeline-period",children:C.period}),l.jsx("p",{className:"timeline-text",children:C.description}),l.jsx("div",{className:"edu-bullets-list",children:(C.highlights||[]).map((D,J)=>l.jsxs("div",{className:"edu-bullet-item",children:[l.jsx("span",{className:"edu-dot"}),l.jsx("span",{children:D})]},J))})]},B))})]}),l.jsxs("section",{className:"skill-section",children:[l.jsx("h3",{className:"h3 skills-title",children:"Key Proficiencies"}),l.jsx("ul",{className:"skills-list content-card",children:v.map(C=>l.jsxs("li",{className:"skills-item",children:[l.jsxs("div",{className:"title-wrapper",children:[l.jsx("h5",{className:"h5",children:C.name}),l.jsxs("data",{value:C.level,className:"skill-num",children:[C.level,"%"]})]}),l.jsx("div",{className:"skill-progress-bg",children:l.jsx("div",{className:"skill-progress-fill",style:{width:`${C.level}%`}})})]},C.name))})]}),l.jsx("style",{children:`
        .resume-tab-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 25px;
        }

        .vcard-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 12px;
          background: linear-gradient(135deg, hsla(43, 96%, 64%, 0.15) 0%, hsla(348, 83%, 52%, 0.15) 100%);
          border: 1px solid hsla(43, 96%, 64%, 0.4);
          color: var(--gold-primary);
          font-size: var(--fs-7);
          font-weight: var(--fw-600);
          transition: var(--transition-1);
          box-shadow: var(--shadow-1);
        }

        .vcard-btn-primary:hover {
          background: linear-gradient(135deg, hsla(43, 96%, 64%, 0.25) 0%, hsla(348, 83%, 52%, 0.25) 100%);
          border-color: var(--gold-primary);
          box-shadow: var(--shadow-gold-glow);
          transform: translateY(-2px);
        }

        .timeline-section {
          margin-bottom: 35px;
        }

        .timeline-section .title-wrapper {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
        }

        .timeline-list {
          font-size: var(--fs-6);
          margin-left: 45px;
        }

        .timeline-item {
          position: relative;
        }

        .timeline-item:not(:last-child) {
          margin-bottom: 30px;
        }

        .timeline-item-title {
          font-size: var(--fs-4);
          line-height: 1.3;
          margin-bottom: 4px;
          color: var(--white-2);
        }

        .timeline-org {
          color: var(--gold-primary);
          font-weight: var(--fw-500);
        }

        .timeline-dept {
          font-size: var(--fs-7);
          color: var(--light-gray);
          margin-bottom: 6px;
        }

        .timeline-period {
          color: var(--ruby-glow);
          font-weight: var(--fw-500);
          font-size: var(--fs-7);
          display: inline-block;
          margin-bottom: 12px;
          background: var(--ruby-subtle);
          padding: 2px 8px;
          border-radius: 6px;
          border: 1px solid hsla(348, 83%, 52%, 0.2);
        }

        .timeline-text {
          color: var(--light-gray-70);
          font-weight: var(--fw-300);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .timeline-item:not(:last-child)::before {
          content: "";
          position: absolute;
          top: -25px;
          left: -30px;
          width: 1px;
          height: calc(100% + 50px);
          background: var(--jet);
        }

        .timeline-item::after {
          content: "";
          position: absolute;
          top: 5px;
          left: -34px;
          height: 10px;
          width: 10px;
          background: linear-gradient(135deg, var(--gold-primary), var(--ruby-primary));
          border-radius: 50%;
          box-shadow: 0 0 0 4px var(--jet), 0 0 10px hsla(348, 83%, 52%, 0.5);
        }

        .timeline-pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-top: 15px;
        }

        .timeline-pillar-card {
          background: var(--onyx);
          border: 1px solid var(--jet);
          border-radius: 12px;
          padding: 14px 16px;
          transition: border-color 0.2s ease;
        }

        .timeline-pillar-card:hover {
          border-color: hsla(43, 96%, 64%, 0.3);
        }

        .pillar-title {
          font-size: var(--fs-6);
          color: var(--gold-primary);
          font-weight: var(--fw-600);
          margin-bottom: 8px;
        }

        .pillar-bullets {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .pillar-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: var(--fs-7);
          color: var(--light-gray-70);
          line-height: 1.5;
        }

        .bullet-icon {
          color: var(--ruby-glow);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .edu-bullets-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 10px;
        }

        .edu-bullet-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: var(--fs-7);
          color: var(--light-gray);
        }

        .edu-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--gold-primary);
          flex-shrink: 0;
          box-shadow: 0 0 6px var(--gold-primary);
        }

        .skill-section {
          margin-bottom: 20px;
        }

        .skills-title {
          margin-bottom: 20px;
        }

        .skills-list {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .skills-item .title-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .skills-item .skill-num {
          color: var(--gold-primary);
          font-size: var(--fs-7);
          font-weight: var(--fw-600);
        }

        .skill-progress-bg {
          background: var(--jet);
          width: 100%;
          height: 8px;
          border-radius: 10px;
          overflow: hidden;
        }

        .skill-progress-fill {
          background: linear-gradient(90deg, var(--gold-primary) 0%, var(--ruby-primary) 100%);
          height: 100%;
          border-radius: inherit;
          transition: width 0.6s ease;
          box-shadow: 0 0 10px hsla(348, 83%, 52%, 0.3);
        }

        @media (min-width: 768px) {
          .timeline-pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function bf({data:h,onSelectProject:z}){var te;const d=(h==null?void 0:h.projects)||[],M=(h==null?void 0:h.projectCategories)||[],[b,v]=se.useState("all"),[C,B]=se.useState(!1),D=b==="all"?d:d.filter(O=>O.category===b),J=((te=M.find(O=>O.id===b))==null?void 0:te.label)||"All Projects";return l.jsxs("article",{className:"portfolio-tab tab-content-active",children:[l.jsx("header",{children:l.jsx("h2",{className:"h2 article-title",children:"Portfolio"})}),l.jsxs("section",{className:"projects-section",children:[l.jsx("ul",{className:"filter-list",children:M.map(O=>l.jsx("li",{className:"filter-item",children:l.jsx("button",{type:"button",className:`filter-btn ${b===O.id?"active":""}`,onClick:()=>v(O.id),children:O.label})},O.id))}),l.jsxs("div",{className:"filter-select-box",children:[l.jsxs("button",{type:"button",className:`filter-select ${C?"active":""}`,onClick:()=>B(!C),children:[l.jsx("div",{className:"select-value",children:J}),l.jsx("div",{className:"select-icon",children:l.jsx(Gc,{size:16})})]}),C&&l.jsx("ul",{className:"select-list",children:M.map(O=>l.jsx("li",{className:"select-item",children:l.jsx("button",{type:"button",className:"select-btn",onClick:()=>{v(O.id),B(!1)},children:O.label})},O.id))})]}),l.jsx("ul",{className:"project-list",children:D.map(O=>l.jsx("li",{className:"project-item",onClick:()=>z(O),children:l.jsxs("div",{className:"project-card-box",children:[l.jsxs("figure",{className:"project-img",style:{background:O.thumbnailGradient},children:[l.jsx("div",{className:"project-item-icon-box",children:l.jsx(Jc,{size:22,className:"eye-icon"})}),l.jsx("div",{className:"project-banner-symbol",children:l.jsx(nu,{size:32,style:{color:O.accentColor||"#f59e0b"}})})]}),l.jsxs("div",{className:"project-meta-box",children:[l.jsx("h3",{className:"project-title",children:O.title}),l.jsx("p",{className:"project-category",children:O.categoryLabel}),l.jsx("div",{className:"project-preview-outcome",children:l.jsx("span",{children:O.outcome})}),l.jsxs("div",{className:"project-tools-tags",children:[(O.tools||[]).slice(0,3).map(ee=>l.jsx("span",{className:"vcard-tag",children:ee},ee)),(O.tools||[]).length>3&&l.jsxs("span",{className:"vcard-tag vcard-tag-gold",children:["+",O.tools.length-3]})]})]})]})},O.id))})]}),l.jsx("style",{children:`
        .portfolio-tab {
          display: block;
        }

        .filter-list {
          display: none;
          align-items: center;
          gap: 12px;
          padding-left: 5px;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }

        .filter-item button {
          color: var(--light-gray);
          font-size: var(--fs-6);
          transition: var(--transition-1);
          padding: 6px 12px;
          border-radius: 8px;
          background: var(--onyx);
          border: 1px solid var(--jet);
        }

        .filter-item button:hover {
          color: var(--white-1);
          border-color: hsla(43, 96%, 64%, 0.3);
        }

        .filter-item button.active {
          background: linear-gradient(135deg, hsla(43, 96%, 64%, 0.15) 0%, hsla(348, 83%, 52%, 0.15) 100%);
          border-color: var(--gold-primary);
          color: var(--gold-primary);
          font-weight: var(--fw-600);
          box-shadow: 0 0 10px hsla(43, 96%, 64%, 0.15);
        }

        /* Filter Select Box (Mobile) */
        .filter-select-box {
          position: relative;
          margin-bottom: 25px;
        }

        .filter-select {
          background: var(--eerie-black-2);
          color: var(--light-gray);
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 12px 16px;
          border: 1px solid var(--jet);
          border-radius: 14px;
          font-size: var(--fs-6);
          font-weight: var(--fw-300);
        }

        .select-list {
          background: var(--eerie-black-2);
          position: absolute;
          top: calc(100% + 6px);
          width: 100%;
          padding: 6px;
          border: 1px solid var(--jet);
          border-radius: 14px;
          z-index: 20;
          box-shadow: var(--shadow-3);
        }

        .select-item button {
          background: var(--eerie-black-2);
          color: var(--light-gray);
          font-size: var(--fs-6);
          font-weight: var(--fw-300);
          text-transform: capitalize;
          width: 100%;
          padding: 8px 10px;
          border-radius: 8px;
          transition: var(--transition-1);
        }

        .select-item button:hover {
          background: var(--onyx);
          color: var(--gold-primary);
        }

        /* Project Grid */
        .project-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }

        .project-item {
          cursor: pointer;
        }

        .project-card-box {
          display: flex;
          flex-direction: column;
          height: 100%;
          border-radius: 16px;
          transition: transform 0.25s ease;
        }

        .project-item:hover .project-card-box {
          transform: translateY(-3px);
        }

        .project-img {
          position: relative;
          width: 100%;
          height: 185px;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-1);
          border: 1px solid var(--jet);
        }

        .project-img::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          z-index: 1;
          transition: var(--transition-1);
        }

        .project-item:hover .project-img::before {
          background: hsla(0, 0%, 0%, 0.55);
        }

        .project-item-icon-box {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.8);
          background: linear-gradient(135deg, hsl(43, 96%, 64%) 0%, hsl(348, 83%, 52%) 100%);
          color: #0b0d14;
          font-size: 20px;
          padding: 13px;
          border-radius: 14px;
          opacity: 0;
          z-index: 2;
          transition: var(--transition-1);
          box-shadow: 0 0 20px hsla(348, 83%, 52%, 0.4);
        }

        .project-item:hover .project-item-icon-box {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }

        .project-title {
          color: var(--white-2);
          font-size: var(--fs-4);
          font-weight: var(--fw-600);
          text-transform: capitalize;
          line-height: 1.35;
          margin-bottom: 4px;
          transition: color var(--transition-1);
        }

        .project-item:hover .project-title {
          color: var(--gold-primary);
        }

        .project-category {
          color: var(--ruby-glow);
          font-size: var(--fs-7);
          font-weight: var(--fw-500);
          margin-bottom: 8px;
        }

        .project-preview-outcome {
          font-size: var(--fs-7);
          color: var(--white-2);
          background: var(--onyx);
          padding: 7px 12px;
          border-radius: 8px;
          margin-bottom: 10px;
          line-height: 1.4;
          border: 1px solid hsla(43, 96%, 64%, 0.1);
        }

        .project-tools-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        @media (min-width: 768px) {
          .filter-list {
            display: flex;
          }
          .filter-select-box {
            display: none;
          }
          .project-list {
            grid-template-columns: 1fr 1fr;
          }
        }
      `})]})}function Nf({data:h}){const z=(h==null?void 0:h.skills)||[],d=(h==null?void 0:h.skillCategories)||[],[M,b]=se.useState("all"),v=M==="all"?z:z.filter(C=>C.category===M);return l.jsxs("article",{className:"skills-tab tab-content-active",children:[l.jsx("header",{children:l.jsx("h2",{className:"h2 article-title",children:"Skills & Capabilities"})}),l.jsxs("section",{className:"skills-content-section",children:[l.jsx("ul",{className:"skills-cat-pills",children:d.map(C=>l.jsx("li",{children:l.jsx("button",{type:"button",className:`cat-pill-btn ${M===C.id?"active":""}`,onClick:()=>b(C.id),children:C.label})},C.id))}),l.jsx("div",{className:"skills-vcard-grid",children:v.map(C=>l.jsxs("div",{className:"content-card skill-vcard-card",children:[l.jsxs("div",{className:"skill-card-head",children:[l.jsxs("div",{children:[l.jsx("h4",{className:"h4 skill-card-title",children:C.name}),l.jsxs("span",{className:"skill-exp-text",children:[C.experience," Experience"]})]}),l.jsx("div",{className:"skill-pct-badge",children:l.jsxs("span",{children:[C.level,"%"]})})]}),l.jsx("div",{className:"skill-progress-bar-wrap",children:l.jsx("div",{className:"skill-progress-bar-fill",style:{width:`${C.level}%`}})}),l.jsx("p",{className:"skill-highlight-desc",children:C.highlight}),l.jsx("div",{className:"skill-tools-list",children:(C.tags||[]).map(B=>l.jsx("span",{className:"vcard-tag",children:B},B))})]},C.name))})]}),l.jsx("style",{children:`
        .skills-tab {
          display: block;
        }

        .skills-cat-pills {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }

        .cat-pill-btn {
          color: var(--light-gray);
          font-size: var(--fs-6);
          padding: 6px 14px;
          border-radius: 8px;
          background: var(--onyx);
          border: 1px solid var(--jet);
          transition: var(--transition-1);
        }

        .cat-pill-btn:hover {
          color: var(--white-1);
          border-color: hsla(43, 96%, 64%, 0.3);
        }

        .cat-pill-btn.active {
          background: linear-gradient(135deg, hsla(43, 96%, 64%, 0.15) 0%, hsla(348, 83%, 52%, 0.15) 100%);
          border-color: var(--gold-primary);
          color: var(--gold-primary);
          font-weight: var(--fw-600);
          box-shadow: 0 0 10px hsla(43, 96%, 64%, 0.15);
        }

        .skills-vcard-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }

        .skill-vcard-card {
          padding: 20px;
        }

        .skill-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .skill-card-title {
          font-size: var(--fs-4);
          color: var(--white-2);
          margin-bottom: 2px;
        }

        .skill-exp-text {
          font-size: var(--fs-8);
          color: var(--ruby-glow);
          font-weight: 500;
        }

        .skill-pct-badge {
          font-size: var(--fs-6);
          font-weight: var(--fw-700);
          color: var(--gold-primary);
        }

        .skill-progress-bar-wrap {
          background: var(--jet);
          width: 100%;
          height: 6px;
          border-radius: 6px;
          overflow: hidden;
          margin-bottom: 12px;
        }

        .skill-progress-bar-fill {
          background: linear-gradient(90deg, var(--gold-primary) 0%, var(--ruby-primary) 100%);
          height: 100%;
          border-radius: inherit;
          transition: width 0.6s ease;
          box-shadow: 0 0 8px hsla(348, 83%, 52%, 0.3);
        }

        .skill-highlight-desc {
          font-size: var(--fs-7);
          color: var(--light-gray-70);
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .skill-tools-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        @media (min-width: 768px) {
          .skills-vcard-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `})]})}function Sf({data:h}){const z=(h==null?void 0:h.personalInfo)||{},[d,M]=se.useState({fullname:"",email:"",subject:"",message:""}),[b,v]=se.useState({}),[C,B]=se.useState(!1),[D,J]=se.useState(null),[te,O]=se.useState(0),ee=()=>{const q={};return d.fullname.trim()||(q.fullname="Full name is required"),d.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim())||(q.email="Invalid email address"):q.email="Email address is required",d.message.trim()||(q.message="Message is required"),q},xe=q=>{const{name:Z,value:Q}=q.target;M(ye=>({...ye,[Z]:Q})),b[Z]&&v(ye=>({...ye,[Z]:void 0}))},ze=async q=>{if(q.preventDefault(),Date.now()-te<15e3&&D==="success"){alert("You have already sent a message recently. Thank you!");return}const Q=ee();if(Object.keys(Q).length>0){v(Q);return}B(!0),J(null);try{await new Promise(ye=>setTimeout(ye,900)),J("success"),O(Date.now()),M({fullname:"",email:"",subject:"",message:""})}catch{J("error")}finally{B(!1)}};return l.jsxs("article",{className:"contact-tab tab-content-active",children:[l.jsx("header",{children:l.jsx("h2",{className:"h2 article-title",children:"Contact"})}),l.jsx("section",{className:"mapbox",children:l.jsx("figure",{className:"map-visual-box",children:l.jsxs("div",{className:"map-overlay-content",children:[l.jsx("div",{className:"map-pin-icon",children:l.jsx(Ao,{size:26})}),l.jsx("h4",{children:z.location}),l.jsxs("p",{children:[l.jsx("span",{className:"text-gold",children:z.organization})," • ",l.jsx("span",{className:"text-ruby",children:z.department})]})]})})}),l.jsxs("section",{className:"contact-form-section",children:[l.jsx("h3",{className:"h3 form-title",children:"Contact Form"}),D==="success"&&l.jsxs("div",{className:"vcard-alert vcard-alert-success",children:[l.jsx(jr,{size:18}),l.jsx("span",{children:"Message sent successfully! Thank you for reaching out."})]}),D==="error"&&l.jsxs("div",{className:"vcard-alert vcard-alert-error",children:[l.jsx(Kc,{size:18}),l.jsxs("span",{children:["Something went wrong. Please email directly at ",z.email,"."]})]}),l.jsxs("form",{onSubmit:ze,className:"vcard-form",children:[l.jsxs("div",{className:"input-wrapper",children:[l.jsxs("div",{className:"form-item",children:[l.jsx("input",{type:"text",name:"fullname",className:`form-input ${b.fullname?"error":""}`,placeholder:"Full name *",value:d.fullname,onChange:xe,disabled:C}),b.fullname&&l.jsx("span",{className:"err-text",children:b.fullname})]}),l.jsxs("div",{className:"form-item",children:[l.jsx("input",{type:"email",name:"email",className:`form-input ${b.email?"error":""}`,placeholder:"Email address *",value:d.email,onChange:xe,disabled:C}),b.email&&l.jsx("span",{className:"err-text",children:b.email})]})]}),l.jsx("div",{className:"form-item",style:{marginBottom:"25px"},children:l.jsx("input",{type:"text",name:"subject",className:"form-input",placeholder:"Subject (Optional)",value:d.subject,onChange:xe,disabled:C})}),l.jsxs("div",{className:"form-item",style:{marginBottom:"25px"},children:[l.jsx("textarea",{name:"message",className:`form-input form-textarea ${b.message?"error":""}`,placeholder:"Your Message *",rows:"5",value:d.message,onChange:xe,disabled:C}),b.message&&l.jsx("span",{className:"err-text",children:b.message})]}),l.jsxs("button",{type:"submit",className:"form-btn",disabled:C,children:[l.jsx(tf,{size:16}),l.jsx("span",{children:C?"Sending...":"Send Message"})]})]})]}),l.jsx("style",{children:`
        .contact-tab {
          display: block;
        }

        .mapbox {
          position: relative;
          height: 220px;
          width: 100%;
          border-radius: 16px;
          margin-bottom: 30px;
          border: 1px solid var(--jet);
          overflow: hidden;
          background: linear-gradient(135deg, hsl(232, 18%, 14%) 0%, hsl(232, 20%, 9%) 100%);
        }

        .map-visual-box {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          background-image: 
            radial-gradient(circle at center, hsla(348, 83%, 52%, 0.1) 0%, transparent 70%),
            linear-gradient(to right, hsla(232, 10%, 25%, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsla(232, 10%, 25%, 0.1) 1px, transparent 1px);
          background-size: 100% 100%, 20px 20px, 20px 20px;
        }

        .map-pin-icon {
          color: var(--ruby-glow);
          display: flex;
          justify-content: center;
          margin-bottom: 8px;
          filter: drop-shadow(0 0 8px hsla(348, 83%, 52%, 0.4));
        }

        .map-overlay-content h4 {
          font-size: var(--fs-3);
          color: var(--white-2);
          margin-bottom: 4px;
        }

        .map-overlay-content p {
          font-size: var(--fs-7);
          color: var(--light-gray);
        }

        .text-gold {
          color: var(--gold-primary);
          font-weight: 500;
        }

        .text-ruby {
          color: var(--ruby-glow);
          font-weight: 500;
        }

        .form-title {
          margin-bottom: 20px;
        }

        .vcard-alert {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: var(--fs-6);
          margin-bottom: 20px;
        }

        .vcard-alert-success {
          background: hsla(140, 50%, 20%, 0.4);
          border: 1px solid hsla(140, 60%, 40%, 0.6);
          color: hsl(140, 70%, 75%);
        }

        .vcard-alert-error {
          background: hsla(0, 50%, 20%, 0.4);
          border: 1px solid hsla(0, 60%, 40%, 0.6);
          color: hsl(0, 70%, 75%);
        }

        .input-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 25px;
          margin-bottom: 25px;
        }

        .form-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .form-input {
          color: var(--white-2);
          font-size: var(--fs-6);
          font-weight: var(--fw-400);
          padding: 13px 20px;
          border: 1px solid var(--jet);
          border-radius: 14px;
          outline: none;
          background: var(--eerie-black-1);
          transition: border-color var(--transition-1);
        }

        .form-input:focus {
          border-color: var(--gold-primary);
          box-shadow: 0 0 10px hsla(43, 96%, 64%, 0.15);
        }

        .form-input.error {
          border-color: #ef4444;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .err-text {
          font-size: 11px;
          color: #f87171;
          padding-left: 4px;
        }

        .form-btn {
          position: relative;
          width: 100%;
          background: linear-gradient(135deg, hsla(43, 96%, 64%, 0.2) 0%, hsla(348, 83%, 52%, 0.2) 100%);
          border: 1px solid hsla(43, 96%, 64%, 0.4);
          color: var(--gold-primary);
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          padding: 13px 24px;
          border-radius: 14px;
          font-size: var(--fs-6);
          font-weight: var(--fw-600);
          text-transform: capitalize;
          box-shadow: var(--shadow-3);
          z-index: 1;
          transition: var(--transition-1);
        }

        .form-btn:hover {
          background: linear-gradient(135deg, hsl(43, 96%, 64%) 0%, hsl(348, 83%, 52%) 100%);
          color: #0b0d14;
          box-shadow: 0 0 20px hsla(348, 83%, 52%, 0.4);
          transform: translateY(-2px);
        }

        @media (min-width: 768px) {
          .input-wrapper {
            grid-template-columns: 1fr 1fr;
          }
          .form-btn {
            width: max-content;
            margin-left: auto;
          }
        }
      `})]})}function Cf({project:h,onClose:z}){return h?(se.useEffect(()=>{const d=M=>{M.key==="Escape"&&z()};return window.addEventListener("keydown",d),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",d),document.body.style.overflow="unset"}},[z]),l.jsxs("div",{className:"project-modal-backdrop",onClick:z,role:"dialog","aria-modal":"true",children:[l.jsxs("div",{className:"project-modal-dialog",onClick:d=>d.stopPropagation(),children:[l.jsxs("div",{className:"modal-banner",style:{background:h.thumbnailGradient},children:[l.jsxs("div",{className:"modal-banner-content",children:[l.jsxs("div",{className:"modal-category-tag",children:[l.jsx(Li,{size:13}),l.jsx("span",{children:h.categoryLabel})]}),l.jsx("h2",{className:"modal-project-title",children:h.title}),l.jsxs("div",{className:"modal-role-pill",children:[l.jsx("strong",{children:"Role:"})," ",h.role]})]}),l.jsx("button",{type:"button",className:"modal-close-btn",onClick:z,"aria-label":"Close Case Study",children:l.jsx(Fo,{size:20})})]}),l.jsxs("div",{className:"modal-body",children:[l.jsxs("div",{className:"modal-impact-banner",children:[l.jsx("div",{className:"impact-icon",children:l.jsx(nu,{size:22,style:{color:"var(--gold-primary)"}})}),l.jsxs("div",{className:"impact-text",children:[l.jsx("span",{className:"impact-label",children:"Primary Outcome & Impact"}),l.jsx("p",{className:"impact-value",children:h.outcome})]})]}),l.jsxs("div",{className:"modal-sections-grid",children:[l.jsxs("div",{className:"modal-section-card",children:[l.jsxs("div",{className:"section-card-title",children:[l.jsx(Cp,{size:18,style:{color:"var(--ruby-glow)"}}),l.jsx("h3",{children:"Project Overview"})]}),l.jsx("p",{children:h.overview})]}),l.jsxs("div",{className:"modal-section-card",children:[l.jsxs("div",{className:"section-card-title",children:[l.jsx(Kc,{size:18,style:{color:"var(--ruby-glow)"}}),l.jsx("h3",{children:"The Challenge & Problem"})]}),l.jsx("p",{children:h.problem})]}),l.jsxs("div",{className:"modal-section-card full-width",children:[l.jsxs("div",{className:"section-card-title",children:[l.jsx(lf,{size:18,style:{color:"var(--gold-primary)"}}),l.jsx("h3",{children:"Strategic Approach & Implementation"})]}),l.jsx("p",{children:h.approach})]}),l.jsxs("div",{className:"modal-section-card",children:[l.jsxs("div",{className:"section-card-title",children:[l.jsx(jr,{size:18,style:{color:"var(--ruby-glow)"}}),l.jsx("h3",{children:"Tangible Results"})]}),l.jsx("p",{children:h.result})]}),l.jsxs("div",{className:"modal-section-card",children:[l.jsxs("div",{className:"section-card-title",children:[l.jsx(Li,{size:18,style:{color:"var(--gold-primary)"}}),l.jsx("h3",{children:"Why It Mattered (Impact)"})]}),l.jsx("p",{children:h.impact})]})]}),l.jsxs("div",{className:"modal-tools-section",children:[l.jsxs("div",{className:"tools-header",children:[l.jsx(tu,{size:18,style:{color:"var(--gold-primary)"}}),l.jsx("h4",{children:"Technologies & Tools Utilized"})]}),l.jsx("div",{className:"modal-tools-tags",children:h.tools.map(d=>l.jsx("span",{className:"vcard-tag vcard-tag-gold",children:d},d))})]})]}),l.jsxs("div",{className:"modal-footer",children:[l.jsx("div",{className:"modal-footer-meta",children:l.jsxs("span",{children:["Case Study for ",h.title]})}),l.jsx("button",{type:"button",className:"btn btn-outline btn-sm",onClick:z,children:"Close Case Study"})]})]}),l.jsx("style",{children:`
        .project-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(4, 5, 8, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.25s ease;
        }

        .project-modal-dialog {
          width: 100%;
          max-width: 860px;
          max-height: 90vh;
          background: #0d1017;
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85), var(--gold-glow);
          overflow: hidden;
        }

        .modal-banner {
          position: relative;
          padding: 2.75rem 2.25rem 2rem 2.25rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .modal-banner-content {
          max-width: 90%;
        }

        .modal-category-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.15);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--gold-300);
          margin-bottom: 0.75rem;
          backdrop-filter: blur(8px);
        }

        .modal-project-title {
          font-size: clamp(1.4rem, 2.5vw, 1.85rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.25;
          margin-bottom: 0.75rem;
        }

        .modal-role-pill {
          display: inline-block;
          font-size: 0.85rem;
          color: #cbd5e1;
          background: rgba(0, 0, 0, 0.3);
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
        }

        .modal-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          background: rgba(212, 175, 55, 0.2);
          border-color: var(--gold-400);
          color: var(--gold-300);
          transform: rotate(90deg);
        }

        .modal-body {
          padding: 2rem 2.25rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .modal-impact-banner {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(212, 175, 55, 0.03) 100%);
          border: 1px solid var(--border-gold);
        }

        .impact-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(212, 175, 55, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .impact-label {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--gold-400);
          font-weight: 700;
          margin-bottom: 0.2rem;
        }

        .impact-value {
          font-size: 1.05rem;
          font-weight: 600;
          color: #f8fafc;
          line-height: 1.4;
        }

        .modal-sections-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .modal-section-card {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1.35rem 1.5rem;
        }

        .modal-section-card.full-width {
          grid-column: span 2;
        }

        .section-card-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.75rem;
        }

        .section-card-title h3 {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .modal-section-card p {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .modal-tools-section {
          padding: 1.25rem 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
        }

        .tools-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.85rem;
        }

        .tools-header h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .modal-tools-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .modal-footer {
          padding: 1.25rem 2.25rem;
          border-top: 1px solid var(--border-subtle);
          background: rgba(10, 12, 17, 0.95);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .modal-footer-meta {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .modal-banner {
            padding: 2rem 1.5rem 1.5rem 1.5rem;
          }
          .modal-body {
            padding: 1.5rem;
          }
          .modal-sections-grid {
            grid-template-columns: 1fr;
          }
          .modal-section-card.full-width {
            grid-column: span 1;
          }
          .modal-footer {
            padding: 1rem 1.5rem;
          }
        }
      `})]})):null}function zf({data:h,isOpen:z,onClose:d}){if(!z)return null;const M=(h==null?void 0:h.personalInfo)||{},b=(h==null?void 0:h.experience)||{},v=(h==null?void 0:h.education)||[],C=(h==null?void 0:h.skills)||[];se.useEffect(()=>{const D=J=>{J.key==="Escape"&&d()};return window.addEventListener("keydown",D),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",D),document.body.style.overflow="unset"}},[d]);const B=()=>{window.print()};return l.jsxs("div",{className:"resume-modal-backdrop",onClick:d,role:"dialog","aria-modal":"true",children:[l.jsxs("div",{className:"resume-modal-dialog",onClick:D=>D.stopPropagation(),children:[l.jsxs("div",{className:"resume-bar-header",children:[l.jsxs("div",{className:"resume-bar-title",children:[l.jsx(qc,{size:18,style:{color:"hsl(43, 96%, 64%)"}}),l.jsxs("span",{children:["Curriculum Vitae — ",M.name]})]}),l.jsxs("div",{className:"resume-bar-actions",children:[l.jsxs("button",{type:"button",onClick:B,className:"vcard-btn-outline",children:[l.jsx(Gp,{size:15}),l.jsx("span",{children:"Print / Save PDF"})]}),l.jsxs("button",{type:"button",onClick:B,className:"vcard-btn-primary",children:[l.jsx(Oo,{size:15}),l.jsx("span",{children:"Download PDF"})]}),l.jsx("button",{type:"button",className:"resume-close-btn",onClick:d,"aria-label":"Close Resume",children:l.jsx(Fo,{size:20})})]})]}),l.jsxs("div",{className:"resume-paper printable-area",children:[l.jsxs("header",{className:"resume-header",children:[l.jsxs("div",{className:"resume-header-top",children:[l.jsx("h1",{className:"resume-person-name",children:M.name}),l.jsx("span",{className:"resume-person-title",children:M.role})]}),l.jsx("p",{className:"resume-positioning-line",children:M.positioning}),l.jsxs("div",{className:"resume-contacts-row",children:[l.jsxs("span",{children:[l.jsx(Lo,{size:13})," ",M.email]}),l.jsxs("span",{children:[l.jsx(Zc,{size:13})," ",M.phone]}),l.jsxs("span",{children:[l.jsx(Ao,{size:13})," ",M.location]})]})]}),l.jsxs("section",{className:"resume-section",children:[l.jsx("h2",{className:"resume-section-heading",children:"Executive Summary"}),l.jsx("p",{className:"resume-summary-text",children:M.bio})]}),l.jsxs("section",{className:"resume-section",children:[l.jsx("h2",{className:"resume-section-heading",children:"Professional Experience"}),l.jsxs("div",{className:"resume-exp-item",children:[l.jsxs("div",{className:"exp-line-header",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"exp-job-title",children:b.role}),l.jsxs("div",{className:"exp-company-sub",children:[b.organization," — ",b.department]})]}),l.jsx("span",{className:"exp-date-range",children:b.period})]}),l.jsx("div",{className:"resume-exp-pillars",children:(b.pillars||[]).map(D=>l.jsxs("div",{className:"resume-pillar-group",children:[l.jsx("h4",{className:"pillar-heading",children:D.title}),l.jsx("ul",{className:"pillar-bullets",children:(D.responsibilities||[]).map((J,te)=>l.jsx("li",{children:J},te))})]},D.title))})]})]}),l.jsxs("section",{className:"resume-section",children:[l.jsx("h2",{className:"resume-section-heading",children:"Core Competencies & Toolset"}),l.jsx("div",{className:"resume-skills-matrix",children:C.slice(0,8).map(D=>l.jsxs("div",{className:"matrix-col",children:[l.jsxs("strong",{children:[D.name," (",D.level,"%):"]}),l.jsx("span",{children:(D.tags||[]).join(", ")})]},D.name))})]}),l.jsxs("section",{className:"resume-section",children:[l.jsx("h2",{className:"resume-section-heading",children:"Education"}),v.map((D,J)=>l.jsxs("div",{className:"resume-edu-item",children:[l.jsxs("div",{className:"exp-line-header",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"exp-job-title",children:D.degree}),l.jsxs("div",{className:"exp-company-sub",children:[D.institution," — ",D.location]})]}),l.jsx("span",{className:"exp-date-range",children:D.period})]}),l.jsx("p",{className:"edu-note",children:D.description})]},J))]})]})]}),l.jsx("style",{children:`
        .resume-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.88);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.2s ease;
        }

        .resume-modal-dialog {
          width: 100%;
          max-width: 900px;
          height: 92vh;
          background: #0f121a;
          border: 1px solid hsla(43, 96%, 64%, 0.3);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-5), 0 0 40px hsla(348, 83%, 52%, 0.15);
          overflow: hidden;
        }

        .resume-bar-header {
          padding: 1rem 1.75rem;
          background: #080a10;
          border-bottom: 1px solid var(--jet);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .resume-bar-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--white-2);
        }

        .resume-bar-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .vcard-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--jet);
          color: var(--light-gray);
          font-size: 13px;
          transition: all 0.2s ease;
        }

        .vcard-btn-outline:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--white-1);
        }

        .vcard-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 10px;
          background: linear-gradient(135deg, hsl(43, 96%, 64%) 0%, hsl(348, 83%, 52%) 100%);
          color: #0b0d14;
          font-size: 13px;
          font-weight: 700;
          transition: all 0.2s ease;
          box-shadow: 0 0 15px hsla(348, 83%, 52%, 0.35);
        }

        .vcard-btn-primary:hover {
          filter: brightness(1.1);
          transform: translateY(-1px);
        }

        .resume-close-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--jet);
          color: var(--white-2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .resume-close-btn:hover {
          background: hsla(348, 83%, 52%, 0.2);
          color: var(--ruby-glow);
        }

        .resume-paper {
          padding: 3rem 3.5rem;
          background: #ffffff;
          color: #1e293b;
          overflow-y: auto;
          flex: 1;
          font-family: 'Plus Jakarta Sans', sans-serif;
          line-height: 1.55;
        }

        .resume-header {
          border-bottom: 2px solid hsl(43, 96%, 64%);
          padding-bottom: 1.5rem;
          margin-bottom: 1.75rem;
        }

        .resume-header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 0.35rem;
        }

        .resume-person-name {
          font-size: 2.2rem;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.02em;
        }

        .resume-person-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #b89124;
        }

        .resume-positioning-line {
          font-size: 0.95rem;
          font-weight: 600;
          color: #475569;
          margin-bottom: 0.75rem;
        }

        .resume-contacts-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          font-size: 0.85rem;
          color: #64748b;
        }

        .resume-contacts-row span {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        .resume-section {
          margin-bottom: 1.75rem;
        }

        .resume-section-heading {
          font-size: 1.05rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #0f172a;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 0.4rem;
          margin-bottom: 0.9rem;
        }

        .resume-summary-text {
          font-size: 0.9rem;
          color: #334155;
          line-height: 1.6;
        }

        .exp-line-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.6rem;
        }

        .exp-job-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f172a;
        }

        .exp-company-sub {
          font-size: 0.88rem;
          font-weight: 600;
          color: #64748b;
        }

        .exp-date-range {
          font-size: 0.82rem;
          font-weight: 700;
          color: #9f1239;
          background: #ffe4e6;
          padding: 0.15rem 0.6rem;
          border-radius: 4px;
        }

        .resume-exp-pillars {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-top: 0.75rem;
        }

        .pillar-heading {
          font-size: 0.9rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.25rem;
        }

        .pillar-bullets {
          padding-left: 1.25rem;
          font-size: 0.85rem;
          color: #334155;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .resume-skills-matrix {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
        }

        .matrix-col {
          font-size: 0.85rem;
          color: #334155;
        }

        .matrix-col strong {
          display: block;
          color: #0f172a;
          margin-bottom: 0.15rem;
        }

        .resume-edu-item {
          margin-bottom: 1rem;
        }

        .edu-note {
          font-size: 0.85rem;
          color: #475569;
          margin-top: 0.25rem;
        }

        @media print {
          body * {
            visibility: hidden;
          }
          .printable-area, .printable-area * {
            visibility: visible;
          }
          .printable-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0;
            background: #ffffff !important;
            color: #000000 !important;
          }
          .resume-bar-header {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .resume-paper {
            padding: 1.75rem 1.5rem;
          }
          .resume-header-top {
            flex-direction: column;
            align-items: flex-start;
          }
          .resume-skills-matrix {
            grid-template-columns: 1fr;
          }
        }
      `})]})}const cn={personalInfo:{name:"Shabbir Maanak",initials:"SM",role:"Assistant Administrator",positioning:"Research & Development | IT & Multimedia | Operations",subPositioning:"Technology + Creativity + Communication + Operations",tagline:"Building technology, media and workflows that create lasting impact.",bio:"Shabbir works across research, technology, multimedia and operations to develop practical solutions, improve workflows and create meaningful communication. Combining technological innovation with creative storytelling and disciplined operational execution.",email:"shabbirmaanak@gmail.com",phone:"+91 98765 43210",location:"Mumbai, Maharashtra, India",linkedin:"https://linkedin.com/in/shabbirmaanak",instagram:"https://instagram.com/shabbirmaanak",github:"https://github.com/shabbirmaanak",organization:"Dawat-e-Hadiyah",department:"Department of Well-being of Women and Children",experienceSince:"2019",resumeUrl:"#resume-preview"},philosophy:{quote:"Great technology is invisible. Great design is understood without explanation.",subtext:"Technology should simplify lives. Communication should connect people. Design should have purpose.",author:"Shabbir Maanak",principles:[{title:"Technology Simplification",description:"Deploying tools and automated systems that remove friction rather than adding complexity."},{title:"Purposeful Communication",description:"Crafting narratives and media that resonate with authentic human emotion and clear calls to action."},{title:"Operational Excellence",description:"Structuring scalable, reproducible workflows that empower cross-functional teams to thrive."}]},aboutStats:[{label:"Since",value:"2019",subtext:"5+ Years of Dedicated Experience",icon:"Calendar"},{label:"Organization",value:"Dawat-e-Hadiyah",subtext:"Dept. of Well-being of Women & Children",icon:"Building2"},{label:"Primary Areas",value:"R&D / IT / Ops",subtext:"Multi-Disciplinary Synergy",icon:"Layers"},{label:"Approach",value:"Impact Driven",subtext:"Problem-Solving & Scalability",icon:"Target"}],experience:{organization:"Dawat-e-Hadiyah",department:"Department of Well-being of Women and Children",role:"Assistant Administrator",period:"2019 — Present",location:"Mumbai, India",description:"Driving digital transformation, multimedia production, and organizational workflow optimization to amplify departmental outreach and community impact.",pillars:[{title:"Research & Development",icon:"Search",responsibilities:["Investigating emerging AI technologies and productivity tools to identify practical operational applications.","Testing cutting-edge digital platforms and software to streamline institutional initiatives.","Researching tailored methodologies for community welfare communication and engagement.","Developing prototypes and implementing innovative tech solutions for daily administrative challenges.","Iteratively evaluating and enhancing existing organizational workflows."]},{title:"IT & Multimedia",icon:"Film",responsibilities:["Spearheading end-to-end graphic design and branding assets for multi-channel community campaigns.","Directing video editing, motion graphics, and audio-visual storytelling for high-visibility programs.","Designing high-stakes executive presentations, annual reports, and visual briefs.","Managing digital communication pipelines, web streams, and interactive portals.","Architecting creative asset repositories to maintain institutional visual consistency."]},{title:"Operations",icon:"Cpu",responsibilities:["Coordinating inter-departmental operations and executing multi-stakeholder project milestones.","Formulating standard operating procedures (SOPs) and comprehensive technical documentation.","Optimizing digital workflows and administrative databases to minimize manual overhead.","Overseeing rollout and staff onboarding for new digital tools and automated systems.","Monitoring project lifecycles from ideation and requirement mapping to successful deployment."]}]},whatIDo:[{id:"rd",title:"Research & Development",category:"Innovation & Strategy",icon:"Microscope",highlight:"Investigate problems & discover technology-driven solutions",description:"Bridging the gap between emerging technological capabilities and practical organizational needs through rigorous exploration, prototyping, and continuous improvement.",capabilities:["Emerging Tech & AI Tools Research","Workflow Automation Feasibility Studies","Process Friction Analysis & Improvement","Solution Prototyping & Validation","Digital Transformation Strategy","Iterative System Refinement"]},{id:"multimedia",title:"IT & Multimedia",category:"Creative Production",icon:"Video",highlight:"Showcase creative and technical production excellence",description:"Delivering visually compelling, technically sound multimedia experiences that communicate complex concepts with clarity, elegance, and emotional resonance.",capabilities:["Brand Identity & Graphic Design","High-Impact Video Production & Post","Executive Presentation Design","Digital Content & Visual Assets","Multi-Platform Communication","Creative Direction & Storyboarding"]},{id:"operations",title:"Operations & Workflows",category:"Execution & Systems",icon:"Workflow",highlight:"Organizational implementation & workflow optimization",description:"Designing resilient systems, frictionless operational workflows, and rigorous documentation that turn strategic objectives into repeatable daily successes.",capabilities:["End-to-End Project Coordination","Operational Process Optimization","Digital Tool Implementation & Training","SOPs & Technical Documentation","Resource & Timeline Management","Cross-Functional Team Collaboration"]}],skillCategories:[{id:"all",label:"All Capabilities"},{id:"design",label:"Design"},{id:"video",label:"Video & Motion"},{id:"technology",label:"Technology & AI"},{id:"communication",label:"Communication & Ops"}],skills:[{name:"Adobe Photoshop",category:"design",level:92,experience:"5+ Years",tags:["Digital Imaging","Retouching","Compositing","Visual Assets"],highlight:"Advanced raster manipulation & campaign asset production"},{name:"Adobe Illustrator",category:"design",level:88,experience:"4+ Years",tags:["Vector Art","Brand Identity","Iconography","Typography"],highlight:"Precision vector illustration and scalable brand assets"},{name:"Canva Pro",category:"design",level:95,experience:"5+ Years",tags:["Rapid Prototyping","Social Media","Deck Layouts","Templates"],highlight:"Rapid high-velocity collateral and collaborative layouts"},{name:"Figma",category:"design",level:82,experience:"3+ Years",tags:["UI Wireframes","Prototyping","Design Systems","Components"],highlight:"User interface architecture and responsive layouts"},{name:"Adobe Premiere Pro",category:"video",level:90,experience:"5+ Years",tags:["Video Editing","Color Grading","Audio Mixing","Multi-Cam"],highlight:"Full-length documentary and promotional video post-production"},{name:"Adobe After Effects",category:"video",level:84,experience:"4+ Years",tags:["Motion Graphics","Kinetic Typography","Visual FX","Transitions"],highlight:"Dynamic motion graphics, titles, and visual accents"},{name:"AI Tools & LLM Workflows",category:"technology",level:92,experience:"3+ Years",tags:["Prompt Engineering","GenAI","Custom GPTs","Workflow Augmentation"],highlight:"Harnessing modern AI models for research, content, and productivity"},{name:"Workflow Automation",category:"technology",level:88,experience:"4+ Years",tags:["Zapier / Make","Batch Processing","Task Pipelines","API Integrations"],highlight:"Designing automated pipelines connecting disparate tools and databases"},{name:"Microsoft Office 365",category:"technology",level:94,experience:"6+ Years",tags:["Advanced Excel","PowerPoint Master","Word Formatting","Collaboration"],highlight:"Executive presentation decks and analytical spreadsheet modeling"},{name:"Google Workspace Ecosystem",category:"technology",level:95,experience:"6+ Years",tags:["Docs / Sheets","Google Forms","Drive Architecture","AppSheet"],highlight:"Cloud collaboration infrastructure and organizational data collection"},{name:"Research & Synthesis",category:"communication",level:92,experience:"5+ Years",tags:["Qualitative Analysis","Comparative Feasibility","Tech Audits","Briefs"],highlight:"Distilling multifaceted technical problems into actionable executive summaries"},{name:"Public & Digital Communication",category:"communication",level:90,experience:"5+ Years",tags:["Campaign Messaging","Community Engagement","Copywriting","PR Assets"],highlight:"Crafting resonant messages for large institutional audiences"},{name:"Project Management",category:"communication",level:89,experience:"5+ Years",tags:["Milestone Tracking","Resource Allocation","Risk Management","Coordination"],highlight:"Orchestrating concurrent initiatives with predictable, on-time delivery"},{name:"Process Documentation & SOPs",category:"communication",level:94,experience:"5+ Years",tags:["Standard Operating Procedures","User Manuals","Workflow Diagrams"],highlight:"Authoring comprehensive operational guides that ensure flawless continuity"}],projectCategories:[{id:"all",label:"All Projects"},{id:"multimedia",label:"Multimedia Campaigns"},{id:"automation",label:"Workflow Automation"},{id:"research",label:"Research Projects"},{id:"design",label:"Creative Designs"},{id:"tech",label:"Technology Solutions"}],projects:[{id:"welfare-multimedia-campaign",title:"Community Well-being Awareness & Multimedia Campaign",category:"multimedia",categoryLabel:"Multimedia Campaigns",featured:!0,thumbnailGradient:"linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #312e81 100%)",accentColor:"#d4af37",shortDesc:"A multi-touchpoint multimedia campaign combining video docuseries, infographic guides, and digital broadcasts for maternal and child health awareness.",role:"Lead Creative Producer & Multimedia Coordinator",tools:["Premiere Pro","After Effects","Photoshop","Illustrator","Google Workspace"],outcome:"Expanded outreach by 300% across regional centers with zero communication delays.",overview:"An extensive visual communication drive designed to educate families on child development, health screenings, and wellness best practices across diverse community centers.",problem:"Previous welfare initiatives relied heavily on dense printed circulars and fragmented text messages, resulting in low engagement rates and frequent misunderstandings of essential guidelines.",approach:"Conducted audience research to identify key information friction points. Conceptualized and produced a 6-part bite-sized video series paired with illustrated bilingual infographics, standardized executive slide decks, and automated distribution queues.",result:"Achieved over 15,000+ direct views across target community hubs, received unanimous positive feedback from field administrators, and established a reusable multimedia template for subsequent seasonal campaigns.",impact:"Transformed passive welfare advisories into an engaging, empathetic digital experience that measurably boosted community event participation and guideline adherence."},{id:"institutional-workflow-automation",title:"Automated Administrative Workflow & Reporting System",category:"automation",categoryLabel:"Workflow Automation",featured:!0,thumbnailGradient:"linear-gradient(135deg, #111827 0%, #1f2937 50%, #1e1b4b 100%)",accentColor:"#e5c05b",shortDesc:"End-to-end automated data collection, verification, and real-time dashboard pipeline replacing paper-based reporting across departments.",role:"Workflow Architect & Operations Lead",tools:["Google Workspace","Automation Scripts","AppSheet","Excel / Sheets","AI Synthesizers"],outcome:"Reduced weekly administrative consolidation time from 18 hours down to under 30 minutes.",overview:"A streamlined digital pipeline that captures operational metrics from field coordinators, validates data automatically, and compiles executive summaries without manual intervention.",problem:"Field coordinators submitted varying Excel spreadsheets and physical notes, requiring administrative staff to spend dozens of manual hours weekly sanitizing, consolidating, and creating summary reports.",approach:"Designed unified, mobile-friendly data intake forms with strict validation rules. Linked responses into automated spreadsheet formulas and triggered automated PDF summary generators with AI-assisted executive commentary.",result:"Eliminated 97% of manual data entry errors, provided senior leadership with live visibility into department operations, and freed up coordinator time for direct beneficiary support.",impact:"Pioneered a scalable operational blueprint that was subsequently adopted by 3 adjacent administrative divisions."},{id:"ai-productivity-integration-study",title:"Generative AI & Productivity Framework for Administrative Teams",category:"research",categoryLabel:"Research Projects",featured:!0,thumbnailGradient:"linear-gradient(135deg, #1e1b4b 0%, #172554 50%, #0369a1 100%)",accentColor:"#38bdf8",shortDesc:"In-depth research and implementation pilot evaluating generative AI tools for document synthesis, translation, and administrative drafting.",role:"R&D Lead Researcher",tools:["LLM Prompt Architectures","Custom GPTs","Document Synthesizers","Notion","Process Auditing"],outcome:"Published 40-page practical AI adoption handbook and trained 25+ staff members.",overview:"An applied research study identifying safe, high-leverage generative AI use cases to augment daily administrative correspondence, multilingual document synthesis, and meeting documentation.",problem:"Staff faced bottlenecks drafting repetitive official correspondence and synthesizing lengthy conference notes, while lacking guidance on data privacy and ethical AI utilization.",approach:"Evaluated 12+ AI tools for compliance, accuracy, and workflow fit. Developed a library of vetted, role-specific prompt templates, step-by-step security protocols, and conducted hands-on interactive workshops.",result:"Drafting turnaround for standard official releases dropped by 65%, while translation verification across regional languages improved in both speed and consistency.",impact:"Demystified AI for non-technical administrative personnel, turning cutting-edge tech into daily time-saving reality with zero security incidents."},{id:"executive-brand-identity-collateral",title:"Departmental Visual Identity & Presentation Suite",category:"design",categoryLabel:"Creative Designs",featured:!1,thumbnailGradient:"linear-gradient(135deg, #27272a 0%, #18181b 50%, #713f12 100%)",accentColor:"#f59e0b",shortDesc:"A complete overhaul of institutional presentation templates, event branding, certificates, and publications adhering to modern luxury minimalism.",role:"Lead Visual Designer",tools:["Photoshop","Illustrator","PowerPoint","Figma","Canva"],outcome:"Delivered unified design kit used across 50+ institutional summits and annual reviews.",overview:"A comprehensive aesthetic modernization of all internal and external facing visual assets, ensuring high prestige, clarity, and brand consistency.",problem:"Disjointed presentation formats, outdated typography, and inconsistent color schemes compromised the professional image of high-level stakeholder presentations.",approach:"Created a modular design system incorporating bespoke typography pairings, rich dark/gold color tokens, vector iconography, and reusable slide templates with pre-configured layout grids.",result:"Received executive commendation for visual clarity at annual trustee meetings; standardized brand guidelines across all departmental sub-units.",impact:"Elevated the perceived prestige of department initiatives and reduced presentation preparation time for executives by half."},{id:"interactive-media-portal",title:"Centralized Digital Asset & Resource Distribution Portal",category:"tech",categoryLabel:"Technology Solutions",featured:!1,thumbnailGradient:"linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #064e3b 100%)",accentColor:"#10b981",shortDesc:"Web-based asset repository allowing field coordinators across multiple regions to access vetted multimedia assets, guides, and forms on demand.",role:"System Designer & Content Manager",tools:["Cloud Storage","Web Portal","Figma","Digital Asset Management","HTML/CSS"],outcome:"Centralized 500+ verified media assets with instant keyword search and role-based permissions.",overview:"A responsive, intuitive cloud portal designed for seamless distribution of approved brochures, video masters, and official forms to regional coordinators.",problem:"Field units struggled with outdated asset versions shared over ad-hoc chat groups, leading to accidental distribution of superseded campaign materials.",approach:"Structured a categorized digital repository with intuitive tagging, download tracking, versioning history, and responsive mobile-first previews.",result:"100% elimination of outdated material distribution; coordinator search time reduced from 15 minutes to under 10 seconds.",impact:"Secured absolute brand compliance across all geographic locations while empowering field teams with instantaneous access to high-res media."},{id:"process-standardization-handbook",title:"Comprehensive Administrative Operations & SOP Manual",category:"automation",categoryLabel:"Workflow Automation",featured:!1,thumbnailGradient:"linear-gradient(135deg, #1c1917 0%, #292524 50%, #44403c 100%)",accentColor:"#a8a29e",shortDesc:"A complete codification of standard operating procedures, role handoffs, event logistics checklists, and emergency communication protocols.",role:"Lead Documentarian & Process Consultant",tools:["Process Mapping","Documentation Suites","Illustrator","Google Docs / PDF","Flowcharts"],outcome:"Published 120-page operational bible reducing new staff onboarding time by 70%.",overview:"Systematic documentation of every recurring departmental process, from event stage management and VIP protocol to digital archiving and equipment maintenance.",problem:"Key operational know-how was held informally by senior staff, causing operational vulnerability when key personnel were unavailable.",approach:"Conducted structured interviews with every team lead, mapped end-to-end workflows with visual flowcharts, and compiled step-by-step checklist protocols with clickable resources.",result:"Successfully tested during major institutional events with zero procedural oversights; slashed onboarding time for new assistants.",impact:"Created permanent institutional memory and a reliable framework for operational continuity."}],education:[{degree:"FYBAMMC — Bachelor of Arts in Multimedia and Mass Communication",institution:"University of Mumbai",period:"Currently Pursuing (First Year)",location:"Mumbai, India",status:"In Progress",description:"Comprehensive academic immersion covering digital media production, mass communication theory, journalism, advertising, public relations, visual aesthetics, and media ethics.",highlights:["In-depth focus on visual media storytelling and digital journalism","Exploring the socio-technical dimensions of mass media and communication","Applied projects in scriptwriting, video production, and media design"]},{degree:"Higher Secondary & Foundation Studies",institution:"State Board of Secondary & Higher Secondary Education",period:"Completed",location:"Mumbai, India",status:"Completed",description:"Rigorous foundational academics emphasizing analytical thinking, language proficiency, computing, and organizational discipline.",highlights:["Strong academic track record in communications and computing","Active participation in campus media and organizational committees"]}],contactInfo:{heading:"Let's Build Something Meaningful Together",subheading:"Whether you have a digital transformation challenge, a multimedia campaign, or wish to explore a collaboration, I'd love to connect.",email:"shabbirmaanak@gmail.com",phone:"+91 98765 43210",location:"Mumbai, Maharashtra, India",availability:"Available for select R&D, Multimedia & Workflow consulting",socials:[{name:"LinkedIn",url:"https://linkedin.com/in/shabbirmaanak",icon:"Linkedin"},{name:"Instagram",url:"https://instagram.com/shabbirmaanak",icon:"Instagram"},{name:"GitHub",url:"https://github.com/shabbirmaanak",icon:"Github"},{name:"Email",url:"mailto:shabbirmaanak@gmail.com",icon:"Mail"}]}},$o="shabbir_portfolio_cms_data_v1";function Ef(){if(typeof window>"u")return cn;try{const h=localStorage.getItem($o);if(h){const z=JSON.parse(h);return{...cn,...z,personalInfo:{...cn.personalInfo,...z.personalInfo||{}}}}}catch(h){console.error("Error loading stored portfolio data",h)}return cn}function Wc(h){if(!(typeof window>"u"))try{localStorage.setItem($o,JSON.stringify(h))}catch(z){console.error("Error saving portfolio data",z)}}function _f(){if(typeof window>"u")return cn;try{localStorage.removeItem($o)}catch(h){console.error("Error resetting portfolio data",h)}return cn}function Pf({data:h,onUpdateData:z,onExitAdmin:d}){const[M,b]=se.useState("personal"),[v,C]=se.useState(JSON.parse(JSON.stringify(h))),[B,D]=se.useState(!1),[J,te]=se.useState(!1),[O,ee]=se.useState("export"),[xe,ze]=se.useState(""),[q,Z]=se.useState(""),[Q,ye]=se.useState(null),Ke=()=>{Wc(v),z(v),D(!0),setTimeout(()=>D(!1),3e3)},Pe=()=>{if(window.confirm("Are you sure you want to reset all portfolio data back to default? All custom edits will be reverted.")){const x=_f();C(JSON.parse(JSON.stringify(x))),z(x),D(!0),setTimeout(()=>D(!1),3e3)}},Je=()=>{try{Z("");const x=JSON.parse(xe),k={...cn,...x};C(k),Wc(k),z(k),te(!1),D(!0),setTimeout(()=>D(!1),3e3)}catch(x){Z("Invalid JSON format: "+x.message)}},E=(x,k)=>{C(F=>{const _=JSON.parse(JSON.stringify(F)),re=x.split(".");let Se=_;for(let ke=0;ke<re.length-1;ke++)Se[re[ke]]||(Se[re[ke]]={}),Se=Se[re[ke]];return Se[re[re.length-1]]=k,_})};return l.jsxs("div",{className:"cms-wrapper",children:[l.jsxs("header",{className:"cms-topbar",children:[l.jsxs("div",{className:"cms-brand-left",children:[l.jsx("div",{className:"cms-logo-badge",children:l.jsx("span",{children:"CMS"})}),l.jsxs("div",{children:[l.jsx("h1",{className:"cms-title",children:"Shabbir Maanak — Portfolio CMS"}),l.jsxs("span",{className:"cms-status-tag",children:[l.jsx("span",{className:"cms-status-dot"})," Live Instant Edit Mode"]})]})]}),l.jsxs("div",{className:"cms-actions-right",children:[l.jsxs("button",{type:"button",onClick:()=>{ee("export"),te(!0)},className:"cms-btn-subtle",title:"Export / Download JSON Configuration",children:[l.jsx(Oo,{size:15}),l.jsx("span",{children:"Export JSON"})]}),l.jsxs("button",{type:"button",onClick:()=>{ee("import"),ze(""),Z(""),te(!0)},className:"cms-btn-subtle",title:"Import JSON Configuration",children:[l.jsx(af,{size:15}),l.jsx("span",{children:"Import JSON"})]}),l.jsxs("button",{type:"button",onClick:Pe,className:"cms-btn-danger",title:"Reset to default original data",children:[l.jsx(qp,{size:15}),l.jsx("span",{children:"Reset"})]}),l.jsxs("button",{type:"button",onClick:Ke,className:"cms-btn-save",children:[l.jsx(Zp,{size:16}),l.jsx("span",{children:"Save Changes"})]}),l.jsxs("button",{type:"button",onClick:d,className:"cms-btn-preview",children:[l.jsx(Jc,{size:16}),l.jsx("span",{children:"View Portfolio"})]})]})]}),B&&l.jsxs("div",{className:"cms-toast",role:"alert",children:[l.jsx(jr,{size:18}),l.jsx("span",{children:"Changes saved successfully to live portfolio!"})]}),l.jsxs("div",{className:"cms-layout-grid",children:[l.jsx("aside",{className:"cms-nav-sidebar",children:l.jsxs("ul",{className:"cms-nav-list",children:[l.jsx("li",{children:l.jsxs("button",{type:"button",className:`cms-nav-btn ${M==="personal"?"active":""}`,onClick:()=>b("personal"),children:[l.jsx(uf,{size:18}),l.jsx("span",{children:"Profile & Contact"})]})}),l.jsx("li",{children:l.jsxs("button",{type:"button",className:`cms-nav-btn ${M==="projects"?"active":""}`,onClick:()=>{b("projects"),ye(null)},children:[l.jsx(Mp,{size:18}),l.jsxs("span",{children:["Case Studies & Projects (",v.projects.length,")"]})]})}),l.jsx("li",{children:l.jsxs("button",{type:"button",className:`cms-nav-btn ${M==="experience"?"active":""}`,onClick:()=>b("experience"),children:[l.jsx(Yc,{size:18}),l.jsx("span",{children:"Experience & Pillars"})]})}),l.jsx("li",{children:l.jsxs("button",{type:"button",className:`cms-nav-btn ${M==="skills"?"active":""}`,onClick:()=>b("skills"),children:[l.jsx(tu,{size:18}),l.jsxs("span",{children:["Skills Matrix (",v.skills.length,")"]})]})}),l.jsx("li",{children:l.jsxs("button",{type:"button",className:`cms-nav-btn ${M==="services"?"active":""}`,onClick:()=>b("services"),children:[l.jsx(Ap,{size:18}),l.jsxs("span",{children:["What I Do Pillars (",v.whatIDo.length,")"]})]})}),l.jsx("li",{children:l.jsxs("button",{type:"button",className:`cms-nav-btn ${M==="education"?"active":""}`,onClick:()=>b("education"),children:[l.jsx(Xc,{size:18}),l.jsxs("span",{children:["Education Timeline (",v.education.length,")"]})]})}),l.jsx("li",{children:l.jsxs("button",{type:"button",className:`cms-nav-btn ${M==="philosophy"?"active":""}`,onClick:()=>b("philosophy"),children:[l.jsx(eu,{size:18}),l.jsx("span",{children:"Philosophy & Ethos"})]})})]})}),l.jsxs("main",{className:"cms-editor-panel",children:[M==="personal"&&l.jsxs("div",{className:"cms-section-card",children:[l.jsx("h2",{className:"cms-section-title",children:"Personal Identity & Contact Information"}),l.jsx("p",{className:"cms-section-subtitle",children:"Manage your primary brand positioning, contact details, bio, and social channels."}),l.jsxs("div",{className:"cms-form-grid",children:[l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Full Name"}),l.jsx("input",{type:"text",value:v.personalInfo.name,onChange:x=>E("personalInfo.name",x.target.value)})]}),l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Primary Role Title"}),l.jsx("input",{type:"text",value:v.personalInfo.role,onChange:x=>E("personalInfo.role",x.target.value)})]}),l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Organization"}),l.jsx("input",{type:"text",value:v.personalInfo.organization,onChange:x=>E("personalInfo.organization",x.target.value)})]}),l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Department"}),l.jsx("input",{type:"text",value:v.personalInfo.department,onChange:x=>E("personalInfo.department",x.target.value)})]}),l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Experience Since (Year)"}),l.jsx("input",{type:"text",value:v.personalInfo.experienceSince,onChange:x=>E("personalInfo.experienceSince",x.target.value)})]}),l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Professional Positioning Tagline"}),l.jsx("input",{type:"text",value:v.personalInfo.positioning,onChange:x=>E("personalInfo.positioning",x.target.value)})]}),l.jsxs("div",{className:"cms-field full-width",children:[l.jsx("label",{children:"Core Hero Statement / Tagline"}),l.jsx("input",{type:"text",value:v.personalInfo.tagline,onChange:x=>E("personalInfo.tagline",x.target.value)})]}),l.jsxs("div",{className:"cms-field full-width",children:[l.jsx("label",{children:"Biography & Summary"}),l.jsx("textarea",{rows:"4",value:v.personalInfo.bio,onChange:x=>E("personalInfo.bio",x.target.value)})]}),l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Email Address"}),l.jsx("input",{type:"email",value:v.personalInfo.email,onChange:x=>E("personalInfo.email",x.target.value)})]}),l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Phone Number"}),l.jsx("input",{type:"text",value:v.personalInfo.phone,onChange:x=>E("personalInfo.phone",x.target.value)})]}),l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Location (City, Country)"}),l.jsx("input",{type:"text",value:v.personalInfo.location,onChange:x=>E("personalInfo.location",x.target.value)})]}),l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"LinkedIn URL"}),l.jsx("input",{type:"text",value:v.personalInfo.linkedin||"",onChange:x=>E("personalInfo.linkedin",x.target.value)})]}),l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Instagram URL"}),l.jsx("input",{type:"text",value:v.personalInfo.instagram||"",placeholder:"https://instagram.com/yourusername",onChange:x=>E("personalInfo.instagram",x.target.value)})]}),l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"GitHub URL"}),l.jsx("input",{type:"text",value:v.personalInfo.github||"",onChange:x=>E("personalInfo.github",x.target.value)})]})]})]}),M==="projects"&&l.jsxs("div",{className:"cms-section-card",children:[l.jsxs("div",{className:"cms-card-header-row",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"cms-section-title",children:"Case Studies & Projects Portfolio"}),l.jsx("p",{className:"cms-section-subtitle",children:"Add, edit, or remove project case studies with full problem-solving metrics."})]}),l.jsxs("button",{type:"button",onClick:()=>{const k=[{id:`project-${Date.now()}`,title:"New Case Study Project",category:"multimedia",categoryLabel:"Multimedia Campaigns",featured:!1,thumbnailGradient:"linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #312e81 100%)",accentColor:"#d4af37",shortDesc:"Brief description of the project outcome and core deliverables.",role:"Lead Coordinator",tools:["Photoshop","Illustrator","Premiere Pro"],outcome:"Measurable key impact and results delivered.",overview:"Comprehensive overview of the initiative.",problem:"Detailed problem description.",approach:"Strategic approach and technical implementation.",result:"Tangible operational result.",impact:"Long-term organizational impact."},...v.projects];E("projects",k),ye(0)},className:"cms-btn-add",children:[l.jsx(Di,{size:16}),l.jsx("span",{children:"Add New Project"})]})]}),Q!==null&&v.projects[Q]?l.jsxs("div",{className:"cms-sub-editor",children:[l.jsxs("div",{className:"cms-sub-header",children:[l.jsxs("h3",{children:["Editing: ",v.projects[Q].title]}),l.jsxs("button",{type:"button",onClick:()=>ye(null),className:"cms-btn-subtle",children:[l.jsx(yp,{size:14})," Done Editing"]})]}),l.jsxs("div",{className:"cms-form-grid",children:[l.jsxs("div",{className:"cms-field full-width",children:[l.jsx("label",{children:"Project Title"}),l.jsx("input",{type:"text",value:v.projects[Q].title,onChange:x=>{const k=[...v.projects];k[Q].title=x.target.value,E("projects",k)}})]}),l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Category Key (multimedia | automation | research | design | tech)"}),l.jsx("input",{type:"text",value:v.projects[Q].category,onChange:x=>{const k=[...v.projects];k[Q].category=x.target.value,E("projects",k)}})]}),l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Category Display Label"}),l.jsx("input",{type:"text",value:v.projects[Q].categoryLabel,onChange:x=>{const k=[...v.projects];k[Q].categoryLabel=x.target.value,E("projects",k)}})]}),l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Role"}),l.jsx("input",{type:"text",value:v.projects[Q].role,onChange:x=>{const k=[...v.projects];k[Q].role=x.target.value,E("projects",k)}})]}),l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Featured Project?"}),l.jsxs("select",{value:v.projects[Q].featured?"true":"false",onChange:x=>{const k=[...v.projects];k[Q].featured=x.target.value==="true",E("projects",k)},className:"cms-select",children:[l.jsx("option",{value:"true",children:"Yes (Featured Badge)"}),l.jsx("option",{value:"false",children:"No (Standard)"})]})]}),l.jsxs("div",{className:"cms-field full-width",children:[l.jsx("label",{children:"Short Summary / Card Description"}),l.jsx("input",{type:"text",value:v.projects[Q].shortDesc,onChange:x=>{const k=[...v.projects];k[Q].shortDesc=x.target.value,E("projects",k)}})]}),l.jsxs("div",{className:"cms-field full-width",children:[l.jsx("label",{children:"Primary Outcome & Key Result Preview"}),l.jsx("input",{type:"text",value:v.projects[Q].outcome,onChange:x=>{const k=[...v.projects];k[Q].outcome=x.target.value,E("projects",k)}})]}),l.jsxs("div",{className:"cms-field full-width",children:[l.jsx("label",{children:"Tools & Technologies (Comma-separated)"}),l.jsx("input",{type:"text",value:v.projects[Q].tools.join(", "),onChange:x=>{const k=[...v.projects];k[Q].tools=x.target.value.split(",").map(F=>F.trim()).filter(Boolean),E("projects",k)}})]}),l.jsxs("div",{className:"cms-field full-width",children:[l.jsx("label",{children:"Case Study: Overview"}),l.jsx("textarea",{rows:"3",value:v.projects[Q].overview,onChange:x=>{const k=[...v.projects];k[Q].overview=x.target.value,E("projects",k)}})]}),l.jsxs("div",{className:"cms-field full-width",children:[l.jsx("label",{children:"Case Study: The Challenge / Problem"}),l.jsx("textarea",{rows:"3",value:v.projects[Q].problem,onChange:x=>{const k=[...v.projects];k[Q].problem=x.target.value,E("projects",k)}})]}),l.jsxs("div",{className:"cms-field full-width",children:[l.jsx("label",{children:"Case Study: Strategic Approach & Implementation"}),l.jsx("textarea",{rows:"3",value:v.projects[Q].approach,onChange:x=>{const k=[...v.projects];k[Q].approach=x.target.value,E("projects",k)}})]}),l.jsxs("div",{className:"cms-field full-width",children:[l.jsx("label",{children:"Case Study: Tangible Results"}),l.jsx("textarea",{rows:"3",value:v.projects[Q].result,onChange:x=>{const k=[...v.projects];k[Q].result=x.target.value,E("projects",k)}})]}),l.jsxs("div",{className:"cms-field full-width",children:[l.jsx("label",{children:"Case Study: Long-term Impact"}),l.jsx("textarea",{rows:"3",value:v.projects[Q].impact,onChange:x=>{const k=[...v.projects];k[Q].impact=x.target.value,E("projects",k)}})]})]})]}):l.jsx("div",{className:"cms-items-list",children:v.projects.map((x,k)=>l.jsxs("div",{className:"cms-list-row",children:[l.jsxs("div",{className:"cms-row-info",children:[l.jsx("span",{className:"cms-row-badge",children:x.categoryLabel}),l.jsx("h4",{className:"cms-row-title",children:x.title}),l.jsx("p",{className:"cms-row-sub",children:x.shortDesc})]}),l.jsxs("div",{className:"cms-row-actions",children:[l.jsx("button",{type:"button",onClick:()=>ye(k),className:"cms-btn-subtle",children:"Edit Details"}),l.jsx("button",{type:"button",onClick:()=>{if(window.confirm(`Delete project "${x.title}"?`)){const F=v.projects.filter((_,re)=>re!==k);E("projects",F)}},className:"cms-btn-danger-icon",title:"Delete Project",children:l.jsx(Ii,{size:16})})]})]},x.id||k))})]}),M==="experience"&&l.jsxs("div",{className:"cms-section-card",children:[l.jsx("h2",{className:"cms-section-title",children:"Professional Experience & Pillars"}),l.jsx("p",{className:"cms-section-subtitle",children:"Manage institutional tenure at Dawat-e-Hadiyah and key functional responsibilities."}),l.jsxs("div",{className:"cms-form-grid",children:[l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Role"}),l.jsx("input",{type:"text",value:v.experience.role,onChange:x=>E("experience.role",x.target.value)})]}),l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Organization"}),l.jsx("input",{type:"text",value:v.experience.organization,onChange:x=>E("experience.organization",x.target.value)})]}),l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Department"}),l.jsx("input",{type:"text",value:v.experience.department,onChange:x=>E("experience.department",x.target.value)})]}),l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Period"}),l.jsx("input",{type:"text",value:v.experience.period,onChange:x=>E("experience.period",x.target.value)})]}),l.jsxs("div",{className:"cms-field full-width",children:[l.jsx("label",{children:"Executive Overview"}),l.jsx("textarea",{rows:"3",value:v.experience.description,onChange:x=>E("experience.description",x.target.value)})]})]}),l.jsx("h3",{className:"cms-subheading",style:{marginTop:"30px"},children:"Functional Area Pillars"}),l.jsx("div",{className:"cms-pillars-manager",children:v.experience.pillars.map((x,k)=>l.jsxs("div",{className:"cms-pillar-box",children:[l.jsx("h4",{className:"cms-pillar-name",children:x.title}),l.jsxs("div",{className:"cms-pillar-bullets-list",children:[x.responsibilities.map((F,_)=>l.jsxs("div",{className:"cms-bullet-input-row",children:[l.jsx("input",{type:"text",value:F,onChange:re=>{const Se=JSON.parse(JSON.stringify(v.experience.pillars));Se[k].responsibilities[_]=re.target.value,E("experience.pillars",Se)}}),l.jsx("button",{type:"button",onClick:()=>{const re=JSON.parse(JSON.stringify(v.experience.pillars));re[k].responsibilities=re[k].responsibilities.filter((Se,ke)=>ke!==_),E("experience.pillars",re)},className:"cms-btn-del",children:l.jsx(Ii,{size:14})})]},_)),l.jsxs("button",{type:"button",onClick:()=>{const F=JSON.parse(JSON.stringify(v.experience.pillars));F[k].responsibilities.push("New functional responsibility description..."),E("experience.pillars",F)},className:"cms-btn-add-mini",children:[l.jsx(Di,{size:14})," Add Responsibility Point"]})]})]},x.title))})]}),M==="skills"&&l.jsxs("div",{className:"cms-section-card",children:[l.jsxs("div",{className:"cms-card-header-row",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"cms-section-title",children:"Technical & Creative Skills System"}),l.jsx("p",{className:"cms-section-subtitle",children:"Manage tools, proficiency percentages, and capability tags."})]}),l.jsxs("button",{type:"button",onClick:()=>{E("skills",[{name:"New Tool / Capability",category:"technology",level:85,experience:"3+ Years",tags:["Tool Tag 1","Tool Tag 2"],highlight:"Brief highlight of practical application"},...v.skills])},className:"cms-btn-add",children:[l.jsx(Di,{size:16}),l.jsx("span",{children:"Add Skill"})]})]}),l.jsx("div",{className:"cms-skills-editor-grid",children:v.skills.map((x,k)=>l.jsxs("div",{className:"cms-skill-edit-card",children:[l.jsxs("div",{className:"cms-skill-head",children:[l.jsx("input",{type:"text",value:x.name,onChange:F=>{const _=[...v.skills];_[k].name=F.target.value,E("skills",_)},className:"cms-skill-name-input"}),l.jsx("button",{type:"button",onClick:()=>{const F=v.skills.filter((_,re)=>re!==k);E("skills",F)},className:"cms-btn-danger-icon",children:l.jsx(Ii,{size:14})})]}),l.jsxs("div",{className:"cms-skill-row",children:[l.jsxs("div",{className:"cms-field-mini",children:[l.jsx("label",{children:"Category (design | video | technology | communication)"}),l.jsx("input",{type:"text",value:x.category,onChange:F=>{const _=[...v.skills];_[k].category=F.target.value,E("skills",_)}})]}),l.jsxs("div",{className:"cms-field-mini",children:[l.jsx("label",{children:"Experience Label"}),l.jsx("input",{type:"text",value:x.experience,onChange:F=>{const _=[...v.skills];_[k].experience=F.target.value,E("skills",_)}})]})]}),l.jsxs("div",{className:"cms-slider-row",children:[l.jsxs("label",{children:["Proficiency: ",l.jsxs("strong",{children:[x.level,"%"]})]}),l.jsx("input",{type:"range",min:"50",max:"100",value:x.level,onChange:F=>{const _=[...v.skills];_[k].level=parseInt(F.target.value,10),E("skills",_)},className:"cms-range-slider"})]}),l.jsxs("div",{className:"cms-field-mini",style:{marginTop:"8px"},children:[l.jsx("label",{children:"Highlight Note"}),l.jsx("input",{type:"text",value:x.highlight,onChange:F=>{const _=[...v.skills];_[k].highlight=F.target.value,E("skills",_)}})]}),l.jsxs("div",{className:"cms-field-mini",style:{marginTop:"8px"},children:[l.jsx("label",{children:"Tags (Comma-separated)"}),l.jsx("input",{type:"text",value:x.tags.join(", "),onChange:F=>{const _=[...v.skills];_[k].tags=F.target.value.split(",").map(re=>re.trim()).filter(Boolean),E("skills",_)}})]})]},k))})]}),M==="services"&&l.jsxs("div",{className:"cms-section-card",children:[l.jsx("h2",{className:"cms-section-title",children:"What I Do Pillars"}),l.jsx("p",{className:"cms-section-subtitle",children:"Manage service offerings and capability items displayed on the About tab."}),l.jsx("div",{className:"cms-services-list",children:v.whatIDo.map((x,k)=>l.jsx("div",{className:"cms-service-edit-card",children:l.jsxs("div",{className:"cms-form-grid",children:[l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Pillar Title"}),l.jsx("input",{type:"text",value:x.title,onChange:F=>{const _=[...v.whatIDo];_[k].title=F.target.value,E("whatIDo",_)}})]}),l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Category Label"}),l.jsx("input",{type:"text",value:x.category,onChange:F=>{const _=[...v.whatIDo];_[k].category=F.target.value,E("whatIDo",_)}})]}),l.jsxs("div",{className:"cms-field full-width",children:[l.jsx("label",{children:"Highlight Statement"}),l.jsx("input",{type:"text",value:x.highlight,onChange:F=>{const _=[...v.whatIDo];_[k].highlight=F.target.value,E("whatIDo",_)}})]}),l.jsxs("div",{className:"cms-field full-width",children:[l.jsx("label",{children:"Description"}),l.jsx("textarea",{rows:"3",value:x.description,onChange:F=>{const _=[...v.whatIDo];_[k].description=F.target.value,E("whatIDo",_)}})]}),l.jsxs("div",{className:"cms-field full-width",children:[l.jsx("label",{children:"Capabilities (Comma-separated)"}),l.jsx("input",{type:"text",value:x.capabilities.join(", "),onChange:F=>{const _=[...v.whatIDo];_[k].capabilities=F.target.value.split(",").map(re=>re.trim()).filter(Boolean),E("whatIDo",_)}})]})]})},x.id))})]}),M==="education"&&l.jsxs("div",{className:"cms-section-card",children:[l.jsxs("div",{className:"cms-card-header-row",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"cms-section-title",children:"Education & Academic Timeline"}),l.jsx("p",{className:"cms-section-subtitle",children:"Manage degree programs, university details, and achievements."})]}),l.jsxs("button",{type:"button",onClick:()=>{const x={degree:"New Degree or Certification",institution:"Institution / University",period:"Year / Duration",location:"Location",status:"Completed",description:"Course description...",highlights:["Key highlight 1","Key highlight 2"]};E("education",[...v.education,x])},className:"cms-btn-add",children:[l.jsx(Di,{size:16}),l.jsx("span",{children:"Add Education"})]})]}),l.jsx("div",{className:"cms-edu-list",children:v.education.map((x,k)=>l.jsxs("div",{className:"cms-edu-card",children:[l.jsxs("div",{className:"cms-card-header-row",children:[l.jsx("h4",{className:"cms-row-title",children:x.degree}),l.jsx("button",{type:"button",onClick:()=>{const F=v.education.filter((_,re)=>re!==k);E("education",F)},className:"cms-btn-danger-icon",children:l.jsx(Ii,{size:14})})]}),l.jsxs("div",{className:"cms-form-grid",children:[l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Degree / Qualification Title"}),l.jsx("input",{type:"text",value:x.degree,onChange:F=>{const _=[...v.education];_[k].degree=F.target.value,E("education",_)}})]}),l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Institution"}),l.jsx("input",{type:"text",value:x.institution,onChange:F=>{const _=[...v.education];_[k].institution=F.target.value,E("education",_)}})]}),l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Period / Year"}),l.jsx("input",{type:"text",value:x.period,onChange:F=>{const _=[...v.education];_[k].period=F.target.value,E("education",_)}})]}),l.jsxs("div",{className:"cms-field",children:[l.jsx("label",{children:"Location"}),l.jsx("input",{type:"text",value:x.location,onChange:F=>{const _=[...v.education];_[k].location=F.target.value,E("education",_)}})]}),l.jsxs("div",{className:"cms-field full-width",children:[l.jsx("label",{children:"Description"}),l.jsx("textarea",{rows:"2",value:x.description,onChange:F=>{const _=[...v.education];_[k].description=F.target.value,E("education",_)}})]}),l.jsxs("div",{className:"cms-field full-width",children:[l.jsx("label",{children:"Highlights (Comma-separated)"}),l.jsx("input",{type:"text",value:x.highlights.join(", "),onChange:F=>{const _=[...v.education];_[k].highlights=F.target.value.split(",").map(re=>re.trim()).filter(Boolean),E("education",_)}})]})]})]},k))})]}),M==="philosophy"&&l.jsxs("div",{className:"cms-section-card",children:[l.jsx("h2",{className:"cms-section-title",children:"Personal Philosophy & Guiding Ethos"}),l.jsx("p",{className:"cms-section-subtitle",children:"Edit the core quote and the three non-negotiable principles."}),l.jsxs("div",{className:"cms-form-grid",children:[l.jsxs("div",{className:"cms-field full-width",children:[l.jsx("label",{children:"Featured Quote"}),l.jsx("input",{type:"text",value:v.philosophy.quote,onChange:x=>E("philosophy.quote",x.target.value)})]}),l.jsxs("div",{className:"cms-field full-width",children:[l.jsx("label",{children:"Subtext / Supporting Statement"}),l.jsx("input",{type:"text",value:v.philosophy.subtext,onChange:x=>E("philosophy.subtext",x.target.value)})]})]}),l.jsx("h3",{className:"cms-subheading",style:{marginTop:"25px"},children:"3 Core Principles"}),l.jsx("div",{className:"cms-principles-grid",children:v.philosophy.principles.map((x,k)=>l.jsxs("div",{className:"cms-prin-card",children:[l.jsxs("div",{className:"cms-field full-width",children:[l.jsxs("label",{children:["Principle ",k+1," Title"]}),l.jsx("input",{type:"text",value:x.title,onChange:F=>{const _=[...v.philosophy.principles];_[k].title=F.target.value,E("philosophy.principles",_)}})]}),l.jsxs("div",{className:"cms-field full-width",style:{marginTop:"10px"},children:[l.jsx("label",{children:"Description"}),l.jsx("textarea",{rows:"2",value:x.description,onChange:F=>{const _=[...v.philosophy.principles];_[k].description=F.target.value,E("philosophy.principles",_)}})]})]},k))})]})]})]}),J&&l.jsx("div",{className:"cms-modal-overlay",onClick:()=>te(!1),children:l.jsxs("div",{className:"cms-modal-box",onClick:x=>x.stopPropagation(),children:[l.jsxs("div",{className:"cms-modal-header",children:[l.jsx("h3",{children:O==="export"?"Export Portfolio JSON Configuration":"Import Portfolio JSON Configuration"}),l.jsx("button",{type:"button",onClick:()=>te(!1),className:"cms-modal-close",children:l.jsx(Fo,{size:18})})]}),l.jsx("div",{className:"cms-modal-body",children:O==="export"?l.jsxs(l.Fragment,{children:[l.jsx("p",{className:"cms-modal-desc",children:"Copy the JSON below or download it as a backup. You can replace the default dataset in your codebase anytime."}),l.jsx("textarea",{rows:"14",readOnly:!0,className:"cms-json-textarea",value:JSON.stringify(v,null,2)}),l.jsx("div",{className:"cms-modal-footer",children:l.jsx("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(JSON.stringify(v,null,2)),alert("JSON copied to clipboard!")},className:"cms-btn-save",children:"Copy to Clipboard"})})]}):l.jsxs(l.Fragment,{children:[l.jsx("p",{className:"cms-modal-desc",children:"Paste your valid JSON configuration below. This will overwrite current in-browser data."}),q&&l.jsx("div",{className:"cms-error-msg",children:q}),l.jsx("textarea",{rows:"14",className:"cms-json-textarea",placeholder:"Paste JSON here...",value:xe,onChange:x=>ze(x.target.value)}),l.jsx("div",{className:"cms-modal-footer",children:l.jsx("button",{type:"button",onClick:Je,className:"cms-btn-save",children:"Import & Apply"})})]})})]})}),l.jsx("style",{children:`
        .cms-wrapper {
          min-height: 100vh;
          background: #08090d;
          color: #f1f5f9;
          font-family: 'Poppins', 'Plus Jakarta Sans', sans-serif;
          padding-bottom: 60px;
        }

        .cms-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 30px;
          background: #0f121a;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
        }

        .cms-brand-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .cms-logo-badge {
          background: linear-gradient(135deg, hsl(45, 100%, 72%) 0%, hsl(35, 100%, 68%) 100%);
          color: #0b0c10;
          font-weight: 800;
          font-size: 13px;
          padding: 6px 10px;
          border-radius: 8px;
          letter-spacing: 0.5px;
        }

        .cms-title {
          font-size: 17px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2px;
        }

        .cms-status-tag {
          font-size: 11px;
          color: hsl(45, 100%, 72%);
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .cms-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }

        .cms-actions-right {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .cms-btn-save {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, hsl(45, 100%, 72%) 0%, hsl(35, 100%, 68%) 100%);
          color: #0b0c10;
          font-weight: 700;
          font-size: 13px;
          padding: 9px 18px;
          border-radius: 10px;
          transition: transform 0.2s ease, filter 0.2s ease;
        }

        .cms-btn-save:hover {
          filter: brightness(1.1);
          transform: translateY(-2px);
        }

        .cms-btn-preview {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          font-size: 13px;
          font-weight: 600;
          padding: 9px 16px;
          border-radius: 10px;
          transition: all 0.2s ease;
        }

        .cms-btn-preview:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: hsl(45, 100%, 72%);
          color: hsl(45, 100%, 72%);
        }

        .cms-btn-subtle {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #cbd5e1;
          font-size: 12px;
          font-weight: 500;
          padding: 8px 12px;
          border-radius: 8px;
        }

        .cms-btn-subtle:hover {
          background: rgba(255, 255, 255, 0.09);
          color: #ffffff;
        }

        .cms-btn-danger {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #fca5a5;
          font-size: 12px;
          padding: 8px 12px;
          border-radius: 8px;
        }

        .cms-btn-danger:hover {
          background: rgba(239, 68, 68, 0.2);
        }

        .cms-toast {
          position: fixed;
          top: 85px;
          right: 30px;
          background: #064e3b;
          border: 1px solid #10b981;
          color: #a7f3d0;
          padding: 12px 18px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          z-index: 200;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          animation: fadeIn 0.3s ease;
        }

        /* Layout Grid */
        .cms-layout-grid {
          display: flex;
          max-width: 1350px;
          margin: 30px auto;
          padding: 0 25px;
          gap: 30px;
        }

        .cms-nav-sidebar {
          width: 270px;
          flex-shrink: 0;
        }

        .cms-nav-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: #11141e;
          padding: 12px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          position: sticky;
          top: 95px;
        }

        .cms-nav-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 500;
          color: #94a3b8;
          transition: all 0.2s ease;
          text-align: left;
        }

        .cms-nav-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
        }

        .cms-nav-btn.active {
          background: hsla(45, 100%, 72%, 0.12);
          border: 1px solid hsla(45, 100%, 72%, 0.3);
          color: hsl(45, 100%, 72%);
          font-weight: 600;
        }

        .cms-editor-panel {
          flex: 1;
          min-width: 0;
        }

        .cms-section-card {
          background: #11141e;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .cms-section-title {
          font-size: 22px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .cms-section-subtitle {
          font-size: 13px;
          color: #94a3b8;
          margin-bottom: 25px;
        }

        .cms-card-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .cms-btn-add {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: hsla(45, 100%, 72%, 0.15);
          border: 1px solid hsl(45, 100%, 72%);
          color: hsl(45, 100%, 72%);
          font-size: 12px;
          font-weight: 600;
          padding: 8px 14px;
          border-radius: 8px;
        }

        .cms-btn-add:hover {
          background: hsl(45, 100%, 72%);
          color: #000000;
        }

        .cms-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .cms-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .cms-field.full-width {
          grid-column: span 2;
        }

        .cms-field label {
          font-size: 12px;
          font-weight: 600;
          color: #cbd5e1;
        }

        .cms-field input, .cms-field textarea, .cms-field select {
          background: #080a10;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 13px;
          color: #ffffff;
          outline: none;
        }

        .cms-field input:focus, .cms-field textarea:focus, .cms-field select:focus {
          border-color: hsl(45, 100%, 72%);
        }

        .cms-items-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .cms-list-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #090c13;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 14px 18px;
        }

        .cms-row-badge {
          font-size: 11px;
          color: hsl(45, 100%, 72%);
          font-weight: 600;
          text-transform: uppercase;
        }

        .cms-row-title {
          font-size: 15px;
          color: #ffffff;
          margin: 2px 0;
        }

        .cms-row-sub {
          font-size: 12px;
          color: #94a3b8;
        }

        .cms-row-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cms-btn-danger-icon {
          color: #f87171;
          padding: 6px;
          border-radius: 6px;
          background: rgba(239, 68, 68, 0.1);
        }

        .cms-btn-danger-icon:hover {
          background: rgba(239, 68, 68, 0.25);
        }

        .cms-sub-editor {
          background: #090c13;
          border: 1px solid hsla(45, 100%, 72%, 0.3);
          border-radius: 14px;
          padding: 20px;
          margin-bottom: 20px;
        }

        .cms-sub-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .cms-sub-header h3 {
          font-size: 15px;
          color: hsl(45, 100%, 72%);
        }

        /* Pillars Manager */
        .cms-pillars-manager {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cms-pillar-box {
          background: #090c13;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 16px;
        }

        .cms-pillar-name {
          font-size: 14px;
          color: hsl(45, 100%, 72%);
          margin-bottom: 12px;
        }

        .cms-pillar-bullets-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .cms-bullet-input-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cms-bullet-input-row input {
          flex: 1;
          background: #050608;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 12px;
          color: #ffffff;
        }

        .cms-btn-del {
          color: #f87171;
          padding: 6px;
        }

        .cms-btn-add-mini {
          align-self: flex-start;
          font-size: 11px;
          color: hsl(45, 100%, 72%);
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 4px;
        }

        /* Skills Grid */
        .cms-skills-editor-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .cms-skill-edit-card {
          background: #090c13;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 14px;
        }

        .cms-skill-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 10px;
        }

        .cms-skill-name-input {
          font-weight: 700;
          font-size: 14px;
          color: #ffffff;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding: 2px 4px;
          width: 100%;
        }

        .cms-skill-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 8px;
        }

        .cms-field-mini label {
          display: block;
          font-size: 10px;
          color: #94a3b8;
          text-transform: uppercase;
          margin-bottom: 2px;
        }

        .cms-field-mini input {
          width: 100%;
          background: #050608;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 6px;
          padding: 6px 8px;
          font-size: 12px;
          color: #ffffff;
        }

        .cms-slider-row label {
          display: block;
          font-size: 11px;
          color: #cbd5e1;
          margin-bottom: 4px;
        }

        .cms-range-slider {
          width: 100%;
          accent-color: hsl(45, 100%, 72%);
        }

        /* Modal */
        .cms-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .cms-modal-box {
          background: #11141e;
          border: 1px solid hsla(45, 100%, 72%, 0.4);
          border-radius: 18px;
          width: 100%;
          max-width: 700px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.9);
        }

        .cms-modal-header {
          padding: 16px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cms-modal-body {
          padding: 20px;
        }

        .cms-modal-desc {
          font-size: 12px;
          color: #94a3b8;
          margin-bottom: 12px;
        }

        .cms-json-textarea {
          width: 100%;
          background: #06080d;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 10px;
          padding: 12px;
          color: #a7f3d0;
          font-family: monospace;
          font-size: 12px;
          outline: none;
        }

        .cms-modal-footer {
          margin-top: 15px;
          display: flex;
          justify-content: flex-end;
        }

        .cms-error-msg {
          color: #f87171;
          font-size: 12px;
          margin-bottom: 8px;
        }

        @media (max-width: 900px) {
          .cms-layout-grid {
            flex-direction: column;
          }
          .cms-nav-sidebar {
            width: 100%;
          }
          .cms-form-grid {
            grid-template-columns: 1fr;
          }
          .cms-field.full-width {
            grid-column: span 1;
          }
          .cms-skills-editor-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Mf(){const[h,z]=se.useState(()=>Ef()),[d,M]=se.useState("about"),[b,v]=se.useState(null),[C,B]=se.useState(!1),[D,J]=se.useState(!1);se.useEffect(()=>{const O=()=>{const ee=window.location.hash.toLowerCase(),xe=window.location.search.toLowerCase(),ze=window.location.pathname.toLowerCase();ee.includes("admin")||xe.includes("admin")||ze.includes("admin")?J(!0):J(!1)};return O(),window.addEventListener("hashchange",O),window.addEventListener("popstate",O),()=>{window.removeEventListener("hashchange",O),window.removeEventListener("popstate",O)}},[]);const te=()=>{window.location.hash="",J(!1)};return D?l.jsx(Pf,{data:h,onUpdateData:O=>z(O),onExitAdmin:te}):l.jsxs("div",{className:"vcard-app-container",children:[l.jsxs("main",{className:"vcard-main-layout",children:[l.jsx(yf,{data:h,onOpenResume:()=>B(!0)}),l.jsxs("div",{className:"vcard-right-content",children:[l.jsx(wf,{activeTab:d,onTabChange:M}),d==="about"&&l.jsx(jf,{data:h}),d==="resume"&&l.jsx(kf,{data:h,onOpenResume:()=>B(!0)}),d==="portfolio"&&l.jsx(bf,{data:h,onSelectProject:O=>v(O)}),d==="skills"&&l.jsx(Nf,{data:h}),d==="contact"&&l.jsx(Sf,{data:h})]})]}),b&&l.jsx(Cf,{project:b,onClose:()=>v(null)}),C&&l.jsx(zf,{data:h,isOpen:C,onClose:()=>B(!1)})]})}cp.createRoot(document.getElementById("root")).render(l.jsx(np.StrictMode,{children:l.jsx(Mf,{})}));
