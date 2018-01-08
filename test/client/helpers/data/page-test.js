'use strict';

const assert = require('assert');

import {
  pageFor,
  nextPath,
  pathForPage
} from '../../../../client/helpers/data/page';

import pages from '../../../../client/helpers/data/pages';

describe('Data helpers for page', function() {
  it('#pageFor return the value object for the page', function() {
    assert.deepEqual(pageFor('realID'), pages.getStarted[9]);
  });

  it('#pathForPage return the path of that key', function() {
    assert.deepEqual(pathForPage('realID'), pages.getStarted[9].path);
  });

  it('#nextPath return the full path given page with only one path', function() {
    assert.equal(nextPath('trueName', {}), '/apply/my-basics/date-of-birth');
  });

  it('#nextPath return the full path given page with a function defining its next page', function() {
    let props = {
      cardType: {
        new: ['ID', 'DL'],
        renew: ''
      },
      cardAction: 'new'
    };

    assert.equal(
      nextPath('chooseLicenseClass', props),
      '/apply/reduced-fee'
    );
  });

  it('return /apply/summary if editMode is turned on', function() {
    assert.equal(
      nextPath('trueName', {editMode: true}),
      '/apply/summary'
    );
  });
});

