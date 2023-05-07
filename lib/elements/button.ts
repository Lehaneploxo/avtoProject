import {BaseElement} from '../base.element.js'

class Button extends BaseElement {
  constructor(parentElement: () => WebdriverIO.Element, selector: string, name: string) {
    super(parentElement, selector, name)
  }
}

export {Button}