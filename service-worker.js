if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let f={};const s=e=>a(e,d),n={module:{uri:d},exports:f,require:s};i[d]=Promise.all(c.map((e=>n[e]||s(e)))).then((e=>(r(...e),f)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"b6c7ed0709dbaabfa722b0d622ca7318"},{url:"archives/2022/08/index.html",revision:"47fa1d8da55dc3f0e203ceabcbe60709"},{url:"archives/2022/index.html",revision:"35d4705a5dcaf584520f28dafa2bcad8"},{url:"archives/index.html",revision:"f183eaf2033ab0281ca2f47d83c94fcf"},{url:"categories/index.html",revision:"73347815fecf9c2a491c68316a0697eb"},{url:"css/custom.css",revision:"ce9c4d85e8104f0e7afd71953ecb24bf"},{url:"css/index.css",revision:"7bb27801a080dc603fbe227c1d61bbba"},{url:"css/universe.css",revision:"64d924471ddf19905ea30ae8cbd664ec"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"9e5b6446d559e575b497ff8e977e21eb"},{url:"Gallery/wallpaper.html",revision:"ad700b596e08b70e422408d31c8df856"},{url:"img/alipay.jpg",revision:"2cb7f0012587fd1b9ae87a4632da9ba5"},{url:"img/home.jpg",revision:"8f4008c517453dd5d839d83aa6fc88ad"},{url:"img/pwa/144.png",revision:"4d65c16348b866fdcba84509fbfdc6f4"},{url:"img/pwa/16.png",revision:"1b6a0705f8bce5919d95ce66f8f23c38"},{url:"img/pwa/192.png",revision:"750bf0ee4f8bf5b6497f98c994ba097d"},{url:"img/pwa/32.png",revision:"359bae02cd5d6e1b06e2d17d821f8bcb"},{url:"img/pwa/36.png",revision:"30b0b5f444fa8f1fc82299738ff73426"},{url:"img/pwa/48.png",revision:"537748a6059b26d8bec1fb5c7268f9be"},{url:"img/pwa/512.png",revision:"fd212fe4cc3b463866d59cbd3c1c1f33"},{url:"img/pwa/72.png",revision:"7a9a49a0f1123c5e141baee65ef7a606"},{url:"img/pwa/96.png",revision:"a13feeb2c4ff002649dcda63341cd739"},{url:"img/pwa/apple-touch-icon.png",revision:"d635320dc729bbc9a8e9153d9b4bbaf7"},{url:"img/pwa/safari-pinned-tab.svg",revision:"827c64980d0b12035a99b507e0dcfaae"},{url:"img/topicon.jpg",revision:"38005716f8a0e7f83a9193ea8f256691"},{url:"img/webicon.png",revision:"6322cee6ba3685f2f13ea9cb31f87660"},{url:"img/wechat.jpg",revision:"9fed4ce9d1d59890b9f9ffb33ecb56eb"},{url:"index.html",revision:"6b1d24de98f56e9ff012a0dad25230f5"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"34495d6790714a0e2d773d1d7fdcf21e"},{url:"post/38c422a2.html",revision:"5ce413399af737e85332bddf549c621a"},{url:"post/51a49a1d.html",revision:"cac2856005ede378e1adca4358ac735b"},{url:"tags/index.html",revision:"66f5c7694009227f20aa21a03efb3676"},{url:"tags/文学/index.html",revision:"89eadc3497d1f41ed986a7ee09936d09"},{url:"tags/闲聊/index.html",revision:"ad40acd33ee3fa490f36c8cafb52c21e"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
