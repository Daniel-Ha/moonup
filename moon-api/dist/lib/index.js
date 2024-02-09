"use strict";var y=Object.defineProperty;var L=Object.getOwnPropertyDescriptor;var W=Object.getOwnPropertyNames;var M=Object.prototype.hasOwnProperty;var N=(n,s)=>{for(var e in s)y(n,e,{get:s[e],enumerable:!0})},K=(n,s,e,t)=>{if(s&&typeof s=="object"||typeof s=="function")for(let o of W(s))!M.call(n,o)&&o!==e&&y(n,o,{get:()=>s[o],enumerable:!(t=L(s,o))||t.enumerable});return n};var z=n=>K(y({},"__esModule",{value:!0}),n);var V={};N(V,{Aave:()=>l,Accounts:()=>h,Bitcoin:()=>d,Bitcoincash:()=>R,ContentType:()=>a,Conveyorfinance:()=>q,Cosmos:()=>P,Dogecoin:()=>f,Ens:()=>T,Eos:()=>C,Erc1155:()=>g,Erc20:()=>A,Erc4337:()=>b,Erc721:()=>S,HttpClient:()=>r,Litecoin:()=>j,Oneinch:()=>x,Payment:()=>I,Ripple:()=>O,Solana:()=>$,Tron:()=>J,Uniswap:()=>D,Yearn:()=>E});module.exports=z(V);var a=(o=>(o.Json="application/json",o.FormData="multipart/form-data",o.UrlEncoded="application/x-www-form-urlencoded",o.Text="text/plain",o))(a||{}),r=class{constructor(s={}){this.baseUrl="https://vault-api.usemoon.ai";this.securityData=null;this.abortControllers=new Map;this.customFetch=(...s)=>fetch(...s);this.baseApiParams={credentials:"same-origin",headers:{},redirect:"follow",referrerPolicy:"no-referrer"};this.setSecurityData=s=>{this.securityData=s};this.contentFormatters={"application/json":s=>s!==null&&(typeof s=="object"||typeof s=="string")?JSON.stringify(s):s,"text/plain":s=>s!==null&&typeof s!="string"?JSON.stringify(s):s,"multipart/form-data":s=>Object.keys(s||{}).reduce((e,t)=>{let o=s[t];return e.append(t,o instanceof Blob?o:typeof o=="object"&&o!==null?JSON.stringify(o):`${o}`),e},new FormData),"application/x-www-form-urlencoded":s=>this.toQueryString(s)};this.createAbortSignal=s=>{if(this.abortControllers.has(s)){let t=this.abortControllers.get(s);return t?t.signal:void 0}let e=new AbortController;return this.abortControllers.set(s,e),e.signal};this.abortRequest=s=>{let e=this.abortControllers.get(s);e&&(e.abort(),this.abortControllers.delete(s))};this.request=async({body:s,secure:e,path:t,type:o,query:w,format:G,baseUrl:F,cancelToken:c,...H})=>{let Q=(typeof e=="boolean"?e:this.baseApiParams.secure)&&this.securityWorker&&await this.securityWorker(this.securityData)||{},p=this.mergeRequestParams(H,Q),k=w&&this.toQueryString(w),U=this.contentFormatters[o||"application/json"],v=G||p.format;return this.customFetch(`${F||this.baseUrl||""}${t}${k?`?${k}`:""}`,{...p,headers:{...p.headers||{},...o&&o!=="multipart/form-data"?{"Content-Type":o}:{}},signal:(c?this.createAbortSignal(c):p.signal)||null,body:typeof s>"u"||s===null?null:U(s)}).then(async m=>{let u=m;u.data=null,u.error=null;let B=v?await m[v]().then(i=>(u.ok?u.data=i:u.error=i,u)).catch(i=>(u.error=i,u)):u;if(c&&this.abortControllers.delete(c),!m.ok)throw B;return B})};Object.assign(this,s)}encodeQueryParam(s,e){return`${encodeURIComponent(s)}=${encodeURIComponent(typeof e=="number"?e:`${e}`)}`}addQueryParam(s,e){return this.encodeQueryParam(e,s[e])}addArrayQueryParam(s,e){return s[e].map(o=>this.encodeQueryParam(e,o)).join("&")}toQueryString(s){let e=s||{};return Object.keys(e).filter(o=>typeof e[o]<"u").map(o=>Array.isArray(e[o])?this.addArrayQueryParam(e,o):this.addQueryParam(e,o)).join("&")}addQueryParams(s){let e=this.toQueryString(s);return e?`?${e}`:""}mergeRequestParams(s,e){return{...this.baseApiParams,...s,...e||{},headers:{...this.baseApiParams.headers||{},...s.headers||{},...e&&e.headers||{}}}}};var l=class extends r{constructor(){super(...arguments);this.lend=(e,t,o={})=>this.request({path:`/aave/${e}/lend`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.borrow=(e,t,o={})=>this.request({path:`/aave/${e}/borrow`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.userReserveData=(e,t,o={})=>this.request({path:`/aave/${e}/user-reserve-data`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.repay=(e,t,o={})=>this.request({path:`/aave/${e}/repay`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o})}};var h=class extends r{constructor(){super(...arguments);this.getNonce=(e,t={})=>this.request({path:`/accounts/${e}/nonce`,method:"GET",secure:!0,format:"json",...t});this.getBalance=(e,t,o={})=>this.request({path:`/accounts/${e}/balance`,method:"GET",query:t,secure:!0,format:"json",...o});this.transferEth=(e,t,o={})=>this.request({path:`/accounts/${e}/transfer-eth`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.signMessage=(e,t,o={})=>this.request({path:`/accounts/${e}/sign-message`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.signTransaction=(e,t,o={})=>this.request({path:`/accounts/${e}/sign-transaction`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.signTypedData=(e,t,o={})=>this.request({path:`/accounts/${e}/sign-typed-data`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.listAccounts=(e={})=>this.request({path:"/accounts",method:"GET",secure:!0,format:"json",...e});this.createAccount=(e,t={})=>this.request({path:"/accounts",method:"POST",body:e,secure:!0,type:"application/json",format:"json",...t});this.getAccount=(e,t={})=>this.request({path:`/accounts/${e}`,method:"GET",secure:!0,format:"json",...t});this.deleteAccount=(e,t={})=>this.request({path:`/accounts/${e}`,method:"DELETE",secure:!0,format:"json",...t});this.deployContract=(e,t,o={})=>this.request({path:`/accounts/${e}/deploy`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.broadcastTx=(e,t,o={})=>this.request({path:`/accounts/${e}/broadcast-tx`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o})}};var d=class extends r{constructor(){super(...arguments);this.listBitcoinAccounts=(e={})=>this.request({path:"/bitcoin",method:"GET",secure:!0,format:"json",...e});this.createBitcoinAccount=(e,t={})=>this.request({path:"/bitcoin",method:"POST",body:e,secure:!0,type:"application/json",format:"json",...t});this.getBitcoinAccount=(e,t={})=>this.request({path:`/bitcoin/${e}`,method:"GET",secure:!0,format:"json",...t});this.signBitcoinTransaction=(e,t,o={})=>this.request({path:`/bitcoin/${e}/sign-tx`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o})}};var R=class extends r{constructor(){super(...arguments);this.listBitcoinCashAccounts=(e={})=>this.request({path:"/bitcoincash",method:"GET",secure:!0,format:"json",...e});this.createBitcoinCashAccount=(e,t={})=>this.request({path:"/bitcoincash",method:"POST",body:e,secure:!0,type:"application/json",format:"json",...t});this.getBitcoinCashAccount=(e,t={})=>this.request({path:`/bitcoincash/${e}`,method:"GET",secure:!0,format:"json",...t});this.signBitcoinCashTransaction=(e,t,o={})=>this.request({path:`/bitcoincash/${e}/sign-tx`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o})}};var q=class extends r{constructor(){super(...arguments);this.swap=(e,t,o={})=>this.request({path:`/conveyorfinance/${e}/swap`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o})}};var P=class extends r{constructor(){super(...arguments);this.listCosmosAccounts=(e={})=>this.request({path:"/cosmos",method:"GET",secure:!0,format:"json",...e});this.createCosmosAccount=(e,t={})=>this.request({path:"/cosmos",method:"POST",body:e,secure:!0,type:"application/json",format:"json",...t});this.getCosmosAccount=(e,t={})=>this.request({path:`/cosmos/${e}`,method:"GET",secure:!0,format:"json",...t});this.signCosmosTransaction=(e,t,o={})=>this.request({path:`/cosmos/${e}/sign-tx`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o})}};var f=class extends r{constructor(){super(...arguments);this.listDogeCoinAccounts=(e={})=>this.request({path:"/dogecoin",method:"GET",secure:!0,format:"json",...e});this.createDogeCoinAccount=(e,t={})=>this.request({path:"/dogecoin",method:"POST",body:e,secure:!0,type:"application/json",format:"json",...t});this.getDogeCoinAccount=(e,t={})=>this.request({path:`/dogecoin/${e}`,method:"GET",secure:!0,format:"json",...t});this.signDogeCoinTransaction=(e,t,o={})=>this.request({path:`/dogecoin/${e}/sign-tx`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o})}};var T=class extends r{constructor(){super(...arguments);this.resolve=(e,t={})=>this.request({path:"/ens/resolve",method:"POST",body:e,secure:!0,type:"application/json",format:"json",...t})}};var C=class extends r{constructor(){super(...arguments);this.listEosAccounts=(e={})=>this.request({path:"/eos",method:"GET",secure:!0,format:"json",...e});this.createEosAccount=(e,t={})=>this.request({path:"/eos",method:"POST",body:e,secure:!0,type:"application/json",format:"json",...t});this.getEosAccount=(e,t={})=>this.request({path:`/eos/${e}`,method:"GET",secure:!0,format:"json",...t});this.signEosTransaction=(e,t,o={})=>this.request({path:`/eos/${e}/sign-tx`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o})}};var g=class extends r{constructor(){super(...arguments);this.balanceOf=(e,t,o={})=>this.request({path:`/erc1155/${e}/balance-of`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.balanceOfBatch=(e,t,o={})=>this.request({path:`/erc1155/${e}/balance-of-batch`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.setApprovalForAll=(e,t,o={})=>this.request({path:`/erc1155/${e}/set-approval-for-all`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.isApprovedForAll=(e,t,o={})=>this.request({path:`/erc1155/${e}/is-approved-for-all`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.safeTransferFrom=(e,t,o={})=>this.request({path:`/erc1155/${e}/safe-transfer-from`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.safeBatchTransferFrom=(e,t,o={})=>this.request({path:`/erc1155/${e}/safe-batch-transfer-from`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o})}};var A=class extends r{constructor(){super(...arguments);this.nameErc20=(e,t,o={})=>this.request({path:`/erc20/${e}/name`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.symbolErc20=(e,t,o={})=>this.request({path:`/erc20/${e}/symbol`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.decimalsErc20=(e,t,o={})=>this.request({path:`/erc20/${e}/decimals`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.totalSupplyErc20=(e,t,o={})=>this.request({path:`/erc20/${e}/total-supply`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.balanceOfErc20=(e,t,o={})=>this.request({path:`/erc20/${e}/balance-of`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.allowanceErc20=(e,t,o={})=>this.request({path:`/erc20/${e}/allowance`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.transferErc20=(e,t,o={})=>this.request({path:`/erc20/${e}/transfer`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.approveErc20=(e,t,o={})=>this.request({path:`/erc20/${e}/approve`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.transferFromErc20=(e,t,o={})=>this.request({path:`/erc20/${e}/transfer-from`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o})}};var b=class extends r{constructor(){super(...arguments);this.getAddress=(e,t,o={})=>this.request({path:`/erc4337/${e}/address`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.signBroadcastUserOpTx=(e,t,o={})=>this.request({path:`/erc4337/${e}/sign-broadcast-userop-tx`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o})}};var S=class extends r{constructor(){super(...arguments);this.tokenUri=(e,t,o={})=>this.request({path:`/erc721/${e}/token-uri`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.transfer=(e,t,o={})=>this.request({path:`/erc721/${e}/transfer`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.transferFrom=(e,t,o={})=>this.request({path:`/erc721/${e}/transfer-from`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.approve=(e,t,o={})=>this.request({path:`/erc721/${e}/approve`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.getApproved=(e,t,o={})=>this.request({path:`/erc721/${e}/get-approved`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.isApprovedForAll=(e,t,o={})=>this.request({path:`/erc721/${e}/is-approved-for-all`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.name=(e,t,o={})=>this.request({path:`/erc721/${e}/name`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.symbol=(e,t,o={})=>this.request({path:`/erc721/${e}/symbol`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.balanceOf=(e,t,o={})=>this.request({path:`/erc721/${e}/balance-of`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.ownerOf=(e,t,o={})=>this.request({path:`/erc721/${e}/owner-of`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.safeTransferFrom=(e,t,o={})=>this.request({path:`/erc721/${e}/safe-transfer-from`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.setApprovalForAll=(e,t,o={})=>this.request({path:`/erc721/${e}/set-approval-for-all`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o})}};var j=class extends r{constructor(){super(...arguments);this.listLitecoinAccounts=(e={})=>this.request({path:"/litecoin",method:"GET",secure:!0,format:"json",...e});this.createLitecoinAccount=(e,t={})=>this.request({path:"/litecoin",method:"POST",body:e,secure:!0,type:"application/json",format:"json",...t});this.getLitecoinAccount=(e,t={})=>this.request({path:`/litecoin/${e}`,method:"GET",secure:!0,format:"json",...t});this.signLitecoinTransaction=(e,t,o={})=>this.request({path:`/litecoin/${e}/sign-tx`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o})}};var x=class extends r{constructor(){super(...arguments);this.tokens=(e,t={})=>this.request({path:"/oneinch/tokens",method:"POST",body:e,secure:!0,type:"application/json",format:"json",...t});this.protocols=(e,t={})=>this.request({path:"/oneinch/protocols",method:"POST",body:e,secure:!0,type:"application/json",format:"json",...t});this.quote=(e,t={})=>this.request({path:"/oneinch/quote",method:"POST",body:e,secure:!0,type:"application/json",format:"json",...t});this.swap=(e,t,o={})=>this.request({path:`/oneinch/${e}/swap`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.approveSpender=(e,t={})=>this.request({path:"/oneinch/approve-spender",method:"POST",body:e,secure:!0,type:"application/json",format:"json",...t});this.approveCallData=(e,t={})=>this.request({path:"/oneinch/approve-call-data",method:"POST",body:e,secure:!0,type:"application/json",format:"json",...t})}};var I=class extends r{constructor(){super(...arguments);this.paymentGetAvailableChains=(e={})=>this.request({path:"/payment/chains",method:"GET",secure:!0,format:"json",...e});this.paymentCreatePaymentIntent=(e,t={})=>this.request({path:"/payment",method:"POST",body:e,secure:!0,type:"application/json",format:"json",...t});this.paymentGetAllPaymentIntents=(e={})=>this.request({path:"/payment",method:"GET",secure:!0,format:"json",...e});this.paymentDeletePaymentIntent=(e,t={})=>this.request({path:`/payment/${e}`,method:"DELETE",secure:!0,format:"json",...t});this.paymentUpdatePaymentIntent=(e,t,o={})=>this.request({path:`/payment/${e}`,method:"PUT",body:t,secure:!0,type:"application/json",format:"json",...o});this.paymentGetPaymentIntent=(e,t={})=>this.request({path:`/payment/${e}`,method:"GET",secure:!0,format:"json",...t});this.moralisWebhook=(e,t,o={})=>this.request({path:`/payment/webhook/${e}`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.tatumWebhook=(e,t,o={})=>this.request({path:`/payment/tatum/webhook/${e}`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o})}};var O=class extends r{constructor(){super(...arguments);this.listRippleAccounts=(e={})=>this.request({path:"/ripple",method:"GET",secure:!0,format:"json",...e});this.createRippleAccount=(e,t={})=>this.request({path:"/ripple",method:"POST",body:e,secure:!0,type:"application/json",format:"json",...t});this.getRippleAccount=(e,t={})=>this.request({path:`/ripple/${e}`,method:"GET",secure:!0,format:"json",...t});this.signRippleTransaction=(e,t,o={})=>this.request({path:`/ripple/${e}/sign-tx`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o})}};var $=class extends r{constructor(){super(...arguments);this.listSolanaAccounts=(e={})=>this.request({path:"/solana",method:"GET",secure:!0,format:"json",...e});this.createSolanaAccount=(e,t={})=>this.request({path:"/solana",method:"POST",body:e,secure:!0,type:"application/json",format:"json",...t});this.getSolanaAccount=(e,t={})=>this.request({path:`/solana/${e}`,method:"GET",secure:!0,format:"json",...t});this.signSolanaTransaction=(e,t,o={})=>this.request({path:`/solana/${e}/sign-tx`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o})}};var J=class extends r{constructor(){super(...arguments);this.listTronAccounts=(e={})=>this.request({path:"/tron",method:"GET",secure:!0,format:"json",...e});this.createTronAccount=(e,t={})=>this.request({path:"/tron",method:"POST",body:e,secure:!0,type:"application/json",format:"json",...t});this.getTronAccount=(e,t={})=>this.request({path:`/tron/${e}`,method:"GET",secure:!0,format:"json",...t});this.signTronTransaction=(e,t,o={})=>this.request({path:`/tron/${e}/sign-tx`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o})}};var D=class extends r{constructor(){super(...arguments);this.addLiquidity=(e,t,o={})=>this.request({path:`/uniswap/${e}/add-liquidity`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.removeLiquidity=(e,t,o={})=>this.request({path:`/uniswap/${e}/remove-liquidity`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.swapExactTokensForTokens=(e,t,o={})=>this.request({path:`/uniswap/${e}/swap-exact-tokens-for-tokens`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.swapExactEthForTokens=(e,t,o={})=>this.request({path:`/uniswap/${e}/swap-exact-eth-for-tokens`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o})}};var E=class extends r{constructor(){super(...arguments);this.addLiquidity=(e,t,o={})=>this.request({path:`/yearn/${e}/add-liquidity`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.removeLiquidity=(e,t,o={})=>this.request({path:`/yearn/${e}/remove-liquidity`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.addLiquidityWeth=(e,t,o={})=>this.request({path:`/yearn/${e}/add-liquidity-weth`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o});this.removeLiquidityWeth=(e,t,o={})=>this.request({path:`/yearn/${e}/remove-liquidity-weth`,method:"POST",body:t,secure:!0,type:"application/json",format:"json",...o})}};0&&(module.exports={Aave,Accounts,Bitcoin,Bitcoincash,ContentType,Conveyorfinance,Cosmos,Dogecoin,Ens,Eos,Erc1155,Erc20,Erc4337,Erc721,HttpClient,Litecoin,Oneinch,Payment,Ripple,Solana,Tron,Uniswap,Yearn});
//# sourceMappingURL=index.js.map