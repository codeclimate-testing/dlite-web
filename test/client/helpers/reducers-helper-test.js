'use strict';

import assert from 'assert';
import {
  cardTypeAction,
  realID
} from '../../../client/helpers/reducers';

describe('reducer helper functions', function() {
  let action;
  beforeEach(function() {
    action = {
      type: '',
      payload: {
        value: '',
        name: ''
      }
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

  describe('#realID', function() {
    let state;
    beforeEach(function() {
      state = 'No';
      action.type = 'UPDATE_REAL_ID';
    });
    describe('#payload name is realIDDesignation', function() {
      it('returns "Yes" if the payload value matches the type argumenet', function() {
        action.payload.name = 'realIdDesignation';
        action.payload.value = 'ID';
        assert.equal(realID(state, action, 'ID'), 'Yes');
      });
      it('returns "No" if the payload value does not match the type argument', function() {
        action.payload.value = 'DL';
        action.payload.name = 'realIdDesignation';
        assert.equal(realID(state, action, 'ID'), 'No');
      });
    });
    describe('#payload name is a card type', function(){
      it('returns the payload value if the name equals the type argument', function() {
        action.payload.value = 'Yes';
        action.payload.name = 'ID';
        assert.equal(realID(state, action, 'ID'), action.payload.value);
      });
      it('returns the payload value if the name is "both"', function() {
        action.payload.value = 'Yes';
        action.payload.name = 'both';
        assert.equal(realID(state, action, 'ID'), action.payload.value);
      });
      it('returns the existing state if the payload name does not match the type argument and is not "both"', function() {
        action.payload.value = 'Yes';
        action.payload.name = 'DL';
        assert.equal(realID(state, action, 'ID'), state);
      });
    })
  });
});

