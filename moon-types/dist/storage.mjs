var a=(t=>(t.LOCAL="local",t.SESSION="session",t))(a||{}),n="MoonSessionKey",o=class{constructor(e,t){this.type=e,this.key=t}setItem(e){let t;switch(this.type){case"local":t=window.localStorage;break;case"session":t=window.sessionStorage;break;default:t=window.localStorage;break}t.setItem(this.key,JSON.stringify(e))}getItem(){let e;switch(this.type){case"local":e=window.localStorage;break;case"session":e=window.sessionStorage;break;default:e=window.localStorage;break}let t=e.getItem(this.key);try{return t?JSON.parse(t||"{}"):null}catch(r){return console.error("Error parsing JSON from storage:",r),null}}removeItem(){let e;switch(this.type){case"local":e=window.localStorage;break;case"session":e=window.sessionStorage;break;default:e=window.localStorage;break}e.removeItem(this.key)}};export{n as MOON_SESSION_KEY,o as MoonStorage,a as Storage};
//# sourceMappingURL=storage.mjs.map