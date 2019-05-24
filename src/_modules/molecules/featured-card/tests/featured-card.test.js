'use strict';

import FeaturedCard from '../featured-card';

describe('FeaturedCard View', function() {

  beforeEach(() => {
    this.featuredCard = new FeaturedCard();
  });

  it('Should run a few assertions', () => {
    expect(this.featuredCard);
  });

});
