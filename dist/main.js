(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,":root {\n    --mainColour: #a1fffc6b;\n    --secondaryColour: #fff4f4;\n    --backgroundColour: #ffffff;\n}\n\n\n\nhtml {\n    height: 100vh;\n}\n\nbody {\n    font: monospace;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0;\n    margin: 0;\n\n    background-color: rgba(226, 184, 125, 0.868);\n    \n}\n.mainCard {\n    position: relative;\n    display: grid;\n\n    background-color: var(--backgroundColour);\n    width: 74em;\n    height: 45em;\n    border-radius: 2em;\n    grid-template-columns: repeat(4, 1fr);\n    \n\n    box-shadow: 0px 0px 4px rgb(110, 110, 110);\n\n\n    \n}\n.sidebar {\n    display: grid;\n    grid-column: 1/2;\n    border-top-left-radius: 2em;\n    border-bottom-left-radius: 2em;\n    background-color: var(--mainColour);\n\n    grid-template-rows: 2fr 2fr 1fr;\n\n    justify-content: center;\n    align-items: center;\n}\n\n.contentContainer {\n    grid-column: 2/5;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.contentCard {\n    background-color: var(--mainColour);\n\n    border-radius: 2em;\n    width: 50em;\n    height: 40em;\n}\n\n.sidebar > div {\n    justify-self: center;\n    align-self: center;\n}\n\n.sidebarOption {\n    background-color: var(--secondaryColour);\n\n    display: flex;\n    margin: 6px;\n    border: 1px solid black;\n    justify-content: center;\n    align-items: center;\n    \n    border-radius: 0.8em;\n    width: 14em;\n    height: 4em;\n}\n.form-popup {\n    display: none;\n    position: absolute;\n    top: 40%;  /* position the top  edge of the element at the middle of the parent */\n    left: 50%; /* position the left edge of the element at the middle of the parent */\n    transform: translate(-50%, -50%);\n    border: 1px solid black;\n\n    width: 30em;\n    height: 20em;\n\n}\n",""]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),s=t(56),c=t.n(s),d=t(540),l=t.n(d),u=t(113),p=t.n(u),f=t(365),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.A,m),f.A&&f.A.locals&&f.A.locals;const v=(n,e,t)=>{const r={};return r.name=n,r.description=e,r.priority=t,console.log("createtask"),r},h=v("wuf","asd","asd");console.log(h.name);const g=[];!function(){const n=document.getElementById("form-popup");document.getElementById("createTaskButton").addEventListener("click",(function(){n.style.display="block"})),n.addEventListener("submit",(e=>{e.preventDefault(),n.style.display="none";let t=document.getElementById("taskName"),r=document.getElementById("taskDescription"),o=document.getElementById("priority");const a=v(t.value,r.value,o.value);g.push(a),console.log(g)}))}()})()})();