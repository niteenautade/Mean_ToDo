import { AirbnbAppPage } from './app.po';

describe('airbnb-app App', () => {
  let page: AirbnbAppPage;

  beforeEach(() => {
    page = new AirbnbAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
