import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })

    it('some test', async () => {
        await browser.url('https://google.com')
        await browser.pause(5000)
        const result = await Promise.all([browser.getUrl(), browser.getUrl(), browser.getUrl()])
        console.log(result)
    })

    it.only('some test 2', async () => {
       await browser.url()
    })

    
})




