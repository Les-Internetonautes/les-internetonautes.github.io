let isMobileMenuOpened = false;
const mobileMenu = document.querySelector("#mobile-menu");

function toggleMobileMenu() {
  isMobileMenuOpened = !isMobileMenuOpened;

  if (isMobileMenuOpened) {
    mobileMenu.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
  }
}

function initMobileMenuDisplayChangesDetection() {
  const hamburger = document.querySelector("#hamburger");
  const mobileMenuCross = document.querySelector("#mobile-menu-cross");

  hamburger.addEventListener("click", toggleMobileMenu);
  mobileMenuCross.addEventListener("click", toggleMobileMenu);
}

function main() {
  initMobileMenuDisplayChangesDetection();
}

window.addEventListener("load", main);

console.log("Test");
