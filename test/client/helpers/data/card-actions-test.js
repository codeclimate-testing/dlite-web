'use strict';

const assert = require('assert');

import {
  hasExistingCard,
} from '../../../../client/helpers/data/card-actions';

describe('Data helpers for card actions', function() {
  it('#hasExistingCard should be true if the card action is something other than new', function() {
    let data = {
      cardAction: 'renew'
    };
    assert.equal(hasExistingCard(data), true);
  });

  it('#hasExistingCard should be false if the card action is new', function() {
    let data = {
      cardAction: 'new'
    };
    assert.equal(hasExistingCard(data), false);
  });
});
