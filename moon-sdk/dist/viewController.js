"use strict";var r=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var c=Object.prototype.hasOwnProperty;var f=(t,i)=>{for(var e in i)r(t,e,{get:i[e],enumerable:!0})},o=(t,i,e,h)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of m(i))!c.call(t,s)&&s!==e&&r(t,s,{get:()=>i[s],enumerable:!(h=n(i,s))||h.enumerable});return t};var l=t=>o(r({},"__esModule",{value:!0}),t);var d={};f(d,{IframeController:()=>a});module.exports=l(d);var a=class{constructor(i,e){this.container=i;this.url=e;this.iframe=document.createElement("iframe"),this.iframe.src=this.url,this.iframe.style.width="100%",this.iframe.style.height="100%",this.container.appendChild(this.iframe)}setUrl(i){this.url=i,this.iframe&&(this.iframe.src=this.url)}destroy(){this.container&&this.iframe&&this.container.removeChild(this.iframe)}sendMessage(i){this.iframe&&this.iframe.contentWindow&&this.iframe.contentWindow.postMessage(i,this.url)}};0&&(module.exports={IframeController});
//# sourceMappingURL=viewController.js.map