self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('todo-v1').then(cache =>
      cache.addAll([
        '/todo/',
        '/todo/index.html',
        '/todo/manifest.json',
        '/todo/sw.js'
      ])
    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
