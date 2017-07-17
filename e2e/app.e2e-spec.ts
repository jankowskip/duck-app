import { DuckAppPage } from './app.po';

describe('duck-app App', () => {
  let page: DuckAppPage;

  beforeEach(() => {
    page = new DuckAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
