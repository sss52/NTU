'use strict';

import GlobalFootprints from '../global-footprints';

describe('GlobalFootprints View', function() {

  beforeEach(() => {
    this.globalFootprints = new GlobalFootprints();
  });

  it('Should run a few assertions', () => {
    expect(this.globalFootprints);
  });

});
