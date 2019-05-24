'use strict';

import Excellence from '../excellence';

describe('Excellence View', function() {

  beforeEach(() => {
    this.excellence = new Excellence();
  });

  it('Should run a few assertions', () => {
    expect(this.excellence);
  });

});
