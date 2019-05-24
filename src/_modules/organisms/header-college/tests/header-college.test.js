'use strict';

import HeaderCollege from '../header-college';

describe('HeaderCollege View', function() {

  beforeEach(() => {
    this.headerCollege = new HeaderCollege();
  });

  it('Should run a few assertions', () => {
    expect(this.headerCollege);
  });

});
