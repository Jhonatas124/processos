// Endereço aposentado em 28/10/2026: este service worker se desinstala e limpa o cache; o app mora em https://servidor.tail0f0b22.ts.net/processos/
self.addEventListener("install", function(e){ self.skipWaiting(); });
self.addEventListener("activate", function(e){ e.waitUntil(caches.keys().then(function(ks){ return Promise.all(ks.map(function(k){ return caches.delete(k); })); }).then(function(){ return self.registration.unregister(); }).then(function(){ return self.clients.matchAll({type:"window"}); }).then(function(cs){ cs.forEach(function(c){ c.navigate(c.url); }); })); });
