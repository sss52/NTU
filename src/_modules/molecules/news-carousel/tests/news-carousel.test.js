'use strict';

import NewsCarousel from '../news-carousel';

describe('NewsCarousel View', function() {

  beforeEach(() => {
    this.newsCarousel = new NewsCarousel();
  });

  it('Should run a few assertions', () => {
    expect(this.newsCarousel);
  });

});
