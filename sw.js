const CACHE = 'guicks-v1';
const SHELL = [
  '/',
  '/index.html',
  '/guicks-qr.html',
  '/guicks-currency.html',
  '/guicks-converter.html',
  '/guicks-calculator.html',
  '/guicks-password.html',
  '/guicks-tip.html',
  '/guicks-weather.html',
  '/guicks-image.html',
  '/guicks-translate.html',
  '/guicks-clock.html',
  '/guicks-calendar.html',
  '/guicks-notes.html',
  '/guicks-reminders.html',
  '/guicks-shopping.html',
  '/guicks-favorites.html',
  '/guicks-lucky.html',
  '/guicks-stocks.html',
  '/icon-192x192.png',
  '/icon-512x512.png',
  '/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Network-first for API calls, cache-first for app shell
  const url = new URL(e.request.url);
  const isAPI = url.hostname !== self.location.hostname;

  if (isAPI) {
    // Network first, fall back to nothing (APIs need live data)
    e.respondWith(fetch(e.request).catch(() => new Response('', { status: 503 })));
  } else {
    // Cache first, fall back to network then cache result
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(res => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return res;
        });
      })
    );
  }
});
