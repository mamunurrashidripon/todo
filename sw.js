self.addEventListener('install', e => {
  console.log('Service Worker installed');
  // Precache minimal app shell if desired (optional)
  e.waitUntil(
    caches.open('todo-v1').then(cache => {
      return cache.addAll([
        '/todo/',
        '/todo/index.html',
        '/todo/manifest.json',
        '/todo/sw.js'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
