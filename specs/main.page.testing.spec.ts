import {pageProvider} from '../page-objects/index.js'

describe('Main page testing', () => {
  const {mainPage} = pageProvider

  it('Should go to main page', async () => {
    await browser.url('/')
    await mainPage.click({aboutSushi: null, instruction: null})
  });

  it('Should go to main page', async () => {
    await browser.url('/')
    await mainPage.click({oplata: null, instruction: null})
  });

  it.only('Should go to main page', async () => {
    await browser.url('/')
    await mainPage.click({heart: null})
  });
});

