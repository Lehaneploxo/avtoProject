import {waiter} from "./utils/waiter.js";

class BaseFragment {
  private selector: string;
  private name: string;
  private element: WebdriverIO.Element
  private parentElement: () => WebdriverIO.Element
  protected fragmentRootElement: () => WebdriverIO.Element

  constructor(parentElement: () => WebdriverIO.Element, selector: string, name: string) {
    this.selector = selector;
    this.name = name;
    this.parentElement = parentElement;
    this.fragmentRootElement = this.getCurrnetFragmentElement.bind(this)
  }

  private async setCurrenFragmentElement() {
    this.element = await this.parentElement().$(this.selector)
  }

  protected getCurrnetFragmentElement(): WebdriverIO.Element {
    return this.element
  }

  async click(data: object): Promise<void> {
    await this.setCurrenFragmentElement()
    await waiter.waitForDisplayed(this)

    for (const key of Object.keys(data)) {
      if (!this[key]) {
        throw new Error(`${this.name} does not have ${key} property`);
      }
      await this[key].click(data[key])
    }
  }
}

export { BaseFragment };
