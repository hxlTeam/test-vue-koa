(function(e){function t(t){for(var o,c,u=t[0],i=t[1],l=t[2],s=0,p=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a=[];function c(e){return u.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"0de51c03"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e);var l=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}r[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},a=[],c=(n("7c55"),n("2877")),u={},i=Object(c["a"])(u,r,a,!1,null,null,null),l=i.exports,s=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._v(" home "),n("br"),e._v(" "+e._s(e.message)+" "),n("br"),n("button",{on:{click:e.handleClick}},[e._v("hello")])])},p=[],d=(n("b0c0"),{name:"Home",data:function(){return{message:""}},methods:{handleClick:function(){var e=this;this.$http.get("".concat(localStorage.baseURL,"/hello/hxl")).then((function(t){console.log(t),e.message=t.data.name})).catch((function(e){console.log(e)}))}}}),v=d,h=Object(c["a"])(v,f,p,!1,null,null,null),b=h.exports,m=n("bc3a"),g=n.n(m);o["a"].use(s["a"]);var y=[{path:"/",name:"Home",component:b},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],w=new s["a"]({routes:y}),_=!0;w.beforeEach((function(e,t,n){_&&g.a.get("versions.json").then((function(e){var t=e.data.versions;console.log(t),console.log(localStorage.versions),t!==+localStorage.versions&&(localStorage.versions=t,window.location.reload())})).catch((function(e){console.log(e.message)})),n()}));var j=w,O=n("2f62");o["a"].use(O["a"]);var S=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,o["a"].prototype.$http=g.a;var k=!0;localStorage.baseURL="/api",k&&g.a.get("serverConfig.json").then((function(e){var t=e.data.baseURL;localStorage.baseURL=t})).catch((function(e){console.log(e.message)})),new o["a"]({router:j,store:S,render:function(e){return e(l)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";var o=n("2395"),r=n.n(o);r.a}});
//# sourceMappingURL=app.f34c4a03.js.map