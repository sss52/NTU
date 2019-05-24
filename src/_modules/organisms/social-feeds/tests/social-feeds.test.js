'use strict';

import SocialFeeds from '../social-feeds';

describe('SocialFeeds View', function() {

  beforeEach(() => {
    this.socialFeeds = new SocialFeeds();
  });

  it('Should run a few assertions', () => {
    expect(this.socialFeeds);
  });

});
