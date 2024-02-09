"use strict";var c=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames;var S=Object.prototype.hasOwnProperty;var A=(o,e)=>{for(var t in e)c(o,t,{get:e[t],enumerable:!0})},w=(o,e,t,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of T(e))!S.call(o,r)&&r!==t&&c(o,r,{get:()=>e[r],enumerable:!(a=C(e,r))||a.enumerable});return o};var D=o=>w(c({},"__esModule",{value:!0}),o);var x={};A(x,{Yearn:()=>p});module.exports=D(x);var y=class{constructor(e={}){this.baseUrl="https://vault-api.usemoon.ai";this.securityData=null;this.abortControllers=new Map;this.customFetch=(...e)=>fetch(...e);this.baseApiParams={credentials:"same-origin",headers:{},redirect:"follow",referrerPolicy:"no-referrer"};this.setSecurityData=e=>{this.securityData=e};this.contentFormatters={"application/json":e=>e!==null&&(typeof e=="object"||typeof e=="string")?JSON.stringify(e):e,"text/plain":e=>e!==null&&typeof e!="string"?JSON.stringify(e):e,"multipart/form-data":e=>Object.keys(e||{}).reduce((t,a)=>{let r=e[a];return t.append(a,r instanceof Blob?r:typeof r=="object"&&r!==null?JSON.stringify(r):`${r}`),t},new FormData),"application/x-www-form-urlencoded":e=>this.toQueryString(e)};this.createAbortSignal=e=>{if(this.abortControllers.has(e)){let a=this.abortControllers.get(e);return a?a.signal:void 0}let t=new AbortController;return this.abortControllers.set(e,t),t.signal};this.abortRequest=e=>{let t=this.abortControllers.get(e);t&&(t.abort(),this.abortControllers.delete(e))};this.request=async({body:e,secure:t,path:a,type:r,query:d,format:P,baseUrl:f,cancelToken:s,...g})=>{let q=(typeof t=="boolean"?t:this.baseApiParams.secure)&&this.securityWorker&&await this.securityWorker(this.securityData)||{},i=this.mergeRequestParams(g,q),m=d&&this.toQueryString(d),R=this.contentFormatters[r||"application/json"],h=P||i.format;return this.customFetch(`${f||this.baseUrl||""}${a}${m?`?${m}`:""}`,{...i,headers:{...i.headers||{},...r&&r!=="multipart/form-data"?{"Content-Type":r}:{}},signal:(s?this.createAbortSignal(s):i.signal)||null,body:typeof e>"u"||e===null?null:R(e)}).then(async l=>{let n=l;n.data=null,n.error=null;let b=h?await l[h]().then(u=>(n.ok?n.data=u:n.error=u,n)).catch(u=>(n.error=u,n)):n;if(s&&this.abortControllers.delete(s),!l.ok)throw b;return b})};Object.assign(this,e)}encodeQueryParam(e,t){return`${encodeURIComponent(e)}=${encodeURIComponent(typeof t=="number"?t:`${t}`)}`}addQueryParam(e,t){return this.encodeQueryParam(t,e[t])}addArrayQueryParam(e,t){return e[t].map(r=>this.encodeQueryParam(t,r)).join("&")}toQueryString(e){let t=e||{};return Object.keys(t).filter(r=>typeof t[r]<"u").map(r=>Array.isArray(t[r])?this.addArrayQueryParam(t,r):this.addQueryParam(t,r)).join("&")}addQueryParams(e){let t=this.toQueryString(e);return t?`?${t}`:""}mergeRequestParams(e,t){return{...this.baseApiParams,...e,...t||{},headers:{...this.baseApiParams.headers||{},...e.headers||{},...t&&t.headers||{}}}}};var p=class extends y{constructor(){super(...arguments);this.addLiquidity=(t,a,r={})=>this.request({path:`/yearn/${t}/add-liquidity`,method:"POST",body:a,secure:!0,type:"application/json",format:"json",...r});this.removeLiquidity=(t,a,r={})=>this.request({path:`/yearn/${t}/remove-liquidity`,method:"POST",body:a,secure:!0,type:"application/json",format:"json",...r});this.addLiquidityWeth=(t,a,r={})=>this.request({path:`/yearn/${t}/add-liquidity-weth`,method:"POST",body:a,secure:!0,type:"application/json",format:"json",...r});this.removeLiquidityWeth=(t,a,r={})=>this.request({path:`/yearn/${t}/remove-liquidity-weth`,method:"POST",body:a,secure:!0,type:"application/json",format:"json",...r})}};0&&(module.exports={Yearn});
//# sourceMappingURL=Yearn.js.map