import { AppPage } from './app.po'

describe('ng-games App', () => {
  let page: AppPage

  beforeEach(() => {
    page = new AppPage()
  })

  it('should display header text', () => {
    page.navigateTo()
    expect(page.getTitle()).toEqual('Games')
    expect(page.getSubtitle()).toEqual('Made with Angular by hetty82')
  })
})
