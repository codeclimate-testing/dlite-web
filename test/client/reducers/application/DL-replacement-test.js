'use strict';

import assert               from 'assert';
import updateReplacement    from '../../../../client/reducers/application/dl-app/update-replacement';

const IDReplacement = {
  type: 'UPDATE_CARD_REPLACEMENT',
  payload: {
    name: 'ID',
    value: 'a reason'
  }
};

const DLReplacement = {
  type: 'UPDATE_CARD_REPLACEMENT',
  payload: {
    name: 'DL',
    value: 'another reason'
  }
};

describe('DL replacement reason', function() {
  let state;

  beforeEach(function() {
    state = '';
  });

  it('returns the action payload value if action payload name is DL', function() {
    let newState = updateReplacement(state, DLReplacement);
    assert.equal(newState.reason, DLReplacement.payload.value);
  });

  it('returns existing state if action payload name is ID', function(){
    let newState = updateReplacement(state, IDReplacement);
    assert.equal(newState, state);
  });
});