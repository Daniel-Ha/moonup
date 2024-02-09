"use strict";var p=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames;var S=Object.prototype.hasOwnProperty;var A=(s,t)=>{for(var e in t)p(s,e,{get:t[e],enumerable:!0})},w=(s,t,e,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of T(t))!S.call(s,r)&&r!==e&&p(s,r,{get:()=>t[r],enumerable:!(o=C(t,r))||o.enumerable});return s};var O=s=>w(p({},"__esModule",{value:!0}),s);var D={};A(D,{Erc20:()=>l});module.exports=O(D);var y=class{constructor(t={}){this.baseUrl="https://vault-api.usemoon.ai";this.securityData=null;this.abortControllers=new Map;this.customFetch=(...t)=>fetch(...t);this.baseApiParams={credentials:"same-origin",headers:{},redirect:"follow",referrerPolicy:"no-referrer"};this.setSecurityData=t=>{this.securityData=t};this.contentFormatters={"application/json":t=>t!==null&&(typeof t=="object"||typeof t=="string")?JSON.stringify(t):t,"text/plain":t=>t!==null&&typeof t!="string"?JSON.stringify(t):t,"multipart/form-data":t=>Object.keys(t||{}).reduce((e,o)=>{let r=t[o];return e.append(o,r instanceof Blob?r:typeof r=="object"&&r!==null?JSON.stringify(r):`${r}`),e},new FormData),"application/x-www-form-urlencoded":t=>this.toQueryString(t)};this.createAbortSignal=t=>{if(this.abortControllers.has(t)){let o=this.abortControllers.get(t);return o?o.signal:void 0}let e=new AbortController;return this.abortControllers.set(t,e),e.signal};this.abortRequest=t=>{let e=this.abortControllers.get(t);e&&(e.abort(),this.abortControllers.delete(t))};this.request=async({body:t,secure:e,path:o,type:r,query:m,format:f,baseUrl:P,cancelToken:n,...g})=>{let R=(typeof e=="boolean"?e:this.baseApiParams.secure)&&this.securityWorker&&await this.securityWorker(this.securityData)||{},u=this.mergeRequestParams(g,R),d=m&&this.toQueryString(m),q=this.contentFormatters[r||"application/json"],h=f||u.format;return this.customFetch(`${P||this.baseUrl||""}${o}${d?`?${d}`:""}`,{...u,headers:{...u.headers||{},...r&&r!=="multipart/form-data"?{"Content-Type":r}:{}},signal:(n?this.createAbortSignal(n):u.signal)||null,body:typeof t>"u"||t===null?null:q(t)}).then(async c=>{let a=c;a.data=null,a.error=null;let b=h?await c[h]().then(i=>(a.ok?a.data=i:a.error=i,a)).catch(i=>(a.error=i,a)):a;if(n&&this.abortControllers.delete(n),!c.ok)throw b;return b})};Object.assign(this,t)}encodeQueryParam(t,e){return`${encodeURIComponent(t)}=${encodeURIComponent(typeof e=="number"?e:`${e}`)}`}addQueryParam(t,e){return this.encodeQueryParam(e,t[e])}addArrayQueryParam(t,e){return t[e].map(r=>this.encodeQueryParam(e,r)).join("&")}toQueryString(t){let e=t||{};return Object.keys(e).filter(r=>typeof e[r]<"u").map(r=>Array.isArray(e[r])?this.addArrayQueryParam(e,r):this.addQueryParam(e,r)).join("&")}addQueryParams(t){let e=this.toQueryString(t);return e?`?${e}`:""}mergeRequestParams(t,e){return{...this.baseApiParams,...t,...e||{},headers:{...this.baseApiParams.headers||{},...t.headers||{},...e&&e.headers||{}}}}};var l=class extends y{constructor(){super(...arguments);this.nameErc20=(e,o,r={})=>this.request({path:`/erc20/${e}/name`,method:"POST",body:o,secure:!0,type:"application/json",format:"json",...r});this.symbolErc20=(e,o,r={})=>this.request({path:`/erc20/${e}/symbol`,method:"POST",body:o,secure:!0,type:"application/json",format:"json",...r});this.decimalsErc20=(e,o,r={})=>this.request({path:`/erc20/${e}/decimals`,method:"POST",body:o,secure:!0,type:"application/json",format:"json",...r});this.totalSupplyErc20=(e,o,r={})=>this.request({path:`/erc20/${e}/total-supply`,method:"POST",body:o,secure:!0,type:"application/json",format:"json",...r});this.balanceOfErc20=(e,o,r={})=>this.request({path:`/erc20/${e}/balance-of`,method:"POST",body:o,secure:!0,type:"application/json",format:"json",...r});this.allowanceErc20=(e,o,r={})=>this.request({path:`/erc20/${e}/allowance`,method:"POST",body:o,secure:!0,type:"application/json",format:"json",...r});this.transferErc20=(e,o,r={})=>this.request({path:`/erc20/${e}/transfer`,method:"POST",body:o,secure:!0,type:"application/json",format:"json",...r});this.approveErc20=(e,o,r={})=>this.request({path:`/erc20/${e}/approve`,method:"POST",body:o,secure:!0,type:"application/json",format:"json",...r});this.transferFromErc20=(e,o,r={})=>this.request({path:`/erc20/${e}/transfer-from`,method:"POST",body:o,secure:!0,type:"application/json",format:"json",...r})}};0&&(module.exports={Erc20});
//# sourceMappingURL=Erc20.js.map