"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=o(function(z,n){
var y=require('@stdlib/strided-base-dmap/dist'),j=require('@stdlib/math-base-special-floor/dist');function x(e,r,a,i,t){return y(e,r,a,i,t,j)}n.exports=x
});var q=o(function(A,v){
var R=require('@stdlib/strided-base-dmap/dist').ndarray,_=require('@stdlib/math-base-special-floor/dist');function E(e,r,a,i,t,l,m){return R(e,r,a,i,t,l,m,_)}v.exports=E
});var c=o(function(B,f){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=s(),b=q();O(d,"ndarray",b);f.exports=d
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=c(),u,p=h(g(__dirname,"./native.js"));p instanceof Error?u=k:u=p;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
