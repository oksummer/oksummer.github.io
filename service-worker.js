if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let f={};const l=e=>s(e,a),d={module:{uri:a},exports:f,require:l};i[a]=Promise.all(r.map((e=>d[e]||l(e)))).then((e=>(c(...e),f)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"5a6f60f991517d2e6d1eb830b820f119"},{url:"archives/2022/08/index.html",revision:"d09b6e7693e8beff4a614bec6ec20ada"},{url:"archives/2022/index.html",revision:"63483f9ce5773c0c04e0704a2f20c575"},{url:"archives/index.html",revision:"e33a334010c39089c109963d4efa9a41"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"13bb212bbf96e8c46b1c410b32c37f4c"},{url:"css/index.css",revision:"30ed3cc3687cab26653f4d47106a2647"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"5dae116dfcac346e8372a84b2279d69a"},{url:"Gallery/wallpaper.html",revision:"0410d2139b4ccae6447929239f577a85"},{url:"img/alipay.jpg",revision:"2cb7f0012587fd1b9ae87a4632da9ba5"},{url:"img/home.jpg",revision:"effe77fee9e93a30e09c9f1e07468233"},{url:"img/wechat.jpg",revision:"9fed4ce9d1d59890b9f9ffb33ecb56eb"},{url:"index.html",revision:"286f0a698c96393099c07f7a27f34006"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"47fb655b72f2cbade3ddaa930a134744"},{url:"post/38c422a2.html",revision:"84c83e8158eeba53d202a195ca065e2f"},{url:"tags/index.html",revision:"2a9af3b7a1ce058d35bd4969f704b6e9"},{url:"tags/闲聊/index.html",revision:"052cf26043fb496c2e0914a4282f0e90"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
