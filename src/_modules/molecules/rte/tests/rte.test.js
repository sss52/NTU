'use strict';

import Rte from '../rte';

describe('Rte View', function() {

  beforeEach(() => {
    this.rte = new Rte();
  });

  it('Should run a few assertions', () => {
    expect(this.rte);
  });

});
