System.register(["single-spa"],(function(t,e){var r={};return{setters:[function(t){r.registerApplication=t.registerApplication,r.start=t.start}],execute:function(){t((()=>{var t={798:function(t,e,r){t=r.nmd(t),function(r,n){"use strict";var o={};r.PubSub?(o=r.PubSub,console.warn("PubSub already loaded, using existing version")):(r.PubSub=o,function(t){var e={},r=-1,n="*";function o(t,e,r){try{t(e,r)}catch(t){setTimeout(function(t){return function(){throw t}}(t),0)}}function i(t,e,r){t(e,r)}function c(t,r,n,c){var u,s=e[r],a=c?i:o;if(Object.prototype.hasOwnProperty.call(e,r))for(u in s)Object.prototype.hasOwnProperty.call(s,u)&&a(s[u],t,n)}function u(t){var r=String(t);return Boolean(Object.prototype.hasOwnProperty.call(e,r)&&function(t){var e;for(e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!0;return!1}(e[r]))}function s(t,e,r,o){var i=function(t,e,r){return function(){var o=String(t),i=o.lastIndexOf(".");for(c(t,t,e,r);-1!==i;)i=(o=o.substr(0,i)).lastIndexOf("."),c(t,o,e,r);c(t,n,e,r)}}(t="symbol"==typeof t?t.toString():t,e,o);return!!function(t){for(var e=String(t),r=u(e)||u(n),o=e.lastIndexOf(".");!r&&-1!==o;)o=(e=e.substr(0,o)).lastIndexOf("."),r=u(e);return r}(t)&&(!0===r?i():setTimeout(i,0),!0)}t.publish=function(e,r){return s(e,r,!1,t.immediateExceptions)},t.publishSync=function(e,r){return s(e,r,!0,t.immediateExceptions)},t.subscribe=function(t,n){if("function"!=typeof n)return!1;t="symbol"==typeof t?t.toString():t,Object.prototype.hasOwnProperty.call(e,t)||(e[t]={});var o="uid_"+String(++r);return e[t][o]=n,o},t.subscribeAll=function(e){return t.subscribe(n,e)},t.subscribeOnce=function(e,r){var n=t.subscribe(e,(function(){t.unsubscribe(n),r.apply(this,arguments)}));return t},t.clearAllSubscriptions=function(){e={}},t.clearSubscriptions=function(t){var r;for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&0===r.indexOf(t)&&delete e[r]},t.countSubscriptions=function(t){var r,n,o=0;for(r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&0===r.indexOf(t)){for(n in e[r])o++;break}return o},t.getSubscriptions=function(t){var r,n=[];for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&0===r.indexOf(t)&&n.push(r);return n},t.unsubscribe=function(r){var n,o,i,c="string"==typeof r&&(Object.prototype.hasOwnProperty.call(e,r)||function(t){var r;for(r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&0===r.indexOf(t))return!0;return!1}(r)),u=!c&&"string"==typeof r,s="function"==typeof r,a=!1;if(!c){for(n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(o=e[n],u&&o[r]){delete o[r],a=r;break}if(s)for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&o[i]===r&&(delete o[i],a=!0)}return a}t.clearSubscriptions(r)}}(o)),void 0!==t&&t.exports&&(e=t.exports=o),e.PubSub=o,t.exports=e=o}("object"==typeof window&&window||this)},722:(t,e,r)=>{const n=r(905).R;e.s=function(t){if(t||(t=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,t)}},905:(t,e,r)=>{e.R=function(t,e){var r=document.createElement("a");r.href=t;for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,o=0,i=n.length;o!==e&&i>=0;)"/"===n[--i]&&o++;if(o!==e)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+e+") is greater than the number of directories ("+o+") in the URL path "+t);var c=n.slice(0,i+1);return r.protocol+"//"+r.host+c};Number.isInteger},645:t=>{"use strict";t.exports=r}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.y=e,o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),o.p="";var i={};return(0,o(722).s)(1),(()=>{"use strict";o.r(i);var t=o(645),e=o(798),r=o.n(e),n=function(t,e){return r().publish(t,e)},c=function(t,e){return r().subscribe(t,e)};(0,t.registerApplication)({name:"@hrc/mf-common",app:function(){return System.import("@hrc/mf-common")},activeWhen:["/"],customProps:{domElement:document.getElementById("nav-container-cls"),publish:n,subscribe:c}}),(0,t.registerApplication)({name:"@hrc/mf-collections",app:function(){return System.import("@hrc/mf-collections")},activeWhen:["/"],customProps:{domElement:document.getElementById("target-div-1"),publish:n,subscribe:c}}),(0,t.start)({urlRerouteOnly:!0})})(),i})())}}}));
//# sourceMappingURL=hrc-root-config.js.map
