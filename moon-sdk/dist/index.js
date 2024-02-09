"use strict";var p=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var k=Object.prototype.hasOwnProperty;var M=(n,t)=>{for(var o in t)p(n,o,{get:t[o],enumerable:!0})},T=(n,t,o,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of f(t))!k.call(n,s)&&s!==o&&p(n,s,{get:()=>t[s],enumerable:!(i=A(t,s))||i.enumerable});return n};var d=n=>T(p({},"__esModule",{value:!0}),n);var b={};M(b,{IframeController:()=>g,MoonMessageHandler:()=>u,MoonMessageType:()=>l,MoonSDK:()=>D,moonAuthConfig:()=>S});module.exports=d(b);var r=require("@moonup/moon-types"),S=n=>{switch(n.AuthType){case r.AUTH.OAUTH2:return{type:r.AUTH.OAUTH2,securityWorker:async t=>({headers:{Authorization:`Bearer ${t.token}`}}),CLIENT_ID:n.CLIENT_ID,CLIENT_SECRET:n.CLIENT_SECRET,REDIRECT_URI:n.REDIRECT_URI};case r.AUTH.JWT:return{type:r.AUTH.JWT,securityWorker:async t=>Promise.resolve({headers:{Authorization:`Bearer ${t.token}`}})};case r.AUTH.X_API_KEY:return{type:r.AUTH.X_API_KEY,securityWorker:async t=>({headers:{"x-api-key":`${t.token}`}})};default:return{type:r.AUTH.JWT,securityWorker:async t=>({headers:{Authorization:`Bearer ${t.token}`}})}}};var m=require("events"),l=(o=>(o.login="MOON_LOGIN",o.logout="MOON_LOGOUT",o))(l||{}),u=class{constructor(){this.EventEmitter=new m.EventEmitter}emit(t,o){this.EventEmitter.emit(t,o)}async handle(t){return this.EventEmitter.emit(t.type,t.data),{type:t.type,data:t.data}}};var c=require("@ethersproject/bignumber"),y=require("@ethersproject/bytes"),K=require("@ethersproject/hash"),e=require("@moonup/moon-api"),a=require("@moonup/moon-types");var D=class{constructor(t){this.MoonSDKConfig=this.initialiseConfig(t),this.MoonAccount=new a.MoonAccount(this.MoonSDKConfig.Storage),this.MoonMessageHandler=new u,this.AccountsSDK=new e.Accounts({baseUrl:"https://vault-api.usemoon.ai",baseApiParams:{secure:!0,type:e.ContentType.Json,format:"json"},securityWorker:this.MoonSDKConfig.Auth.securityWorker}),this.AuthSDK=new e.Auth({baseUrl:"https://vault-api.usemoon.ai",baseApiParams:{secure:!0,type:e.ContentType.Json,format:"json"}}),this.AaveSDK=new e.Aave({baseUrl:"https://vault-api.usemoon.ai",baseApiParams:{secure:!0,type:e.ContentType.Json,format:"json"},securityWorker:this.MoonSDKConfig.Auth.securityWorker}),this.ENSSDK=new e.Ens({baseUrl:"https://vault-api.usemoon.ai",baseApiParams:{secure:!0,type:e.ContentType.Json,format:"json"},securityWorker:this.MoonSDKConfig.Auth.securityWorker}),this.Erc20SDK=new e.Erc20({baseUrl:"https://vault-api.usemoon.ai",baseApiParams:{secure:!0,type:e.ContentType.Json,format:"json"},securityWorker:this.MoonSDKConfig.Auth.securityWorker}),this.Erc1155SDK=new e.Erc1155({baseUrl:"https://vault-api.usemoon.ai",baseApiParams:{secure:!0,type:e.ContentType.Json,format:"json"},securityWorker:this.MoonSDKConfig.Auth.securityWorker}),this.Erc721SDK=new e.Erc721({baseUrl:"https://vault-api.usemoon.ai",baseApiParams:{secure:!0,type:e.ContentType.Json,format:"json"},securityWorker:this.MoonSDKConfig.Auth.securityWorker}),this.Erc4337SDK=new e.Erc4337({baseUrl:"https://vault-api.usemoon.ai",baseApiParams:{secure:!0,type:e.ContentType.Json,format:"json"},securityWorker:this.MoonSDKConfig.Auth.securityWorker}),this.OneinchSDK=new e.Oneinch({baseUrl:"https://vault-api.usemoon.ai",baseApiParams:{secure:!0,type:e.ContentType.Json,format:"json"},securityWorker:this.MoonSDKConfig.Auth.securityWorker}),this.UniswapSDK=new e.Uniswap({baseUrl:"https://vault-api.usemoon.ai",baseApiParams:{secure:!0,type:e.ContentType.Json,format:"json"},securityWorker:this.MoonSDKConfig.Auth.securityWorker}),this.YearnSDK=new e.Yearn({baseUrl:"https://vault-api.usemoon.ai",baseApiParams:{secure:!0,type:e.ContentType.Json,format:"json"},securityWorker:this.MoonSDKConfig.Auth.securityWorker}),this.ConveyorfinanceSDK=new e.Conveyorfinance({baseUrl:"https://vault-api.usemoon.ai",baseApiParams:{secure:!0,type:e.ContentType.Json,format:"json"},securityWorker:this.MoonSDKConfig.Auth.securityWorker}),this.BitcoinSDK=new e.Bitcoin({baseUrl:"https://vault-api.usemoon.ai",baseApiParams:{secure:!0,type:e.ContentType.Json,format:"json"},securityWorker:this.MoonSDKConfig.Auth.securityWorker}),this.BitcoincashSDK=new e.Bitcoincash({baseUrl:"https://vault-api.usemoon.ai",baseApiParams:{secure:!0,type:e.ContentType.Json,format:"json"},securityWorker:this.MoonSDKConfig.Auth.securityWorker}),this.DogecoinSDK=new e.Dogecoin({baseUrl:"https://vault-api.usemoon.ai",baseApiParams:{secure:!0,type:e.ContentType.Json,format:"json"},securityWorker:this.MoonSDKConfig.Auth.securityWorker}),this.SolanaSDK=new e.Solana({baseUrl:"https://vault-api.usemoon.ai",baseApiParams:{secure:!0,type:e.ContentType.Json,format:"json"},securityWorker:this.MoonSDKConfig.Auth.securityWorker}),this.CosmosSDK=new e.Cosmos({baseUrl:"https://vault-api.usemoon.ai",baseApiParams:{secure:!0,type:e.ContentType.Json,format:"json"},securityWorker:this.MoonSDKConfig.Auth.securityWorker}),this.EosSDK=new e.Eos({baseUrl:"https://vault-api.usemoon.ai",baseApiParams:{secure:!0,type:e.ContentType.Json,format:"json"},securityWorker:this.MoonSDKConfig.Auth.securityWorker}),this.LitecoinSDK=new e.Litecoin({baseUrl:"https://vault-api.usemoon.ai",baseApiParams:{secure:!0,type:e.ContentType.Json,format:"json"},securityWorker:this.MoonSDKConfig.Auth.securityWorker}),this.RippleSDK=new e.Ripple({baseUrl:"https://vault-api.usemoon.ai",baseApiParams:{secure:!0,type:e.ContentType.Json,format:"json"},securityWorker:this.MoonSDKConfig.Auth.securityWorker}),this.TronSDK=new e.Tron({baseUrl:"https://vault-api.usemoon.ai",baseApiParams:{secure:!0,type:e.ContentType.Json,format:"json"},securityWorker:this.MoonSDKConfig.Auth.securityWorker})}login(){this.getMoonAccount().login(),this.updateToken(this.getMoonAccount().getToken())}getSolanaSDK(){return this.SolanaSDK}getBitcoinSDK(){return this.BitcoinSDK}getCosmosSDK(){return this.CosmosSDK}getEosSDK(){return this.EosSDK}getLitecoinSDK(){return this.LitecoinSDK}getRippleSDK(){return this.RippleSDK}getTronSDK(){return this.TronSDK}getBitcoincashSDK(){return this.BitcoincashSDK}getDogecoinSDK(){return this.DogecoinSDK}getAuthSDK(){return this.AuthSDK}getAccountsSDK(){return this.AccountsSDK}getAaveSDK(){return this.AaveSDK}getConveyorfinanceSDK(){return this.ConveyorfinanceSDK}getENSSDK(){return this.ENSSDK}getErc20SDK(){return this.Erc20SDK}getErc1155SDK(){return this.Erc1155SDK}getErc721SDK(){return this.Erc721SDK}getErc4337SDK(){return this.Erc4337SDK}getOneinchSDK(){return this.OneinchSDK}getUniswapSDK(){return this.UniswapSDK}getYearnSDK(){return this.YearnSDK.setSecurityData({token:this.MoonAccount.getToken()}),this.YearnSDK}getMoonAccount(){return this.MoonAccount}updateRefreshToken(t){this.MoonAccount.setRefreshToken(t)}updateToken(t){this.MoonAccount.setToken(t),this.BitcoinSDK.setSecurityData({token:this.MoonAccount.getToken()}),this.AccountsSDK.setSecurityData({token:this.MoonAccount.getToken()}),this.AaveSDK.setSecurityData({token:this.MoonAccount.getToken()}),this.ConveyorfinanceSDK.setSecurityData({token:this.MoonAccount.getToken()}),this.ENSSDK.setSecurityData({token:this.MoonAccount.getToken()}),this.Erc20SDK.setSecurityData({token:this.MoonAccount.getToken()}),this.Erc1155SDK.setSecurityData({token:this.MoonAccount.getToken()}),this.Erc721SDK.setSecurityData({token:this.MoonAccount.getToken()}),this.Erc4337SDK.setSecurityData({token:this.MoonAccount.getToken()}),this.OneinchSDK.setSecurityData({token:this.MoonAccount.getToken()}),this.UniswapSDK.setSecurityData({token:this.MoonAccount.getToken()}),this.SolanaSDK.setSecurityData({token:this.MoonAccount.getToken()}),this.CosmosSDK.setSecurityData({token:this.MoonAccount.getToken()}),this.EosSDK.setSecurityData({token:this.MoonAccount.getToken()}),this.LitecoinSDK.setSecurityData({token:this.MoonAccount.getToken()}),this.RippleSDK.setSecurityData({token:this.MoonAccount.getToken()}),this.TronSDK.setSecurityData({token:this.MoonAccount.getToken()}),this.BitcoincashSDK.setSecurityData({token:this.MoonAccount.getToken()}),this.DogecoinSDK.setSecurityData({token:this.MoonAccount.getToken()})}async refreshAccount(){let t=this.MoonAccount.getRefreshToken(),o=await this.getAuthSDK().refreshToken({refreshToken:t});return this.updateToken(o.data.accessToken),o.data}async listAccounts(){let t=await this.getAccountsSDK().listAccounts();if(!t.ok)throw new Error(t.statusText);return t.data}transactionRequestToInputBody(t){return{chain_id:c.BigNumber.from(t.chainId).toString(),data:t.data,to:t.to,gasPrice:c.BigNumber.from(t.gasPrice).toString(),gas:c.BigNumber.from(t.gasLimit).toString(),nonce:c.BigNumber.from(t.nonce).toString(),value:t.value&&c.BigNumber.from(t.value).toString(),encoding:"utf-8"}}moonTransactionResponseToTransactions(t){return t.transactions||[]}async SignTransaction(t){return await this.getAccountsSDK().signTransaction(this.MoonAccount.getWallet(),this.transactionRequestToInputBody(t)).then(i=>{if(!i.ok)throw new Error(i.statusText);return this.moonTransactionResponseToTransactions(i.data.data)?.at(0)?.raw_transaction})||""}async SignMessage(t){let o=new Uint8Array((0,y.arrayify)((0,K.hashMessage)(t)));return(await this.getAccountsSDK().signMessage(this.MoonAccount.getWallet(),{data:o.toString(),encoding:"utf-8"}).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.data.data})).signed_message||""}async SignTypedData(t,o,i){return(await this.getAccountsSDK().signTypedData(this.MoonAccount.getWallet(),{data:JSON.stringify({domain:t,types:o,value:i})}).then(h=>{if(!h.ok)throw new Error(h.statusText);return h.data.data})).signed_message||""}async SendTransaction(t){let o=await this.getAccountsSDK().broadcastTx(this.MoonAccount.getWallet(),{rawTransaction:t,chainId:this.MoonAccount.getNetwork().chainId});if(!o.ok)throw new Error(o.statusText);return o.data.data}initialiseConfig(t){return{Auth:S(t.Auth),Storage:new a.MoonStorage(t.Storage.type,t.Storage.key),Networks:t.Networks||a.MOON_SUPPORTED_NETWORKS}}updateConfig(t){this.MoonSDKConfig=this.initialiseConfig(t)}getNetworks(){return this.MoonSDKConfig.Networks}updateAccount(t){this.MoonAccount=t,this.MoonSDKConfig.Storage.setItem(t)}updateWallet(t){this.MoonAccount.setWallet(t),this.MoonSDKConfig.Storage.setItem(this.MoonAccount)}async connect(){let t=new a.MoonAccount(this.MoonSDKConfig.Storage);if(this.getMoonAccount().login(),t.getToken()!=""&&t.getRefreshToken()!=""&&t.getExpiry()<Date.now()){let o=await this.refreshAccount();this.updateToken(o.accessToken)}return new a.MoonAccount(this.MoonSDKConfig.Storage)}updateNetwork(t){this.MoonAccount.setNetwork(t)}async disconnect(){}async logout(){this.MoonAccount.logout()}};var g=class{constructor(t,o){this.container=t;this.url=o;this.iframe=document.createElement("iframe"),this.iframe.src=this.url,this.iframe.style.width="100%",this.iframe.style.height="100%",this.container.appendChild(this.iframe)}setUrl(t){this.url=t,this.iframe&&(this.iframe.src=this.url)}destroy(){this.container&&this.iframe&&this.container.removeChild(this.iframe)}sendMessage(t){this.iframe&&this.iframe.contentWindow&&this.iframe.contentWindow.postMessage(t,this.url)}};0&&(module.exports={IframeController,MoonMessageHandler,MoonMessageType,MoonSDK,moonAuthConfig});
//# sourceMappingURL=index.js.map