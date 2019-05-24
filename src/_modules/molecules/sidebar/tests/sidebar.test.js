'use strict';

import Sidebar from '../sidebar';

describe('Sidebar View', function() {

  beforeEach(() => {
    this.sidebar = new Sidebar();
  });

  it('Should run a few assertions', () => {
    expect(this.sidebar);
  });

});
