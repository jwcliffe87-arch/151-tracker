const CACHE_NAME = "tracker-cache-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "https://i.postimg.cc/Kjhsytbk/logo.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
