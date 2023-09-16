var e,t,r,n,i,o,a,s,c,u,l,d,f,p,h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function g(e){return e&&e.__esModule?e.default:e}var m={},v={},y=h.parcelRequire3a11;null==y&&((y=function(e){if(e in m)return m[e].exports;if(e in v){var t=v[e];delete v[e];var r={id:e,exports:{}};return m[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){v[e]=t},h.parcelRequire3a11=y);var _={},b={},w=function(e){return e&&e.Math==Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
b=w("object"==typeof globalThis&&globalThis)||w("object"==typeof window&&window)||w("object"==typeof self&&self)||w("object"==typeof h&&h)||// eslint-disable-next-line no-new-func
Function("return this")();var k={},E={};// Thank's IE8 for his funny defineProperty
k=!(E=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]});var S={}.propertyIsEnumerable,$=Object.getOwnPropertyDescriptor;n=$&&!S.call({1:2},1)?function(e){var t=$(this,e);return!!t&&t.enumerable}:S;var L={};L=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var x={},F={},M={},O={}.toString;M=function(e){return O.call(e).slice(8,-1)};var j="".split;// fallback for non-array-like ES3 and non-enumerable old V8 strings
F=E(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins
return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==M(e)?j.call(e,""):Object(e)}:Object;var P={};// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
P=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e},x=function(e){return F(P(e))};var T={},q={};q=function(e){return"object"==typeof e?null!==e:"function"==typeof e},// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
T=function(e,t){var r,n;if(!q(e))return e;if(t&&"function"==typeof(r=e.toString)&&!q(n=r.call(e))||"function"==typeof(r=e.valueOf)&&!q(n=r.call(e))||!t&&"function"==typeof(r=e.toString)&&!q(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")};var H={},N={}.hasOwnProperty;H=function(e,t){return N.call(e,t)};var I={},A={},C=b.document,D=q(C)&&q(C.createElement);A=function(e){return D?C.createElement(e):{}},// Thank's IE8 for his funny defineProperty
I=!k&&!E(function(){return 7!=Object.defineProperty(A("div"),"a",{get:function(){return 7}}).a});var R=Object.getOwnPropertyDescriptor;r=k?R:function(e,t){if(e=x(e),t=T(t,!0),I)try{return R(e,t)}catch(e){}if(H(e,t))return L(!n.call(e,t),e[t])};var W={},z={};z=function(e){if(!q(e))throw TypeError(String(e)+" is not an object");return e};var U=Object.defineProperty;i=k?U:function(e,t,r){if(z(e),t=T(t,!0),z(r),I)try{return U(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e},W=k?function(e,t,r){return i(e,t,L(1,r))}:function(e,t,r){return e[t]=r,e};var G={},J={};J=function(e,t){try{W(b,e,t)}catch(r){b[e]=t}return t};var Y={},B={},Q="__core-js_shared__";B=b[Q]||J(Q,{});var V=Function.toString;"function"!=typeof B.inspectSource&&(B.inspectSource=function(e){return V.call(e)}),Y=B.inspectSource;var K={},X={},Z=b.WeakMap;X="function"==typeof Z&&/native code/.test(Y(Z));var ee={},et={},er={};er=!1,(et=function(e,t){return B[e]||(B[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:er?"pure":"global",copyright:"\xa9 2020 Denis Pushkarev (zloirock.ru)"});var en={},ei=0,eo=Math.random();en=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++ei+eo).toString(36)};var ea=et("keys");ee=function(e){return ea[e]||(ea[e]=en(e))};var es={};es={};var ec=b.WeakMap;if(X){var eu=new ec,el=eu.get,ed=eu.has,ef=eu.set;o=function(e,t){return ef.call(eu,e,t),t},a=function(e){return el.call(eu,e)||{}},s=function(e){return ed.call(eu,e)}}else{var ep=ee("state");es[ep]=!0,o=function(e,t){return W(e,ep,t),t},a=function(e){return H(e,ep)?e[ep]:{}},s=function(e){return H(e,ep)}}var eh=(K={set:o,get:a,has:s,enforce:function(e){return s(e)?a(e):o(e,{})},getterFor:function(e){return function(t){var r;if(!q(t)||(r=a(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}}).get,eg=K.enforce,em=String(String).split("String");(G=function(e,t,r,n){var i=!!n&&!!n.unsafe,o=!!n&&!!n.enumerable,a=!!n&&!!n.noTargetGet;if("function"==typeof r&&("string"!=typeof t||H(r,"name")||W(r,"name",t),eg(r).source=em.join("string"==typeof t?t:"")),e===b){o?e[t]=r:J(t,r);return}i?!a&&e[t]&&(o=!0):delete e[t],o?e[t]=r:W(e,t,r);// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype,"toString",function(){return"function"==typeof this&&eh(this).source||Y(this)});var ev={},ey={},e_={},eb={};eb=b;var ew=function(e){return"function"==typeof e?e:void 0};e_=function(e,t){return arguments.length<2?ew(eb[e])||ew(b[e]):eb[e]&&eb[e][t]||b[e]&&b[e][t]};var ek={},eE={},eS={},e$=Math.ceil,eL=Math.floor;// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
eS=function(e){return isNaN(e=+e)?0:(e>0?eL:e$)(e)};var ex=Math.min;// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
eE=function(e){return e>0?ex(eS(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
};var eF={},eM=Math.max,eO=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
eF=function(e,t){var r=eS(e);return r<0?eM(r+t,0):eO(r,t)};// `Array.prototype.{ indexOf, includes }` methods implementation
var ej=function(e){return function(t,r,n){var i,o=x(t),a=eE(o.length),s=eF(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(e&&r!=r){for(;a>s;)// eslint-disable-next-line no-self-compare
if((i=o[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},eP={// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
includes:ej(!0),// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
indexOf:ej(!1)}.indexOf;ek=function(e,t){var r,n=x(e),i=0,o=[];for(r in n)!H(es,r)&&H(n,r)&&o.push(r);// Don't enum bug & hidden keys
for(;t.length>i;)H(n,r=t[i++])&&(~eP(o,r)||o.push(r));return o};var eT=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");c=Object.getOwnPropertyNames||function(e){return ek(e,eT)},u=Object.getOwnPropertySymbols,// all object keys, includes non-enumerable and symbols
ey=e_("Reflect","ownKeys")||function(e){var t=c(z(e));return u?t.concat(u(e)):t},ev=function(e,t){for(var n=ey(t),o=0;o<n.length;o++){var a=n[o];H(e,a)||i(e,a,r(t,a))}};var eq={},eH=/#|\.prototype\./,eN=function(e,t){var r=eA[eI(e)];return r==eD||r!=eC&&("function"==typeof t?E(t):!!t)},eI=eN.normalize=function(e){return String(e).replace(eH,".").toLowerCase()},eA=eN.data={},eC=eN.NATIVE="N",eD=eN.POLYFILL="P";eq=eN,/*
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
*/_=function(e,t){var n,i,o,a,s,c=e.target,u=e.global,l=e.stat;if(n=u?b:l?b[c]||J(c,{}):(b[c]||{}).prototype)for(i in t){// contained in target
if(a=t[i],o=e.noTargetGet?(s=r(n,i))&&s.value:n[i],!eq(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;ev(a,o)}(e.sham||o&&o.sham)&&W(a,"sham",!0),// extend global
G(n,i,a,e)}};var eR={},eW={},ez={};ez=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e},// optional / simple context binding
eW=function(e,t,r){if(ez(e),void 0===t)return e;switch(r){case 0:return function(){return e.call(t)};case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}};var eU={};eU=e_("document","documentElement");var eG={},eJ={};eJ=e_("navigator","userAgent")||"",eG=/(iphone|ipod|ipad).*applewebkit/i.test(eJ);var eY=b.location,eB=b.setImmediate,eQ=b.clearImmediate,eV=b.process,eK=b.MessageChannel,eX=b.Dispatch,eZ=0,e0={},e1="onreadystatechange",e2=function(e){// eslint-disable-next-line no-prototype-builtins
if(e0.hasOwnProperty(e)){var t=e0[e];delete e0[e],t()}},e3=function(e){return function(){e2(e)}},e9=function(e){e2(e.data)},e4=function(e){// old engines have not location.origin
b.postMessage(e+"",eY.protocol+"//"+eY.host)};eB&&eQ||(eB=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return e0[++eZ]=function(){// eslint-disable-next-line no-new-func
("function"==typeof e?e:Function(e)).apply(void 0,t)},l(eZ),eZ},eQ=function(e){delete e0[e]},"process"==M(eV)?l=function(e){eV.nextTick(e3(e))}:eX&&eX.now?l=function(e){eX.now(e3(e))}:eK&&!eG?(f=(d=new eK).port2,d.port1.onmessage=e9,l=eW(f.postMessage,f,1)):!b.addEventListener||"function"!=typeof postMessage||b.importScripts||E(e4)||"file:"===eY.protocol?l=e1 in A("script")?function(e){eU.appendChild(A("script"))[e1]=function(){eU.removeChild(this),e2(e)}}:function(e){setTimeout(e3(e),0)}:(l=e4,b.addEventListener("message",e9,!1))),eR={set:eB,clear:eQ},// http://w3c.github.io/setImmediate/
_({global:!0,bind:!0,enumerable:!0,forced:!b.setImmediate||!b.clearImmediate},{// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
setImmediate:eR.set,// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
clearImmediate:eR.clear});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e7=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,r,n,i){var o,a=Object.create((r&&r.prototype instanceof g?r:g).prototype),s=new L(i||[]);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
a._invoke=(o=d,function(r,i){if(o===f)throw Error("Generator is already running");if(o===p){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return F()}for(s.method=r,s.arg=i;;){var a=s.delegate;if(a){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=r.iterator[n.method];if(i===t){if(// A .throw or .return when the delegate iterator has no .throw
// method always terminates the yield* loop.
n.delegate=null,"throw"===n.method){// Note: ["return"] must be used for ES3 parsing compatibility.
if(r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method))// "return" to "throw", let that override the TypeError below.
return h;n.method="throw",n.arg=TypeError("The iterator does not provide a 'throw' method")}return h}var o=l(i,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var a=o.arg;return a?a.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=a.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,h):a:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,h)}(a,s);if(c){if(c===h)continue;return c}}if("next"===s.method)// function.sent implementation.
s.sent=s._sent=s.arg;else if("throw"===s.method){if(o===d)throw o=p,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);o=f;var u=l(e,n,s);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
o=s.done?p:"suspendedYield",u.arg===h)continue;return{value:u.arg,done:s.done}}"throw"===u.type&&(o=p,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
s.method="throw",s.arg=u.arg)}}),a)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",f="executing",p="completed",h={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function g(){}function m(){}function v(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var y={};y[o]=function(){return this};var _=Object.getPrototypeOf,b=_&&_(_(x([])));b&&b!==r&&n.call(b,o)&&// of the polyfill.
(y=b);var w=v.prototype=g.prototype=Object.create(y);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function k(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
this._invoke=function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=l(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(d).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,a(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,a,s)})}}(i,o,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
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
r?r.then(a,// invocations of the iterator.
a):a()}}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function x(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}// Return an iterator with no values.
return{next:F}}function F(){return{value:t,done:!0}}// Regardless of whether this script is executing as a CommonJS module
// or not, return the runtime object so that we can declare the variable
// regeneratorRuntime in the outer scope, which allows this module to be
// injected easily by `bin/regenerator --include-runtime script.js`.
return m.prototype=w.constructor=v,v.constructor=m,m.displayName=c(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},k(E.prototype),E.prototype[a]=function(){return this},e.AsyncIterator=E,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new E(u(t,r,n,i),o);return e.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(e){return e.done?e.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
k(w),c(w,s,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
w[o]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
r.done=!0,r)}},e.values=x,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;$(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:x(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),h}},e}({});try{regeneratorRuntime=e7}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
Function("r","regeneratorRuntime = r")(e7)}const e5="https://forkify-api.herokuapp.com/api/v2/recipes/",e6="69c3b570-c091-4d3e-af40-ec1b2e0d31f9",e8=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},te={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},tt=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},tr=async function(e){try{let t=await e8(`${e5}${e}?key=${e6}`);te.recipe=tt(t),te.bookmarks.some(t=>t.id===e)?te.recipe.bookmarked=!0:te.recipe.bookmarked=!1,console.log(te.recipe)}catch(e){throw(// Temp error handling
console.error(`${e} 💥💥💥💥`),e)}},tn=async function(e){try{te.search.query=e;let t=await e8(`${e5}?search=${e}&key=${e6}`);console.log(t),te.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),te.search.page=1}catch(e){throw console.error(`${e} 💥💥💥💥`),e}},ti=function(e=te.search.page){te.search.page=e;let t=(e-1)*te.search.resultsPerPage,r=e*te.search.resultsPerPage;// 0
return te.search.results.slice(t,r)},to=function(e){te.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/te.recipe.servings;// newQt = oldQt * newServings / oldServings // 2 * 8 / 4 = 4
}),te.recipe.servings=e},ta=function(){localStorage.setItem("bookmarks",JSON.stringify(te.bookmarks))},ts=function(e){// Add bookmark
te.bookmarks.push(e),e.id===te.recipe.id&&(te.recipe.bookmarked=!0),ta()},tc=function(e){// Delete bookmark
let t=te.bookmarks.findIndex(t=>t.id===e);te.bookmarks.splice(t,1),e===te.recipe.id&&(te.recipe.bookmarked=!1),ta()};!function(){let e=localStorage.getItem("bookmarks");e&&(te.bookmarks=JSON.parse(e))}();const tu=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());// const ingArr = ing[1].replaceAll(' ', '').split(',');
if(3!==t.length)throw Error("Wrong ingredient fromat! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await e8(`${e5}?key=${e6}`,r);te.recipe=tt(n),ts(te.recipe)}catch(e){throw e}};var tl={};tl=new URL(y("27Lyk").resolve("eyyUD"),import.meta.url).toString();class tf{_data;/**
   * Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @this {Object} View instance
   * @author Jonas Schmedtmann
   * @todo Finish implementation
   */render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${/*@__PURE__*/g(tl)}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${/*@__PURE__*/g(tl)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${/*@__PURE__*/g(tl)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){/* double argument invocation */if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,i=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var o=r.split("/");this.numerator=o[0],this.denominator=o[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));// fractions that are equal should have equal normalized forms
var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(e=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},t=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(e(this.denominator)){var r=t(this.denominator,9),n=Math.pow(10,r.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),//this.numerator *= scaleup;
this.numerator*=n}if(e(this.numerator)){var r=t(this.numerator,9),n=Math.pow(10,r.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),//this.numerator *= scaleup;
this.denominator*=n}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;// and increment
return 1!=t&&r.push(t),r;// Return the prime factors
},p=Fraction;class tp extends tf{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${/*@__PURE__*/g(tl)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${/*@__PURE__*/g(tl)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
              <svg>
                <use href="${/*@__PURE__*/g(tl)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
              <svg>
                <use href="${/*@__PURE__*/g(tl)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
          <svg>
            <use href="${/*@__PURE__*/g(tl)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${/*@__PURE__*/g(tl)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
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
            <use href="${/*@__PURE__*/g(tl)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}_generateMarkupIngredient(e){return`
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${/*@__PURE__*/g(tl)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?new p(e.quantity).toString():""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>
  `}}var th=new tp;class tg{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var tm=new tg,tv=new class extends tf{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
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
              <use href="${/*@__PURE__*/g(tl)}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `}};class ty extends tf{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map(e=>tv.render(e,!1)).join("")}}var t_=new ty;class tb extends tf{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(// Page 1, and there are other pages
1===e&&t>1?`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/g(tl)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:e===t&&t>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${/*@__PURE__*/g(tl)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
      `:e<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${/*@__PURE__*/g(tl)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/g(tl)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:"")}}var tw=new tb;class tk extends tf{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>tv.render(e,!1)).join("")}}var tE=new tk;class tS extends tf{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);e(n)})}_generateMarkup(){}}var t$=new tS;const tL=async function(){try{let e=window.location.hash.slice(1);if(!e)return;th.renderSpinner(),t_.update(ti()),tE.update(te.bookmarks),// 2) Loading recipe
await tr(e),th.render(te.recipe)}catch(e){th.renderError(),console.error(e)}},tx=async function(){try{t_.renderSpinner();// 1) Get search query
let e=tm.getQuery();if(!e)return;// 2) Load search results
await tn(e),t_.render(ti()),tw.render(te.search)}catch(e){console.log(e)}},tF=async function(e){try{t$.renderSpinner(),// Upload the new recipe data
await tu(e),console.log(te.recipe),th.render(te.recipe),t$.renderMessage(),tE.render(te.bookmarks),// Change ID in URL
window.history.pushState(null,"",`#${te.recipe.id}`),// Close form window
setTimeout(function(){t$.toggleWindow()},2500)}catch(e){console.error("\uD83D\uDCA5",e),t$.renderError(e.message)}};tE.addHandlerRender(function(){tE.render(te.bookmarks)}),th.addHandlerRender(tL),th.addHandlerUpdateServings(function(e){// Update the recipe servings (in state)
to(e),th.update(te.recipe)}),th.addHandlerAddBookmark(function(){te.recipe.bookmarked?tc(te.recipe.id):ts(te.recipe),th.update(te.recipe),tE.render(te.bookmarks)}),tm.addHandlerSearch(tx),tw.addHandlerClick(function(e){t_.render(ti(e)),tw.render(te.search)}),t$.addHandlerUpload(tF);//# sourceMappingURL=index.5f9ec6cf.js.map

//# sourceMappingURL=index.5f9ec6cf.js.map
