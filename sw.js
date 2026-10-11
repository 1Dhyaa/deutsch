// Service Worker for Deutsch Meister — 100% Offline PWA for iPhone & PC
const CACHE_NAME = 'deutsch-meister-v1';

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
  './js/speech.js?v=20261011',
  './js/router.js',
  './js/quiz-engine.js',
  './js/lesson-renderer.js',
  './js/verbs-renderer.js',
  './js/exam-engine.js',
  './js/exams-renderer.js',
  './js/app.js',
  './images/icon-192.png',
  './images/icon-512.png'
];

// Install: Cache critical core shell assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching core offline assets...');
      return cache.addAll(STATIC_ASSETS).catch(err => {
        console.warn('[SW] Some assets could not be pre-cached:', err);
      });
    })
  );
  self.skipWaiting();
});

// Activate: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch: Cache-First strategy with Network fallback and dynamic caching
self.addEventListener('fetch', (event) => {
  const req = event.request;
  
  // Only handle GET requests
  if (req.method !== 'GET') return;

  // Skip external cross-origin APIs (like ElevenLabs API calls or OpenAI)
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) {
    // For external fonts or cdn, cache on demand
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

  // Local assets: Cache-First
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(req).then((networkRes) => {
        if (!networkRes || networkRes.status !== 200 || networkRes.type !== 'basic') {
          return networkRes;
        }
        const resClone = networkRes.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(req, resClone);
        });
        return networkRes;
      }).catch((err) => {
        // Fallback for offline navigation
        if (req.mode === 'navigate') {
          return caches.match('./index.html');
        }
        throw err;
      });
    })
  );
});
