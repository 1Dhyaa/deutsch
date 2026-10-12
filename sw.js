// Service Worker for Deutsch Meister — 100% Offline PWA with Instant Live Updates
const CACHE_NAME = 'deutsch-meister-mv5rf4wl';

const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/main.css',
  './css/components.css',
  './css/lesson.css',
  './css/games.css',
  './css/exams.css',
  './data/levels.js',
  './data/verbs.js',
  './data/vocabulary-master.js',
  './data/exams/index.js',
  './data/exams/a2/lesen/set-01.js',
  './audio/manifest.js?v=20261011',
  './js/utils.js',
  './js/storage.js',
  './js/i18n.js',
  './js/speech.js?v=20261011',
  './js/router.js',
  './js/quiz-engine.js',
  './js/lesson-renderer.js',
  './js/verbs-renderer.js',
  './js/exam-engine.js',
  './js/exams-renderer.js',
  './js/games/article-game.js',
  './js/games/perfekt-game.js',
  './js/games/praeteritum-game.js',
  './js/games/kasus-game.js',
  './js/games/phrases-game.js',
  './js/games/fehler-game.js',
  './js/games/satzbau-game.js',
  './js/games/dialog-game.js',
  './js/app.js',
  './images/icon-192.png',
  './images/icon-512.png'
];

// Install: Cache critical core shell assets & activate immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch(err => {
        console.warn('[SW] Some assets could not be pre-cached:', err);
      });
    })
  );
});

// Activate: Clean up old caches & take control immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Network-First for HTML/JS/CSS (always fresh when online, 100% cached when offline)
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) {
    if (url.hostname.includes('googleapis.com') || url.hostname.includes('gstatic.com')) {
      event.respondWith(
        caches.match(req).then((cached) => {
          if (cached) return cached;
          return fetch(req).then((res) => {
            const resClone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
            return res;
          }).catch(() => cached);
        })
      );
    }
    return;
  }

  // Audio/Images: Cache-First for speed
  if (url.pathname.includes('/audio/') && !url.pathname.endsWith('.js') && !url.pathname.endsWith('.json')) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const resClone = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          }
          return networkRes;
        });
      })
    );
    return;
  }

  // HTML, JS, CSS, Data: Network-First so updates appear immediately, fallback to Cache when offline
  event.respondWith(
    fetch(req).then((networkRes) => {
      if (networkRes && networkRes.status === 200 && networkRes.type === 'basic') {
        const resClone = networkRes.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(req, resClone);
        });
      }
      return networkRes;
    }).catch(() => {
      return caches.match(req, { ignoreSearch: true }).then((cached) => {
        if (cached) return cached;
        if (req.mode === 'navigate') {
          return caches.match('./index.html', { ignoreSearch: true });
        }
      });
    })
  );
});

