var u=class{constructor(e={}){this.baseUrl="https://vault-api.usemoon.ai";this.securityData=null;this.abortControllers=new Map;this.customFetch=(...e)=>fetch(...e);this.baseApiParams={credentials:"same-origin",headers:{},redirect:"follow",referrerPolicy:"no-referrer"};this.setSecurityData=e=>{this.securityData=e};this.contentFormatters={"application/json":e=>e!==null&&(typeof e=="object"||typeof e=="string")?JSON.stringify(e):e,"text/plain":e=>e!==null&&typeof e!="string"?JSON.stringify(e):e,"multipart/form-data":e=>Object.keys(e||{}).reduce((t,a)=>{let r=e[a];return t.append(a,r instanceof Blob?r:typeof r=="object"&&r!==null?JSON.stringify(r):`${r}`),t},new FormData),"application/x-www-form-urlencoded":e=>this.toQueryString(e)};this.createAbortSignal=e=>{if(this.abortControllers.has(e)){let a=this.abortControllers.get(e);return a?a.signal:void 0}let t=new AbortController;return this.abortControllers.set(e,t),t.signal};this.abortRequest=e=>{let t=this.abortControllers.get(e);t&&(t.abort(),this.abortControllers.delete(e))};this.request=async({body:e,secure:t,path:a,type:r,query:c,format:b,baseUrl:f,cancelToken:s,...g})=>{let P=(typeof t=="boolean"?t:this.baseApiParams.secure)&&this.securityWorker&&await this.securityWorker(this.securityData)||{},n=this.mergeRequestParams(g,P),l=c&&this.toQueryString(c),C=this.contentFormatters[r||"application/json"],p=b||n.format;return this.customFetch(`${f||this.baseUrl||""}${a}${l?`?${l}`:""}`,{...n,headers:{...n.headers||{},...r&&r!=="multipart/form-data"?{"Content-Type":r}:{}},signal:(s?this.createAbortSignal(s):n.signal)||null,body:typeof e>"u"||e===null?null:C(e)}).then(async y=>{let o=y;o.data=null,o.error=null;let d=p?await y[p]().then(i=>(o.ok?o.data=i:o.error=i,o)).catch(i=>(o.error=i,o)):o;if(s&&this.abortControllers.delete(s),!y.ok)throw d;return d})};Object.assign(this,e)}encodeQueryParam(e,t){return`${encodeURIComponent(e)}=${encodeURIComponent(typeof t=="number"?t:`${t}`)}`}addQueryParam(e,t){return this.encodeQueryParam(t,e[t])}addArrayQueryParam(e,t){return e[t].map(r=>this.encodeQueryParam(t,r)).join("&")}toQueryString(e){let t=e||{};return Object.keys(t).filter(r=>typeof t[r]<"u").map(r=>Array.isArray(t[r])?this.addArrayQueryParam(t,r):this.addQueryParam(t,r)).join("&")}addQueryParams(e){let t=this.toQueryString(e);return t?`?${t}`:""}mergeRequestParams(e,t){return{...this.baseApiParams,...e,...t||{},headers:{...this.baseApiParams.headers||{},...e.headers||{},...t&&t.headers||{}}}}};var m=class extends u{constructor(){super(...arguments);this.getAddress=(t,a,r={})=>this.request({path:`/erc4337/${t}/address`,method:"POST",body:a,secure:!0,type:"application/json",format:"json",...r});this.signBroadcastUserOpTx=(t,a,r={})=>this.request({path:`/erc4337/${t}/sign-broadcast-userop-tx`,method:"POST",body:a,secure:!0,type:"application/json",format:"json",...r})}};export{m as Erc4337};
//# sourceMappingURL=Erc4337.mjs.map