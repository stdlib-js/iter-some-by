// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function i(i,o,n,d){var m,p,f;if(!r(i))throw new TypeError(s("0Pp3v,IA",i));if(!e(o))throw new TypeError(s("0Pp45,IB",o));if(!t(n))throw new TypeError(s("0Pp3N,G4",n));for(m=0,f=-1;;){if(f+=1,(p=i.next()).done)return!1;if(n.call(d,p.value,f)&&(m+=1)===o)return!0}}export{i as default};
//# sourceMappingURL=index.mjs.map
