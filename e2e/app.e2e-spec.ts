import { AppwebPage } from './app.po';

describe('appweb App', () => {
  let page: AppwebPage;

  beforeEach(() => {
    page = new AppwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
