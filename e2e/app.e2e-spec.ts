import { Rokid111Page } from './app.po';

describe('rokid111 App', () => {
  let page: Rokid111Page;

  beforeEach(() => {
    page = new Rokid111Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
