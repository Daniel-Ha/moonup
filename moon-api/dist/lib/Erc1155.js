"use strict";var y=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var S=Object.prototype.hasOwnProperty;var A=(s,e)=>{for(var t in e)y(s,t,{get:e[t],enumerable:!0})},F=(s,e,t,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of C(e))!S.call(s,r)&&r!==t&&y(s,r,{get:()=>e[r],enumerable:!(a=T(e,r))||a.enumerable});return s};var w=s=>F(y({},"__esModule",{value:!0}),s);var D={};A(D,{Erc1155:()=>p});module.exports=w(D);var c=class{constructor(e={}){this.baseUrl="https://vault-api.usemoon.ai";this.securityData=null;this.abortControllers=new Map;this.customFetch=(...e)=>fetch(...e);this.baseApiParams={credentials:"same-origin",headers:{},redirect:"follow",referrerPolicy:"no-referrer"};this.setSecurityData=e=>{this.securityData=e};this.contentFormatters={"application/json":e=>e!==null&&(typeof e=="object"||typeof e=="string")?JSON.stringify(e):e,"text/plain":e=>e!==null&&typeof e!="string"?JSON.stringify(e):e,"multipart/form-data":e=>Object.keys(e||{}).reduce((t,a)=>{let r=e[a];return t.append(a,r instanceof Blob?r:typeof r=="object"&&r!==null?JSON.stringify(r):`${r}`),t},new FormData),"application/x-www-form-urlencoded":e=>this.toQueryString(e)};this.createAbortSignal=e=>{if(this.abortControllers.has(e)){let a=this.abortControllers.get(e);return a?a.signal:void 0}let t=new AbortController;return this.abortControllers.set(e,t),t.signal};this.abortRequest=e=>{let t=this.abortControllers.get(e);t&&(t.abort(),this.abortControllers.delete(e))};this.request=async({body:e,secure:t,path:a,type:r,query:m,format:b,baseUrl:P,cancelToken:n,...R})=>{let g=(typeof t=="boolean"?t:this.baseApiParams.secure)&&this.securityWorker&&await this.securityWorker(this.securityData)||{},i=this.mergeRequestParams(R,g),d=m&&this.toQueryString(m),q=this.contentFormatters[r||"application/json"],h=b||i.format;return this.customFetch(`${P||this.baseUrl||""}${a}${d?`?${d}`:""}`,{...i,headers:{...i.headers||{},...r&&r!=="multipart/form-data"?{"Content-Type":r}:{}},signal:(n?this.createAbortSignal(n):i.signal)||null,body:typeof e>"u"||e===null?null:q(e)}).then(async l=>{let o=l;o.data=null,o.error=null;let f=h?await l[h]().then(u=>(o.ok?o.data=u:o.error=u,o)).catch(u=>(o.error=u,o)):o;if(n&&this.abortControllers.delete(n),!l.ok)throw f;return f})};Object.assign(this,e)}encodeQueryParam(e,t){return`${encodeURIComponent(e)}=${encodeURIComponent(typeof t=="number"?t:`${t}`)}`}addQueryParam(e,t){return this.encodeQueryParam(t,e[t])}addArrayQueryParam(e,t){return e[t].map(r=>this.encodeQueryParam(t,r)).join("&")}toQueryString(e){let t=e||{};return Object.keys(t).filter(r=>typeof t[r]<"u").map(r=>Array.isArray(t[r])?this.addArrayQueryParam(t,r):this.addQueryParam(t,r)).join("&")}addQueryParams(e){let t=this.toQueryString(e);return t?`?${t}`:""}mergeRequestParams(e,t){return{...this.baseApiParams,...e,...t||{},headers:{...this.baseApiParams.headers||{},...e.headers||{},...t&&t.headers||{}}}}};var p=class extends c{constructor(){super(...arguments);this.balanceOf=(t,a,r={})=>this.request({path:`/erc1155/${t}/balance-of`,method:"POST",body:a,secure:!0,type:"application/json",format:"json",...r});this.balanceOfBatch=(t,a,r={})=>this.request({path:`/erc1155/${t}/balance-of-batch`,method:"POST",body:a,secure:!0,type:"application/json",format:"json",...r});this.setApprovalForAll=(t,a,r={})=>this.request({path:`/erc1155/${t}/set-approval-for-all`,method:"POST",body:a,secure:!0,type:"application/json",format:"json",...r});this.isApprovedForAll=(t,a,r={})=>this.request({path:`/erc1155/${t}/is-approved-for-all`,method:"POST",body:a,secure:!0,type:"application/json",format:"json",...r});this.safeTransferFrom=(t,a,r={})=>this.request({path:`/erc1155/${t}/safe-transfer-from`,method:"POST",body:a,secure:!0,type:"application/json",format:"json",...r});this.safeBatchTransferFrom=(t,a,r={})=>this.request({path:`/erc1155/${t}/safe-batch-transfer-from`,method:"POST",body:a,secure:!0,type:"application/json",format:"json",...r})}};0&&(module.exports={Erc1155});
//# sourceMappingURL=Erc1155.js.map