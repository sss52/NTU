'use strict';

import SchoolHeader from '../school-header';

describe('SchoolHeader View', function() {

  beforeEach(() => {
    this.schoolHeader = new SchoolHeader();
  });

  it('Should run a few assertions', () => {
    expect(this.schoolHeader);
  });

});
