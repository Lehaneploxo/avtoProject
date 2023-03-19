import MainPage from '../page-objects/main.page.js'

describe('Main page testing', () => {
  it('Should go to main page', async () => {
    await browser.url('/')
    await MainPage.click()
  });
});
