import{arrayify as i}from"@ethersproject/bytes";import{hashMessage as o}from"@ethersproject/hash";import{utils as e}from"ethers";var m=r=>{let t=r.filter(s=>!e.isAddress(s))[0];return new Uint8Array(i(o(t)))},y=r=>{let t=r.filter(a=>!e.isAddress(a))[0];return typeof t=="string"?JSON.parse(t):t};export{m as getMessage,y as getSignTypedDataParamsData};
//# sourceMappingURL=utils.mjs.map