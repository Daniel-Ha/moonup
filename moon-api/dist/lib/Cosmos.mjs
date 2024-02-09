var u=class{constructor(e={}){this.baseUrl="https://vault-api.usemoon.ai";this.securityData=null;this.abortControllers=new Map;this.customFetch=(...e)=>fetch(...e);this.baseApiParams={credentials:"same-origin",headers:{},redirect:"follow",referrerPolicy:"no-referrer"};this.setSecurityData=e=>{this.securityData=e};this.contentFormatters={"application/json":e=>e!==null&&(typeof e=="object"||typeof e=="string")?JSON.stringify(e):e,"text/plain":e=>e!==null&&typeof e!="string"?JSON.stringify(e):e,"multipart/form-data":e=>Object.keys(e||{}).reduce((t,o)=>{let r=e[o];return t.append(o,r instanceof Blob?r:typeof r=="object"&&r!==null?JSON.stringify(r):`${r}`),t},new FormData),"application/x-www-form-urlencoded":e=>this.toQueryString(e)};this.createAbortSignal=e=>{if(this.abortControllers.has(e)){let o=this.abortControllers.get(e);return o?o.signal:void 0}let t=new AbortController;return this.abortControllers.set(e,t),t.signal};this.abortRequest=e=>{let t=this.abortControllers.get(e);t&&(t.abort(),this.abortControllers.delete(e))};this.request=async({body:e,secure:t,path:o,type:r,query:y,format:b,baseUrl:f,cancelToken:a,...P})=>{let g=(typeof t=="boolean"?t:this.baseApiParams.secure)&&this.securityWorker&&await this.securityWorker(this.securityData)||{},n=this.mergeRequestParams(P,g),l=y&&this.toQueryString(y),C=this.contentFormatters[r||"application/json"],p=b||n.format;return this.customFetch(`${f||this.baseUrl||""}${o}${l?`?${l}`:""}`,{...n,headers:{...n.headers||{},...r&&r!=="multipart/form-data"?{"Content-Type":r}:{}},signal:(a?this.createAbortSignal(a):n.signal)||null,body:typeof e>"u"||e===null?null:C(e)}).then(async c=>{let s=c;s.data=null,s.error=null;let m=p?await c[p]().then(i=>(s.ok?s.data=i:s.error=i,s)).catch(i=>(s.error=i,s)):s;if(a&&this.abortControllers.delete(a),!c.ok)throw m;return m})};Object.assign(this,e)}encodeQueryParam(e,t){return`${encodeURIComponent(e)}=${encodeURIComponent(typeof t=="number"?t:`${t}`)}`}addQueryParam(e,t){return this.encodeQueryParam(t,e[t])}addArrayQueryParam(e,t){return e[t].map(r=>this.encodeQueryParam(t,r)).join("&")}toQueryString(e){let t=e||{};return Object.keys(t).filter(r=>typeof t[r]<"u").map(r=>Array.isArray(t[r])?this.addArrayQueryParam(t,r):this.addQueryParam(t,r)).join("&")}addQueryParams(e){let t=this.toQueryString(e);return t?`?${t}`:""}mergeRequestParams(e,t){return{...this.baseApiParams,...e,...t||{},headers:{...this.baseApiParams.headers||{},...e.headers||{},...t&&t.headers||{}}}}};var d=class extends u{constructor(){super(...arguments);this.listCosmosAccounts=(t={})=>this.request({path:"/cosmos",method:"GET",secure:!0,format:"json",...t});this.createCosmosAccount=(t,o={})=>this.request({path:"/cosmos",method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.getCosmosAccount=(t,o={})=>this.request({path:`/cosmos/${t}`,method:"GET",secure:!0,format:"json",...o});this.signCosmosTransaction=(t,o,r={})=>this.request({path:`/cosmos/${t}/sign-tx`,method:"POST",body:o,secure:!0,type:"application/json",format:"json",...r})}};export{d as Cosmos};
//# sourceMappingURL=Cosmos.mjs.map