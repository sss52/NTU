'use strict';

import Research from '../research';

describe('Research View', function() {

  beforeEach(() => {
    this.research = new Research();
  });

  it('Should run a few assertions', () => {
    expect(this.research);
  });

});
