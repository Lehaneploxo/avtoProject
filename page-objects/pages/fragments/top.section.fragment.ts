import {BaseFragment} from "../../../lib/base.fragment.js";
import {Button} from "../../../lib/elements/button.js";

interface ITopSectionFragmentClick {
  aboutSushi?: null
  oplata?: null
  instruction?: null
}

class TopSectionFragment extends BaseFragment {
  private aboutSushi: Button
  private oplata: Button
  private instruction: Button

  constructor(parentElement, selector, name) {
    super(parentElement, selector, name)
    this.aboutSushi = new Button(this.fragmentRootElement, '.top_nav [href="/page/about/"]', 'Sushi button')
    this.oplata = new Button(this.fragmentRootElement, '.top_nav [href="/page/payment-and-delivery/"]', 'Delivery button')
    this.instruction = new Button(this.fragmentRootElement, '.top_nav [href="/page/instrukciya-po-registracii-p8/"]', 'Instruction button')
  }
}

export {TopSectionFragment, ITopSectionFragmentClick}
