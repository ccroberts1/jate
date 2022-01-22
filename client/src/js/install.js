const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
//TODO: Figure out variables for cacheName and cachedResources based on src-sw.js configs
window.addEventListener("beforeinstallprompt", (event) => {
  console.log("Install event");
  //Stores the event
  window.deferredPrompt = event;
  //Removes hidden from the butInstall element
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  console.log("Activate event");
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  //Prompts user to install PWA
  promptEvent.prompt();

  //Resets the deferred prompt variable and hides the button
  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("Fetch intercepted for:", event.request.url);
  //Clears install prompt
  window.deferredPrompt = null;
});
