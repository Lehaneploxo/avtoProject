import {pageProvider} from '../page-objects/index.js'

describe('Main page testing', () => {
  const {mainPage} = pageProvider

  it('Should go to main page', async () => {
    await browser.url('/')
    await mainPage.click({topSection: {aboutSushi: null}})
  });

  it('Should go to main page', async () => {
    await browser.url('/')
    await mainPage.click({topSection: {oplata: null}})
  });

  it('Should go to main page', async () => {
    await browser.url('/')
    await mainPage.click({heart: null})
  });
});

