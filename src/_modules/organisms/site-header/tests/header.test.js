'use strict';

import SiteHeader from '../header';

describe('Header View', function() {

  beforeEach(() => {
    this.header = new SiteHeader();
  });

  it('Should run a few assertions', () => {
    expect(this.header);
  });

});
