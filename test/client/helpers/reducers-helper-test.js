'use strict';

import assert from 'assert';
import {
  cardTypeAction
} from '../../../client/helpers/reducers';

describe('reducer helper functions', function() {
  let action;
  beforeEach(function() {
    action = {
      type: ''
    }
  });

  describe('#cardTypeAction', function() {
    it('returns true if type is UPDATE_CARD_TYPE', function() {
      action.type = 'UPDATE_CARD_TYPE';
      assert.equal(cardTypeAction(action), true);
    });
    it('returns true if type is UPDATE_CARD_ACTION', function() {
      action.type = 'UPDATE_CARD_ACTION';
      assert.equal(cardTypeAction(action), true);
    });
    it('returns true if type is UPDATE_YOUTH_ID_INSTEAD', function() {
      action.type = 'UPDATE_YOUTH_ID_INSTEAD';
      assert.equal(cardTypeAction(action), true);
    });
    it('returns false if type is neither UPDATE_CARD_TYPE, UPDATE_CARD_ACTION, or UPDATE_YOUTH_ID_INSTEAD', function() {
      action.type = 'UPDATE_SOMETHING_ELSE';
      assert.equal(cardTypeAction(action), false);
    });
  });
});

