"use strict";var m=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=m(function(q,s){
var l=require('@stdlib/assert-is-iterator-like/dist'),f=require('@stdlib/assert-is-function/dist'),g=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,n=require('@stdlib/error-tools-fmtprodmsg/dist');function w(e,r,i,v){var t,u,a;if(!l(e))throw new TypeError(n('0Pp3v',e));if(!g(r))throw new TypeError(n('0Pp45',r));if(!f(i))throw new TypeError(n('0Pp3N',i));for(t=0,a=-1;;){if(a+=1,u=e.next(),u.done)return!1;if(i.call(v,u.value,a)&&(t+=1,t===r))return!0}}s.exports=w
});var c=o();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
