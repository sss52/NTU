'use strict';

import VideoBox from '../video-box';

describe('VideoBox View', function() {

  beforeEach(() => {
    this.videoBox = new VideoBox();
  });

  it('Should run a few assertions', () => {
    expect(this.videoBox);
  });

});
