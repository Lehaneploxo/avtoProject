class BaseElement {
  private selector: string
  private name: string

  constructor(selector, name) {
    this.selector = selector;
    this.name = name;
  }

  get element() {
    return $(this.selector);
  }

  async click() {
    await this.element.waitForDisplayed({
      timeout: 10000,
      interval: 1000,
      timeoutMsg: `Element by selector: "${this.selector}" and name: ${this.name} is not displayed.`,
    });
    await this.element.waitForClickable({
      timeout: 10000,
      interval: 1000,
      timeoutMsg: `Element by selector: "${this.selector}" and name: ${this.name} is not clickable.`,
    })
    await this.element.click()
  }
}

export {BaseElement}