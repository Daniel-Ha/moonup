import{AUTH as r}from"@moonup/moon-types";var u=t=>{switch(t.AuthType){case r.OAUTH2:return{type:r.OAUTH2,securityWorker:async e=>({headers:{Authorization:`Bearer ${e.token}`}}),CLIENT_ID:t.CLIENT_ID,CLIENT_SECRET:t.CLIENT_SECRET,REDIRECT_URI:t.REDIRECT_URI};case r.JWT:return{type:r.JWT,securityWorker:async e=>Promise.resolve({headers:{Authorization:`Bearer ${e.token}`}})};case r.X_API_KEY:return{type:r.X_API_KEY,securityWorker:async e=>({headers:{"x-api-key":`${e.token}`}})};default:return{type:r.JWT,securityWorker:async e=>({headers:{Authorization:`Bearer ${e.token}`}})}}};export{u as moonAuthConfig};
//# sourceMappingURL=auth.mjs.map