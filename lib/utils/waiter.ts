const waiter = {
  waitForDisplayed: async (ctx) => {
    const {element, selector, name} = ctx
    await element.waitForDisplayed({
      timeout: 10000,
      interval: 1000,
      timeoutMsg: `Element by selector: "${selector}" and name: ${name} is not displayed.`,
    })
  },
  waitForClickable: async (ctx) => {
    const {element, selector, name} = ctx
    await element.waitForClickable({
      timeout: 10000,
      interval: 1000,
      timeoutMsg: `Element by selector: "${selector}" and name: ${name} is not clickable.`,
    })
  }
}

export {waiter}
