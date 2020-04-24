const cacheName = "airhoner";
const cacheResources = [
  "/",
  "/index.html",
  "/index.html?homescreen=1",
  "/?homescreen=1",
  "/styles/main.css",
  "/scripts/main.min.js",
  "/sounds/airhorn.mp3",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(cacheResources))
  );
});
