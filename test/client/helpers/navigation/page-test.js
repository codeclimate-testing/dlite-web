'use strict';

const assert = require('assert');

import {
  pageFor,
  nextPath,
  pathForPage
} from '../../../../client/helpers/navigation/page';

import pages from '../../../../client/helpers/navigation/pages';

describe('Data helpers for page', function() {
  it('#pageFor return the value object for the page', function() {
    assert.deepEqual(pageFor('realID'), pages.getStarted[13]);
  });

  it('#pathForPage return the path of that key', function() {
    assert.deepEqual(pathForPage('realID'), pages.getStarted[13].path);
  });

  it('#nextPath return the full path given page with only one path', function() {
    assert.equal(nextPath('legalName', {}), '/apply/id-and-license/my-basics/date-of-birth');
  });

  it('#nextPath return the full path given page with a function defining its next page', function() {
    let props = {
      cardType: ['ID', 'DL'],
      cardAction: 'new',
      IDApp:{
        seniorID: ''
      }
    };

    assert.equal(
      nextPath('chooseLicenseClass', props),
      '/apply/id-and-license/reduced-fee'
    );
  });

  it('return /apply/summary if state has been passed from link', function() {
    assert.equal(
      nextPath('trueName', {location: {state: {nextAddress: '/summary'}}}),
      '/apply/id-and-license/summary'
    );
  });
});

