import { getDOMElementBySelector } from "./dom";

export function initMobileMenuDisplayChangesDetection() {
  let isMobileMenuOpened = false;
  const mobileMenuDOMElement = getDOMElementBySelector("#mobile-menu");

  function toggleMobileMenuDisplay() {
    isMobileMenuOpened = !isMobileMenuOpened;

    if (isMobileMenuOpened) {
      mobileMenuDOMElement.classList.remove("hidden");
    } else {
      mobileMenuDOMElement.classList.add("hidden");
    }
  }

  const hamburger = getDOMElementBySelector("#hamburger");
  hamburger.addEventListener("click", toggleMobileMenuDisplay);

  const mobileMenuCross = getDOMElementBySelector("#mobile-menu-cross");
  mobileMenuCross.addEventListener("click", toggleMobileMenuDisplay);

  const mobileMenuLinks = mobileMenuDOMElement.querySelectorAll("a");
  mobileMenuLinks.forEach((mobileMenuLink) => {
    mobileMenuLink.addEventListener("click", toggleMobileMenuDisplay);
  });
}
