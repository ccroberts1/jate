const butInstall = document.getElementById("buttonInstall");

// Logic for installing PWA
window.addEventListener("beforeinstallprompt", (event) => {
  console.log("Install event");
  //Stores the event
  window.deferredPrompt = event;
  //Removes hidden from the butInstall element
  butInstall.classList.toggle("hidden", false);
});

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

window.addEventListener("appinstalled", (event) => {
  //Clears install prompt
  window.deferredPrompt = null;
});
