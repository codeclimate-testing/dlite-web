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
    assert.deepEqual(pageFor('realID', {flow: ''}), pages.iddl.getStarted[11]);
  });

  it('#pathForPage return the path of that key', function() {
    let props = {flow: ''};
    assert.deepEqual(pathForPage('realID', props), pages.iddl.getStarted[11].path(props));
  });
  it('#pathForPage return the edit path of that key when props.flow equals edit', function() {
    let props = { flow: 'edit'};
    assert.deepEqual(pathForPage('realID', props), pages.iddl.getStarted[11].path(props));
    assert.ok(pathForPage('realID', props).includes('/edit/'));
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

});

