import {MainPage, IMainPage} from './pages/main.page.js'

const pageProvider = {
  mainPage: new MainPage() as IMainPage
}

export {pageProvider}