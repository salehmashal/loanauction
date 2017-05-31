import { LoanauctionPage } from './app.po';

describe('loanauction App', () => {
  let page: LoanauctionPage;

  beforeEach(() => {
    page = new LoanauctionPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
