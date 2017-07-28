import { WebTandaUiPage } from './app.po';

describe('web-tanda-ui App', () => {
  let page: WebTandaUiPage;

  beforeEach(() => {
    page = new WebTandaUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
