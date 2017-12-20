'use strict';

import assert from 'assert';

import {
  hasMultipleCards
} from '../../../../client/helpers/data/cards';

describe('Data helpers for cards', function() {
  it('is true when DL and ID are true', function() {
    assert(
      hasMultipleCards({cardType: {DL: true, ID: true}}),
      'not true when both cards selected'
    );
  });

  it('is false when DL is false', function() {
    assert(
      !hasMultipleCards({cardType: {DL: false, ID: true}}),
      'true when DL is false'
    );
  });

  it('is false when ID is false', function() {
    assert(
      !hasMultipleCards({cardType: {DL: true, ID: false}}),
      'true when ID is false'
    );
  });
});
