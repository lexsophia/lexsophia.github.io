/* LexSophia PWA Service Worker — Network-First (never serves stale HTML when online) */
const CACHE_NAME = 'lexsophia-shell-v15';
const CORE_ASSETS = [
  '/',
  '/assets/lexsophia-data.js',
  '/favicon.svg',
  '/favicon.png',
  '/icon-512.png',
  '/apple-touch-icon.png',
  '/manifest.json',
  '/img/owl-amber.png',
  '/img/owl-pink.png',
  '/img/owl-blue.png',
  '/img/owl-violet.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .catch(() => {})
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Never intercept cross-origin requests (Supabase Auth/DB, Google Fonts, Feedback Apps Script, CDN)
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(req)
      .then(res => {
        if (res && res.ok && (req.mode === 'navigate' || url.pathname.startsWith('/img/') || url.pathname.startsWith('/assets/') || url.pathname.startsWith('/seo-assets/') || CORE_ASSETS.includes(url.pathname))) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, clone)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(req).then(cached => cached || caches.match('/')))
  );
});
