'use strict';

import EventCarousel from '../event-carousel';

describe('EventCarousel View', function() {

  beforeEach(() => {
    this.eventCarousel = new EventCarousel();
  });

  it('Should run a few assertions', () => {
    expect(this.eventCarousel);
  });

});
