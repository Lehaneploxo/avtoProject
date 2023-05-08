import {waiter} from "./utils/waiter.js";

class BasePage {
  private selector: string;
  private name: string;
  private element: WebdriverIO.Element
  protected pageRootElement: () => WebdriverIO.Element

  constructor(selector: string, name: string) {
    this.selector = selector;
    this.name = name;
    this.pageRootElement = this.getCurrnetPageElement.bind(this)
  }

  private async setCurrentPageElement() {
    this.element = await $(this.selector)
  }

  protected getCurrnetPageElement(): WebdriverIO.Element {
    return this.element
  }

  async click(data: object): Promise<void> {
    await this.setCurrentPageElement()
    await waiter.waitForDisplayed(this)

    for (const key of Object.keys(data)) {
      if (!this[key]) {
        throw new Error(`${this.name} does not have ${key} property`);
      }
      await this[key].click(data[key])
    }
  }
}

export { BasePage };
