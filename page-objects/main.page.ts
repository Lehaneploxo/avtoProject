import {Button} from '../lib/elements/button'

class MainPage {
  private aboutSushi: Button

  constructor() {
    this.aboutSushi = new Button('.top_nav [href="/page/about/"]', 'Sushi button')
  }

  async clickOnAboutSuchi() {
    await this.aboutSushi.click()
  }
}

export {MainPage}