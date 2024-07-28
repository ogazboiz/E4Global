const CACHE_NAME = 'my-cache-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/images/logo.png'
];

// Install event - caching assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

// Activate event - cleanup old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating.');
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serving cached resources
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-data') {
      event.waitUntil(
        // Logic to sync data
      );
    }
  });
  
  self.addEventListener('push', (event) => {
    const data = event.data.json();
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon
    });
  });

  self.addEventListener('fetch', (event) => {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  });
  
  