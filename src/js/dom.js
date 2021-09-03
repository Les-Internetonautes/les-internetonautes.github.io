import { UnknowDOMElementSelectorError } from "./errors";

/**
 * Return an element or thow an error if not found.
 * @param {String} selector
 */
export function getDOMElementBySelector(selector) {
  const domElement = document.querySelector(selector);
  if (!domElement) {
    throw new UnknowDOMElementSelectorError(selector);
  }
  return domElement;
}
