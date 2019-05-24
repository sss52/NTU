'use strict';

import SchoolBanner from '../school-banner';

describe('SchoolBanner View', function() {

  beforeEach(() => {
    this.schoolBanner = new SchoolBanner();
  });

  it('Should run a few assertions', () => {
    expect(this.schoolBanner);
  });

});
