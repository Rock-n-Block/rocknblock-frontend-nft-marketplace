import $ from "../plugins/jquery/dist/jquery.min";

if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("/plugins/sw.js")
    .then(function (registration) {
      console.log(
        "ServiceWorker registration successful with scope:",
        registration.scope
      );
    })
    .catch(function (error) {
      console.log("ServiceWorker registration failed:", error);
    });
}

$(document).ready(() => {
  // eslint-disable-next-line no-console
  console.log(`document ready`);
});