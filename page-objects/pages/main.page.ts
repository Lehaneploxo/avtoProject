import {Button} from '../../lib/elements/button.js'
import {BasePage} from '../../lib/base.page.js'
import {ITopSectionFragmentClick, TopSectionFragment} from './fragments/top.section.fragment.js'

interface IMainPageClick {
  pdfMenu?: null
  requestCall?: null
  enter?: null
  basket?: null
  menu?: null
  novelties?: null
  popular?: null
  downloadPDFMenu?: null
  heart?: null
  topSection?: ITopSectionFragmentClick
}

interface IMainPage {
  click(data: IMainPageClick): Promise<void>
}

class MainPage extends BasePage {
  private pdfMenu: Button
  private requestCall: Button
  private enter: Button
  private basket: Button
  private menu: Button
  private novelties: Button
  private popular: Button
  private downloadPDFMenu: Button
  private heart: Button
  private topSection: TopSectionFragment

  constructor() {
    super('body', 'Bento main page')
    this.topSection = new TopSectionFragment(this.pageRootElement, '.top_section', 'Top section')
    this.pdfMenu = new Button(this.pageRootElement, '.site_button', 'PDF Menu button')
    this.requestCall = new Button(this.pageRootElement, '.contactCenterBtn', 'Request Call button')
    this.enter = new Button(this.pageRootElement, '.authorizationLink', 'Enter button')
    this.basket = new Button(this.pageRootElement, '.cartBlock', 'Basket button')
    this.menu = new Button(this.pageRootElement, '.catalogBlock', 'Menu button')
    this.novelties = new Button(this.pageRootElement, '#tab-1', 'Novelties button')
    this.popular = new Button(this.pageRootElement, '#tab-2', 'Popular button')
    this.downloadPDFMenu = new Button(this.pageRootElement, '.contactCenterBtn', 'Download the PDF menu button')
    this.heart = new Button(this.pageRootElement, '.fa-heart-o', 'heart button')
  }
}

export {MainPage, IMainPage}