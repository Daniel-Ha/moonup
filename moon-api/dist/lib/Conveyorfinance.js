"use strict";var c=Object.defineProperty;var R=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var q=Object.prototype.hasOwnProperty;var w=(o,e)=>{for(var t in e)c(o,t,{get:e[t],enumerable:!0})},k=(o,e,t,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of S(e))!q.call(o,r)&&r!==t&&c(o,r,{get:()=>e[r],enumerable:!(a=R(e,r))||a.enumerable});return o};var D=o=>k(c({},"__esModule",{value:!0}),o);var x={};w(x,{Conveyorfinance:()=>p});module.exports=D(x);var y=class{constructor(e={}){this.baseUrl="https://vault-api.usemoon.ai";this.securityData=null;this.abortControllers=new Map;this.customFetch=(...e)=>fetch(...e);this.baseApiParams={credentials:"same-origin",headers:{},redirect:"follow",referrerPolicy:"no-referrer"};this.setSecurityData=e=>{this.securityData=e};this.contentFormatters={"application/json":e=>e!==null&&(typeof e=="object"||typeof e=="string")?JSON.stringify(e):e,"text/plain":e=>e!==null&&typeof e!="string"?JSON.stringify(e):e,"multipart/form-data":e=>Object.keys(e||{}).reduce((t,a)=>{let r=e[a];return t.append(a,r instanceof Blob?r:typeof r=="object"&&r!==null?JSON.stringify(r):`${r}`),t},new FormData),"application/x-www-form-urlencoded":e=>this.toQueryString(e)};this.createAbortSignal=e=>{if(this.abortControllers.has(e)){let a=this.abortControllers.get(e);return a?a.signal:void 0}let t=new AbortController;return this.abortControllers.set(e,t),t.signal};this.abortRequest=e=>{let t=this.abortControllers.get(e);t&&(t.abort(),this.abortControllers.delete(e))};this.request=async({body:e,secure:t,path:a,type:r,query:m,format:f,baseUrl:P,cancelToken:s,...g})=>{let C=(typeof t=="boolean"?t:this.baseApiParams.secure)&&this.securityWorker&&await this.securityWorker(this.securityData)||{},i=this.mergeRequestParams(g,C),d=m&&this.toQueryString(m),T=this.contentFormatters[r||"application/json"],h=f||i.format;return this.customFetch(`${P||this.baseUrl||""}${a}${d?`?${d}`:""}`,{...i,headers:{...i.headers||{},...r&&r!=="multipart/form-data"?{"Content-Type":r}:{}},signal:(s?this.createAbortSignal(s):i.signal)||null,body:typeof e>"u"||e===null?null:T(e)}).then(async l=>{let n=l;n.data=null,n.error=null;let b=h?await l[h]().then(u=>(n.ok?n.data=u:n.error=u,n)).catch(u=>(n.error=u,n)):n;if(s&&this.abortControllers.delete(s),!l.ok)throw b;return b})};Object.assign(this,e)}encodeQueryParam(e,t){return`${encodeURIComponent(e)}=${encodeURIComponent(typeof t=="number"?t:`${t}`)}`}addQueryParam(e,t){return this.encodeQueryParam(t,e[t])}addArrayQueryParam(e,t){return e[t].map(r=>this.encodeQueryParam(t,r)).join("&")}toQueryString(e){let t=e||{};return Object.keys(t).filter(r=>typeof t[r]<"u").map(r=>Array.isArray(t[r])?this.addArrayQueryParam(t,r):this.addQueryParam(t,r)).join("&")}addQueryParams(e){let t=this.toQueryString(e);return t?`?${t}`:""}mergeRequestParams(e,t){return{...this.baseApiParams,...e,...t||{},headers:{...this.baseApiParams.headers||{},...e.headers||{},...t&&t.headers||{}}}}};var p=class extends y{constructor(){super(...arguments);this.swap=(t,a,r={})=>this.request({path:`/conveyorfinance/${t}/swap`,method:"POST",body:a,secure:!0,type:"application/json",format:"json",...r})}};0&&(module.exports={Conveyorfinance});
//# sourceMappingURL=Conveyorfinance.js.map