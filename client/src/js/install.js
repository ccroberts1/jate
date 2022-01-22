const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
//TODO: Figure out variables for cacheName and cachedResources based on src-sw.js configs
window.addEventListener("beforeinstallprompt", (event) => {
  console.log("Install event");
  //   event.waitUntil(
  //     caches.open(page-cache).then((cache) => {
  //       return cache.addAll(cachedResources);
  //     })
  //   );
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  console.log("Activate event");
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("Fetch intercepted for:", event.request.url);
});

//Code for offline loading from GCD PW training
// window.addEventListener("fetch", event => {
//     event.respondWith(caches.match(event.request)
// .then(cachedResponse => {
//     return cachedResponse || fetch(event.request)
// }));
// })
