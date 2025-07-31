// serviceWorkerRegistration.js
// Code simplifié pour enregistrer le service worker

export function register() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(registration => {
          console.log("Service Worker enregistré avec succès:", registration);
        })
        .catch(error => {
          console.log("Échec de l'enregistrement du Service Worker:", error);
        });
    });
  }
}
