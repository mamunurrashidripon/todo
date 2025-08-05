self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('todo-v1').then(cache =>
      cache.addAll(['/', '/todo/', 'index.html', 'sw.js', 'manifest.json'])
    )
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});