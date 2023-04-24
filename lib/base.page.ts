class BasePage {
  private selector: string;
  private name: string;

  constructor(selector: string, name: string) {
    this.selector = selector;
    this.name = name;
  }

  get element() {
    return $(this.selector);
  }

  async click(data: object): Promise<void> {
    await this.element.waitForDisplayed({
      timeout: 10000,
      interval: 1000,
      timeoutMsg: `Page by selector: "${this.selector}" and name: ${this.name} is not displayed.`,
    });

    for (const key of Object.keys(data)) {
      if (!this[key]) {
        throw new Error(`${this.name} does not have ${key} property`);
      }
      await this[key].click(data[key])
    }
  }
}

export { BasePage };
