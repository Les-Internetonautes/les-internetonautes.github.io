export class UnknowDOMElementSelectorError extends Error {
  /**
   * @param {String} selector
   */
  constructor(selector) {
    super(`Element with selector "${selector}" must be defined in the DOM.`);
    Object.setPrototypeOf(this, UnknowDOMElementSelectorError.prototype);
  }
}
