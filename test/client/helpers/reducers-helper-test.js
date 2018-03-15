'use strict';

import assert from 'assert';
import {
  cardTypeAction,
  trueIfYesNeverFalse,
  sameIfAdding,
  realID
} from '../../../client/helpers/reducers';

describe('reducer helper functions', function() {
  let action;
  const state = {
    key: 'value'
  };
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

  describe('#trueIfYesNeverFalse', function() {
    it('returns true if value matches the type', function() {
      assert.equal(trueIfYesNeverFalse('ID', 'ID', state), true);
    });
    it('returns state if value does not match the type', function() {
      assert.equal(trueIfYesNeverFalse('ID', 'DL', state), state);
    });
  });

  describe('#sameIfAdding', function() {
    it('returns false if name does not match "IDAction" or "DLAction" or "newFlow"', function() {
      assert.equal(sameIfAdding('bothCards', state), false);
    });
    it('returns state if name is IDAction', function() {
      assert.equal(sameIfAdding('IDAction', state), state);
    });
    it('returns state if name is DLAction', function() {
      assert.equal(sameIfAdding('DLAction', state), state);
    });
    it('returns state if name is newFlow', function() {
      assert.equal(sameIfAdding('newFlow', state), state);
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

