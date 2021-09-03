import { initMobileMenuDisplayChangesDetection } from "./mobile-menu-display";

function afterWindowLoading() {
  initMobileMenuDisplayChangesDetection();
}

window.addEventListener("load", afterWindowLoading);
