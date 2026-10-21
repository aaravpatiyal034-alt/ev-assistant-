const CACHE_NAME = 'ev-os-v1';
const assetsToCache = [
  './index.html',
  './manifest.json'
  // If you have separate CSS or JS files, add their paths here too (e.g., './style.css', './app.js')
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Fetch Event (Serves cached files offline/fast)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
