import {waiter} from "./utils/waiter.js";

class BaseElement {
  private selector: string
  private name: string
  private element: WebdriverIO.Element
  private parentElement: () => WebdriverIO.Element

  constructor(parentElement: () => WebdriverIO.Element, selector: string, name: string) {
    this.selector = selector;
    this.name = name;
    this.parentElement = parentElement;
  }

  private async setCurrenElement() {
    this.element = await this.parentElement().$(this.selector)
  }

  protected getCurrnetElement(): WebdriverIO.Element {
    return this.element
  }

  private async waitDisplayed() {
    await waiter.waitForDisplayed(this)
  }

  private async waitClickable() {
    await waiter.waitForClickable(this)
  }

  async click() {
    await this.setCurrenElement()
    await this.waitDisplayed()
    await this.waitClickable()
    await this.element.click()
  }
}

export {BaseElement}