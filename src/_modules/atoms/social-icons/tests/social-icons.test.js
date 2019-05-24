'use strict';

import SocialIcons from '../social-icons';

describe('SocialIcons View', function() {

  beforeEach(() => {
    this.socialIcons = new SocialIcons();
  });

  it('Should run a few assertions', () => {
    expect(this.socialIcons);
  });

});
