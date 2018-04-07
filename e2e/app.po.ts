import { browser, by, element } from 'protractor'

export class AppPage {
  navigateTo() {
    return browser.get('/')
  }

  getTitle() {
    return element(by.css('app-root h1')).getText()
  }

  getSubtitle() {
    return element(by.css('app-root h2')).getText()
  }
}
