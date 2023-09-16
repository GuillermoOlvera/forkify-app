!// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
function(e,t,r,n,a){/* eslint-disable no-undef */var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof o[n]&&o[n],c=i.cache||{},s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,r){if(!c[t]){if(!e[t]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var a="function"==typeof o[n]&&o[n];if(!r&&a)return a(t,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(i)return i(t,!0);// Try the node require function if it exists.
if(s&&"string"==typeof t)return s(t);var f=Error("Cannot find module '"+t+"'");throw f.code="MODULE_NOT_FOUND",f}l.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},l.cache={};var d=c[t]=new u.Module(t);e[t][0].call(d.exports,l,d,d.exports,this)}return c[t].exports;function l(e){var t=l.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=c,u.parent=i,u.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(u,"root",{get:function(){return o[n]}}),o[n]=u;for(var f=0;f<t.length;f++)u(t[f]);if(r){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var d=u(r);// CommonJS
"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd?define(function(){return d}):a&&(this[a]=d)}}({"1ZJfy":[function(e,t,r){e("9edddd7aa5d29918").register(JSON.parse('{"hwbR1":"index.a666998f.js","6pYmK":"icons.c14567a0.svg"}'))},{"9edddd7aa5d29918":"fyJL2"}],fyJL2:[function(e,t,r){var n={};t.exports.register=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)n[t[r]]=e[t[r]]},t.exports.resolve=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}},{}],"2nzDi":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");e("core-js/modules/web.immediate.js");var a=e("./model.js"),o=e("./config.js"),i=e("./views/recipeView.js"),c=n.interopDefault(i),s=e("./views/searchView.js"),u=n.interopDefault(s),f=e("./views/resultsView.js"),d=n.interopDefault(f),l=e("./views/paginationView.js"),p=n.interopDefault(l),h=e("./views/bookmarksView.js"),m=n.interopDefault(h),g=e("./views/addRecipeView.js"),b=n.interopDefault(g);e("regenerator-runtime/runtime"),e("regenerator-runtime");let v=async function(){try{let e=window.location.hash.slice(1);if(!e)return;(0,c.default).renderSpinner(),// 0) Update results view to mark selected search result
(0,d.default).update(a.getSearchResultsPage()),// 1) Updating bookmarks view
(0,m.default).update(a.state.bookmarks),// 2) Loading recipe
await a.loadRecipe(e),// 3) Rendering recipe
(0,c.default).render(a.state.recipe)}catch(e){(0,c.default).renderError(),console.error(e)}},y=async function(){try{(0,d.default).renderSpinner();// 1) Get search query
let e=(0,u.default).getQuery();if(!e)return;// 2) Load search results
await a.loadSearchResults(e),// 3) Render results
(0,d.default).render(a.getSearchResultsPage()),// 4) Render initial pagination buttons
(0,p.default).render(a.state.search)}catch(e){console.log(e)}},_=async function(e){try{// Show loading spinner
(0,b.default).renderSpinner(),// Upload the new recipe data
await a.uploadRecipe(e),console.log(a.state.recipe),// Render recipe
(0,c.default).render(a.state.recipe),// Success message
(0,b.default).renderMessage(),// Render bookmark view
(0,m.default).render(a.state.bookmarks),// Change ID in URL
window.history.pushState(null,"",`#${a.state.recipe.id}`),// Close form window
setTimeout(function(){(0,b.default).toggleWindow()},1e3*o.MODAL_CLOSE_SEC)}catch(e){console.error("\uD83D\uDCA5",e),(0,b.default).renderError(e.message)}};(0,m.default).addHandlerRender(function(){(0,m.default).render(a.state.bookmarks)}),(0,c.default).addHandlerRender(v),(0,c.default).addHandlerUpdateServings(function(e){// Update the recipe servings (in state)
a.updateServings(e),// Update the recipe view
(0,c.default).update(a.state.recipe)}),(0,c.default).addHandlerAddBookmark(function(){a.state.recipe.bookmarked?a.deleteBookmark(a.state.recipe.id):a.addBookmark(a.state.recipe),// 2) Update recipe view
(0,c.default).update(a.state.recipe),// 3) Render bookmarks
(0,m.default).render(a.state.bookmarks)}),(0,u.default).addHandlerSearch(y),(0,p.default).addHandlerClick(function(e){// 1) Render NEW results
(0,d.default).render(a.getSearchResultsPage(e)),// 2) Render NEW pagination buttons
(0,p.default).render(a.state.search)}),(0,b.default).addHandlerUpload(_)},{"core-js/modules/web.immediate.js":"hcyNZ","./model.js":"5XrL7","./config.js":"cTPit","./views/recipeView.js":"gcMxR","./views/searchView.js":"6L6eH","./views/resultsView.js":"65N7q","./views/paginationView.js":"3vGkl","./views/bookmarksView.js":"9IfoN","./views/addRecipeView.js":"3CEDh","regenerator-runtime/runtime":"7RkV0","regenerator-runtime":"7RkV0","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],hcyNZ:[function(e,t,r){var n=e("57bd5d59693d84cf"),a=e("aa05a0a922f6ca2e"),o=e("7a2807c700a427d7");// http://w3c.github.io/setImmediate/
n({global:!0,bind:!0,enumerable:!0,forced:!a.setImmediate||!a.clearImmediate},{// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
setImmediate:o.set,// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
clearImmediate:o.clear})},{"57bd5d59693d84cf":"dKyFE",aa05a0a922f6ca2e:"cfrjR","7a2807c700a427d7":"dgCCh"}],dKyFE:[function(e,t,r){var n=e("6643b6592ad59b23"),a=e("2ec751f39e500b85").f,o=e("b4567636b28a3b3a"),i=e("10edb5de5c8774b1"),c=e("63fb8d99c14c1b2a"),s=e("566a383894c688bc"),u=e("f0e2e697f04e8ad9");/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/t.exports=function(e,t){var r,f,d,l,p,h=e.target,m=e.global,g=e.stat;if(r=m?n:g?n[h]||c(h,{}):(n[h]||{}).prototype)for(f in t){// contained in target
if(l=t[f],d=e.noTargetGet?(p=a(r,f))&&p.value:r[f],!u(m?f:h+(g?".":"#")+f,e.forced)&&void 0!==d){if(typeof l==typeof d)continue;s(l,d)}(e.sham||d&&d.sham)&&o(l,"sham",!0),// extend global
i(r,f,l,e)}}},{"6643b6592ad59b23":"cfrjR","2ec751f39e500b85":"jg3wR",b4567636b28a3b3a:"b5Nku","10edb5de5c8774b1":"al7hm","63fb8d99c14c1b2a":"6QROP","566a383894c688bc":"53rVh",f0e2e697f04e8ad9:"bPIm8"}],cfrjR:[function(e,t,r){var n=arguments[3],a=function(e){return e&&e.Math==Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
t.exports=a("object"==typeof globalThis&&globalThis)||a("object"==typeof window&&window)||a("object"==typeof self&&self)||a("object"==typeof n&&n)||// eslint-disable-next-line no-new-func
Function("return this")()},{}],jg3wR:[function(e,t,r){var n=e("c04e6fb248689dba"),a=e("bbc5e69071aa2fbd"),o=e("1d2ffbfd99e01f41"),i=e("c4ea69a78a643d87"),c=e("9e01c6cba5997a77"),s=e("43af9285074de610"),u=e("c4dfcc26308f1b4a"),f=Object.getOwnPropertyDescriptor;// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
r.f=n?f:function(e,t){if(e=i(e),t=c(t,!0),u)try{return f(e,t)}catch(e){}if(s(e,t))return o(!a.f.call(e,t),e[t])}},{c04e6fb248689dba:"8Jsbd",bbc5e69071aa2fbd:"eipw5","1d2ffbfd99e01f41":"6Ckdf",c4ea69a78a643d87:"gnUiO","9e01c6cba5997a77":"3QM7N","43af9285074de610":"9v3li",c4dfcc26308f1b4a:"dWHbx"}],"8Jsbd":[function(e,t,r){var n=e("735b783268fd06c0");// Thank's IE8 for his funny defineProperty
t.exports=!n(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})},{"735b783268fd06c0":"oct0m"}],oct0m:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(e){return!0}}},{}],eipw5:[function(e,t,r){var n={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,o=a&&!n.call({1:2},1);// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
r.f=o?function(e){var t=a(this,e);return!!t&&t.enumerable}:n},{}],"6Ckdf":[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],gnUiO:[function(e,t,r){// toObject with fallback for non-array-like ES3 strings
var n=e("9d8f8f50ac9468eb"),a=e("f7224aed72953ac4");t.exports=function(e){return n(a(e))}},{"9d8f8f50ac9468eb":"8V4i5",f7224aed72953ac4:"kVEKk"}],"8V4i5":[function(e,t,r){var n=e("df551e12a7c872dd"),a=e("1d34ea813cebff9c"),o="".split;// fallback for non-array-like ES3 and non-enumerable old V8 strings
t.exports=n(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins
return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==a(e)?o.call(e,""):Object(e)}:Object},{df551e12a7c872dd:"oct0m","1d34ea813cebff9c":"efzsK"}],efzsK:[function(e,t,r){var n={}.toString;t.exports=function(e){return n.call(e).slice(8,-1)}},{}],kVEKk:[function(e,t,r){// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},{}],"3QM7N":[function(e,t,r){var n=e("46fb53dace408c8e");// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
t.exports=function(e,t){var r,a;if(!n(e))return e;if(t&&"function"==typeof(r=e.toString)&&!n(a=r.call(e))||"function"==typeof(r=e.valueOf)&&!n(a=r.call(e))||!t&&"function"==typeof(r=e.toString)&&!n(a=r.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},{"46fb53dace408c8e":"3IToc"}],"3IToc":[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],"9v3li":[function(e,t,r){var n={}.hasOwnProperty;t.exports=function(e,t){return n.call(e,t)}},{}],dWHbx:[function(e,t,r){var n=e("9b4278b13c076bf"),a=e("8aee5d88a5f9b6b5"),o=e("1db4d60148afcf21");// Thank's IE8 for his funny defineProperty
t.exports=!n&&!a(function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a})},{"9b4278b13c076bf":"8Jsbd","8aee5d88a5f9b6b5":"oct0m","1db4d60148afcf21":"csBr9"}],csBr9:[function(e,t,r){var n=e("f5891d48afd7ec83"),a=e("824df78b2e007250"),o=n.document,i=a(o)&&a(o.createElement);t.exports=function(e){return i?o.createElement(e):{}}},{f5891d48afd7ec83:"cfrjR","824df78b2e007250":"3IToc"}],b5Nku:[function(e,t,r){var n=e("a8753383ef98ee18"),a=e("189ab650b8f71085"),o=e("1168c8162aa30435");t.exports=n?function(e,t,r){return a.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},{a8753383ef98ee18:"8Jsbd","189ab650b8f71085":"k98ym","1168c8162aa30435":"6Ckdf"}],k98ym:[function(e,t,r){var n=e("ca50eb9163928400"),a=e("d482f9e5478795e8"),o=e("16365a73399e7fe7"),i=e("3176700f5d7e17f3"),c=Object.defineProperty;// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
r.f=n?c:function(e,t,r){if(o(e),t=i(t,!0),o(r),a)try{return c(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},{ca50eb9163928400:"8Jsbd",d482f9e5478795e8:"dWHbx","16365a73399e7fe7":"eH0cO","3176700f5d7e17f3":"3QM7N"}],eH0cO:[function(e,t,r){var n=e("2b6c6258a0a6082f");t.exports=function(e){if(!n(e))throw TypeError(String(e)+" is not an object");return e}},{"2b6c6258a0a6082f":"3IToc"}],al7hm:[function(e,t,r){var n=e("ad29211ac7a99cf3"),a=e("fb5c982780275e5e"),o=e("b9d32f00dddbcd95"),i=e("1111dde9b567f8a1"),c=e("3e459da4f22431a3"),s=e("78b34e0c633bdce7"),u=s.get,f=s.enforce,d=String(String).split("String");(t.exports=function(e,t,r,c){var s=!!c&&!!c.unsafe,u=!!c&&!!c.enumerable,l=!!c&&!!c.noTargetGet;if("function"==typeof r&&("string"!=typeof t||o(r,"name")||a(r,"name",t),f(r).source=d.join("string"==typeof t?t:"")),e===n){u?e[t]=r:i(t,r);return}s?!l&&e[t]&&(u=!0):delete e[t],u?e[t]=r:a(e,t,r);// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype,"toString",function(){return"function"==typeof this&&u(this).source||c(this)})},{ad29211ac7a99cf3:"cfrjR",fb5c982780275e5e:"b5Nku",b9d32f00dddbcd95:"9v3li","1111dde9b567f8a1":"6QROP","3e459da4f22431a3":"aMzpk","78b34e0c633bdce7":"7c3Zm"}],"6QROP":[function(e,t,r){var n=e("4785828acf653da3"),a=e("e7fc5aa3c97c7024");t.exports=function(e,t){try{a(n,e,t)}catch(r){n[e]=t}return t}},{"4785828acf653da3":"cfrjR",e7fc5aa3c97c7024:"b5Nku"}],aMzpk:[function(e,t,r){var n=e("485d48d6f4c6739e"),a=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(e){return a.call(e)}),t.exports=n.inspectSource},{"485d48d6f4c6739e":"jB3vg"}],jB3vg:[function(e,t,r){var n=e("8756de416b94afec"),a=e("bde9d812c43e928"),o="__core-js_shared__",i=n[o]||a(o,{});t.exports=i},{"8756de416b94afec":"cfrjR",bde9d812c43e928:"6QROP"}],"7c3Zm":[function(e,t,r){var n,a,o,i=e("f0a2bf6263225aee"),c=e("ca46b44b6201ccd7"),s=e("f82e6cc0ac249fa5"),u=e("c0ae163eea4ef97"),f=e("794ab95aefff0489"),d=e("88d6ccc27e779e5a"),l=e("d40b9b3abdbb956e"),p=c.WeakMap;if(i){var h=new p,m=h.get,g=h.has,b=h.set;n=function(e,t){return b.call(h,e,t),t},a=function(e){return m.call(h,e)||{}},o=function(e){return g.call(h,e)}}else{var v=d("state");l[v]=!0,n=function(e,t){return u(e,v,t),t},a=function(e){return f(e,v)?e[v]:{}},o=function(e){return f(e,v)}}t.exports={set:n,get:a,has:o,enforce:function(e){return o(e)?a(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!s(t)||(r=a(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}}},{f0a2bf6263225aee:"bH9X0",ca46b44b6201ccd7:"cfrjR",f82e6cc0ac249fa5:"3IToc",c0ae163eea4ef97:"b5Nku","794ab95aefff0489":"9v3li","88d6ccc27e779e5a":"gcWZs",d40b9b3abdbb956e:"f4YNg"}],bH9X0:[function(e,t,r){var n=e("6e8e91a63fc6bed5"),a=e("b3ae89ce7d946b9c"),o=n.WeakMap;t.exports="function"==typeof o&&/native code/.test(a(o))},{"6e8e91a63fc6bed5":"cfrjR",b3ae89ce7d946b9c:"aMzpk"}],gcWZs:[function(e,t,r){var n=e("dbc8182adeb8c92f"),a=e("90b4ffb58508a6e5"),o=n("keys");t.exports=function(e){return o[e]||(o[e]=a(e))}},{dbc8182adeb8c92f:"8I9ns","90b4ffb58508a6e5":"fq8Cs"}],"8I9ns":[function(e,t,r){var n=e("fe5f96cb4b2826a2"),a=e("84eeed9891aafe14");(t.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:n?"pure":"global",copyright:"\xa9 2020 Denis Pushkarev (zloirock.ru)"})},{fe5f96cb4b2826a2:"34uzF","84eeed9891aafe14":"jB3vg"}],"34uzF":[function(e,t,r){t.exports=!1},{}],fq8Cs:[function(e,t,r){var n=0,a=Math.random();t.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+a).toString(36)}},{}],f4YNg:[function(e,t,r){t.exports={}},{}],"53rVh":[function(e,t,r){var n=e("fc3b84318bcd1bca"),a=e("88cb809f98beddc6"),o=e("10ea642aad5f7c21"),i=e("39ff598ce822187e");t.exports=function(e,t){for(var r=a(t),c=i.f,s=o.f,u=0;u<r.length;u++){var f=r[u];n(e,f)||c(e,f,s(t,f))}}},{fc3b84318bcd1bca:"9v3li","88cb809f98beddc6":"h1dW1","10ea642aad5f7c21":"jg3wR","39ff598ce822187e":"k98ym"}],h1dW1:[function(e,t,r){var n=e("3cc1e4329d869e34"),a=e("d703bcb62fcda216"),o=e("157674bad2772c6d"),i=e("a09e060b9cae3c6c");// all object keys, includes non-enumerable and symbols
t.exports=n("Reflect","ownKeys")||function(e){var t=a.f(i(e)),r=o.f;return r?t.concat(r(e)):t}},{"3cc1e4329d869e34":"bEFUU",d703bcb62fcda216:"leDxZ","157674bad2772c6d":"bmGTq",a09e060b9cae3c6c:"eH0cO"}],bEFUU:[function(e,t,r){var n=e("f5e1863bda0e8d90"),a=e("dd9e9ae04e8684f7"),o=function(e){return"function"==typeof e?e:void 0};t.exports=function(e,t){return arguments.length<2?o(n[e])||o(a[e]):n[e]&&n[e][t]||a[e]&&a[e][t]}},{f5e1863bda0e8d90:"4kjMq",dd9e9ae04e8684f7:"cfrjR"}],"4kjMq":[function(e,t,r){var n=e("70f8eb6067a24c7e");t.exports=n},{"70f8eb6067a24c7e":"cfrjR"}],leDxZ:[function(e,t,r){var n=e("6d8591e17a49376c"),a=e("2c933f93dd98f385").concat("length","prototype");// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
r.f=Object.getOwnPropertyNames||function(e){return n(e,a)}},{"6d8591e17a49376c":"gbPsH","2c933f93dd98f385":"fYdbV"}],gbPsH:[function(e,t,r){var n=e("692585591dbbd574"),a=e("28192ac12e934672"),o=e("a5f9c5d8e993ccd6").indexOf,i=e("57775908f1581bc6");t.exports=function(e,t){var r,c=a(e),s=0,u=[];for(r in c)!n(i,r)&&n(c,r)&&u.push(r);// Don't enum bug & hidden keys
for(;t.length>s;)n(c,r=t[s++])&&(~o(u,r)||u.push(r));return u}},{"692585591dbbd574":"9v3li","28192ac12e934672":"gnUiO",a5f9c5d8e993ccd6:"cRpVd","57775908f1581bc6":"f4YNg"}],cRpVd:[function(e,t,r){var n=e("d5dcbcd68ac5acd0"),a=e("b3dca7bf74909620"),o=e("212b13aecfa48226"),i=function(e){return function(t,r,i){var c,s=n(t),u=a(s.length),f=o(i,u);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(e&&r!=r){for(;u>f;)// eslint-disable-next-line no-self-compare
if((c=s[f++])!=c)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;u>f;f++)if((e||f in s)&&s[f]===r)return e||f||0;return!e&&-1}};t.exports={// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
includes:i(!0),// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
indexOf:i(!1)}},{d5dcbcd68ac5acd0:"gnUiO",b3dca7bf74909620:"1f43X","212b13aecfa48226":"kmCAu"}],"1f43X":[function(e,t,r){var n=e("1ae03ba64cf9f0ad"),a=Math.min;// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
t.exports=function(e){return e>0?a(n(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
}},{"1ae03ba64cf9f0ad":"ikehb"}],ikehb:[function(e,t,r){var n=Math.ceil,a=Math.floor;// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
t.exports=function(e){return isNaN(e=+e)?0:(e>0?a:n)(e)}},{}],kmCAu:[function(e,t,r){var n=e("2c5803846a6c0358"),a=Math.max,o=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
t.exports=function(e,t){var r=n(e);return r<0?a(r+t,0):o(r,t)}},{"2c5803846a6c0358":"ikehb"}],fYdbV:[function(e,t,r){// IE8- don't enum bug keys
t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},{}],bmGTq:[function(e,t,r){r.f=Object.getOwnPropertySymbols},{}],bPIm8:[function(e,t,r){var n=e("10299561ea0c7870"),a=/#|\.prototype\./,o=function(e,t){var r=c[i(e)];return r==u||r!=s&&("function"==typeof t?n(t):!!t)},i=o.normalize=function(e){return String(e).replace(a,".").toLowerCase()},c=o.data={},s=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},{"10299561ea0c7870":"oct0m"}],dgCCh:[function(e,t,r){var n,a,o,i=e("1e8ed58235e9956a"),c=e("b8bf5434d2248ca7"),s=e("f78690da3387f35d"),u=e("df212787338802d3"),f=e("731f9370cc21fc3b"),d=e("907adb6d219da7a3"),l=e("fdfdeccf85e81d4f"),p=i.location,h=i.setImmediate,m=i.clearImmediate,g=i.process,b=i.MessageChannel,v=i.Dispatch,y=0,_={},w="onreadystatechange",k=function(e){// eslint-disable-next-line no-prototype-builtins
if(_.hasOwnProperty(e)){var t=_[e];delete _[e],t()}},j=function(e){return function(){k(e)}},x=function(e){k(e.data)},E=function(e){// old engines have not location.origin
i.postMessage(e+"",p.protocol+"//"+p.host)};h&&m||(h=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return _[++y]=function(){// eslint-disable-next-line no-new-func
("function"==typeof e?e:Function(e)).apply(void 0,t)},n(y),y},m=function(e){delete _[e]},"process"==s(g)?n=function(e){g.nextTick(j(e))}:v&&v.now?n=function(e){v.now(j(e))}:b&&!l?(o=(a=new b).port2,a.port1.onmessage=x,n=u(o.postMessage,o,1)):!i.addEventListener||"function"!=typeof postMessage||i.importScripts||c(E)||"file:"===p.protocol?n=w in d("script")?function(e){f.appendChild(d("script"))[w]=function(){f.removeChild(this),k(e)}}:function(e){setTimeout(j(e),0)}:(n=E,i.addEventListener("message",x,!1))),t.exports={set:h,clear:m}},{"1e8ed58235e9956a":"cfrjR",b8bf5434d2248ca7:"oct0m",f78690da3387f35d:"efzsK",df212787338802d3:"bCCGq","731f9370cc21fc3b":"vIwmT","907adb6d219da7a3":"csBr9",fdfdeccf85e81d4f:"8iV0z"}],bCCGq:[function(e,t,r){var n=e("a55e50f41805cb8b");// optional / simple context binding
t.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 0:return function(){return e.call(t)};case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,a){return e.call(t,r,n,a)}}return function(){return e.apply(t,arguments)}}},{a55e50f41805cb8b:"j0fZh"}],j0fZh:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},{}],vIwmT:[function(e,t,r){var n=e("14cb391fa4a0dda8");t.exports=n("document","documentElement")},{"14cb391fa4a0dda8":"bEFUU"}],"8iV0z":[function(e,t,r){var n=e("d96985a79ddda108");t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(n)},{d96985a79ddda108:"hrSP7"}],hrSP7:[function(e,t,r){var n=e("16054ed539401f1");t.exports=n("navigator","userAgent")||""},{"16054ed539401f1":"bEFUU"}],"5XrL7":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"state",()=>i),n.export(r,"loadRecipe",()=>s),n.export(r,"loadSearchResults",()=>u),n.export(r,"getSearchResultsPage",()=>f),n.export(r,"updateServings",()=>d),n.export(r,"addBookmark",()=>p),n.export(r,"deleteBookmark",()=>h),n.export(r,"uploadRecipe",()=>m),e("regenerator-runtime");var a=e("./config.js"),o=e("./helpers.js");let i={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:a.RES_PER_PAGE},bookmarks:[]},c=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},s=async function(e){try{let t=await (0,o.AJAX)(`${a.API_URL}${e}?key=${a.KEY}`);i.recipe=c(t),i.bookmarks.some(t=>t.id===e)?i.recipe.bookmarked=!0:i.recipe.bookmarked=!1,console.log(i.recipe)}catch(e){throw(// Temp error handling
console.error(`${e} 💥💥💥💥`),e)}},u=async function(e){try{i.search.query=e;let t=await (0,o.AJAX)(`${a.API_URL}?search=${e}&key=${a.KEY}`);console.log(t),i.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),i.search.page=1}catch(e){throw console.error(`${e} 💥💥💥💥`),e}},f=function(e=i.search.page){i.search.page=e;let t=(e-1)*i.search.resultsPerPage,r=e*i.search.resultsPerPage;// 0
return i.search.results.slice(t,r)},d=function(e){i.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/i.recipe.servings;// newQt = oldQt * newServings / oldServings // 2 * 8 / 4 = 4
}),i.recipe.servings=e},l=function(){localStorage.setItem("bookmarks",JSON.stringify(i.bookmarks))},p=function(e){// Add bookmark
i.bookmarks.push(e),e.id===i.recipe.id&&(i.recipe.bookmarked=!0),l()},h=function(e){// Delete bookmark
let t=i.bookmarks.findIndex(t=>t.id===e);i.bookmarks.splice(t,1),e===i.recipe.id&&(i.recipe.bookmarked=!1),l()};!function(){let e=localStorage.getItem("bookmarks");e&&(i.bookmarks=JSON.parse(e))}();let m=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());// const ingArr = ing[1].replaceAll(' ', '').split(',');
if(3!==t.length)throw Error("Wrong ingredient fromat! Please use the correct format :)");let[r,n,a]=t;return{quantity:r?+r:null,unit:n,description:a}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await (0,o.AJAX)(`${a.API_URL}?key=${a.KEY}`,r);i.recipe=c(n),p(i.recipe)}catch(e){throw e}}},{"regenerator-runtime":"7RkV0","./config.js":"cTPit","./helpers.js":"rOFoc","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"7RkV0":[function(e,t,r){/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function u(e,r,n,a){var o,i=Object.create((r&&r.prototype instanceof m?r:m).prototype),c=new S(a||[]);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i._invoke=(o=d,function(r,a){if(o===l)throw Error("Generator is already running");if(o===p){if("throw"===r)throw a;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return F()}for(c.method=r,c.arg=a;;){var i=c.delegate;if(i){var s=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var a=r.iterator[n.method];if(a===t){if(// A .throw or .return when the delegate iterator has no .throw
// method always terminates the yield* loop.
n.delegate=null,"throw"===n.method){// Note: ["return"] must be used for ES3 parsing compatibility.
if(r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method))// "return" to "throw", let that override the TypeError below.
return h;n.method="throw",n.arg=TypeError("The iterator does not provide a 'throw' method")}return h}var o=f(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=i.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,h):i:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,h)}(i,c);if(s){if(s===h)continue;return s}}if("next"===c.method)// function.sent implementation.
c.sent=c._sent=c.arg;else if("throw"===c.method){if(o===d)throw o=p,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);o=l;var u=f(e,n,c);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
o=c.done?p:"suspendedYield",u.arg===h)continue;return{value:u.arg,done:c.done}}"throw"===u.type&&(o=p,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
c.method="throw",c.arg=u.arg)}}),i)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",l="executing",p="completed",h={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function m(){}function g(){}function b(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var v={};v[o]=function(){return this};var y=Object.getPrototypeOf,_=y&&y(y(O([])));_&&_!==r&&n.call(_,o)&&// of the polyfill.
(v=_);var w=b.prototype=m.prototype=Object.create(v);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function k(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function j(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
this._invoke=function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,c){var s=f(e[a],e,o);if("throw"===s.type)c(s.arg);else{var u=s.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(d).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,i(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,i,c)})}}(a,o,r,i)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(i,// invocations of the iterator.
i):i()}}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function O(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}// Return an iterator with no values.
return{next:F}}function F(){return{value:t,done:!0}}// Regardless of whether this script is executing as a CommonJS module
// or not, return the runtime object so that we can declare the variable
// regeneratorRuntime in the outer scope, which allows this module to be
// injected easily by `bin/regenerator --include-runtime script.js`.
return g.prototype=w.constructor=b,b.constructor=g,g.displayName=s(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,s(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},k(j.prototype),j.prototype[i]=function(){return this},e.AsyncIterator=j,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new j(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i// If outerFn is a generator, return the full iterator.
:i.next().then(function(e){return e.done?e.value:i.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
k(w),s(w,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
w[o]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
r.done=!0,r)}},e.values=O,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return c.type="throw",c.arg=e,r.next=n,a&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return a("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else if(u){if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var i=o?o.completion:{};return(i.type=e,i.arg=t,o)?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),h}},e}(t.exports);try{regeneratorRuntime=n}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
Function("r","regeneratorRuntime = r")(n)}},{}],cTPit:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"API_URL",()=>a),n.export(r,"TIMEOUT_SEC",()=>o),n.export(r,"RES_PER_PAGE",()=>i),n.export(r,"KEY",()=>c),n.export(r,"MODAL_CLOSE_SEC",()=>s);let a="https://forkify-api.herokuapp.com/api/v2/recipes/",o=10,i=10,c="69c3b570-c091-4d3e-af40-ec1b2e0d31f9",s=2.5},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],k3151:[function(e,t,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach(function(r){"default"===r||"__esModule"===r||t.hasOwnProperty(r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})}),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}],rOFoc:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"AJAX",()=>o),e("regenerator-runtime");var a=e("./config.js");let o=async function(e,t){try{var r;let n=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),o=await Promise.race([n,(r=a.TIMEOUT_SEC,new Promise(function(e,t){setTimeout(function(){t(Error(`Request took too long! Timeout after ${r} second`))},1e3*r)}))]),i=await o.json();if(!o.ok)throw Error(`${i.message} (${o.status})`);return i}catch(e){throw e}};/*
export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
*/},{"regenerator-runtime":"7RkV0","./config.js":"cTPit","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],gcMxR:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var a=e("./View.js"),o=n.interopDefault(a),i=e("url:../../img/icons.svg"),c=n.interopDefault(i),s=e("fractional");class u extends o.default{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${c.default}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${c.default}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
              <svg>
                <use href="${c.default}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
              <svg>
                <use href="${c.default}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
          <svg>
            <use href="${c.default}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${c.default}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${c.default}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}_generateMarkupIngredient(e){return`
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${c.default}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?new(0,s.Fraction)(e.quantity).toString():""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>
  `}}r.default=new u},{"./View.js":"lslfl","url:../../img/icons.svg":"eVjJd",fractional:"ioWMr","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],lslfl:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var a=e("url:../../img/icons.svg"),o=n.interopDefault(a);// Parcel 2
r.default=class{_data;/**
   * Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @this {Object} View instance
   * @author Jonas Schmedtmann
   * @todo Finish implementation
   */render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),a=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=a[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${o.default}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${o.default}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${o.default}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}},{"url:../../img/icons.svg":"eVjJd","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],eVjJd:[function(e,t,r){t.exports=e("deb742bfd0809536").getBundleURL("hwbR1")+e("ce89793d7e0dd8c2").resolve("6pYmK")},{deb742bfd0809536:"c7Tr5",ce89793d7e0dd8c2:"fyJL2"}],c7Tr5:[function(e,t,r){var n={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r.getBundleURL=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return a(e[2])}return"/"}(),n[e]=t),t},r.getBaseURL=a,r.getOrigin=// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function(e){var t=(""+e).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);if(!t)throw Error("Origin not found");return t[0]}},{}],ioWMr:[function(e,t,r){var n,a;/*
fraction.js
A Javascript fraction library.

Copyright (c) 2009  Erik Garrison <erik@hypervolu.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*//* Fractions *//* 
 *
 * Fraction objects are comprised of a numerator and a denomenator.  These
 * values can be accessed at fraction.numerator and fraction.denomenator.
 *
 * Fractions are always returned and stored in lowest-form normalized format.
 * This is accomplished via Fraction.normalize.
 *
 * The following mathematical operations on fractions are supported:
 *
 * Fraction.equals
 * Fraction.add
 * Fraction.subtract
 * Fraction.multiply
 * Fraction.divide
 *
 * These operations accept both numbers and fraction objects.  (Best results
 * are guaranteed when the input is a fraction object.)  They all return a new
 * Fraction object.
 *
 * Usage:
 *
 * TODO
 *
 *//*
 * The Fraction constructor takes one of:
 *   an explicit numerator (integer) and denominator (integer),
 *   a string representation of the fraction (string),
 *   or a floating-point number (float)
 *
 * These initialization methods are provided for convenience.  Because of
 * rounding issues the best results will be given when the fraction is
 * constructed from an explicit integer numerator and denomenator, and not a
 * decimal number.
 *
 *
 * e.g. new Fraction(1, 2) --> 1/2
 *      new Fraction('1/2') --> 1/2
 *      new Fraction('2 3/4') --> 11/4  (prints as 2 3/4)
 *
 */(Fraction=function(e,t){/* double argument invocation */if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,a=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(a[0]&&(r=a[0]),a[1]&&(n=a[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var o=r.split("/");this.numerator=o[0],this.denominator=o[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));// fractions that are equal should have equal normalized forms
var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(n=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},a=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(n(this.denominator)){var e=a(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),//this.numerator *= scaleup;
this.numerator*=t}if(n(this.numerator)){var e=a(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),//this.numerator *= scaleup;
this.denominator*=t}var r=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=r,this.denominator/=r,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),a=Fraction.primeFactors(t);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(e){var t=a.indexOf(e);t>=0&&(r.push(e),a.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;// and increment
return 1!=t&&r.push(t),r;// Return the prime factors
},t.exports.Fraction=Fraction},{}],"6L6eH":[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);class n{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}r.default=new n},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"65N7q":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var a=e("./View.js"),o=n.interopDefault(a),i=e("./previewView.js"),c=n.interopDefault(i),s=e("url:../../img/icons.svg");n.interopDefault(s);class u extends o.default{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map(e=>(0,c.default).render(e,!1)).join("")}}r.default=new u},{"./View.js":"lslfl","./previewView.js":"edsmS","url:../../img/icons.svg":"eVjJd","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],edsmS:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var a=e("./View.js"),o=n.interopDefault(a),i=e("url:../../img/icons.svg"),c=n.interopDefault(i);class s extends o.default{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
      <li class="preview">
        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key?"":"hidden"}">
              <svg>
              <use href="${c.default}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `}}r.default=new s},{"./View.js":"lslfl","url:../../img/icons.svg":"eVjJd","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"3vGkl":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var a=e("./View.js"),o=n.interopDefault(a),i=e("url:../../img/icons.svg"),c=n.interopDefault(i);class s extends o.default{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(// Page 1, and there are other pages
1===e&&t>1?`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${c.default}#icon-arrow-right"></use>
          </svg>
        </button>
      `:e===t&&t>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${c.default}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
      `:e<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${c.default}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${c.default}#icon-arrow-right"></use>
          </svg>
        </button>
      `:"")}}r.default=new s},{"./View.js":"lslfl","url:../../img/icons.svg":"eVjJd","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"9IfoN":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var a=e("./View.js"),o=n.interopDefault(a),i=e("./previewView.js"),c=n.interopDefault(i),s=e("url:../../img/icons.svg");n.interopDefault(s);class u extends o.default{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>(0,c.default).render(e,!1)).join("")}}r.default=new u},{"./View.js":"lslfl","./previewView.js":"edsmS","url:../../img/icons.svg":"eVjJd","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"3CEDh":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var a=e("./View.js"),o=n.interopDefault(a),i=e("url:../../img/icons.svg");n.interopDefault(i);class c extends o.default{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);e(n)})}_generateMarkup(){}}r.default=new c},{"./View.js":"lslfl","url:../../img/icons.svg":"eVjJd","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},["1ZJfy","2nzDi"],"2nzDi","parcelRequire3a11")//# sourceMappingURL=index.a666998f.js.map
;
//# sourceMappingURL=index.a666998f.js.map
