import {Button} from '../../lib/elements/button.js'
import {BasePage} from '../../lib/base.page.js'

interface IMainPageClick {
  aboutSushi?: null
  oplata?: null
  instruction?: null
  pdfMenu?: null
  requestCall?: null
  enter?: null
  basket?: null 
  menu?: null
  novelties?: null
  popular?: null
  downloadPDFMenu?: null
  heart?: null
}

interface IMainPage {
  click(data: IMainPageClick): Promise<void>
}

class MainPage extends BasePage {
  private aboutSushi: Button
  private oplata: Button
  private instruction: Button
  private pdfMenu: Button
  private requestCall: Button
  private enter: Button
  private basket: Button
  private menu: Button
  private novelties: Button
  private popular: Button
  private downloadPDFMenu: Button
  private heart: Button

  constructor() {
    super('body', 'Bento main page')
    this.aboutSushi = new Button('.top_nav [href="/page/about/"]', 'Sushi button')
    this.oplata = new Button('.top_nav [href="/page/payment-and-delivery/"]', 'Delivery button')
    this.instruction = new Button('.top_nav [href="/page/instrukciya-po-registracii-p8/"]', 'Instruction button')
    this.pdfMenu = new Button('.site_button', 'PDF Menu button')
    this.requestCall = new Button('.contactCenterBtn', 'Request Call button')
    this.enter = new Button('.authorizationLink', 'Enter button')
    this.basket = new Button('.cartBlock', 'Basket button')
    this.menu = new Button('.catalogBlock', 'Menu button')
    this.novelties = new Button('#tab-1', 'Novelties button')
    this.popular = new Button('#tab-2', 'Popular button')
    this.downloadPDFMenu = new Button('.contactCenterBtn', 'Download the PDF menu button') 
    this.heart = new Button('.fa-heart-o', 'heart button')
  }
}

export {MainPage, IMainPage}