import Button from '../lib/elements/button.js'

class MainPage {
  constructor() {
    this.aboutSushi = new Button('.top_nav [href="/page/about/"]', 'Sushi button')
  }

  async clickOnAboutSuchi() {
    await this.aboutSushi.click()
  }
}

export default new MainPage()