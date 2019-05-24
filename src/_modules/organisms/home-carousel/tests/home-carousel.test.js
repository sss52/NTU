'use strict';

import HomeCarousel from '../home-carousel';

describe('HomeCarousel View', function() {

  beforeEach(() => {
    this.homeCarousel = new HomeCarousel();
  });

  it('Should run a few assertions', () => {
    expect(this.homeCarousel);
  });

});
