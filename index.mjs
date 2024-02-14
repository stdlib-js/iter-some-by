// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function s(s,n,a,m){var o,d,l;if(!e(s))throw new TypeError(i("invalid argument. First argument must be an iterator. Value: `%s`.",s));if(!r(n))throw new TypeError(i("invalid argument. Second argument must be a positive integer. Value: `%s`.",n));if(!t(a))throw new TypeError(i("invalid argument. Third argument must be a function. Value: `%s`.",a));for(o=0,l=-1;;){if(l+=1,(d=s.next()).done)return!1;if(a.call(m,d.value,l)&&(o+=1)===n)return!0}}export{s as default};
//# sourceMappingURL=index.mjs.map
