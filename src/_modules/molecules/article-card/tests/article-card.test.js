'use strict';

import ArticleCard from '../article-card';

describe('ArticleCard View', function() {

  beforeEach(() => {
    this.articleCard = new ArticleCard();
  });

  it('Should run a few assertions', () => {
    expect(this.articleCard);
  });

});
