import {Button} from '../../lib/elements/button.js'
import {BasePage} from '../../lib/base.page.js'

interface IMainPageClick {
  aboutSushi?: null
  oplata?: null
  instruction?: null
}

interface IMainPage {
  click(data: IMainPageClick): Promise<void>
}

class MainPage extends BasePage {
  private aboutSushi: Button
  private oplata: Button
  private instruction: Button

  constructor() {
    super('body', 'Bento main page')
    this.aboutSushi = new Button('.top_nav [href="/page/about/"]', 'Sushi button')
    this.oplata = new Button('.top_nav [href="/page/payment-and-delivery/""]', 'Delivery button')
    this.instruction = new Button('.top_nav [href="/page/instrukciya-po-registracii-p8/"]', 'Instruction button')
  }
}

export {MainPage, IMainPage}