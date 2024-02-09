"use strict";var l=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var A=Object.prototype.hasOwnProperty;var S=(o,e)=>{for(var t in e)l(o,t,{get:e[t],enumerable:!0})},w=(o,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of q(e))!A.call(o,r)&&r!==t&&l(o,r,{get:()=>e[r],enumerable:!(n=C(e,r))||n.enumerable});return o};var x=o=>w(l({},"__esModule",{value:!0}),o);var D={};S(D,{Bitcoin:()=>p});module.exports=x(D);var c=class{constructor(e={}){this.baseUrl="https://vault-api.usemoon.ai";this.securityData=null;this.abortControllers=new Map;this.customFetch=(...e)=>fetch(...e);this.baseApiParams={credentials:"same-origin",headers:{},redirect:"follow",referrerPolicy:"no-referrer"};this.setSecurityData=e=>{this.securityData=e};this.contentFormatters={"application/json":e=>e!==null&&(typeof e=="object"||typeof e=="string")?JSON.stringify(e):e,"text/plain":e=>e!==null&&typeof e!="string"?JSON.stringify(e):e,"multipart/form-data":e=>Object.keys(e||{}).reduce((t,n)=>{let r=e[n];return t.append(n,r instanceof Blob?r:typeof r=="object"&&r!==null?JSON.stringify(r):`${r}`),t},new FormData),"application/x-www-form-urlencoded":e=>this.toQueryString(e)};this.createAbortSignal=e=>{if(this.abortControllers.has(e)){let n=this.abortControllers.get(e);return n?n.signal:void 0}let t=new AbortController;return this.abortControllers.set(e,t),t.signal};this.abortRequest=e=>{let t=this.abortControllers.get(e);t&&(t.abort(),this.abortControllers.delete(e))};this.request=async({body:e,secure:t,path:n,type:r,query:m,format:f,baseUrl:P,cancelToken:s,...g})=>{let R=(typeof t=="boolean"?t:this.baseApiParams.secure)&&this.securityWorker&&await this.securityWorker(this.securityData)||{},i=this.mergeRequestParams(g,R),d=m&&this.toQueryString(m),T=this.contentFormatters[r||"application/json"],h=f||i.format;return this.customFetch(`${P||this.baseUrl||""}${n}${d?`?${d}`:""}`,{...i,headers:{...i.headers||{},...r&&r!=="multipart/form-data"?{"Content-Type":r}:{}},signal:(s?this.createAbortSignal(s):i.signal)||null,body:typeof e>"u"||e===null?null:T(e)}).then(async y=>{let a=y;a.data=null,a.error=null;let b=h?await y[h]().then(u=>(a.ok?a.data=u:a.error=u,a)).catch(u=>(a.error=u,a)):a;if(s&&this.abortControllers.delete(s),!y.ok)throw b;return b})};Object.assign(this,e)}encodeQueryParam(e,t){return`${encodeURIComponent(e)}=${encodeURIComponent(typeof t=="number"?t:`${t}`)}`}addQueryParam(e,t){return this.encodeQueryParam(t,e[t])}addArrayQueryParam(e,t){return e[t].map(r=>this.encodeQueryParam(t,r)).join("&")}toQueryString(e){let t=e||{};return Object.keys(t).filter(r=>typeof t[r]<"u").map(r=>Array.isArray(t[r])?this.addArrayQueryParam(t,r):this.addQueryParam(t,r)).join("&")}addQueryParams(e){let t=this.toQueryString(e);return t?`?${t}`:""}mergeRequestParams(e,t){return{...this.baseApiParams,...e,...t||{},headers:{...this.baseApiParams.headers||{},...e.headers||{},...t&&t.headers||{}}}}};var p=class extends c{constructor(){super(...arguments);this.listBitcoinAccounts=(t={})=>this.request({path:"/bitcoin",method:"GET",secure:!0,format:"json",...t});this.createBitcoinAccount=(t,n={})=>this.request({path:"/bitcoin",method:"POST",body:t,secure:!0,type:"application/json",format:"json",...n});this.getBitcoinAccount=(t,n={})=>this.request({path:`/bitcoin/${t}`,method:"GET",secure:!0,format:"json",...n});this.signBitcoinTransaction=(t,n,r={})=>this.request({path:`/bitcoin/${t}/sign-tx`,method:"POST",body:n,secure:!0,type:"application/json",format:"json",...r})}};0&&(module.exports={Bitcoin});
//# sourceMappingURL=Bitcoin.js.map