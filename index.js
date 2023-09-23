// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterSomeBy=r()}(this,(function(){"use strict";var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var i=Object.defineProperty;function t(e){return"number"==typeof e}function a(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+a(n):a(n)+e,t&&(e="-"+e)),e}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(e){var r,i,a;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,a=parseInt(i,10),!isFinite(a)){if(!t(i))throw new Error("invalid integer. Value: "+i);a=0}return a<0&&("u"===e.specifier||10!==r)&&(a=4294967295+a+1),a<0?(i=(-a).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=a.toString(r),a||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===c.call(e.specifier)?c.call(i):o.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function p(e){return"string"==typeof e}var l=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,w=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,m=/(\..*[^0])0*e/;function _(e){var r,i,a=parseFloat(e.arg);if(!isFinite(a)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);a=e.arg}switch(e.specifier){case"e":case"E":i=a.toExponential(e.precision);break;case"f":case"F":i=a.toFixed(e.precision);break;case"g":case"G":l(a)<1e-4?((r=e.precision)>0&&(r-=1),i=a.toExponential(r)):i=a.toPrecision(e.precision),e.alternate||(i=g.call(i,m,"$1e"),i=g.call(i,y,"e"),i=g.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=g.call(i,d,"e+0$1"),i=g.call(i,h,"e-0$1"),e.alternate&&(i=g.call(i,w,"$1."),i=g.call(i,b,"$1.e")),a>=0&&e.sign&&(i=e.sign+i),i=e.specifier===f.call(e.specifier)?f.call(i):u.call(i)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function k(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var x=String.fromCharCode,S=isNaN,j=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,i,t,a,o,c,l,u,f;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",l=1,u=0;u<e.length;u++)if(p(t=e[u]))c+=t;else{if(r=void 0!==t.precision,!(t=V(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,S(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=_(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=k(t.arg,t.width,t.padRight)),c+=t.arg||"",l+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,i,t,a;for(i=[],a=0,t=T.exec(e);t;)(r=e.slice(a,T.lastIndex-t[0].length)).length&&i.push(r),i.push($(t)),a=T.lastIndex,t=T.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function A(e){return"string"==typeof e}function C(e){var r,i,t;if(!A(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return I.apply(null,i)}var O,R=Object.prototype,P=R.toString,Z=R.__defineGetter__,G=R.__defineSetter__,W=R.__lookupGetter__,N=R.__lookupSetter__;O=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?i:function(e,r,i){var t,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===P.call(i))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(W.call(e,r)||N.call(e,r)?(t=e.__proto__,e.__proto__=R,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&Z&&Z.call(e,r,i.get),o&&G&&G.call(e,r,i.set),e};var L=O;function U(e,r,i){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function X(e){return"boolean"==typeof e}var B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return B&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"";var H=M()?function(e){var r,i,t,a,n;if(null==e)return z.call(e);i=e[D],n=D,r=null!=(a=e)&&Y.call(a,n);try{e[D]=void 0}catch(r){return z.call(e)}return t=z.call(e),r?e[D]=i:delete e[D],t}:function(e){return z.call(e)},J=Boolean,K=Boolean.prototype.toString;var Q=M();function ee(e){return"object"==typeof e&&(e instanceof J||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function re(e){return X(e)||ee(e)}function ie(e){return"number"==typeof e}function te(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function ae(e,r,i){var t=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+te(a):te(a)+e,t&&(e="-"+e)),e}U(re,"isPrimitive",X),U(re,"isObject",ee);var ne=String.prototype.toLowerCase,oe=String.prototype.toUpperCase;function ce(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!ie(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=ae(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=ae(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===oe.call(e.specifier)?oe.call(i):ne.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function se(e){return"string"==typeof e}var pe=Math.abs,le=String.prototype.toLowerCase,ue=String.prototype.toUpperCase,fe=String.prototype.replace,ge=/e\+(\d)$/,de=/e-(\d)$/,he=/^(\d+)$/,we=/^(\d+)e/,be=/\.0$/,ve=/\.0*e/,ye=/(\..*[^0])0*e/;function me(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!ie(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":pe(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=fe.call(i,ye,"$1e"),i=fe.call(i,ve,"e"),i=fe.call(i,be,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=fe.call(i,ge,"e+0$1"),i=fe.call(i,de,"e-0$1"),e.alternate&&(i=fe.call(i,he,"$1."),i=fe.call(i,we,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===ue.call(e.specifier)?ue.call(i):le.call(i)}function _e(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Ee(e,r,i){var t=r-e.length;return t<0?e:e=i?e+_e(t):_e(t)+e}var ke=String.fromCharCode,xe=isNaN,Se=Array.isArray;function je(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ve(e){var r,i,t,a,n,o,c,s,p;if(!Se(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(se(t=e[s]))o+=t;else{if(r=void 0!==t.precision,!(t=je(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(a=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,xe(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,xe(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=ce(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!xe(t.arg)){if((n=parseInt(t.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=xe(n)?String(t.arg):ke(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=me(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ae(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Ee(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var Ie=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Te(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $e(e){var r,i,t,a;for(i=[],a=0,t=Ie.exec(e);t;)(r=e.slice(a,Ie.lastIndex-t[0].length)).length&&i.push(r),i.push(Te(t)),a=Ie.lastIndex,t=Ie.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function Fe(e){return"string"==typeof e}function Ae(e){var r,i,t;if(!Fe(e))throw new TypeError(Ae("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=$e(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return Ve.apply(null,i)}function Ce(){return new Function("return this;")()}var Oe="object"==typeof self?self:null,Re="object"==typeof window?window:null,Pe="object"==typeof global?global:null,Ze="object"==typeof globalThis?globalThis:null;var Ge=function(e){if(arguments.length){if(!X(e))throw new TypeError(Ae("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Ce()}if(Ze)return Ze;if(Oe)return Oe;if(Re)return Re;if(Pe)return Pe;throw new Error("unexpected error. Unable to resolve global object.")}(),We=Ge.document&&Ge.document.childNodes,Ne=Int8Array;var Le="function"==typeof Object.defineProperty?Object.defineProperty:null;var Ue=Object.defineProperty;function Xe(e){return"number"==typeof e}function Be(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Me(e,r,i){var t=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Be(a):Be(a)+e,t&&(e="-"+e)),e}var ze=String.prototype.toLowerCase,Ye=String.prototype.toUpperCase;function qe(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Xe(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Me(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Me(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Ye.call(e.specifier)?Ye.call(i):ze.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function De(e){return"string"==typeof e}var He=Math.abs,Je=String.prototype.toLowerCase,Ke=String.prototype.toUpperCase,Qe=String.prototype.replace,er=/e\+(\d)$/,rr=/e-(\d)$/,ir=/^(\d+)$/,tr=/^(\d+)e/,ar=/\.0$/,nr=/\.0*e/,or=/(\..*[^0])0*e/;function cr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Xe(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":He(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Qe.call(i,or,"$1e"),i=Qe.call(i,nr,"e"),i=Qe.call(i,ar,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Qe.call(i,er,"e+0$1"),i=Qe.call(i,rr,"e-0$1"),e.alternate&&(i=Qe.call(i,ir,"$1."),i=Qe.call(i,tr,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Ke.call(e.specifier)?Ke.call(i):Je.call(i)}function sr(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function pr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+sr(t):sr(t)+e}var lr=String.fromCharCode,ur=isNaN,fr=Array.isArray;function gr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function dr(e){var r,i,t,a,n,o,c,s,p;if(!fr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(De(t=e[s]))o+=t;else{if(r=void 0!==t.precision,!(t=gr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(a=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,ur(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,ur(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=qe(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!ur(t.arg)){if((n=parseInt(t.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=ur(n)?String(t.arg):lr(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=cr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Me(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=pr(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var hr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function wr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function br(e){var r,i,t,a;for(i=[],a=0,t=hr.exec(e);t;)(r=e.slice(a,hr.lastIndex-t[0].length)).length&&i.push(r),i.push(wr(t)),a=hr.lastIndex,t=hr.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function vr(e){return"string"==typeof e}function yr(e){var r,i,t;if(!vr(e))throw new TypeError(yr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=br(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return dr.apply(null,i)}var mr,_r=Object.prototype,Er=_r.toString,kr=_r.__defineGetter__,xr=_r.__defineSetter__,Sr=_r.__lookupGetter__,jr=_r.__lookupSetter__;mr=function(){try{return Le({},"x",{}),!0}catch(e){return!1}}()?Ue:function(e,r,i){var t,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===Er.call(e))throw new TypeError(yr("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===Er.call(i))throw new TypeError(yr("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(Sr.call(e,r)||jr.call(e,r)?(t=e.__proto__,e.__proto__=_r,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&kr&&kr.call(e,r,i.get),o&&xr&&xr.call(e,r,i.set),e};var Vr=mr;function Ir(e,r,i){Vr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function Tr(){return/^\s*function\s*([^(]*)/i}var $r=/^\s*function\s*([^(]*)/i;Ir(Tr,"REGEXP",$r);var Fr=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function Ar(e){return null!==e&&"object"==typeof e}function Cr(e){var r,i,t,a;if(("Object"===(i=H(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=$r.exec(t.toString()))return r[1]}return Ar(a=e)&&(a._isBuffer||a.constructor&&"function"==typeof a.constructor.isBuffer&&a.constructor.isBuffer(a))?"Buffer":i}Ir(Ar,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(yr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!Fr(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}(Ar));var Or="function"==typeof e||"object"==typeof Ne||"function"==typeof We?function(e){return Cr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Cr(e).toLowerCase():r};function Rr(e){return"function"===Or(e)}var Pr="function"==typeof Object.defineProperty?Object.defineProperty:null;var Zr=Object.defineProperty;function Gr(e){return"number"==typeof e}function Wr(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Nr(e,r,i){var t=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Wr(a):Wr(a)+e,t&&(e="-"+e)),e}var Lr=String.prototype.toLowerCase,Ur=String.prototype.toUpperCase;function Xr(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Gr(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Nr(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Nr(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Ur.call(e.specifier)?Ur.call(i):Lr.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Br(e){return"string"==typeof e}var Mr=Math.abs,zr=String.prototype.toLowerCase,Yr=String.prototype.toUpperCase,qr=String.prototype.replace,Dr=/e\+(\d)$/,Hr=/e-(\d)$/,Jr=/^(\d+)$/,Kr=/^(\d+)e/,Qr=/\.0$/,ei=/\.0*e/,ri=/(\..*[^0])0*e/;function ii(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Gr(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Mr(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=qr.call(i,ri,"$1e"),i=qr.call(i,ei,"e"),i=qr.call(i,Qr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=qr.call(i,Dr,"e+0$1"),i=qr.call(i,Hr,"e-0$1"),e.alternate&&(i=qr.call(i,Jr,"$1."),i=qr.call(i,Kr,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Yr.call(e.specifier)?Yr.call(i):zr.call(i)}function ti(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function ai(e,r,i){var t=r-e.length;return t<0?e:e=i?e+ti(t):ti(t)+e}var ni=String.fromCharCode,oi=isNaN,ci=Array.isArray;function si(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function pi(e){var r,i,t,a,n,o,c,s,p;if(!ci(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Br(t=e[s]))o+=t;else{if(r=void 0!==t.precision,!(t=si(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(a=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,oi(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,oi(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Xr(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!oi(t.arg)){if((n=parseInt(t.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=oi(n)?String(t.arg):ni(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=ii(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Nr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=ai(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var li=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ui(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function fi(e){var r,i,t,a;for(i=[],a=0,t=li.exec(e);t;)(r=e.slice(a,li.lastIndex-t[0].length)).length&&i.push(r),i.push(ui(t)),a=li.lastIndex,t=li.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function gi(e){return"string"==typeof e}function di(e){var r,i,t;if(!gi(e))throw new TypeError(di("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=fi(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return pi.apply(null,i)}var hi,wi=Object.prototype,bi=wi.toString,vi=wi.__defineGetter__,yi=wi.__defineSetter__,mi=wi.__lookupGetter__,_i=wi.__lookupSetter__;hi=function(){try{return Pr({},"x",{}),!0}catch(e){return!1}}()?Zr:function(e,r,i){var t,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===bi.call(e))throw new TypeError(di("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===bi.call(i))throw new TypeError(di("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(mi.call(e,r)||_i.call(e,r)?(t=e.__proto__,e.__proto__=wi,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&vi&&vi.call(e,r,i.get),o&&yi&&yi.call(e,r,i.set),e};var Ei=hi;function ki(e,r,i){Ei(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}var xi="function"==typeof Object.defineProperty?Object.defineProperty:null;var Si=Object.defineProperty;function ji(e){return"number"==typeof e}function Vi(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Ii(e,r,i){var t=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Vi(a):Vi(a)+e,t&&(e="-"+e)),e}var Ti=String.prototype.toLowerCase,$i=String.prototype.toUpperCase;function Fi(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!ji(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Ii(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Ii(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===$i.call(e.specifier)?$i.call(i):Ti.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Ai(e){return"string"==typeof e}var Ci=Math.abs,Oi=String.prototype.toLowerCase,Ri=String.prototype.toUpperCase,Pi=String.prototype.replace,Zi=/e\+(\d)$/,Gi=/e-(\d)$/,Wi=/^(\d+)$/,Ni=/^(\d+)e/,Li=/\.0$/,Ui=/\.0*e/,Xi=/(\..*[^0])0*e/;function Bi(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!ji(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Ci(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Pi.call(i,Xi,"$1e"),i=Pi.call(i,Ui,"e"),i=Pi.call(i,Li,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Pi.call(i,Zi,"e+0$1"),i=Pi.call(i,Gi,"e-0$1"),e.alternate&&(i=Pi.call(i,Wi,"$1."),i=Pi.call(i,Ni,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Ri.call(e.specifier)?Ri.call(i):Oi.call(i)}function Mi(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function zi(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Mi(t):Mi(t)+e}var Yi=String.fromCharCode,qi=isNaN,Di=Array.isArray;function Hi(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ji(e){var r,i,t,a,n,o,c,s,p;if(!Di(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Ai(t=e[s]))o+=t;else{if(r=void 0!==t.precision,!(t=Hi(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(a=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,qi(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,qi(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Fi(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!qi(t.arg)){if((n=parseInt(t.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=qi(n)?String(t.arg):Yi(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Bi(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Ii(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=zi(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var Ki=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Qi(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function et(e){var r,i,t,a;for(i=[],a=0,t=Ki.exec(e);t;)(r=e.slice(a,Ki.lastIndex-t[0].length)).length&&i.push(r),i.push(Qi(t)),a=Ki.lastIndex,t=Ki.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function rt(e){return"string"==typeof e}function it(e){var r,i,t;if(!rt(e))throw new TypeError(it("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=et(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return Ji.apply(null,i)}var tt,at=Object.prototype,nt=at.toString,ot=at.__defineGetter__,ct=at.__defineSetter__,st=at.__lookupGetter__,pt=at.__lookupSetter__;tt=function(){try{return xi({},"x",{}),!0}catch(e){return!1}}()?Si:function(e,r,i){var t,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===nt.call(e))throw new TypeError(it("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===nt.call(i))throw new TypeError(it("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(st.call(e,r)||pt.call(e,r)?(t=e.__proto__,e.__proto__=at,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&ot&&ot.call(e,r,i.get),o&&ct&&ct.call(e,r,i.set),e};var lt=tt;function ut(e,r,i){lt(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}var ft="function"==typeof Object.defineProperty?Object.defineProperty:null;var gt=Object.defineProperty;function dt(e){return"number"==typeof e}function ht(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function wt(e,r,i){var t=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ht(a):ht(a)+e,t&&(e="-"+e)),e}var bt=String.prototype.toLowerCase,vt=String.prototype.toUpperCase;function yt(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!dt(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=wt(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=wt(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===vt.call(e.specifier)?vt.call(i):bt.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function mt(e){return"string"==typeof e}var _t=Math.abs,Et=String.prototype.toLowerCase,kt=String.prototype.toUpperCase,xt=String.prototype.replace,St=/e\+(\d)$/,jt=/e-(\d)$/,Vt=/^(\d+)$/,It=/^(\d+)e/,Tt=/\.0$/,$t=/\.0*e/,Ft=/(\..*[^0])0*e/;function At(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!dt(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":_t(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=xt.call(i,Ft,"$1e"),i=xt.call(i,$t,"e"),i=xt.call(i,Tt,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=xt.call(i,St,"e+0$1"),i=xt.call(i,jt,"e-0$1"),e.alternate&&(i=xt.call(i,Vt,"$1."),i=xt.call(i,It,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===kt.call(e.specifier)?kt.call(i):Et.call(i)}function Ct(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Ot(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Ct(t):Ct(t)+e}var Rt=String.fromCharCode,Pt=isNaN,Zt=Array.isArray;function Gt(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Wt(e){var r,i,t,a,n,o,c,s,p;if(!Zt(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(mt(t=e[s]))o+=t;else{if(r=void 0!==t.precision,!(t=Gt(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(a=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,Pt(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,Pt(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=yt(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Pt(t.arg)){if((n=parseInt(t.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Pt(n)?String(t.arg):Rt(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=At(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=wt(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Ot(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var Nt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Lt(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ut(e){var r,i,t,a;for(i=[],a=0,t=Nt.exec(e);t;)(r=e.slice(a,Nt.lastIndex-t[0].length)).length&&i.push(r),i.push(Lt(t)),a=Nt.lastIndex,t=Nt.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function Xt(e){return"string"==typeof e}function Bt(e){var r,i,t;if(!Xt(e))throw new TypeError(Bt("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ut(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return Wt.apply(null,i)}var Mt,zt=Object.prototype,Yt=zt.toString,qt=zt.__defineGetter__,Dt=zt.__defineSetter__,Ht=zt.__lookupGetter__,Jt=zt.__lookupSetter__;Mt=function(){try{return ft({},"x",{}),!0}catch(e){return!1}}()?gt:function(e,r,i){var t,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===Yt.call(e))throw new TypeError(Bt("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===Yt.call(i))throw new TypeError(Bt("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(Ht.call(e,r)||Jt.call(e,r)?(t=e.__proto__,e.__proto__=zt,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&qt&&qt.call(e,r,i.get),o&&Dt&&Dt.call(e,r,i.set),e};var Kt=Mt;function Qt(e,r,i){Kt(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function ea(e){return"number"==typeof e}var ra=Number,ia=ra.prototype.toString;var ta=M();function aa(e){return"object"==typeof e&&(e instanceof ra||(ta?function(e){try{return ia.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function na(e){return ea(e)||aa(e)}Qt(na,"isPrimitive",ea),Qt(na,"isObject",aa);var oa=Number.POSITIVE_INFINITY,ca=ra.NEGATIVE_INFINITY,sa=Math.floor;function pa(e){return e<oa&&e>ca&&sa(r=e)===r;var r}function la(e){return ea(e)&&pa(e)}function ua(e){return aa(e)&&pa(e.valueOf())}function fa(e){return la(e)||ua(e)}function ga(e){return la(e)&&e>0}function da(e){return ua(e)&&e.valueOf()>0}function ha(e){return ga(e)||da(e)}function wa(){var e,r=arguments,i=r[0],t="https://stdlib.io/e/"+i+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}return ut(fa,"isPrimitive",la),ut(fa,"isObject",ua),ki(ha,"isPrimitive",ga),ki(ha,"isObject",da),function(e,r,i,t){var a,n,o,c,s;if(s=typeof(c=e),null===c||"object"!==s&&"function"!==s||!Rr(c.next))throw new TypeError(wa("0Pp3v,IA",e));if(!ga(r))throw new TypeError(wa("0Pp45,IB",r));if(!Rr(i))throw new TypeError(wa("0Pp3N,G4",i));for(a=0,o=-1;;){if(o+=1,(n=e.next()).done)return!1;if(i.call(t,n.value,o)&&(a+=1)===r)return!0}}}));
//# sourceMappingURL=index.js.map
