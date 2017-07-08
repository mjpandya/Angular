import { BiGBANGWorldPage } from './app.po';

describe('bi-gbangworld App', () => {
  let page: BiGBANGWorldPage;

  beforeEach(() => {
    page = new BiGBANGWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
