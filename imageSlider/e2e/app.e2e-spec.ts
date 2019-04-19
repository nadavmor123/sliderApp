import { ImageSliderPage } from './app.po';

describe('image-slider App', () => {
  let page: ImageSliderPage;

  beforeEach(() => {
    page = new ImageSliderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
