module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);Object.defineProperty(t,"walkObject",{enumerable:!0,get:function(){return f(n).default}});var o=r(4);Object.defineProperty(t,"forEachPathSegment",{enumerable:!0,get:function(){return f(o).default}});var u=r(5);Object.defineProperty(t,"addValueByDottedPath",{enumerable:!0,get:function(){return f(u).default}});var i=r(6);Object.defineProperty(t,"getValueByDottedPath",{enumerable:!0,get:function(){return f(i).default}});var a=r(7);Object.defineProperty(t,"isObject",{enumerable:!0,get:function(){return f(a).default}});var l=r(8);Object.defineProperty(t,"filterObject",{enumerable:!0,get:function(){return f(l).default}});var c=r(9);function f(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"mergeObjects",{enumerable:!0,get:function(){return f(c).default}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2);Object.defineProperty(t,"BrickManager",{enumerable:!0,get:function(){return u(n).default}});var o=r(13);function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"combineReducers",{enumerable:!0,get:function(){return u(o).default}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw u}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(0),a=r(10);var l=Symbol(void 0),c=Symbol(void 0),f=Symbol(void 0),d=Symbol(void 0),s=Symbol(void 0),y=Symbol(void 0),b=function(){function e(t){var r=t.store,n=t.reducer,o=void 0===n?function(e){return e}:n,u=t.sagaMiddleware;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.store=r,this.initialReducer=this[d](o),this.initialStateProps=Object.keys(r.getState()),this.store.replaceReducer(this.initialReducer),this.reducers={},this.sagaMiddleware=u}return u(e,[{key:"installBricks",value:function(e){var t=!0,r=!1,n=void 0;try{for(var u,i=Object.entries(e)[Symbol.iterator]();!(t=(u=i.next()).done);t=!0){var a=u.value,l=o(a,2),c=l[0],f=l[1];this.installBrick(c,f)}}catch(e){r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw n}}}},{key:"installBrick",value:function(e,t){var r=t.reducer,n=t.saga,o=t.selectors;this[l](e,r),this[c](e,o),this[f](n)}},{key:l,value:function(e,t){var r=this;this.store.dispatch({type:"modular-toolkit/PREP_STATE",storePath:e}),this[s](e,t),this.store.replaceReducer(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1],o=(0,i.filterObject)(e,r.initialStateProps),u=r.initialReducer(o,t),a=o!==u;u=(0,i.mergeObjects)(e,u);var l=n({},u);return(0,i.walkObject)(u,function(e,n){var o=r[y](n);if("function"==typeof o){var u=o(e,t);u!==e&&(l=(0,i.addValueByDottedPath)(l,n,u),a=!0)}}),a?l:e})}},{key:c,value:function(e,t){(0,a.registerSelectorsForUseWithGlobalState)(e,t)}},{key:f,value:function(e){this.sagaMiddleware.run(e)}},{key:d,value:function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments[1];switch(r.type){case"modular-toolkit/PREP_STATE":return n({},(0,i.addValueByDottedPath)(t,r.storePath,{},!1));default:return e(t,r)}}}},{key:s,value:function(e,t){this.reducers=(0,i.addValueByDottedPath)(this.reducers,e,t)}},{key:y,value:function(e){return(0,i.getValueByDottedPath)(this.reducers,e)}}]),e}();t.default=b},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw u}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=r(0);t.default=function e(t,r){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=!0,a=!1,l=void 0;try{for(var c,f=Object.entries(t)[Symbol.iterator]();!(i=(c=f.next()).done);i=!0){var d=c.value,s=n(d,2),y=s[0],b=s[1];if((0,o.isObject)(b)){var v=u.concat([y]);r(b,v.join(".")),Object.keys(b).length>0&&e(b,r,v)}}}catch(e){a=!0,l=e}finally{try{!i&&f.return&&f.return()}finally{if(a)throw l}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=e.split(".");r.forEach(function(e,n){return t(e,n===r.length-1)})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(0);t.default=function(e,t,r){var u=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=n({},e),a=i;return(0,o.forEachPathSegment)(t,function(e,t){t?r&&(void 0===a[e]||u)&&(a[e]=r):(a[e]||(a[e]={}),a=a[e])}),i}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(e,t){return t.split(".").reduce(function(e,t){return(0,n.isObject)(e)?void 0===e[t]?null:e[t]:e},e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e instanceof Object&&e.constructor===Object}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=function(e,t){return t.reduce(function(t,r){return n({},t,function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},r,e[r]))},{})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function e(t,r){var o={};return(0,n.isObject)(t)&&Object.keys(t).forEach(function(e){return o[e]=t[e]}),Object.keys(r).forEach(function(u){(0,n.isObject)(r[u])&&t[u]?o[u]=e(t[u],r[u]):o[u]=r[u]}),o}},function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==(void 0===e?"undefined":n(e))&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)r.d(o,u,function(t){return e[t]}.bind(null,u));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1)),o=new Map;t.default=function(e){if(!e)throw new Error("Tried to make undefined selector work with global state – please make sure your selector module is exported correctly");if(o.has(e))return o.get(e);if(e.requiresGlobalState)return e;var t=function(t){if(!e.hasOwnProperty("globalStateContext"))throw new Error("This selector was not registered for use with global state: \n\n"+e+' \n\nDid you forget to call the "registerSelectorForUseWithGlobalState" with this reducer?\n');var r=e.globalStateContext.path;return(0,n.default)(r,e)(t)};return t.requiresGlobalState=!0,o.set(e,t),t}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!e||!e.length)return t;var r=e.split(".");return function(n){var o=n;return r.forEach(function(t){if(!o.hasOwnProperty(t))throw Error("Invalid state path provided: "+e+", got stuck with '"+t+"' on "+JSON.stringify(o)+" with "+JSON.stringify(n)+".");o=o[t]}),t(o)}}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);Object.defineProperty(t,"createModularSelector",{enumerable:!0,get:function(){return l(n).default}});var o=r(0);Object.defineProperty(t,"makeWorkWithGlobalState",{enumerable:!0,get:function(){return l(o).default}});var u=r(1);Object.defineProperty(t,"rebaseSelector",{enumerable:!0,get:function(){return l(u).default}});var i=r(5);Object.defineProperty(t,"registerSelectorsForUseWithGlobalState",{enumerable:!0,get:function(){return l(i).default}});var a=r(7);function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"selectModular",{enumerable:!0,get:function(){return l(a).default}})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(4),o=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];for(var u=t,i=0;i<t.length-1;i++){if(void 0===t[i])throw new Error("WTF");u[i]=(0,o.default)(t[i])}var a=function(e){return n.createSelector.apply(null,u)(e)};return a.requiresGlobalState=!0,a}},function(e,t){e.exports=r(11)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(6));t.default=function(e,t){(0,n.default)(t)?Object.keys(t).forEach(function(r){return t[r].globalStateContext={path:e,key:r}}):t&&t.forEach(function(t){return t.globalStateContext={path:e}})}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==n(Symbol.iterator)?function(e){return void 0===e?"undefined":n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)};t.default=function(e){if(!function(e){return"object"===(void 0===e?"undefined":o(e))&&null!==e}(e)||"[object Object]"!==function(e){if(null===e)return void 0===e?"[object Undefined]":"[object Null]";if(!(l&&l in Object(e)))return a.call(e);var t=i.call(e,l),r=e[l],n=!1;try{e[l]=void 0,n=!0}catch(e){}var o=a.call(e);return n&&(t?e[l]=r:delete e[l]),o}(e))return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var r=i.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&c.call(r)===f};var u=Object.prototype,i=u.hasOwnProperty,a=u.toString,l="undefined"!=typeof Symbol?Symbol.toStringTag:void 0,c=Function.prototype.toString,f=c.call(Object)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(8),o=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=function(e){return(0,n.select)((0,o.default)(e))}},function(e,t){e.exports=r(12)}])},function(e,t){e.exports=require("reselect")},function(e,t){e.exports=require("redux-saga/effects")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];0,"function"==typeof e[o]&&(r[o]=e[o])}var u=Object.keys(r);return function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1],n=!1,o={},i=0;i<u.length;i++){var a=u[i],l=r[a],c=e[a],f=l(c,t);if(void 0===f)throw new Error("Undefined state for key "+a+", action:",t);o[a]=f,n=n||f!==c}return n?o:e}}}]);