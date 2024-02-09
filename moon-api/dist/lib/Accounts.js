"use strict";var p=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var A=Object.prototype.hasOwnProperty;var S=(o,t)=>{for(var e in t)p(o,e,{get:t[e],enumerable:!0})},D=(o,t,e,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of C(t))!A.call(o,r)&&r!==e&&p(o,r,{get:()=>t[r],enumerable:!(s=T(t,r))||s.enumerable});return o};var j=o=>D(p({},"__esModule",{value:!0}),o);var x={};S(x,{Accounts:()=>l});module.exports=j(x);var i=class{constructor(t={}){this.baseUrl="https://vault-api.usemoon.ai";this.securityData=null;this.abortControllers=new Map;this.customFetch=(...t)=>fetch(...t);this.baseApiParams={credentials:"same-origin",headers:{},redirect:"follow",referrerPolicy:"no-referrer"};this.setSecurityData=t=>{this.securityData=t};this.contentFormatters={"application/json":t=>t!==null&&(typeof t=="object"||typeof t=="string")?JSON.stringify(t):t,"text/plain":t=>t!==null&&typeof t!="string"?JSON.stringify(t):t,"multipart/form-data":t=>Object.keys(t||{}).reduce((e,s)=>{let r=t[s];return e.append(s,r instanceof Blob?r:typeof r=="object"&&r!==null?JSON.stringify(r):`${r}`),e},new FormData),"application/x-www-form-urlencoded":t=>this.toQueryString(t)};this.createAbortSignal=t=>{if(this.abortControllers.has(t)){let s=this.abortControllers.get(t);return s?s.signal:void 0}let e=new AbortController;return this.abortControllers.set(t,e),e.signal};this.abortRequest=t=>{let e=this.abortControllers.get(t);e&&(e.abort(),this.abortControllers.delete(t))};this.request=async({body:t,secure:e,path:s,type:r,query:m,format:P,baseUrl:b,cancelToken:a,...f})=>{let R=(typeof e=="boolean"?e:this.baseApiParams.secure)&&this.securityWorker&&await this.securityWorker(this.securityData)||{},u=this.mergeRequestParams(f,R),d=m&&this.toQueryString(m),q=this.contentFormatters[r||"application/json"],h=P||u.format;return this.customFetch(`${b||this.baseUrl||""}${s}${d?`?${d}`:""}`,{...u,headers:{...u.headers||{},...r&&r!=="multipart/form-data"?{"Content-Type":r}:{}},signal:(a?this.createAbortSignal(a):u.signal)||null,body:typeof t>"u"||t===null?null:q(t)}).then(async y=>{let n=y;n.data=null,n.error=null;let g=h?await y[h]().then(c=>(n.ok?n.data=c:n.error=c,n)).catch(c=>(n.error=c,n)):n;if(a&&this.abortControllers.delete(a),!y.ok)throw g;return g})};Object.assign(this,t)}encodeQueryParam(t,e){return`${encodeURIComponent(t)}=${encodeURIComponent(typeof e=="number"?e:`${e}`)}`}addQueryParam(t,e){return this.encodeQueryParam(e,t[e])}addArrayQueryParam(t,e){return t[e].map(r=>this.encodeQueryParam(e,r)).join("&")}toQueryString(t){let e=t||{};return Object.keys(e).filter(r=>typeof e[r]<"u").map(r=>Array.isArray(e[r])?this.addArrayQueryParam(e,r):this.addQueryParam(e,r)).join("&")}addQueryParams(t){let e=this.toQueryString(t);return e?`?${e}`:""}mergeRequestParams(t,e){return{...this.baseApiParams,...t,...e||{},headers:{...this.baseApiParams.headers||{},...t.headers||{},...e&&e.headers||{}}}}};var l=class extends i{constructor(){super(...arguments);this.getNonce=(e,s={})=>this.request({path:`/accounts/${e}/nonce`,method:"GET",secure:!0,format:"json",...s});this.getBalance=(e,s,r={})=>this.request({path:`/accounts/${e}/balance`,method:"GET",query:s,secure:!0,format:"json",...r});this.transferEth=(e,s,r={})=>this.request({path:`/accounts/${e}/transfer-eth`,method:"POST",body:s,secure:!0,type:"application/json",format:"json",...r});this.signMessage=(e,s,r={})=>this.request({path:`/accounts/${e}/sign-message`,method:"POST",body:s,secure:!0,type:"application/json",format:"json",...r});this.signTransaction=(e,s,r={})=>this.request({path:`/accounts/${e}/sign-transaction`,method:"POST",body:s,secure:!0,type:"application/json",format:"json",...r});this.signTypedData=(e,s,r={})=>this.request({path:`/accounts/${e}/sign-typed-data`,method:"POST",body:s,secure:!0,type:"application/json",format:"json",...r});this.listAccounts=(e={})=>this.request({path:"/accounts",method:"GET",secure:!0,format:"json",...e});this.createAccount=(e,s={})=>this.request({path:"/accounts",method:"POST",body:e,secure:!0,type:"application/json",format:"json",...s});this.getAccount=(e,s={})=>this.request({path:`/accounts/${e}`,method:"GET",secure:!0,format:"json",...s});this.deleteAccount=(e,s={})=>this.request({path:`/accounts/${e}`,method:"DELETE",secure:!0,format:"json",...s});this.deployContract=(e,s,r={})=>this.request({path:`/accounts/${e}/deploy`,method:"POST",body:s,secure:!0,type:"application/json",format:"json",...r});this.broadcastTx=(e,s,r={})=>this.request({path:`/accounts/${e}/broadcast-tx`,method:"POST",body:s,secure:!0,type:"application/json",format:"json",...r})}};0&&(module.exports={Accounts});
//# sourceMappingURL=Accounts.js.map