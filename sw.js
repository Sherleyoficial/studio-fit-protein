/* Studio Fit Protein — funcionamento sem internet.
   Página: busca a versão nova na rede e guarda; sem rede, usa a guardada.
   Fontes e ícones: usa a cópia guardada. */
const CACHE="sfp-v4";
const ASSETS=["./","index.html","manifest.webmanifest","fonts/sora.woff2","fonts/manrope.woff2","icon-192.png","icon-512.png","apple-touch-icon.png"];
self.addEventListener("install",e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())); });
self.addEventListener("activate",e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener("fetch",e=>{
  const r=e.request; if(r.method!=="GET") return;
  const u=new URL(r.url); if(u.origin!==location.origin) return;
  const page=r.mode==="navigate"||u.pathname.endsWith("/")||u.pathname.endsWith("index.html");
  if(page){
    e.respondWith(fetch(r).then(res=>{ const cp=res.clone(); caches.open(CACHE).then(c=>c.put("index.html",cp)); return res; })
      .catch(()=>caches.match("index.html")));
  } else {
    e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>{ const cp=res.clone(); caches.open(CACHE).then(c=>c.put(r,cp)); return res; })));
  }
});
