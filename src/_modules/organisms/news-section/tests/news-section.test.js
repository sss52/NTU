'use strict';

import NewsSection from '../news-section';

describe('NewsSection View', function() {

  beforeEach(() => {
    this.newsSection = new NewsSection();
  });

  it('Should run a few assertions', () => {
    expect(this.newsSection);
  });

});
